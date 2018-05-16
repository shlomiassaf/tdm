module.exports = {
  preset: 'jest-preset-angular',
  roots: [ 'libs' ],
  'globals': {
    'ts-jest': {
      'tsConfigFile': `${__dirname}/tsconfig.jest.json`
    },
    '__TRANSFORM_HTML__': true
  },
  setupTestFrameworkScriptFile: '<rootDir>/testing/jest/setup-jest.ts',
  transform: {
    '^.+\\.(ts|js|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js'
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx|@ionic-native)'],
  testPathIgnorePatterns: [
    '<rootDir>/apps/.+/src/environments/environment.test.ts'
  ],
  moduleNameMapper: {
    '^@tdm/(.+)/lib/(.*)': '<rootDir>/libs/$1/src/lib/$2.ts',       // @tdm/data/plugin/active-record/lib/$rc <-- where $rc is $rc.ts
    '^@tdm/(.+)/(.+)': '<rootDir>/libs/$1/$2/src/index.ts',         // @tdm/core/tdm
    '^@tdm/(.+)$': '<rootDir>/libs/$1/src/index.ts'                 // @tdm/core
  }
};
