import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true,
    title: 'Events',
    section: 'PART-1'
  },
  {
    file: './README.md',
    autoRender: true,
    title: 'Events',
    section: 'PART-2'
  },
  {
    file: './events.component.ts',
    autoRender: true,
    section: 'code',
    reformat: true
  }
] as CodeExtractionInstructions[];
