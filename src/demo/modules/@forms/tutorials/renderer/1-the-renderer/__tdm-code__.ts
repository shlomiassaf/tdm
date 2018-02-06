import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    id: 'DynamicFormControlRenderer',
    file: '../../../../../../@tdm/ngx-dynamic-forms/src/tdm-model-form/tdm-model-form.ts',
    autoRender: true,
    slice: [9, 17] // TODO: implement symbol extraction in loader, this is not safe.
  },
  {
    file: './README.md',
    autoRender: true,
    title: 'Setup',
    section: 'part1'
  },
  {
    file: './README.md',
    autoRender: true,
    title: 'Setup',
    section: 'part2'
  },
  {
    file: './README.md',
    autoRender: true,
    title: 'Setup',
    section: 'part3'
  },
  {
    file: './README.md',
    autoRender: true,
    title: 'Setup',
    section: 'part4'
  },
  {
    file: './renderer/renderer.component.ts',
    autoRender: true,
    title: 'Simple Renderer Class'
  },
  {
    file: './renderer/renderer.component.html',
    autoRender: true,
    title: 'Simple Renderer Template'
  },
  {
    file: './renderer/renderer.types.ts',
    autoRender: true,
    title: 'Simple Renderer - Types'
  },
  {
    file: './the-renderer.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './the-renderer.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './model.ts',
    autoRender: true,
    title: 'Model'
  },
  {
    file: './model.ts',
    autoRender: true,
    title: 'Model1',
    section: 'plain'
  }
] as CodeExtractionInstructions[];
