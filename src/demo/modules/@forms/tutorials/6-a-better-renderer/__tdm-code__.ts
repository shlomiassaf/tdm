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
    file: './renderer/renderer-v2.component.ts',
    autoRender: true,
    title: 'Better Renderer Class'
  },
  {
    file: './renderer/renderer-v2.component.html',
    autoRender: true,
    title: 'Better Renderer Template'
  },
  {
    file: './renderer/renderer-v2.component.scss',
    autoRender: true,
    title: 'Better Renderer Style'
  },
  {
    file: './renderer/renderer-v2.types.ts',
    autoRender: true,
    title: 'Better Renderer - Types'
  },
  {
    file: './a-better-renderer.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './a-better-renderer.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './a-better-renderer.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: './model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
