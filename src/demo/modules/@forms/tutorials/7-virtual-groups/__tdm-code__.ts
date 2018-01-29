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
    file: './virtual-groups.component.ts',
    autoRender: true,
    title: 'Component'
  },
  {
    file: './virtual-groups.component.html',
    autoRender: true,
    title: 'Template',
    section: 'simple'
  },
  {
    file: './virtual-groups.component.html',
    autoRender: true,
    title: 'Template',
    section: '3way'
  },
  {
    file: '../6-a-better-renderer/model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
