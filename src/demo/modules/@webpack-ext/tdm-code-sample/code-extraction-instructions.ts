export interface CodeExtractionInstructions {
  file: string;
  section?: string;
  title?: string;
  passFileName?: boolean;
}

export interface ExtractedCode {
  file?: string;
  title?: string;
  code: string;
  lang: any;
}
