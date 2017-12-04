import * as ts from 'typescript';
import { CompilerOptions } from './config';

const defaultFormatHost: ts.FormatDiagnosticsHost = {
  getCurrentDirectory: () => ts.sys.getCurrentDirectory(),
  getCanonicalFileName: fileName => fileName,
  getNewLine: () => ts.sys.newLine
};

function filterErrorsAndWarnings(diagnostics: ts.Diagnostic[]): ts.Diagnostic[] {
  return diagnostics.filter(d => d.category !== ts.DiagnosticCategory.Message);
}

function isTsDiagnostic(diagnostic: any): diagnostic is ts.Diagnostic {
  return diagnostic != null && diagnostic.source !== 'tdm';
}

function exitCodeFromResult(diags: ts.Diagnostic[] | undefined): number {
  if (!diags || filterErrorsAndWarnings(diags).length === 0) {
    // If we have a result and didn't get any errors, we succeeded.
    return 0;
  }
  return 1;
}

export function formatDiagnostics(diags: ts.Diagnostic[],
                                  tsFormatHost: ts.FormatDiagnosticsHost = defaultFormatHost): string {
  if (diags && diags.length) {
    return diags
      .map(d => {
        if (isTsDiagnostic(d)) {
          return ts.formatDiagnostics([d], tsFormatHost);
        } else {
          throw new Error('Custom diagnostics not implemented.');
        }
      })
      .join('');
  } else {
    return '';
  }
}

export function reportErrorsAndExit(allDiagnostics: ts.Diagnostic[],
                                    options?: CompilerOptions,
                                    consoleError: (s: string) => void = console.error): number {
  const errorsAndWarnings = filterErrorsAndWarnings(allDiagnostics);
  if (errorsAndWarnings.length) {
    let currentDir = options ? options.basePath : undefined;
    const formatHost: ts.FormatDiagnosticsHost = {
      getCurrentDirectory: () => currentDir || ts.sys.getCurrentDirectory(),
      getCanonicalFileName: fileName => fileName,
      getNewLine: () => ts.sys.newLine
    };
    consoleError(formatDiagnostics(errorsAndWarnings, formatHost));
  }
  return exitCodeFromResult(allDiagnostics);
}

export namespace TsExt {
  /**
   * Returns all of the children of `node` that are within the position `pos` boundary and
   * are identifiers or an expression.
   *
   * Such nodes contains actual type information, unique to them and not parents/children
   * @param {ts.Node} node
   * @param {number} pos
   * @param {ts.SourceFile} sourceFile
   * @returns {ts.Node[]}
   */
  export function getExpressionOrIdentifierNodesAtPosition(node: ts.Node,
                                                           pos: number,
                                                           sourceFile?: ts.SourceFile): ts.Node[] {
    return node.getChildren(sourceFile || node.getSourceFile())
      .filter( child => {
        return child.end > pos
          && pos > child.pos
          && (isExpressionNode(child) || child.kind === ts.SyntaxKind.Identifier);
      });
  }

  /* Code below Copied from https://github.com/Microsoft/TypeScript/blob/master/src/compiler/utilities.ts */
  export function isExpressionNode(node: ts.Node): boolean {
    switch (node.kind) {
      case ts.SyntaxKind.SuperKeyword:
      case ts.SyntaxKind.NullKeyword:
      case ts.SyntaxKind.TrueKeyword:
      case ts.SyntaxKind.FalseKeyword:
      case ts.SyntaxKind.RegularExpressionLiteral:
      case ts.SyntaxKind.ArrayLiteralExpression:
      case ts.SyntaxKind.ObjectLiteralExpression:
      case ts.SyntaxKind.PropertyAccessExpression:
      case ts.SyntaxKind.ElementAccessExpression:
      case ts.SyntaxKind.CallExpression:
      case ts.SyntaxKind.NewExpression:
      case ts.SyntaxKind.TaggedTemplateExpression:
      case ts.SyntaxKind.AsExpression:
      case ts.SyntaxKind.TypeAssertionExpression:
      case ts.SyntaxKind.NonNullExpression:
      case ts.SyntaxKind.ParenthesizedExpression:
      case ts.SyntaxKind.FunctionExpression:
      case ts.SyntaxKind.ClassExpression:
      case ts.SyntaxKind.ArrowFunction:
      case ts.SyntaxKind.VoidExpression:
      case ts.SyntaxKind.DeleteExpression:
      case ts.SyntaxKind.TypeOfExpression:
      case ts.SyntaxKind.PrefixUnaryExpression:
      case ts.SyntaxKind.PostfixUnaryExpression:
      case ts.SyntaxKind.BinaryExpression:
      case ts.SyntaxKind.ConditionalExpression:
      case ts.SyntaxKind.SpreadElement:
      case ts.SyntaxKind.TemplateExpression:
      case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
      case ts.SyntaxKind.OmittedExpression:
      case ts.SyntaxKind.JsxElement:
      case ts.SyntaxKind.JsxSelfClosingElement:
      // case ts.SyntaxKind.JsxFragment:
      case ts.SyntaxKind.YieldExpression:
      case ts.SyntaxKind.AwaitExpression:
      case ts.SyntaxKind.MetaProperty:
        return true;
      case ts.SyntaxKind.QualifiedName:
        while (node.parent.kind === ts.SyntaxKind.QualifiedName) {
          node = node.parent;
        }
        return node.parent.kind === ts.SyntaxKind.TypeQuery /* || ts.isJSXTagName(node) */ ;
      case ts.SyntaxKind.Identifier:
        if (node.parent.kind === ts.SyntaxKind.TypeQuery /* || ts.isJSXTagName(node)) */ ) {
          return true;
        }
      // falls through
      case ts.SyntaxKind.NumericLiteral:
      case ts.SyntaxKind.StringLiteral:
      case ts.SyntaxKind.ThisKeyword:
        return isInExpressionContext(node);
      default:
        return false;
    }
  }

