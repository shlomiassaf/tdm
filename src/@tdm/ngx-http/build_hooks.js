const globals = {
  '@angular/core': 'ng.core',
  '@angular/http': 'ng.http',
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/operator/map': 'Rx.Observable.prototype'
};


// module.exports.packageJSON = function(pkgJson) { };

module.exports.rollupFESM = function(config) {
  if (config.external) {
    config.external = config.external.concat(Object.keys(globals));
  } else {
    config.external = Object.keys(globals);
  }

  config.external.push('path-to-regexp/index');
};

module.exports.rollupUMD = function(config) {
  if (config.external) {
    config.external = config.external.concat(Object.keys(globals));
  } else {
    config.external = Object.keys(globals);
  }

  config.external.push('path-to-regexp/index');

  config.globals = Object.assign(config.globals || {}, globals);
};