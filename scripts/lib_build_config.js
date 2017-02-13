module.exports = [
  {
    name: 'tdmTixin',
    dir: 'tixin',
    umd: 'tdm.tixin',
    externals: [/^\@angular\//, /^rxjs\//],
    tsConfigUpdate(config) {
      config.compilerOptions.outDir = config.compilerOptions.outDir + '/tixin';
      config.include = ['./src/@tdm/tixin/**/*.ts'];
      return config;
    }
  },
  {
    name: 'tdmCore',
    dir: 'core',
    umd: 'tdm.core',
    externals: [/^\@angular\//, /^rxjs\//, /^@tdm\/tixin/],
    tsConfigUpdate(config) {
      config.include = ['./src/@tdm/core/**/*.ts'];
      return config;
    }
  },
  {
    name: 'tdmAngularHttp',
    dir: 'angular-http',
    umd: 'tdm.angular-http',
    externals: [/^\@angular\//, /^rxjs\//, /^path-to-regexp/, /^@tdm\/tixin/, /^@tdm\/core/],
    tsConfigUpdate(config) {
      config.include = ['./src/@tdm/angular-http/**/*.ts'];
      return config;
    }
  }
];
