webpackJsonp([22],{GjME:function(s,n){s.exports=[{file:"README.md",lang:"md",section:"part1",code:'<h1><a id="flattening" class="anchor" href="#flattening"><span class="header-link"></span></a>Flattening</h1><p>Flattening literally means taking an object and making it flat.</p>\n<p>In the <a class="tdm-anchor-trap" href="../complex-data-structures">Overview</a>\nabout complex data structures we described flat models, flattening is\ndone on non-flat models, models that have properties that are arrays or\nobjects.</p>\n<p>To visualise, flattening to show only <strong>d</strong> and <strong>f</strong>:</p>\n<pre class="lang-js"><code class="lang-js">{\n  <span class="hljs-attr">a</span>: {\n    <span class="hljs-attr">b</span>: {\n      <span class="hljs-attr">f</span>: <span class="hljs-string">"f"</span>,\n      <span class="hljs-attr">c</span>: {\n        <span class="hljs-attr">d</span>: <span class="hljs-string">"d"</span>\n      }\n    }\n  }\n}\n</code></pre>\n<pre class="lang-js"><code class="lang-js">{\n  <span class="hljs-attr">f</span>: <span class="hljs-string">"f"</span>,\n  <span class="hljs-attr">d</span>: <span class="hljs-string">"d"</span>\n}\n</code></pre>\n<p>Model&#39;s are used to describe entities in a domain, things like products,\nusers, roles etc. The process of designing the structure of a model\ndoes not care how a model will look like in a form.</p>\n<p>It is common to have models with nested objects and a form that takes\npieces, in different depths, to create a flat form.</p>\n<h2><a id="nested-forms" class="anchor" href="#nested-forms"><span class="header-link"></span></a>Nested forms</h2><p>In the previous chapter we covered\n<a class="tdm-anchor-trap" href="../child-form">Child Forms</a> and\nthe concept of <strong>nested forms</strong>.</p>\n<p>A nested form is form with at least one child that is not a\n<code>FormControl</code>, i.e. a child that is <code>FormGroup</code> or <code>FormArray</code>.</p>\n<p><code>FormArray</code>&#39;s are covered in a dedicated chapter, we will focus on\n<code>FormGroup</code>.</p>\n<p>We already covered one approach (out of 2) to handle nested forms, the \n<strong>child form</strong> which is a <strong>known model</strong> explicitly declared as a child\nform.</p>\n<p>The 2nd approach for handling nested forms apply on non child forms.\ni.e. all property types that represent and object and are not child\nforms.</p>\n<h2><a id="flattening" class="anchor" href="#flattening"><span class="header-link"></span></a>Flattening</h2><p>The 2nd approach is to flatten a nested object(s) so it appears as all\nof the fields in that object belong to the root form.</p>\n<p>It does&#39;nt change the structure of the model, it&#39;s is a virtual change\nthat apply visually, i.e. it will change the layout, the visual\nstructure.</p>\n<h3><a id="flattening-renderer" class="anchor" href="#flattening-renderer"><span class="header-link"></span></a>Flattening Renderer</h3><p>While flattening is applied visually it does not require specific action\nfrom the <strong>renderer</strong>. It is completely transparent.</p>\n<h3><a id="objects-not-types" class="anchor" href="#objects-not-types"><span class="header-link"></span></a>Objects, not types</h3><p>Notice the terminology used:</p>\n<blockquote>\n<p>The 2nd approach is to flatten a nested object(s)</p>\n</blockquote>\n<p>Flattening is done on <strong>objects</strong> and not on models, a model is an\nobject but an object is not a model.</p>\n<p>It means that flattening works with models (without <code>childForm: true</code>)\nand it also works with plain JS object, this is important as it\nallows ad-hoc object <em>to</em> form definitions.</p>\n<p>Let&#39;s refactor our <code>Hero</code> model to include a nested object, we add the\n<code>base</code> property that represents the base camp for our hero. The base\nhas a name and coordinates which is also a nested object.</p>\n<pre class="lang-ts"><code class="lang-ts">  base: {\n    name: <span class="hljs-built_in">string</span>;\n    coordinates: {\n      lng: <span class="hljs-built_in">number</span>;\n      lat: <span class="hljs-built_in">number</span>;\n    }\n  };\n</code></pre>\n<p>When we add this to the <code>Hero</code> class we get into a depth of 3:</p>\n<p><code>root -&gt; base -&gt; coordinates</code></p>\n<p>We want to flatten this structure so in the UI we will display something\nlike this:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  id: <span class="hljs-built_in">number</span>;\n  name: <span class="hljs-built_in">string</span>;\n  hasTracking: <span class="hljs-built_in">boolean</span>;\n  doubleAgent: <span class="hljs-built_in">boolean</span>;\n  bmi: <span class="hljs-built_in">number</span>;\n  superPower: <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n\n  <span class="hljs-comment">// Flattened base </span>\n  name: <span class="hljs-built_in">string</span>;\n  lng: <span class="hljs-built_in">number</span>;\n  lat: <span class="hljs-built_in">number</span>;\n}\n</code></pre>\n<div class="info">\nNotice that the <code>name</code> property from <code>base</code> collides with the <code>name</code>\nproperty on the <code>Hero</code>. Because this is not a structural change we do\nnot care, the user will see the <code>label</code> of each field.\n</div>\n\n<p>Now let&#39;s define the schema for flattening <code>base</code>, we will start with\nthe <code>name</code> property first:</p>\n<pre class="lang-ts"><code class="lang-ts">  <span class="hljs-meta">@Prop</span>({\n    form: {\n      flatten: {\n        name: {\n          required: <span class="hljs-literal">true</span>,\n          render: {\n            vType: <span class="hljs-string">\'text\'</span>,\n            label: <span class="hljs-string">\'Base Name\'</span>,\n          }\n        }\n      }\n    }\n  })\n  base: {\n    name: <span class="hljs-built_in">string</span>;\n    coordinates: {\n      lng: <span class="hljs-built_in">number</span>;\n      lat: <span class="hljs-built_in">number</span>;\n    }\n  };\n</code></pre>\n<p>Instead of setting a <code>render</code> object we set a <code>flatten</code> object.</p>\n<p><code>flatten</code> is an object with property names that match the property names\nof the object we are flattening and the values are <code>FormPropMetadataArgs</code></p>\n<pre class="lang-ts"><code class="lang-ts">flatten: { [key: <span class="hljs-built_in">string</span>]: FormPropMetadataArgs };\n</code></pre>\n<p>It&#39;s is like we are defining a new model class without the class and\ndecorators, just with plain objects.</p>\n<div class="info">\nIf it is not clear don&#39;t worry, we will try to explain it from a\ndifferent angle at the end. For now let&#39;s continue with the flat\ndefinition\n</div>\n\n<pre class="lang-ts"><code class="lang-ts">  <span class="hljs-meta">@Prop</span>({\n    form: {\n      flatten: {\n        name: {\n          required: <span class="hljs-literal">true</span>,\n          render: {\n            vType: <span class="hljs-string">\'text\'</span>,\n            label: <span class="hljs-string">\'Base Name\'</span>,\n          }\n        },\n        coordinates: {\n          flatten: {\n            lng: {\n              render: {\n                vType: <span class="hljs-string">\'number\'</span>,\n                label: <span class="hljs-string">\'Base Longitude\'</span>\n              }\n            },\n            lat: {\n              render: {\n                vType: <span class="hljs-string">\'number\'</span>,\n                label: <span class="hljs-string">\'Base Latitude\'</span>\n              }\n            }\n          }\n        }\n      }\n    }\n  })\n</code></pre>\n<p>You can nest <code>flatten</code> definitions as much as you want, there is not\nlimit.</p>\n<p><code>FormPropMetadataArgs</code> definitions within a flatten definition are\nidentical to <code>FormPropMetadataArgs</code> defined on the root. You can see\nthe <code>required</code> validation on <code>name</code> above, it will work just like any\nrequired definition on the root.</p>\n<p>In the following example you can see the output for the flattening\ndeclaration of <strong>base</strong>.</p>\n'},{file:"README.md",lang:"md",section:"part2",code:"<p>The underlying structure of our model and the form are left unchanged\nand the structure of the model and the form are identical. </p>\n<p>The visual display is different, it looks like the <code>Hero</code> model has\n3 properties, <code>baseName</code>, <code>baseLng</code>, <code>baseLat</code> but we know it&#39;s not the\ncase.</p>\n<p>On the left is the actual <code>Hero</code> model, on the right is a <code>Hero</code> model\nthat one might infer from the display:</p>\n"},{file:"README.md",lang:"md",section:"part3",code:'<div class="info">\nYou can view the final structure of our <code>Hero</code> in the source code view\nof the dashboard below.\n</div>\n\n<div class="info">\n To simplify the example the <strong>address</strong> field is filtered out.\n</div>\n\n<h2><a id="don-39-t-flat-out" class="anchor" href="#don-39-t-flat-out"><span class="header-link"></span></a>Don&#39;t flat out</h2><p>Flattening is a powerful feature, it allows re-modeling of complex\nobjects without much effort, however there is a cost:</p>\n<ul>\n<li>Flattening is not type safe</li>\n<li>Flattening is cumbersome, it is not clear as models and classes and\nmost definitely harder to maintain.</li>\n<li>Access to flattened metadata is done with dot notation (magic string)</li>\n<li>Some scenarios require manual type (TypeScript) definitions,\nwe will cover those later</li>\n</ul>\n<p>Use it wisely.</p>\n<h2><a id="another-view" class="anchor" href="#another-view"><span class="header-link"></span></a>Another view</h2><p>We promised another view, let&#39;s try:</p>\n<p>If we take the <code>flatten</code> definition we just defined and try to build\nmodel classes out of it? what would it looks like?</p>\n'},{file:"README.md",lang:"md",section:"part4",code:'<p>The metadata is identical, only TypeScript types are missing and that\ncan also be defined manually, as we will see later.</p>\n<p>If we remove the decorators we are left with the same objects.</p>\n<p>Another view, the last one, let&#39;s think of a similar library like <code>@tdm</code>,\nwritten in JS and not TS, if we go out of the type world straight into\nplain old JS world, how would we describe the metadata to that library? </p>\n<p>We will demonstrate with the <code>coordinates</code> object but it&#39;s the same for \nall others.</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">const</span> coordinates = {\n  lng: {            <span class="hljs-comment">/* THIS IS THE METADATA OBJECT IN @Prop */</span>\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Base Longitude\'</span>\n      }\n    }    \n  },\n  lat: {\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Base Latitude\'</span>\n      }\n    }\n  }\n}\n</code></pre>\n'},{file:"flattening.component.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Hero } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./model\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'form-flattening\'</span>,\n  templateUrl: <span class="hljs-string">\'./flattening.component.html\'</span>,\n  styleUrls: [ <span class="hljs-string">\'./flattening.component.scss\'</span> ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FlatteningComponent {\n  model = <span class="hljs-keyword">new</span> Hero();\n}\n',title:"Component"},{file:"flattening.component.html",lang:"html",section:"tdmDemo",code:'  <span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> #<span class="hljs-attr">dynForm</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">filter</span>]=<span class="hljs-string">"[\'address\']"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"primary"</span>\n            [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"dynForm.form.status !== \'VALID\' || !dynForm.form.dirty"</span>\n            (<span class="hljs-attr">click</span>)=<span class="hljs-string">"dynForm.tdmForm.commitToModel(true)"</span>&gt;</span>SAVE<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"dynForm.form.pristine"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"dynForm.tdmForm.reset()"</span>&gt;</span>CANCEL<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>',title:"Template"},{file:"flattening.component.scss",lang:"scss",section:"default",code:'<span class="hljs-selector-class">.code-class</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;\n  <span class="hljs-attribute">max-height</span>: <span class="hljs-number">400px</span>;\n}\n',title:"Style"},{file:"other-view.md",lang:"md",section:"visualReal",code:'<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  id: <span class="hljs-built_in">number</span>;\n  name: <span class="hljs-built_in">string</span>;\n  hasTracking: <span class="hljs-built_in">boolean</span>;\n  doubleAgent: <span class="hljs-built_in">boolean</span>;\n  bmi: <span class="hljs-built_in">number</span>;\n  superPower: <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n  base: {\n    name: <span class="hljs-built_in">string</span>;\n    coordinates: {\n      lng: <span class="hljs-built_in">number</span>;\n      lat: <span class="hljs-built_in">number</span>;\n    }\n  };\n}\n</code></pre>\n'},{file:"other-view.md",lang:"md",section:"visualVirtual",code:'<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  id: <span class="hljs-built_in">number</span>;\n  name: <span class="hljs-built_in">string</span>;\n  hasTracking: <span class="hljs-built_in">boolean</span>;\n  doubleAgent: <span class="hljs-built_in">boolean</span>;\n  bmi: <span class="hljs-built_in">number</span>;\n  superPower: <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n\n  baseName: <span class="hljs-built_in">string</span>;\n\n  baseLng: <span class="hljs-built_in">number</span>;\n  baseLat: <span class="hljs-built_in">number</span>;\n\n\n}\n</code></pre>\n'},{file:"other-view.md",lang:"md",section:"coordinates",code:'<pre class="lang-ts"><code class="lang-ts">coordinates: {\n  lng: {\n    render: {\n      vType: <span class="hljs-string">\'number\'</span>,\n      label: <span class="hljs-string">\'Base Longitude\'</span>\n    }\n  },\n  lat: {\n    render: {\n      vType: <span class="hljs-string">\'number\'</span>,\n      label: <span class="hljs-string">\'Base Latitude\'</span>\n    }\n  }\n}\n</code></pre>\n'},{file:"other-view.md",lang:"md",section:"coordinatesClass",code:'<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Coordinates {\n  <span class="hljs-meta">@FormProp</span>({\n    render: {\n      vType: <span class="hljs-string">\'number\'</span>,\n      label: <span class="hljs-string">\'Base Longitude\'</span>\n    }\n  })\n  lng: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@FormProp</span>({\n    render: {\n      vType: <span class="hljs-string">\'number\'</span>,\n      label: <span class="hljs-string">\'Base Latitude\'</span>\n    }\n  })\n  lat: <span class="hljs-built_in">number</span>;\n}\n</code></pre>\n'},{file:"other-view.md",lang:"md",section:"base",code:'<pre class="lang-ts"><code class="lang-ts">name: {\n  required: <span class="hljs-literal">true</span>,\n  render: {\n    vType: <span class="hljs-string">\'text\'</span>,\n    label: <span class="hljs-string">\'Base Name\'</span>,\n  }\n},\ncoordinates: {\n  flatten: <span class="hljs-comment">/* JUST DID ABOVE */</span>\n}\n</code></pre>\n'},{file:"other-view.md",lang:"md",section:"baseClass",code:'<pre class="lang-ts"><code class="lang-ts">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Base {\n  <span class="hljs-meta">@FormProp</span>({\n    required: <span class="hljs-literal">true</span>,\n    render: {\n      vType: <span class="hljs-string">\'text\'</span>,\n      label: <span class="hljs-string">\'Base Name\'</span>,\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      childForm: <span class="hljs-literal">true</span>\n    }\n  })\n  coordinates: Coordinates;\n}\n</code></pre>\n'},{file:"model.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Model, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n<span class="hljs-keyword">import</span> { HeroAddress } <span class="hljs-keyword">from</span> <span class="hljs-string">\'../14-child-form\'</span>;\n<span class="hljs-keyword">export</span> { HeroAddress } <span class="hljs-keyword">from</span> <span class="hljs-string">\'../14-child-form\'</span>;\n\n<span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Hero ID\'</span>\n      }\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'Hero Name\'</span>\n      }\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'boolean\'</span>,\n        label: <span class="hljs-string">\'Has Tracking Device\'</span>\n      }\n    }\n  })\n  hasTracking: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slideToggle\'</span>,\n        label: <span class="hljs-string">\'Double Agent\'</span>\n      }\n    }\n  })\n  doubleAgent: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slider\'</span>,\n        label: <span class="hljs-string">\'BMI Index\'</span>,\n        data: { min: <span class="hljs-number">1</span>, max: <span class="hljs-number">35</span> }\n      }\n    }\n  })\n  bmi: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'select\'</span>,\n        label: <span class="hljs-string">\'Super Power\'</span>,\n        data: {\n          options: [\n            { value: <span class="hljs-string">\'selfHealing\'</span>, label: <span class="hljs-string">\'Self Healing\'</span> },\n            { value: <span class="hljs-string">\'flying\'</span>, label: <span class="hljs-string">\'Flying\'</span> },\n            { value: <span class="hljs-string">\'cloaking\'</span>, label: <span class="hljs-string">\'Cloaking\'</span> },\n            { value: <span class="hljs-string">\'cloning\'</span>, label: <span class="hljs-string">\'Cloaning\'</span> },\n            { value: <span class="hljs-string">\'invisibility\'</span>, label: <span class="hljs-string">\'Invisibility\'</span> }\n          ]\n        }\n      }\n    }\n  })\n  superPower: <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'form\'</span>,\n        label: <span class="hljs-string">\'Address\'</span>\n      },\n      childForm: <span class="hljs-literal">true</span>\n    }\n  })\n  address: HeroAddress;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      flatten: {\n        name: {\n          required: <span class="hljs-literal">true</span>,\n          render: {\n            vType: <span class="hljs-string">\'text\'</span>,\n            label: <span class="hljs-string">\'Base Name\'</span>,\n          }\n        },\n        coordinates: {\n          flatten: {\n            lng: {\n              render: {\n                vType: <span class="hljs-string">\'number\'</span>,\n                label: <span class="hljs-string">\'Base Longitude\'</span>\n              }\n            },\n            lat: {\n              render: {\n                vType: <span class="hljs-string">\'number\'</span>,\n                label: <span class="hljs-string">\'Base Latitude\'</span>\n              }\n            }\n          }\n        }\n      }\n    }\n  })\n  base: {\n    name: <span class="hljs-built_in">string</span>;\n    coordinates: {\n      lng: <span class="hljs-built_in">number</span>;\n      lat: <span class="hljs-built_in">number</span>;\n    }\n  };\n}\n',title:"Model"}]}});
//# sourceMappingURL=FlatteningComponent.cfb2320168ce3332d314.chunk.js.map