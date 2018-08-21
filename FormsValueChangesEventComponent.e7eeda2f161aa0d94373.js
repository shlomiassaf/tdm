(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{150:function(s,n){s.exports=[{file:"value-changes-event.component.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { DynamicFormComponent, TdmFormChanges } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n<span class="hljs-keyword">import</span> { Hero } <span class="hljs-keyword">from</span> <span class="hljs-string">\'../../4-element-metadata\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'form-value-changes-event\'</span>,\n  templateUrl: <span class="hljs-string">\'./value-changes-event.component.html\'</span>,\n  styleUrls: [ <span class="hljs-string">\'./value-changes-event.component.scss\'</span> ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ValueChangesEventComponent {\n  model = <span class="hljs-keyword">new</span> Hero();\n  disabledControls: <span class="hljs-built_in">string</span>[] = [<span class="hljs-string">\'id\'</span>];\n\n  valueChanges($event: TdmFormChanges, dynForm: DynamicFormComponent): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> c of $event) {\n      <span class="hljs-keyword">switch</span> (c.key) {\n        <span class="hljs-keyword">case</span> <span class="hljs-string">\'name\'</span>:\n          <span class="hljs-keyword">const</span> len = c.currentValue &amp;&amp; c.currentValue.length;\n          dynForm.tdmForm.setValue(<span class="hljs-string">\'id\'</span>, len);\n          <span class="hljs-keyword">break</span>;\n        <span class="hljs-keyword">case</span> <span class="hljs-string">\'doubleAgent\'</span>:\n          <span class="hljs-keyword">if</span> (c.currentValue) {\n            <span class="hljs-keyword">this</span>.disabledControls.push(<span class="hljs-string">\'hasTracking\'</span>);\n            dynForm.tdmForm.setValue(<span class="hljs-string">\'hasTracking\'</span>, <span class="hljs-literal">false</span>);\n          } <span class="hljs-keyword">else</span> {\n            <span class="hljs-keyword">const</span> idx = <span class="hljs-keyword">this</span>.disabledControls.indexOf(<span class="hljs-string">\'hasTracking\'</span>);\n            <span class="hljs-keyword">if</span> (idx &gt; <span class="hljs-number">-1</span>) {\n              <span class="hljs-keyword">this</span>.disabledControls.splice(idx, <span class="hljs-number">1</span>);\n            }\n          }\n          <span class="hljs-keyword">break</span>;\n        <span class="hljs-keyword">default</span>:\n          <span class="hljs-keyword">break</span>;\n      }\n    }\n  }\n\n}\n',title:"Component"},{file:"value-changes-event.component.html",lang:"html",section:"TDM-DEMO",code:'  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"render-state-form-container"</span> <span class="hljs-attr">ngProjectAs</span>=<span class="hljs-string">"dynamic-form"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dynamic-form</span> #<span class="hljs-attr">dynForm</span>\n                  <span class="hljs-attr">style</span>=<span class="hljs-string">"display: block"</span>\n                  [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span>\n                  [<span class="hljs-attr">disabledState</span>]=<span class="hljs-string">"disabledControls"</span>\n                  (<span class="hljs-attr">valueChanges</span>)=<span class="hljs-string">"valueChanges($event, dynForm)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dynamic-form</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ui-block"</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"dynForm?.renderState | async"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-spinner</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-spinner</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>',title:"Template"},{file:"value-changes-event.component.scss",lang:"scss",section:"default",code:"",title:"Style"},{file:"model.ts",lang:"ts",section:"default",code:'<span class="hljs-keyword">import</span> { Model, Prop } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@tdm/ngx-dynamic-forms\'</span>;\n\n<span class="hljs-meta">@Model</span>({\n  form: <span class="hljs-literal">true</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> Hero {\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Hero ID\'</span>\n      }\n    }\n  })\n  id: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'Hero Name\'</span>\n      }\n    }\n  })\n  name: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'date\'</span>,\n        label: <span class="hljs-string">\'Hero Birth\'</span>\n      }\n    }\n  })\n  birth: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'boolean\'</span>,\n        label: <span class="hljs-string">\'Has Tracking Device\'</span>\n      }\n    }\n  })\n  hasTracking: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slideToggle\'</span>,\n        label: <span class="hljs-string">\'Double Agent\'</span>\n      }\n    }\n  })\n  doubleAgent: <span class="hljs-built_in">boolean</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'slider\'</span>,\n        label: <span class="hljs-string">\'BMI Index\'</span>,\n        data: { min: <span class="hljs-number">1</span>, max: <span class="hljs-number">35</span> }\n      }\n    }\n  })\n  bmi: <span class="hljs-built_in">number</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      render: {\n        vType: <span class="hljs-string">\'select\'</span>,\n        label: <span class="hljs-string">\'Super Power\'</span>,\n        data: {\n          multiple: <span class="hljs-literal">true</span>,\n          options: [\n            { value: <span class="hljs-string">\'selfHealing\'</span>, label: <span class="hljs-string">\'Self Healing\'</span> },\n            { value: <span class="hljs-string">\'flying\'</span>, label: <span class="hljs-string">\'Flying\'</span> },\n            { value: <span class="hljs-string">\'cloaking\'</span>, label: <span class="hljs-string">\'Cloaking\'</span> },\n            { value: <span class="hljs-string">\'cloning\'</span>, label: <span class="hljs-string">\'Cloning\'</span> },\n            { value: <span class="hljs-string">\'invisibility\'</span>, label: <span class="hljs-string">\'Invisibility\'</span> }\n          ]\n        }\n      }\n    }\n  })\n  superPower: <span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      forceObjectType: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'select\'</span>,\n        label: <span class="hljs-string">\'Hobbies\'</span>,\n        data: {\n          multiple: <span class="hljs-literal">true</span>,\n          options: [\n            <span class="hljs-string">\'Baseball\'</span>,\n            <span class="hljs-string">\'Basketball\'</span>,\n            <span class="hljs-string">\'Buildi\'</span>,\n            <span class="hljs-string">\'Cosplay\'</span>,\n            <span class="hljs-string">\'Soccer\'</span>,\n            <span class="hljs-string">\'Spelunkering\'</span>,\n            <span class="hljs-string">\'Storm Chasing\'</span>,\n            <span class="hljs-string">\'Wrestling\'</span>,\n            <span class="hljs-string">\'Writing\'</span>,\n            <span class="hljs-string">\'Yoga\'</span>\n          ].map( <span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> ({value})),\n        }\n      }\n    }\n  })\n  hobbies: <span class="hljs-built_in">Array</span>&lt;<span class="hljs-string">\'selfHealing\'</span> | <span class="hljs-string">\'flying\'</span> | <span class="hljs-string">\'cloaking\'</span> | <span class="hljs-string">\'cloning\'</span> | <span class="hljs-string">\'invisibility\'</span>&gt;;\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      forceObjectType: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'chips\'</span>,\n        label: <span class="hljs-string">\'Chips\'</span>,\n        data: {\n          removable: <span class="hljs-literal">true</span>,\n          addOnBlur: <span class="hljs-literal">true</span>,\n        }\n      }\n    }\n  })\n  chips: <span class="hljs-built_in">string</span>[];\n\n  <span class="hljs-meta">@Prop</span>({\n    form: {\n      required: <span class="hljs-literal">true</span>,\n      render: {\n        vType: <span class="hljs-string">\'textarea\'</span>,\n        label: <span class="hljs-string">\'Bio\'</span>,\n        data: {\n          autoSize: <span class="hljs-literal">false</span>,\n          minRows: <span class="hljs-number">3</span>,\n          maxRows: <span class="hljs-number">5</span>\n        }\n      }\n    }\n  })\n  bio: <span class="hljs-built_in">string</span>;\n}\n',title:"Model"},{file:"README.md",lang:"md",section:"default",code:'<h1><a id="valuechanges-event" class="anchor" href="#valuechanges-event"><span class="header-link"></span></a>valueChanges Event</h1><p>Event fired when the value of a form control changed.</p>\n<p>The <strong>valueChanges</strong> event is best for:</p>\n<ul>\n<li>Getting notification about value change</li>\n<li>Update form state based on value-bound logic.<br>For example:<ul>\n<li>disable control X when the value of control Y === Z</li>\n<li>hide control Y when value of control X is not set</li>\n<li>Fetch values from the server when the value of control Y === Z and\nuse them to populate the <code>select</code> options for control X.</li>\n</ul>\n</li>\n</ul>\n<h2><a id="working-with-changes" class="anchor" href="#working-with-changes"><span class="header-link"></span></a>Working with changes</h2><p>The event emits a collection of changes based on the\n<code>KeyValueChangeRecord</code> from <code>@angular/core</code>.</p>\n<p>The type of the collection is <code>TdmFormChanges</code> which is an array of\n<code>TdmFormChange</code> values.</p>\n<p><code>TdmFormChange</code> extends <code>KeyValueChangeRecord&lt;string, any&gt;</code> an add&#39;s\nthe optional property <strong>deep</strong> which indicates if the <code>key</code> points to a\ndeep path (dot notation) or a single property.</p>\n<p>The raw structure of <code>TdmFormChange</code> </p>\n<pre class="lang-ts"><code class="lang-ts"><span class="hljs-keyword">interface</span> TdmFormChange {\n  <span class="hljs-comment">/**\n   * Current key in the Map.\n   */</span>\n  readonly key: <span class="hljs-built_in">string</span>;\n  <span class="hljs-comment">/**\n   * Current value for the key or `null` if removed.\n   */</span>\n  readonly currentValue: <span class="hljs-built_in">any</span> | <span class="hljs-literal">null</span>;\n  <span class="hljs-comment">/**\n   * Previous value for the key or `null` if added.\n   */</span>\n  readonly previousValue: <span class="hljs-built_in">any</span> | <span class="hljs-literal">null</span>;\n\n  <span class="hljs-comment">/**\n  * When true indicates that the `key` property contains a path and\n  * not a name, i.e it\'s a dot delimited path to a property through\n  * nested object (or objects)\n  */</span>\n  deep?: <span class="hljs-built_in">boolean</span>;\n}\n</code></pre>\n<h2><a id="updating-values" class="anchor" href="#updating-values"><span class="header-link"></span></a>Updating values</h2><p>Updating values in response to a value change event requires an update\nto the value of a form control.\nThe easiest and safest way is to use <code>TDMModelForm.setValue</code> </p>\n<h2><a id="updating-safe-zone" class="anchor" href="#updating-safe-zone"><span class="header-link"></span></a>Updating safe zone</h2><p>Updating values inside the <strong>(valueChanges)</strong> event is safe and will not\ncreate an infinite update loop.</p>\n<p>This is possible because:</p>\n<ul>\n<li><p><strong>valueChanges</strong> events are synchronous, emitting all listeners in\nsequence.</p>\n</li>\n<li><p><strong>valueChanges</strong> events are blocking. While a <strong>valueChanges</strong> event\nrun incoming change events are ignored.</p>\n</li>\n</ul>\n<p>This enables safe updates to the form.</p>\n<p>If you want to change the value and force firing the event\napply the value change async (i.e. setTimeout).</p>\n<h2><a id="valuechanges-and-nested-objects" class="anchor" href="#valuechanges-and-nested-objects"><span class="header-link"></span></a>valueChanges and nested objects</h2><p>When the change occurs in a child property of nested objects the <code>key</code>\nproperty in the change event handler represents the path (not the name)\nto the value from the root object.</p>\n<p>In the following example <strong>(valueChanges)</strong> events are used to update\nstate and values based on custom logic.</p>\n<ul>\n<li>The <strong>id</strong> property is disabled</li>\n<li>When the <strong>name</strong> property change the <strong>id</strong> is set to the length\nof the name</li>\n<li>When <strong>doubleAgent</strong> is set to <code>true</code> the <strong>hasTracking</strong> control\nis disabled and the value for it is set to <code>false</code>  </li>\n</ul>\n'}]}}]);