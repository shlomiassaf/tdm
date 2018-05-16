import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './FEATURES.md',
    autoRender: true,
    section: 'DAO',
    title: 'DAO'
  },
  {
    file: './FEATURES.md',
    autoRender: true,
    section: 'ActiveRecord',
    title: 'Active Record'
  },
  {
    file: './FEATURES.md',
    autoRender: true,
    section: 'RXJS',
    title: 'RXJS'
  }
] as CodeExtractionInstructions[];
