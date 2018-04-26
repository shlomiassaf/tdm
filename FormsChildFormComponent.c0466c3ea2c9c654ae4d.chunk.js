webpackJsonp([41],{i8Xy:function(s,n){s.exports=[{file:"README.md",lang:"md",section:"part1",code:'<h1><a id="child-form" class="anchor" href="#child-form"><span class="header-link"></span></a>Child Form</h1><p>A child form is a property of a model that:</p>\n<ul>\n<li>Has a type that is also a model <em>AND;</em></li>\n<li>Explicitly declared as a <code>childForm</code></li>\n</ul>\n<p>A property in a modal with a type that is also a model is a <em>potential</em>\nchild form.</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">class</span> Hero {\n  nemesis: Hero;\n}\n</code></pre>\n<p><strong>nemesis</strong> is a property in the <code>Hero</code> model. The type of <strong>nemesis</strong>\nis <code>Hero</code> which is a model thus it is a <em>potential</em> child form.</p>\n<p>Potential because it also requires explicit declaration:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      childForm: <span class="hljs-literal">true</span>\n    }\n  })\n  nemesis: Hero;\n}\n</code></pre>\n<h2><a id="nested-models" class="anchor" href="#nested-models"><span class="header-link"></span></a>Nested models</h2><p>Model transform to <code>FormGroup</code>, A child form is a model which means it\nalso transform to <code>FormGroup</code>.</p>\n<p>The end result is a <code>FormGroup</code> containing another <code>FormGroup</code>.  </p>\n<p>In angular forms, when a <code>FormGroup</code> contains one or more <code>FormGroup</code>\ninstances, <em>directly or indirectly</em>, they are referred to as\n<strong>nested models</strong> or <strong>nested forms</strong>.</p>\n<div class="info">\n  <strong>Directly</strong>: The nested model is a value of a property on the parent\n  <br>\n  <strong>Indirectly</strong>: The nested model is an item in a <code>FormArray</code> instance\n  that is a value of a property on the parent\n</div>\n\n<h2><a id="a-strong-known-model-strong-" class="anchor" href="#a-strong-known-model-strong-"><span class="header-link"></span></a>A <strong>known model</strong></h2><p>Angular forms does not recognize types, only structures. A form is\nan instance of <code>FormGroup</code> that is the root control.</p>\n<p>The library is based on types, classes, in dynamic forms the definition\nfor a form is a bit more specific, a form is a <code>FormGroup</code> from an\ninstance of a <strong>known model</strong>.</p>\n<p>A <strong>known model</strong> is a class decorated with <code>@FormModel</code>. The class is\n&quot;known&quot; to the library.</p>\n<h2><a id="explicitly-declared" class="anchor" href="#explicitly-declared"><span class="header-link"></span></a>Explicitly declared</h2><p>A child form is described as a property with a type that is a model,\ni.e. a child form is a <strong>known model</strong> which means that a child form\nis also a form by itself, being the root to of the child controls in it.</p>\n<p>The other requirement is explicit declaration which means there is\nanother state, a <strong>known model</strong> that is not a child form.</p>\n<p>A child form is then a <strong>flag</strong>, this flag affect both logical and\nvisual aspects which is not covered by this chapter, the only thing we\nneed to know is that a <strong>known model</strong> always transform into a\n<code>FormGroup</code> weather it is a child form or not. </p>\n<div class="info">\nKnown models that are not a child form are handled but other complex\ndata structures, we will cover these scenarios in the relevant chapters.\n</div>\n\n<p>Back to our model:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      childForm: <span class="hljs-literal">true</span>\n    }\n  })\n  nemesis: Hero;\n}\n</code></pre>\n<p>The <code>nemesis</code> property in the <code>Hero</code> class is a child form because it:</p>\n<ol>\n<li>Refer to a <strong>known model</strong>, the <code>Hero</code> model</li>\n<li>Explicitly declared as a child form via <code>childForm: true</code></li>\n</ol>\n<div class="info">\nNote that <code>childForm</code> is set on the metadata but not in the <code>render</code>\nobject, it is a logical definition not a visual definition. The library\nwill set the visual type of a child form to <code>form</code> which is used by\nthe renderer.\n</div>\n\n<h2><a id="adding-address" class="anchor" href="#adding-address"><span class="header-link"></span></a>Adding address</h2><p>To demonstrate child forms we need to extend our model, we need to\ncreate a new model class and add a property to <code>Hero</code> that has the\nnew model as type.</p>\n<p>We add create the <code>HeroAddress</code> model, a flat structure that represents\nan address:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> HeroAddress {\n  street: <span class="hljs-built_in">string</span>;\n  city: <span class="hljs-built_in">string</span>;\n  zip: <span class="hljs-built_in">string</span>;\n}\n</code></pre>\n<p>Adding the property to <code>Hero</code>:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-meta">@Prop</span>({\n  form: {\n    required: <span class="hljs-literal">true</span>,\n    render: {\n      vType: <span class="hljs-string">\'form\'</span>,\n      label: <span class="hljs-string">\'Address\'</span>\n    },\n    childForm: <span class="hljs-literal">true</span>\n  }\n})\naddress: HeroAddress;\n</code></pre>\n<div class="info">\nYou can review the full models with decorators in the source code view.\n</div>\n\n<h2><a id="displaying-a-child-form" class="anchor" href="#displaying-a-child-form"><span class="header-link"></span></a>Displaying a child form</h2><p>We&#39;ve mentioned that a child form is a form by itself, if we take an\ninstance of <code>Hero</code> with the <strong>address</strong> property set with an instance\nof <code>HeroAddress</code> we can use a dynamic form to display the address:</p>\n<pre class="lang-html"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"hero.address"</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>\n</code></pre>\n<p>But how do we display a child form as a child, what will display for\n<strong>address</strong> when we display the hero instance</p>\n<pre class="lang-html"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"hero"</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>\n</code></pre>\n<p>This is where visual display becomes challenging, there are multiple\nways to display nested forms, some are based on preferred style and some\nbased on the context. The challenge is to allow freedom so the user can\nchoose the one right for him.</p>\n<div class="info">\nCommon visual styles are inline and external. External options are\ndialog window, tabs, pages etc... \n</div>\n\n<p>The library provide tools that help achieve this freedom but at the end\nit is up to the <strong>renderer</strong>. The renderer can choose a strict &quot;my way&quot;\nimplementation, An implementation that pass the responsibility to the\nuser or something in between a configuration driven (metadata) approach.</p>\n<p>There is always a trade-off, strict is simple to use but not flexible\nand as we offer more flexibility we also add more complexity for the\nuser. </p>\n<p>In this tutorial we use the material renderer. The material renderer\ndoes not render child forms, instead it renders an edit button which\nwhen clicked emits the <strong>(rendererEvent)</strong> event, a listener should\nhandle the display of the child form.</p>\n<p>We will not use the <strong>(rendererEvent)</strong>, instead we will use a\n<em>control outlet</em>. Using event&#39;s is an excellent solution but we want to\ndemonstrate the use of <em>outlet</em>, <strong>(rendererEvent)</strong> is used in\nthe chapter about <a class="tdm-anchor-trap" href="../arrays">Arrays</a></p>\n<div class="alert">\nA child form is one of several complex data structures, there are others\nand they can merge, for example <strong>array of child forms</strong>. We will cover\nthem as we progress\n\n<br><br>\n\nTrying to navigate through complexity, the render implementations that\nship with this package will take the less complex options, i.e.\nusing the basic non configurable implementation which the user can\noverride using tools from the library.<br></div>\n\n\n<h3><a id="control-outlet" class="anchor" href="#control-outlet"><span class="header-link"></span></a>Control Outlet</h3><p>We covered <a class="tdm-anchor-trap" href="../control-outlet">control\noutlet&#39;s</a> in the basic section of the tutorial. Outlet&#39;s allow to\nreplace the display of a control while showing the original control\nsomewhere else. This is great for tabs, dialogs, etc...</p>\n<p>In the following example we want show the <code>HeroAddress</code> child form in\na different view as an external form.</p>\n<p>To do that we define an outlet in the left drawer that will open\nonce the user want&#39;s to edit the address.</p>\n<p>To interact with the drawer we use a structural outlet that shows\nan <strong>edit</strong> button to open/close the left drawer when clicked. The\noriginal location of the <strong>address</strong> control is replaced with the\ntemplate we define for the outlet.</p>\n<p>Because the material renderer use a dynamic form to render child forms\nwe know a complete new dynamic form will display in the left drawer.</p>\n<div class="info">\nIn the chapter about the\n<a class="tdm-anchor-trap" href="../render-container">Render Container</a>\nwe described the features it provides. The renderer has a layout of 2\ncolumns, 1 for labels and 1 for the original renderer with an option to\nreplace the original renderer. This is a good example how we leverage the\ncontainer to keep the layout, show the label but use our control, in\nthis case the <strong>edit</strong> button, instead.\n</div>'},{file:"README.md",lang:"md",section:"part2",code:'<p>Notice how the <strong>required</strong> error appears next to the edit button and\ndisappear after clicking the edit button, why is that?</p>\n<p>The <strong>address</strong> property has a <code>required</code> validation. The model we are\nshowing is a new model with an empty address thus the error.</p>\n<p>When the user click&#39;s on the edit we need to create a new address.</p>\n<div class="alert">\nThis is <strong>not</strong> an instance of <code>HeroAddress</code>, it is the <code>FormGroup</code>\nversion of it as we <strong>never</strong> update the model, we update the form!\n</div>\n\n<p>But how can we create the <code>FormGroup</code>? We do that using the\n<a class="tdm-anchor-trap" href="../control-panel">control\npanel</a> discussed earlier.</p>\n<pre class="lang-ts"><code class="lang-ts">editExternalForm(ctx: DynamicControlRenderContext): <span class="hljs-built_in">void</span> {\n  <span class="hljs-keyword">this</span>.rightDrawerOpened = <span class="hljs-literal">true</span>;\n  <span class="hljs-keyword">if</span> (ctx.fControl.value === <span class="hljs-literal">null</span>) {\n      <span class="hljs-keyword">const</span> heroAddressFormGroup = ctx.tdmForm.createControl(ctx.item.fullName, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>);\n      ctx.fGroup.setControl(ctx.item.name, heroAddressFormGroup);\n      ctx.item.markAsChanged();\n  }\n}\n</code></pre>\n<p>With <code>ctx.fControl.value === null</code> we check if the <strong>address</strong> is null\nwhich means empty, this will always be null when a child form is not\nset.</p>\n<p>When <code>null</code> we need to create the <code>FormGroup</code> which we do by calling\n<code>ctx.tdmForm.createControl(ctx.item.fullName, null, true)</code> which mean\n<em>create a control for the type in <code>tx.item.fullName</code>, which I don&#39;t have\na value for (<code>null</code>) but I want you to create a new one (<code>true</code>)</em>. </p>\n<p>Once we have the new <code>FormGroup</code> instance we need to set it instead of\nthe current one, which is <code>null</code>. We use the parent form group (which is\nthe form group for the hero model) and we set the <strong>address</strong> property\nof it to our new form group (<code>ctx.item.name</code>).</p>\n<p>The last thing we need to do is to mark that this control has changed so\nit will be picked up by change detection.</p>\n<h2><a id="a-note-on-the-renderer" class="anchor" href="#a-note-on-the-renderer"><span class="header-link"></span></a>A note on the renderer</h2><p>Although custom renders are covered in specific section dedicated to\nthe renderer this topic involves some aspects on the user side.</p>\n<p>Custom renderer implementation can offer flexibility by extending\nthe metadata a user can provide for a child form and using that to\ntake decisions. These are sort of <em>presets</em> of layouts the user can\nchoose from.</p>\n<p>This way add&#39;s a lot of complexity on the renderer&#39;s implementation and\nalso on the user&#39;s as more options might lead to confusion.</p>\n<p>Remember that the user can always use outlets and creating a solution\nthat covers all scenarios is not practical, this is why we chose the\nbasic approach.</p>\n<p>That said, it might be that the same visual style is applied repeatedly\nin many forms and the same behaviour using the same outlet configuration\nis done over and over. This is where adding some logic might help and\ncreating a preset might simplify the process.</p>\n'},{file:"child-form.component.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { ChangeDetectorRef, Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { DynamicControlRenderContext, createChildFormEvent, TDMModelForm } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n<span class="hljs-keyword">import</span> { Hero } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./model\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'form-child-form\'</span>,\n  templateUrl: <span class="hljs-string">\'./child-form.component.html\'</span>,\n  styleUrls: [ <span class="hljs-string">\'./child-form.component.scss\'</span> ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ChildFormComponent {\n  model = <span class="hljs-keyword">new</span> Hero();\n  childForm: TDMModelForm&lt;<span class="hljs-built_in">any</span>&gt;;\n  rightDrawerOpened: <span class="hljs-built_in">boolean</span>;\n  showChildForm: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> cdr: ChangeDetectorRef</span>) { }\n\n  editExternalForm(context: DynamicControlRenderContext): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.rightDrawerOpened = <span class="hljs-literal">true</span>;\n    <span class="hljs-keyword">this</span>.showChildForm = <span class="hljs-literal">true</span>;\n    <span class="hljs-keyword">if</span> (!<span class="hljs-keyword">this</span>.childForm) {\n      <span class="hljs-keyword">const</span> event = createChildFormEvent(context);\n      <span class="hljs-keyword">if</span> ( event.isNew ) {\n        event.context.fControl = &lt;<span class="hljs-built_in">any</span>&gt; context.tdmForm.createControl(context.item.fullName, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>);\n        event.context.fGroup.setControl(context.item.name, event.context.fControl);\n        event.context.item.markAsChanged();\n      }\n      <span class="hljs-keyword">this</span>.childForm = event.createTDMModelForm();\n      <span class="hljs-keyword">this</span>.cdr.detectChanges();\n    }\n  }\n\n  hasError(errorName: <span class="hljs-built_in">string</span>, ctx: DynamicControlRenderContext): <span class="hljs-built_in">boolean</span> {\n    <span class="hljs-keyword">if</span> ( ctx.fControl ) {\n      <span class="hljs-keyword">return</span> ctx.fControl.hasError(errorName);\n    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ( ctx.fArray ) {\n      <span class="hljs-keyword">return</span> ctx.fArray.hasError(errorName);\n    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ( ctx.fGroup ) {\n      <span class="hljs-keyword">return</span> ctx.fGroup.hasError(errorName);\n    }\n    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n  }\n}\n',title:"Component"},{file:"child-form.component.html",lang:"html",section:"tdmDemo",code:'  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-wrapper-right-drawer"</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: right"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-icon-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"rightDrawerOpened = false"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>close<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">dynamicControlOutlet</span>=<span class="hljs-string">"\'*\'; let ctx; dynForm: dynForm; vType: \'form\'"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form-row</span> [<span class="hljs-attr">fromContext</span>]=<span class="hljs-string">"ctx"</span> <span class="hljs-attr">custom</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">mat-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"editExternalForm(ctx)"</span>&gt;</span>edit<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">mat-error</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: inline;"</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"hasError(\'required\', ctx)"</span>&gt;</span>Required<span class="hljs-tag">&lt;/<span class="hljs-name">mat-error</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> #<span class="hljs-attr">dynForm</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"showChildForm"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">dynamicFormOverride</span>=<span class="hljs-string">"\'*\'; let ctx; vType: \'form\'"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"childForm"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>',title:"Template"},{file:"child-form.component.scss",lang:"scss",section:"default",code:"",title:"Style"},{file:"model.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Model, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> HeroAddress {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'Street\'</span>,\n      }\n    }\n  })\n  street: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'City\'</span>,\n      }\n    }\n  })\n  city: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'Zip\'</span>,\n      }\n    }\n  })\n  zip: <span class="hljs-built_in">string</span>;\n}\n\n<span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Hero ID\'</span>\n      }\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'Hero Name\'</span>\n      }\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'boolean\'</span>,\n        label: <span class="hljs-string">\'Has Tracking Device\'</span>\n      }\n    }\n  })\n  hasTracking: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slideToggle\'</span>,\n        label: <span class="hljs-string">\'Double Agent\'</span>\n      }\n    }\n  })\n  doubleAgent: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slider\'</span>,\n        label: <span class="hljs-string">\'BMI Index\'</span>,\n        data: { min: <span class="hljs-number">1</span>, max: <span class="hljs-number">35</span> }\n      }\n    }\n  })\n  bmi: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'select\'</span>,\n        label: <span class="hljs-string">\'Super Power\'</span>,\n        data: {\n          options: [\n              { value: <span class="hljs-string">\'selfHealing\'</span>, label: <span class="hljs-string">\'Self Healing\'</span> },\n              { value: <span class="hljs-string">\'flying\'</span>, label: <span class="hljs-string">\'Flying\'</span> },\n              { value: <span class="hljs-string">\'cloaking\'</span>, label: <span class="hljs-string">\'Cloaking\'</span> },\n              { value: <span class="hljs-string">\'cloning\'</span>, label: <span class="hljs-string">\'Cloaning\'</span> },\n              { value: <span class="hljs-string">\'invisibility\'</span>, label: <span class="hljs-string">\'Invisibility\'</span> }\n          ]\n        }\n      }\n    }\n  })\n  superPower: <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'form\'</span>,\n        label: <span class="hljs-string">\'Address\'</span>\n      },\n      childForm: <span class="hljs-literal">true</span>\n    }\n  })\n  address: HeroAddress;\n}\n',title:"Model"}]}});
//# sourceMappingURL=FormsChildFormComponent.c0466c3ea2c9c654ae4d.chunk.js.map