import * as ts from 'typescript';
import * as FS from 'fs';
import * as Path from 'path';
import { loader } from 'webpack';

import { ExtractedCode, CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample/code-extraction-instructions';
import { parse, ParserResult } from './parser';

function getDiagnosticMessage(d: ts.Diagnostic) {
  if (typeof d.messageText === 'string') {
    return [d.messageText];
  } else {
    let chain = d.messageText;
    const res = [];
    while (chain) {
      res.push(chain.messageText);
      chain = chain.next;
    }
    return res;
  }
}

module.exports = function(this: loader.LoaderContext, content) {
  if (this.cacheable) {
    this.cacheable();
  }
  const output = ts.transpileModule(content, {
    reportDiagnostics: true,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2015
    }
  });

  this.addDependency(this.resource);

  if (output.diagnostics && output.diagnostics.length) {
    for (let d of output.diagnostics) {
      if ( d.category === ts.DiagnosticCategory.Error ) {
        for (let m of getDiagnosticMessage(d)) {
          this.emitError(m);
        }
      }
    }
    return '';
  }

  const instructions: CodeExtractionInstructions[] = this.exec(output.outputText, this.resource);
  const extracted: ExtractedCode[] = [];
  const cache = new Map<string, ParserResult>();
  for (let i of instructions) {
    const fileName = Path.isAbsolute(i.file)
      ? i.file
      : Path.resolve(Path.dirname(this.resource), i.file)
    ;

    try {
      const lang = Path.extname(i.file).substr(1);

      if (!cache.has(i.file)) {
        this.addDependency(fileName);
        cache.set(i.file, parse(FS.readFileSync(fileName, { encoding: 'utf-8' }), lang));
      }

      const parsedResult = cache.get(i.file);
      if (i.section && !parsedResult.sections[i.section]) {
        this.emitError(`Could not find tdm code extract section "${i.section}" in ${i.file}`);
      } else {
        const code: ExtractedCode = {
          file: Path.basename(i.file),
          code: parsedResult.sections[i.section] || parsedResult.root,
          lang
        };
        if (i.title) {
          code.title = i.title;
        }
        if (i.passFileName) {
          code.file = Path.basename(i.file);
        }
        extracted.push(code);
      }
    } catch (err) {
      this.emitError(err.toString());
      return;
    }
  }
  return 'module.exports = ' + JSON.stringify(extracted);
};
