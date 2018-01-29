import * as ts from 'typescript';
import { loader } from 'webpack';

function getDiagnosticMessage(d: ts.Diagnostic) {
  if ( typeof d.messageText === 'string' ) {
    return [ d.messageText ];
  } else {
    let chain = d.messageText;
    const res = [];
    while ( chain ) {
      res.push(chain.messageText);
      chain = chain.next;
    }
    return res;
  }
}

module.exports = function (this: loader.LoaderContext, content) {
  if ( this.cacheable ) {
    this.cacheable();
  }
  const output = ts.transpileModule(content, {
    reportDiagnostics: true,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2015,
      sourceMap: false,
      inlineSourceMap: false
    }
  });

  this.addDependency(this.resource);

  if ( output.diagnostics && output.diagnostics.length ) {
    for ( let d of output.diagnostics ) {
      if ( d.category === ts.DiagnosticCategory.Error ) {
        for ( let m of getDiagnosticMessage(d) ) {
          this.emitError(m);
        }
      }
    }
    return '';
  }
  return output.outputText;
};
