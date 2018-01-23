import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './field-sync-redraw.component.ts',
    title: 'Component'
  },
  {
    file: './field-sync-redraw.component.html',
    title: 'Template'
  },
  {
    file: './field-sync-redraw.component.scss',
    title: 'Style'
  },
  {
    file: '../models/user.ts',
    title: 'Model'
  }
] as CodeExtractionInstructions[];
