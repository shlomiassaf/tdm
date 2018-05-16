import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true,
    title: 'flow-control'
  },
  {
    file: './flow-control.component.ts',
    title: 'Component',
    autoRender: true,
    section: 'code',
    reformat: true
  },
  {
    file: './flow-control.component.html',
    title: 'Template',
    autoRender: true,
    section: 'code'
  }
] as CodeExtractionInstructions[];
