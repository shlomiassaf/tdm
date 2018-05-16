(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NgxHttpResourceControlComponent"],{

/***/ "./src/modules/@http/tutorial/resource-control/1-resource-control/__tdm-code__.ts":
/*!****************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/1-resource-control/__tdm-code__.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{"file":"README.md","lang":"md","section":"default","code":"<h1><a id=\"resource-control\" class=\"anchor\" href=\"#resource-control\"><span class=\"header-link\"></span></a>Resource Control</h1><p>A resource represents a domain model with actions. We&#39;ve seen how the\nDAO allows us to invoke these actions on the resource.</p>\n<p>Resource, DAO and Actions are all static. It is metadata that we can use\nto eventually get a resource <strong>instance</strong>.</p>\n<p>Once an action is fired, some questions pop up:</p>\n<ul>\n<li><p>How do we provision the running action?</p>\n</li>\n<li><p>how do we manage the instance? things like</p>\n<ul>\n<li>The instance state</li>\n<li>controlling a running action (e.g cancel)</li>\n<li>and more..</li>\n</ul>\n</li>\n</ul>\n<p>This is where <code>ResourceControl</code> comes in.</p>\n<p><code>ResourceControl</code> allow us to control an instance of a resource and to\nlisten to notification coming from running actions.</p>\n<p>A single instance of <code>ResourceControl</code> controls a single instance of\na resource. i.e. for every instance of our model a single resource\ncontrol is created.</p>\n<h2><a id=\"getting-the-resource-control\" class=\"anchor\" href=\"#getting-the-resource-control\"><span class=\"header-link\"></span></a>Getting the resource control</h2><p>To get a resource control for a resource instance:</p>\n<pre class=\"lang-ts\"><code class=\"lang-ts\"><span class=\"hljs-keyword\">const</span> promise = <span class=\"hljs-keyword\">this</span>.ngDAO.get(Customer).findById(<span class=\"hljs-string\">'ALFKI'</span>);\n<span class=\"hljs-keyword\">const</span> rc = ResourceControl.get(promise);\n\npromise.then( <span class=\"hljs-function\"><span class=\"hljs-params\">resource</span> =&gt;</span> {\n <span class=\"hljs-comment\">// ...</span>\n});\n</code></pre>\n<p>Note that we use the reference to the promise returned from the DAO API\nas the token to find the resource control.</p>\n<p><code>ResourceControl.get</code> accepts a promise or the resource instance.\nThe resource instance is used when working in ActiveRecord mode.</p>\n<p>Make sure not to send a &quot;chained&quot; promise to <code>ResourceControl.get</code>,\ndoing so will return <code>undefined</code> as the promise is not recognized.</p>\n<pre class=\"lang-ts\"><code class=\"lang-ts\"><span class=\"hljs-keyword\">const</span> promise = <span class=\"hljs-keyword\">this</span>.ngDAO.get(Customer).findById(<span class=\"hljs-string\">'ALFKI'</span>)\n.then( <span class=\"hljs-function\"><span class=\"hljs-params\">resource</span> =&gt;</span> {\n <span class=\"hljs-comment\">// ... </span>\n});\n<span class=\"hljs-keyword\">const</span> rc = ResourceControl.get(promise);\n\n</code></pre>\n<p><code>rc</code> is undefined because <code>promise</code> is not the promise returned from\n<code>findById</code>, it is a chained promise.</p>\n<h2><a id=\"busy\" class=\"anchor\" href=\"#busy\"><span class=\"header-link\"></span></a>Busy</h2><p>For the same instance, <strong>actions</strong> are not allowed to run in parallel. An error is thrown when a resource is in the\nmiddle of executing an action and an other action is fired.</p>\n<p>The property <code>busy</code> on the <code>ResourceControl</code> instance indicates if a resource is in the middle of executing an action\n(true) or it is idle (false).</p>\n<p>Because DAO methods return a new resource for every call this have almost no effect. When using Active Record the same\ninstance is used so the <code>busy</code> flag can be used as a guard.</p>\n<p>Of course, the most obvious use for <code>busy</code> is UI/UX, things like UI blockers, spinners, etc...</p>\n<p>Some notes:</p>\n<ul>\n<li>This limitation is required to ensure data integrity, a resource is populated with the data coming from an action.</li>\n<li>The <code>rx-resource-control</code> plugin add&#39;s a <code>busy$</code> observable fitting best for angular templates. </li>\n</ul>\n<h2><a id=\"plugin-based\" class=\"anchor\" href=\"#plugin-based\"><span class=\"header-link\"></span></a>Plugin based</h2><p><code>ResourceControl</code> comes with a very basic feature set, including event handling API, promise control flow and\nrequest cancellation. We wil discuss these in the following chapters.</p>\n<p>Additional features for <code>ResourceControl</code> are provided as plugins that require explicit opt-in, these plugins and\nthe features they add are discussed in the plugins section.  </p>\n<h2><a id=\"active-record\" class=\"anchor\" href=\"#active-record\"><span class=\"header-link\"></span></a>Active Record</h2><p>The resource control is frequently used when working with the Active Record pattern, mainly because it provides async\ncontrol flow API (<code>next()</code>) which the Active Record lacks. This does not mean it is only for active record, DAO users\ncan work with it as well.</p>\n","title":"Resource Control"}]

/***/ })

}]);
//# sourceMappingURL=NgxHttpResourceControlComponent.js.map