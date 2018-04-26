const globals = {
};

module.exports.tsconfig = function tsconfig(config) {
  if (!config.files) {
    config.files = [];
  }
  config.files.push('src/@tdm/service-mocker/shared/src/service-worker.d.ts');
};

module.exports.rollupFESM = function(config) {
  if (config.external) {
    config.external = config.external.concat(Object.keys(globals));
  } else {
    config.external = Object.keys(globals);
  }
};

module.exports.rollupUMD = function(config) {
  if (config.external) {
    config.external = config.external.concat(Object.keys(globals));
  } else {
    config.external = Object.keys(globals);
  }

  config.globals = Object.assign(config.globals || {}, globals);
};
