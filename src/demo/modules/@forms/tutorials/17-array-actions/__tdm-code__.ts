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
    file: './array-actions.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './array-actions.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './array-actions.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: '../16-arrays/model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
