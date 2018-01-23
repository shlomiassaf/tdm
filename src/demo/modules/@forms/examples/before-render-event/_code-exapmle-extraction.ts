import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './before-render-event.component.ts',
    title: 'Component'
  },
  {
    file: './before-render-event.component.html',
    title: 'Template',
    section: 'TDM-DEMO'
  },
  {
    file: './before-render-event.component.scss',
    title: 'Style'
  },
  {
    file: '../models/user.ts',
    title: 'Model'
  }
] as CodeExtractionInstructions[];
