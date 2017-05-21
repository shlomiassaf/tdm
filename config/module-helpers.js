const fs = require('fs-extra');
const path = require('path');
const helpers = require('./helpers');
const execSync = require('child_process').execSync;

const PACKAGE_DIR = helpers.root('src/@tdm');

function getPackageFullPath(dirName) {
  return path.join(PACKAGE_DIR, dirName);
}
module.exports.getPackageFullPath = getPackageFullPath;

function getPackageNames() {
  return fs.readdirSync(PACKAGE_DIR)
    .filter( dirName => fs.statSync(getPackageFullPath(dirName)).isDirectory() );
}
module.exports.getPackageNames = getPackageNames;

function getAlias() {
  return getPackageNames()
    .reduce( (alias, curr) => {
      alias[`@tdm/${curr}`] = `@tdm/${curr}/src`;
      return alias;
    }, {});
}
module.exports.getAlias = getAlias;

function getTsPackagePaths() {
  return getPackageNames()
    .reduce( (tsPaths, curr) => {
      tsPaths[`@tdm/${curr}`] = [`@tdm/${curr}/src/index.ts`];
      tsPaths[`@tdm/${curr}/*`] = [`@tdm/${curr}/src/*`];
      return tsPaths;
    }, {});
}
module.exports.getTsPackagePaths = getTsPackagePaths;

function getLastCommit(dirName) {
  // we check the internal 'src' since other changes (e.g. test folder) does not effect version.
  return execSync(`git log -n 1 --pretty=format:%H ${path.join(getPackageFullPath(dirName), 'src')}`).toString();
}
module.exports.getLastCommit = getLastCommit;

function createVersionCache() {
  return getPackageNames()
    .reduce( (versionCache, dirName) => {
      const version = fs.readJsonSync(path.join(getPackageFullPath(dirName), 'package.json')).version;
      versionCache[dirName] = {
        commit: getLastCommit(dirName),
        version
      };
      return versionCache;
    }, {});
}
module.exports.createVersionCache = createVersionCache;

function updateVersionCache() {
  fs.writeJsonSync(helpers.root('version_cache.json'), createVersionCache());
}
module.exports.updateVersionCache = updateVersionCache;

function getPackagesThatNeedVersionBump() {
  const currState = createVersionCache();

  try {
    const lastKnownState = fs.readJsonSync(helpers.root('version_cache.json'));

    Object.keys(currState).forEach( pkg => {
      const last = lastKnownState[pkg];
      if (last) {
        const curr = currState[pkg];
        if (last.commit === curr.commit && last.version === curr.version) {
          delete currState[pkg];
        }
      }
    });

  } catch (err) { }


  return currState;
}
module.exports.getPackagesThatNeedVersionBump = getPackagesThatNeedVersionBump;

if (helpers.hasNpmFlag('commitVersion')) {
  console.log('OLD VERSION MAP:\n');
  console.log(JSON.stringify(fs.readJsonSync(helpers.root('version_cache.json')), null, 2));

  console.log('\n\n\n\n');

  updateVersionCache();

  console.log('NEW VERSION MAP:\n');
  console.log(JSON.stringify(fs.readJsonSync(helpers.root('version_cache.json')), null, 2));
}





if (helpers.hasNpmFlag('printTsPaths')) {
  console.log(
    JSON.stringify(getTsPackagePaths(), null, 2)
  );
}

if (helpers.hasNpmFlag('detectBump')) {
  const needBump = getPackagesThatNeedVersionBump();
  if (Object.keys(needBump).length > 0) {
    console.log('The following packages need a bump: \n' + JSON.stringify(needBump, null, 2));
  } else {
    console.log('No bump needed, can publish.');
  }
}

if (helpers.hasNpmFlag('newLib')) {
  function createPackageJSON(name) {
    fs.mkdirsSync(path.join(process.cwd(), 'src', '@tdm', name));

    const pkgJson = {
      "name": `@tdm/${name}`,
      "version": "1.0.1-alpha.1",
      "description": "Typed data models (@tdm)",
      "main": `bundle/tdm.${name}.umd.js`,
      "module": "index.js",
      "typings": "index.d.ts",
      "keywords": [
        "@tdm"
      ],
      "peerDependencies": {
        "@tdm/tixin": "*",
        "@tdm/core": "*"
      }
    };
    fs.writeJSONSync(path.join(process.cwd(), 'src', '@tdm', name, 'package.json'), pkgJson);
  }

  function setJest(name) {
    const jestConfig = fs.readJsonSync(path.join(process.cwd(), 'jest.base-config.json'));
    const catchAll = jestConfig.moduleNameMapper['(.*)'];
    delete jestConfig.moduleNameMapper['(.*)'];

    jestConfig.moduleNameMapper[`^@tdm/${name}$`] = `<rootDir>/src/@tdm/${name}/src`;
    jestConfig.moduleNameMapper[`^@tdm/${name}/(.*)`] = `<rootDir>/src/@tdm/${name}/src/$1`;

    jestConfig.moduleNameMapper['(.*)'] = catchAll;

    fs.writeJSONSync(path.join(process.cwd(), 'jest.base-config.json'), jestConfig);
  }

  function setTS(name) {
    ['tsconfig', 'tsconfig.package', 'tsconfig.spec', 'tsconfig.webpack'].forEach( config => {
      const tsConfig = fs.readJsonSync(path.join(process.cwd(), `${config}.json`));
      tsConfig.compilerOptions.paths[`@tdm/${name}`] = [`@tdm/${name}/src/index.ts`];
      tsConfig.compilerOptions.paths[`@tdm/${name}/*`] = [`@tdm/${name}/src/*`];
      fs.writeJSONSync(path.join(process.cwd(), `${config}.json`), tsConfig);
    });
  }

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'lib name> '
  });

  rl.prompt();

  rl.on('line', (line) => {
    const name = line.trim();

    if (!name) {
      rl.prompt();
    } else {
      createPackageJSON(name);
      setJest(name);
      setTS(name);
      process.exit(0);
    }
  });
}
