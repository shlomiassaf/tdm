import * as ts from 'typescript';
import * as utils from 'tsutils';
import { TsExt } from './util';

/**
 * Instructions, in the form of comment, for a TypeScript Error to expect from the expression the comment decorates.
 *
 * An error definition contains instruction for a TypeScript semantic error that is caused by the expression
 * that the comment decorates, this includes the error number/id and the position.
 *
 * Positioning is defined by the line and character which point to the exact location of the semantic error
 *
 * The line and character are always RELATIVE to their closest parent and not to the document.
 * The line and character are set in base 1 (IDE's visualize in base 1 as well as TS diagnostic messages)
 *
 * Position format: LINE:CHAR or CHAR
 * When line is 1 you can omit it and set the character only.
 *
 * ## Exapmles:
 *
 * #### Single line:
 *
 * /**
 *  * @typeTest
 *  * @tsError 2322
 *  * @loc 7
 *  * /
 *  const x: string = 15;
 *  ^^^^^^7
 *
 *
 * #### Single-Line & Multi-Error:
 * /**
 *  * @typeTest extend action
 *  * @tsError 2322
 *  * @loc 7
 *  * /
 * /**
 *  * @typeTest extend action
 *  * @tsError 2304
 *  * @loc 25
 *  * /
 * const x: string = (15 + notSet) as number;
 *
 * #### Multi-Line:
 *
 *  /**
 *  * @typeTest
 *  * @tsError 2322
 *  * @loc 3:11
 *  * /
 *  const x: Promise<string> = Promise.resolve('str')
 *    .then( value => {
 *      const y: number = value;
 *      return value;
 *   });
 * Error is on the 3rd row of the multi-line expression, starting from row 1 (base 1)
 *
 *
 * #### Multi-Line & Multi-Error:
 *
 *  /**
 *  * @typeTest
 *  * @tsError 2322
 *  * @loc 7
 *  * /
 *  /**
 *  * @typeTest
 *  * @tsError 2322
 *  * @loc 3:11
 *  * /
 *  const x: Promise<string> = Promise.resolve('str')
 *    .then( value => {
 *      const y: number = value;
 *      return y;
 *   });
 */
export interface SemanticErrorMatch {
  /**
   * The line offset/index the error is at, relative to the beginning of the expression.
   * This value is optional and does not have any effect on a single-line expression.
   *
   * If set, it must be followed by a char using the format LINE:CHAR.
   *
   */
  line: number;

  /**
   * The error character position offset relative to the line.
   * The offset is always relative to the line it is defined on, this is also true on multi-line expressions.
   * Offset is set in base 1.
   *
   * The char offset is mandatory.
   *
   * This logic is easier to reason about. Position of errors are relative to each comment / line and not to the whole
   * file, which might change... it is also easier to understand.
   */
  char: number;

  /**
   * The semantic error number (id) that typescript will throw
   */
  tsError: number;

  /**
   * An optional message, if set the library will try to match it to the TypeScript error.
   * A Full match is required.
   */
  tsErrorMsg?: string;
}
function isSemanticErrorMatch(value: any): value is SemanticErrorMatch {
  return value.tsError || value.tsError === 0;
}

export interface SemanticTypeMatch {
  line: number;
  char: number;
  tsType: string;
}
function isSemanticTypeMatch(value: any): value is SemanticTypeMatch {
  return !!value.tsType;
}

export type SemanticMatch = SemanticErrorMatch | SemanticTypeMatch;

export interface SemanticMatchExpression {
  code: {
    line: number;
    text: string;
  };
}

const TEST_DESC_RE = /TS[0-9]+/;

function flattenDMC(root: ts.Diagnostic, dmc: ts.DiagnosticMessageChain): ts.Diagnostic[] {
  const result: ts.Diagnostic[] = [];
  while (dmc) {
    result.push(Object.assign(Object.create(root), dmc));
    dmc = dmc.next;
  }
  return result;
}

function normalizeDiagnostics(diagnostics: ts.Diagnostic[]): ts.Diagnostic[] {
  return diagnostics.reduce( (agg, d) => {
    if (typeof d.messageText === 'string') {
      agg.push(d);
    } else {
      agg.push(...flattenDMC(d, d.messageText.next));
    }
    return agg;
  }, []);
}

function getRootToken(token: ts.Node): ts.Node {
  while (token.parent && token.parent.pos === token.pos && token.parent.kind !== ts.SyntaxKind.SourceFile) {
    token = token.parent;
  }
  return token;
}

function collectComments(sf: ts.SourceFile) {
  const store = new Map<ts.Node, { token: ts.Node; jsDoc: ts.JSDoc[]; singleLine: string[] }>();
  utils.forEachComment(sf, (fullText: string, comment: ts.CommentRange) => {
    const token = getRootToken(utils.getTokenAtPosition(sf, comment.pos, sf));
    if (!store.has(token)) {
      store.set(token, { token, jsDoc: utils.getJsDoc(token, sf), singleLine: [] });
    }

    if (comment.kind === ts.SyntaxKind.SingleLineCommentTrivia) {
      const text = fullText.substr(comment.pos, comment.end - comment.pos);
      if (text.startsWith('//')) {
        store.get(token).singleLine.push(text);
      }
    }
  }, sf);
  return Array.from(store.values())
    .filter( c => c.singleLine.length + c.jsDoc.length > 0);
}

