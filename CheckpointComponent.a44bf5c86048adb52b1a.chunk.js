webpackJsonp([14],{"p7/F":function(s,n){s.exports=[{file:"README.md",lang:"md",section:"part1",code:"<ul>\n<li>The renderer is a <code>@Component</code></li>\n<li>An instance of the renderer shows 1 form control</li>\n<li>The renderer has a context structured by <code>DynamicFormControlRenderer</code></li>\n</ul>\n"},{file:"README.md",lang:"md",section:"part2",code:'<ul>\n<li>We set our renderer in the <code>forRoot</code> method, it will be the default renderer.</li>\n</ul>\n<pre class="lang-ts"><code class="lang-ts">  <span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n  <span class="hljs-keyword">import</span> { DynamicFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n  <span class="hljs-keyword">import</span> { TutorialSimpleRendererComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./renderer/renderer.component\'</span>;\n\n  <span class="hljs-meta">@NgModule</span>({\n    ...\n    imports: [\n      DynamicFormsModule.forRoot(TutorialSimpleRendererComponent)\n    ],\n    ...\n  })\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DynamicFunAppModule { }\n}\n</code></pre>\n'},{file:"README.md",lang:"md",section:"part3",code:'<ul>\n<li>A model is just a TypeScript class</li>\n<li>To create a FORM from a model we need to define metadata on the model and it&#39;s properties</li>\n<li>The metadata is used to define the look, behavior, and actions</li>\n<li>There are a lot of metadata options, we will cover most in this tutorial</li>\n</ul>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">import</span> { Model, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Hero ID\'</span>\n      }\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'Hero Name\'</span>\n      }\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'boolean\'</span>,\n        label: <span class="hljs-string">\'Super Hero\'</span>\n      }\n    }\n  })\n  superHero: <span class="hljs-built_in">boolean</span>;\n}\n</code></pre>\n'},{file:"README.md",lang:"md",section:"part4",code:'<ul>\n<li>A dynamic form only needs the model instance</li>\n<li>The dynamic form has an extensive API with powerful events, we will\ncover them by showcasing scenarios they solve.</li>\n</ul>\n<pre class="lang-html"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>\n</code></pre>\n<p>This will render a dynamic form.</p>\n'}]}});
//# sourceMappingURL=CheckpointComponent.a44bf5c86048adb52b1a.chunk.js.map