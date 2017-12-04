#!/usr/bin/env ts-node

import * as ts from 'typescript';

import { reportErrorsAndExit } from './util';
import { defaultGatherDiagnostics, diagnosticsHasErrors } from './diagnostics';
import { parseCfgFromArgs } from './config';

export function run(
  rootNames: string[],
  options: ts.CompilerOptions,
  gatherDiagnostics: (program: ts.Program) => ts.Diagnostic[] = defaultGatherDiagnostics
): ts.Diagnostic[] {
  const program = ts.createProgram(rootNames, options);
  const diagnostics = gatherDiagnostics(program);
  if (diagnosticsHasErrors(diagnostics)) {
    return diagnostics;
  } else {
    return [];
  }
}

export function main(args: string[]): number {
  const { errors, rootNames, options } = parseCfgFromArgs(args);
  if (errors.length > 0) {
    return reportErrorsAndExit(errors);
  }

  const diagnostics = run(rootNames, options);
  return reportErrorsAndExit(diagnostics, options);
}

if (require.main === module) {
  const args = process.argv.slice(2);
  process.exit(main(args));
}
