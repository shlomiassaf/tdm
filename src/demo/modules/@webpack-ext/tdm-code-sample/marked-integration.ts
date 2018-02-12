import { highlightAuto } from 'highlight.js';
import * as marked from 'marked';

const APPEND_PRE_CLASS_REGEXP = /^<pre><code class="(.+?)">/;
const renderer = new marked.Renderer();

renderer.code = function(code, lang, escaped) {
  if (!lang) {
    return marked.Renderer.prototype.code.call(this, code, lang, escaped);
  } else {
    const result = marked.Renderer.prototype.code.call(this, code, lang, escaped);
    const clsLang = APPEND_PRE_CLASS_REGEXP.exec(result);
    return clsLang
      ? `<pre class="${clsLang[1]}">` + result.substr(5)
      : result
      ;
  }
};
renderer.heading = function (text, level) {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  return `<h${level}><a id="${escapedText}" class="anchor" href="#${escapedText}">\
<span class="header-link"></span></a>${text}</h${level}>`;
};

export const DEFAULT_MARKED_OPTIONS = {
  renderer,
  highlight(code, lang) {
    return highlightAuto(code, [lang]).value;
  }
};
