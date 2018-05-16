import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true,
    title: 'Setup',
    section: 'part1'
  },
  {
    file: './creating-a-model.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './creating-a-model.component.html',
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
