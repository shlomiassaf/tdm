import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true,
    section: 'PART-1'
  },
  {
    file: './README.md',
    autoRender: true,
    section: 'PART-2'
  },
  {
    file: './README.md',
    autoRender: true,
    section: 'PART-3'
  },
  {
    file: './README.md',
    autoRender: true,
    section: 'PART-4'
  },
  {
    file: './dao-ar-example.ts',
    section: 'MODEL',
    autoRender: true,
    title: 'From a Model'
  },
  {
    file: './dao-ar-example.ts',
    section: 'DAO',
    autoRender: true,
    title: 'TO: Data Access Object'
  },
  {
    file: './dao-ar-example.ts',
    section: 'AR',
    autoRender: true,
    title: 'OR: Active Record'
  },
  {
    file: './introduction.component.ts',
    autoRender: true,
    section: 'code',
    reformat: true
  }
] as CodeExtractionInstructions[];
