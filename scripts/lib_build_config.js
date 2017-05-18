const fs = require('fs');
const path = require('path');
const voca = require('voca');
const jsonfile = require('jsonfile');

const ROOT = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}


const PACKAGE_DIR = root('src', '@tdm');
const GLOBAL_EXTERNALS = [/^\@angular\//];

// array of all directory names of the packages.
const PACKAGE_DIRECTORIES = fs.readdirSync(PACKAGE_DIR).filter( dirName => fs.statSync(path.join(PACKAGE_DIR, dirName)).isDirectory() );

// an object where key is directory name, value is the partial package.json to be merged.
const PACKAGE_JSONS = PACKAGE_DIRECTORIES
  .reduce( (obj, dir) => {
    obj[dir] = jsonfile.readFileSync(path.join(PACKAGE_DIR, dir, 'package.json'));
    return obj;
  }, {});

// an object where key is package name, value is the version
const VERSIONS = Object.keys(PACKAGE_JSONS)
  .reduce( (obj, dir) => {
    obj[PACKAGE_JSONS[dir].name] = PACKAGE_JSONS[dir].version;
    return obj;
  }, {});

function titleCamelCase(value) {
  return value[0].toUpperCase() + voca.camelCase(value).substr(1);
}

function getExternals(packageJson) {
  const deps = Object.assign({}, packageJson.dependencies || {}, packageJson.peerDependencies || {});
  return [packageJson.name, ...Object.keys(deps)]
    .reduce( (arr, name) => {
      arr.push(new RegExp('^' + name.replace(`\\`, '\/')));
      return arr;
    }, []);
}

function createPkgConfig(dirName) {
  const pkgJson = PACKAGE_JSONS[dirName];
  const externals = getExternals(pkgJson);

  const packageSrcPath = path.join(PACKAGE_DIR, dirName, 'src');

  // externals.length === 1 , own name is always added
  const isFlatStructure = externals.length === 1 && !fs.readdirSync(packageSrcPath)
    .some( fsItem => fs.statSync(path.join(packageSrcPath, fsItem)).isDirectory() );

    const umdPlugins = Array.isArray(pkgJson.umdPlugins)
      ? pkgJson.umdPlugins.map( p => {
        p.umd = `tdm.${p.name}`;
        p.name = `tdm${titleCamelCase(p.name)}`;
        return p;
      })
      : undefined
    ;

  return {
    versions: VERSIONS,
    name: `tdm${titleCamelCase(dirName)}`,
    dir: dirName,
    umd: `tdm.${dirName}`,
    externals: GLOBAL_EXTERNALS.concat(externals),
    umdPlugins,
    tsConfigUpdate(config) {

      if (!config.compilerOptions.outDir.endsWith('/')) {
        config.compilerOptions.outDir +=  '/'
      }
      config.compilerOptions.outDir += `.tmp`;

      if (isFlatStructure) {
        config.compilerOptions.outDir += `/${dirName}`;
      }

      // TODO: check why this go outside of folder
      config.include = [`./src/@tdm/${dirName}/src/**/*.ts`];

      return config;
    }
  };
}


let selected;
const selectIdx = process.argv.indexOf('--select');
if (selectIdx > -1) {
  selected = process.argv[selectIdx + 1].split(',').map( v => v.trim() );
}
module.exports = PACKAGE_DIRECTORIES
  .filter( dirName => selected ? selected.indexOf(dirName) > -1 : true)
  .map( dirName => createPkgConfig(dirName));
