(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{I09P:function(s,n){s.exports=[{file:"README.md",lang:"md",section:"part1",code:'<h1><a id="control-outlet" class="anchor" href="#control-outlet"><span class="header-link"></span></a>Control Outlet</h1><p>In the angular vocabulary, an <strong>outlet</strong> usually represent a location\nin the view that acts as a placeholder for dynamic content injection.</p>\n<p>Outlets provide a declarative and elegant solution when we want to\nshow content in a specific place but renderer it in isolation.</p>\n<p>The <code>router-outlet</code> component is a good example, it is a location in\nthe view that marks the place where the router will inject components\nbased on the URL.</p>\n<div class="info">\nOutlet&#39;s are powerful because they allow to define and render content\nwith specific context and inject it elsewhere, outside of the block\nthe context is bound to, while keeping access to that context.\n</div>\n\n<p>Let&#39;s see a quick example:</p>\n'},{file:"README.md",lang:"md",section:"part2",code:'<p>What did we do?</p>\n<p>We took the <strong>superPower</strong> field showing a <strong>select</strong> component and\nmoved it outside of the form inside a container with a red background.</p>\n<p>We&#39;ve also added an <strong>H3</strong> tag header where the control used to be.</p>\n<p>This was all done through the template, let&#39;s review the code:</p>\n<pre class="lang-html"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> #<span class="hljs-attr">dynForm</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"red-super-power-box"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> *<span class="hljs-attr">dynamicControlOutlet</span>=<span class="hljs-string">"\'superPower\'; let ctx; dynForm: dynForm"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"red-super-power-title"</span>&gt;</span>Super Power Is In The Red Box<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre>\n<p><code>DynamicControlOutletDirective</code> is the outlet, like\n<a class="tdm-anchor-trap" href="../local-override">local custom templates</a>\nit also contains query information that is used to pair it with one or\nmore controls, the API is identical.</p>\n<p>The outlet should be defined with the parameters for the\nquery, there are 2:</p>\n<ol>\n<li><strong>One or more control names/paths</strong><br>Can be a string or an array of string.</li>\n<li><strong>One or more visual types</strong><br>Can be a visual type or an array of visual types.</li>\n</ol>\n<p>You can combine one of the parameters or both.</p>\n<p>The outlet has an additional parameter required, the dynamic form\ninstance. In the example above we referenced the dynamic from within\nthe template using the local template variable <code>dynForm</code></p>\n<h2><a id="optionally-structural" class="anchor" href="#optionally-structural"><span class="header-link"></span></a>Optionally Structural</h2><p><code>DynamicControlOutletDirective</code> can work in 2 modes:</p>\n<ol>\n<li>Replace and project</li>\n<li>Project only</li>\n</ol>\n<p>The mode to use depends on the way the outlet directive is used, if it\nis used as a structural directive or not.</p>\n<h3><a id="1-replace-and-project" class="anchor" href="#1-replace-and-project"><span class="header-link"></span></a>1. Replace and project</h3><p>This first mode, <strong>replace and project</strong> is used when the outlet is a\nstructural directive.</p>\n<p>In this mode all controls matching the query definition are replaced\nwith the template that the directive is on. </p>\n<p>Then all the controls we removed will get injected to the location where\nthe directive is at, the original location i.e. the placeholder.</p>\n<p>It&#39;s a swap between the template and the controls.</p>\n<p><strong>This is the mode used in the example above</strong></p>\n<h3><a id="2-project-only" class="anchor" href="#2-project-only"><span class="header-link"></span></a>2. Project only</h3><p>The second mode, <strong>project only</strong> is used when the outlet is used as a\nregular directive, i.e without <code>*</code>.</p>\n<p>In this mode all controls matching the query definition are <strong>removed</strong>\nand nothing is set to replace them. </p>\n<p>All the controls we removed will get injected to the location where\nthe directive is at, the original location i.e. the placeholder.</p>\n<pre class="lang-html"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">dynamicControlOutlet</span>=<span class="hljs-string">"superPower"</span>\n     [<span class="hljs-attr">dynamicControlOutletDynForm</span>]=<span class="hljs-string">"dynForm"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre>\n<p>The input&#39;s here are a bit longer.</p>\n<div class="alert">\nSimilar to <code>&lt;router-outlet&gt;</code> the content is injected to the view\ncontainer for the outlet, this means next to it as a sibling and not\ninside.\n</div>\n\n<h2><a id="outlet-usage" class="anchor" href="#outlet-usage"><span class="header-link"></span></a>Outlet usage</h2><p>With the outlet we can pick the controls we want and display them\nsomewhere else, outside of the UI boundaries of the dynamic form.</p>\n<p>At this point it might seem that it does not have much use, why would we\nwant to take a checkbox and move it outside of the form?</p>\n<p>Up tp this point we used simple models in the examples, having only\nprimitive properties. These are simple data structures, flat models.</p>\n<p>Once we introduce complex data structures such as arrays, child forms,\nobjects and the combination of all the outlet becomes a valuable tool.</p>\n<p>We will demonstrate outlet use with all complex data structure.</p>\n<h2><a id="outlet-39-s-and-override-39-s" class="anchor" href="#outlet-39-s-and-override-39-s"><span class="header-link"></span></a>Outlet&#39;s and Override&#39;s</h2><p>Setting a local custom template and an outlet for the same control does\nnot conflict, the custom template will render and then injected into\nthe outlet.</p>\n'},{file:"control-outlet.component.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Hero } <span class="hljs-keyword">from</span> <span class="hljs-string">\'../4-element-metadata\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'form-control-outlet\'</span>,\n  templateUrl: <span class="hljs-string">\'./control-outlet.component.html\'</span>,\n  styleUrls: [ <span class="hljs-string">\'./control-outlet.component.scss\'</span> ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ControlOutletComponent {\n  model = <span class="hljs-keyword">new</span> Hero();\n}\n',title:"Component"},{file:"control-outlet.component.html",lang:"html",section:"tdmDemo",code:'<span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> #<span class="hljs-attr">dynForm</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"red-super-power-box"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> *<span class="hljs-attr">dynamicControlOutlet</span>=<span class="hljs-string">"\'superPower\'; let ctx; dynForm: dynForm"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"red-super-power-title"</span>&gt;</span>Super Power Is In The Red Box<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>',title:"Template"},{file:"control-outlet.component.scss",lang:"scss",section:"default",code:'<span class="hljs-selector-class">.red-super-power-box</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">25px</span>;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">15px</span>;\n  <span class="hljs-attribute">background-color</span>: indianred;\n}\n\n<span class="hljs-selector-class">.red-super-power-title</span> {\n  <span class="hljs-attribute">text-align</span>: center;\n  <span class="hljs-attribute">color</span>: indianred;\n}\n',title:"Style"},{file:"model.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Model, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Hero ID\'</span>\n      }\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'Hero Name\'</span>\n      }\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'date\'</span>,\n        label: <span class="hljs-string">\'Hero Birth\'</span>\n      }\n    }\n  })\n  birth: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'boolean\'</span>,\n        label: <span class="hljs-string">\'Has Tracking Device\'</span>\n      }\n    }\n  })\n  hasTracking: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slideToggle\'</span>,\n        label: <span class="hljs-string">\'Double Agent\'</span>\n      }\n    }\n  })\n  doubleAgent: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slider\'</span>,\n        label: <span class="hljs-string">\'BMI Index\'</span>,\n        data: { min: <span class="hljs-number">1</span>, max: <span class="hljs-number">35</span> }\n      }\n    }\n  })\n  bmi: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'select\'</span>,\n        label: <span class="hljs-string">\'Super Power\'</span>,\n        data: {\n          multiple: <span class="hljs-literal">true</span>,\n          options: [\n            { value: <span class="hljs-string">\'selfHealing\'</span>, label: <span class="hljs-string">\'Self Healing\'</span> },\n            { value: <span class="hljs-string">\'flying\'</span>, label: <span class="hljs-string">\'Flying\'</span> },\n            { value: <span class="hljs-string">\'cloaking\'</span>, label: <span class="hljs-string">\'Cloaking\'</span> },\n            { value: <span class="hljs-string">\'cloning\'</span>, label: <span class="hljs-string">\'Cloning\'</span> },\n            { value: <span class="hljs-string">\'invisibility\'</span>, label: <span class="hljs-string">\'Invisibility\'</span> }\n          ]\n        }\n      }\n    }\n  })\n  superPower: <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      forceObjectType: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'select\'</span>,\n        label: <span class="hljs-string">\'Hobbies\'</span>,\n        data: {\n          multiple: <span class="hljs-literal">true</span>,\n          options: [\n            <span class="hljs-string">\'Baseball\'</span>,\n            <span class="hljs-string">\'Basketball\'</span>,\n            <span class="hljs-string">\'Buildi\'</span>,\n            <span class="hljs-string">\'Cosplay\'</span>,\n            <span class="hljs-string">\'Soccer\'</span>,\n            <span class="hljs-string">\'Spelunkering\'</span>,\n            <span class="hljs-string">\'Storm Chasing\'</span>,\n            <span class="hljs-string">\'Wrestling\'</span>,\n            <span class="hljs-string">\'Writing\'</span>,\n            <span class="hljs-string">\'Yoga\'</span>\n          ].map( <span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> ({value})),\n        }\n      }\n    }\n  })\n  hobbies: <span class="hljs-built_in">Array</span>&lt;<span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>&gt;;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      forceObjectType: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'chips\'</span>,\n        label: <span class="hljs-string">\'Chips\'</span>,\n        data: {\n          removable: <span class="hljs-literal">true</span>,\n          addOnBlur: <span class="hljs-literal">true</span>,\n        }\n      }\n    }\n  })\n  chips: <span class="hljs-built_in">string</span>[];\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'textarea\'</span>,\n        label: <span class="hljs-string">\'Bio\'</span>,\n        data: {\n          autoSize: <span class="hljs-literal">false</span>,\n          minRows: <span class="hljs-number">3</span>,\n          maxRows: <span class="hljs-number">5</span>\n        }\n      }\n    }\n  })\n  bio: <span class="hljs-built_in">string</span>;\n}\n',title:"Model"}]}}]);