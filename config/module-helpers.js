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
    err = JSON.stringify(needBump, null, 2);
    console.log('The following packages need a bump: \n' + err);
  } else {
    console.log('No bump needed, can publish.');
  }
}
