import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true
  },
  {
    file: './model.ts',
    autoRender: true,
    title: 'UI Developer'
  }
] as CodeExtractionInstructions[];
