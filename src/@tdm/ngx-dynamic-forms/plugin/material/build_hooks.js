const ANGULAR_CDK = [
  'a11y',
  'accordion',
  'bidi',
  'coercion',
  'collections',
  'keycodes',
  'layout',
  'observers',
  'overlay',
  'platform',
  'portal',
  'scrolling',
  'stepper',
  'table'
];
const ANGULAR_MATERIAL = [
  'core',
  'autocomplete',
  'bottom-sheet',
  'button',
  'button-toggle',
  'card',
  'checkbox',
  'chips',
  'core',
  'datepicker',
  'dialog',
  'divider',
  'expansion',
  'form-field',
  'grid-list',
  'icon',
  'input',
  'list',
  'menu',
  'paginator',
  'progress-bar',
  'progress-spinner',
  'radio',
  'select',
  'sidenav',
  'slide-toggle',
  'slider',
  'snack-bar',
  'sort',
  'stepper',
  'table',
  'tabs',
  'toolbar',
  'tooltip',
];

const dashCaseToCamelCase = str => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

const globals = {
  'tslib': 'tslib',
  'moment': 'moment',

  '@angular/animations': 'ng.animations',
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  '@angular/common/http': 'ng.common.http',
  '@angular/router': 'ng.router',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-server': 'ng.platformServer',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
  '@angular/core/testing': 'ng.core.testing',
  '@angular/common/testing': 'ng.common.testing',
  '@angular/common/http/testing': 'ng.common.http.testing',

  // Some packages are not really needed for the UMD bundles, but for the missingRollupGlobals rule.
  '@angular/material-examples': 'ng.materialExamples',
  '@angular/material': 'ng.material',
  '@angular/material-moment-adapter': 'ng.materialMomentAdapter',
  '@angular/cdk': 'ng.cdk',

  // Include secondary entry-points of the cdk and material packages
  ...ANGULAR_CDK.reduce( (global, pkg) => {
    global[`@angular/cdk/${pkg}`] = `ng.cdk.${dashCaseToCamelCase(pkg)}`;
    return global;
  }, {}),

  ...ANGULAR_MATERIAL.reduce( (global, pkg) => {
    global[`@angular/material/${pkg}`] = `ng.material.${dashCaseToCamelCase(pkg)}`;
    return global;
  }, {}),

  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/Subscription': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/Subscriber': 'Rx',
  'rxjs/Scheduler': 'Rx',

  'rxjs/observable/combineLatest': 'Rx.Observable',
  'rxjs/observable/forkJoin': 'Rx.Observable',
  'rxjs/observable/fromEvent': 'Rx.Observable',
  'rxjs/observable/merge': 'Rx.Observable',
  'rxjs/observable/of': 'Rx.Observable',
  'rxjs/observable/throw': 'Rx.Observable',
  'rxjs/observable/defer': 'Rx.Observable',
  'rxjs/observable/fromEventPattern': 'Rx.Observable',
  'rxjs/observable/empty': 'Rx.Observable',

  'rxjs/operators/debounceTime': 'Rx.operators',
  'rxjs/operators/takeUntil': 'Rx.operators',
  'rxjs/operators/take': 'Rx.operators',
  'rxjs/operators/first': 'Rx.operators',
  'rxjs/operators/filter': 'Rx.operators',
  'rxjs/operators/map': 'Rx.operators',
  'rxjs/operators/tap': 'Rx.operators',
  'rxjs/operators/startWith': 'Rx.operators',
  'rxjs/operators/auditTime': 'Rx.operators',
  'rxjs/operators/switchMap': 'Rx.operators',
  'rxjs/operators/finalize': 'Rx.operators',
  'rxjs/operators/catchError': 'Rx.operators',
  'rxjs/operators/share': 'Rx.operators',
  'rxjs/operators/delay': 'Rx.operators',
  'rxjs/operators/combineLatest': 'Rx.operators',
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
