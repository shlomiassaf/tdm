A loader that expects a commonjs default export of an object that
contains instructions to load code files as text.

The loader can also parse the code files to extracts a specific named
section or exclude a section.

Supported languages:
  - html
  - ts (typescript)
  - css
  - scss
  - md (markdown)

> Does not support TS code.

## Token syntax
You can create markers in the source code that allow the loader to
ignore lines or group lines based on the token.

Each token type has a unique format but the format is the same across
languages but each language has a different comment style which effect
the final token format.

### Sections (group)
A section allows splitting the file into groups with a unique name.

#### Default section
Each file has at least 1 section, which is unnamed and contains the
whole context of the file excluding ignore token.
There is no need to define a token for this section, it is set by default.

#### Names sections
A named section requires the following format:

```
@tdm-example:SECTION_NAME
```

Where `SECTION_NAME` is the name of the section that will be used to
identify this section.

A section must have an opening token and an optional closing token.
Closing token is identical to opening token.
If a closing token is not set the section will consume all code to the end.

Examples:
  - HTML, MD: `<!--@tdm-example:TDM-DEMO-->`
  - TS, CSS, SCSS: `/* @tdm-example:TDM-DEMO */`

You can create multiple sections, overlapping, intersections etc...


### Ignore
There are 2 types of ignore tokens:
  - Multi line (sections)
  - Single line

##### Single line
Single line sections:
  - `@tdm-ignore-line`
  - `@tdm-ignore-line:SECTION_NAME`
  - `@tdm-ignore-next-line:SECTION_NAME`

Examples:
  - HTML, MD: `<!--@tdm-ignore-line-->`
  - HTML, MD: `<!--@tdm-ignore-line:TDM-DEMO-->`
  - TS, CSS, SCSS: `/* @tdm-ignore-line */`

Single line tokens effect all sections.

##### Multi line
An ignore section requires the following format:

```
@tdm-ignore:SECTION_NAME
```

Where `SECTION_NAME` is the name of the section that will be used to
match against an existing named section.

For a wild card ignore section use `*` as the name
```
@tdm-ignore:*
```

Wild card ignore sections will effect the default section and all
named section.

An ignore section with will only effect the section it refers to and of
course must be within the named section.

Examples:
  - HTML, MD: `<!--@tdm-ignore:TDM-DEMO-->`
  - TS, CSS, SCSS: `/* @tdm-ignore:TDM-DEMO */`

  - HTML, MD: `<!--@tdm-ignore:*-->`
  - TS, CSS, SCSS: `/* @tdm-ignore:* */`
  

> All token, except single-line tokens, should be defined on a dedicated
line. That line will not be part of the output. 