const fs = require('fs');
const path = require('path');
const voca = require('voca');

const ROOT = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}


const PACKAGE_DIR = root('src', '@tdm');

function titleCamelCase(value) {
  return value[0].toUpperCase() + voca.camelCase(value).substr(1);
}

function createPkgConfig(dirName, externals) {
  if (!externals) {
    externals = [];
  }

  const packageSrcPath = path.join(PACKAGE_DIR, dirName, 'src');
  const isFlatStructure = !fs.readdirSync(packageSrcPath)
    .some( fsItem => fs.statSync(path.join(packageSrcPath, fsItem)).isDirectory() );

  return {
    name: `tdm${titleCamelCase(dirName)}`,
    dir: dirName,
    umd: `tdm.${dirName}`,
    externals: [/^\@angular\//, /^rxjs\//].concat(externals),
    tsConfigUpdate(config) {

      if (isFlatStructure) {
        if (!config.compilerOptions.outDir.endsWith('/')) {
          config.compilerOptions.outDir +=  '/'
        }
        config.compilerOptions.outDir += dirName;
      }

      // TODO: check why this go outside of folder
      if (dirName === 'transformation') config.compilerOptions.outDir += '/transformation';
      config.include = [`./src/@tdm/${dirName}/src/**/*.ts`];
      return config;
    }
  };
}

// TODO: use package.json to build this.
const pkgExternals = {
  transformation: [/^@tdm\/tixin/],
  core: [/^@tdm\/tixin/, /^@tdm\/transformation/],
  'angular-http': [/^path-to-regexp/, /^@tdm\/tixin/, /^@tdm\/transformation/, /^@tdm\/core/],
  'json-api-mapper': [/^@tdm\/tixin/, /^@tdm\/transformation/, /^@tdm\/core/]
};


let selected;
const selectIdx = process.argv.indexOf('--select');
if (selectIdx > -1) {
  selected = process.argv[selectIdx + 1].split(',').map( v => v.trim() );
}
module.exports = fs.readdirSync(PACKAGE_DIR)
  .filter( dirName => selected ? selected.indexOf(dirName) > -1 : true)
  .filter( dirName => fs.statSync(path.join(PACKAGE_DIR, dirName)).isDirectory() )
  .map( dirName => createPkgConfig(dirName, pkgExternals[dirName]));
