import * as gulp from 'gulp';
import * as fs from 'fs-extra';
import * as Path from 'path';
import { execSync as spawn } from 'child_process';
import * as webpack from 'webpack';

import * as util from '../util';
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const sorcery = require('sorcery');
const convert = require('convert-source-map');

@util.GulpClass.Gulpclass()
export class Gulpfile {

  @util.GulpClass.Task('build:webpack')
  buildWebpack() {
    const config = util.resolveWebpackConfig(util.root(util.FS_REF.WEBPACK_CONFIG), util.currentPackage());

    const compiler = webpack(config);

    const runWebpack = {
      compiler,
      done: new Promise( (RSV, RJT) => compiler.run((err, stats) => err ? RJT(err) : RSV(stats)) )
    };

    return runWebpack
      .done
      .then( () => {
        const p = util.root(util.currentPackage().tsConfigObj.compilerOptions.outDir);
        const copyInst = util.getCopyInstruction(util.currentPackage());

        spawn(`mv ${copyInst.from} ${copyInst.toSrc}`);
        spawn(`rm -rf ${Path.resolve(p, '..')}`);


        /*
         Angular compiler with 'flatModuleOutFile' turned on creates an entry JS file with a matching d.ts
         file and an aggregated metadata.json file.

         This is done by creating a corresponding TS file (to the output JS file).
         The side-effect is a source map reference to the TS file.

         Since the TS is virtual and does not exists we need to remove the comment so the source maps
         will not break.
         */
        const flatModuleJsPath = Path.join(copyInst.toSrc, `${util.getMainOutputFileName(util.currentPackage())}.js`);
        const withoutComments = convert.removeComments(fs.readFileSync(flatModuleJsPath, 'utf-8'));
        fs.writeFileSync(flatModuleJsPath, withoutComments, 'utf-8');
      });
  }

  @util.GulpClass.Task('build:rollup:fesm')
  buildRollupFesm() {
    const meta = util.currentPackage();
    const copyInst = util.getCopyInstruction(meta);

    const rollupConfig = {
      external: meta.externals
    };

    util.tryRunHook(meta.dir, 'rollupFESM', rollupConfig);

    Object.assign(rollupConfig, {
      entry: `${copyInst.toSrc}/${util.getMainOutputFileName(meta)}.js`,
      format: 'es',
      sourceMap: true
    });

    return rollup(rollupConfig)
      .pipe(source(`${util.getMainOutputFileName(meta)}.js`, `${copyInst.toSrc}`))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(rename(`${meta.umd}.es5.js`))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(copyInst.toBundle));
  }

  @util.GulpClass.Task('build:rollup:umd') // or use provided callback instead
  buildRollupUmd() {
    const meta = util.currentPackage();

    const copyInst = util.getCopyInstruction(meta);

    const rollupConfig = {
      external: meta.externals,
      globals: {
        typescript: 'ts'
      },
      moduleName: meta.moduleName
    };

    util.tryRunHook(meta.dir, 'rollupUMD', rollupConfig);

    Object.assign(rollupConfig, {
      entry: `${copyInst.toSrc}/${util.getMainOutputFileName(meta)}.js`,
      format: 'umd',
      exports: 'named',
      sourceMap: true
    });

    return rollup(rollupConfig)
      .pipe(source(`${util.getMainOutputFileName(meta)}.js`, `${copyInst.toSrc}`))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(rename(`${meta.umd}.rollup.umd.js`))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(copyInst.toBundle));
  }

  @util.GulpClass.Task()
  sourcemaps() {
    const meta = util.currentPackage();

    const copyInst = util.getCopyInstruction(meta);

    const promises = [`${meta.umd}.es5.js`, /* `${meta.umd}.webpack.umd.js`, */ `${meta.umd}.rollup.umd.js`]
      .map( file => {
        return sorcery.load(Path.join(copyInst.toBundle, file))
          .then( chain => chain.write() );
      });

    return Promise.all(promises);
  }

  @util.GulpClass.Task()
  minifyAndGzip(done) {
    try {
      const meta = util.currentPackage();
      const copyInst = util.getCopyInstruction(meta);

      util.minifyAndGzip(copyInst.toBundle, `${meta.umd}.webpack.umd`);
      util.minifyAndGzip(copyInst.toBundle, `${meta.umd}.rollup.umd`);
      done()
    } catch (err) {
      done(err);
    }
  }
}
