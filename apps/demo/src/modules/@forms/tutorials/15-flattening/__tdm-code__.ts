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
    file: './flattening.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './flattening.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './flattening.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: './other-view.md',
    autoRender: true,
    section: 'visualReal'
  },
  {
    file: './other-view.md',
    autoRender: true,
    section: 'visualVirtual'
  },
  {
    file: './other-view.md',
    autoRender: true,
    section: 'coordinates'
  },
  {
    file: './other-view.md',
    autoRender: true,
    section: 'coordinatesClass'
  },
  {
    file: './other-view.md',
    autoRender: true,
    section: 'base'
  },
  {
    file: './other-view.md',
    autoRender: true,
    section: 'baseClass'
  },
  {
    file: './model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
