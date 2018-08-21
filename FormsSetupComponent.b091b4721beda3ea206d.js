(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{iIUW:function(e,n){e.exports=[{file:"README.md",lang:"md",section:"default",code:'<h2><a id="install" class="anchor" href="#install"><span class="header-link"></span></a>Install</h2><p>You can use either the npm or yarn command-line tool to install packages.\nUse whichever is appropriate for your project in the examples below.</p>\n<h4><a id="npm" class="anchor" href="#npm"><span class="header-link"></span></a>NPM</h4><pre class="lang-shell"><code class="lang-shell">npm install --save @tdm/ngx-dynamic-forms @tdm/tixin @tdm/core\n</code></pre>\n<h4><a id="yarn" class="anchor" href="#yarn"><span class="header-link"></span></a>Yarn</h4><pre class="lang-shell"><code class="lang-shell">yarn add @tdm/ngx-dynamic-forms @tdm/tixin @tdm/core\n</code></pre>\n<div class="info">\n  The library depends on 2 libraries from the <code>@tdm</code> framework.\n</div>\n\n<h2><a id="ngmodule-setup" class="anchor" href="#ngmodule-setup"><span class="header-link"></span></a>NgModule setup</h2><p>We&#39;re building a new app, our root module is called <code>DynamicFunAppModule</code></p>\n<p>We need to import <code>DynamicFormsModule</code> and setup the default renderer.</p>\n<h3><a id="the-default-code-controlrenderer-code-" class="anchor" href="#the-default-code-controlrenderer-code-"><span class="header-link"></span></a>The default <code>ControlRenderer</code></h3><p>The library requires access to a default <code>ControlRenderer</code>.  </p>\n<p>The role of a <code>ControlRenderer</code> is to display the control based on\ninformation it has about it.</p>\n<p>Setting up a default renderer is done through the static <code>forRoot</code>\nmethod on the ng-module or manually using angular&#39;s DI:</p>\n<pre class="lang-ts"><code class="lang-ts">providers: [\n  { provide: FORM_CONTROL_COMPONENT, useValue: MyRenderer }\n]\n</code></pre>\n<p>The value passed can be a <code>ControlRenderer</code> or another type that\nwe will discuss later.</p>\n<p>For now all we need to know is that we need to provide a component\nthat renders UI elements.</p>\n<h3><a id="setup-using-material-plugin-module" class="anchor" href="#setup-using-material-plugin-module"><span class="header-link"></span></a>Setup using Material plugin module</h3><p>For the first part of the tutorial we will use a predefined renderer,\nnot a part of the library but provided with the package as a plugable\nmodule.</p>\n<pre class="lang-ts"><code class="lang-ts">  <span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n  <span class="hljs-keyword">import</span> { MaterialDynamicFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms/plugin/material\'</span>;\n\n  <span class="hljs-meta">@NgModule</span>({\n    ...\n    imports: [\n      MaterialDynamicFormsModule.forRoot()\n    ],\n    ...\n  })\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DynamicFunAppModule { }\n}\n</code></pre>\n<p><code>MaterialFormControlRenderer</code> is the renderer exported by \n<strong>@tdm/ngx-dynamic-forms/plugin/material</strong>, it is an angular component\nthat render form controls using UI components from the <code>@angular/material</code>\nUI framework.</p>\n<p>In the example above we are using the <code>MaterialDynamicFormsModule</code>\nprovided with the plugin to automatically register the library with\nthe renderer. <code>MaterialDynamicFormsModule</code> also exports\n<code>DynamicFormsModule</code> so we do not need to explicitly import it.</p>\n<div class="info">\n<code>MaterialDynamicFormsModule.forRoot()</code> accepts a <code>DefaultRenderer</code> as an\noptional parameter, if provided it will be used at the default\nrenderer, you can pass the component class or a map of vType/component.\n<br>\n<br>\nThis is useful when you want to wrap a renderer with a container to\ncontrol layout, label, etc...\n</div>\n\n<h3><a id="setup-using-code-dynamicformsmodule-code-" class="anchor" href="#setup-using-code-dynamicformsmodule-code-"><span class="header-link"></span></a>Setup using <code>DynamicFormsModule</code></h3><p><code>MaterialDynamicFormsModule</code> is just sugar, a <em>helper</em> module.\nWe can register the renderer without it.</p>\n<pre class="lang-ts"><code class="lang-ts">  <span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n  <span class="hljs-keyword">import</span> { DynamicFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n  <span class="hljs-keyword">import</span> { MaterialFormControlRenderer } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms/plugin/material\'</span>;\n\n  <span class="hljs-meta">@NgModule</span>({\n    ...\n    imports: [\n      DynamicFormsModule.forRoot(MaterialFormControlRenderer)\n    ],\n    ...\n  })\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DynamicFunAppModule { }\n}\n</code></pre>\n<p>This is also how we would register a custom built renderer.</p>\n<div class="alert">\n  It is recommended to use the module that comes with the\n  plugin/renderer, when such provided.\n  <br> \n  <br>\n  Modules import other modules and components used by the renderer.\n  When not imported properly angular will throw an exception.\n  <br> \n  <br>\n  For example, <code>MaterialDynamicFormsModule</code> imports modules from the\n  <code>@angular/material</code> framework that are used by the renderer.\n</div>\n\n<h2><a id="renderer-hierarchy" class="anchor" href="#renderer-hierarchy"><span class="header-link"></span></a>Renderer hierarchy</h2><p><code>DynamicFormsModule.forRoot(MaterialFormControlRenderer)</code> registers\nthe <code>MaterialFormControlRenderer</code> as the <strong>default renderer</strong>.</p>\n<p>When rendering, the library picks the first renderer it finds through\nangular&#39;s dependency injection, i.e. the renderer is picked based\non DI hierarchy - <em>FIFO</em>.</p>\n<p>You can change the renderer for a component or module using a provider:</p>\n<pre class="lang-ts"><code class="lang-ts">providers: [\n  { provide: FORM_CONTROL_COMPONENT, useValue: SomeOtherRenderer }\n]\n</code></pre>\n',title:"Setup"}]}}]);