export interface CodeExtractionInstructions {
  /**
   * An optional identifier for this instruction.
   * This has no effect over the process, it is added to the result.
   *
   * Use this to identify results from the same file.
   * e.g. when using multiple `slice` instructions on the same file.
   */
  id?: string;

  /**
   * The file to load, relative to the resource it is defined on.
   * The file is also used as an ID for caching so the same file will only get parsed once (per resource host)
   */
  file: string;

  /**
   * A name of a token to find in the file, which represent a position used to slice the file into a section.
   * By default the section lower boundary is the end of the file unless an identical token is found (i.e. closing tag)
   *
   * The position resolution is LINE NUMBER, i.e. the upper boundary position is the next line from where the token was
   * found and, when a closing tag was found , a line before where the token was found.
   *
   * You can not define a `section` and a `slice` together in a `CodeExtractionInstructions` instance.
   * A `section` is safer as it is visible when making changes but intrusive as it is added to the file.
   * A `slice` is transparent as it does not requires editing the file but has the risk of being obsolete due to file
   * changes not reflected.
   *
   * In other word, section is coupled, slice is not.
   */
  section?: string;

  /**
   * When set to true, will try to format the code (if a formatter exists for the type)
   */
  reformat?: boolean;

  /**
   * A tuple of 2 numbers, line start and line end, representing a boundary used to slice file into a section.
   *
   * The position resolution is LINE NUMBER.
   *
   * You can not define a `section` and a `slice` together in a `CodeExtractionInstructions` instance.
   * A `section` is safer as it is visible when making changes but intrusive as it is added to the file.
   * A `slice` is transparent as it does not requires editing the file but has the risk of being obsolete due to file
   * changes not reflected.
   *
   * In other word, section is coupled, slice is not.
   */
  slice?: [number, number];

  title?: string;
  /**
   * The code to parse.
   * Optional, if set the loader will not try to load the file and will use the code supplied.
   */
  code?: string;
  /**
   * The lang to use.
   * Optional, if not set the lang will be set to the file extension.
   *
   * > If you provide a lang, make sure to provide a valid one
   */
  lang?: string;

  /**
   * When true, will apply a renderer based on the language.
   * For HTML, CSS, SCSS and TypeScript will use highlight.js
   * For Markdown will user marked
   */
  autoRender?: boolean;
  /**
   * Optional rendering options to send to the renderer.
   */
  rendererOptions?: any;
}

export interface ExtractedCode {
  id?: string;
  file?: string;
  title?: string;
  section?: string;
  code: string;
  lang: any;
}

// export interface ExtractedCodeResult {
//   [ lang: string ]: {
//     default?: ExtractedCode;
//     [ section: string ]: ExtractedCode;
//   };
// }
