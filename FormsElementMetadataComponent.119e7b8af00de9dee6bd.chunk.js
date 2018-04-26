webpackJsonp([35],{"/0No":function(s,n){s.exports=[{file:"README.md",lang:"md",section:"default",code:'<h1><a id="element-metadata" class="anchor" href="#element-metadata"><span class="header-link"></span></a>Element Metadata</h1><p>UI elements are bound to form controls, they can access the value and\nupdate it.</p>\n<p>Sometimes the value by itself is not enough, there are a lot of common\nscenarios where additional information is required to properly display\na form control.</p>\n<p>The most common of all is the select box, the user select a value from\na fixed list of values, that value is assign to the form control.</p>\n<p>What about the fixed list? where does it come from?</p>\n<h2><a id="passing-form-control-code-data-code-" class="anchor" href="#passing-form-control-code-data-code-"><span class="header-link"></span></a>Passing form control <code>data</code></h2><p>The <code>RenderDef</code> object has an optional <code>data</code> property that can be used\nto pass data to renderer.</p>\n<p>The renderer can pass it to UI elements or use it internally.</p>\n<p>The <code>data</code> property can have a specific type, based on the <code>vType</code>\ndefined or can have a wide <code>any</code> type, this is up to the renderer&#39;s\nimplementation.</p>\n<div class="alert">\n  The value sent to <code>data</code> depends on the <strong>renderer</strong>.\n  <br> \n  <br>\n  Renderer implementation should use the same types for all common\n  visual types however this is not guaranteed \n</div>\n\n<p>Let&#39;s add the <code>superPower</code> property to the <code>Hero</code> model which represents\nthe super power assigned to the <code>Hero</code>. There are only 5 known super\npowers, we can not assign an arbitrary value.</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">type</span> SUPER_POWER = <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n</code></pre>\n<p>This is a classic <strong>select</strong> component, we will define the <code>superPower</code>\nproperty with an additional <code>data</code> property providing the list of\nsuper power&#39;s for selection:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">import</span> { Model, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Prop</span>({\n  form: {\n    render: {\n      vType: <span class="hljs-string">\'select\'</span>,\n      label: <span class="hljs-string">\'Super Power\'</span>,\n      data: {\n        options: [\n          { value: <span class="hljs-string">\'selfHealing\'</span>, label: <span class="hljs-string">\'Self Healing\'</span> },\n          { value: <span class="hljs-string">\'flying\'</span>, label: <span class="hljs-string">\'Flying\'</span> },\n          { value: <span class="hljs-string">\'cloaking\'</span>, label: <span class="hljs-string">\'Cloaking\'</span> },\n          { value: <span class="hljs-string">\'cloning\'</span>, label: <span class="hljs-string">\'Cloning\'</span> },\n          { value: <span class="hljs-string">\'invisibility\'</span>, label: <span class="hljs-string">\'Invisibility\'</span> }\n        ]\n      }\n    }\n  }\n})\nsuperPower: <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n</code></pre>\n<p>Zooming in on the type of the <code>data</code> object:</p>\n<pre class="lang-ts"><code class="lang-ts">{\n  options: <span class="hljs-built_in">Array</span>&lt;{ value: <span class="hljs-built_in">any</span>; label: <span class="hljs-built_in">string</span>; }&gt;\n};\n</code></pre>\n<p><code>data</code> is a simple array of value/label pairs, very similar to how\nan <code>&lt;option&gt;</code> element looks like.</p>\n<p>The type sent to <code>data</code> for the <strong>select</strong> visual type is not defined\nby the library, it comes from the renderer.</p>\n<p>The following code is a made up example of how a renderer defines the\ntype definition of <code>data</code>:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">interface</span> FormElementType {\n  text: never;\n  <span class="hljs-built_in">number</span>: never;\n  <span class="hljs-built_in">boolean</span>: never;\n\n  radio: { options: <span class="hljs-built_in">Array</span>&lt;{ value: <span class="hljs-built_in">any</span>; label?: <span class="hljs-built_in">string</span>; }&gt; };\n  select: { options: <span class="hljs-built_in">Array</span>&lt;{ value: <span class="hljs-built_in">any</span>; label?: <span class="hljs-built_in">string</span>; }&gt; };\n  password: never;\n  slider: { min?: <span class="hljs-built_in">number</span>, max?: <span class="hljs-built_in">number</span>};\n  slideToggle: never;\n  textarea: never;\n}\n</code></pre>\n<p>The keys are the valid visual type values we can set to <strong>vType</strong> and\nthe type of each key&#39;s is the valid type for the <code>data</code> property.</p>\n<p>We can see the type for <code>select</code>. Notice the <code>label</code> property is optional\nwhich imply that if not set it is taken from `value, this renderer needs\nproper documentation.</p>\n<div class="alert">\nA renderer might not implement strict types for the data property and\nit might also choose not to implement a strict type for <code>vType</code>\n</div>\n\n<h2><a id="extending-code-hero-code-" class="anchor" href="#extending-code-hero-code-"><span class="header-link"></span></a>Extending <code>Hero</code></h2><p>Before we move on we need to add some properties to the <code>Hero</code> model\nso we are able to demonstrate some of the features.</p>\n<p>The new model might include options we have not reviewed yet, no worries\nwe will get to them soon.</p>\n<p>There is nothing special about the properties we are about to add. The\ncode below is the new <code>Hero</code> model followed by a live form example.</p>\n'},{file:"element-metadata.component.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-keyword">import</span> { Hero } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./model\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'form-element-metadata\'</span>,\n  templateUrl: <span class="hljs-string">\'./element-metadata.component.html\'</span>,\n  styleUrls: [ <span class="hljs-string">\'./element-metadata.component.scss\'</span> ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ElementMetadataComponent {\n  model = <span class="hljs-keyword">new</span> Hero();\n\n}\n',title:"Component"},{file:"element-metadata.component.html",lang:"html",section:"tdmDemo",code:'  <span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>',title:"Template"},{file:"model.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Model, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Hero ID\'</span>\n      }\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'Hero Name\'</span>\n      }\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'date\'</span>,\n        label: <span class="hljs-string">\'Hero Birth\'</span>\n      }\n    }\n  })\n  birth: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'boolean\'</span>,\n        label: <span class="hljs-string">\'Has Tracking Device\'</span>\n      }\n    }\n  })\n  hasTracking: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slideToggle\'</span>,\n        label: <span class="hljs-string">\'Double Agent\'</span>\n      }\n    }\n  })\n  doubleAgent: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slider\'</span>,\n        label: <span class="hljs-string">\'BMI Index\'</span>,\n        data: { min: <span class="hljs-number">1</span>, max: <span class="hljs-number">35</span> }\n      }\n    }\n  })\n  bmi: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'select\'</span>,\n        label: <span class="hljs-string">\'Super Power\'</span>,\n        data: {\n          options: [\n            { value: <span class="hljs-string">\'selfHealing\'</span>, label: <span class="hljs-string">\'Self Healing\'</span> },\n            { value: <span class="hljs-string">\'flying\'</span>, label: <span class="hljs-string">\'Flying\'</span> },\n            { value: <span class="hljs-string">\'cloaking\'</span>, label: <span class="hljs-string">\'Cloaking\'</span> },\n            { value: <span class="hljs-string">\'cloning\'</span>, label: <span class="hljs-string">\'Cloning\'</span> },\n            { value: <span class="hljs-string">\'invisibility\'</span>, label: <span class="hljs-string">\'Invisibility\'</span> }\n          ]\n        }\n      }\n    }\n  })\n  superPower: <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'textarea\'</span>,\n        label: <span class="hljs-string">\'Bio\'</span>,\n        data: {\n          autoSize: <span class="hljs-literal">false</span>,\n          minRows: <span class="hljs-number">3</span>,\n          maxRows: <span class="hljs-number">5</span>\n        }\n      }\n    }\n  })\n  bio: <span class="hljs-built_in">string</span>;\n}\n',title:"Model"}]}});
//# sourceMappingURL=FormsElementMetadataComponent.119e7b8af00de9dee6bd.chunk.js.map