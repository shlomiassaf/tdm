import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './before-render-event.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './before-render-event.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './before-render-event.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: '../_models/user.ts',
    autoRender: true,
    title: 'Model'
  },
  {
    file: './README.md',
    autoRender: true
  }
] as CodeExtractionInstructions[];
