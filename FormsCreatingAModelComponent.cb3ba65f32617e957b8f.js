(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{164:function(s,n){s.exports=[{file:"README.md",lang:"md",section:"part1",code:'<h1><a id="the-model" class="anchor" href="#the-model"><span class="header-link"></span></a>The Model</h1><p>In the overview we covered the relationship between a model and a form\nand explained the evolution from HTML forms to <code>@angular/forms</code> and\nfinally dynamic forms.</p>\n<p>A <strong>Model</strong> is the fundamental building block driving dynamic forms.</p>\n<h2><a id="fundamental-for-all" class="anchor" href="#fundamental-for-all"><span class="header-link"></span></a>Fundamental for all</h2><p>The model is in-fact the fundamental building block for the entire\n<strong>@tdm</strong> framework.</p>\n<p>Let&#39;s revisit our definition for the concept:</p>\n<blockquote>\n<p>The concept is simple, provide a way to describe information and use\n  that information to perform an operation.</p>\n</blockquote>\n<blockquote>\n<p>Provide a way to describe how a property should manifest in a form\n  and use that information to display it.</p>\n</blockquote>\n<p>The first paragraph is abstract, the 2nd is specific to dynamic forms.<br>The concept in the 1st paragraph apply to all libraries in the <code>@tdm</code>\nframework: describe -&gt; manage -&gt; process -&gt; execute  </p>\n<p>When designing models keep that in mind. The same model that describes\na form can also describe HTTP calls, database operations, etc...</p>\n<h2><a id="the-code-model-code-decorator" class="anchor" href="#the-code-model-code-decorator"><span class="header-link"></span></a>The <code>@Model()</code> decorator</h2><p>Starting from scratch, our <code>Hero</code> class:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  id: <span class="hljs-built_in">number</span>;\n  name: <span class="hljs-built_in">string</span>;\n  superHero: <span class="hljs-built_in">boolean</span>;\n}\n</code></pre>\n<p>This is a simple class, it is not known to the library which means it\nis still not a model.</p>\n<p>We register it as a model using the <code>@Model</code> decorator:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">import</span> { Model } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  id: <span class="hljs-built_in">number</span>;\n  name: <span class="hljs-built_in">string</span>;\n  superHero: <span class="hljs-built_in">boolean</span>;\n}\n</code></pre>\n<p>We mentioned that the library is part of the <code>@tdm</code> framework and it\ndepends on <code>@tdm/core</code>. The <code>Model</code> decorator comes from <code>@tdm/core</code> and\nre-exported by the library for convenience.</p>\n<p>The decorator accepts an optional metadata argument <code>ModelMetadataArgs</code>\nthat contains metadata for the model.</p>\n<h2><a id="a-model-and-a-form" class="anchor" href="#a-model-and-a-form"><span class="header-link"></span></a>A model and a form</h2><p>A model is the first step, we now need to declare that the model is also\ncapable of becoming a form. There a 2 ways of doing so, the regular way\nand the short-syntax way. We will show both</p>\n<h4><a id="regular" class="anchor" href="#regular"><span class="header-link"></span></a>Regular</h4><pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">import</span> { Model, FormModel } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>()\n<span class="hljs-meta">@FormModel</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  id: <span class="hljs-built_in">number</span>;\n  name: <span class="hljs-built_in">string</span>;\n  superHero: <span class="hljs-built_in">boolean</span>;\n}\n</code></pre>\n<h4><a id="short-syntax" class="anchor" href="#short-syntax"><span class="header-link"></span></a>Short syntax</h4><pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">import</span> { Model } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span> <span class="hljs-comment">// or metadata arguments</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  id: <span class="hljs-built_in">number</span>;\n  name: <span class="hljs-built_in">string</span>;\n  superHero: <span class="hljs-built_in">boolean</span>;\n}\n</code></pre>\n<div class="alert">\nGoing forward we will use the short-syntax.\n</div>\n\n<p>Similar to <code>@Model</code>, the <code>@FormModel</code> also accepts an optional metadata\nargument with form specific information:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> FormModelMetadataArgs {\n  validator?: ValidatorFn;\n  asyncValidator?: AsyncValidatorFn;\n}\n</code></pre>\n<h2><a id="describing-form-controls" class="anchor" href="#describing-form-controls"><span class="header-link"></span></a>Describing form controls</h2><p>The next step is to decorate the properties that we want to render\nas form controls, we do it using the <code>@FormProp</code> decorator which also\nhas a regular and short syntax.</p>\n<p>Decorating form properties requires more detail, let&#39;s start with just\nthe <code>id</code> property:</p>\n<h4><a id="regular" class="anchor" href="#regular"><span class="header-link"></span></a>Regular</h4><pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">import</span> { Model, FormProp } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@FormProp</span>({\n  render: {\n    vType: <span class="hljs-string">\'number\'</span>,\n    label: <span class="hljs-string">\'Hero ID\'</span>\n  }\n})\nid: <span class="hljs-built_in">number</span>;\n</code></pre>\n<h4><a id="short-syntax" class="anchor" href="#short-syntax"><span class="header-link"></span></a>Short syntax</h4><pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">import</span> { Model, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Prop</span>({\n  form: {\n    render: {\n      vType: <span class="hljs-string">\'number\'</span>,\n      label: <span class="hljs-string">\'Hero ID\'</span>\n    }\n  }\n})\nid: <span class="hljs-built_in">number</span>;\n</code></pre>\n<div class="alert">\nGoing forward we will use the short-syntax.\n</div>\n\n<p><code>@FormProp</code> accepts an optional metadata argument <code>FormPropMetadataArgs</code>\nwith form control specific information.</p>\n<p>For now we only define the <code>render</code> property. <code>render</code> is an object\nof type <code>RenderDef</code> and it is where UI related definitions are set.</p>\n<p>When <code>render</code> is not set the property will have a form control within\nthe form instance but will not display.</p>\n<p><code>RenderDef</code> and <code>FormPropMetadataArgs</code> comes with a lot of other options\nto configure and setup, they are all optional and we will cover most of\nthem as we progress, to get a better understanding you can explore these\ntypes and read the JSDoc comments attached to each option.</p>\n<p>Zooming in on the <code>renderer</code> object we defined 2 properties:</p>\n<h4><a id="vtype" class="anchor" href="#vtype"><span class="header-link"></span></a>vType</h4><p><strong>vType</strong> stands for visual type, a value that the renderer will use\nto choose which UI element to render.</p>\n<p>Note that visual type is not the property type. A type can have many\nvisual types, for example A <code>boolean</code> type can display as a slide toggle\nor as a checkbox. A  <code>number</code> type display as input or slider...</p>\n<p><code>vType</code> is not a string, it accepts a specific set of literal string\nvalues defined by the renderer. </p>\n<h4><a id="label" class="anchor" href="#label"><span class="header-link"></span></a>label</h4><p>The label to display next to the control, in the material renderer\nthis will be the placeholder.</p>\n<p>Now, let&#39;s complete the whole class:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">import</span> { Model, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Hero ID\'</span>\n      }\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'Hero Name\'</span>\n      }\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'boolean\'</span>,\n        label: <span class="hljs-string">\'Super Hero\'</span>\n      }\n    }\n  })\n  superHero: <span class="hljs-built_in">boolean</span>;\n}\n</code></pre>\n<h2><a id="the-form" class="anchor" href="#the-form"><span class="header-link"></span></a>The Form</h2><p>We have our first model ready, we have a renderer set we just need\nto use the <code>dynamic-form</code> component and attach a model to it.</p>\n<p>Make sure to check the source code view.</p>\n',title:"Setup"},{file:"creating-a-model.component.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-keyword">import</span> { Hero } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./model\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'form-creating-a-model\'</span>,\n  templateUrl: <span class="hljs-string">\'./creating-a-model.component.html\'</span>,\n  styleUrls: [ <span class="hljs-string">\'./creating-a-model.component.scss\'</span> ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> CreatingAModelComponent {\n  model = <span class="hljs-keyword">new</span> Hero();\n\n}\n',title:"Component"},{file:"creating-a-model.component.html",lang:"html",section:"tdmDemo",code:'  <span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>',title:"Template"},{file:"model.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Model } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n<span class="hljs-keyword">import</span> { FormModel, FormProp } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>()\n<span class="hljs-meta">@FormModel</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@FormProp</span>({\n    render: {\n      vType: <span class="hljs-string">\'number\'</span>,\n      label: <span class="hljs-string">\'Hero ID\'</span>\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@FormProp</span>({\n    render: {\n      vType: <span class="hljs-string">\'text\'</span>,\n      label: <span class="hljs-string">\'Hero Name\'</span>\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@FormProp</span>({\n    render: {\n      vType: <span class="hljs-string">\'boolean\'</span>,\n      label: <span class="hljs-string">\'Super Hero\'</span>\n    }\n  })\n  superHero: <span class="hljs-built_in">boolean</span>;\n}\n',title:"Model"}]}}]);