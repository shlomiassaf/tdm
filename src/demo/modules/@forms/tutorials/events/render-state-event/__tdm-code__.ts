import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './render-state-event.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './render-state-event.component.html',
    autoRender: true,
    title: 'Template',
    section: 'TDM-DEMO'
  },
  {
    file: './render-state-event.component.scss',
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
