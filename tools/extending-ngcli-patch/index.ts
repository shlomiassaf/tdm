import * as fs from 'fs';
import * as path from 'path';
import { Path, getSystemPath, normalize, resolve, virtualFs } from '@angular-devkit/core';
import { NormalizedBrowserBuilderSchema } from '@angular-devkit/build-angular';

import * as ServiceWorkerWebpackPlugin from 'serviceworker-webpack-plugin';

import { updateWebpackConfig } from './update-webpack-config';

console.log('PATCHING @angular/cli with custom webpack config.');
const projectLocalCli = require.resolve('@angular/cli', { paths: [ process.cwd() ]});
require(path.join(path.dirname(projectLocalCli), '../init'));

setTimeout(() => {
  const BrowserBuilder = require('@angular-devkit/build-angular').BrowserBuilder;
  const orgBuildWebpackConfig = BrowserBuilder.prototype.buildWebpackConfig;
  BrowserBuilder.prototype.buildWebpackConfig = function buildWebpackConfig(
    root: Path,
    projectRoot: Path,
    host: virtualFs.Host<fs.Stats>,
    options: NormalizedBrowserBuilderSchema,
  ) {
    return updateWebpackConfig(
      orgBuildWebpackConfig.call(this, root, projectRoot, host, options)
    );
  }
});
