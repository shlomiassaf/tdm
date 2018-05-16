import * as Path from 'path';
import * as FS from 'fs';

const cwd = process.cwd();
function createDevLibMapping(
  sourceRoot: string,
  name: string
): { [key: string]: string[] } {
  return {
    [name]: [`${sourceRoot}/index.ts`],
    [`${name}/lib/*`]: [`${sourceRoot}/lib/*`]
  };
}

function createDistLibMapping(name: string): { [key: string]: string[] } {
  return {
    [name]: [`dist/${name}`],
    [`${name}/lib/*`]: [`dist/${name}/lib/*`]
  };
}

function createDevMappings(projects: any): { [key: string]: string[] } {
  return Object.entries(projects).reduce((obj, [name, project]) => {
    if (project.projectType === 'library') {
      const pkgJson = require(Path.join(cwd, project.root, 'package.json'));
      Object.assign(obj, createDevLibMapping(project.sourceRoot, pkgJson.name));
    }
    return obj;
  }, {});
}

function createDistMappings(projects: any): { [key: string]: string[] } {
  return Object.entries(projects).reduce((obj, [name, project]) => {
    if (project.projectType === 'library') {
      const pkgJson = require(Path.join(cwd, project.root, 'package.json'));
      Object.assign(obj, createDistLibMapping(pkgJson.name));
    }
    return obj;
  }, {});
}

const paths = {
  tsConfig: Path.join(cwd, './tsconfig.json'),
  tsConfigDist: Path.join(cwd, './tsconfig.dist.json'),
  angular: Path.join(cwd, './angular.json'),
  nx: Path.join(cwd, './nx.json')
};

const tsConfig = require(paths.tsConfig);
const tsConfigDist = require(paths.tsConfigDist);
const config = require(paths.angular);

const projects = config.projects;

tsConfig.compilerOptions.paths = createDevMappings(projects);
tsConfig.compilerOptions.paths['*'] = [
  "apps/demo/src/modules/*",
  "*"
];

FS.writeFileSync(paths.tsConfig, JSON.stringify(tsConfig, null, 2), {
  encoding: 'utf-8'
});

tsConfigDist.compilerOptions.paths = createDistMappings(projects);
FS.writeFileSync(paths.tsConfigDist, JSON.stringify(tsConfigDist, null, 2), {
  encoding: 'utf-8'
});
