import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true,
    title: 'DAO'
  },
  {
    file: '../../client/models/customer.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