function parseSingleLine(comments: string[]): SemanticErrorMatch[] {
  const errors: SemanticErrorMatch[] = [];
  for (let c of comments) {
    const match: RegExpMatchArray = c.match(TEST_DESC_RE);
    if (match) {
      const errDef: SemanticErrorMatch = { line: 0, char: match.index, tsError: Number(match[0].substr(2)) };
      errors.push(errDef);
    }
  }
  return errors;
}

function parseJsDoc(jsDoc: ts.JSDoc[]): SemanticMatch[] {
  const errors: SemanticMatch[] = [];
  if (jsDoc && jsDoc.length > 0) {
    for (let jd of jsDoc) {
      if (jd.tags) {
        const semanticMatch: SemanticMatch = <any> {};
        jd.tags.forEach( t => {
          switch (t.tagName.text) {
            case 'tsType':
              (<SemanticTypeMatch> semanticMatch).tsType = t.comment.trim();
              break;
            case 'tsErrorMsg':
              (<SemanticErrorMatch> semanticMatch).tsErrorMsg = t.comment.trim();
              break;
            case 'tsError':
              (<SemanticErrorMatch> semanticMatch).tsError = Number(t.comment.trim());
              break;
            case 'loc':
              const lineAndChar = t.comment.trim().split(':');
              semanticMatch.char = Number(lineAndChar.pop()) - 1; // transform to base 0
              semanticMatch.line = Number(lineAndChar.pop() || 1) - 1; // we already at line 1 so go back to 0
              break;
            default:
              break;
          }
        });
        // TODO: refactor this to isolve matchers, each should report if it's valid or not.
        if (
          ( semanticMatch.char >= 0 && (<SemanticTypeMatch> semanticMatch).tsType ) ||
          ( semanticMatch.char >= 0 && (<SemanticErrorMatch> semanticMatch).tsError >= 0 )
        ) {
          errors.push(semanticMatch);
        }
      }
    }
  }
  return errors;
}

/**
 * Parse a source code and get all semantic matchers from comments.
 * It will cross-match all matchers with the diagnostics
 *
 * All diagnostics and definitions that does not have a match are returned.
 * @param sf The source file
 * @param diagnostics Diagnostics found for the source file.
 * @param program
 */
export function parseTestFile(sf: ts.SourceFile,
                              diagnostics: ts.Diagnostic[],
                              program: ts.Program): ts.Diagnostic[] {
  diagnostics = normalizeDiagnostics(diagnostics);

  const comments = collectComments(sf);
  for (let c of comments) {
    const semanticMatchExp: SemanticMatchExpression = {
      code: {
        line: ts.getLineAndCharacterOfPosition(c.token.getSourceFile(), c.token.getStart()).line,
        text: c.token.getText()
      }
    };

    const matches = [ ...parseSingleLine(c.singleLine), ...parseJsDoc(c.jsDoc) ];
    matches.forEach(semanticMatch => {
      if (isSemanticTypeMatch(semanticMatch)) {
        const typeLine = semanticMatchExp.code.line + semanticMatch.line;
        const pos = ts.getPositionOfLineAndCharacter(sf, typeLine, semanticMatch.char);
        for (let child of TsExt.getExpressionOrIdentifierNodesAtPosition(c.token, pos, sf)) {
          const typeStr = program.getTypeChecker().typeToString(program.getTypeChecker().getTypeAtLocation(child));
          if (typeStr !== semanticMatch.tsType) {
            const d: ts.Diagnostic = {
              file: sf,
              start: pos,
              length: child.getWidth(sf),
              messageText: `SemanticTypeMatch: expected type "${semanticMatch.tsType}" but found "${typeStr}"`,
              category: ts.DiagnosticCategory.Error,
              code: 1
            };
            diagnostics.push(d);
          }
        }
      }

      if (isSemanticErrorMatch(semanticMatch)) {
        let foundMatch: boolean;
        // diagnostics array is sorted by position so this should be O(1) unless not found.
        // we don't assume sorting hence for-loop.
        for (let dIdx = 0, dLen = diagnostics.length; dIdx < dLen; dIdx++) {
          const d = diagnostics[dIdx];
          const { line, character } = ts.getLineAndCharacterOfPosition(sf, d.start);
          const errLine = semanticMatchExp.code.line + semanticMatch.line;
          if ( errLine === line
            && semanticMatch.char === character
            && semanticMatch.tsError === d.code
            && (!semanticMatch.tsErrorMsg || semanticMatch.tsErrorMsg === d.messageText)) {
            diagnostics.splice(dIdx, 1);
            foundMatch = true;
            break;
          }
        }
        if (!foundMatch) {
          const d: ts.Diagnostic = {
            file: sf,
            start: ts.getPositionOfLineAndCharacter(sf, semanticMatchExp.code.line, semanticMatch.char),
            length: undefined,
            messageText: `SemanticErrorMatch: found type-error comment in the code but TS did not emit a matching semantic diagnostic.`,
            category: ts.DiagnosticCategory.Error,
            code: semanticMatch.tsError
          };
          diagnostics.push(d);
        }
      }
    });
  }
  return diagnostics;
}

export function getTypeErrorMismatch(sf: ts.SourceFile,
                                     sourceDiagnostics: ts.Diagnostic[],
                                     program: ts.Program): ts.Diagnostic[] {
  const diagnostics = parseTestFile(sf, sourceDiagnostics, program);
  diagnostics.forEach( d => {
    if (!/^Semantic[A-Z].+Match: .+/.test(<string> d.messageText)) {
      d.messageText = `Found TS Semantic error without an type-error comment: \n` + d.messageText;
    }
  });

  return diagnostics;
}
