const globals = {
  'rxjs/Observable': 'Rx',
  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/operators': 'Rx'
};


// module.exports.packageJSON = function(pkgJson) { };

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
