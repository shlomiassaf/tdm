import { CodeExtractionInstructions } from '@webpack-ext/tdm-code-sample';

module.exports = [
  {
    file: './README.md',
    autoRender: true,
    title: 'Next',
    section: 'PART-1'
  },
  {
    file: './README.md',
    autoRender: true,
    title: 'Next',
    section: 'PART-2'
  },
  {
    file: './next.component.ts',
    title: 'Component',
    autoRender: true,
    section: 'code',
    reformat: true
  },
  {
    file: './next.component.html',
    title: 'Template',
    autoRender: true,
    section: 'code'
  }
] as CodeExtractionInstructions[];
