const tmpl = require('blueimp-tmpl');


const C_JOIN = `{% for (var i=1; i<=o.num; i++) { %} & C{%=i%}{% } %}`;
const T_JOIN = `{% for (var i=1; i<=o.num; i++) { %} & T{%=i%}{% } %}`;
const TC_JOIN = `{% for (var i=1; i<=o.num; i++) { %}, T{%=i%}, C{%=i%}{% } %}`;
const PARAM_JOIN = `{% for (var i=1; i<=o.num; i++) { %}, m{%=i%}: C{%=i%} & Type<T{%=i%}>{% } %}`;


const REST_MIXIN = `export function RestMixin<Model, TypeofModel${TC_JOIN}>(model: TypeofModel & Type<Model>${PARAM_JOIN}): Type<Model & BaseResource<Model> & BaseRestResource<BaseResource<Model>>${T_JOIN}> & typeof BaseResource & typeof BaseRestResource & BaseRestResourceStatic<Model> & TypeofModel${C_JOIN};`;
const TIXIN_TEMPLATE = `export function Tixin<TBASE, CBASE${TC_JOIN}>(base: CBASE & Type<TBASE>${PARAM_JOIN}): Type<TBASE${T_JOIN}> & CBASE${C_JOIN};`;
const TIXINEXT_TEMPLATE = `export function TixinExt<TBASE, CBASE, SMIXIN${TC_JOIN}>(base: CBASE & Type<TBASE>, extraStatic: SMIXIN${PARAM_JOIN}): Type<TBASE${T_JOIN}> & SMIXIN & CBASE${C_JOIN};`;


function runTemplate(template, iteration, startIdx) {
  if (!startIdx) startIdx = 0;
  const arr = [];
  for (let num = startIdx; num<=iteration; num++) {
    arr.push(tmpl(template, { num }));
  }
  return arr;
}

function print(template, iteration, startIdx) {
  console.log('/* GENERATED BY scripts/generic_codegen.js */');
  console.log( runTemplate(template, iteration, startIdx).join('\n') );
  console.log('\n\n');
}

print(REST_MIXIN, 7, 0);
print(TIXIN_TEMPLATE, 7, 1);
print(TIXINEXT_TEMPLATE, 7, 1);

