import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './override.component.ts',
    title: 'Component'
  },
  {
    file: './override.component.html',
    title: 'Template',
    section: 'TDM-DEMO2'
  },
  {
    file: './override.component.scss',
    title: 'Style'
  },
  {
    file: '../models/user.ts',
    title: 'Model'
  }
] as CodeExtractionInstructions[];
