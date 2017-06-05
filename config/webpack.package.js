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
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const BannerPlugin = webpack.BannerPlugin;
const NgcWebpackPlugin = require('ngc-webpack').NgcWebpackPlugin;


module.exports = function(metadata) {
  const banner = `/** 
 * @tdm/${metadata.name} Copyright 2016-2017
 * Licensed under MIT
 */`;

  // bundle mode means the package has plugins, the plugins are not part of the intex.ts
  // so a bundle.ts file is added to the package with all plugin imports.
  // IMPORTANT: package.json "typings" property should point to "bundle.d.ts" for typings in
  // applications that use the UMD bundle, this however means that environments that use modules
  // will see type extensions that are not really there until import is done to the extension...
  const bundleMode = fs.existsSync(helpers.root(`src/@tdm/${metadata.dir}/src/bundle.ts`));

  const entry = {
    [metadata.umd]: helpers.root(`src/@tdm/${metadata.dir}/src/${bundleMode ? 'bundle' : 'index'}.ts`)
  };

  if (Array.isArray(metadata.umdPlugins)) {
    metadata.umdPlugins.forEach(p => {
      entry[p.umd] = helpers.root('src/@tdm', metadata.dir, 'src', p.entry)
    });
  }

  return {
    devtool: 'source-map',

    resolve: {
      extensions: ['.ts', '.js'],
      alias: fs.readdirSync(helpers.root('src/@tdm')).reduce( (alias, curr) => {
        alias[`@tdm/${curr}`] = `@tdm/${curr}/src`;
        return alias;
      }, {})
    },

    entry,

    output: {
      path: helpers.root('.'),
      publicPath: '/',
      filename: `dist_package/@tdm/${metadata.dir}/bundle/[name].umd.js`,
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
      // new webpack.ProvidePlugin({
      //   '__assign': ['tslib', '__assign'],
      //   '__extends': ['tslib', '__extends'],
      // }),

      new TsConfigPathsPlugin(),

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

          const merged = Object.assign(
            jsonfile.readFileSync(helpers.root('src/@tdm', 'package.json')),
            jsonfile.readFileSync(helpers.root('src/@tdm/', metadata.dir, 'package.json'))
          );

          delete merged.umdPlugins;

          // update versions of @tdm packages that this package depends on.
          ['dependencies', 'peerDependencies']
            .forEach( key => {
              const deps = merged[key];
              if (deps) {
                Object.keys(metadata.versions)
                  .forEach( pkgName => {
                    if (deps.hasOwnProperty(pkgName)) {
                      deps[pkgName] = '^' + metadata.versions[pkgName];
                    }
                  });
              }
            });


          jsonfile.writeFileSync(pkgDest, merged, {spaces: 2});

        })
      }
    ]
  };
};
