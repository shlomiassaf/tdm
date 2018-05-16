import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true
  },
  {
    file: './validation.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './validation.component.html',
    autoRender: true,
    title: 'Template'
  },
  {
    file: './model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
