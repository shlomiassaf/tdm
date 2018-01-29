webpackJsonp([17],{ZfVg:function(e,n){e.exports=[{file:"README.md",lang:"md",section:"PART-1",code:"<p>In this chapter we will review <code>@angular/forms</code> and see where\n<code>ngx-dynamic-forms</code> comes in, why it is needed and how it integrates.\nWe will then review <code>@tdm</code> in general and explore some of the\nconcepts used in <code>ngx-dynamic-forms</code>.</p>\n"},{file:"README.md",lang:"md",section:"PART-2",code:'<h2 id="why-">Why?</h2>\n<p>Quoting from the angular documentation:</p>\n<blockquote>\n<p>Building handcrafted forms can be costly and time-consuming, especially if you need a great number of them, they&#39;re similar to each other, and they change frequently to meet rapidly changing business and regulatory requirements.</p>\n<p><strong>It may be more economical to create the forms dynamically, based on metadata that describes the business object model.</strong></p>\n</blockquote>\n<p>If you have 3-4 forms in you&#39;r application dynamic forms is definitely\nan overkill but for larger, business oriented apps with business model\nentities, domain logic and complex flows this is a must.</p>\n<h2 id="how">How</h2>\n<p>Creating a form with <code>@angular/forms</code> can be split to 3:</p>\n<ol>\n<li>Creating a form instance including child form control instances</li>\n<li>Creating a template with UI elements corresponding the form controls</li>\n<li>Binding the UI elements in the template to the form controls. </li>\n</ol>\n<p>The 1st step is purely schematic, we are modeling our form so it can\nrepresent the domain model we are working with. We do this in template\nand model driven forms.</p>\n<p>With template-driven forms modeling is embedded within the templates and\nlater extracted to create form, with model-driven forms it is more\nvisible especially when using the form builder.</p>\n<p>Let&#39;s examine it using the <code>Hero</code> class (model):</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  id: <span class="hljs-built_in">number</span>;\n  name: <span class="hljs-built_in">string</span>;\n}\n</code></pre>\n<p>Let&#39;s build a form factory for it:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">heroForm</span>(<span class="hljs-params">builder: FormBuilder</span>): <span class="hljs-title">FormGroup</span> </span>{\n  <span class="hljs-keyword">return</span> builder.group({\n    id: <span class="hljs-literal">null</span>,\n    name: <span class="hljs-literal">null</span>    \n  });\n}\n</code></pre>\n<p>We get back a <code>FormGroup</code> instance representing the structure of the \n<code>Hero</code> class, in low detail (no type information)</p>\n<p>To visualize the structure we get back, think of this class: </p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">class</span> HeroFormGroup {\n  id: FormControl;\n  name: FormControl;\n}\n</code></pre>\n<p>It is similar to our <code>Hero</code> class but with no type information, just a\nstructure.</p>\n<p>Notice how a <code>FormControl</code> has no type information, it accepts any\nvalue. Enforcing a type is done via validators and the UI element bound\nto the control.</p>\n<div class="alert">\n  <code>HeroFormGroup</code> is given here as a visual aid, it does not represent\n   a <code>FormGroup</code> instance. It is just a way to look at it&#39;s basic model.\n</div>\n\n<p>The 2nd &amp; 3rd steps are purely descriptive, it requires taking the form\ninstance created in the 1st step and for each child control it has\ncreate a UI element in the template and bind the element to the control.</p>\n<p><code>ngx-dynamic-forms</code> reduce the effort involved in form generation.<br>It knows enough about your model so it can create form instances from it\nand merge these forms back into the model.<br>It takes metadata about your model and use it to dynamically build a UI\nbound to a form.</p>\n'},{file:"README.md",lang:"md",section:"PART-3",code:'<p><code>@tdm</code> is a typed metadata driven transformation framework.</p>\n<p>In simple words, with <code>@tdm</code> you can take a structure X and transform it to Y and then back to X.</p>\n<p>This is not restricted to data structures, you can transform a structure into an <strong>action</strong> and then an action back to a structure.\nFor example, using <code>@tdm/ngx-http-client</code> you can transform a resource into an HTTP request, parse the response and update the resource.</p>\n<p>The process is always the same, define a data structure (class / model / resource)\nand define rules and guidelines for that data structure (metadata).\nThe metadata contains instructions required for transforming X to Y.</p>\n<h2 id="-tdm">@tdm</h2>\n<p><code>@tdm</code> is highly extensible (and not limited to angular), based on\n2 core packages:</p>\n<ul>\n<li><p><strong>@tdm/core</strong>: A powerful metadata foundation library with that provides\ncore metadata definitions, transformation and a powerful store for \nretrieving and manipulating metadata. Additionally, it provides factories\nfor creating new metadata definition blocks and corresponding decorators.</p>\n</li>\n<li><p><strong>@tdm/data</strong> A core package for creating action oriented data libraries.<br><code>@tdm/data</code> provides the execution pipeline for actions with support\nfor both DAO and Active Record (via plugin) design patterns while keeping types intact.<br>The data library includes a <code>rxjs</code> plugin enabling powerful and reactive resources.</p>\n</li>\n</ul>\n<p><code>ngx-dynamic-forms</code> depends on the <code>@tdm/core</code> package.</p>\n<h2 id="model-form">Model &lt; - &gt; Form</h2>\n<p>When moving between a model and a form it is first important to take a minute\nto understand the concepts and process.</p>\n<p>An instance of a form is a full or partial clone of the model.<br>A form is not bound to the model, there is not connection between then.<br>When a user updates a form control the form will update but the model will not change.<br>When we want to update the model we need to merge the value of the form into the model.  </p>\n<p>This is the transformation, from a model to a <code>FormGroup</code> instance and back.</p>\n<p>The library does just that, it takes a model and serialize it into a form\ninstance (<code>FormGroup</code>) and backwards, from a form instance into the model.\nIt knows how to serialize and deserialize because it has type information\nand additional metadata input for the model.</p>\n<blockquote>\n<p>A form is a partial clone of the model when not all properties of the\nmodel are mapped into form control. </p>\n</blockquote>\n<h2 id="form-rendering">Form rendering</h2>\n<p>Moving between a model and a form is not enough, Having a form instance\ngenerated for us is nice but its only half way. In <code>@angular/forms</code> world\nit is equivalent to generating a <code>FormGroup</code> from a <code>FormBuilder</code>...</p>\n<p>We still need to put it on a template so it can render as UI controls.</p>\n<p>While it is possible to render a form from it&#39;s <code>FormGroup</code> instance alone\nthis is not dynamic, we need a controller.</p>\n<p>The library comes with a set of tools and services that make it easy to\nmanage the transformation and a controller class <code>TDMModelForm</code> that\nencapsulate a model and a form and manage the transformation between them.  </p>\n<blockquote>\n<p>While the services, tools and the <code>TDMModelForm</code> instance are core\ncomponents, this tutorial will not cover them in depth as they\ninvolve imperative coding and we aim for the declarative approach.\nSuffice to say that they are used by the library to provide the declarative\nexperience building dynamic forms.</p>\n</blockquote>\n<p><code>TDMModelForm</code> provides, among other things, access to the metadata\nrequired to render a form (not to confuse with creating a form instance).<br>Each metadata object represents a property on the model and a form control in the form.<br>By iterating over the metadata objects (<code>ngFor</code>) we can render the controls\n(thing <code>ngSwitchCase</code>) based on the type defined within the metadata.</p>\n<p>We need a component that can take advantage of <code>TDMModelForm</code>, add some sugar\nand provides the perfect dynamic form experience...</p>\n<p><code>DynamicFormComponent</code> is what we need.</p>\n<h2 id="dynamicformcomponent-dynamic-form-">DynamicFormComponent (<code>dynamic-form</code>)</h2>\n<p><code>DynamicFormComponent</code> abstracts <code>TDMModelForm</code> and exposes a declarative\nAPI and additional features such add local control template override,\nevents, array control notification and more.</p>\n<p><code>DynamicFormComponent</code> knows how to render a form just by giving it\nand instance but it does not have a concrete UI implementation, it \nrequires external help.</p>\n<h2 id="agnostic-ui">Agnostic UI</h2>\n<p>We know that A form control instance represents a UI element that we need to show\nthe user so we can get input, but how does it look?</p>\n<p>A simple <code>text</code> control, will it be material style? bootstrap style? custom style?</p>\n<p>The library does not know and can not decide that for the user, it must\nwork with every component that can host a form control.</p>\n<p>You are responsible to teach the library what to render for each field.\nAs mentioned before, we have a list of metadata objects of fields we need to render\nand for each field we need to have a template, this is a classic <code>ngSwitchCase</code> solution\nor manually using a <code>ViewContainerRef</code>.</p>\n'},{file:"model.ts",lang:"ts",section:"DEMO-1",code:'<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> UIDeveloper {\n  name: <span class="hljs-built_in">string</span>;\n\n  yearOfBirth: <span class="hljs-built_in">number</span>;\n\n  gender: <span class="hljs-string">\'male\'</span> | <span class="hljs-string">\'female\'</span> | <span class="hljs-string">\'other\'</span>;\n\n  framework: <span class="hljs-string">\'angular\'</span> | <span class="hljs-string">\'react\'</span> | <span class="hljs-string">\'vue\'</span> | <span class="hljs-string">\'ember\'</span> | <span class="hljs-string">\'knockout\'</span> | <span class="hljs-string">\'other\'</span>;\n}',title:"UI Developer"},{file:"model.ts",lang:"ts",section:"DEMO-2",code:'<span class="hljs-keyword">import</span> { Validators } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { Model } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/core\'</span>;\n<span class="hljs-keyword">import</span> { FormModel, FormProp } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>()\n<span class="hljs-meta">@FormModel</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> UIDeveloper {\n  <span class="hljs-meta">@FormProp</span>({\n    required: <span class="hljs-literal">true</span>,\n    render: {\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'text\'</span>,\n      label: <span class="hljs-string">\'Developer Name\'</span>\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@FormProp</span>({\n    required: <span class="hljs-literal">true</span>,\n    render: {\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'number\'</span>,\n      label: <span class="hljs-string">\'Year Of Birth\'</span>\n    },\n    validators: Validators.compose([Validators.min(<span class="hljs-number">1900</span>), Validators.max(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getFullYear())])\n  })\n  yearOfBirth: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@FormProp</span>({\n    required: <span class="hljs-literal">true</span>,\n    render: {\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'radio\'</span>,\n      label: <span class="hljs-string">\'Gender\'</span>,\n      data: {\n        options: [\n          { value: <span class="hljs-string">\'male\'</span>, label: <span class="hljs-string">\'MALE\'</span> },\n          { value: <span class="hljs-string">\'female\'</span>, label: <span class="hljs-string">\'FEMALE\'</span> },\n          { value: <span class="hljs-string">\'other\'</span>, label: <span class="hljs-string">\'OTHER\'</span> },\n        ]\n      }\n    }\n  })\n  gender: <span class="hljs-string">\'male\'</span> | <span class="hljs-string">\'female\'</span> | <span class="hljs-string">\'other\'</span>;\n\n  <span class="hljs-meta">@FormProp</span>({\n    render: {\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      label: <span class="hljs-string">\'Framework\'</span>,\n      data: {\n        options: [\n          { value: <span class="hljs-string">\'angular\'</span> },\n          { value: <span class="hljs-string">\'react\'</span> },\n          { value: <span class="hljs-string">\'vue\'</span> },\n          { value: <span class="hljs-string">\'ember\'</span> },\n          { value: <span class="hljs-string">\'knockout\'</span> },\n          { value: <span class="hljs-string">\'other\'</span> }\n        ]\n      }\n    }\n  })\n  framework: <span class="hljs-string">\'angular\'</span> | <span class="hljs-string">\'react\'</span> | <span class="hljs-string">\'vue\'</span> | <span class="hljs-string">\'ember\'</span> | <span class="hljs-string">\'knockout\'</span> | <span class="hljs-string">\'other\'</span>;\n}',title:"Model"}]}});
//# sourceMappingURL=ArchitectureComponent.1764fcd104e32d2dfc21.chunk.js.map