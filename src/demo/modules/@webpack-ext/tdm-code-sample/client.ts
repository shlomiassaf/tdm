import { ExtractedCode } from './code-extraction-instructions';

export { ExtractedCode, CodeExtractionInstructions } from './code-extraction-instructions';

/**
 * Returns the collection (from `code`) filtered by the section name
 * @param code The collection of extracted code
 * @param section The section name to filter by
 * @param {boolean} defaultToWildCard When true, if a section was not found it will include an extract code without
 * a section (if exists)
 */
export function bySection(code: ExtractedCode[], section: string, defaultToWildCard: boolean): ExtractedCode[] {
  return code
    .filter(c => (!c.section && defaultToWildCard) || c.section === section);
}
