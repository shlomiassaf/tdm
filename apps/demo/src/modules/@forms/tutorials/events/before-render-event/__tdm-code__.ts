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
    file: '../../4-element-metadata/model.ts',
    autoRender: true,
    title: 'Model'
  },
  {
    file: './README.md',
    autoRender: true
  }
] as CodeExtractionInstructions[];
