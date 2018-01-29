import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    section: 'PART-1',
    autoRender: true
  },
  {
    file: './README.md',
    section: 'PART-2',
    autoRender: true
  },
  {
    file: './README.md',
    section: 'PART-3',
    autoRender: true
  },
  {
    file: './model.ts',
    section: 'DEMO-1',
    autoRender: true,
    title: 'UI Developer'
  },
  {
    file: './model.ts',
    section: 'DEMO-2',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
