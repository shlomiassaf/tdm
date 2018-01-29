import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './hot-bind.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './hot-bind.component.html',
    autoRender: true,
    title: 'Template',
    section: 'TDM-DEMO'
  },
  {
    file: './hot-bind.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: '../_models/user.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
