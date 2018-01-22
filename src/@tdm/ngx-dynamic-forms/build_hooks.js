const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  'rxjs/Observable': 'Rx',
  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/Subscription': 'Rx',
  'rxjs/operators': 'Rx',
  'rxjs/operator/toPromise': 'Rx.Observable.prototype',
};

// module.exports.tsconfig = function tsconfig(config) { }


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
