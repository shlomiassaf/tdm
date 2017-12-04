import * as Path from 'path';
import * as ts from 'typescript';

import { getTypeErrorMismatch } from './test-parser';

export function diagnosticsHasErrors(diagnostics: ts.Diagnostic[]): boolean {
  return diagnostics.some(d => d.category === ts.DiagnosticCategory.Error);
}

export function defaultGatherDiagnostics(program: ts.Program): ts.Diagnostic[] {
  const allDiagnostics: ts.Diagnostic[] = [];

  // Check parameter diagnostics
  allDiagnostics.push(...program.getOptionsDiagnostics());
  if (diagnosticsHasErrors(allDiagnostics)) {
    return allDiagnostics;
  }

  // Check syntactic diagnostics
  allDiagnostics.push(...program.getSyntacticDiagnostics());
  if (diagnosticsHasErrors(allDiagnostics)) {
    return allDiagnostics;
  }

  const semantics = getSemanticDiagnostics(program, program.getCurrentDirectory());
  if (Array.isArray(semantics)) {
    allDiagnostics.push(...semantics);
  } else {
    Array.from(semantics.entries()).forEach( ([sf, d]) => {
      allDiagnostics.push(...getTypeErrorMismatch(sf, d, program));
    });
  }
  return allDiagnostics;
}

function getSemanticDiagnostics(program: ts.Program,
                                basePath: string): ts.Diagnostic[] | Map<ts.SourceFile, ts.Diagnostic[]> {
  const rootFiles = program.getRootFileNames().map( f => Path.resolve(basePath, f));
  const sourceFiles = program.getSourceFiles();
  const tdmTypeDiagnostics = new Map<ts.SourceFile, ts.Diagnostic[]>();

  for (let sf of sourceFiles) {
    const diagnostics = program.getSemanticDiagnostics(sf);
    const fileName = Path.isAbsolute(sf.fileName)
      ? sf.fileName
      : Path.resolve(basePath, sf.fileName)
    ;
    const idx = rootFiles.indexOf(fileName);
    if (idx === -1) {
      if (diagnostics.length > 0) {
        return diagnostics;
      }
    } else {
      rootFiles.splice(idx, 1);
      tdmTypeDiagnostics.set(sf, diagnostics);
    }
  }

  return tdmTypeDiagnostics;
}
