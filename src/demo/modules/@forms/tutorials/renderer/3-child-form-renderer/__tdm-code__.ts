import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true
  },
  {
    file: './child-form-renderer.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './child-form-renderer.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './child-form-renderer.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: './model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
