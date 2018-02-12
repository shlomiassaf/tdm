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
    file: './renderer/dynamic-form-row.component.html',
    autoRender: true,
    title: 'Renderer Container - Template'
  },
  {
    file: './renderer/dynamic-form-row.component.ts',
    autoRender: true,
    title: 'Renderer Container - Component'
  },
  {
    file: './render-container.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './render-container.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: '../4-element-metadata/model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
