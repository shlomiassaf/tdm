import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true,
    section: 'part1'
  },
  {
    file: './README.md',
    autoRender: true,
    section: 'part2'
  },
  {
    file: './README.md',
    autoRender: true,
    section: 'part3'
  },
  {
    file: './README.md',
    autoRender: true,
    section: 'part4'
  },
  {
    file: './README.md',
    autoRender: true,
    section: 'part5'
  },
  {
    file: './array-action-renderer.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './array-action-renderer.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './array-action-renderer.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: './renderer/renderer-v4.component.ts',
    autoRender: true,
    title: 'Array Action Renderer Class'
  },
  {
    file: './renderer/renderer-v4.component.html',
    autoRender: true,
    title: 'Array Action Renderer Template'
  },
  {
    file: './renderer/renderer-v4.component.scss',
    autoRender: true,
    title: 'Array Action Renderer Style'
  },
  {
    file: './renderer/renderer-v4.component.html',
    autoRender: true,
    section: 'primitive',
    title: 'Primitives'
  },
  {
    file: './renderer/renderer-v4.component.html',
    autoRender: true,
    section: 'complex',
    title: 'Complex Data Structures'
  },
  {
    file: './renderer/renderer-v4.component.html',
    autoRender: true,
    section: 'actionRow',
    title: 'Acton Row'
  },
  {
    file: '../../16-arrays/model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
