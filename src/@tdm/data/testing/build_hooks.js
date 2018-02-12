const globals = {
  'tslib': 'tslib',
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

  '@tdm/core/testing': 'tdm.core.testing',
  '@tdm/data/src/active-record/interfaces': 'tdm.data',
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
