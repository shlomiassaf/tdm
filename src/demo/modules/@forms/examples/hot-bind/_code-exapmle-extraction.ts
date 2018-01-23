import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './hot-bind.component.ts',
    title: 'Component'
  },
  {
    file: './hot-bind.component.html',
    title: 'Template',
    section: 'TDM-DEMO'
  },
  {
    file: './hot-bind.component.scss',
    title: 'Style'
  },
  {
    file: '../models/user.ts',
    title: 'Model'
  }
] as CodeExtractionInstructions[];
