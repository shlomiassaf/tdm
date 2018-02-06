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
    file: '../../4-element-metadata/model.ts',
    autoRender: true,
    title: 'Model'
  },
  {
    file: './README.md',
    autoRender: true
  }
] as CodeExtractionInstructions[];
