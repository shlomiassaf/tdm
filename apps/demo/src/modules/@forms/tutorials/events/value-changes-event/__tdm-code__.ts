import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './value-changes-event.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './value-changes-event.component.html',
    autoRender: true,
    title: 'Template',
    section: 'TDM-DEMO'
  },
  {
    file: './value-changes-event.component.scss',
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
