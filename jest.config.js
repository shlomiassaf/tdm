require('ts-node/register');

const fs = require('fs-extra');
const path = require('path');
const util = require('./scripts/util');

const base = fs.readJsonSync(path.join(__dirname, 'jest.base-config.json'));

base.moduleNameMapper = Object.assign(util.jestAlias(), base.moduleNameMapper || {});
base.moduleNameMapper['(.*)'] = '<rootDir>/src/$1';

const jestConfigOW = process.env.test_lib
  ? fs.readJsonSync(path.join(__dirname, 'src', '@tdm', process.env.test_lib, 'jest.config.json'))
  : {}
;

module.exports = Object.assign(base, jestConfigOW);
