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
    file: './filter-disable-hidden-state.component.ts',
    autoRender: true,
    title: 'Component',
    section: 'tdmDemo'
  },
  {
    file: './filter-disable-hidden-state.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemo'
  },
  {
    file: './filter-disable-hidden-state.component.ts',
    autoRender: true,
    title: 'Component',
    section: 'tdmDemoInteractive'
  },
  {
    file: './filter-disable-hidden-state.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemoInteractive'
  },
  {
    file: './filter-disable-hidden-state.component.ts',
    autoRender: true,
    title: 'Component',
    section: 'tdmDemoExcludeRequired'
  },
  {
    file: './filter-disable-hidden-state.component.html',
    autoRender: true,
    title: 'Template',
    section: 'tdmDemoExcludeRequired'
  },
  {
    file: './filter-disable-hidden-state.component.scss',
    autoRender: true,
    title: 'Style'
  },
  {
    file: '../4-element-metadata/model.ts',
    autoRender: true,
    title: 'Model'
  }
] as CodeExtractionInstructions[];
