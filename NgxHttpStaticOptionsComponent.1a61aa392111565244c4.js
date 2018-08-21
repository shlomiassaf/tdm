(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5/WA":function(e,s){e.exports=[{file:"README.md",lang:"md",section:"PART-1",code:'<h1><a id="static-options" class="anchor" href="#static-options"><span class="header-link"></span></a>Static Options</h1><p>In the last chapter we covered <strong>ad-hoc</strong> options, the options we will\nprovide when we <strong>use</strong> the model. Static options are provided on the\ndefinition process, it is defined once per resource/action and does not\nchange.</p>\n<p>There are 3 places where we can define static options:</p>\n<ul>\n<li><strong>Module Level</strong>: What we set the <code>HttpDefaultConfig</code> provider in <code>@NgModule</code></li>\n<li><strong>Resource Level</strong>: What we set in the metadata in <code>@HttpResource(/* metadata */)</code></li>\n<li><strong>Action Level</strong>: When we define actions on a resource class</li>\n</ul>\n<p>Resolving an option, the library will see if it is set in the <strong>ad-hoc</strong>\noptions, if not it will check in the <strong>Action</strong>, then <strong>Resource</strong> and\nfinally take it from <strong>Module</strong>.</p>\n<p><strong>Ad-hoc</strong> options are set when we <strong>use</strong> the instance of a resource.<br><strong>Static</strong> options are set when we <strong>define</strong> a resource.</p>\n<div class="info">\n<strong>Action</strong> level options are used in Custom Actions which is not covered\nin this chapter.\n</div>\n\n<h2><a id="a-set-of-common-options" class="anchor" href="#a-set-of-common-options"><span class="header-link"></span></a>A Set of common options</h2><p>When a request is processed the final options are set based on all 4\nlevels (3 static and ad-hoc).</p>\n<p>Some options are shared between the levels and some are unique. For \nexample it doesn&#39;t make sense to share the <code>endpoint</code> of a controller\nwith other levels. <strong>Headers</strong> however, can be set at each level.</p>\n<p>There are several options that are valid at all levels, things\nlike headers, urls parameters, etc...</p>\n<p>The <code>BaseHttpConfig</code> interface defines all options shared between all 4\nlevels: module, resource, action and ad-hoc.</p>\n<h2><a id="option-resolving-rules" class="anchor" href="#option-resolving-rules"><span class="header-link"></span></a>Option resolving rules</h2><p>Working with 4 levels, it might become difficult to understand what&#39;s\ngoing on.<br>When 2 levels define the same option what is the outcome?</p>\n<p>There is a trade-off between flexibility and complexity, especially\nwhen dealing with objects (key-&gt;value).</p>\n<p><strong>When resolving options, the following rules apply:</strong></p>\n<ul>\n<li><p>Between each 2 levels, the most specific one wins (4 being most specific):</p>\n<ol>\n<li>Module level options</li>\n<li>Resource level options</li>\n<li>Action level options.</li>\n<li>User provided options (ad-hoc)</li>\n</ol>\n</li>\n<li><p>Primitive values always override.</p>\n</li>\n<li><p>Objects with a key/value structure will <strong>merge</strong> from ad-hoc\noptions (4) into the most specific option found in static levels (1-3)</p>\n<p>Working with key/value, there are 2 options, merging or replacing.</p>\n<ul>\n<li>Merging is more flexible but hard to reason about.</li>\n<li>Replacing is limiting but easy to understand. </li>\n</ul>\n<p>The library will <strong>replace</strong> (override) matching options in the static\nlevels (1-3) and <strong>merge</strong> the same option from the <strong>ad-hoc</strong> level (4)\nonto the resolved static option (1-3) </p>\n<p>For example, <code>headers</code> is an option that exists in all 4 levels.</p>\n<ul>\n<li><strong>X</strong> is defined as headers at the module level (1)</li>\n<li><strong>Y</strong> is defined as headers at the action level (3)</li>\n<li><strong>Z</strong> is defined as headers by the user when executing (4)</li>\n</ul>\n<p>The library will look at the static levels, it will take <strong>Y</strong> because\nit is more specific. Then it will take <strong>Z</strong> and merge it with <strong>Y</strong>.</p>\n<p>When identical keys exist in <strong>Y</strong> and <strong>Z</strong>, the values from <strong>Z</strong>\nwill win.</p>\n</li>\n</ul>\n<p>In the following example, we tweaked the <code>Customer</code> class and added\nsome headers and url parameters to it&#39;s resource level static\nconfiguration:</p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">import</span> { HttpResource } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-http-client\'</span>;\n<span class="hljs-keyword">import</span> { Customer <span class="hljs-keyword">as</span> BaseCustomer } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@shared/client/models\'</span>;\n\n<span class="hljs-meta">@HttpResource</span>({\n  endpoint: <span class="hljs-string">\'customers/:id?\'</span>,\n  urlParams: {\n    id: <span class="hljs-string">\'CustomerID\'</span>,\n    test: <span class="hljs-string">\'123\'</span>\n  },\n  headers: {\n    <span class="hljs-string">\'my-private-header\'</span>: <span class="hljs-string">\'private-header\'</span>,\n    <span class="hljs-string">\'my-public-header\'</span>: <span class="hljs-string">\'public-header\'</span>\n  }\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Customer <span class="hljs-keyword">extends</span> BaseCustomer { }\n</code></pre>\n<p>We&#39;ve now provide <strong>ad-hoc</strong> options, some will override some will merge.  </p>\n<p>See the <code>Request</code> object for the final output.</p>\n',title:"Options"},{file:"README.md",lang:"md",section:"PART-2",code:'<h2><a id="an-code-httpclient-code-perspective" class="anchor" href="#an-code-httpclient-code-perspective"><span class="header-link"></span></a>An <code>HttpClient</code> perspective</h2><p>You probably know <code>HttpClient</code> well, let&#39;s try to explain the various\noptions through <code>HttpClient</code>:</p>\n<p>The following is the signature of the <code>delete</code> method in <code>HttpClient</code>:</p>\n<pre class="lang-ts"><code class="lang-ts">    <span class="hljs-keyword">delete</span>&lt;T&gt;(url: <span class="hljs-built_in">string</span>, options?: {\n        headers?: HttpHeaders | {\n            [header: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">string</span>[];\n        };\n        observe?: <span class="hljs-string">\'body\'</span>;\n        params?: HttpParams | {\n            [param: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">string</span>[];\n        };\n        reportProgress?: <span class="hljs-built_in">boolean</span>;\n        responseType?: <span class="hljs-string">\'json\'</span>;\n        withCredentials?: <span class="hljs-built_in">boolean</span>;\n    }): Observable&lt;T&gt;;\n</code></pre>\n<p>This is just 1 overload out of 15+</p>\n<p>We can see that it accepts 2 parameters: <strong>url</strong> and <strong>options</strong>.</p>\n<p><strong>url</strong> is mandatory, it must be set by the user.\nIn our setup the <strong>url</strong> is a <strong>static option</strong>, it is set by all 3\nstatic level option objects.</p>\n<p><strong>options</strong> is optional, it is equivilent to the <strong>ad-hoc</strong> options.<br>When not set or partially set, <code>HttpClient</code> will set the mandatory\nvalues internally. In our setup, when not set or partially set the\nlibrary will take the missing values from static options. Usually the\n<strong>Action</strong> definition has most of the missing options.</p>\n<p>Another feature of <code>HttpClient</code> is <strong>interceptors</strong>, which we can use\nto modify a request before it leaves. Again, a module level or resource\nlevel options object can work here and when more dynamic control is\nneeded you can always use interceptors.</p>\n',title:"Options"},{file:"static-options.component.ts",lang:"ts",section:"code",code:'<span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> ngDao: NgDAO</span>) {\r\n\r\n  ngDao.get(Customer).findById(<span class="hljs-string">\'ALFKI\'</span>, {\r\n    urlParams: {\r\n      thisWillBe: <span class="hljs-string">\'aMergedParameter\'</span>\r\n    },\r\n    headers: {\r\n      <span class="hljs-string">\'my-ad-hoc-header\'</span>: <span class="hljs-string">\'ad-hoc-header\'</span>,\r\n      <span class="hljs-string">\'my-public-header\'</span>: <span class="hljs-string">\'public-header-hacked-by-merging\'</span>\r\n    }\r\n  });\r\n\r\n}\r\n'}]}}]);