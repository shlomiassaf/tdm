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
    file: './control-outlet.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './control-outlet.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './control-outlet.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: '../4-element-metadata/model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
