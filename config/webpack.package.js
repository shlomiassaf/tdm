const fs = require('fs');
const path = require('path');
const helpers = require('./helpers');
const webpack = require('webpack');
const jsonfile = require('jsonfile');


/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const BannerPlugin = webpack.BannerPlugin;
const NgcWebpackPlugin = require('ngc-webpack').NgcWebpackPlugin;


module.exports = function(metadata) {
  const banner = `/** 
 * @tdm/${metadata.name} Copyright 2016-2017
 * Licensed under MIT
 */`;

  return {
    devtool: 'source-map',

    resolve: {
      extensions: ['.ts', '.js']
    },

    entry: helpers.root(`src/@tdm/${metadata.dir}/index.ts`),

    output: {
      path: helpers.root('.'),
      publicPath: '/',
      filename: `dist_package/@tdm/${metadata.dir}/bundle/${metadata.umd}.umd.js`,
      libraryTarget: 'umd',
      library: metadata.name
    },

    // require those dependencies but don't bundle them
    externals: metadata.externals,

    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: `awesome-typescript-loader?{configFileName: ".tsconfig.tmp.json", declaration: false}`,
          exclude: [/\.e2e\.ts$/]
        }
      ]
    },

    plugins: [
      // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('./src')
      ),

      new NgcWebpackPlugin({
        tsConfig: metadata.tsConfig
      }),

      new BannerPlugin({
        banner: banner,
        raw: true,
        entryOnly: true
      }),

      new CopyWebpackPlugin([
        {  context: `src/@tdm/${metadata.dir}`, from: 'README.md', to: helpers.root(`./dist_package/@tdm/${metadata.dir}`) },
      ]),

      function() {
        // THIS FILE IS MERGED INTO package.json AND COPIED TO dist_package
        // IT ONLY MERGE THE TOP-LEVEL PROPERTIES (NOT DEEP)
        this.plugin('done', function(stats) {
          const pkgDest = helpers.root('dist_package/@tdm/', metadata.dir, 'package.json');
          const merged = Object.assign(jsonfile.readFileSync(helpers.root('src/@tdm', 'package.json')), jsonfile.readFileSync(helpers.root('src/@tdm/', metadata.dir, 'package.json')));

          jsonfile.writeFileSync(pkgDest, merged, {spaces: 2});

        })
      }
    ]
  };
};
