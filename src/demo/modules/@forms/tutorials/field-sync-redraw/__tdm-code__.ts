import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './field-sync-redraw.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './field-sync-redraw.component.html',
    autoRender: true,
    title: 'Template'
  },
  {
    file: './field-sync-redraw.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: '../_models/user.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
