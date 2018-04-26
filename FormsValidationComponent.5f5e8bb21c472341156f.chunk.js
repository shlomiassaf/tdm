webpackJsonp([33],{tj4F:function(s,a){s.exports=[{file:"README.md",lang:"md",section:"default",code:'<h1><a id="validation" class="anchor" href="#validation"><span class="header-link"></span></a>Validation</h1><h2><a id="passthrough" class="anchor" href="#passthrough"><span class="header-link"></span></a>Passthrough</h2><p>Validation is not managed by the library, it is passed through to\nthe forms engine and so validation is implemented similar to the way\nit is done in reactive forms.</p>\n<p>Validation is applied on 2 levels:</p>\n<ul>\n<li>Model level</li>\n<li>Property level</li>\n</ul>\n<p>To apply validation on the model level just use the metadata argument\nin the <code>@Model</code> decorator.</p>\n<p>To apply validation on the property level just use the metadata argument\nin the <code>@Prop</code> decorator.</p>\n<p>Validation is applied the same way it is done in <code>@angular/forms</code>:</p>\n<pre class="lang-ts"><code class="lang-ts">  <span class="hljs-keyword">import</span> { Validators } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: { ... },\n      validators: Validators.compose([ Validators.min(<span class="hljs-number">1000</span>), Validators.max(<span class="hljs-number">999999</span>) ])\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n</code></pre>\n<p>And of course async validation: </p>\n<pre class="lang-ts"><code class="lang-ts">  <span class="hljs-keyword">import</span> { ValidationErrors, Validators, AbstractControl } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n\n  <span class="hljs-comment">// WILL CHECK IF THE NAME STARTS WITH "A" or "a", if so it fails!</span>\n  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fakeCheckName</span>(<span class="hljs-params">c: AbstractControl</span>): <span class="hljs-title">Promise</span>&lt;<span class="hljs-title">ValidationErrors</span> | <span class="hljs-title">null</span>&gt; </span>{\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> {\n      setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { ... }, <span class="hljs-number">1000</span>);\n    });\n  }\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: { ... },\n      asyncValidators: fakeCheckName\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n</code></pre>\n<h2><a id="required" class="anchor" href="#required"><span class="header-link"></span></a>Required</h2><p>The <code>required</code> validation is unique because it also validates the\nstructure of an object, additionally <code>required</code> is a common validator, \nwidely used.</p>\n<p>For these reasons it can be set using a specific property.</p>\n<pre class="lang-ts"><code class="lang-ts">  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: { ... }\n    }\n  })\n</code></pre>\n<p>Let see it all in action:</p>\n<div class="info">\n  When setting the <code>name</code>, watch how the status LED turns to blinking \n  blue, this means <strong>PENDING</strong> state.\n</div>\n\n<h2><a id="dynamic-validation" class="anchor" href="#dynamic-validation"><span class="header-link"></span></a>Dynamic validation</h2><p>Validations are set on the metadata, which is static.\nYou can modify the validation per instance of a dynamic form component.</p>\n<p>Get a hold of the render instruction for the control you want to update\nto modify to and update value of <code>validation</code> or <code>asyncValidation</code>\nproperties.</p>\n<div class="alert">\nThe <code>validation</code> and <code>asyncValidation</code> properties are not tracked by\nthe change detection, you must update the whole array, mutating the\narray will not trigger a rebuild of the validation function for the\ncontrol.\n</div>\n<div class="info">\nSetting the property <code>required</code> to true/false will add/remove the\nrequired validation so you do not need to handle that in the\n<code>validation</code> or <code>asyncValidation</code> properties.\n</div>\n\n'},{file:"validation.component.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Hero } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./model\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'form-validation\'</span>,\n  templateUrl: <span class="hljs-string">\'./validation.component.html\'</span>,\n  styleUrls: [ <span class="hljs-string">\'./validation.component.scss\'</span> ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ValidationComponent {\n  model = <span class="hljs-keyword">new</span> Hero();\n  required: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>;\n  requiredChanged(dynForm: DynamicFormComponent, value: <span class="hljs-built_in">boolean</span>): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">const</span> ri = dynForm.tdmForm.renderData.find( <span class="hljs-function"><span class="hljs-params">r</span> =&gt;</span> r.name === <span class="hljs-string">\'id\'</span>);\n    <span class="hljs-keyword">this</span>.required = value;\n    ri.required = value;\n  }\n\n}\n',title:"Component"},{file:"validation.component.html",lang:"html",section:"default",code:'<span class="hljs-tag">&lt;<span class="hljs-name">tdm-markdown-view</span> [<span class="hljs-attr">markdown</span>]=<span class="hljs-string">"code | async | tdmCode:[{file: \'README.md\'}]:true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tdm-markdown-view</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">form-wrapper</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Validation"</span>\n              [<span class="hljs-attr">code</span>]=<span class="hljs-string">"code | async | tdmCode:[{title: \'Component\'}, {title: \'Template\'}, {title: \'Model\'}]"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"custom-form-actions"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-slide-toggle</span> [<span class="hljs-attr">checked</span>]=<span class="hljs-string">"required"</span>\n                      (<span class="hljs-attr">change</span>)=<span class="hljs-string">"requiredChanged(dynForm, !!$event.checked)"</span>&gt;</span>ID Required<span class="hljs-tag">&lt;/<span class="hljs-name">mat-slide-toggle</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> #<span class="hljs-attr">dynForm</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form-wrapper</span>&gt;</span>\n',title:"Template"},{file:"model.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Model, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n<span class="hljs-keyword">import</span> { ValidationErrors, Validators, AbstractControl } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fakeCheckName</span>(<span class="hljs-params">c: AbstractControl</span>): <span class="hljs-title">Promise</span>&lt;<span class="hljs-title">ValidationErrors</span> | <span class="hljs-title">null</span>&gt; </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> {\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n      <span class="hljs-keyword">const</span> name = c.value || <span class="hljs-string">\'\'</span>;\n      <span class="hljs-keyword">if</span> (!name || name[<span class="hljs-number">0</span>].toLowerCase() === <span class="hljs-string">\'a\'</span>) {\n        resolve({\n          nameExists: <span class="hljs-string">`<span class="hljs-subst">${name}</span> already exists`</span>\n        });\n      } <span class="hljs-keyword">else</span> {\n        resolve(<span class="hljs-literal">null</span>);\n      }\n    }, <span class="hljs-number">1000</span>);\n  });\n}\n\n<span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Hero ID\'</span>\n      },\n      validators: Validators.compose([ Validators.min(<span class="hljs-number">1000</span>), Validators.max(<span class="hljs-number">999999</span>) ])\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'Hero Name\'</span>\n      },\n      asyncValidators: fakeCheckName\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'boolean\'</span>,\n        label: <span class="hljs-string">\'Has Tracking Device\'</span>\n      }\n    }\n  })\n  hasTracking: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slideToggle\'</span>,\n        label: <span class="hljs-string">\'Double Agent\'</span>\n      }\n    }\n  })\n  doubleAgent: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slider\'</span>,\n        label: <span class="hljs-string">\'BMI Index\'</span>,\n        data: { min: <span class="hljs-number">1</span>, max: <span class="hljs-number">35</span> }\n      }\n    }\n  })\n  bmi: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'select\'</span>,\n        label: <span class="hljs-string">\'Super Power\'</span>,\n        data: { options: [\n          { value: <span class="hljs-string">\'selfHealing\'</span>, label: <span class="hljs-string">\'Self Healing\'</span> },\n          { value: <span class="hljs-string">\'flying\'</span>, label: <span class="hljs-string">\'Flying\'</span> },\n          { value: <span class="hljs-string">\'cloaking\'</span>, label: <span class="hljs-string">\'Cloaking\'</span> },\n          { value: <span class="hljs-string">\'cloning\'</span>, label: <span class="hljs-string">\'Cloaning\'</span> },\n          { value: <span class="hljs-string">\'invisibility\'</span>, label: <span class="hljs-string">\'Invisibility\'</span> }\n        ]}\n      }\n    }\n  })\n  superPower: <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n}\n',title:"Model"}]}});
//# sourceMappingURL=FormsValidationComponent.5f5e8bb21c472341156f.chunk.js.map