import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true
  },
  {
    file: './element-metadata.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './element-metadata.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
