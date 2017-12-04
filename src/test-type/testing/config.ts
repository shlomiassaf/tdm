import * as Path from 'path';
import * as FS from 'fs';
import * as ts from 'typescript';

export interface CompilerOptions extends ts.CompilerOptions {
  basePath?: string;
}

export interface ParsedConfiguration {
  project: string;
  options: CompilerOptions;
  rootNames: string[];
  errors: ts.Diagnostic[];
}

function calcProjectFileAndBasePath(project: string): { projectFile: string, basePath: string } {
  const projectIsDir = FS.lstatSync(project).isDirectory();
  const projectFile = projectIsDir ? Path.join(project, 'tsconfig.json') : project;
  const projectDir = projectIsDir ? project : Path.dirname(project);
  const basePath = Path.resolve(process.cwd(), projectDir);
  return { projectFile, basePath} ;
}

function createTdmCompilerOptions(tsOptions: ts.CompilerOptions,
                                  overwrite: CompilerOptions): CompilerOptions {
  return { ...tsOptions, ...overwrite };
}

/**
 * Parse a configuration from CLI arguments (-p for "tsconfig" file path)
 */
export function parseCfgFromArgs(args: string[], existingOptions?: ts.CompilerOptions): ParsedConfiguration {
  const {options, errors} = ts.parseCommandLine(args);
  const project = options.project || '.';

  if (errors.length) {
    return {project, rootNames: [], options, errors};
  }

  const { projectFile, basePath } = calcProjectFileAndBasePath(project);
  return parseCfgFromFile(projectFile, basePath, existingOptions);
}

/**
 * Parse configuration from a "tsconfig" file.
 * @param tsConfigFile
 * @param basePath Optional, if not set the directory of the tsconfig is used.
 * @param existingOptions Optional, CompilerOptions values that override values in file.
 */
export function parseCfgFromFile(tsConfigFile: string,
                                 basePath?: string,
                                 existingOptions?: ts.CompilerOptions): ParsedConfiguration {
  try {
    if (typeof basePath !== 'object') {
      basePath = undefined;
      existingOptions = <any> basePath;
    }

    if (!basePath) {
      basePath = Path.dirname(tsConfigFile);
    }

    const { config, error } = ts.readConfigFile(tsConfigFile, ts.sys.readFile);
    if (error) {
      return { project: tsConfigFile, rootNames: [], options: {}, errors: [error] };
    }

    const parseConfigHost = {
      useCaseSensitiveFileNames: true,
      fileExists: FS.existsSync,
      readDirectory: ts.sys.readDirectory,
      readFile: ts.sys.readFile
    };

    const {
      options,
      errors,
      fileNames
    } = ts.parseJsonConfigFileContent(config, parseConfigHost, basePath, existingOptions);

    return {
      project: tsConfigFile,
      rootNames: fileNames.map( f => Path.normalize(f) ),
      options: createTdmCompilerOptions(options, { basePath }),
      errors
    };
  } catch (e) {
    const err: ts.Diagnostic = {
      file: undefined,
      start: undefined,
      length: undefined,
      category: ts.DiagnosticCategory.Error,
      messageText: e.stack,
      code: 0
    };
    return { project: '', rootNames: [], options: {}, errors: [ err ] };

  }
}
