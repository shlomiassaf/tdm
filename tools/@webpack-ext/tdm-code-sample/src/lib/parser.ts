import * as OS from 'os';

interface ParserRegExp {
  section: RegExp;
  ignore: RegExp;
  ignoreLine: RegExp;
  ignoreNextLine: RegExp;
}

const SUPPORTED_LANG = {
  html: {
    section: /<!--\s*@tdm-example:(.+)\s*-->/,
    ignore: /<!--\s*@tdm-ignore:(.+)\s*-->/,
    ignoreLine: /<!--\s*@tdm-ignore-line\s*(?!:\s*-->):?(.+)?-->/,
    ignoreNextLine: /<!--\s*@tdm-ignore-next-line\s*(?!:\s*-->):?(.+)?-->/
  },
  md: {
    section: /<!--\s*@tdm-example:(.+)\s*-->/,
    ignore: /<!--\s*@tdm-ignore:(.+)\s*-->/,
    ignoreLine: /<!--\s*@tdm-ignore-line\s*(?!:\s*-->):?(.+)?-->/,
    ignoreNextLine: /<!--\s*@tdm-ignore-next-line\s*(?!:\s*-->):?(.+)?-->/
  },
  ts: {
    section: /\/\*\s*@tdm-example:(.+)\*\//,
    ignore: /\/\*\s*@tdm-ignore:(.+)\*\//,
    ignoreLine: /\/\*\s*@tdm-ignore-line\s*(?!:\s*\*\/):?(.+)?\*\//,
    ignoreNextLine: /\/\*\s*@tdm-ignore-next-line\s*(?!:\s*\*\/):?(.+)?\*\//
  },
  scss: {
    section: /\/\*\s*@tdm-example:(.+)\*\//,
    ignore: /\/\*\s*@tdm-ignore:(.+)\*\//,
    ignoreLine: /\/\*\s*@tdm-ignore-line\s*(?!:\s*\*\/):?(.+)?\*\//,
    ignoreNextLine: /\/\*\s*@tdm-ignore-next-line\s*(?!:\s*\*\/):?(.+)?\*\//
  },
  css: {
    section: /\/\*\s*@tdm-example:(.+)\*\//,
    ignore: /\/\*\s*@tdm-ignore:(.+)\*\//,
    ignoreLine: /\/\*\s*@tdm-ignore-line\s*(?!:\s*\*\/):?(.+)?\*\//,
    ignoreNextLine: /\/\*\s*@tdm-ignore-next-line\s*(?!:\s*\*\/):?(.+)?\*\//
  }
};

interface TokenParseResult {
  type: keyof ParserRegExp;
  result: null | RegExpExecArray;
}

function parseLine(p: ParserRegExp, line: string): TokenParseResult {
  let result: RegExpExecArray = p.section.exec(line);
  if (result) {
    return { type: 'section', result };
  }

  result = p.ignore.exec(line);
  if (result) {
    return { type: 'ignore', result };
  }

  result = p.ignoreLine.exec(line);
  if (result) {
    return { type: 'ignoreLine', result };
  }

  result = p.ignoreNextLine.exec(line);
  if (result) {
    return { type: 'ignoreNextLine', result };
  }
}

export interface ParserResult {
  /**
   * The root section.
   * Whole file excluding global ignore tokens
   */
 root: string;
  /**
   * The whole file, split to lines (nothing excluded)
   */
 lines: string[];
  /**
   * An array of boolean properties, each item in the array corresponds to a line in `lines`.
   * An item with the value true means that line is globally ignored or represents a token line.
   */
 ignoredLines: boolean[];
 sections: {
   [name: string]: string;
 };
}

export function parse(content: string, lang: string): ParserResult {
  const parser = SUPPORTED_LANG[lang];
  if (!parser) {
    throw new Error(`${lang} is not supported by the tdm code extraction loader`);
  }

  const lines = content.split(OS.EOL);
  const ignoredLines: boolean[] = new Array<boolean>(lines.length);
  const sections = {
    root: [] as string[],
    hot: [] as Array<{ name: string; lines: string[] }>,
    cold: [] as Array<{ name: string; lines: string[] }>,
    queue: [] as string[],
    current: '' as string
  };

  const ignoreQueue: string[] = [];

  for (let i in lines) {
    const token = parseLine(parser, lines[i]);
    let foundSingleIgnoredSection: string;
    let skip: boolean;
    if (token) {
      skip = true;
      switch (token.type) {
        case 'section':
          if (!token.result[1]) {
            throw new Error(`Invalid section defined in line ${i + 1}: ${token.result[0]} `);
          }
          const foundSection = token.result[1].trim();
          if (foundSection === 'default') {
            throw new Error(`"default" sections is reserved and can not be used templates.`);
          }
          if (sections.current) {
            if (foundSection === sections.current) {
              sections.current = sections.queue.pop();
              sections.cold.push(sections.hot.shift());
            } else {
              sections.hot.unshift({ name: foundSection, lines: [] });
              sections.queue.push(sections.current);
              sections.current = foundSection;
            }
          } else {
            sections.hot.unshift({ name: foundSection, lines: [] });
            sections.current = foundSection;
          }
          break;
        case 'ignore':
          if (!token.result[1]) {
            throw new Error(`Invalid section defined in line ${i + 1}: ${token.result[0]} `);
          }
          const foundIgnoredSection = token.result[1].trim();

          const foundIgnoredIdx = ignoreQueue.indexOf(foundIgnoredSection);
          if (foundIgnoredIdx === -1) {
            if (foundIgnoredSection !== '*' && !sections.hot.find( s => s.name === foundIgnoredSection )) {
              console.warn(`Ignoring "${foundIgnoredSection}" while not in that section.`);
            }
            ignoreQueue.push(foundIgnoredSection);
          } else {
            ignoreQueue.splice(foundIgnoredIdx, 1);
          }
          break;
        case 'ignoreLine':
          skip = false;
        case 'ignoreNextLine':
          foundSingleIgnoredSection = token.result[1] && token.result[1].trim();
          if (foundSingleIgnoredSection && ignoreQueue.indexOf(foundSingleIgnoredSection) === -1) {
            lines[i] = lines[i].substr(0, token.result.index)
              + lines[i].substr(token.result.index + token.result[0].length);
            ignoreQueue.push(foundSingleIgnoredSection);
          } else {
            skip = true;
            foundSingleIgnoredSection = undefined;
          }
          if (token.type === 'ignoreNextLine') {
            ignoredLines[i] = true;
            i = i + 1;
          }
          break;
        default:
          skip = false;
          break;
      }
    }

    if (ignoreQueue.length) {
      if (ignoreQueue.indexOf('*') > -1) {
        skip = true;
      }
    }

    if (!skip) {
      sections.root.push(lines[i]);
      for (let h of sections.hot) {
        if (ignoreQueue.indexOf(h.name) === -1) {
          h.lines.push(lines[i]);
        }
      }
    } else {
      ignoredLines[i] = true;
    }

    if (foundSingleIgnoredSection) {
      ignoreQueue.pop();
    }
  }

  return {
    root: sections.root.join(OS.EOL),
    lines,
    ignoredLines,
    sections: sections.cold.concat(sections.hot).reduce( (agg, s) => {
      agg[s.name] = s.lines.join(OS.EOL);
      return agg;
    }, {} as any)
  };
}