  export function isInExpressionContext(node: ts.Node): boolean {
    const parent = node.parent;
    switch (parent.kind) {
      case ts.SyntaxKind.VariableDeclaration:
      case ts.SyntaxKind.Parameter:
      case ts.SyntaxKind.PropertyDeclaration:
      case ts.SyntaxKind.PropertySignature:
      case ts.SyntaxKind.EnumMember:
      case ts.SyntaxKind.PropertyAssignment:
      case ts.SyntaxKind.BindingElement:
        return (<ts.VariableLikeDeclaration>parent).initializer === node;
      case ts.SyntaxKind.ExpressionStatement:
      case ts.SyntaxKind.IfStatement:
      case ts.SyntaxKind.DoStatement:
      case ts.SyntaxKind.WhileStatement:
      case ts.SyntaxKind.ReturnStatement:
      case ts.SyntaxKind.WithStatement:
      case ts.SyntaxKind.SwitchStatement:
      case ts.SyntaxKind.CaseClause:
      case ts.SyntaxKind.ThrowStatement:
        return (<ts.ExpressionStatement>parent).expression === node;
      case ts.SyntaxKind.ForStatement:
        const forStatement = <ts.ForStatement>parent;
        return (forStatement.initializer === node && forStatement.initializer.kind !== ts.SyntaxKind.VariableDeclarationList) ||
          forStatement.condition === node ||
          forStatement.incrementor === node;
      case ts.SyntaxKind.ForInStatement:
      case ts.SyntaxKind.ForOfStatement:
        const forInStatement = <ts.ForInStatement | ts.ForOfStatement>parent;
        return (forInStatement.initializer === node && forInStatement.initializer.kind !== ts.SyntaxKind.VariableDeclarationList) ||
          forInStatement.expression === node;
      case ts.SyntaxKind.TypeAssertionExpression:
      case ts.SyntaxKind.AsExpression:
        return node === (<ts.AssertionExpression>parent).expression;
      case ts.SyntaxKind.TemplateSpan:
        return node === (<ts.TemplateSpan>parent).expression;
      case ts.SyntaxKind.ComputedPropertyName:
        return node === (<ts.ComputedPropertyName>parent).expression;
      case ts.SyntaxKind.Decorator:
      case ts.SyntaxKind.JsxExpression:
      case ts.SyntaxKind.JsxSpreadAttribute:
      case ts.SyntaxKind.SpreadAssignment:
        return true;
      case ts.SyntaxKind.ExpressionWithTypeArguments:
        return (<ts.ExpressionWithTypeArguments>parent).expression === node && isExpressionWithTypeArgumentsInClassExtendsClause(parent);
      default:
        return isExpressionNode(parent);
    }
  }

  export function isExpressionWithTypeArgumentsInClassExtendsClause(node: ts.Node): boolean {
    return tryGetClassExtendingExpressionWithTypeArguments(node) !== undefined;
  }

  /** Get `C` given `N` if `N` is in the position `class C extends N` where `N` is an ExpressionWithTypeArguments. */
  export function tryGetClassExtendingExpressionWithTypeArguments(node: ts.Node): ts.ClassLikeDeclaration | undefined {
    if (node.kind === ts.SyntaxKind.ExpressionWithTypeArguments &&
      (<ts.HeritageClause>node.parent).token === ts.SyntaxKind.ExtendsKeyword &&
      ts.isClassLike(node.parent.parent)) {
      return node.parent.parent;
    }
  }

  export function isClassLike(node: ts.Node): node is ts.ClassLikeDeclaration {
    return node && (node.kind === ts.SyntaxKind.ClassDeclaration || node.kind === ts.SyntaxKind.ClassExpression);
  }
}
