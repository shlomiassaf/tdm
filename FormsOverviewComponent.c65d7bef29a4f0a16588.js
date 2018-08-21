(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"29u+":function(e,a){e.exports=[{file:"README.md",lang:"md",section:"default",code:'<h1><a id="overview" class="anchor" href="#overview"><span class="header-link"></span></a>Overview</h1><p>The dynamic forms library is based on HTML forms and the\n<code>@angular/forms</code> library.</p>\n<p>A dynamic form is built from static metadata. A data structure and\ninformation describing how it should display as a form.</p>\n<p>It is a model-driven and a metadata-driven library.</p>\n<h2><a id="why-" class="anchor" href="#why-"><span class="header-link"></span></a>Why?</h2><p>Quoting from the angular documentation:</p>\n<blockquote>\n<p>Building handcrafted forms can be costly and time-consuming, especially if you need a great number of them, they&#39;re similar to each other, and they change frequently to meet rapidly changing business and regulatory requirements.</p>\n</blockquote>\n<blockquote>\n<p><strong>It may be more economical to create the forms dynamically, based on metadata that describes the business object model.</strong></p>\n</blockquote>\n<p>If you have 3-4 forms in you&#39;r application dynamic forms is definitely\nan overkill but for larger, business oriented apps with business model\nentities, domain logic and complex flows this is a must.</p>\n<h2><a id="a-model-a-form" class="anchor" href="#a-model-a-form"><span class="header-link"></span></a>A Model, A Form</h2><p>A form is the visual presentation of a data structure, a <strong>model</strong>.\nThe form provides an interface for the user to update the model.</p>\n<p>A simple login form with a <em>username</em> and a <em>password</em> field has a\ndata structure, the model. Even if we build it with HTML only.</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">class</span> Login {\n  username: <span class="hljs-built_in">string</span>;\n  password: <span class="hljs-built_in">string</span>;\n}\n</code></pre>\n<p>We know that an instance of a login form can accept a value that follows\nthe structure of <code>Login</code> and will output a value the follows the\nstructure of <code>Login</code>.</p>\n<div class="info">\nWe can say that a form is also a data structure, a model.\n</div>\n\n<h2><a id="a-modeled-form" class="anchor" href="#a-modeled-form"><span class="header-link"></span></a>A Modeled Form</h2><p>The HTML spec for forms is abstract, the model/form relationship is not\nvisible.</p>\n<p><code>@angular/forms</code> takes the model/form relationship to the next level by\nintroduction models into HTML.</p>\n<p>Angular forms is built around 3 fundamental building blocks used to\ndefine forms: <code>FormControl</code>, <code>FormGroup</code> and <code>FormArray</code>.</p>\n<p>When we create a form, <strong>template-driven</strong> or <strong>model-driven</strong>, we\ncreate a model using these building blocks.</p>\n<div class="alert">\n<strong>template-driven</strong> or <strong>model-driven</strong>? this might imply that template\ndriven is not built around models, it is!\n<br> \n<br>\nModel&#39;s are built through the template, it is also easy to extract\nthe model from a template driven form. \n</div>\n\n<div class="info">\nThese blocks are all we need to describe a data structure, a model bound\nto the form.\n</div>\n\n<h2><a id="a-model-a-form-a-class" class="anchor" href="#a-model-a-form-a-class"><span class="header-link"></span></a>A Model, A Form, A Class</h2><p>With angular forms we create model definitions on the fly and the forms\nlibrary create&#39;s instances of the model which we can use in templates\nbinding them to controls such as input, checkbox, select, etc...</p>\n<p>Let&#39;s build a model definition using the <code>FormBuilder</code>:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">const</span> fb: FormBuilder;\n<span class="hljs-keyword">const</span> Hero = fb.group({\n  id: [<span class="hljs-string">\'\'</span>, Validators.required ],\n  name: [<span class="hljs-string">\'\'</span>, Validators.required ],\n  superHero: [<span class="hljs-string">\'\'</span>],\n});\n</code></pre>\n<p>If we are going to use this form in multiple places we will probably\nneed to create a factory function:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createHeroForm</span>(<span class="hljs-params">fb: FormBuilder</span>): <span class="hljs-title">FormGroup</span> </span>{\n  <span class="hljs-keyword">return</span> = fb.group({\n     id: [<span class="hljs-string">\'\'</span>, Validators.required ],\n     name: [<span class="hljs-string">\'\'</span>, Validators.required ],\n     superHero: [<span class="hljs-string">\'\'</span>],\n   });\n}\n</code></pre>\n<p>Now we can use this from different pages, it will always return the\nsame structure.</p>\n<p>Can we build a <code>class</code> representing the structure of the <code>FormGroup</code>?</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  id: <span class="hljs-built_in">any</span>;\n  name: <span class="hljs-built_in">any</span>;\n  superHero: <span class="hljs-built_in">any</span>;\n}\n</code></pre>\n<p>Notice how all of the property types are <code>any</code>. Angular forms does not\nhandle types, a <code>FormControl</code> can be any value, even an object the\nlibrary does not care, if the user want&#39;s to display that control it\nwill need to handle it in the template.</p>\n<p>But wait, we are using <em>TypeScript</em>, we can use types:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  id: <span class="hljs-built_in">number</span>;\n  name: <span class="hljs-built_in">string</span>;\n  superHero: <span class="hljs-built_in">boolean</span>;\n}\n</code></pre>\n<p>We have a lot of information now.</p>\n<ul>\n<li>We know the structure of model, we can create a <code>FormGroup</code> from it</li>\n<li>We know the type for each control, we can use it to decide what to render</li>\n</ul>\n<p>It looks like we have enough information to dynamically create a form.\nWe can create a <code>FormGroup</code> dynamically and render the proper control\ndynamically.</p>\n<p>The real model driven.</p>\n<h2><a id="metadata" class="anchor" href="#metadata"><span class="header-link"></span></a>Metadata</h2><p>Knowing the structure and types of the model is not enough, it is a\ngood place to start with but it will not get us far, we need more\ninformation.</p>\n<p>We need to find a way which allow&#39;s us to describe the relationship\nbetween a model and a form with high resolution, the relationship\nbetween each property and the control.</p>\n<p>We call this information <strong>metadata</strong>, we decorate our model with\nmetadata and we decorate the properties with metadata.</p>\n<p>This is not alien territory, this is how angular works, <strong>decorators</strong>:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-meta">@Model</span>()\n<span class="hljs-meta">@FormModel</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@FormProp</span>({\n    render: {\n      vType: <span class="hljs-string">\'number\'</span>,\n      label: <span class="hljs-string">\'Hero ID\'</span>\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@FormProp</span>({\n    render: {\n      vType: <span class="hljs-string">\'text\'</span>,\n      label: <span class="hljs-string">\'Hero Name\'</span>\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@FormProp</span>({\n    render: {\n      vType: <span class="hljs-string">\'boolean\'</span>,\n      label: <span class="hljs-string">\'Super Hero\'</span>\n    }\n  })\n  superHero: <span class="hljs-built_in">boolean</span>;\n}\n</code></pre>\n<p>The concept is simple, provide a way to describe information and use\nthat information to perform an operation.</p>\n<p>Provide a way to describe how a property should manifest in a form\nand use that information to display it.</p>\n<p>Because we are using <em>TypeScript</em> we can use <strong>decorators</strong> to describe\nmetadata, which also means that metadata is a contact, we know what to\ndescribe.</p>\n<h2><a id="displaying-metadata" class="anchor" href="#displaying-metadata"><span class="header-link"></span></a>Displaying metadata</h2><p>The final piece in the puzzle is the user interface. Rendering the\nmetadata we have into a form.</p>\n<p>Similar to <code>@angular/forms</code> the library can not render the user\ninterface, it is a choice of preference.</p>\n<p>The library drive&#39;s the process, taking a model and creating a form\ndynamically following all of the descriptions provided and applying all\nlogic but the final step of rendering a control is up to the <strong>renderer</strong></p>\n<p>The <strong>renderer</strong> is a component that accepts an agreed upon structure\nthat is the metadata for a control and is required to display that\ncontrol, i.e render it.</p>\n<p>The <strong>renderer</strong> is usually a concrete implementation of a UI framework,\ne.g <code>@angular/material</code>, <code>bootstrap</code> but might also be a custom\nimplementation.</p>\n<p>Chapters in this tutorial that demonstrate features will use the\nmaterial renderer, a renderer that makes use of UI components from the\n<code>@angular/material</code> library.</p>\n<p>The material renderer is not part of the library but comes with the\npackage as a plugin.</p>\n<p>Chapters that demonstrate how to build a renderer will use a custom\nimplementation of the renderer which also make use of the material\nlibrary.</p>\n'}]}}]);