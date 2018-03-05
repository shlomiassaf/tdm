import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true,
    title: 'Cancelling',
    section: 'PART-1'
  },
  {
    file: './README.md',
    autoRender: true,
    title: 'Cancelling',
    section: 'PART-2'
  },
  {
    file: './cancelling.component.ts',
    autoRender: true,
    section: 'code',
    reformat: true
  }
] as CodeExtractionInstructions[];
