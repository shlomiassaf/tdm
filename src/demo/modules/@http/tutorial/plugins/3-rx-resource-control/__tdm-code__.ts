import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true,
    title: 'rx-resource-control'
  },
  {
    file: './rx-resource-control.component.ts',
    title: 'Component',
    autoRender: true,
    section: 'code',
    reformat: true
  },
  {
    file: './rx-resource-control.component.html',
    title: 'Template',
    autoRender: true,
    section: 'code'
  }
] as CodeExtractionInstructions[];
