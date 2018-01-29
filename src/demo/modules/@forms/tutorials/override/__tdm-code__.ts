import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './override.component.ts',
    autoRender: true,
    title: 'Component',
    section: 'TDM-DEMO'
  },
  {
    file: './override.component.html',
    autoRender: true,
    title: 'Template',
    section: 'TDM-DEMO'
  },
  {
    file: './override.component.ts',
    autoRender: true,
    title: 'Component',
    section: 'TDM-DEMO2'
  },
  {
    file: './override.component.html',
    autoRender: true,
    title: 'Template',
    section: 'TDM-DEMO2'
  },
  {
    file: './override.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: '../_models/user.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
