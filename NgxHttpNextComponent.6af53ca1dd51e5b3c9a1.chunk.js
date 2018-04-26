webpackJsonp([10],{ZVb7:function(e,s){e.exports=[{file:"README.md",lang:"md",section:"PART-1",code:'<h1><a id="next" class="anchor" href="#next"><span class="header-link"></span></a>Next</h1><p>Next refers to the &quot;next response&quot;, it is a method on the <code>ResourceControl</code> that return&#39;s a promise to the next result.</p>\n<p>At this point it doesn&#39;t seem to have much use, as we already get a promise when calling each of the DAO API methods. It\nis used more frequently with the Active Record pattern (plugin). </p>\n<div class="info">\nWhen an error occurs, the promise returned from <code>next()</code> will reject.\n</div>\n\n<h2><a id="next-is-strict" class="anchor" href="#next-is-strict"><span class="header-link"></span></a>Next is strict</h2><p>Before calling <code>next()</code>, make sure a request is in-flight but verifying that the <code>busy</code> property is set to true. Calling\n<code>next()</code> when not in-flight will reject the promise.</p>\n<p>In the following example, next is used to resolve the request, once resolved it is called again (next).\nBecause the 2nd time is executed after the request has finished (busy is false) an error is thrown.</p>\n<p>We catch that error and display it, you should see an error message below, once the request ends.</p>\n',title:"Next"},{file:"README.md",lang:"md",section:"PART-2",code:"<p><br></p>\n",title:"Next"},{file:"next.component.ts",lang:"ts",section:"code",code:'errorMessage: <span class="hljs-built_in">string</span>;\n\n<span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> ngDao: NgDAO</span>) {\n\n  <span class="hljs-keyword">const</span> promise = ngDao.get(Customer).findById(<span class="hljs-string">\'ALFKI\'</span>);\n  <span class="hljs-keyword">const</span> rc = ResourceControl.get(promise);\n  rc.next().then(<span class="hljs-function"><span class="hljs-params">s</span> =&gt;</span> {\n    rc.next()\n      .catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {\n        <span class="hljs-keyword">this</span>.errorMessage = err.toString();\n      });\n  });\n}\n',title:"Component"},{file:"next.component.html",lang:"html",section:"code",code:'<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Error message: {{ errorMessage }}<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>',title:"Template"}]}});
//# sourceMappingURL=NgxHttpNextComponent.6af53ca1dd51e5b3c9a1.chunk.js.map