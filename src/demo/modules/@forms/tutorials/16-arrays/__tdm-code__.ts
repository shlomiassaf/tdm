import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true,
    section: 'part1'
  },{
    file: './README.md',
    autoRender: true,
    section: 'part2'
  },
  {
    file: './arrays.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './arrays.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './arrays.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: './model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
