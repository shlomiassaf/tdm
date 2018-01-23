import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './exclude-disable-hidden-state.component.ts',
    title: 'Component'
  },
  {
    file: './exclude-disable-hidden-state.component.html',
    title: 'Template',
    section: 'TDM-DEMO'
  },
  {
    file: './exclude-disable-hidden-state.component.scss',
    title: 'Style'
  },
  {
    file: '../models/user.ts',
    title: 'Model'
  }
] as CodeExtractionInstructions[];
