import * as OS from 'os';
import * as FS from 'fs';
import * as Path from 'path';
import { loader } from 'webpack';
import { highlightAuto } from 'highlight.js';
import * as marked from 'marked';
import { processString } from 'typescript-formatter';
const convertSourceMap = require('convert-source-map'); // tslint:disable-line

import {
  ExtractedCode,
  CodeExtractionInstructions
} from '@webpack-ext/tdm-code-sample/code-extraction-instructions';
import { parse, ParserResult } from './parser';
import { DEFAULT_MARKED_OPTIONS } from './marked-integration';

module.exports = function (this: loader.LoaderContext, content) {
  if ( this.cacheable ) {
    this.cacheable();
  }

  if (typeof content === 'string') {
    content = this.exec(content, this.resource);
  }

  const instructions: CodeExtractionInstructions[] = content;

  const extracted: ExtractedCode[] = [];

  const cache = new Map<string, ParserResult>();
  const callback = this.async();

  const promises: Array<Promise<any>> = [];

  for ( let i of instructions ) {
    if ( i.section && i.slice ) {
      this.emitError(`"section" and "slice" are now allowed together`);
    }
    if ( i.section && i.section === 'default' ) {
      this.emitError(`"default" sections is reserved and can not be used in a CodeExtractionInstructions.`);
    }
    const fileName = Path.isAbsolute(i.file) && i.file[0] === Path.sep[0]
      ? i.file
      : Path.resolve(Path.dirname(this.resource), i.file)
    ;
    if (!FS.existsSync(fileName)) {
      this.emitError(`Could not find tdm code ref file ${i.file} within the context of ${this.resource}`);
    } else {
      try {
        const lang = i.lang || Path.extname(i.file).substr(1);

        if ( !cache.has(i.file) ) {
          this.addDependency(fileName);
          cache.set(i.file, parse(i.code || FS.readFileSync(fileName, { encoding: 'utf-8' }), lang));
        }

        const parsedResult = cache.get(i.file);
        if ( i.section && !parsedResult.sections[ i.section ] ) {
          this.emitError(`Could not find tdm code extract section "${i.section}" in ${i.file}`);
        } else {
          const code: ExtractedCode = <any> { file: Path.basename(i.file), lang };

          if (i.slice) {
            code.code = parsedResult.lines.slice(i.slice[0], i.slice[1] + 1)
              .filter( (s, idx) => !parsedResult.ignoredLines[idx] )
              .join(OS.EOL);
          } else {
            code.section = i.section || 'default';
            code.code = parsedResult.sections[ i.section ] || parsedResult.root;
          }

          if ( i.id ) {
            code.id = i.id;
          }

          if ( i.title ) {
            code.title = i.title;
          }

          if (i.autoRender) {
            switch (lang) {
              case 'html':
              case 'css':
              case 'scss':
              case 'ts':
                if (i.reformat) {
                  const p = processString(fileName + '___', code.code, {
                    dryRun: true,
                    replace: false,
                    verify: false,
                    tsconfig: true,
                    tsconfigFile: null,
                    tslintFile: null,
                    tsfmtFile: null,
                    vscodeFile: null,
                    tslint: true,
                    editorconfig: true,
                    tsfmt: true,
                    vscode: false
                  }).then(result => code.code = highlightAuto(convertSourceMap.removeComments(result.dest), [lang]).value);
                  promises.push(p);
                } else {
                  code.code = highlightAuto(convertSourceMap.removeComments(code.code), [lang]).value;
                }
                break;
              case 'md':
                const markedOptions = i.rendererOptions
                  ? Object.assign(Object.create(DEFAULT_MARKED_OPTIONS), i.rendererOptions)
                  : DEFAULT_MARKED_OPTIONS
                ;
                marked.setOptions(markedOptions);
                code.code = marked(code.code);
                break;
              default:
                throw new Error(`Could not auto render file ${i.file}, language ${lang} is not supported`);
            }
          }

          extracted.push(code);
        }
      } catch ( err ) {
        this.emitError(err.toString());
        return;
      }
    }
  }
  this.sourceMap = false;
  Promise.all(promises)
    .then( () => {
      callback(null, 'module.exports = ' + JSON.stringify(extracted));
    });
};
