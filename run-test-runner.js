require('ts-node/register');
const main = require('./src/test-type/testing/test-runner.ts').main;

process.exit(main(process.argv.slice(2)));
