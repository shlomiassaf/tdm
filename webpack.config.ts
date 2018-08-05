import * as path from 'path';
import { Configuration } from 'webpack';
import { ServiceWorkerTsPlugin } from './tools/@webpack-ext/service-worker-ts-plugin';

const TDM_EXAMPLE_FILE_REGEXP = /__tdm-code__\.ts$/;
const SERVICE_WORKER_HTTP_SERVER_REGEXP = /\/server/;

function excludeFromTsLoader(loaders, ...regexp) {
  const tsLoaderRules = loaders.filter( l => l.test.test('someFile.ts') );
  if (tsLoaderRules.length === 0) {
    throw new Error('Could not find TS loader RULE and add exclude to it');
  }

  for (const tsLoaderRule of tsLoaderRules) {
    if (!tsLoaderRule.exclude) {
      tsLoaderRule.exclude = [];
    }
    tsLoaderRule.exclude.push(...regexp);
  }
}

function applyLoaders(webpackConfig: Configuration) {
  /* The DEMO app requires a custom webpack configuration to accomodate 2 special scenarios:

      1) Code sample insertion
      The demo app has some files that represent code samples.
      These files have sections (based on tokens) so not all files is used as a code sample, but parts of it.
      Additionally, the code samples requires some processing, for example highlight.js for TS/JS/CSS/HTML files and markdown for MD files.
      This is a prefect task for loaders.

      2) Service worker app
      The DEMO app comes with an internal service worker app that act's as a mock server for REST API calls.
      The service worker files requires a separate compilation, outside of the main compilation.
      This compilation also requires a different TS compiler instance, so it is compiled by ts-loader and not AngularCompilerPlugin
  */

  // In (1) and (2) we don't want the angular compiler to process the files.
  // We first exclude the TS files from the current TS loader so they are NOT processed by the angular compiler plugin.
  excludeFromTsLoader(webpackConfig.module.rules, TDM_EXAMPLE_FILE_REGEXP, SERVICE_WORKER_HTTP_SERVER_REGEXP);

  // In (1) we have custom loaders, for webpack to be aware of them we tell it the directory the are in.
  webpackConfig.resolveLoader.modules.push('tools/@webpack-ext');

  // We push new loader rules to handle the scenarios, (1) and (2).
  // we also add a loader to handle markdown files.
  webpackConfig.module.rules.push(
    {
      test: TDM_EXAMPLE_FILE_REGEXP,
      use: [
        {
          loader: "tdm-code-sample"
        },
        {
          loader: "value-loader"
        },
        {
          loader: "tdm-ts-transpile"
        }
      ]
    },
    {
      test: SERVICE_WORKER_HTTP_SERVER_REGEXP,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: 'tsconfig.sw.json'
          }
        }
      ]
    },
    {
      test: /\.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: "markdown-loader",
          options: {
            /* your options here */
          }
        }
      ]
    }
  );
}

function applyPlugins(webpackConfig: Configuration) {
  /*
    For scenario (2) we use the `serviceworker-webpack-plugin` webpack plugin for service workers.
    We also want to type-check the service worker code we write so we will use `fork-ts-checker-webpack-plugin` for it.

    To make it work we create a custom plugin that wraps the two.
    In additiona, the `serviceworker-webpack-plugin` implementation is not perfect so we wrap it where needed to make it work.
  */

  // push the new plugin AFTER the angular compiler plugin
  const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
  const idx = webpackConfig.plugins.findIndex( p => p instanceof AngularCompilerPlugin );
  let tsconfig = 'tsconfig.sw.json';

  // we check for dist build which is an app built with the dist artifacts (simulating npm package)
  if (webpackConfig.mode === 'production') {
    const angularCompilerPlugin: any = webpackConfig.plugins[idx];
    if (angularCompilerPlugin._tsConfigPath.endsWith('dist.json')) {
      tsconfig = 'tsconfig.sw-dist.json';
    }
  }

  const plugins = ServiceWorkerTsPlugin.create(
    {
      tsconfig
    },
    {
      entry: path.join(process.cwd(), 'apps/demo/src/modules/server/index.ts')
    }
  );
  // push the new plugin AFTER the angular compiler plugin
  webpackConfig.plugins.splice(idx + 1, 0, ...plugins);
}

function uglifyMode(webpackConfig: Configuration, mode: 'devUglify' | 'noUglify') {
  const uglifyPlugin = webpackConfig.optimization.minimizer[3];
  switch (mode) {
    case 'devUglify':
      uglifyPlugin.options.uglifyOptions.mangle = false;
      uglifyPlugin.options.uglifyOptions.output.beautify = true;
      break;
    case 'noUglify':
      webpackConfig.optimization.minimizer.pop();
      break;
    default:
      break;
  }
}

function updateWebpackConfig(webpackConfig: Configuration): Configuration {
  applyLoaders(webpackConfig);
  applyPlugins(webpackConfig);

  // uglifyMode(webpackConfig, 'devUglify');
  uglifyMode(webpackConfig, 'noUglify');

  return webpackConfig;
}
module.exports = updateWebpackConfig;
