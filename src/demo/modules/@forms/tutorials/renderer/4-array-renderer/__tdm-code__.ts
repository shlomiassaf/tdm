import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true
  },
  {
    file: './array-renderer.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './array-renderer.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './array-renderer.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: './renderer/renderer-v3.component.ts',
    autoRender: true,
    title: 'Array Renderer Class'
  },
  {
    file: './renderer/renderer-v3.component.html',
    autoRender: true,
    title: 'Array Renderer Template'
  },
  {
    file: './renderer/renderer-v3.component.scss',
    autoRender: true,
    title: 'Array Renderer Style'
  },
  {
    file: './model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
