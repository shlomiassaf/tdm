const fs = require('fs-extra');
const path = require('path');

const base = fs.readJsonSync(path.join(__dirname, 'jest.base-config.json'));

const jestConfigOW = process.env.test_lib
  ? fs.readJsonSync(path.join(__dirname, 'src', '@tdm', process.env.test_lib, 'jest.config.json'))
  : {}
;

module.exports = Object.assign(base, jestConfigOW);
