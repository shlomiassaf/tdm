import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './exclude-disable-hidden-state.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './exclude-disable-hidden-state.component.html',
    autoRender: true,
    title: 'Template',
    section: 'TDM-DEMO'
  },
  {
    file: './exclude-disable-hidden-state.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: '../_models/user.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
