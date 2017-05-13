/* For some reason, in test (jest) these will execute after the export statement, causing an error */
/* to workaround that the imports are now in the decorators.ts file. */

// import './target-store'
// import './target-metadata';
// import './prop';
// import './relations';
// import './resource';
// import './mixins';

export * from './decorators';
