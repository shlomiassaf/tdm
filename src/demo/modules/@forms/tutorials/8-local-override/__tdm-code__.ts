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
    file: './local-override.component.ts',
    autoRender: true,
    title: 'Component',
    section: 'tdmModel'
  },
  {
    file: './local-override.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmModel'
  },
  {
    file: './local-override.component.ts',
    autoRender: true,
    title: 'Component',
    section: 'tdmModel2'
  },
  {
    file: './local-override.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmModel2'
  },
  {
    file: './local-override.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: '../4-element-metadata/model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
