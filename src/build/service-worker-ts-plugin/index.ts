// tslint:disable:no-var-requires
import { Stats, Compiler, Watching } from 'webpack';
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ServiceWorkerWebpackPlugin: ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

export interface WebpackError {
  module?: any;
  file?: string;
  message: string;
  location?: { line: number, character: number };
  loaderSource: string;
}

interface ForkTsCheckerWebpackPlugin {
  new (opt: ForkTsCheckerWebpackPluginOptions): { apply(compiler: Compiler); };
}

interface ServiceWorkerWebpackPlugin {
  new (opt: ServiceWorkerWebpackPluginOptions): {
    handleMake(compilation, compiler);
    handleEmit(compilation, compiler, callback);
    apply(compiler: Compiler);
  };
}

/**
 * See https://github.com/oliviertassinari/serviceworker-webpack-plugin for docs
 */
export interface ServiceWorkerTemplateOptions {
  assets: string[];
  jsonStats: Stats.ToJsonOptionsObject;
}
/**
 * See https://github.com/oliviertassinari/serviceworker-webpack-plugin for docs
 */
export interface ServiceWorkerRuntimeOptions {
  assets: string[];
  [key: string]: any;
}
/**
 * See https://github.com/oliviertassinari/serviceworker-webpack-plugin for docs
 */
export interface ServiceWorkerWebpackPluginOptions {
  publicPath?: string;
  excludes?: string[];
  includes?: string[];
  entry: string;
  filename?: string;
  template?: (serviceWorkerOption: ServiceWorkerTemplateOptions) => Promise<string>;
  transformOptions?: (serviceWorkerOption: ServiceWorkerRuntimeOptions) => any;
}

/**
 * See https://github.com/Realytics/fork-ts-checker-webpack-plugin for docs
 */
export interface ForkTsCheckerWebpackPluginOptions {
  tsconfig?: string;
  tslint?: string | true;
  watch?: string | string[];
  async?: boolean;
  ignoreDiagnostics?: number[];
  ignoreLints?: string[];
  colors?: boolean;
  logger?: Console;
  formatter?: 'default' | 'codeframe' | ( (message: NormalizedMessage, useColors: boolean) => string );
  formatterOptions?: any;
  silent?: boolean;
  checkSyntacticErrors?: boolean;
  memoryLimit?: number;
  workers?: number;
  vue?: boolean;
}

type ErrorType = 'diagnostic' | 'lint';
type Severity = 'error' | 'warning';
interface NormalizedMessage {
  type: ErrorType;
  code: string | number;
  severity: Severity;
  content: string;
  file: string;
  line: number;
  character: number;
}

export class ServiceWorkerTsPlugin extends ServiceWorkerWebpackPlugin {
  private forkTsChecker: ForkTsCheckerWebpackPlugin;
  private logger: Console;
  private compilation: any;
  private pending: NormalizedMessage[] = [];

  private watching: boolean = false;
  private running: boolean = true;
  private firstRun: boolean = true;

  private constructor(tsPluginOptions: ForkTsCheckerWebpackPluginOptions,
                      swPluginOptions: ServiceWorkerWebpackPluginOptions) {
    super(swPluginOptions);

    tsPluginOptions.logger = this.logger = Object.create(console);
    this.logger.warn = this.logger.error = () => { }; // tslint:disable-line:no-empty

    tsPluginOptions.formatter = (message: NormalizedMessage, useColors: boolean) => {
      if (this.running) {
        if (!this.firstRun && this.compilation) {
          this.postLog(message);
        } else {
          this.pending.push(message);
        }
      }
      return '';
    };

    this.forkTsChecker = new ForkTsCheckerWebpackPlugin(tsPluginOptions);
  }

  apply(compiler: Compiler) {
    compiler.plugin('run', (c: Compiler, callback: () => void) => {

      callback();
    });

    compiler.plugin('done', () => {
      if (this.firstRun) {
        this.flush();
        this.firstRun = false;
      }
      if (!this.watching) {
        this.running = false;
      }
    });

    compiler.plugin('watch-run', (w: Watching, callback: () => void) => {
      this.watching = true;
      compiler.plugin('watch-close', () => {
        this.flush();
        this.running = false;
      });
      callback();
    });

    super.apply(compiler);
  }

  handleMake(compilation: any, compiler: Compiler) {
    this.compilation = compilation;

    // Assign the ngtools webpack plugin instance from the parent compilation to all compilation created by a child
    // compiler of the parent compilation.
    // We need this so imports from the server bundle to outside of it will work (they go to the ngtools webpack plugin)
    let syncAotPluginBetweenCompilations = (childCompiler: Compiler, compilerName: string, compilerIndex: number) => {
      if (syncAotPluginBetweenCompilations) {
        childCompiler.plugin('compilation', compilation2 => {
          compilation2._ngToolsWebpackPluginInstance = compilation._ngToolsWebpackPluginInstance;
        });
        syncAotPluginBetweenCompilations = undefined;
      }
    };
    compilation.plugin('child-compiler', syncAotPluginBetweenCompilations);

    return super.handleMake(compilation, compiler);
  }

  private flush(): void {
    while (this.pending.length) {
      this.postLog(this.pending.shift());
    }
  }

  private postLog(message: NormalizedMessage) {
    if (message.type === 'diagnostic') {
      const log: WebpackError = {
        // module: ''
        file: message.file,
        message: message.content,
        location: { line: message.line, character: message.character },
        loaderSource: ''
      };
      if (message.severity === 'error') {
        this.compilation.errors.push(log);
      } else {
        this.compilation.warnings.push(log);
      }
    }
  }

  static create(tsPluginOptions: ForkTsCheckerWebpackPluginOptions,
                swPluginOptions: ServiceWorkerWebpackPluginOptions) {
    const sw = new ServiceWorkerTsPlugin(tsPluginOptions, swPluginOptions);
    return [sw.forkTsChecker, sw];
  }
}
