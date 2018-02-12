import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true
  },
  {
    file: './disable-form.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './disable-form.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './disable-form.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: '../4-element-metadata/model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
