const globals = {
  'tslib': 'tslib',

  '@tdm/tixin': 'tdm.tixin',
  '@tdm/core': 'tdm.core',
  '@tdm/core/tdm': 'tdm.core.tdm',
  '@tdm/data': 'tdm.data',
};

export function jestConfig(config): void {
  if (!config.moduleNameMapper) {
    config.moduleNameMapper = {};
  }

  config.moduleNameMapper['(.*)'] = '<rootDir>/src/$1';
}

export function tsconfig(config) {
  if (!config.compilerOptions.paths) {
    config.compilerOptions.paths = {};
  }
  config.compilerOptions.paths['@*'] = ['demo/modules/@*'];

  config.angularCompilerOptions.strictMetadataEmit = false;

  if (config.external) {
    config.external = config.external.concat(Object.keys(globals));
  } else {
    config.external = Object.keys(globals);
  }
}

export function rollupFESM(config) {
  if (config.external) {
    config.external = config.external.concat(Object.keys(globals));
  } else {
    config.external = Object.keys(globals);
  }

  config.globals = Object.assign(config.globals || {}, globals);
}

export const rollupUMD = rollupFESM;
