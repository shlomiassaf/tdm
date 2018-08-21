(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{gCA3:function(s,n){s.exports=[{file:"before-render-event.component.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { BeforeRenderEventHandler } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n<span class="hljs-keyword">import</span> { Hero } <span class="hljs-keyword">from</span> <span class="hljs-string">\'../../4-element-metadata\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getSuperPowersAsync</span>(<span class="hljs-params"></span>): <span class="hljs-title">Promise</span>&lt;<span class="hljs-title">Array</span>&lt;</span>{ labe?: <span class="hljs-built_in">string</span>; value: <span class="hljs-built_in">string</span>; }&gt;&gt; {\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>( <span class="hljs-function"><span class="hljs-params">r</span> =&gt;</span> setTimeout(r, <span class="hljs-number">1000</span> ))\n    .then( <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n      <span class="hljs-keyword">return</span> [\n        { value: <span class="hljs-string">\'atomicVision\'</span>, label: <span class="hljs-string">\'Atomic Vision\'</span> },\n        { value: <span class="hljs-string">\'teleportation\'</span>, label: <span class="hljs-string">\'Teleportation\'</span> },\n        { value: <span class="hljs-string">\'physicalRestoration\'</span>, label: <span class="hljs-string">\'Physical Restoration\'</span> },\n        { value: <span class="hljs-string">\'timeTravel\'</span>, label: <span class="hljs-string">\'Time Travel\'</span> },\n        { value: <span class="hljs-string">\'mindReading\'</span>, label: <span class="hljs-string">\'Mind Reading\'</span> }\n      ];\n    });\n}\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'form-before-render-event\'</span>,\n  templateUrl: <span class="hljs-string">\'./before-render-event.component.html\'</span>,\n  styleUrls: [ <span class="hljs-string">\'./before-render-event.component.scss\'</span> ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BeforeRenderEventComponent {\n  model = <span class="hljs-keyword">new</span> Hero();\n\n  beforeRender($event: BeforeRenderEventHandler): <span class="hljs-built_in">void</span> {\n\n    <span class="hljs-keyword">const</span> bmi = $event.instructions[<span class="hljs-string">\'bmi\'</span>];\n    <span class="hljs-keyword">if</span> (bmi) {\n      bmi.vType = <span class="hljs-string">\'number\'</span>;\n    }\n\n    <span class="hljs-keyword">const</span> superPower = $event.instructions[<span class="hljs-string">\'superPower\'</span>];\n    <span class="hljs-keyword">if</span> (superPower) {\n      <span class="hljs-comment">// ASYNC CALLS THAT BLOCK THE WHOLE FORM FROM RENDERING, GOOD FOR GETTING DATA FROM REMOTE SERVER.</span>\n      <span class="hljs-comment">// E.G.: GETTING GROUPS LISTED UNDER A USER, ETC...</span>\n      <span class="hljs-keyword">const</span> p = getSuperPowersAsync().then(<span class="hljs-function"><span class="hljs-params">newPowers</span> =&gt;</span> {\n        <span class="hljs-keyword">const</span> existingPowers = superPower.getData(<span class="hljs-string">\'options\'</span>) || [];\n        existingPowers.push(...newPowers);\n        superPower.mergeData({ options: existingPowers });\n      });\n      <span class="hljs-comment">// mark this field as async, no render until promise completes.</span>\n      $event.async(p);\n    }\n  }\n}\n',title:"Component"},{file:"before-render-event.component.html",lang:"html",section:"tdmDemo",code:'<span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span>\n              [<span class="hljs-attr">filter</span>]=<span class="hljs-string">"[\'base\', \'allies\', \'basesDestroyed\']"</span>\n              (<span class="hljs-attr">beforeRender</span>)=<span class="hljs-string">"beforeRender($event)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>',title:"Template"},{file:"before-render-event.component.scss",lang:"scss",section:"default",code:"",title:"Style"},{file:"model.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Model, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Hero ID\'</span>\n      }\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'Hero Name\'</span>\n      }\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'date\'</span>,\n        label: <span class="hljs-string">\'Hero Birth\'</span>\n      }\n    }\n  })\n  birth: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'boolean\'</span>,\n        label: <span class="hljs-string">\'Has Tracking Device\'</span>\n      }\n    }\n  })\n  hasTracking: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slideToggle\'</span>,\n        label: <span class="hljs-string">\'Double Agent\'</span>\n      }\n    }\n  })\n  doubleAgent: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slider\'</span>,\n        label: <span class="hljs-string">\'BMI Index\'</span>,\n        data: { min: <span class="hljs-number">1</span>, max: <span class="hljs-number">35</span> }\n      }\n    }\n  })\n  bmi: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'select\'</span>,\n        label: <span class="hljs-string">\'Super Power\'</span>,\n        data: {\n          multiple: <span class="hljs-literal">true</span>,\n          options: [\n            { value: <span class="hljs-string">\'selfHealing\'</span>, label: <span class="hljs-string">\'Self Healing\'</span> },\n            { value: <span class="hljs-string">\'flying\'</span>, label: <span class="hljs-string">\'Flying\'</span> },\n            { value: <span class="hljs-string">\'cloaking\'</span>, label: <span class="hljs-string">\'Cloaking\'</span> },\n            { value: <span class="hljs-string">\'cloning\'</span>, label: <span class="hljs-string">\'Cloning\'</span> },\n            { value: <span class="hljs-string">\'invisibility\'</span>, label: <span class="hljs-string">\'Invisibility\'</span> }\n          ]\n        }\n      }\n    }\n  })\n  superPower: <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      forceObjectType: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'select\'</span>,\n        label: <span class="hljs-string">\'Hobbies\'</span>,\n        data: {\n          multiple: <span class="hljs-literal">true</span>,\n          options: [\n            <span class="hljs-string">\'Baseball\'</span>,\n            <span class="hljs-string">\'Basketball\'</span>,\n            <span class="hljs-string">\'Buildi\'</span>,\n            <span class="hljs-string">\'Cosplay\'</span>,\n            <span class="hljs-string">\'Soccer\'</span>,\n            <span class="hljs-string">\'Spelunkering\'</span>,\n            <span class="hljs-string">\'Storm Chasing\'</span>,\n            <span class="hljs-string">\'Wrestling\'</span>,\n            <span class="hljs-string">\'Writing\'</span>,\n            <span class="hljs-string">\'Yoga\'</span>\n          ].map( <span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> ({value})),\n        }\n      }\n    }\n  })\n  hobbies: <span class="hljs-built_in">Array</span>&lt;<span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>&gt;;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      forceObjectType: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'chips\'</span>,\n        label: <span class="hljs-string">\'Chips\'</span>,\n        data: {\n          removable: <span class="hljs-literal">true</span>,\n          addOnBlur: <span class="hljs-literal">true</span>,\n        }\n      }\n    }\n  })\n  chips: <span class="hljs-built_in">string</span>[];\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'textarea\'</span>,\n        label: <span class="hljs-string">\'Bio\'</span>,\n        data: {\n          autoSize: <span class="hljs-literal">false</span>,\n          minRows: <span class="hljs-number">3</span>,\n          maxRows: <span class="hljs-number">5</span>\n        }\n      }\n    }\n  })\n  bio: <span class="hljs-built_in">string</span>;\n}\n',title:"Model"},{file:"README.md",lang:"md",section:"default",code:'<h1><a id="beforerender-event" class="anchor" href="#beforerender-event"><span class="header-link"></span></a>beforeRender Event</h1><p>Event fired on the first render and then whenever the <code>redraw()</code>\nmethod is invoked.</p>\n<p>The <strong>beforeRender</strong> event is best for:</p>\n<ul>\n<li>Updating or modifying element metadata and/or visual types.</li>\n<li>Deferring rendering of the form until an async operation completes. </li>\n</ul>\n<h2><a id="renderinstruction" class="anchor" href="#renderinstruction"><span class="header-link"></span></a>RenderInstruction</h2><p>Before we dive into the event it is important to understand the role\nof the <code>RenderInstruction</code> class and the relationship between the 3\nbuilding blocks of <code>@angular/forms</code>: <code>FormGroup</code>, <code>FormArray</code> and\n<code>FormControl</code> to <code>RenderInstruction</code></p>\n<p>Each property decorated by <code>@FormProp</code> contains metadata defined by\nthe user which the library use to create an instance of <code>RenderInstruction</code>.\nAn instruction represents a single property and contains metadata about\nit like the type, how it should look like in a form and more.</p>\n<p><code>RenderInstruction</code> is used to describe all properties, those can be\nprimitive but can also be arrays and objects. This means that\n<code>RenderInstruction</code> can also contain children of <code>RenderInstruction</code></p>\n<p>When we create a dynamic form the library will use all 3 building blocks\nof <code>@angular/forms</code> to create a <code>FormGroup</code> instance that match the\nstructure of our model, as described by us using <code>@FormProp</code>.</p>\n<p>In the new form, for each form control, <code>FormGroup</code>, <code>FormArray</code> or\n<code>FormControl</code> there is a corresponding <code>RenderInstruction</code> instance. The\ninstance is cloned so different forms of the same model <strong>will never</strong>\nget the same <code>RenderInstruction</code> instance, this is important.</p>\n<p>Dynamic forms are based on static metadata which is shared thus can not\nchange.</p>\n<p>If we take a <strong>select</strong> control as an example, it has a list of options\nto choose from and it is quite common to update the list based on logic\nor some data source. </p>\n<p>It is also common to change the visual type of an element based on\nsome logic.</p>\n<p>This is why we create a new set of <code>RenderInstruction</code>s per form.</p>\n<h2><a id="-beforerender-" class="anchor" href="#-beforerender-"><span class="header-link"></span></a>(beforeRender)</h2><p>The <code>(beforeRender)</code> event is fired on the first render and then\nwhenever the <code>redraw()</code> method is invoked.</p>\n<p><strong>beforeRender</strong> emit an event handler object of type\n<code>BeforeRenderEventHandler</code>.</p>\n<p>The handler contains the <code>RenderInstruction</code> instances used by the form\nand it is where we can alter each instance to change the way it\nwill render or what data it will render with.</p>\n<p>The handler is also an API to notify the dynamic form that it should\npause rendering until an async operation finish by providing a promise.\nThe component will not render control until the promise resolves.</p>\n<div class="info">\n  Async operations are great for fetching remote data from the server,\n  e.g. populating a selection box.\n</div>\n\n<p>This example changes the <strong>bmi</strong> field rendering type from <code>slider</code>\nto `number.</p>\n<p>We will also mock an async call to a server to fetch 5 more super powers\nin addition to the 5 that already exist.\nThe mock creates 1000ms timeout which in that time the form will not\nrender.</p>\n<p>To reduce noise some form controls are excluded.</p>\n<div class="info">\nWorking with async operations requires user feedback (e.g. spinner). <br>\nThe <code>(renderState)</code> covered next is where we can subscribe to\nnotification about the rendering state, paused or not.\n</div>\n'}]}}]);