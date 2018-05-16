import * as Path from 'path';
import * as FS from 'fs';
import { isNumber } from 'util';

function updateVersions(projects: any, cwd: string, version: string): { [key: string]: string[] } {
  return Object.entries(projects).reduce((obj, [name, project]) => {
    if (project.projectType === 'library') {
      const pkgJsonPath = Path.join(cwd, project.root, 'package.json');
      const pkgJson = require(pkgJsonPath);
      const oldVersion = pkgJson.version;
      pkgJson.version = version;
      console.log(`UPDATING "${pkgJson.name}" from [${oldVersion}] to [${version}]`);
      FS.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2), {
        encoding: 'utf-8'
      });
    }
  }, {});
}

function validate(semver: string): boolean {
  if (!semver) {
    return false;
  }
  const parts = semver.split('.');
  if (parts.length !== 3) {
    return false
  }

  if (!parts.every( p => /^\d+$/.test(p) )) {
    return false;
  }

  return true;
}

function run(version: string): void {
  if (!validate(version)) {
    throw new Error('Invalid version provided');
  }

  console.log(`Updating to version ${version} in 2 seconds...`);

  setTimeout(() => {
    const cwd = process.cwd();
    const config = require(Path.join(cwd, './angular.json'));
    const projects = config.projects;
    updateVersions(projects, cwd, version);
  }, 2500);
}

run(process.argv[2]);
