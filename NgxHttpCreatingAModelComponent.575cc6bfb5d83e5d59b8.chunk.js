webpackJsonp([20],{JNYx:function(e,s){e.exports=[{file:"README.md",lang:"md",section:"default",code:'<h1><a id="creating-a-resource" class="anchor" href="#creating-a-resource"><span class="header-link"></span></a>Creating a Resource</h1><p>In the <a class="tdm-anchor-trap" href="../overview">Overview</a> we&#39;ve\nestablished some of the concepts being used, let&#39;s see how we use them:</p>\n<h2><a id="the-code-httpresource-code-decorator" class="anchor" href="#the-code-httpresource-code-decorator"><span class="header-link"></span></a>The <code>@HttpResource()</code> decorator</h2><p>Starting from scratch, let&#39;s build a <code>Customer</code> class:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">class</span> Customer {\n  CustomerID: <span class="hljs-built_in">string</span>;\n  CompanyName: <span class="hljs-built_in">string</span>;\n  Phone: <span class="hljs-built_in">string</span>;\n}\n</code></pre>\n<blockquote>\n<p>This is a striped-down <code>Customer</code> for simplicity.</p>\n</blockquote>\n<p>This is a simple class, it is not known to the library which means it\nis still not a resource.</p>\n<p>We register it as a resource using the <code>@HttpResource</code> decorator:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">import</span> { HttpResource } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-http-client\'</span>;\n\n<span class="hljs-meta">@HttpResource</span>({\n  endpoint: <span class="hljs-string">\'customers\'</span>\n})\n<span class="hljs-keyword">class</span> Customer {\n  CustomerID: <span class="hljs-built_in">string</span>;\n  CompanyName: <span class="hljs-built_in">string</span>;\n  Phone: <span class="hljs-built_in">string</span>;\n}\n</code></pre>\n<p>We mentioned the A <strong>Resource</strong> is an abstract term, a concrete resource\nis the combination of a model and adapter.</p>\n<p>An <strong>Adapter</strong> is something that knows how to executes actions, in our\ncase we need something that knows how to execute HTTP calls through\nangular&#39;s <code>HttpClient</code>.</p>\n<p><code>HttpResource</code> is the concrete resource, it is a model with a bound\nadapter.</p>\n<h3><a id="httpresource-configuration" class="anchor" href="#httpresource-configuration"><span class="header-link"></span></a>HttpResource configuration</h3><p>The decorator accepts an optional metadata argument <code>HttpResourceMetadataArgs</code>\nthat contains metadata for the resource.</p>\n<p>Again, a <strong>Resource</strong> is an extension of a <strong>Model</strong>, so no surprise,\n<code>HttpResourceMetadataArgs</code> extends <code>ModelMetadataArgs</code>. All options\nwe can configure for a <code>@Model</code> are also available here.</p>\n<p>With <code>HttpResource</code>, configuration is mandatory, specifically one\nproperty, the <strong>endpoint</strong>.</p>\n<p>The <strong>endpoint</strong> is used to define that pathname for this resource\nand it is used as the scope for pathname&#39;s defined by actions on this\nresource.</p>\n<h2><a id="describing-the-structure" class="anchor" href="#describing-the-structure"><span class="header-link"></span></a>Describing the structure</h2><p>A resource by itself is not enough, we need to define the data model.</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">import</span> { Identity, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/core\'</span>;\n<span class="hljs-keyword">import</span> { ActiveRecord, HttpResource, UrlParam } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-http-client\'</span>;\n\n<span class="hljs-meta">@HttpResource</span>({\n  endpoint: <span class="hljs-string">\'customers\'</span>\n})\n<span class="hljs-keyword">class</span> Customer {\n  <span class="hljs-meta">@Identity</span>()\n  <span class="hljs-meta">@UrlParam</span>(<span class="hljs-string">\'id\'</span>)\n  <span class="hljs-meta">@Prop</span>()\n  CustomerID: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>()\n  CompanyName: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>()\n  Phone: <span class="hljs-built_in">string</span>;\n}\n</code></pre>\n<p>We decorate each property with <code>@Prop</code>, this tells library to analyze\nit when processing data (inwards and outwards).</p>\n<p><code>@Prop()</code> does not do much in our simple example but it is important and\ncontains a lot of options that configure how a property behaves,\nwe will cover these as we progress.</p>\n<p>We&#39;ve also decorated <strong>CustomerID</strong> with <code>@Identity()</code> and <strong>UrlParam()</strong>.</p>\n<h3><a id="the-code-identity-code-decorator" class="anchor" href="#the-code-identity-code-decorator"><span class="header-link"></span></a>The <code>@Identity()</code> decorator</h3><p>An identity field is a field that holds a value that is unique to a\nspecific instance of a resource, amongst all other resource of the same\ntype.</p>\n<p>It is not mandatory but highly recommended. Some actions require an\nidentity (i.e. findById), and will not work if one is not set.</p>\n<div class="info">\n<code>@Identity</code> is not specific to <code>@HttpResource</code>, it is used by other\nlibraries, some might extend it. For example <code>@AutoIdentity</code> from\n<code>@tdm/local-forage</code> which will create a new UUID for new resources it\ncreate.\n</div>\n\n<h3><a id="the-code-urlparam-code-decorator" class="anchor" href="#the-code-urlparam-code-decorator"><span class="header-link"></span></a>The <code>@UrlParam()</code> decorator</h3><p>Marks the field as part of the URL.</p>\n<p>A URL parameter can be a path parameter or a query string parameter.</p>\n<p>The name of the parameter is the name of the property, unless explicitly\ndefined. In our example, the name <code>id</code> is explicitly defined but if\nnot, <code>CustomerID</code> would be the name.</p>\n<pre class="lang-ts"><code class="lang-ts">  <span class="hljs-meta">@Identity</span>()\n  <span class="hljs-meta">@UrlParam</span>()\n  <span class="hljs-meta">@Prop</span>()\n  CustomerID: <span class="hljs-built_in">string</span>;\n</code></pre>\n<p>When the resolved URL contains a path parameter matching the one defined\nby a <code>@UrlParam</code>, it will be used as a path parameter, otherwise it is\nused as a query string.</p>\n<div class="info">\nA resolved URL contains the <strong>endpoint</strong> defined in <code>@HttpResource</code> and\nwith additions from the actions, when set.\n</div>\n\n<h4><a id="url-parameters-for-specific-verbs" class="anchor" href="#url-parameters-for-specific-verbs"><span class="header-link"></span></a>URL parameters for specific verbs</h4><p>We said that <code>@UrlParam</code> accepts nothing or a string, this is the\nsimplest form.</p>\n<p>Sometimes you might want to define a URL parameter only for a specific\nhttp VERB, e.g just for GET.</p>\n<p>This is supported by providing an configuration object to <code>@UrlParam</code>,\nyou can even decorate multiple <code>@UrlParam</code>s on the same property.</p>\n<p>See <code>UrlParamMetadataArgs</code> for more details.</p>\n<hr>\n<p>We are now ready to use this model with the Data Access Object</p>\n<hr>\n',title:"Setup"}]}});
//# sourceMappingURL=NgxHttpCreatingAModelComponent.575cc6bfb5d83e5d59b8.chunk.js.map