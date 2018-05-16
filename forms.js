(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms"],{

/***/ "../../libs/ngx-dynamic-forms/package.json":
/*!**********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/package.json ***!
  \**********************************************************************************************/
/*! exports provided: name, version, description, keywords, peerDependencies, default */
/***/ (function(module) {

module.exports = {"name":"@tdm/ngx-dynamic-forms","version":"1.0.0","description":"Dynamic forms using Typed data models (@tdm).","keywords":["@tdm","angular","forms","dynamic","mapper"],"peerDependencies":{"rxjs":"^6.0.0","typescript":"^2.7.0","tslib":"^1.9.0","@angular/core":"^6.0.0","@angular/common":"^6.0.0","@angular/forms":"^6.0.0","@tdm/tixin":"*","@tdm/core":"*"}};

/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/index.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/index.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MaterialFormControlRenderer, MaterialDynamicFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialFormControlRenderer", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["MaterialFormControlRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDynamicFormsModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["MaterialDynamicFormsModule"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/index.ts":
/*!******************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/lib/index.ts ***!
  \******************************************************************************************************************/
/*! exports provided: MaterialFormControlRenderer, MaterialDynamicFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderer_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer/index */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialFormControlRenderer", function() { return _renderer_index__WEBPACK_IMPORTED_MODULE_0__["MaterialFormControlRenderer"]; });

/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDynamicFormsModule", function() { return _module__WEBPACK_IMPORTED_MODULE_1__["MaterialDynamicFormsModule"]; });





/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/material.ts":
/*!*********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/lib/material.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/esm5/tooltip.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MATERIAL_MODULES = [
    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: MATERIAL_MODULES,
            exports: MATERIAL_MODULES
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/module.ts":
/*!*******************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/lib/module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: MaterialDynamicFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDynamicFormsModule", function() { return MaterialDynamicFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/material.ts");
/* harmony import */ var _renderer_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderer/index */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MaterialDynamicFormsModule = /** @class */ (function () {
    function MaterialDynamicFormsModule(injector, cfr) {
        if (!_renderer_index__WEBPACK_IMPORTED_MODULE_5__["storeContainer"].store) {
            // we use a static store, there is no point of using DI if it's always the same store.
            var factory = cfr.resolveComponentFactory(_renderer_index__WEBPACK_IMPORTED_MODULE_5__["MaterialTemplateStoreComponent"]);
            var cmpRef = factory.create(injector);
            cmpRef.changeDetectorRef.detectChanges();
            _renderer_index__WEBPACK_IMPORTED_MODULE_5__["storeContainer"].store = cmpRef.instance;
        }
    }
    MaterialDynamicFormsModule_1 = MaterialDynamicFormsModule;
    MaterialDynamicFormsModule.forRoot = function (defaultRenderer) {
        // if (defaultRenderer && !isFunction(defaultRenderer)) {
        //   if ( !('*' in defaultRenderer) ) {
        //     defaultRenderer['*'] = MaterialFormControlRenderer;
        //   }
        // }
        return {
            ngModule: MaterialDynamicFormsModule_1,
            providers: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsModule"].forRoot(defaultRenderer || _renderer_index__WEBPACK_IMPORTED_MODULE_5__["MaterialFormControlRenderer"]).providers.slice()
        };
    };
    MaterialDynamicFormsModule = MaterialDynamicFormsModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _renderer_index__WEBPACK_IMPORTED_MODULE_5__["GlobalMaterialFormControlDirective"],
                _renderer_index__WEBPACK_IMPORTED_MODULE_5__["MaterialTemplateStoreComponent"],
                _renderer_index__WEBPACK_IMPORTED_MODULE_5__["MaterialFormControlRenderer"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsModule"]
            ],
            exports: [
                _renderer_index__WEBPACK_IMPORTED_MODULE_5__["GlobalMaterialFormControlDirective"],
                _renderer_index__WEBPACK_IMPORTED_MODULE_5__["MaterialFormControlRenderer"],
                _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsModule"]
            ],
            entryComponents: [_renderer_index__WEBPACK_IMPORTED_MODULE_5__["MaterialTemplateStoreComponent"], _renderer_index__WEBPACK_IMPORTED_MODULE_5__["MaterialFormControlRenderer"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], MaterialDynamicFormsModule);
    return MaterialDynamicFormsModule;
    var MaterialDynamicFormsModule_1;
}());



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/index.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/index.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: MaterialFormControlRenderer, storeContainer, MaterialTemplateStoreComponent, GlobalMaterialFormControlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_visual_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material-visual-types */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-visual-types.ts");
/* harmony import */ var _material_visual_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_visual_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_form_control_renderer_material_form_control_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-form-control-renderer/material-form-control-renderer.component */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-form-control-renderer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialFormControlRenderer", function() { return _material_form_control_renderer_material_form_control_renderer_component__WEBPACK_IMPORTED_MODULE_1__["MaterialFormControlRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeContainer", function() { return _material_form_control_renderer_material_form_control_renderer_component__WEBPACK_IMPORTED_MODULE_1__["storeContainer"]; });

/* harmony import */ var _material_form_control_renderer_material_template_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-form-control-renderer/material-template-store.component */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-template-store.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialTemplateStoreComponent", function() { return _material_form_control_renderer_material_template_store_component__WEBPACK_IMPORTED_MODULE_2__["MaterialTemplateStoreComponent"]; });

/* harmony import */ var _material_form_control_renderer_global_material_form_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-form-control-renderer/global-material-form-control */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/global-material-form-control.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalMaterialFormControlDirective", function() { return _material_form_control_renderer_global_material_form_control__WEBPACK_IMPORTED_MODULE_3__["GlobalMaterialFormControlDirective"]; });







/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/global-material-form-control.ts":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/global-material-form-control.ts ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: GlobalMaterialFormControlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalMaterialFormControlDirective", function() { return GlobalMaterialFormControlDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_form_control_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-form-control-renderer.component */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-form-control-renderer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalMaterialFormControlDirective = /** @class */ (function () {
    function GlobalMaterialFormControlDirective(tRef) {
        this.tRef = tRef;
    }
    Object.defineProperty(GlobalMaterialFormControlDirective.prototype, "name", {
        set: function (value) {
            if (value && !this._name) {
                this._name = value;
                _material_form_control_renderer_component__WEBPACK_IMPORTED_MODULE_1__["storeContainer"].store.registerTemplate(value, this.tRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('globalMaterialFormControl'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GlobalMaterialFormControlDirective.prototype, "name", null);
    GlobalMaterialFormControlDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[globalMaterialFormControl]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], GlobalMaterialFormControlDirective);
    return GlobalMaterialFormControlDirective;
}());



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-form-control-renderer.component.html":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-form-control-renderer.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: { $implicit: self, showLabels: showLabels, self: self }\"\n              [style.display]=\"item.hidden ? 'none' : undefined\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-form-control-renderer.component.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-form-control-renderer.component.scss ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-selection-list {\n  max-height: 250px; }\n\nmat-radio-group {\n  padding-left: 25px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\nmat-radio-group mat-radio-button:not(.vertical-mat-radio-group) {\n    margin-right: 10px; }\n\nmat-radio-group.vertical-mat-radio-group {\n    padding-right: 15px;\n    overflow-x: visible;\n    overflow-y: auto;\n    max-height: 200px;\n    display: inline-flex;\n    flex-direction: column;\n    flex-wrap: nowrap; }\n\nmat-list.dynamic-array-container {\n  max-height: 300px;\n  border-left: 1px solid lightgray;\n  overflow: auto;\n  padding-bottom: 15px; }\n\nmat-list.dynamic-array-container .mat-form-field-wrapper {\n    margin-bottom: -1.25em;\n    overflow-x: hidden; }\n\nmat-list.dynamic-array-container .mat-list-item {\n    height: inherit; }\n\nmat-list.dynamic-array-container .mat-list-item .mat-list-item-content {\n    padding: 0; }\n\nmat-list.dynamic-array-container .dynamic-list-item {\n    position: relative;\n    width: 100%; }\n\nmat-list.dynamic-array-container .dynamic-list-item.dynamic-list-item-ripple {\n      padding: 10px 0;\n      cursor: pointer; }\n\nmat-list.dynamic-array-container .dynamic-list-item .dynamic-list-item-control {\n      width: 100%;\n      box-sizing: border-box;\n      padding-left: 10px;\n      margin-right: 36px; }\n\nmat-list.dynamic-array-container .dynamic-list-item .dynamic-list-item-control.dynamic-child-form-control {\n        line-height: 100%;\n        height: 100%; }\n\nmat-list.dynamic-array-container .dynamic-list-item .dynamic-list-item-control.dynamic-child-form-control span {\n          vertical-align: middle; }\n\nmat-list.dynamic-array-container .dynamic-list-item .dynamic-list-item-control .dynamic-child-form-error {\n        color: red;\n        vertical-align: middle; }\n\nmat-list.dynamic-array-container .dynamic-list-item .dynamic-list-item-select {\n      position: absolute;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 36px;\n      text-align: center;\n      cursor: pointer; }\n\nmat-list.dynamic-array-container .dynamic-list-item .dynamic-list-item-select mat-icon {\n        position: relative;\n        top: 50%;\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%);\n        transition: color 250ms ease-in-out;\n        color: transparent; }\n\nmat-list.dynamic-array-container .dynamic-list-item.selected mat-icon {\n      color: green; }\n\nmat-list.dynamic-array-container:hover .dynamic-list-item .dynamic-list-item-select mat-icon {\n    color: lightgray; }\n\nmat-list.dynamic-array-container:hover .dynamic-list-item.selected .dynamic-list-item-select mat-icon {\n    color: green; }\n\n.dynamic-array-actions {\n  display: flex;\n  align-content: center;\n  justify-content: flex-end;\n  flex-direction: row;\n  margin-top: -15px;\n  border-left: 1px dotted lightgray; }\n\n.dynamic-array-actions > * {\n    flex: 0 1 auto; }\n"

/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-form-control-renderer.component.ts":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-form-control-renderer.component.ts ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: storeContainer, MaterialFormControlRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeContainer", function() { return storeContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialFormControlRenderer", function() { return MaterialFormControlRenderer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/esm5/coercion.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var storeContainer = { store: undefined };
var MaterialFormControlRenderer = /** @class */ (function () {
    function MaterialFormControlRenderer(dynForm, cdr) {
        this.cdr = cdr;
        this.showLabels = true;
        this.self = this;
        if (dynForm) {
            this.dynForm = dynForm;
        }
    }
    Object.defineProperty(MaterialFormControlRenderer.prototype, "dynForm", {
        // tslint:disable-line
        /**
         * Optional, set if the provider tree where you render this template is not an ancestor of [[DynamicFormComponent]].
         * This is usually the case when using an override template with a template defined out of scope.
         */
        get: function () {
            return this._dynForm;
        },
        set: function (value) {
            if (value) {
                this._dynForm = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MaterialFormControlRenderer.prototype.tdmOnControlContextInit = function () {
        if (!this.template) {
            this.template = storeContainer.store.getTemplate(this.item);
            this.cdr.detectChanges();
        }
    };
    MaterialFormControlRenderer.prototype.ngOnChanges = function (change) {
        if ('showLabels' in change) {
            this.showLabels = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(this.showLabels);
        }
        if ('item' in change) {
            this.template = storeContainer.store.getTemplate(this.item);
            if (this.item.isChildForm && this.fControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                var model = this.tdmForm.getValueModel(this.item, this.fControl);
                this.externalTdmForm = this.tdmForm.createChildForm(this.item.fullName, model, this.fControl);
            }
        }
    };
    MaterialFormControlRenderer.prototype.editSingleChildForm = function (context) {
        var event = Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["createChildFormEvent"])(context);
        if (event.isNew) {
            event.context.fControl = context.tdmForm.createControl(context.item.fullName, null, true);
            event.context.fGroup.setControl(context.item.name, event.context.fControl);
            event.context.item.markAsChanged();
        }
        this.dynForm.emitRendererEvent(event);
    };
    MaterialFormControlRenderer.prototype.addToList = function () {
        if (this.item.isPrimitive || this.item.isChildForm) {
            // we create a new control, `appendControl` will push the right one, either primitive or child form.
            var newControl = this.tdmForm.appendControl(this.item.fullName, null, this.item.isChildForm);
            this.fArray.markAsDirty();
            // fire child form edit event.
            if (this.item.isChildForm) {
                var event_1 = Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["createChildFormEvent"])(this, { fControl: newControl });
                event_1.isNew = true;
                this.dynForm.emitRendererEvent(event_1);
            }
        }
    };
    MaterialFormControlRenderer.prototype.editFromList = function () {
        var event = Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["createChildFormEvent"])(this, {
            fControl: this.fArray.controls[this.selectedItem]
        });
        this.dynForm.emitRendererEvent(event);
    };
    MaterialFormControlRenderer.prototype.removeFromList = function () {
        if (this.selectedItem >= 0) {
            if (this.item.isPrimitive || this.item.isChildForm) {
                this.tdmForm.removeControl(this.item.fullName, this.selectedItem);
                this.fArray.markAsDirty();
            }
            this.selectedItem = undefined;
        }
    };
    MaterialFormControlRenderer.prototype.hasError = function (errorName, ctx) {
        if (ctx.fControl) {
            return ctx.fControl.hasError(errorName);
        }
        else if (ctx.fArray) {
            return ctx.fArray.hasError(errorName);
        }
        else if (ctx.fGroup) {
            return ctx.fGroup.hasError(errorName);
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["DynamicFormComponent"]),
        __metadata("design:paramtypes", [_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["DynamicFormComponent"]])
    ], MaterialFormControlRenderer.prototype, "dynForm", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MaterialFormControlRenderer.prototype, "showLabels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["RenderInstruction"])
    ], MaterialFormControlRenderer.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["TDMModelForm"])
    ], MaterialFormControlRenderer.prototype, "tdmForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"])
    ], MaterialFormControlRenderer.prototype, "fArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], MaterialFormControlRenderer.prototype, "fControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], MaterialFormControlRenderer.prototype, "fGroup", void 0);
    MaterialFormControlRenderer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-form-control-renderer',
            template: __webpack_require__(/*! ./material-form-control-renderer.component.html */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-form-control-renderer.component.html"),
            styles: [__webpack_require__(/*! ./material-form-control-renderer.component.scss */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-form-control-renderer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["DynamicFormComponent"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MaterialFormControlRenderer);
    return MaterialFormControlRenderer;
}());



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-template-store.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-template-store.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #boolean let-ctx let-showLabels=\"showLabels\" let-self=\"self\">\n  <mat-checkbox [formControl]=\"ctx.fControl\">{{ showLabels ? ctx.item.label : ''}}</mat-checkbox>\n</ng-template>\n\n<ng-template #slideToggle let-ctx let-showLabels=\"showLabels\" let-self=\"self\">\n  <mat-slide-toggle [formControl]=\"ctx.fControl\">{{ showLabels ? ctx.item.label : ''}}</mat-slide-toggle>\n</ng-template>\n\n<ng-template #slider let-ctx let-showLabels=\"showLabels\" let-self=\"self\">\n  <span *ngIf=\"showLabels\">{{ctx.item.label}}</span>\n  <mat-slider [formControl]=\"ctx.fControl\"\n              thumbLabel=\"true\"\n              [tickInterval]=\"1\"\n              [min]=\"ctx.item.data?.min\" [max]=\"ctx.item.data?.max\"></mat-slider>\n</ng-template>\n\n<ng-template #radio let-ctx let-showLabels=\"showLabels\" let-self=\"self\">\n  <span *ngIf=\"showLabels\">{{ctx.item.label}}</span>\n  <mat-radio-group [class.vertical-mat-radio-group]=\"ctx.item.data?.vertical\"\n                   [formControl]=\"ctx.fControl\">\n    <mat-radio-button *ngFor=\"let sel of ctx.item.data.options\" [value]=\"sel.value\">{{sel.label || sel.value}}</mat-radio-button>\n  </mat-radio-group>\n</ng-template>\n\n<ng-template #textarea let-ctx let-showLabels=\"showLabels\" let-self=\"self\">\n  <!--\n     matTextareaAutosize can not be used as binding input\n     See https://github.com/angular/material2/issues/9884\n     -->\n  <mat-form-field>\n    <textarea matInput\n              [formControl]=\"ctx.fControl\"\n              [placeholder]=\"showLabels && ctx.item.label\"\n              matTextareaAutosize\n              [matAutosizeMinRows]=\"ctx.item.data?.autoSize ? ctx.item.data.minRows : 1\"\n              [matAutosizeMaxRows]=\"ctx.item.data?.autoSize ? ctx.item.data.maxRows : 1\"></textarea>\n    <mat-error *ngIf=\"self.hasError('required', ctx)\">Required</mat-error>\n  </mat-form-field>\n</ng-template>\n\n<ng-template #select let-ctx let-showLabels=\"showLabels\" let-self=\"self\">\n  <mat-form-field>\n    <mat-select [formControl]=\"ctx.fControl\"\n                [placeholder]=\"showLabels && ctx.item.label\">\n      <mat-option *ngFor=\"let sel of ctx.item.data.options\" [value]=\"sel.value\">{{sel.label || sel.value}}</mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"self.hasError('required', ctx)\">Required</mat-error>\n  </mat-form-field>\n</ng-template>\n\n<ng-template #date let-ctx let-showLabels=\"showLabels\" let-self=\"self\">\n  <mat-form-field>\n    <input matInput\n           [formControl]=\"ctx.fControl\"\n           [placeholder]=\"showLabels && ctx.item.label\"\n           [matDatepicker]=\"datePicker\"\n           [min]=\"ctx.item.data?.min\" [max]=\"ctx.item.data?.max\"\n           [matDatepickerFilter]=\"ctx.item.data?.filter\">\n    <mat-datepicker-toggle matSuffix [for]=\"datePicker\"></mat-datepicker-toggle>\n    <mat-datepicker #datePicker [startView]=\"ctx.item.data?.startView || 'month'\" [startAt]=\"ctx.item.data?.startAt\"></mat-datepicker>\n    <mat-error *ngIf=\"self.hasError('required', ctx)\">Required</mat-error>\n  </mat-form-field>\n</ng-template>\n\n<ng-template #input let-ctx let-showLabels=\"showLabels\" let-self=\"self\">\n  <mat-form-field>\n    <input matInput\n           [type]=\"ctx.item.vType\"\n           [formControl]=\"ctx.fControl\"\n           [placeholder]=\"showLabels && ctx.item.label\"\n           [min]=\"ctx.item.data?.min\" [max]=\"ctx.item.data?.max\">\n    <mat-error *ngIf=\"self.hasError('required', ctx)\">Required</mat-error>\n  </mat-form-field>\n</ng-template>\n\n<ng-template #childForm let-ctx let-self=\"self\">\n  <a mat-button (click)=\"self.editSingleChildForm(ctx)\">edit</a>\n  <mat-error style=\"display: inline;\" *ngIf=\"self.hasError('required', ctx)\">Required</mat-error>\n</ng-template>\n\n<ng-template #formArray let-ctx let-self=\"self\">\n  <div class=\"dynamic-array\">\n    <mat-list class=\"dynamic-array-container\">\n      <ng-container *ngIf=\"ctx.item.isPrimitive\">\n        <mat-list-item *forFormArray=\"let c of ctx.fArray; index as i; tdmForm: ctx.tdmForm; fGroup: ctx.fGroup; item: ctx.item\">\n          <div class=\"dynamic-list-item\" [class.selected]=\"self.selectedItem === i\">\n            <div class=\"dynamic-list-item-control\">\n              <ng-container *ngTemplateOutlet=\"getTemplate(c.item); context: { $implicit: c, showLabels: false, self: self }\"></ng-container>\n            </div>\n            <div class=\"dynamic-list-item-select\">\n              <mat-icon (click)=\"self.selectedItem = self.selectedItem === i ? undefined : i\">check</mat-icon>\n            </div>\n          </div>\n        </mat-list-item>\n      </ng-container>\n\n      <ng-container *ngIf=\"ctx.item.isChildForm && ctx.item.identity\">\n        <mat-list-item *forFormArray=\"let c of ctx.fArray; index as i; tdmForm: ctx.tdmForm; fGroup: ctx.fGroup; item: ctx.item\">\n          <div class=\"dynamic-list-item dynamic-list-item-ripple\"\n               mat-ripple\n               [class.selected]=\"self.selectedItem === i\"\n               (click)=\"self.selectedItem = self.selectedItem === i ? undefined : i\">\n            <div class=\"dynamic-list-item-control dynamic-child-form-control\">\n              <mat-icon *ngIf=\"c.fControl.invalid\"\n                        class=\"dynamic-child-form-error\" [matTooltip]=\"'Invalid'\">error_outline</mat-icon>\n              <span>{{c.fControl.get(ctx.item.identity)?.value}}</span>\n            </div>\n            <div class=\"dynamic-list-item-select\">\n              <mat-icon>check</mat-icon>\n            </div>\n          </div>\n        </mat-list-item>\n      </ng-container>\n    </mat-list>\n\n    <div class=\"dynamic-array-actions\">\n      <button *ngIf=\"ctx.fArray.length\" mat-icon-button [disabled]=\"! (self.selectedItem > -1)\" (click)=\"self.removeFromList()\">\n        <mat-icon>close</mat-icon>\n      </button>\n      <button *ngIf=\"ctx.fArray.length && !ctx.item.isPrimitive\" mat-icon-button [disabled]=\"! (self.selectedItem > -1)\" (click)=\"self.editFromList()\">\n        <mat-icon>edit</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"self.addToList()\">\n        <mat-icon style=\"color: green\">add</mat-icon>\n      </button>\n    </div>\n  </div>\n\n</ng-template>\n"

/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-template-store.component.ts":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-template-store.component.ts ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: MaterialTemplateStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTemplateStoreComponent", function() { return MaterialTemplateStoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VALID_INPUTS = [
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    // 'date',
    // 'datetime-local',
    // 'time',
    'url',
    'week'
];
/*
      IMPORTANT NOTE !!!

      ALL methods on `MaterialTemplateStoreComponent` are static, not instance methods!
      This component is only created ONCE throughout the entire app.
 */
/**
 * A "singleton" component that does never meet a view that has one purpose which is to be a store for templates
 * so each control renderer does not need to use queries and store templates within it's core template.
 *
 * For more information see https://github.com/angular/angular/issues/15275
 * TODO: When angular's IVY renderer is the default renderer try using it for dynamic templates instead of a component
 */
var MaterialTemplateStoreComponent = /** @class */ (function () {
    function MaterialTemplateStoreComponent() {
        this.customTemplates = {};
    }
    MaterialTemplateStoreComponent.prototype.registerTemplate = function (name, templateRef) {
        this.customTemplates[name] = templateRef;
    };
    MaterialTemplateStoreComponent.prototype.getTemplate = function (item) {
        if (this.customTemplates[item.vType]) {
            return this.customTemplates[item.vType];
        }
        else if (item.isArray) {
            return this.formArray;
        }
        else if (item.isChildForm) {
            return this.childForm;
        }
        else {
            if (VALID_INPUTS.indexOf(item.vType) > -1) {
                return this.input;
            }
            else {
                return this[item.vType];
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('boolean', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MaterialTemplateStoreComponent.prototype, "boolean", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slideToggle'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MaterialTemplateStoreComponent.prototype, "slideToggle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slider'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MaterialTemplateStoreComponent.prototype, "slider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('radio'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MaterialTemplateStoreComponent.prototype, "radio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textarea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MaterialTemplateStoreComponent.prototype, "textarea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('select'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MaterialTemplateStoreComponent.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('date'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MaterialTemplateStoreComponent.prototype, "date", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MaterialTemplateStoreComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('childForm'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MaterialTemplateStoreComponent.prototype, "childForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formArray'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MaterialTemplateStoreComponent.prototype, "formArray", void 0);
    MaterialTemplateStoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-template-store',
            template: __webpack_require__(/*! ./material-template-store.component.html */ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-form-control-renderer/material-template-store.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], MaterialTemplateStoreComponent);
    return MaterialTemplateStoreComponent;
}());



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-visual-types.ts":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/plugin/material/src/lib/renderer/material-visual-types.ts ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/index.ts":
/*!**********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: FormModel, FormProp, ngFormsMapper, NgFormsBoundMapper, RenderInstruction, TDMModelFormDirective, TDMModelFormService, TDMModelForm, FORM_CONTROL_COMPONENT, DynamicFormComponent, DynamicFormControlDirective, DynamicFormOverrideDirective, DynamicFormArrayComponent, ForFormArrayDirective, BeforeRenderEventHandler, DynamicFormsModule, TDMFormsModule, clone, objectToForm, createControl, createChildFormEvent, Prop, Model, Exclude, Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/lib/ngx-dynamic-forms.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModel", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["FormModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormProp", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["FormProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ngFormsMapper", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ngFormsMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgFormsBoundMapper", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["NgFormsBoundMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderInstruction", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["RenderInstruction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelFormDirective", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["TDMModelFormDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelFormService", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["TDMModelFormService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelForm", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["TDMModelForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORM_CONTROL_COMPONENT", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["FORM_CONTROL_COMPONENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["DynamicFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormControlDirective", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["DynamicFormControlDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormOverrideDirective", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["DynamicFormOverrideDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormArrayComponent", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["DynamicFormArrayComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForFormArrayDirective", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ForFormArrayDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeRenderEventHandler", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["BeforeRenderEventHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormsModule", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["DynamicFormsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMFormsModule", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["TDMFormsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectToForm", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["objectToForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createControl", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["createControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createChildFormEvent", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["createChildFormEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exclude", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Exclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _lib_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Type"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/core/angular-forms-mapper.ts":
/*!**********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/core/angular-forms-mapper.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: NgFormsDeserializeMapper, NgFormsSerializeMapper, deepGetFormProp, NgFormsChildSerializeMapper, ngFormsMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormsDeserializeMapper", function() { return NgFormsDeserializeMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormsSerializeMapper", function() { return NgFormsSerializeMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepGetFormProp", function() { return deepGetFormProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormsChildSerializeMapper", function() { return NgFormsChildSerializeMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngFormsMapper", function() { return ngFormsMapper; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata/index */ "../../libs/ngx-dynamic-forms/src/lib/core/metadata/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/ngx-dynamic-forms/src/lib/utils.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation */ "../../libs/ngx-dynamic-forms/src/lib/validation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var NgFormsDeserializeMapper = /** @class */ (function (_super) {
    __extends(NgFormsDeserializeMapper, _super);
    function NgFormsDeserializeMapper(formGroup, sourceType, plainMapper) {
        var _this = _super.call(this, formGroup.value, sourceType, plainMapper) || this;
        _this.formGroup = formGroup;
        _this.raw = true;
        _this.formModel = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getMetaFor(sourceType, _metadata_index__WEBPACK_IMPORTED_MODULE_2__["FormModelMetadata"], true);
        return _this;
    }
    NgFormsDeserializeMapper.prototype.getIdentity = function () {
        // TODO: Move to the global store, so logic can change without bugs.
        if (this.identity) {
            return this.formGroup.get(this.identity).value;
        }
    };
    NgFormsDeserializeMapper.prototype.getKeys = function () {
        // we don't care about excluded `FormPropMetadata` because they will not get here since the serializer
        // will not include them, it should be a closed loop.
        var controls = this.formGroup.controls;
        if (this.formGroup instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
            return [];
        }
        else {
            return Object.keys(controls).filter(function (k) { return controls[k].dirty; });
        }
    };
    NgFormsDeserializeMapper.prototype.getValue = function (key, prop) {
        var control = this.formGroup.get(key);
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
            var formProp = (this.formModel && this.formModel.getProp(key)) ||
                _metadata_index__WEBPACK_IMPORTED_MODULE_2__["FormPropMetadata"].EMPTY;
            // TODO: we can omit this, maybe protect against but rtType should ne set at this point.
            if (!formProp.rtType && prop && prop.type) {
                formProp.rtType = prop.type;
            }
            return this.parseFormArray(control, key, formProp);
        }
        else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
            /* NOTE:
               Normally we would check for shared instances (relations) in the cache to prevent circular reference between 2
               models that reference each other, however, a form value (root object) can not share the same instance
               on 2 nodes within it's graph as it will cause infinite rendering of controls as forms are not built for this.
      
               If, for any reason, this is required in the future, this code should ne added:
      
               if (prop) {
                 const rel = this.getRelationQuery(prop, value);
                 if (rel) { value = rel; }
               }
      
               And:
               this.getCache(type.ref, value) || this.deserialize(<any> control, prop);
            */
            var formProp = (this.formModel && this.formModel.getProp(key)) ||
                _metadata_index__WEBPACK_IMPORTED_MODULE_2__["FormPropMetadata"].EMPTY;
            // TODO: we can omit this, maybe protect against but rtType should ne set at this point.
            if (!formProp.rtType && prop && prop.type) {
                formProp.rtType = prop.type;
            }
            return this.parseFormGroup(control, key, formProp);
        }
        else {
            return control.value;
        }
    };
    NgFormsDeserializeMapper.prototype.parseFormArray = function (control, key, formProp) {
        if (formProp.flatten) {
            return this.deserializeFlattened(control, formProp, key);
        }
        else {
            var value = [];
            for (var _i = 0, _a = control.controls; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
                    value.push(this.parseFormArray(c, key, formProp));
                }
                else if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                    value.push(this.parseFormGroup(c, key, formProp));
                }
                else {
                    value.push(c.value);
                }
            }
            return value;
        }
    };
    NgFormsDeserializeMapper.prototype.parseFormGroup = function (c, key, formProp) {
        var type = formProp.rtType;
        if (formProp.flatten) {
            return this.deserializeFlattened(c, formProp, key);
        }
        else if (type && _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].hasTarget(type.ref)) {
            return this.deserialize(c, type);
        }
        else {
            return this.plainMapper.deserialize(c.getRawValue());
        }
    };
    NgFormsDeserializeMapper.prototype.deserialize = function (value, prop) {
        var type = prop instanceof _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["TypeMetadata"] ? prop : prop.type;
        var mapper = this.ref
            ? new NgFormsDeserializeMapper(value, type.ref)
            : _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["directMapper"].deserializer(value, type.ref);
        return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].deserialize(mapper);
    };
    /**
     * Deserialize a control with ad-hoc "flatten" instruction of property to form control mappings.
     * Flattening can only be done on complex objects so `control` must be a FormArray or FormGroup.
     *
     * `resultOrKey` is used to provide an existing value to merge the deserialized data into.
     * You can also provide a string/number that used as a key to retrieve the value from an existing instance.
     *
     * When `resultOrKey` resolves to a NON-PRIMITIVE TRUTHY value (i.e. object/array) the deserializer will merge the
     * value of the DIRTY controls into the object at `resultOrKey`. This means that when a `resultOrKey` is supplied only
     * the dirty controls are evaluated and merged, a lazy approach.
     *
     * When `resultOrKey` resolves to a primitive value (i.e. not an object/array) or a falsy value (e.g. null/undefined)
     * a new object is created and the deserializer will merge all of the controls, DIRTY and NOT DIRTY, into the newly
     * created object.
     *
     * This base implementation of `deserializeFlattened` does not support key (string/number) retrieval as there is no
     * model instance attached to the deserializer and so it will treat them as falsy values.
     * Derived classes might use this option and override `deserializeFlattened` so they can re-call it after retreiving
     * the actual value using the key.
     *
     * @param control The form control to deserialize, only FormArray or FormGroup
     * @param formProp The FormPropertyMetadata instance for the property.
     * @param resultOrKey
     */
    NgFormsDeserializeMapper.prototype.deserializeFlattened = function (control, formProp, resultOrKey) {
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
            var controls = control.controls;
            var result = [];
            for (var i = 0, len = controls.length; i < len; i++) {
                var c = controls[i];
                if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"] || c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                    // we send null when c might be array, but when c is FormArray the result is force set to []
                    // null is also used to force serialization of all controls, not only the dirty one's.
                    result.push(this.deserializeFlattened(c, formProp, null));
                }
                else {
                    result.push(c.value);
                }
            }
            return result;
        }
        else {
            var forceSerialize = Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(resultOrKey) || !resultOrKey;
            // this method does not support string/number in `resultOrKey`
            var result = forceSerialize ? {} : resultOrKey;
            var props = formProp.flatten;
            var keys = Object.keys(props);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var childCtrl = control.get(key);
                var p = props[key];
                var value = keys; // keys is unique so it can never be set from the outside.
                if (p.flatten) {
                    if (forceSerialize || childCtrl.dirty) {
                        value = this.deserializeFlattened(childCtrl, p, result[key]);
                    }
                }
                else if (forceSerialize || childCtrl.dirty) {
                    value = true;
                }
                else if (p.hasOwnProperty('defaultValue') &&
                    p.defaultValue === control.get(key).value) {
                    value = true;
                }
                switch (value) {
                    case keys:
                        break;
                    case true:
                        result[key] = control.get(key).value;
                        break;
                    default:
                        if (result[key]) {
                            Object.assign(result[key], value);
                        }
                        else {
                            result[key] = value;
                        }
                        break;
                }
            }
            return result;
        }
    };
    return NgFormsDeserializeMapper;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["DirectDeserializeMapper"]));

// tslint:disable-next-line
var NgFormsSerializeMapper = /** @class */ (function (_super) {
    __extends(NgFormsSerializeMapper, _super);
    function NgFormsSerializeMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgFormsSerializeMapper.prototype.serialize = function (container) {
        this.formModel = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getMetaFor(container.target, _metadata_index__WEBPACK_IMPORTED_MODULE_2__["FormModelMetadata"], true);
        if (!this.formModel) {
            throw new Error("Target '" + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["stringify"])(container.target) + "' is not a registered FormModel");
        }
        if (!this.cache) {
            this.cache = new Map();
        }
        if (Array.isArray(this.source)) {
            return this.serializeCollection(this.source, container);
        }
        else {
            return this.serializeObject(this.source, container);
        }
    };
    NgFormsSerializeMapper.prototype.serializeObject = function (obj, container) {
        var _this = this;
        var data = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({}, this.formModel.validator, this.formModel.asyncValidator);
        var cb = function (prop) {
            var meta = prop.prop;
            if (!meta) {
                return;
            }
            var formProp = _this.formModel.getProp(meta.name) || _metadata_index__WEBPACK_IMPORTED_MODULE_2__["FormPropMetadata"].EMPTY;
            if (!formProp.rtType) {
                formProp.rtType = meta.type;
            }
            var ctrl = _this.createControl(formProp, obj ? obj[prop.cls] : undefined);
            if (ctrl) {
                data.addControl(prop.obj, ctrl);
            }
        };
        // don't care if @Excluded was set, if @Prop there we check it
        container.forEachRaw(obj ? Object.keys(obj) : [], cb);
        var idKey = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getIdentityKey(container.target);
        if (data.get(idKey) &&
            idKey !== _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getIdentityKey(container.target, 'outgoing')) {
            data.removeControl(idKey);
        }
        return data;
    };
    /**
     * Create a form control from a [[FormPropMetadata]] instance.
     * @param formProp
     * @param value
     * @param ignoreArray If true, treats the type as non-array, even if the type information says it is an
     * array. `ignoreArray` is ignored if `value` is an array instance by itself.
     * `ignoreArray` is used when the same [[FormPropMetadata]] decorating a property of type Array<T> is used
     * recursively, first time for the array value and then n times (array length) for the items in the array. The actual
     * type for each item is that [[FormPropMetadata]].
     */
    NgFormsSerializeMapper.prototype.createControl = function (formProp, value, ignoreArray) {
        if (formProp.exclude) {
            return;
        }
        if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(formProp.transform)) {
            value = formProp.transform(value);
        }
        if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(value)) {
            value = formProp.defaultValue;
        }
        // we set to null, undefined will go under required validation (see `isEmptyInputValue` in @angular/forms)
        if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(value)) {
            value = null;
        }
        var rtType = formProp.rtType;
        var isArray = Array.isArray(value) || (ignoreArray ? false : rtType && rtType.isArray);
        var ctrl;
        var _a = Object(_validation__WEBPACK_IMPORTED_MODULE_4__["getValidators"])(formProp, {
            required: formProp.required
        }), syncValidator = _a[0], asyncValidator = _a[1];
        if (formProp.flatten) {
            value = value ? this.plainMapper.serialize(value) : isArray ? [] : {};
            if (isArray) {
                ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]);
                for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                    var item = value_1[_i];
                    ctrl.push(this.createControl(formProp, item, true));
                }
            }
            else {
                ctrl = this.createFlatten(formProp.flatten, value);
            }
        }
        else if (formProp.childForm === true && rtType && rtType.ref) {
            var hasTarget = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].hasTarget(rtType.ref);
            if (isArray) {
                ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]);
                if (Array.isArray(value)) {
                    for (var _b = 0, value_2 = value; _b < value_2.length; _b++) {
                        var item = value_2[_b];
                        ctrl.push(hasTarget ? this.serializeChild(rtType, item) : Object(_utils__WEBPACK_IMPORTED_MODULE_3__["objectToForm"])(item));
                    }
                }
            }
            else {
                if (value) {
                    ctrl = hasTarget
                        ? this.serializeChild(rtType, value)
                        : Object(_utils__WEBPACK_IMPORTED_MODULE_3__["objectToForm"])(value);
                }
                else {
                    ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
                }
            }
        }
        else {
            if (isArray) {
                ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]);
                if (Array.isArray(value)) {
                    for (var _c = 0, value_3 = value; _c < value_3.length; _c++) {
                        var item = value_3[_c];
                        ctrl.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](item, syncValidator, asyncValidator));
                    }
                }
            }
            else {
                ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value);
            }
        }
        if (syncValidator) {
            ctrl.setValidators(syncValidator);
        }
        if (asyncValidator) {
            ctrl.setAsyncValidators(asyncValidator);
        }
        return ctrl;
    };
    NgFormsSerializeMapper.prototype.createFlatten = function (flatten, value) {
        var ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        var keys = Object.keys(flatten);
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            var flattenedControl = this.createControl(flatten[key], value[key]);
            if (flattenedControl) {
                ctrl.addControl(key, flattenedControl);
            }
        }
        return ctrl;
    };
    NgFormsSerializeMapper.prototype.serializeChild = function (type, obj) {
        return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].serialize(type.ref, new NgFormsChildSerializeMapper(obj, this.cache, this.plainMapper));
    };
    NgFormsSerializeMapper.prototype.serializeCollection = function (arr, container) {
        var _this = this;
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"](arr.map(function (s) { return _this.serializeObject(s, container); }));
    };
    /**
     * Creates a form control based on metadata of a given property in a given model.
     * If a value is provided the form control will be populated with the value.
     *
     * You can provide a string (`prop`) representing the property name, OR if you want to create a control for a property
     * in a nested object (Only for `@FormProp` declarations with `flatten` expressions OR `childForm` set to true) you
     * you can provide a tuple a tuple with 2 values the first value is a string representing the
     * property name at the root level (exposed property that `@FormProp` decorates), the second value is a dot notation
     * path to the nested property within the flatten expression / Child model.
     *
     * When `tryCreateNew` is true, it will try to create new value with the new keyword using the type at the path.
     * Creating a new value is silent, it will not throw.
     *
     * For example, in the following flatten expression:
     *
     * ```ts
     * @FormProp({
     *   flatten: Object.assign({}, basicFlatten, {
     *     additional: {
     *       flatten: {
     *         work: { }
     *       }
     *     }
     *   })
     * })
     * myProp: any;
     * ```
     * If we want to get the control for `work` the path will be: ` ['myProp', 'additional.work'] `
     *
     * > When using a deep path and providing a `value`, the value should be the value to be assign at the resolved path
     * and not the root value, i.e. the value is not evaluated with each step in the path.
     *
     * Make sure not to include array index references within a deep path expression, think of type structure as one
     * without arrays.
     *
     * NOTE: Array's are NOT SUPPORTED by design.
     * This function DOES NOT support arrays, if a given property is an Array<T> the returned form will be T.
     * Make sure not to send an array instance with `value`.
     *
     * Why?
     * The purpose of this function is to create form controls to be added to FormArrays.
     * These can be empty controls or populated with a given `value`.
     * To support all features (e.g. "flatten") and allow empty form controls array are not supported because a property
     * with type Array<T> and no values in the array will return an empty FormArray.
     *
     * If you want to create a FormArray control simple call createControl for each item in the array and add it to the
     * FormArray:
     *
     * ```ts
     * new FormArray(items.map( item => createControl(MyType, 'myProp', item) ));
     * ```
     */
    NgFormsSerializeMapper.createControl = function (type, prop, value, tryCreateNew) {
        if (Array.isArray(value)) {
            throw new Error('provided value is an array instance which is not allowed.');
        }
        var formProp = deepGetFormProp(type, prop);
        if (tryCreateNew && (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(value) || value === null)) {
            try {
                value = new formProp.rtType.ref();
            }
            catch (e) { } // tslint:disable-line
        }
        return new NgFormsSerializeMapper(undefined).createControl(formProp, value, true);
    };
    NgFormsSerializeMapper.getFormProp = deepGetFormProp;
    return NgFormsSerializeMapper;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["SerializeMapper"]));

function deepGetFormProp(type, prop) {
    var path = Array.isArray(prop)
        ? [prop[0]].concat(prop[1].split('.')).filter(function (s) { return !!s; })
        : [prop];
    var formModel = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getMetaFor(type, _metadata_index__WEBPACK_IMPORTED_MODULE_2__["FormModelMetadata"], true);
    if (!formModel) {
        throw new Error("Target '" + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["stringify"])(type) + "' is not a registered FormModel");
    }
    var key = path.shift();
    var formProp = formModel.getProp(key);
    if (!formProp) {
        throw new Error("Target '" + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["stringify"])(type) + "' does not have a PropForm decorator for property " + key);
    }
    /*  At this point there are several scenarios:
        1. `prop` is a non-deep property path (e.g. "myProp")
           This is the simple scenario, we return the formProp
  
        2. `prop` is a deep, property path (e.g. "myProp.nest.value.somewhere")
            This is a bit more complex and depends on the [[FormMetadata]] configuration.
  
              - When [[FormMetadata.flatten]] is set:
  
                We resolve the deep path to get the [[FormMetadata]] it points to (if path is invalid we throw).
                Once we get the [[FormMetadata]] instance we use it.
  
              - When [[FormMetadata.childForm]] is `true`:
  
                We need to extract the type and call deepGetFormProp again
                with the new type and a new path, the new path is a left-shift of the current path.
                Example: Given the model/resource `MyModel`, when resolving path "myProp.nest.value.somewhere"
                         where "myProp" is a known model/resource `MyOtherModel` we first call:
                            - `deepGetFormProp(MyModel, ['myProp', 'nest.value.somewhere']);`
                         inside deepGetFormProp we detect `myProp` has `childForm: true` and
                         that it's type is a known model/resource `MyOtherModel` so we recursively call:
                         `deepGetFormProp(MyOtherModel, ['nest', 'value.somewhere'], value);`
   */
    if (formProp.flatten) {
        while (formProp.flatten && path.length > 0) {
            formProp = formProp.flatten[path.shift()];
        }
        if (path.length > 0) {
            throw new Error("Error trying deep access to a flatten declaration " + prop.join('.'));
        }
        else if (formProp.childForm) {
            if (!formProp.rtType) {
                // tslint:disable-next-line
                throw new Error("Error trying deep access to a flatten declaration, \"rtType\" is not set but \"childForm\" is in section \"" + key + "\"");
            }
        }
    }
    var typeMeta = formProp.rtType;
    if (!typeMeta) {
        var propMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getMetaFor(type, _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["PropMetadata"], key);
        formProp.rtType = typeMeta = propMeta.type;
    }
    if (formProp.childForm && path.length > 0) {
        if (!_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].hasTarget(typeMeta.ref)) {
            // tslint:disable-next-line
            throw new Error("Error trying deep access with a \"childForm\" found in path section \"" + key + "\", \"" + typeMeta.ref + "\" is not a registered model");
        }
        return deepGetFormProp(typeMeta.ref, [path.shift(), path.join('.')]);
    }
    return formProp;
}
// tslint:disable-next-line
var NgFormsChildSerializeMapper = /** @class */ (function (_super) {
    __extends(NgFormsChildSerializeMapper, _super);
    function NgFormsChildSerializeMapper(source, cache /*Map<string, Map<any, any>> */, plainMapper) {
        var _this = _super.call(this, source, plainMapper) || this;
        _this.cache = cache; /*Map<string, Map<any, any>> */
        return _this;
    }
    return NgFormsChildSerializeMapper;
}(NgFormsSerializeMapper));

var ngFormsMapper = {
    serializer: function (source, plainMapper) {
        return new NgFormsSerializeMapper(source, plainMapper);
    },
    deserializer: function (source, sourceType, plainMapper) {
        return new NgFormsDeserializeMapper(source, sourceType, plainMapper);
    }
};


/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/core/decorators.ts":
/*!************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/core/decorators.ts ***!
  \************************************************************************************************************/
/*! exports provided: formModel, FormModel, formProp, FormProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formModel", function() { return formModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModel", function() { return FormModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formProp", function() { return formProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProp", function() { return FormProp; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metadata/index */ "../../libs/ngx-dynamic-forms/src/lib/core/metadata/index.ts");


/** @internal */
var formModel = {};
formModel = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata_index__WEBPACK_IMPORTED_MODULE_1__["FormModelMetadata"], true);
/**
 * @propertyDecorator static
 * @param metaArgs
 */
function FormModel(metaArgs) {
    return formModel(metaArgs);
}
// we need to export `FormProp` explicitly or else the type of the parameter "def" in the "d.ts" file will be set
// to FormModelMetadataArgs<"form" | "none">
var formProp = {};
formProp = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata_index__WEBPACK_IMPORTED_MODULE_1__["FormPropMetadata"]);
function FormProp(def) {
    return formProp(def);
}
_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].on.processType(function (target) {
    var tMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(target);
    var modelProps = tMeta.getMetaFor(_metadata_index__WEBPACK_IMPORTED_MODULE_1__["FormPropMetadata"]);
    if (modelProps) {
        var formModelMeta_1 = tMeta.getMetaFor(_metadata_index__WEBPACK_IMPORTED_MODULE_1__["FormModelMetadata"], true);
        if (!formModelMeta_1) {
            FormModel()(target);
            formModelMeta_1 = tMeta.getMetaFor(_metadata_index__WEBPACK_IMPORTED_MODULE_1__["FormModelMetadata"], true);
        }
        _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MapExt"].asKeyValArray(modelProps).forEach(function (_a) {
            var k = _a[0], v = _a[1];
            return formModelMeta_1.addProp(tMeta.getCreateProp(k), v);
        });
    }
});


/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/core/index.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/core/index.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BASE_RENDERER, FormPropMetadata, NgFormsDeserializeMapper, NgFormsSerializeMapper, deepGetFormProp, NgFormsChildSerializeMapper, ngFormsMapper, FormModelMetadata, formModel, FormModel, formProp, FormProp, NgFormsBoundMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metadata_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata/index */ "../../libs/ngx-dynamic-forms/src/lib/core/metadata/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_RENDERER", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["BASE_RENDERER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormPropMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["FormPropMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModelMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["FormModelMetadata"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators */ "../../libs/ngx-dynamic-forms/src/lib/core/decorators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formModel", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["formModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModel", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["FormModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formProp", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["formProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormProp", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["FormProp"]; });

/* harmony import */ var _angular_forms_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-forms-mapper */ "../../libs/ngx-dynamic-forms/src/lib/core/angular-forms-mapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgFormsDeserializeMapper", function() { return _angular_forms_mapper__WEBPACK_IMPORTED_MODULE_2__["NgFormsDeserializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgFormsSerializeMapper", function() { return _angular_forms_mapper__WEBPACK_IMPORTED_MODULE_2__["NgFormsSerializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepGetFormProp", function() { return _angular_forms_mapper__WEBPACK_IMPORTED_MODULE_2__["deepGetFormProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgFormsChildSerializeMapper", function() { return _angular_forms_mapper__WEBPACK_IMPORTED_MODULE_2__["NgFormsChildSerializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ngFormsMapper", function() { return _angular_forms_mapper__WEBPACK_IMPORTED_MODULE_2__["ngFormsMapper"]; });

/* harmony import */ var _ng_forms_bound_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-forms-bound-mapper */ "../../libs/ngx-dynamic-forms/src/lib/core/ng-forms-bound-mapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgFormsBoundMapper", function() { return _ng_forms_bound_mapper__WEBPACK_IMPORTED_MODULE_3__["NgFormsBoundMapper"]; });







/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/core/metadata/form-model.ts":
/*!*********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/core/metadata/form-model.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: FormModelMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModelMetadata", function() { return FormModelMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormModelMetadata = /** @class */ (function (_super) {
    __extends(FormModelMetadata, _super);
    function FormModelMetadata(metaArgs, info) {
        var _this = _super.call(this, info) || this;
        _this.props = new Map();
        if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isJsObject"])(metaArgs)) {
            _this.validator = metaArgs.validator || null;
            _this.asyncValidator = metaArgs.asyncValidator || null;
        }
        return _this;
    }
    FormModelMetadata.prototype.addProp = function (prop, metaArgs) {
        this.props.set(prop.name, metaArgs);
    };
    FormModelMetadata.prototype.getProp = function (propertyKey) {
        return this.props.get(propertyKey);
    };
    FormModelMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            single: true,
            allowOn: ['class'],
            proxy: {
                host: _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["ModelMetadata"],
                containerKey: 'form'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], FormModelMetadata);
    return FormModelMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/core/metadata/form-prop.ts":
/*!********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/core/metadata/form-prop.ts ***!
  \********************************************************************************************************************/
/*! exports provided: BASE_RENDERER, FormPropMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_RENDERER", function() { return BASE_RENDERER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPropMetadata", function() { return FormPropMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BASE_RENDERER = {
    vType: 'none',
    ordinal: Number.MAX_SAFE_INTEGER
};
var FormPropMetadata = /** @class */ (function (_super) {
    __extends(FormPropMetadata, _super);
    function FormPropMetadata(metaArgs, info, target) {
        var _this = _super.call(this, info) || this;
        _this.render = Object.create(BASE_RENDERER);
        if (metaArgs) {
            _this.transform = metaArgs.transform;
            _this.exclude = metaArgs.exclude;
            if (metaArgs.hasOwnProperty('defaultValue')) {
                _this.defaultValue = metaArgs.defaultValue;
            }
            _this.required = metaArgs.required;
            _this.validators = metaArgs.validators || null;
            _this.asyncValidators = metaArgs.asyncValidators || null;
            if (!_this.exclude && metaArgs.render) {
                if (!metaArgs.render.vType) {
                    throw new Error("Invalid property type or type not set in " + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(target) + "." + info.name);
                }
                Object.assign(_this.render, metaArgs.render);
            }
            if (metaArgs.childForm) {
                // TODO: If childForm, check type and see type is a FormModel as well
                //       This requires some thinking because at this point the type might be undefined if it's a getter.
                if (!_this.render.vType) {
                    _this.render.vType = 'form';
                }
                _this.childForm = true;
            }
            if (metaArgs.rtType) {
                _this.rtType = new _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TypeMetadata"](metaArgs.rtType, info, target);
            }
            if (metaArgs.flatten) {
                _this.flatten = {};
                for (var _i = 0, _a = Object.keys(metaArgs.flatten); _i < _a.length; _i++) {
                    var key = _a[_i];
                    _this.flatten[key] = new FormPropMetadata_1(metaArgs.flatten[key], {
                        type: 'member',
                        name: key
                    });
                }
            }
        }
        return _this;
    }
    FormPropMetadata_1 = FormPropMetadata;
    FormPropMetadata.EMPTY = new FormPropMetadata_1({}, { type: 'class' });
    FormPropMetadata = FormPropMetadata_1 = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['member'],
            extend: 'mergeMap',
            proxy: {
                host: _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["PropMetadata"],
                containerKey: 'form'
            }
        }),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], FormPropMetadata);
    return FormPropMetadata;
    var FormPropMetadata_1;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/core/metadata/index.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/core/metadata/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: BASE_RENDERER, FormPropMetadata, FormModelMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-prop */ "../../libs/ngx-dynamic-forms/src/lib/core/metadata/form-prop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_RENDERER", function() { return _form_prop__WEBPACK_IMPORTED_MODULE_0__["BASE_RENDERER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormPropMetadata", function() { return _form_prop__WEBPACK_IMPORTED_MODULE_0__["FormPropMetadata"]; });

/* harmony import */ var _form_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-model */ "../../libs/ngx-dynamic-forms/src/lib/core/metadata/form-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModelMetadata", function() { return _form_model__WEBPACK_IMPORTED_MODULE_1__["FormModelMetadata"]; });





/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/core/ng-forms-bound-mapper.ts":
/*!***********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/core/ng-forms-bound-mapper.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: NgFormsBoundMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormsBoundMapper", function() { return NgFormsBoundMapper; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _angular_forms_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-forms-mapper */ "../../libs/ngx-dynamic-forms/src/lib/core/angular-forms-mapper.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * A FormGroup/FormArray deserializer bound to a specific instance.
 *
 */
var NgFormsBoundDeserializeMapper = /** @class */ (function (_super) {
    __extends(NgFormsBoundDeserializeMapper, _super);
    function NgFormsBoundDeserializeMapper(formGroup, sourceType, instance, plainMapper) {
        var _this = _super.call(this, formGroup, sourceType, plainMapper) || this;
        _this.formGroup = formGroup;
        _this.instance = instance;
        return _this;
    }
    /**
     * Overrides the base class method to set the result from the instance when `resultOrKey` is a string or a number.
     * Note that it will set the result from the root object, which means that only 1st level properties can be used and
     * deep references to nested object are not supported.
     * This should have no effect since the base implementation of `deserializeFlattened`, when calling itself, provides
     * the `resultOrKey`
     */
    NgFormsBoundDeserializeMapper.prototype.deserializeFlattened = function (control, formProp, resultOrKey) {
        if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isString"])(resultOrKey) || Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(resultOrKey)) {
            resultOrKey = this.instance[resultOrKey];
        }
        return _super.prototype.deserializeFlattened.call(this, control, formProp, resultOrKey);
    };
    return NgFormsBoundDeserializeMapper;
}(_angular_forms_mapper__WEBPACK_IMPORTED_MODULE_1__["NgFormsDeserializeMapper"]));
/**
 * An instance of NgFormsSerializeMapper and NgFormsDeserializeMapper bound to the same type & instance.
 * This is a helper class for easy form management where one can use the same object to serialize
 * and deserialize the model while keeping a reference to the model data.
 */
// tslint:disable-next-line
var NgFormsBoundMapper = /** @class */ (function () {
    function NgFormsBoundMapper(type, instance, formGroup) {
        this.type = type;
        this.instance = instance;
        this.meta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(type);
        if (formGroup) {
            this.fg = formGroup;
        }
    }
    NgFormsBoundMapper.prototype.serialize = function () {
        return (this.fg = this.meta.serialize(new _angular_forms_mapper__WEBPACK_IMPORTED_MODULE_1__["NgFormsSerializeMapper"](this.instance)));
    };
    NgFormsBoundMapper.prototype.deserialize = function () {
        this.meta.deserialize(new NgFormsBoundDeserializeMapper(this.fg, this.type, this.instance), this.instance);
        return this.instance;
    };
    return NgFormsBoundMapper;
}());



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/create-child-form-event.ts":
/*!********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/create-child-form-event.ts ***!
  \********************************************************************************************************************/
/*! exports provided: createChildFormEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChildFormEvent", function() { return createChildFormEvent; });
function cloneContext(baseCtx, mergeCtx) {
    return Object.assign({
        item: baseCtx.item,
        tdmForm: baseCtx.tdmForm,
        fArray: baseCtx.fArray,
        fControl: baseCtx.fControl,
        fGroup: baseCtx.fGroup
    }, mergeCtx || {});
}
function createChildFormEvent(ctx, mergeCtx) {
    ctx = cloneContext(ctx, mergeCtx);
    var createdTDMModelForm;
    var rootTdmForm = ctx.tdmForm;
    return {
        type: 'childFormEdit',
        isNew: ctx.fControl.value === null,
        context: ctx,
        createTDMModelForm: function () {
            if (createdTDMModelForm) {
                throw new Error('');
            }
            return (createdTDMModelForm = ctx.tdmForm.createChildForm(ctx.item.fullName, ctx.fControl.value, ctx.fControl));
        },
        reset: function () {
            // new that is not an array is inline, this requires reset of that specific control because it
            // needs to be set to FormControl(null), which is a null FormGroup of child form.
            if (this.isNew && !this.context.item.isArray) {
                rootTdmForm.resetControl(ctx.item.fullName);
            }
            else if (createdTDMModelForm) {
                // we don't publish up, because it will change the state (pristine, dirty, etc) of the parent which
                // on arrays is not true
                createdTDMModelForm.reset({ onlySelf: this.isNew });
            }
        }
    };
}


/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/create-control.ts":
/*!***********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/create-control.ts ***!
  \***********************************************************************************************************/
/*! exports provided: createControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createControl", function() { return createControl; });
/* harmony import */ var _core_angular_forms_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/angular-forms-mapper */ "../../libs/ngx-dynamic-forms/src/lib/core/angular-forms-mapper.ts");

/**
 * Run-time path and Static path are different in how they express arrays.
 * A run-time path will express an array index because it refers to instances.
 * A static path will not express an array index because it refer to types, complex or primitive but an array in the
 * static world is only a container of types (Array of T) and does not play a role in static type lookup.
 *
 * ## Example
 * A User class with an info property, info is an object with a name property (string) and an addresses property
 * which is array of address objects. address objects have a street property (string).
 *
 * Run-time path expressions:
 *  1. info.name
 *  2. info.addresses
 *  3. info.addresses.0.street
 *
 * Static path expressions:
 *  1. info.name
 *  2. info.addresses
 *  3. info.addresses.street
 *
 * Only 3 is different since it's an array.
 *
 * Run-time path expressions is used with runtime instance of form controls, static path expressions are used when
 * working with @tdm metadata and it's form serializers and deserializers.
 */
/**
 * Creates a form control based on metadata of a given property in a given model.
 * If a value is provided the form control will be populated with the value.
 *
 * You can provide a string (`prop`) representing the property name, OR if you want to create a control for a property
 * in a nested object (Only for `@FormProp` declarations with `flatten` expressions OR `childForm` set to true) you
 * you can provide a tuple a tuple with 2 values the first value is a string representing the
 * property name at the root level (exposed property that `@FormProp` decorates), the second value is a dot notation
 * path to the nested property within the flatten expression / Child model.
 *
 * For example, in the following flatten expression:
 *
 * ```ts
 * @FormProp({
 *   flatten: Object.assign({}, basicFlatten, {
 *     additional: {
 *       flatten: {
 *         work: { }
 *       }
 *     }
 *   })
 * })
 * myProp: any;
 * ```
 * If we want to get the control for `work` the path will be: ` ['myProp', 'additional.work'] `
 *
 * > When using a deep path and providing a `value`, the value should be the value to be assign at the resolved path
 * and not the root value, i.e. the value is not evaluated with each step in the path.
 *
 * NOTE: Array's are NOT SUPPORTED by design.
 * This function DOES NOT support arrays, if a given property is an Array<T> the returned form will be T.
 * Make sure not to send an array instance with `value`.
 *
 * Why?
 * The purpose of this function is to create form controls to be added to FormArrays.
 * These can be empty controls or populated with a given `value`.
 * To support all features (e.g. "flatten") and allow empty form controls array are not supported because a property
 * with type Array<T> and no values in the array will return an empty FormArray.
 *
 * If you want to create a FormArray control simple call createControl for each item in the array and add it to the
 * FormArray:
 *
 * ```ts
 * new FormArray(items.map( item => createControl(MyType, 'myProp', item) ));
 * ```
 */
var createControl = _core_angular_forms_mapper__WEBPACK_IMPORTED_MODULE_0__["NgFormsSerializeMapper"].createControl;


/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/default-renderer.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/default-renderer.ts ***!
  \*************************************************************************************************************/
/*! exports provided: FORM_CONTROL_COMPONENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_CONTROL_COMPONENT", function() { return FORM_CONTROL_COMPONENT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

/**
 * A Token for the component that renders form controls
 */
var FORM_CONTROL_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DynamicControlRenderContext');


/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/before-render-event-handler.ts":
/*!**************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/dynamic-forms/before-render-event-handler.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: BeforeRenderEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeRenderEventHandler", function() { return BeforeRenderEventHandler; });
/* harmony import */ var rxjs_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operator/toPromise */ "../../node_modules/rxjs/operator/toPromise.js");
/* harmony import */ var rxjs_operator_toPromise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__);

var asyncUsed = function (done) {
    throw new Error('async() was already called once.');
};
var BeforeRenderEventHandler = /** @class */ (function () {
    function BeforeRenderEventHandler(instructions, notify, isRoot) {
        this.notify = notify;
        this.instructions = instructions;
        this.isRoot = !!isRoot;
    }
    /**
     * Mark this render operation as asynchronous, providing a notifier to signal when the rendering can
     * proceed.
     *
     * For example, when a render instruction of type select requires the options of the select to be
     * fetched from a remote server.
     *
     * @param done
     */
    BeforeRenderEventHandler.prototype.async = function (done) {
        if (typeof done['then'] === 'function') {
            this.notify(done);
        }
        else if (typeof done['subscribe'] === 'function') {
            this.notify(rxjs_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__["toPromise"].call(done));
        }
        else {
            throw new Error('Invalid input');
        }
        Object.defineProperty(this, 'async', { value: asyncUsed });
    };
    return BeforeRenderEventHandler;
}());



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-control-outlet.directive.ts":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-control-outlet.directive.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: DynamicControlOutletDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicControlOutletDirective", function() { return DynamicControlOutletDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form.component */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form.component.ts");
/* harmony import */ var _dynamic_form_override_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-form-override.directive */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-override.directive.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DynamicControlOutletDirective = /** @class */ (function (_super) {
    __extends(DynamicControlOutletDirective, _super);
    function DynamicControlOutletDirective(vcRef, tRef) {
        var _this = _super.call(this) || this;
        _this._vcRef = vcRef;
        _this._tRef = tRef;
        return _this;
    }
    DynamicControlOutletDirective.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if ('dynForm' in changes) {
            if (changes.dynForm.previousValue) {
                this.dynForm.detachControlOutlet(this);
            }
            if (this.dynForm) {
                this.dynForm.attachControlOutlet(this);
            }
        }
    };
    DynamicControlOutletDirective.prototype.ngOnDestroy = function () {
        if (this.dynForm) {
            this.dynForm.detachControlOutlet(this);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dynamicControlOutlet'),
        __metadata("design:type", Object)
    ], DynamicControlOutletDirective.prototype, "controlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dynamicControlOutletDynForm'),
        __metadata("design:type", _dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__["DynamicFormComponent"])
    ], DynamicControlOutletDirective.prototype, "dynForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dynamicControlOutletVType'),
        __metadata("design:type", Object)
    ], DynamicControlOutletDirective.prototype, "vType", void 0);
    DynamicControlOutletDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dynamicControlOutlet]',
            exportAs: 'dynamicControlOutlet'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], DynamicControlOutletDirective);
    return DynamicControlOutletDirective;
}(_dynamic_form_override_directive__WEBPACK_IMPORTED_MODULE_2__["ControlSelectorBase"]));



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-array.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-array.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span #viewRef></span>\n"

/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-array.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-array.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: DynamicFormArray, DynamicFormArrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormArray", function() { return DynamicFormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormArrayComponent", function() { return DynamicFormArrayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tdm-model-form/index */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/index.ts");
/* harmony import */ var _dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-form.component */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicFormArray = /** @class */ (function () {
    function DynamicFormArray(cfr, dynForm) {
        this.cfr = cfr;
        this.ready = false;
        if (dynForm) {
            this.dynForm = dynForm;
        }
    }
    DynamicFormArray.prototype.ngOnChanges = function (changes) {
        if (changes.tdmForm || changes.fArray || changes.item || changes.fGroup) {
            if (this.ready !==
                !!(this.tdmForm &&
                    this.fArray &&
                    this.fGroup &&
                    this.item &&
                    this.item.isArray)) {
                this.ready = !this.ready;
                this.updateControls();
            }
        }
    };
    DynamicFormArray.prototype.updateControls = function () {
        this.vcRef.clear();
        if (this.ready) {
            var component = this.dynForm.getComponentRenderer(this.item);
            var componentFactory = this.cfr.resolveComponentFactory(component);
            for (var _i = 0, _a = this.fArray.controls; _i < _a.length; _i++) {
                var childControl = _a[_i];
                for (var _b = 0, _c = this.item.children; _b < _c.length; _b++) {
                    var childItem = _c[_b];
                    var c = childItem.resolveFormArrayChild(childControl);
                    var override = this.dynForm.getOverride(childItem);
                    if (override) {
                        var $implicit = (_d = {
                                item: childItem,
                                fGroup: this.fGroup,
                                tdmForm: this.tdmForm
                            },
                            _d[c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"] ? 'fArray' : 'fControl'] = c,
                            _d);
                        this.vcRef.createEmbeddedView(override.template, { $implicit: $implicit });
                    }
                    else {
                        var cmpRef = this.vcRef.createComponent(componentFactory, this.vcRef.length);
                        var instance = cmpRef.instance;
                        instance.item = childItem;
                        instance.fGroup = this.fGroup;
                        instance.tdmForm = this.tdmForm;
                        if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]) {
                            instance.fArray = c;
                        }
                        else {
                            instance.fControl = c;
                        }
                        if (typeof instance.tdmOnControlContextInit === 'function') {
                            instance.tdmOnControlContextInit();
                        }
                    }
                }
            }
        }
        var _d;
    };
    return DynamicFormArray;
}());

// tslint:disable-next-line
var DynamicFormArrayComponent = /** @class */ (function (_super) {
    __extends(DynamicFormArrayComponent, _super);
    function DynamicFormArrayComponent(cfr, dynForm) {
        return _super.call(this, cfr, dynForm) || this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__["DynamicFormComponent"])
    ], DynamicFormArrayComponent.prototype, "dynForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"])
    ], DynamicFormArrayComponent.prototype, "fArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], DynamicFormArrayComponent.prototype, "fGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_2__["RenderInstruction"])
    ], DynamicFormArrayComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_2__["TDMModelForm"])
    ], DynamicFormArrayComponent.prototype, "tdmForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('viewRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], DynamicFormArrayComponent.prototype, "vcRef", void 0);
    DynamicFormArrayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-form-array',
            template: __webpack_require__(/*! ./dynamic-form-array.component.html */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-array.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__["DynamicFormComponent"]])
    ], DynamicFormArrayComponent);
    return DynamicFormArrayComponent;
}(DynamicFormArray));



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-array.directive.ts":
/*!***************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-array.directive.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: DynamicFormArrayDirective, ForFormArrayDirective, getTypeNameForDebugging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormArrayDirective", function() { return DynamicFormArrayDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForFormArrayDirective", function() { return ForFormArrayDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeNameForDebugging", function() { return getTypeNameForDebugging; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tdm-model-form/index */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/index.ts");
/* harmony import */ var _dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-form.component */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form.component.ts");
/* harmony import */ var _dynamic_form_array_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-form-array.component */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-array.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var forFormArrayContextKeys = [
    'item',
    'tdmForm',
    'fGroup',
    'dynForm'
];
var DynamicFormArrayDirective = /** @class */ (function (_super) {
    __extends(DynamicFormArrayDirective, _super);
    function DynamicFormArrayDirective(vcRef, cfr, dynForm) {
        var _this = _super.call(this, cfr, dynForm) || this;
        _this.vcRef = vcRef;
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dynamicFormArrayDynForm'),
        __metadata("design:type", _dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"])
    ], DynamicFormArrayDirective.prototype, "dynForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dynamicFormArrayFArray'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"])
    ], DynamicFormArrayDirective.prototype, "fArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dynamicFormArrayFGroup'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], DynamicFormArrayDirective.prototype, "fGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dynamicFormArrayItem'),
        __metadata("design:type", _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_3__["RenderInstruction"])
    ], DynamicFormArrayDirective.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dynamicFormArrayTdmForm'),
        __metadata("design:type", _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_3__["TDMModelForm"])
    ], DynamicFormArrayDirective.prototype, "tdmForm", void 0);
    DynamicFormArrayDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dynamicFormArray]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]])
    ], DynamicFormArrayDirective);
    return DynamicFormArrayDirective;
}(_dynamic_form_array_component__WEBPACK_IMPORTED_MODULE_5__["DynamicFormArray"]));

var ForFormArrayDirective = /** @class */ (function (_super) {
    __extends(ForFormArrayDirective, _super);
    function ForFormArrayDirective(tRef, differs, vcRef, dynForm) {
        var _this = _super.call(this, vcRef, tRef, differs) || this;
        _this.differs = differs;
        // tslint:enable
        _this.ready = false;
        _this.formArrayDiffer = null;
        _this.grouped = [];
        return _this;
    }
    Object.defineProperty(ForFormArrayDirective.prototype, "context", {
        // TODO: warn or throw when setting context after one of the values in the context was set manually
        set: function (value) {
            if (value) {
                for (var _i = 0, forFormArrayContextKeys_1 = forFormArrayContextKeys; _i < forFormArrayContextKeys_1.length; _i++) {
                    var k = forFormArrayContextKeys_1[_i];
                    this[k] = value[k];
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ForFormArrayDirective.prototype.ngOnChanges = function (changes) {
        if (this.ready !==
            !!(this.tdmForm &&
                this.fArray &&
                this.fGroup &&
                this.item &&
                this.item.isArray)) {
            this.ready = !this.ready;
            if (changes.fArray) {
                var controls = this.fArray && this.fArray.controls;
                this.trySetDiffer(controls);
                changes.ngForOf = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](this.ngForOf, [], changes.fArray.isFirstChange());
                this.ngForOf = changes.ngForOf.currentValue;
                _super.prototype.ngOnChanges.call(this, changes);
            }
        }
    };
    ForFormArrayDirective.prototype.ngDoCheck = function () {
        if (this.formArrayDiffer) {
            var changes = this.formArrayDiffer.diff(this.fArray && this.fArray.controls);
            if (changes) {
                this.applyFormArrayChanges(changes);
                _super.prototype.ngDoCheck.call(this);
            }
        }
    };
    ForFormArrayDirective.prototype.applyFormArrayChanges = function (changes) {
        var _this = this;
        var renderers = this.ngForOf;
        changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
                var values = _this.convert([
                    _this.fArray.controls[item.currentIndex]
                ]);
                var prevValues = _this.grouped[currentIndex - 1];
                _this.grouped[currentIndex] = values;
                if (prevValues && prevValues.length > 0) {
                    currentIndex += prevValues.length;
                }
                renderers.splice.apply(renderers, [currentIndex, 0].concat(values));
            }
            else if (currentIndex == null) {
                var values = _this.grouped.splice(adjustedPreviousIndex, 1)[0];
                renderers.splice(adjustedPreviousIndex, values.length);
            }
            else {
                var values = _this.grouped.splice(adjustedPreviousIndex, 1)[0];
                renderers.splice(adjustedPreviousIndex, values.length);
                _this.grouped[currentIndex] = values;
                renderers.splice.apply(renderers, [currentIndex, 0].concat(values));
            }
        });
        changes.forEachIdentityChange(function (record) {
            var values = _this.grouped.splice(record.currentIndex, 1)[0];
            var newValues = _this.convert([
                _this.fArray.controls[record.currentIndex]
            ]);
            renderers.splice.apply(renderers, [record.currentIndex, values.length].concat(newValues));
        });
    };
    ForFormArrayDirective.prototype.convert = function (controls) {
        var result = [];
        for (var _i = 0, controls_1 = controls; _i < controls_1.length; _i++) {
            var childControl = controls_1[_i];
            for (var _a = 0, _b = this.item.children; _a < _b.length; _a++) {
                var childItem = _b[_a];
                var c = childItem.resolveFormArrayChild(childControl);
                var $implicit = (_c = {
                        item: childItem,
                        fGroup: this.fGroup,
                        tdmForm: this.tdmForm
                    },
                    _c[c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] ? 'fArray' : 'fControl'] = c,
                    _c);
                result.push($implicit);
            }
        }
        return result;
        var _c;
    };
    ForFormArrayDirective.prototype.trySetDiffer = function (value) {
        if (!this.formArrayDiffer && value) {
            try {
                this.formArrayDiffer = this.differs.find(value).create();
            }
            catch (e) {
                throw new Error("Cannot find a differ supporting object '" + value + "' of type '" + getTypeNameForDebugging(value) + "'.         NgFor only supports binding to Iterables such as Arrays.");
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('forFormArrayOf'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"])
    ], ForFormArrayDirective.prototype, "fArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('forFormArrayTrackBy'),
        __metadata("design:type", Function)
    ], ForFormArrayDirective.prototype, "ngForTrackBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('forFormArrayDynForm'),
        __metadata("design:type", _dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"])
    ], ForFormArrayDirective.prototype, "dynForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('forFormArrayFGroup'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], ForFormArrayDirective.prototype, "fGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('forFormArrayItem'),
        __metadata("design:type", _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_3__["RenderInstruction"])
    ], ForFormArrayDirective.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('forFormArrayTdmForm'),
        __metadata("design:type", _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_3__["TDMModelForm"])
    ], ForFormArrayDirective.prototype, "tdmForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('forFormArrayContext'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ForFormArrayDirective.prototype, "context", null);
    ForFormArrayDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[forFormArray]'
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]])
    ], ForFormArrayDirective);
    return ForFormArrayDirective;
}(_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]));

function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
}


/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-control.directive.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-control.directive.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: DynamicFormControlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormControlDirective", function() { return DynamicFormControlDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tdm-model-form/index */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/index.ts");
/* harmony import */ var _dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-form.component */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * An container/wrapper used to project the user-define renderer.
 * DynamicFormControlDirective is much like `NgComponentOutlet`, they both do the same job.
 *
 * DynamicFormControlDirective is more specific to the use case, it accepts {@link RenderInstruction}
 * as input and renders a component that it get's from the DI.
 * @internal
 */
var DynamicFormControlDirective = /** @class */ (function () {
    function DynamicFormControlDirective(defaultVCRef, dynForm) {
        this.defaultVCRef = defaultVCRef;
        this.dynForm = dynForm;
        // tslint:disable-line
        this.vcRef = defaultVCRef;
    }
    Object.defineProperty(DynamicFormControlDirective.prototype, "dynamicFormControl", {
        get: function () {
            return this.render;
        },
        set: function (value) {
            if (this.render === value) {
                return;
            }
            this.render = value;
            this.vcRef.clear();
            var outlet = this.dynForm.getOutlet(value);
            this.vcRef = outlet ? outlet._vcRef : this.defaultVCRef;
            this.vcRef.clear();
            if (outlet && outlet._tRef) {
                this.defaultVCRef.clear();
                var $implicit = {};
                this.dynForm.tdmForm.bindRenderingData($implicit, value);
                this.defaultVCRef.createEmbeddedView(outlet._tRef, { $implicit: $implicit });
            }
            if (value) {
                var override = this.dynForm.getOverride(value);
                if (override) {
                    var $implicit = {};
                    this.dynForm.tdmForm.bindRenderingData($implicit, value);
                    this.vcRef.createEmbeddedView(override.template, { $implicit: $implicit });
                }
                else {
                    var injector = this.defaultVCRef.injector;
                    var resolver = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]);
                    var component = this.dynForm.getComponentRenderer(value);
                    var componentFactory = resolver.resolveComponentFactory(component);
                    this.cmpRef = this.defaultVCRef.createComponent(componentFactory, this.defaultVCRef.length, injector);
                    this.dynForm.tdmForm.bindRenderingData(this.cmpRef.instance, value);
                    if (typeof this.cmpRef.instance.tdmOnControlContextInit === 'function') {
                        this.cmpRef.instance.tdmOnControlContextInit();
                    }
                    if (outlet) {
                        this.cmpRef.hostView.detectChanges();
                        this.vcRef.insert(this.defaultVCRef.detach());
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_1__["RenderInstruction"]),
        __metadata("design:paramtypes", [_tdm_model_form_index__WEBPACK_IMPORTED_MODULE_1__["RenderInstruction"]])
    ], DynamicFormControlDirective.prototype, "dynamicFormControl", null);
    DynamicFormControlDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dynamicFormControl]'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__["DynamicFormComponent"]; }))),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__["DynamicFormComponent"]])
    ], DynamicFormControlDirective);
    return DynamicFormControlDirective;
}());



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-override.directive.ts":
/*!******************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-override.directive.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: ControlSelectorBase, DynamicFormOverrideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlSelectorBase", function() { return ControlSelectorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormOverrideDirective", function() { return DynamicFormOverrideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlSelectorBase = /** @class */ (function () {
    function ControlSelectorBase() {
        this.filter = {
            names: [],
            vTypes: []
        };
    }
    Object.defineProperty(ControlSelectorBase.prototype, "isCatchAll", {
        /**
         * Returns true when the control name is catch all
         */
        get: function () {
            return this.controlName === '*';
        },
        enumerable: true,
        configurable: true
    });
    ControlSelectorBase.prototype.isMatching = function (rd) {
        return ((!this.vType || this.filter.vTypes.indexOf(rd.vType) > -1) &&
            (this.controlName &&
                (this.controlName === '*' || this.controlName.indexOf(rd.name) > -1)));
    };
    ControlSelectorBase.prototype.ngOnChanges = function (changes) {
        if ('controlName' in changes || 'vType' in changes) {
            this.syncQuery();
        }
    };
    ControlSelectorBase.prototype.syncQuery = function () {
        this.filter.names = Array.isArray(this.controlName)
            ? this.controlName
            : Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isString"])(this.controlName) ? [this.controlName] : [];
        this.filter.vTypes = Array.isArray(this.vType)
            ? this.vType
            : Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isString"])(this.vType) ? [this.vType] : [];
    };
    return ControlSelectorBase;
}());

/**
 * A directive that allows override the default renderer for a form control name.
 *
 * @example
 *
 * ```html
 * <dynamic-form #df [model]="data.user" [exclude]="['remotePassword']">
 *   <md-input-container *dynamicFormOverride="'localUser'; let ctx" [formGroup]="ctx.fGroup" >
 *     <input type="password" [formControl]="ctx.fControl" mdInput [placeholder]="ctx.item.label">
 *   </md-input-container>
 * </dynamic-form>
 * ```
 *
 */
var DynamicFormOverrideDirective = /** @class */ (function (_super) {
    __extends(DynamicFormOverrideDirective, _super);
    function DynamicFormOverrideDirective(template) {
        var _this = 
        // tslint:disable-line
        _super.call(this) || this;
        _this.template = template;
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dynamicFormOverride'),
        __metadata("design:type", Object)
    ], DynamicFormOverrideDirective.prototype, "controlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dynamicFormOverrideVType'),
        __metadata("design:type", Object)
    ], DynamicFormOverrideDirective.prototype, "vType", void 0);
    DynamicFormOverrideDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dynamicFormOverride]',
            exportAs: 'dynamicFormOverride'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], DynamicFormOverrideDirective);
    return DynamicFormOverrideDirective;
}(ControlSelectorBase));



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form.component.html":
/*!***********************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formElRef [formGroup]=\"tdmForm.form\" [class]=\"formClass\">\n    <ng-container *ngFor=\"let item of controls | async; trackBy: tdmForm.trackBy\">\n        <ng-container *dynamicFormControl=\"item\"></ng-container>\n    </ng-container>\n    <ng-content></ng-content>\n</form>\n"

/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "../../node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "../../node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operator/toPromise */ "../../node_modules/rxjs/operator/toPromise.js");
/* harmony import */ var rxjs_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _default_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../default-renderer */ "../../libs/ngx-dynamic-forms/src/lib/default-renderer.ts");
/* harmony import */ var _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tdm-model-form/index */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "../../libs/ngx-dynamic-forms/src/lib/utils.ts");
/* harmony import */ var _dynamic_form_override_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamic-form-override.directive */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-override.directive.ts");
/* harmony import */ var _before_render_event_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./before-render-event-handler */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/before-render-event-handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











/**
 * Allow rendering a form using @tdm/ngx-dynamic-forms and MaterialFormControlRenderer
 */
var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(tdmModelFormService, controlRenderer, kvDiffers, itDiffers, renderer) {
        this.tdmModelFormService = tdmModelFormService;
        this.kvDiffers = kvDiffers;
        this.itDiffers = itDiffers;
        this.renderer = renderer;
        this._disabled = false;
        /**
         * Defines the filtering mode.
         *
         * There are 2 modes:
         *   - include: All fields will not render by default, only those defined in the filter will render.
         *   - exclude: All fields will render by default, only those defined in the filter will not render.
         *
         * The default filtering mode is `exclude`
         */
        this.filterMode = 'exclude';
        /**
         * Event emitted when a form value changes.
         *
         * When a change occurs in a child property of a flattened property (nested objects) the `key` property in the change
         * represents a path (not the name) to the value from the root object.
         *
         * > Note that each event is emitted synchronously and all listeners will run in sequence. While listeners run new
         * change events are blocked which means you can change form values without the event firing again. If you do want
         * a re-fire change the value async.
         */
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted before rendering form controls.
         *
         * Only included controls are emitted.
         *
         * Use this event to modify form control/s rendering instructions (metadata) before they are rendered.
         * For example, given a `select` form control, you can use this event to create dynamic, ad-hoc, select options.
         *
         * ```html
         *  <dynamic-form [model]="model" (beforeRender)="beforeRender($event)">
         * ```
         *
         * ```ts
         * @Component({ ... })
         * export class MyComponent {
         *   beforeRender(event: BeforeRenderEventHandler) {
         *     if ('state' in event.instructions) {
         *       event.instructions.state.options = [ { value: 'X', label: 'Y' } ] // more...
         *     }
         *   }
         * }
         * ```
         * You can modify all the of properties in {@link RenderInstruction}... the render type, order and more.
         *
         * ### Asynchronous rendering logic
         * There are scenarios where the modification logic is asynchronous, for example, populating the
         * options (options) of a form control from a remote server
         *
         * ```ts
         * @Component({ ... })
         * export class MyComponent {
         *   beforeRender(event: BeforeRenderEventHandler) {
         *     if ('state' in event.instructions) {
         *       let resolve, p = new Promise( (res, rej) => { resolve = res; });
         *
         *       event.async(p); // notify to use async logic
         *
         *       // do some async stuff...
         *       setTimeout(() => {
         *         event.instructions.state.options = [ { value: 'X', label: 'Y' } ] // more...
         *         resolve();
         *       }, 1000);
         *     }
         *   }
         * }
         * ```
         * > You can use the `renderState` event to reflect asynchronous rendering in the UI.
         */
        this.beforeRender = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * The active render instructions for this instance, active instructions does not include instruction that were
         * filtered out.
         */
        this.instructions = {};
        /**
         * The active render instructions for this instance, active instructions does not include instruction that were
         * filtered out.
         * @internal
         */
        this.controls = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.subscriptions = [];
        this.stateDiffer = {};
        this.rendering$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._ngNativeValidate = false;
        this.outlets = new Set();
        this.overrideMap = new Map();
        this.outletMap = new Map();
        this.rendererEvent$ = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Indicates the number of update() calls that are running/queued
         * A number n that is > 1 does not mean the update will run n times, it will run one more time only.
         */
        this.pendingUpdates = 0;
        /**
         * Overrides that are injected by code (addOverride) and not by content projection
         */
        this.codeOverrides = [];
        this.renderState = this.rendering$.asObservable();
        this.rendererEvent = this.rendererEvent$.asObservable();
        if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(controlRenderer)) {
            this.controlRenderer = {};
            this.defaultControlRenderer = controlRenderer;
        }
        else {
            this.controlRenderer = controlRenderer;
            this.defaultControlRenderer = this.controlRenderer['*'];
            if (!this.defaultControlRenderer) {
                throw new Error('Default control renderer not set.');
            }
        }
    }
    Object.defineProperty(DynamicFormComponent.prototype, "form", {
        /**
         * The [[FormGroup]] instance used by [[TDMModelForm]].
         * Available after [[TDMModelForm]] instance is created.
         */
        get: function () {
            return this.tdmForm && this.tdmForm.form;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            value = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
            if (value !== this._disabled) {
                this._disabled = value;
                this.onDisableChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "ngNativeValidate", {
        /**
         * Pass through for @angular/forms `ngNativeValidate` attribute that enables native browser validation
         *
         */
        get: function () {
            return this._ngNativeValidate;
        },
        set: function (value) {
            // tslint:disable-line
            var native = value != null && "" + value !== 'false';
            if (this._ngNativeValidate !== native) {
                this._ngNativeValidate = native;
                this.setNativeValidation();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "model", {
        /**
         * The instance and type (class) to dynamically render as form.
         * You can set the model using 3 possible formats:
         *   1. The model's instance, in this case the type is the constructor property (instance.constructor)
         *   2. A tuple of [Model Instance, Model Type]
         *   3. An instance of [[TDMModelForm]], the model an type are taken from [[TDMModelForm]], the component will not
         *   create anew instance of [[TDMModelForm]] and will use the one provided.
         *   Setting this value is only possible when a previous TDMModelForm is not set.
         *
         * @example
         * `<dynamic-form [model]="user"></dynamic-form>`
         * `<dynamic-form [model]="[user, User]"></dynamic-form>`
         *
         */
        get: function () {
            return this._model;
        },
        set: function (value) {
            if (value !== this._model) {
                this._model = value;
                this.onModelChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "slaveOf", {
        /**
         * Setting the dynamic form as a slave of another dynamic form.
         * You can this feature to split forms of complex models.
         *
         * A form in slave mode has very limited functionality, it can only filter controls and override controls.
         * All other options (hidden state, disabled state, hot binding etc..) are not supported in the slave and should be
         * handled in the master.
         *
         * Make sure you are not rendering the same controls more then once. A group of master and all of it's slave should
         * render only one instance of a control across the whole group. If you render the same control multiple times
         * you will get unexpected behaviour and unsynced controls.
         *
         * You can set any number of slaves.
         * You can not change or remove the master.
         * You can not set a model when using slave mode.
         *
         * A slave does not handle form state, it only handles internal rendering and this is why only filter and
         * override are supported, hidden and disabled are drived by the form state...
         * @param dynForm
         */
        set: function (dynForm) {
            if (this.slaveMode === true) {
                return; // TODO: warn? error? slave mode can only be set once.
            }
            else if (this.slaveMode === false) {
                throw new Error('Slave mode does not work when setting a model');
            }
            this.tdmForm = dynForm.tdmForm;
            this.instance = dynForm.instance;
            this.type = dynForm.type;
            this.slaveMode = true;
            this.rendererEvent$.subscribe(function (e) { return dynForm.rendererEvent$.emit(e); });
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormComponent.prototype.getComponentRenderer = function (rd) {
        return rd.isArray
            ? this.controlRenderer['[]'] || this.defaultControlRenderer
            : this.controlRenderer[rd.vType] || this.defaultControlRenderer;
    };
    DynamicFormComponent.prototype.attachControlOutlet = function (outlet) {
        this.outlets.add(outlet);
    };
    DynamicFormComponent.prototype.detachControlOutlet = function (outlet) {
        return this.outlets.delete(outlet);
    };
    DynamicFormComponent.prototype.redraw = function (returnPromise) {
        this.update();
        if (returnPromise === true) {
            if (this.rendering$.getValue() === false) {
                return Promise.resolve();
            }
            else {
                return rxjs_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__["toPromise"].call(this.renderState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (state) { return !state; })));
            }
        }
    };
    DynamicFormComponent.prototype.getOverride = function (item) {
        return this.overrideMap.get(item);
    };
    DynamicFormComponent.prototype.getOutlet = function (item) {
        return this.outletMap.get(item);
    };
    DynamicFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes.filterMode) {
            var prevIncluded = changes.filterMode.previousValue === 'include';
            var currIncluded = changes.filterMode.currentValue === 'include';
            if (currIncluded !== prevIncluded) {
                this.update();
            }
        }
        if (changes.filter) {
            this.onStateChange('filter', changes.filter);
        }
        if (changes.disabledState) {
            this.onStateChange('disabled', changes.disabledState);
        }
        if (changes.hiddenState) {
            this.onStateChange('hidden', changes.hiddenState);
        }
    };
    DynamicFormComponent.prototype.ngDoCheck = function () {
        if (this.filter && this.stateDiffer.filter) {
            var diff = this.stateDiffer.filter.diff(this.filter);
            if (diff) {
                this.handleDiff('filter', diff);
            }
        }
        if (this.disabledState && this.stateDiffer.disabled) {
            var diff = this.stateDiffer.disabled.diff(this.disabledState);
            if (diff) {
                this.handleDiff('disabled', diff);
            }
        }
        if (this.hiddenState && this.stateDiffer.hidden) {
            var diff = this.stateDiffer.hidden.diff(this.hiddenState);
            if (diff) {
                this.handleDiff('hidden', diff);
            }
        }
    };
    DynamicFormComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.renderInstructions = this.tdmForm.renderData;
        this.afterInit = true;
        this.updateOverrides();
        var s = this.overrides.changes.subscribe(function () { return _this.updateOverrides(); });
        this.subscriptions.push(s);
    };
    DynamicFormComponent.prototype.ngAfterViewInit = function () {
        if (this._ngNativeValidate === true) {
            this.setNativeValidation();
        }
    };
    DynamicFormComponent.prototype.ngOnDestroy = function () {
        var subs;
        while ((subs = this.subscriptions.pop())) {
            // tslint:disable-line
            subs.unsubscribe();
        }
        this.rendererEvent$.complete();
        this.rendering$.complete();
        this.beforeRender.complete();
        this.valueChanges.complete();
    };
    /**
     * Returns the form control for a given key
     * @param key
     * @returns
     */
    DynamicFormComponent.prototype.getControl = function (key) {
        return this.tdmForm.get(key);
    };
    /**
     * API to manually add field override templates, use this if you want to apply overrides but can not
     * set the content projection in the template.
     */
    DynamicFormComponent.prototype.addOverride = function (query, tRef, update) {
        if (update === void 0) { update = true; }
        var d = new _dynamic_form_override_directive__WEBPACK_IMPORTED_MODULE_9__["DynamicFormOverrideDirective"](tRef);
        d.controlName = query.controlName;
        d.vType = query.vType;
        d.syncQuery();
        if (d.isCatchAll && !d.vType) {
            this.wildOverride = d;
            this.wildOverride['__CUSTOM_ADD_OW__'] = true;
        }
        else {
            this.codeOverrides.push(d);
        }
        if (update) {
            this.update();
        }
    };
    DynamicFormComponent.prototype.emitRendererEvent = function (event) {
        this.rendererEvent$.emit(event);
    };
    DynamicFormComponent.prototype.onPropChange = function (ri, changes) {
        var markAsChanged;
        if (changes.required || changes.validators || changes.asyncValidators) {
            var control = this.tdmForm.get(ri.fullName);
            var validators = ri.getValidators();
            control.setValidators(validators[0]);
            control.setAsyncValidators(validators[1]);
            markAsChanged = true;
        }
        if (changes.vType || changes.label) {
            markAsChanged = true;
        }
        if (changes.ordinal) {
            this.update();
        }
        if (markAsChanged) {
            ri.markAsChanged();
        }
    };
    DynamicFormComponent.prototype.onModelChange = function () {
        var model = this.model;
        if (this.slaveMode) {
            throw new Error('Setting a model is not allowed when in slave mode.');
        }
        this.slaveMode = false;
        if (model instanceof _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_7__["TDMModelForm"]) {
            if (this.tdmForm) {
                if (this.tdmForm === model) {
                    return;
                }
                else {
                    throw new Error('Can not set a model using a TDMModelForm instance when a previous TDMModelForm instance exist');
                }
            }
            this.instance = model.model;
            this.type = model.type;
        }
        else if (Array.isArray(model)) {
            this.instance = model[0];
            this.type = model[1];
        }
        else {
            this.instance = model;
            this.type = model.constructor;
        }
        this.valueDiffer = undefined;
        if (!this.tdmForm) {
            this.tdmForm =
                model instanceof _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_7__["TDMModelForm"]
                    ? model
                    : this.tdmModelFormService.create(this.instance, this.type);
            var formValue = this.tdmForm.form.getRawValue();
            this.valueDiffer = this.kvDiffers.find(formValue).create();
            this.valueDiffer.diff(formValue); // for some reason objects do not commit the 1st time
            if (this.disabled) {
                this.form.disable();
            }
            this.applyFormListener();
        }
        else {
            this.tdmForm.setContext(this.instance, this.type);
        }
        this.update();
    };
    DynamicFormComponent.prototype.onDisableChange = function () {
        if (this.form) {
            if (this.disabled) {
                this.form.disable();
            }
            else {
                this.form.enable();
            }
        }
    };
    DynamicFormComponent.prototype.updateOverrides = function () {
        var match = this.overrides.find(function (ow) { return ow.isCatchAll && !ow.vType; });
        // we update the wildOverride, but we check if the old wildOverride was added using addOverride method (custom)
        // if so (no match and old added manually) we will leave it.
        // we do that because it's most likely we won't find template overrides when custom is set
        // it also means template wins over custom
        if (match ||
            !this.wildOverride ||
            this.wildOverride['__CUSTOM_ADD_OW__'] !== true) {
            this.wildOverride = match;
        }
        this.update();
    };
    DynamicFormComponent.prototype.update = function (notRoot) {
        var _this = this;
        if (!this.tdmForm || !this.afterInit) {
            return;
        }
        if (this.pendingUpdates > 0) {
            this.pendingUpdates += 1;
            return;
        }
        // we wmit the rendering state async
        var controlsReady = [
            new Promise(function (resolve) {
                return setTimeout(function () {
                    _this.emitRenderingState(true);
                    resolve();
                });
            })
        ];
        var controls = [];
        var controlsMap = (this.instructions = {});
        var controlsPromiseSetter = function (done) { return controlsReady.push(done); };
        this.overrideMap.clear();
        this.outletMap.clear();
        var overrides = this.overrides.toArray().concat(this.codeOverrides);
        var outlets = Array.from(this.outlets.values());
        var hiddenState = this.hiddenState && this.hiddenState.slice();
        var filterMatch = this.filterMode === 'include';
        var filter = this.filter && this.filter.slice();
        var processInstructions = function (rd) {
            var fullPath = rd.fullName;
            if (!filter ||
                _this.isStaticPathContainsPath(filter, fullPath) === filterMatch) {
                var override = overrides.find(function (o) { return o.isMatching(rd); }) || _this.wildOverride;
                if (override) {
                    _this.overrideMap.set(rd, override);
                }
                var outlet = outlets.find(function (o) { return o.isMatching(rd); });
                if (outlet) {
                    _this.outletMap.set(rd, outlet);
                }
                // update hidden state of each item
                setHidden(rd, !!(hiddenState && _this.isStaticPathContainsPath(hiddenState, fullPath)));
                controlsMap[fullPath] = rd;
                controls.push(rd);
            }
        };
        this.renderInstructions.forEach(processInstructions);
        var renderEvent = new _before_render_event_handler__WEBPACK_IMPORTED_MODULE_10__["BeforeRenderEventHandler"](controlsMap, controlsPromiseSetter, !notRoot);
        this.beforeRender.emit(renderEvent);
        this.pendingUpdates += 1;
        Promise.all(controlsReady)
            .catch(function (err) { }) // we swallow errors, these should be handled by the user
            .then(function () {
            _this.pendingUpdates -= 1;
            if (_this.pendingUpdates > 0) {
                _this.pendingUpdates = 0;
                _this.update(true);
                return;
            }
            else {
                _this.instructions = controlsMap;
                _this.controls.next(controls.sort(function (a, b) { return a.ordinal - b.ordinal; }));
                _this.emitRenderingState(false);
            }
        });
    };
    /**
     * Check's if an array of paths that might be static or partial are part of the provided full static path.
     * For example: pathList: ['address'], fullPath: 'address.street' -> true
     *
     * TODO: This is called from the update() method and can be improved.
     * because it use a RenderInstruction it has the full path as an array so we can flag levels so next call to deep
     * a nested item will fail on the spot cause it's first level was blocked.
     * e.g. if user blocked 'address' and next item is 'address.name' or 'address.x.y.z' it will fail on the spot because
     * all of the address object is blocked. Current state is full check for all children of address.
     */
    DynamicFormComponent.prototype.isStaticPathContainsPath = function (pathList, fullPath) {
        var idx = pathList.findIndex(function (p) { return p === fullPath || fullPath.indexOf(p + '.') === 0; });
        if (idx > -1) {
            var nextChar = fullPath[pathList[idx].length];
            return !nextChar || nextChar === '.';
        }
        return false;
    };
    DynamicFormComponent.prototype.emitRenderingState = function (state) {
        if (this.rendering$.getValue() === !state) {
            this.rendering$.next(state);
        }
    };
    DynamicFormComponent.prototype.applyFormListener = function () {
        var _this = this;
        var freeze;
        this.tdmForm.propNotifyHandler = this;
        var s = this.tdmForm.form.valueChanges.subscribe(function (formValue) {
            var diff = _this.valueDiffer.diff(formValue);
            // we diff before freeze check so we won't pile changes to next step.
            if (freeze || _this.freezeValueChanges) {
                return;
            }
            if (diff) {
                var arr_1 = [];
                diff.forEachChangedItem(function (change) {
                    if (_this.hotBind === true) {
                        _this.instance[change.key] = change.currentValue;
                    }
                    if (_this.isFlattenedProp(change.key)) {
                        arr_1.push.apply(arr_1, _this.drillDownChange(change, [change.key]));
                    }
                    else {
                        arr_1.push(change);
                    }
                });
                if (arr_1.length > 0) {
                    freeze = true;
                    _this.valueChanges.next(arr_1);
                    freeze = false;
                }
            }
        });
        this.subscriptions.push(s);
    };
    DynamicFormComponent.prototype.isFlattenedProp = function (key, level) {
        if (level === void 0) { level = 0; }
        return this.tdmForm.renderData.some(function (r) { return !!r.flattened && r.flattened[level] === key; });
    };
    /**
     * Drills down a change in an object of a `flattened` property and returns the changes in the object.
     * The drill down is recursive so nested flattened properties will reflect the changes as well.
     *
     * The `key` of each change will be in the dot notation format.
     *
     * ## Why?
     * The form `valueChanges` stream will emit changes to controls on the first level, if a nested control
     * (i.e FormGroup or FormArray) has child that changed the stream will not reflect that and will only emit an event
     * for the top-level control itself.
     *
     * This resolution is an issue when using flattened rendering.
     * While UI shows a flat form the underlying structure is left intact and each flattened property gets a `FormGroup`
     * attached to it, emitting [[DynamicFormComponent.valueChanges]] events for flattened properties will have low
     * resolution because the change event will include the top-level key only and the current/previous values will be
     * the top-level objects themselves and not the actual child value that changed.
     *
     * To enhance the resolution this method will drill down the value of a change to find the internal changes in the
     * object and return them, this is done by diffing the previous value with the current value.
     * Each drill down is recursive so a flattened object with a nested flattened object will also get proper resolution.
     *
     * You must call this function with a change for a property that is known to be defined as flattened and include
     * it in the `path` parameter as the first (and only) item.
     *
     * > Make sure not to confuse flattened nested objects with nested objects that are not defined as flattened by the
     * user, those will not apply here.
     * @param change
     * @param path
     */
    DynamicFormComponent.prototype.drillDownChange = function (change, path) {
        var _this = this;
        var result = [];
        if (change.previousValue) {
            var differ = this.kvDiffers.find(change.previousValue).create();
            differ.diff(change.previousValue);
            var diff = differ.diff(change.currentValue);
            if (diff) {
                diff.forEachChangedItem(function (c) {
                    if (_this.isFlattenedProp(c.key, path.length)) {
                        result.push.apply(result, _this.drillDownChange(c, path.concat([c.key])));
                    }
                    else {
                        c = Object.create(c, {
                            deep: { value: true },
                            key: { value: path.join('.') + ("." + c.key) }
                        });
                        result.push(c);
                    }
                });
            }
        }
        else if (change.currentValue) {
            change = Object.create(change, {
                deep: { value: true },
                key: { value: path.join('.') + ("." + change.key) }
            });
            result.push(change);
        }
        return result;
    };
    DynamicFormComponent.prototype.setNativeValidation = function () {
        if (this.formElRef) {
            if (this._ngNativeValidate === true) {
                this.renderer.removeAttribute(this.formElRef.nativeElement, 'novalidate');
            }
            else {
                this.renderer.setAttribute(this.formElRef.nativeElement, 'novalidate', '');
            }
        }
    };
    DynamicFormComponent.prototype.onStateChange = function (type, state) {
        var differ = this.stateDiffer[type];
        if (!state.currentValue && differ) {
            var diff = differ.diff([]);
            if (diff) {
                this.handleDiff(type, diff);
            }
            differ = undefined;
        }
        else if (!state.previousValue && state.currentValue) {
            differ = this.itDiffers.find(state.currentValue).create();
        }
        this.stateDiffer[type] = differ;
    };
    DynamicFormComponent.prototype.handleDiff = function (type, diff) {
        var _this = this;
        switch (type) {
            case 'disabled':
                this.freezeValueChanges = true;
                diff.forEachAddedItem(function (record) { return _this.getControl(record.item).disable(); });
                diff.forEachRemovedItem(function (record) {
                    return _this.getControl(record.item).enable();
                });
                this.freezeValueChanges = false;
                break;
            case 'filter':
                this.update();
                break;
            case 'hidden':
                diff.forEachAddedItem(function (record) {
                    var item = _this.findRenderInstructionByKey(record.item);
                    if (item && setHidden(item, true)) {
                        _this.update();
                    }
                });
                diff.forEachRemovedItem(function (record) {
                    var item = _this.findRenderInstructionByKey(record.item);
                    if (item && setHidden(item, false)) {
                        _this.update();
                    }
                });
                break;
        }
    };
    /**
     * Find's a RenderInstruction using the provided static property path.
     * Note that a property path might point to a virtual RenderInstruction, such that does not actually render in the UI
     * but has children that does.
     */
    DynamicFormComponent.prototype.findRenderInstructionByKey = function (dotProperty) {
        for (var _i = 0, _a = this.controls.value; _i < _a.length; _i++) {
            var c = _a[_i];
            var fullPath = c.fullName;
            if (fullPath.indexOf(dotProperty) > -1) {
                var nextChar = fullPath[dotProperty.length];
                if (!nextChar) {
                    return c;
                }
                else if (nextChar === '.') {
                    var len = fullPath.substr(dotProperty.length + 1).split('.').length;
                    while (len-- > 0) {
                        c = c.parent;
                    }
                    return c;
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"])(_dynamic_form_override_directive__WEBPACK_IMPORTED_MODULE_9__["DynamicFormOverrideDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"])
    ], DynamicFormComponent.prototype, "overrides", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('formElRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])
    ], DynamicFormComponent.prototype, "formElRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        __metadata("design:type", String)
    ], DynamicFormComponent.prototype, "formClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        __metadata("design:type", Boolean)
    ], DynamicFormComponent.prototype, "hotBind", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DynamicFormComponent.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicFormComponent.prototype, "ngNativeValidate", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicFormComponent.prototype, "model", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        __metadata("design:type", DynamicFormComponent),
        __metadata("design:paramtypes", [DynamicFormComponent])
    ], DynamicFormComponent.prototype, "slaveOf", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        __metadata("design:type", String)
    ], DynamicFormComponent.prototype, "filterMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "disabledState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "hiddenState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "valueChanges", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "beforeRender", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], DynamicFormComponent.prototype, "renderState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], DynamicFormComponent.prototype, "rendererEvent", void 0);
    DynamicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'dynamic-form',
            template: __webpack_require__(/*! ./dynamic-form.component.html */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_default_renderer__WEBPACK_IMPORTED_MODULE_6__["FORM_CONTROL_COMPONENT"])),
        __metadata("design:paramtypes", [_tdm_model_form_index__WEBPACK_IMPORTED_MODULE_7__["TDMModelFormService"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"],
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"],
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());

/**
 * Set's the state of the display property in the LocalRenderInstruction.
 * Take's into consideration parent's state when computing the child's state.
 * returns `true` when the operation included changes in children
 */
function setHidden(ri, value) {
    if (ri.hidden !== value) {
        ri._dSelf = value;
        ri.hidden = ri._dSelf || ri._dParent;
        ri.markAsChanged();
        return tryRunOnChildren(ri, ri._dSelf);
    }
    return false;
}
function setHiddenParent(ri, value) {
    ri._dParent = value;
    ri.hidden = ri._dSelf || ri._dParent;
    ri.markAsChanged();
    tryRunOnChildren(ri, value);
}
function tryRunOnChildren(ri, value) {
    var children = ri.isVirtual
        ? ri.virtualChildren
        : ri.isArray ? ri.children : undefined;
    if (children) {
        children.forEach(function (child) { return setHiddenParent(child, value); });
        return true;
    }
}


/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/index.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/dynamic-forms/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: DynamicFormComponent, DynamicFormOverrideDirective, DynamicFormControlDirective, DynamicControlOutletDirective, DynamicFormArrayComponent, DynamicFormArrayDirective, ForFormArrayDirective, BeforeRenderEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-form.component */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return _dynamic_form_component__WEBPACK_IMPORTED_MODULE_0__["DynamicFormComponent"]; });

/* harmony import */ var _dynamic_form_override_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form-override.directive */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-override.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormOverrideDirective", function() { return _dynamic_form_override_directive__WEBPACK_IMPORTED_MODULE_1__["DynamicFormOverrideDirective"]; });

/* harmony import */ var _dynamic_form_control_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-form-control.directive */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-control.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormControlDirective", function() { return _dynamic_form_control_directive__WEBPACK_IMPORTED_MODULE_2__["DynamicFormControlDirective"]; });

/* harmony import */ var _dynamic_control_outlet_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-control-outlet.directive */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-control-outlet.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicControlOutletDirective", function() { return _dynamic_control_outlet_directive__WEBPACK_IMPORTED_MODULE_3__["DynamicControlOutletDirective"]; });

/* harmony import */ var _dynamic_form_array_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-form-array.component */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-array.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormArrayComponent", function() { return _dynamic_form_array_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormArrayComponent"]; });

/* harmony import */ var _dynamic_form_array_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-form-array.directive */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/dynamic-form-array.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormArrayDirective", function() { return _dynamic_form_array_directive__WEBPACK_IMPORTED_MODULE_5__["DynamicFormArrayDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForFormArrayDirective", function() { return _dynamic_form_array_directive__WEBPACK_IMPORTED_MODULE_5__["ForFormArrayDirective"]; });

/* harmony import */ var _before_render_event_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./before-render-event-handler */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/before-render-event-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeRenderEventHandler", function() { return _before_render_event_handler__WEBPACK_IMPORTED_MODULE_6__["BeforeRenderEventHandler"]; });










/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/module.ts":
/*!***************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/module.ts ***!
  \***************************************************************************************************/
/*! exports provided: DynamicFormsModule, TDMFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormsModule", function() { return DynamicFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDMFormsModule", function() { return TDMFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tdm-model-form/index */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/index.ts");
/* harmony import */ var _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-forms/index */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/index.ts");
/* harmony import */ var _default_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-renderer */ "../../libs/ngx-dynamic-forms/src/lib/default-renderer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DynamicFormsModule = /** @class */ (function () {
    function DynamicFormsModule() {
    }
    DynamicFormsModule_1 = DynamicFormsModule;
    /**
     * Registers the module with and required services and with the default form control renderer.
     */
    DynamicFormsModule.forRoot = function (formComponent) {
        return {
            ngModule: DynamicFormsModule_1,
            providers: [
                _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_3__["TDMModelFormService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ANALYZE_FOR_ENTRY_COMPONENTS"],
                    multi: true,
                    useValue: [{ component: formComponent }]
                },
                { provide: _default_renderer__WEBPACK_IMPORTED_MODULE_5__["FORM_CONTROL_COMPONENT"], useValue: formComponent }
            ]
        };
    };
    /**
     * Registers the module with the default form control renderer.
     * Use this when adding to child modules which requires a different renderer.
     */
    DynamicFormsModule.forChild = function (formComponent) {
        return {
            ngModule: DynamicFormsModule_1,
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ANALYZE_FOR_ENTRY_COMPONENTS"],
                    multi: true,
                    useValue: [{ component: formComponent }]
                },
                { provide: _default_renderer__WEBPACK_IMPORTED_MODULE_5__["FORM_CONTROL_COMPONENT"], useValue: formComponent }
            ]
        };
    };
    DynamicFormsModule = DynamicFormsModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_3__["TDMModelFormDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormOverrideDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormControlDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicControlOutletDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormArrayComponent"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormArrayDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["ForFormArrayDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            exports: [
                _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_3__["TDMModelFormDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormOverrideDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormControlDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicControlOutletDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormArrayComponent"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormArrayDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["ForFormArrayDirective"],
                _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]
            ]
        })
    ], DynamicFormsModule);
    return DynamicFormsModule;
    var DynamicFormsModule_1;
}());

/**
 * @deprecated Object renamed, use DynamicFormsModule instead
 */
var TDMFormsModule = DynamicFormsModule;


/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/ngx-dynamic-forms.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/ngx-dynamic-forms.ts ***!
  \**************************************************************************************************************/
/*! exports provided: FormModel, FormProp, ngFormsMapper, NgFormsBoundMapper, RenderInstruction, TDMModelFormDirective, TDMModelFormService, TDMModelForm, FORM_CONTROL_COMPONENT, DynamicFormComponent, DynamicFormControlDirective, DynamicFormOverrideDirective, DynamicFormArrayComponent, ForFormArrayDirective, BeforeRenderEventHandler, DynamicFormsModule, TDMFormsModule, clone, objectToForm, createControl, createChildFormEvent, Prop, Model, Exclude, Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/index */ "../../libs/ngx-dynamic-forms/src/lib/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModel", function() { return _core_index__WEBPACK_IMPORTED_MODULE_1__["FormModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormProp", function() { return _core_index__WEBPACK_IMPORTED_MODULE_1__["FormProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ngFormsMapper", function() { return _core_index__WEBPACK_IMPORTED_MODULE_1__["ngFormsMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgFormsBoundMapper", function() { return _core_index__WEBPACK_IMPORTED_MODULE_1__["NgFormsBoundMapper"]; });

/* harmony import */ var _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tdm-model-form/index */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderInstruction", function() { return _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_2__["RenderInstruction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelFormDirective", function() { return _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_2__["TDMModelFormDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelFormService", function() { return _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_2__["TDMModelFormService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelForm", function() { return _tdm_model_form_index__WEBPACK_IMPORTED_MODULE_2__["TDMModelForm"]; });

/* harmony import */ var _default_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-renderer */ "../../libs/ngx-dynamic-forms/src/lib/default-renderer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORM_CONTROL_COMPONENT", function() { return _default_renderer__WEBPACK_IMPORTED_MODULE_3__["FORM_CONTROL_COMPONENT"]; });

/* harmony import */ var _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-forms/index */ "../../libs/ngx-dynamic-forms/src/lib/dynamic-forms/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormControlDirective", function() { return _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormControlDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormOverrideDirective", function() { return _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormOverrideDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormArrayComponent", function() { return _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["DynamicFormArrayComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForFormArrayDirective", function() { return _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["ForFormArrayDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeRenderEventHandler", function() { return _dynamic_forms_index__WEBPACK_IMPORTED_MODULE_4__["BeforeRenderEventHandler"]; });

/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module */ "../../libs/ngx-dynamic-forms/src/lib/module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormsModule", function() { return _module__WEBPACK_IMPORTED_MODULE_5__["DynamicFormsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMFormsModule", function() { return _module__WEBPACK_IMPORTED_MODULE_5__["TDMFormsModule"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "../../libs/ngx-dynamic-forms/src/lib/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectToForm", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["objectToForm"]; });

/* harmony import */ var _create_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-control */ "../../libs/ngx-dynamic-forms/src/lib/create-control.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createControl", function() { return _create_control__WEBPACK_IMPORTED_MODULE_7__["createControl"]; });

/* harmony import */ var _create_child_form_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-child-form-event */ "../../libs/ngx-dynamic-forms/src/lib/create-child-form-event.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createChildFormEvent", function() { return _create_child_form_event__WEBPACK_IMPORTED_MODULE_8__["createChildFormEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return _tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _tdm_core__WEBPACK_IMPORTED_MODULE_0__["Model"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exclude", function() { return _tdm_core__WEBPACK_IMPORTED_MODULE_0__["Exclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _tdm_core__WEBPACK_IMPORTED_MODULE_0__["Type"]; });










// re-export common types from core.



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/prop-notify.ts":
/*!********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/prop-notify.ts ***!
  \********************************************************************************************************/
/*! exports provided: PropNotify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropNotify", function() { return PropNotify; });
var IN_FLIGHT_PROP_CHANGE = new WeakMap();
function PropNotify() {
    return function (target, propertyKey) {
        var __propertyKey = "__" + propertyKey; // tslint:disable-line
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[__propertyKey];
            },
            set: function (curr) {
                var _this = this;
                if (this[__propertyKey] !== curr) {
                    var isFirst = !(__propertyKey in this);
                    var prev = this[__propertyKey];
                    this[__propertyKey] = curr;
                    if (this.onPropChange) {
                        var changes_1 = IN_FLIGHT_PROP_CHANGE.get(this);
                        if (!changes_1) {
                            changes_1 = {};
                            IN_FLIGHT_PROP_CHANGE.set(this, changes_1);
                            Promise.resolve(null).then(function () {
                                IN_FLIGHT_PROP_CHANGE.delete(_this);
                                _this.onPropChange.onPropChange(_this, changes_1);
                            });
                        }
                        changes_1[propertyKey] = {
                            curr: curr,
                            prev: prev,
                            isFirst: isFirst
                        };
                        //  SYMBOL VERSION
                        //
                        // const IN_PROP_CHANGE = Symbol('IN_PROP_CHANGE');
                        //
                        // if (!this[IN_PROP_CHANGE]) {
                        //   this[IN_PROP_CHANGE] = {};
                        //   Promise.resolve(null).then( () => {
                        //     const changes = this[IN_PROP_CHANGE];
                        //     this[IN_PROP_CHANGE] = false;
                        //     this.onPropChange.onPropChange(this, changes);
                        //   });
                        // }
                        // this[IN_PROP_CHANGE][propertyKey] = {
                        //   curr,
                        //   prev,
                        //   isFirst
                        // };
                    }
                }
            }
        });
    };
}


/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/index.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/tdm-model-form/index.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: RenderInstruction, TDMModelForm, TDMModelFormDirective, TDMModelFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-instruction */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/render-instruction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderInstruction", function() { return _render_instruction__WEBPACK_IMPORTED_MODULE_0__["RenderInstruction"]; });

/* harmony import */ var _tdm_model_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tdm-model-form */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelForm", function() { return _tdm_model_form__WEBPACK_IMPORTED_MODULE_1__["TDMModelForm"]; });

/* harmony import */ var _tdm_model_form_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tdm-model-form.directive */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelFormDirective", function() { return _tdm_model_form_directive__WEBPACK_IMPORTED_MODULE_2__["TDMModelFormDirective"]; });

/* harmony import */ var _tdm_model_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tdm-model-form.service */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelFormService", function() { return _tdm_model_form_service__WEBPACK_IMPORTED_MODULE_3__["TDMModelFormService"]; });







/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/render-instruction.ts":
/*!******************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/tdm-model-form/render-instruction.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: RenderInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderInstruction", function() { return RenderInstruction; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_metadata_form_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/metadata/form-prop */ "../../libs/ngx-dynamic-forms/src/lib/core/metadata/form-prop.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation */ "../../libs/ngx-dynamic-forms/src/lib/validation.ts");
/* harmony import */ var _prop_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../prop-notify */ "../../libs/ngx-dynamic-forms/src/lib/prop-notify.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Render definition with the name of the control.
 *
 * The internal logic for handling render instruction is array based (due to ordering) but the
 * user-defined `RenderDef` is object based (hash) and does not require name (name inferred from key).
 *
 * When moving user-defined render definition into an array we need to preserve the name, this interface
 * defines the contract.
 *
 * @internal
 */
var RenderInstruction = /** @class */ (function () {
    function RenderInstruction(name, formProp, parent) {
        if (formProp === void 0) { formProp = _core_metadata_form_prop__WEBPACK_IMPORTED_MODULE_1__["FormPropMetadata"].EMPTY; }
        this.name = name;
        this.formProp = formProp;
        this.parent = parent;
        if (formProp.required) {
            this.required = true;
        }
        if (formProp.validators) {
            this.validators = formProp.validators;
        }
        if (formProp.asyncValidators) {
            this.asyncValidators = formProp.asyncValidators;
        }
        Object.assign(this, formProp.render);
        this.hash = this;
    }
    Object.defineProperty(RenderInstruction.prototype, "isChildForm", {
        get: function () {
            return this.formProp.childForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderInstruction.prototype, "fullName", {
        /**
         * The full name.
         * The full name is usually identical to the name, except for instructions that are part of a `flattening` expression.
         *
         * When the instruction is part of a `flattening` expressions the full name is also refered to as the `static path`
         * The static path is used for metadata lookup, where all arrays are meaningless and only their type is required.
         *
         * > It is recommended to use the full name at all times, except for visual display purpose.
         */
        get: function () {
            var fullName = this.flattened
                ? this.flattened.join('.') + '.' + this.name
                : this.name;
            Object.defineProperty(this, 'fullName', {
                value: fullName,
                writable: false
            });
            return fullName;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Call this function when changing properties in this [[RenderInstruction]] instance, before calling
     * [[DynamicFormComponent.redraw]] or when you want a specific control to re-render.
     *
     * You can set a custom hash, you can use it to pass data between new renderer instances.
     */
    RenderInstruction.prototype.markAsChanged = function (hash) {
        this.hash = hash === this.hash ? {} : hash || {};
    };
    /**
     * A helper method that merge's (assign) the provided value into the existing `data` object.
     * If a `data` object is undefined it will create one.
     */
    RenderInstruction.prototype.mergeData = function (value) {
        this.data = Object.assign(this.data || {}, value);
    };
    /**
     * A helper method that return the value of the property `key` in `this.data`
     */
    RenderInstruction.prototype.getData = function (key) {
        return this.data && this.data[key];
    };
    /**
     * Returns the run-time path for this rendering item, relative to the root control.
     * The run-time path is the path for form lookup which can be used in [[AbstractControl.get]].
     *
     * Because an @angular form control does not know it's name but does know it's parent we can use the rendering
     * instructions to get the name and move up to the parent up to root to get the full path.
     * If we find a parent that is an array we lookup the index and use it instead of the name.
     */
    RenderInstruction.prototype.getRuntimePath = function (control) {
        var parent = control.parent;
        if (!parent || parent === control.root) {
            return this.name;
        }
        else {
            var name_1 = parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]
                ? this.name + "." + parent.controls.indexOf(control)
                : this.name;
            return this.parent
                ? this.parent.getRuntimePath(parent) + "." + name_1
                : name_1;
        }
    };
    /**
     * Use this method to resolve the `FormControl` instance from children of `FormArray`.
     *
     * If you will not use this method to resolve the form control and use the child control directly it will create
     * issues when using flattening expressions with arrays.
     */
    RenderInstruction.prototype.resolveFormArrayChild = function (control) {
        return this._arrayPath ? control.get(this._arrayPath) : control;
    };
    RenderInstruction.prototype.getValidators = function () {
        return Object(_validation__WEBPACK_IMPORTED_MODULE_2__["getValidators"])(this, this);
    };
    __decorate([
        Object(_prop_notify__WEBPACK_IMPORTED_MODULE_3__["PropNotify"])(),
        __metadata("design:type", Boolean)
    ], RenderInstruction.prototype, "required", void 0);
    __decorate([
        Object(_prop_notify__WEBPACK_IMPORTED_MODULE_3__["PropNotify"])(),
        __metadata("design:type", Number)
    ], RenderInstruction.prototype, "ordinal", void 0);
    __decorate([
        Object(_prop_notify__WEBPACK_IMPORTED_MODULE_3__["PropNotify"])(),
        __metadata("design:type", String)
    ], RenderInstruction.prototype, "label", void 0);
    __decorate([
        Object(_prop_notify__WEBPACK_IMPORTED_MODULE_3__["PropNotify"])(),
        __metadata("design:type", Object)
    ], RenderInstruction.prototype, "vType", void 0);
    __decorate([
        Object(_prop_notify__WEBPACK_IMPORTED_MODULE_3__["PropNotify"])(),
        __metadata("design:type", Object)
    ], RenderInstruction.prototype, "validators", void 0);
    __decorate([
        Object(_prop_notify__WEBPACK_IMPORTED_MODULE_3__["PropNotify"])(),
        __metadata("design:type", Object)
    ], RenderInstruction.prototype, "asyncValidators", void 0);
    return RenderInstruction;
}());



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.directive.ts":
/*!************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.directive.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: TDMModelFormDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDMModelFormDirective", function() { return TDMModelFormDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_model_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tdm-model-form.service */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.service.ts");
/* harmony import */ var _tdm_model_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tdm-model-form */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * A helper Directive to expose TDMModelForm within a template.
 *
 * This is an alternate method for create forms on a template. Instead of using an injected
 * TDMModelFormService instance to create instances of TDMModelForm you can use this directive.
 *
 * @example
 * ```ts
 * <div #tdmForm="tdmModelForm" [tdmModelForm]="user">
 *   <form [formGroup]="tdmForm.form" novalidate>
 *     <div *ngFor="let item of tdmForm.renderData; trackBy: tdmForm.trackBy" class="row">
 *       <div [ngSwitch]="item.vType" class="row">
 *         <input *ngSwitchCase="'boolean'" type='checkbox' [formControlName]="item.name">{{ item.label }} />
 *         <input *ngSwitchCase="'text'" type='text' [formControlName]="item.name">{{ item.label }} />
 *         <input *ngSwitchCase="'number'" type='number' [formControlName]="item.name">{{ item.label }} />
 *      </div>
 *   </form>
 * </div>
 * ```
 */
var TDMModelFormDirective = /** @class */ (function (_super) {
    __extends(TDMModelFormDirective, _super);
    function TDMModelFormDirective(modelFormService) {
        return _super.call(this, modelFormService) || this;
    }
    Object.defineProperty(TDMModelFormDirective.prototype, "tdmModelForm", {
        set: function (value) {
            var _a = Array.isArray(value)
                ? value
                : [value, value.constructor], instance = _a[0], type = _a[1];
            this.setContext(instance, type);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TDMModelFormDirective.prototype, "tdmModelForm", null);
    TDMModelFormDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tdmModelForm]',
            exportAs: 'tdmModelForm'
        }),
        __metadata("design:paramtypes", [_tdm_model_form_service__WEBPACK_IMPORTED_MODULE_1__["TDMModelFormService"]])
    ], TDMModelFormDirective);
    return TDMModelFormDirective;
}(_tdm_model_form__WEBPACK_IMPORTED_MODULE_2__["TDMModelForm"]));



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.service.ts":
/*!**********************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.service.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: TDMModelFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDMModelFormService", function() { return TDMModelFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _tdm_model_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tdm-model-form */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.ts");
/* harmony import */ var _render_instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-instruction */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/render-instruction.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/index */ "../../libs/ngx-dynamic-forms/src/lib/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





function createRI(formProp, name, assign, parent) {
    var renderInstructions = new _render_instruction__WEBPACK_IMPORTED_MODULE_3__["RenderInstruction"](name, formProp, parent);
    Object.assign(renderInstructions, assign);
    return renderInstructions;
}
function createVRI(formProp, name, parent) {
    return createRI(formProp, name, { isPrimitive: false, isVirtual: true, virtualChildren: [] }, parent);
}
/**
 * A service for creating new instances of TDMModelForm
 */
var TDMModelFormService = /** @class */ (function () {
    function TDMModelFormService() {
        this.cache = new Map();
    }
    TDMModelFormService.prototype.getMeta = function (type) {
        return type
            ? _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getMetaFor(type, _core_index__WEBPACK_IMPORTED_MODULE_4__["FormModelMetadata"], true)
            : undefined;
    };
    TDMModelFormService.prototype.getInstructions = function (type) {
        return this.cache.get(type) || this._getInstructions(type);
    };
    TDMModelFormService.prototype.create = function (instance, type, formGroup) {
        var tdmModelForm = new _tdm_model_form__WEBPACK_IMPORTED_MODULE_2__["TDMModelForm"](this);
        tdmModelForm.setContext(instance, type, formGroup);
        return tdmModelForm;
    };
    /**
     * Returns a clone function for cloning [[RenderInstruction]] instances.
     * The clone function returned can be used to clone a single cycle of instructions returned from
     * [[TDMModelFormService.getInstructions]] so create a new clone function for each iteration cycle.
     *
     * We need to clone [[RenderInstruction]] because they represent metadata while a form represents a single instance
     * that re-occurs thus can not change the metadata and must use a copy.
     * Instead of recreating the metadata over and over we just use JS's prototype to create layers over the metadata that
     * act as instances while not duplicating the data.
     */
    TDMModelFormService.prototype.createRICloneFactory = function (propChange) {
        // We clone a [[RenderInstruction]] by creating a new layer in the prototype chain so the current layer can not be
        // changed by assigning but can be used when retrieving, this saves space and time.
        // Usually Object.create() is the only thing we need but there are 2 special cases: Arrays and `flatten` expressions
        // Array's and `flatten` expressions (virtual rendering instruction) which requires special attention.
        //
        // Array's represent a [[RenderInstruction]] for a property of type Array<T> where the [[RenderInstruction]]
        // instance represents the array and the `children` property in it represents a list of [[RenderInstruction]]
        // instances representing T. The children are not part of the rendering instructions, only the array it self so when
        // cloning the children are not cloned so we need to handle them internally.
        //
        // Virtual's (flatten expressions) represent a form group which get's converted into a list of [[RenderInstruction]]
        // instances with the virtual as parent but the virtual itself is never a part of the instructions.
        // So, when cloning, we also need to clone the virtual but we need to make sure not to clone it multiple times as
        // next call's will be from another child of the same virtual. We do that by using a map to make sure we are
        // cloning a virtual one time only. This is why a clone function is good for one cycle.
        // map for storing used virtual's
        var parentMap = new Map();
        var propNotifier = propChange ? { onPropChange: { value: propChange } } : undefined;
        var riClone = function (renderInstruction) {
            var rd = Object.create(renderInstruction, propNotifier);
            if (rd.isArray) {
                rd.children = rd.children.map(function (c) { return riClone(c); });
                // we take 1 child and climb up till we get to the virtual that has this array as parent
                // we set this array as that parent, replaces the before-cloned value.
                // we only need one child as it is a reference.
                var c = rd.children[0];
                while (c) {
                    if (c.parent === renderInstruction) {
                        c.parent = rd;
                        c = null;
                    }
                    else {
                        c = c.parent;
                    }
                }
            }
            else if (rd.parent && rd.parent.isVirtual) {
                var parent_1 = parentMap.get(rd.parent);
                if (!parent_1) {
                    parent_1 = riClone(rd.parent);
                    parent_1.virtualChildren = [];
                    parentMap.set(rd.parent, parent_1);
                }
                rd.parent = parent_1;
                parent_1.virtualChildren.push(rd);
            }
            return rd;
        };
        return riClone;
    };
    TDMModelFormService.prototype._getInstructions = function (type) {
        // NOTE: The logic for creating instructions is tightly coupled with the logic for cloning the instructions.
        //       Make sure changes in the logic are reflected in `createRICloner()`
        var props = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getTargetMeta(type).getValues(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["PropMetadata"]);
        var formMeta = this.getMeta(type);
        var instructions = [];
        for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
            var p = props_1[_i];
            var formProp = formMeta.getProp(p.name);
            if (!formProp) {
                instructions.push(new _render_instruction__WEBPACK_IMPORTED_MODULE_3__["RenderInstruction"](p.name));
            }
            else if (!formProp.exclude) {
                var typeMeta = formProp.rtType || p.type;
                var localInstructions = instructions;
                var name_1 = p.name;
                var parent_2 = void 0;
                var isPrimitive = !(formProp.flatten || formProp.childForm);
                if (typeMeta && typeMeta.isArray) {
                    parent_2 = createRI(formProp, name_1, {
                        isArray: true,
                        isPrimitive: isPrimitive,
                        children: (localInstructions = [])
                    });
                    instructions.push(parent_2);
                }
                if (formProp.flatten) {
                    this.applyFlatten(formProp.flatten, [name_1], localInstructions, createVRI(formProp, name_1, parent_2), parent_2 && parent_2.isArray ? 0 : undefined);
                }
                else {
                    localInstructions.push(createRI(formProp, name_1, { isPrimitive: isPrimitive }, parent_2));
                }
            }
        }
        this.cache.set(type, instructions);
        return instructions;
    };
    TDMModelFormService.prototype.applyFlatten = function (props, path, instructions, parent, 
    // -1000 should be low enough :)
    depthFromArray) {
        // -1000 should be low enough :)
        if (depthFromArray === void 0) { depthFromArray = -1000; }
        /* The `depthFromArray` marks the nested object count from the last array up in the parent tree
           The depth 0 means the immediate child of the array and so on...
           When the depth is negative (or not set) it means that there is no array ancestor.
         */
        var arrayPath = depthFromArray > 0
            ? path.slice(path.length - depthFromArray).join('.') + '.'
            : '';
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
            var key = _a[_i];
            var p = props[key];
            var isPrimitive = !(p.flatten || p.childForm);
            var isArray = p.rtType && p.rtType.isArray;
            var localInstructions = isArray
                ? []
                : instructions;
            if (p.rtType && p.rtType.isArray) {
                parent = createRI(p, key, { isArray: isArray, isPrimitive: isPrimitive, children: localInstructions }, parent);
                instructions.push(parent);
                // we set to -1 so it will bump to 0 if `p.flatten`, making the first item in depth 0 since current item is
                // the array. If no `p.flatten` then it's a primitive and we don't want `_arrayPath` for primitive arrays.
                depthFromArray = -1;
            }
            if (p.flatten) {
                var len = localInstructions.length;
                this.applyFlatten(p.flatten, path.concat([key]), localInstructions, createVRI(p, key, parent), depthFromArray + 1);
                // if localInstructions added, get the parent of the last added, it's a virtual child
                if (localInstructions.length > len) {
                    parent.virtualChildren.push(localInstructions[localInstructions.length - 1].parent);
                }
            }
            else {
                var renderInstruction = createRI(p, key, { isPrimitive: isPrimitive, flattened: path }, parent);
                parent.virtualChildren.push(renderInstruction);
                localInstructions.push(renderInstruction);
                if (depthFromArray >= 0) {
                    renderInstruction._arrayPath = arrayPath + renderInstruction.name;
                }
            }
        }
    };
    TDMModelFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TDMModelFormService);
    return TDMModelFormService;
}());



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.ts":
/*!**************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/tdm-model-form/tdm-model-form.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: TDMModelForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDMModelForm", function() { return TDMModelForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/index */ "../../libs/ngx-dynamic-forms/src/lib/core/index.ts");
/* harmony import */ var _create_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-control */ "../../libs/ngx-dynamic-forms/src/lib/create-control.ts");
/* harmony import */ var _render_instruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render-instruction */ "../../libs/ngx-dynamic-forms/src/lib/tdm-model-form/render-instruction.ts");





function getFormIsNotArrayErrorMessage(value) {
    var got = value ? 'undefined' : Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["stringify"])(value.constructor);
    return "A control can only be added to a form array instance, got " + got;
}
/**
 * Takes a path and removes all array references.
 * returns a tuple [immidiate prop name, rest of the path]
 */
function normalizeFormPath(path) {
    var isNumberRe = /^\d+$/;
    var pathArr = Array.isArray(path)
        ? path.filter(function (n) { return !Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(n); })
        : path.split('.').filter(function (v) { return !isNumberRe.test(v); });
    return [pathArr.shift(), pathArr.join('.')];
}
/**
 * A container that binds a model instance and and a `FormGroup` instance.
 *
 * This class is a facade, it simplifies the logic and low level operations required to bind a model
 * and a form:
 *   - mapping between model and form (serialization and deserialization)
 *   - exposing rendering instructions for a model (the instructions are used to render form elements)
 */
var TDMModelForm = /** @class */ (function () {
    function TDMModelForm(modelFormService) {
        this.modelFormService = modelFormService;
    }
    Object.defineProperty(TDMModelForm.prototype, "propNotifyHandler", {
        /**
         * When set, will proxy all incoming property changes from RenderInstruction to this handler.
         */
        set: function (value) {
            this.onPropChange = value.onPropChange.bind(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDMModelForm.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDMModelForm.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDMModelForm.prototype, "ready", {
        get: function () {
            return this._ready;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDMModelForm.prototype, "renderData", {
        /**
         * The render instructions for the TDMModel type of this instance.
         * @returns
         */
        get: function () {
            if (!this._renderData) {
                var clone = this.modelFormService.createRICloneFactory(this);
                this._renderData = this.modelFormService
                    .getInstructions(this.type)
                    .map(clone);
            }
            return this._renderData;
        },
        enumerable: true,
        configurable: true
    });
    TDMModelForm.prototype.onPropChange = function (ri, changes) { }; // tslint:disable-line
    /**
     * Retrieves a child control given the control's name or path.
     *
     * > This is method is just sugar for `tDMModelFormInstance.form.get(path)`
     *
     * @param path The path (runtime), relative to the root form. Accepts the same types as `AbstractControl.get`.
     * See {@link https://angular.io/api/forms/AbstractControl#get}
     */
    TDMModelForm.prototype.get = function (path) {
        return this.form.get(path);
    };
    /**
     * Retrieves the value of a child control given the control's name or path.
     *
     * > This is method is just sugar for `tDMModelFormInstance.form.get(path).value`
     *
     * @param path The path, relative to the root form. Accepts the same types as `AbstractControl.get`.
     * See {@link https://angular.io/api/forms/AbstractControl#get}
     */
    TDMModelForm.prototype.getValue = function (path) {
        var c = this.form.get(path);
        return c ? c.value : null;
    };
    TDMModelForm.prototype.getValueModel = function (path, control) {
        var pathArr = path instanceof _render_instruction__WEBPACK_IMPORTED_MODULE_4__["RenderInstruction"]
            ? path.getRuntimePath(control).split('.')
            : Array.isArray(path) ? path : path.split('.');
        var m = this.model;
        for (var _i = 0, pathArr_1 = pathArr; _i < pathArr_1.length; _i++) {
            var p = pathArr_1[_i];
            m = m[p];
            if (!m) {
                break;
            }
        }
        return m;
    };
    /**
     * Set's the provided `value` in the provided `path`. The path is applied from the root form.
     *
     * > This is method is just sugar for `tDMModelFormInstance.form.get(path).setValue(value)`
     *
     * @param path The path, relative to the root form. Accepts the same types as `AbstractControl.get`.
     * See {@link https://angular.io/api/forms/AbstractControl#get}
     * @param value The value to apply on the control retrieved from path
     * @param options
     */
    TDMModelForm.prototype.setValue = function (path, value, options) {
        this.form.get(path).setValue(value, options);
    };
    TDMModelForm.prototype.hasError = function (errorCode, path) {
        return this.form.hasError(errorCode, path);
    };
    /**
     * Sync's the model with the form.
     * When `patch` is true will perform a silent update without throwing when structure does not match.
     * Running this method is a identical to calling patchValue / setValue on the form with the model instance.
     */
    TDMModelForm.prototype.sync = function (patch, options) {
        if (patch === void 0) { patch = true; }
        if (patch) {
            this.form.patchValue(this.model, options);
        }
        else {
            this.form.setValue(this.model, options);
        }
    };
    /**
     * Reset's the form and sync's it with the model.
     *
     * This method has no effect when a hot bind is set between the model and the form, it will reset the form
     * and sync it with the model in it's current state.
     */
    TDMModelForm.prototype.reset = function (options) {
        for (var _i = 0, _a = this.renderData; _i < _a.length; _i++) {
            var r = _a[_i];
            if (r.isArray) {
                var formArray = this.get(r.fullName);
                if (this.resetFormArray(formArray, this.getValueModel(r, formArray), r.fullName)) {
                    r.markAsChanged();
                }
            }
            // TODO: move resetControl to here, with optional `path` param
            // TODO: handle standalone childForm in here
        }
        this.form.reset(this._model, options);
    };
    /**
     * Like reset but for a specific control.
     */
    TDMModelForm.prototype.resetControl = function (path) {
        var pathArr = normalizeFormPath(path);
        var value = this.getValueModel(path);
        var formProp = this.getFormProp(pathArr);
        var control = this.get(path);
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
            this.resetFormArray(control, value, pathArr.join('.'));
        }
        else if (formProp.childForm && !(control.parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"])) {
            // standalone child form will recreate itself, this will set the control to FormControl if it's null
            control.parent.setControl(formProp.name, this.createControl(pathArr.join('.'), value, false));
        }
        else {
            control.reset(value);
        }
    };
    TDMModelForm.prototype.createChildForm = function (path, model, formGroup) {
        var pathArr = normalizeFormPath(path);
        var formProp = this.getFormProp(pathArr);
        if (!formProp.childForm) {
            throw new Error("Form property metadata " + pathArr.join('.') + " for type " + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["stringify"])(this.type) + " is not a \"childForm\"");
        }
        else {
            if (!model) {
                model = new formProp.rtType.ref();
            }
            return this.modelFormService.create(model, formProp.rtType.ref, formGroup);
        }
    };
    /**
     * Create a new form control based on the type at `path`.
     * See `createControl` for details.
     *
     * @param path The path (static), relative to the root form.
     * Accepts the same types as `AbstractControl.get`. See {@link https://angular.io/api/forms/AbstractControl#get}
     *
     * @param value An existing value that represents the value of the new form control, if not set the form control will
     * have no value  (i.e. represents a new instance of the model).
     *
     * @param tryCreateNew When true and value is undefined or null, will try to create new value with the new keyword
     * using the type at the path.
     */
    TDMModelForm.prototype.createControl = function (path, value, tryCreateNew) {
        return Object(_create_control__WEBPACK_IMPORTED_MODULE_3__["createControl"])(this.type, normalizeFormPath(path), value, tryCreateNew);
    };
    /**
     * Adds a new form control to a FormArray instance at the provided path.
     * See `createControl` for details.
     *
     * This is a utility method for easy add/remove operations on UI form's with a FormArray instance.
     *
     * @param path The path (static), relative to the root form.
     * Accepts the same types as `AbstractControl.get`. See {@link https://angular.io/api/forms/AbstractControl#get}
     *
     * @param value An existing value that represents the value of the new form control, if not set the form control will
     * have no value (i.e. represents a new instance of the model).
     *
     * @param tryCreateNew When true and value is undefined or null, will try to create new value with the new keyword
     * using the type at the path.
     */
    TDMModelForm.prototype.appendControl = function (path, value, tryCreateNew) {
        var formArray = this.form.get(path);
        if (formArray instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
            // we got the instance, now move to type metadata world where all array index references, if exist, must go out.
            var pathArr = normalizeFormPath(path);
            var ctrl = Object(_create_control__WEBPACK_IMPORTED_MODULE_3__["createControl"])(this.type, pathArr, value, tryCreateNew);
            formArray.push(ctrl);
            return ctrl;
        }
        else {
            throw new Error(getFormIsNotArrayErrorMessage(formArray));
        }
    };
    /**
     * Removes a form control in the provided index from a FormArray instance at the provided path.
     *
     * This is a utility method for easy add/remove operations on UI form's with a FormArray instance.
     *
     * @param path The path, relative to the root form. Accepts the same types as `AbstractControl.get`.
     * See {@link https://angular.io/api/forms/AbstractControl#get}
     * @param query The index at the form array to remove at or a form control instance to remove from the form array.
     * @returns The removed control or undefined if nothing was removed.
     */
    TDMModelForm.prototype.removeControl = function (path, query) {
        var formArray = this.form.get(path);
        if (formArray instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
            var idx = Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(query) ? query : formArray.controls.indexOf(query);
            var ctrl = formArray.controls[idx];
            if (ctrl) {
                formArray.removeAt(idx);
            }
            return ctrl;
        }
        else {
            throw new Error(getFormIsNotArrayErrorMessage(formArray));
        }
    };
    TDMModelForm.prototype.setContext = function (instance, type, formGroup) {
        if (type instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
            formGroup = type;
            type = undefined;
        }
        if (!type) {
            type = instance.constructor;
        }
        if (this._model === instance && this._type === type) {
            return;
        }
        if (this._type !== type) {
            this._type = type;
            this.formMeta = this.modelFormService.getMeta(this._type);
        }
        if (this._model !== instance) {
            this._model = instance;
        }
        this.update(formGroup);
    };
    /**
     * A helper function for an *ngFor "trackBy" handler.
     * > It is not recommended to change the trackBy logic when using `dynamic-form` component, the change detection logic
     * is based on it.
     * @param idx
     * @param item
     * @returns
     */
    TDMModelForm.prototype.trackBy = function (idx, item) {
        return item.hash;
    };
    /**
     * Commit the form data into the model instance. (deserialize)
     *
     * Note that the response might be true even if the form was not dirty.
     * The response is always true when onlyIfDirty === false.
     * If onlyIfDirty is true and the form is NOT dirty, only then the response is false.
     *
     * @param onlyIfDirty if true will commit only if the form is dirty
     * @returns Did it commit (deserialize)
     */
    TDMModelForm.prototype.commitToModel = function (onlyIfDirty) {
        if (onlyIfDirty === true && !this.form.dirty) {
            return false;
        }
        this.mapper.deserialize();
        return true;
    };
    /**
     * @internal
     */
    TDMModelForm.prototype.bindRenderingData = function (controlRenderer, renderData) {
        controlRenderer.tdmForm = this;
        controlRenderer.fGroup = renderData.flattened
            ? this.form.get(renderData.flattened)
            : this.form;
        if (renderData.isArray) {
            controlRenderer.fArray = controlRenderer.fGroup.get(renderData.name);
        }
        else {
            controlRenderer.fControl = controlRenderer.fGroup.get(renderData.name);
        }
        controlRenderer.item = renderData;
    };
    TDMModelForm.prototype.getFormProp = function (path) {
        var formProp = _core_index__WEBPACK_IMPORTED_MODULE_2__["NgFormsSerializeMapper"].getFormProp(this.type, path);
        if (!formProp) {
            throw new Error("Could not find form property metadata for type " + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["stringify"])(this.type) + " using path " + path.join('.'));
        }
        return formProp;
    };
    TDMModelForm.prototype.update = function (formGroup) {
        if (this._type && this._model) {
            this.mapper = new _core_index__WEBPACK_IMPORTED_MODULE_2__["NgFormsBoundMapper"](this._type, this.model, formGroup);
            this.form = formGroup || this.mapper.serialize();
            this._ready = true;
        }
        else {
            this.mapper = this.form = undefined;
            this._ready = false;
        }
    };
    /**
     * FormArray's require specific reset because `@angular/forms` logic does not match the array but the content only.
     */
    TDMModelForm.prototype.resetFormArray = function (formArray, value, staticPath) {
        if (formArray.dirty || formArray.length !== (value ? value.length : 0)) {
            formArray.controls.splice(0, formArray.controls.length);
            if (value) {
                for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                    var m = value_1[_i];
                    formArray.push(this.createControl(staticPath, m));
                }
            }
            return true;
        }
        return false;
    };
    return TDMModelForm;
}());



/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/utils.ts":
/*!**************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/utils.ts ***!
  \**************************************************************************************************/
/*! exports provided: clone, objectToForm, coerceBooleanProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToForm", function() { return objectToForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");


function clone(control, value) {
    var result;
    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
        result = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value);
    }
    else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
        value = Array.isArray(value) ? value : [];
        result = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"](control.controls.map(function (c, i) { return clone(control, value[i]); }));
    }
    else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
        value = Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isJsObject"])(value) ? value : {};
        var keys = Object.keys(control.controls);
        result = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"](keys.reduce(function (controls, key) {
            controls[key] = clone(control.controls[key], value[key]);
            return controls;
        }, {}));
    }
    if (control.validator) {
        result.setValidators(control.validator);
    }
    if (control.asyncValidator) {
        result.setAsyncValidators(control.asyncValidator);
    }
    return result;
}
/**
 * Converts a plain object (POJO) to a FormGroup or an array of plain object to FormArray
 */
function objectToForm(obj, plainMapper) {
    var _this = this;
    if (!plainMapper) {
        plainMapper = new _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["PlainObjectMapper"]();
    }
    var data;
    if (Array.isArray(obj)) {
        data = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"](obj.map(function (o) { return objectToForm(o); }));
    }
    else {
        data = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        var serialized_1 = plainMapper.serialize(obj);
        Object.keys(serialized_1).forEach(function (key) {
            var value = serialized_1[key];
            var ctrl = Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(value)
                ? new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value)
                : _this.serializePlain(value);
            data.addControl(key, ctrl);
        });
    }
    return data;
}
// Taken from https://github.com/angular/material2/blob/master/src/cdk/coercion/boolean-property.ts
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}


/***/ }),

/***/ "../../libs/ngx-dynamic-forms/src/lib/validation.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-dynamic-forms/src/lib/validation.ts ***!
  \*******************************************************************************************************/
/*! exports provided: getValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidators", function() { return getValidators; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");

function normValidators(v) {
    return !v ? [] : Array.isArray(v) ? v.slice() : [v];
}
// tslint:disable-next-line
function getValidators(obj, builtIn) {
    var sync = normValidators(obj.validators);
    var async = normValidators(obj.asyncValidators);
    if (builtIn) {
        if (builtIn.required === true) {
            sync.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        }
    }
    return [
        sync.length > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose(sync) : null,
        async.length > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].composeAsync(async) : null
    ];
}


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./src/modules/@forms/shared/form-wrapper/form-wrapper.global.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/css-loader!/Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/sass-loader/lib/loader.js!./src/modules/@forms/shared/form-wrapper/form-wrapper.global.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-description {\n  margin: 16px 0; }\n\n.form-wrapper-container {\n  padding: 16px 0; }\n\n.form-wrapper {\n  background: #FFFFFF;\n  position: relative;\n  margin: 0 15px; }\n  .form-wrapper > mat-toolbar .form-title {\n    text-align: center;\n    font-size: 16px;\n    font-weight: bold; }\n  .form-wrapper > mat-toolbar > mat-progress-bar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0; }\n  .form-wrapper .custom-form-actions, .form-wrapper .form-footer {\n    margin: 10px;\n    padding: 25px; }\n\n.form-wrapper-spinner-container {\n  width: 100%;\n  text-align: center; }\n  .form-wrapper-spinner-container mat-progress-bar {\n    width: 50%;\n    min-width: 200px;\n    max-width: 600px;\n    margin: 0 auto; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/lib/css-base.js":
/*!**************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/css-loader/lib/css-base.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../node_modules/rxjs-compat/operator/toPromise.js":
/*!*********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/rxjs-compat/operator/toPromise.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
// HACK: this is here for backward compatability
// TODO(benlesh): remove this in v6.
exports.toPromise = rxjs_1.Observable.prototype.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "../../node_modules/rxjs/operator/toPromise.js":
/*!**************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/rxjs/operator/toPromise.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! rxjs-compat/operator/toPromise */ "../../node_modules/rxjs-compat/operator/toPromise.js"));
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./src/modules/@forms/shared/form-wrapper/form-wrapper.global.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/style-loader!/Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/css-loader!/Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/sass-loader/lib/loader.js!./src/modules/@forms/shared/form-wrapper/form-wrapper.global.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./form-wrapper.global.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./src/modules/@forms/shared/form-wrapper/form-wrapper.global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/urls.js":
/*!************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/style-loader/lib/urls.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/modules/@forms/forms-app/__tdm-code__.ts":
/*!******************************************************!*\
  !*** ./src/modules/@forms/forms-app/__tdm-code__.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{"file":"FORMS_SAMPLE.html","lang":"html","section":"templateDriven","code":"<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> (<span class=\"hljs-attr\">ngSubmit</span>)=<span class=\"hljs-string\">\"onSubmit()\"</span> #<span class=\"hljs-attr\">heroForm</span>=<span class=\"hljs-string\">\"ngForm\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"name\"</span>&gt;</span>Name<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-control\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"name\"</span>\n           <span class=\"hljs-attr\">required</span>\n           [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"model.name\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"name\"</span>\n           #<span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"ngModel\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> [<span class=\"hljs-attr\">hidden</span>]=<span class=\"hljs-string\">\"name.valid || name.pristine\"</span>\n         <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"alert alert-danger\"</span>&gt;</span>\n      Name is required\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"alterEgo\"</span>&gt;</span>Alter Ego<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-control\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"alterEgo\"</span>\n           [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"model.alterEgo\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"alterEgo\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"power\"</span>&gt;</span>Hero Power<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">select</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-control\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"power\"</span>\n            <span class=\"hljs-attr\">required</span>\n            [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"model.power\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"power\"</span>\n            #<span class=\"hljs-attr\">power</span>=<span class=\"hljs-string\">\"ngModel\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> *<span class=\"hljs-attr\">ngFor</span>=<span class=\"hljs-string\">\"let pow of powers\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"pow\"</span>&gt;</span>{{pow}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">select</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> [<span class=\"hljs-attr\">hidden</span>]=<span class=\"hljs-string\">\"power.valid || power.pristine\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"alert alert-danger\"</span>&gt;</span>\n      Power is required\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"submit\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn btn-success\"</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"!heroForm.form.valid\"</span>&gt;</span>Submit<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"button\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn btn-default\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"newHero(); heroForm.reset()\"</span>&gt;</span>New Hero<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>"},{"file":"FORMS_SAMPLE.html","lang":"html","section":"dynamic","code":"<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">dynamic-form</span> [<span class=\"hljs-attr\">model</span>]=<span class=\"hljs-string\">\"model\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">dynamic-form</span>&gt;</span>"},{"file":"FEATURES.md","lang":"md","section":"UIAgnostic","code":"<p>Weather you use material, bootstrap, custom made or any other framework\nout there, the library will work with it.</p>\n","title":"UI Agnostic"},{"file":"FEATURES.md","lang":"md","section":"VirtualGroups","code":"<p>Split fields and show in different areas, e.g same model, multiple\nsection with a header for each.</p>\n","title":"Virtual Groups"},{"file":"FEATURES.md","lang":"md","section":"HideDisableExclude","code":"<p>Programmatically control the state of a form, react to changes in value\nor state and trigger hide, disable or remove to form controls.</p>\n","title":"Hide / Disable / Exclude"},{"file":"FEATURES.md","lang":"md","section":"HotColdBinding","code":"<p>By default your model is disconnected from the form until committed.<br>You can opt-in for hot binding where a form change is synced to the model in real time.</p>\n","title":"Hot / Cold Binding"},{"file":"FEATURES.md","lang":"md","section":"CustomTemplates","code":"<p>Form control templates are defined once, for all Form instances.<br>When you need local customization you can override a specific field or\nthe default field for a specific dynamic form instance.</p>\n","title":"Custom Templates"},{"file":"FEATURES.md","lang":"md","section":"FlexibleFields","code":"<p>A form&#39;s field definitions are static, displaying identical component.</p>\n<p>Some scenarios require flexibility, when the display change based on\nsome logic, state or value.</p>\n<p>For example, a select component with options fetched from a server or a\nnumeric component that might change to string based on the locale.</p>\n","title":"Flexible Fields"},{"file":"FEATURES.md","lang":"md","section":"AsynchronousRendering","code":"<p>Rendering of fields is synchronous by default.</p>\n<p>You opt-in for an async rendering or a field/s.</p>\n<p>For example, a select component showing a list of users, fetched from a\nserver.</p>\n<blockquote>\n<p>The form will notify when it&#39;s ready and when it&#39;s not, so you can\nshow a nice spinner.</p>\n</blockquote>\n","title":"Asynchronous Rendering"},{"file":"FEATURES.md","lang":"md","section":"ComplexDataStructures","code":"<p>Working with data, sometime we need to adapt to complex structure, the\nfollowing is supported:</p>\n<h3><a id=\"flattening\" class=\"anchor\" href=\"#flattening\"><span class=\"header-link\"></span></a>Flattening</h3><p>Transforming a complex nested object so it can render as a flat object.</p>\n<h3><a id=\"arrays\" class=\"anchor\" href=\"#arrays\"><span class=\"header-link\"></span></a>Arrays</h3><p>Displaying lists including notification pipeline for array related\noperations (add/remove/move).</p>\n<h3><a id=\"child-forms\" class=\"anchor\" href=\"#child-forms\"><span class=\"header-link\"></span></a>Child Forms</h3><p>When a model has a reference to an other model, they can both render\ninto forms.</p>\n","title":"Complex Data Structures"},{"file":"model.ts","lang":"ts","section":"DEMO-1","code":"<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> UIDeveloper {\n  name: <span class=\"hljs-built_in\">string</span>;\n\n  yearOfBirth: <span class=\"hljs-built_in\">number</span>;\n\n  gender: <span class=\"hljs-string\">'male'</span> | <span class=\"hljs-string\">'female'</span> | <span class=\"hljs-string\">'other'</span>;\n}","title":"UI Developer"}]

/***/ }),

/***/ "./src/modules/@forms/forms-app/forms-app.component.html":
/*!***************************************************************!*\
  !*** ./src/modules/@forms/forms-app/forms-app.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-package-welcome title=\"Dynamic Forms\"\n                     description=\"A metadata driven, dynamic forms library for angular. Powerful, typed, robust.\"\n                     buttonText=\"TUTORIAL >>\"\n                     buttonLink=\"./tutorial/introduction\"\n                     name=\"ngx-dynamic-forms\"\n                     [version]=\"version\" [ngVersion]=\"ngVersion\"\n                     [deps]=\"['tixin', 'core']\">\n</tdm-package-welcome>\n<div class=\"tdm-page\">\n  <div class=\"tdm-page-content\">\n    <div>\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n        <div fxFlex=\"100%\" class=\"center-text\">\n          <div class=\"tldr-header\">\n            From <b>static class instance</b> to <b>dynamic form</b> and back\n          </div>\n        </div>\n        <tdm-markdown-view fxFlex=\"45%\" [code]=\"(code | tdmCode:[{file: 'model.ts', section: 'DEMO-1'}])[0]\"></tdm-markdown-view>\n\n        <div fxFlex=\"10%\" class=\"center-text\">\n          <mat-icon style=\"font-size: 48px\">compare_arrows</mat-icon>\n        </div>\n        <div fxFlex=\"45%\">\n          <!--@tdm-example:TDM-DEMO-->\n          <dynamic-form [model]=\"model\"></dynamic-form>\n          <!--@tdm-example:TDM-DEMO-->\n        </div>\n      </div>\n\n      <tdm-markdown-view><h1 class=\"center-text\">Features</h1></tdm-markdown-view>\n      <tdm-feature-list [features]=\"features\"></tdm-feature-list>\n\n      <tdm-markdown-view>\n        <h1 class=\"center-text\">Why</h1>\n        <h4>Quoting from the angular documentation:</h4>\n        <blockquote>\n          <p>Building handcrafted forms can be costly and time-consuming, especially if you need a great number of them, they're similar to each other, and they change frequently to meet rapidly changing business and regulatory requirements.</p>\n          <p><b>It may be more economical to create the forms dynamically, based on metadata that describes the business object model.</b></p>\n        </blockquote>\n      </tdm-markdown-view>\n\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n        <div fxFlex=\"100%\" class=\"center-text\">\n          <div class=\"tldr-header\">\n            Simplify component code & templates\n          </div>\n        </div>\n        <div fxFlex=\"45%\" style=\"height: 200px\">\n          <tdm-markdown-view overflowContainer\n                             [code]=\"(code | tdmCode:[{file: 'FORMS_SAMPLE.html', section: 'templateDriven'}])[0]\">\n          </tdm-markdown-view>\n        </div>\n        <div fxFlex=\"10%\" class=\"center-text\">\n          <mat-icon style=\"font-size: 48px\">keyboard_arrow_right</mat-icon>\n        </div>\n        <tdm-markdown-view fxFlex=\"45%\" [code]=\"(code | tdmCode:[{file: 'FORMS_SAMPLE.html', section: 'dynamic'}])[0]\"></tdm-markdown-view>\n\n        <div fxFlex=\"100%\" class=\"center-text\">\n          <div class=\"tldr-header\">\n            Unify forms, remove clutter and inconsistency, refactor from a single source\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/modules/@forms/forms-app/forms-app.component.scss":
/*!***************************************************************!*\
  !*** ./src/modules/@forms/forms-app/forms-app.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.tldr-header {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 16px 0;\n  color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/modules/@forms/forms-app/forms-app.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/@forms/forms-app/forms-app.component.ts ***!
  \*************************************************************/
/*! exports provided: FormsAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsAppComponent", function() { return FormsAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/forms-app/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormsAppComponent = /** @class */ (function () {
    function FormsAppComponent() {
        this.version = __webpack_require__(/*! ../../../../../../libs/ngx-dynamic-forms/package.json */ "../../libs/ngx-dynamic-forms/package.json").version;
        this.ngVersion = _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full;
        this.model = new _model__WEBPACK_IMPORTED_MODULE_1__["UIDeveloper"]();
        this.code = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/forms-app/__tdm-code__.ts");
        this.features = this.code
            .filter(function (c) { return c.file === 'FEATURES.md'; })
            .map(function (c) {
            return {
                title: c.title,
                description: c.code,
                md: true
            };
        });
    }
    FormsAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'forms-app',
            styles: [__webpack_require__(/*! ./forms-app.component.scss */ "./src/modules/@forms/forms-app/forms-app.component.scss")],
            template: __webpack_require__(/*! ./forms-app.component.html */ "./src/modules/@forms/forms-app/forms-app.component.html")
        })
    ], FormsAppComponent);
    return FormsAppComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/forms-app/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/@forms/forms-app/index.ts ***!
  \***********************************************/
/*! exports provided: FormsAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms-app.component */ "./src/modules/@forms/forms-app/forms-app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormsAppComponent", function() { return _forms_app_component__WEBPACK_IMPORTED_MODULE_0__["FormsAppComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/forms-app/model.ts":
/*!***********************************************!*\
  !*** ./src/modules/@forms/forms-app/model.ts ***!
  \***********************************************/
/*! exports provided: UIDeveloper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIDeveloper", function() { return UIDeveloper; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* @tdm-example:DEMO-2 */



var UIDeveloper = /** @class */ (function () {
    /* @tdm-example:DEMO-1 */
    function UIDeveloper() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["FormProp"])({
            required: true,
            render: {
                vType: 'text',
                label: 'Developer Name'
            }
        })
        /* @tdm-ignore:DEMO-1 */
        ,
        __metadata("design:type", String)
    ], UIDeveloper.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["FormProp"])({
            required: true,
            render: {
                vType: 'number',
                label: 'Year Of Birth'
            },
            validators: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1900), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(new Date().getFullYear())])
        })
        /* @tdm-ignore:DEMO-1 */
        ,
        __metadata("design:type", Number)
    ], UIDeveloper.prototype, "yearOfBirth", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["FormProp"])({
            required: true,
            render: {
                vType: 'select',
                label: 'Gender',
                data: {
                    options: [
                        { value: 'male', label: 'MALE' },
                        { value: 'female', label: 'FEMALE' },
                        { value: 'other', label: 'OTHER' },
                    ]
                }
            }
        })
        /* @tdm-ignore:DEMO-1 */
        ,
        __metadata("design:type", String)
    ], UIDeveloper.prototype, "gender", void 0);
    UIDeveloper = __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_1__["Model"])(),
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["FormModel"])()
        /* @tdm-example:DEMO-1 */
    ], UIDeveloper);
    return UIDeveloper;
}());

/* @tdm-example:DEMO-1 */
/* @tdm-example:DEMO-2 */


/***/ }),

/***/ "./src/modules/@forms/module.ts":
/*!**************************************!*\
  !*** ./src/modules/@forms/module.ts ***!
  \**************************************/
/*! exports provided: FormsAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsAppModule", function() { return FormsAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/modules/@forms/shared/index.ts");
/* harmony import */ var _tutorials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorials */ "./src/modules/@forms/tutorials/index.ts");
/* harmony import */ var _forms_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms-app */ "./src/modules/@forms/forms-app/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/modules/@forms/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormsAppModule = /** @class */ (function () {
    function FormsAppModule(topNavService) {
        topNavService.addNavItem({
            title: 'Dynamic Forms',
            imgIconSrc: 'https://material.angular.io/assets/img/homepage/angular-white-transparent.svg',
            routerLink: {
                routerLink: ['./forms']
            }
        });
    }
    FormsAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_forms_app__WEBPACK_IMPORTED_MODULE_6__["FormsAppComponent"]],
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["FormsSharedModule"],
                _tutorials__WEBPACK_IMPORTED_MODULE_5__["FormsTutorialsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"])
            ]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_2__["TopNavService"]])
    ], FormsAppModule);
    return FormsAppModule;
}());



/***/ }),

/***/ "./src/modules/@forms/routes.ts":
/*!**************************************!*\
  !*** ./src/modules/@forms/routes.ts ***!
  \**************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _forms_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms-app */ "./src/modules/@forms/forms-app/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");


var ROUTES = [
    {
        path: '',
        children: [
            { path: '', pathMatch: 'full', component: _forms_app__WEBPACK_IMPORTED_MODULE_0__["FormsAppComponent"] },
            { path: 'tutorial/:name', component: _shared__WEBPACK_IMPORTED_MODULE_1__["TutorialPageComponent"] }
        ]
    }
];


/***/ }),

/***/ "./src/modules/@forms/shared/form-wrapper/form-wrapper.component.html":
/*!****************************************************************************!*\
  !*** ./src/modules/@forms/shared/form-wrapper/form-wrapper.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showSpinner\" class=\"form-wrapper-spinner-container\">\n  <h5>Loading...</h5>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n<ng-content select=\".form-description\"></ng-content>\n<div class=\"form-wrapper-container\">\n  <div class=\"form-wrapper mat-elevation-z4\" fxLayout=\"column\">\n    <mat-toolbar *ngIf=\"!noDashboard\">\n      <mat-progress-bar *ngIf=\"showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\n      <div fxFlex=\"nogrow\">\n        <div class=\"form-status-indicator\" [matTooltip]=\"'Form status: ' + (form?.statusChanges | async)\">\n          <tdm-led [blink]=\"ledBlinking\" [color]=\"ledColor\"></tdm-led>\n        </div>\n      </div>\n       <span class=\"form-title\" fxFlex>{{title}}</span>\n      <button *ngIf=\"tabs && code && code.length\"\n              mat-icon-button\n              matTooltip=\"View Source\"\n              (click)=\"tabs.selectedIndex = (tabs.selectedIndex === 1) ? 0 : 1\">\n        <mat-icon>code</mat-icon>\n      </button>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item [disabled]=\"jsonView\" (click)=\"this.toggleJsonView()\">&#x7b; JSON } View</button>\n        <button mat-menu-item matTooltip=\"Update form's value & Validity\" (click)=\"dynForm.tdmForm.form.updateValueAndValidity()\">\n          <mat-icon>sync</mat-icon>\n          <span>Sync Form</span>\n        </button>\n        <button mat-menu-item matTooltip=\"Commit form to model\" (click)=\"onCommitToModel()\">\n          <mat-icon>save</mat-icon>\n          <span>Commit</span>\n        </button>\n      </mat-menu>\n    </mat-toolbar>\n    <div fxFlex=\"grow\" class=\"form-wrapper-content\">\n      <mat-drawer-container>\n        <mat-drawer mode=\"side\" [opened]=\"rightDrawerOpened\">\n          <ng-content class=\".form-wrapper-right-drawer\"></ng-content>\n        </mat-drawer>\n        <mat-drawer position=\"end\" mode=\"side\" [opened]=\"jsonView\">\n          <div>\n            <button mat-icon-button (click)=\"jsonView = false\"><mat-icon>close</mat-icon></button>\n            <div fxFlex></div>\n            <button mat-icon-button (click)=\"refreshJsonView()\"><mat-icon>refresh</mat-icon></button>\n          </div>\n          <mat-tab-group>\n            <mat-tab label=\"Model\">\n              <div class=\"json-view\">\n                <pre><code [innerHtml]=\"modelJson\"></code></pre>\n              </div>\n            </mat-tab>\n            <mat-tab label=\"Form\">\n              <div class=\"json-view\">\n                <pre><code [innerHtml]=\"formJson\"></code></pre>\n              </div>\n            </mat-tab>\n          </mat-tab-group>\n        </mat-drawer>\n        <mat-drawer-content>\n          <mat-tab-group #tabs style=\"margin-top: -48px;\">\n            <mat-tab>\n              <ng-template mat-tab-label></ng-template>\n              <ng-content select=\".custom-form-actions\"></ng-content>\n              <div class=\"form-wrapper-dynamic-form-container\">\n                <ng-content select=\"dynamic-form\"></ng-content>\n              </div>\n              <ng-content select=\".form-footer\"></ng-content>\n            </mat-tab>\n            <mat-tab>\n              <tdm-code-view [code]=\"code\"></tdm-code-view>\n            </mat-tab>\n          </mat-tab-group>\n        </mat-drawer-content>\n      </mat-drawer-container>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/modules/@forms/shared/form-wrapper/form-wrapper.component.scss":
/*!****************************************************************************!*\
  !*** ./src/modules/@forms/shared/form-wrapper/form-wrapper.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-wrapper-content {\n  z-index: 1; }\n  .form-wrapper-content .json-view {\n    padding: 15px;\n    overflow: auto;\n    width: 200px; }\n  .form-wrapper-dynamic-form-container {\n  margin: 10px; }\n  .form-control-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 15px 0;\n  z-index: 2; }\n  .form-status-indicator {\n  width: 24px;\n  height: 24px;\n  margin: 0 15px; }\n"

/***/ }),

/***/ "./src/modules/@forms/shared/form-wrapper/form-wrapper.component.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/@forms/shared/form-wrapper/form-wrapper.component.ts ***!
  \**************************************************************************/
/*! exports provided: FormWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapperComponent", function() { return FormWrapperComponent; });
/* harmony import */ var _style_loader_css_loader_sass_loader_form_wrapper_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !style-loader!css-loader!sass-loader!./form-wrapper.global.scss */ "../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./src/modules/@forms/shared/form-wrapper/form-wrapper.global.scss");
/* harmony import */ var _style_loader_css_loader_sass_loader_form_wrapper_global_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_css_loader_sass_loader_form_wrapper_global_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/highlight */ "../../node_modules/highlight.js/lib/highlight.js");
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_1__["registerLanguage"]('json', __webpack_require__(/*! highlight.js/lib/languages/json.js */ "../../node_modules/highlight.js/lib/languages/json.js"));




var FormWrapperComponent = /** @class */ (function () {
    function FormWrapperComponent() {
    }
    FormWrapperComponent.prototype.toggleJsonView = function () {
        this.jsonView = !this.jsonView;
        if (this.jsonView) {
            this.refreshJsonView();
        }
    };
    FormWrapperComponent.prototype.onCommitToModel = function () {
        this.dynForm.tdmForm.commitToModel();
        this.refreshJsonView();
    };
    FormWrapperComponent.prototype.ngOnChanges = function (change) {
        if ('rightDrawerOpened' in change) {
            this.rightDrawerOpened = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(this.rightDrawerOpened);
        }
        if ('noDashboard' in change) {
            this.noDashboard = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(this.noDashboard);
        }
    };
    FormWrapperComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.dynForm) {
            this.form = this.dynForm.form;
            this.dynForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(150))
                .subscribe(function (v) { return _this.refreshJsonView(); });
            this.form.statusChanges.subscribe(function (status) {
                switch (status) {
                    case 'VALID':
                        _this.ledColor = 'green';
                        _this.ledBlinking = false;
                        break;
                    case 'INVALID':
                        _this.ledColor = 'red';
                        _this.ledBlinking = true;
                        break;
                    case 'PENDING':
                        _this.ledColor = 'blue';
                        _this.ledBlinking = true;
                        break;
                    case 'DISABLED':
                        _this.ledColor = 'yellow';
                        _this.ledBlinking = false;
                        break;
                    default:
                        _this.ledColor = '';
                }
            });
        }
    };
    FormWrapperComponent.prototype.refreshJsonView = function () {
        if (this.jsonView) {
            this.formJson = highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_1__["highlightAuto"](JSON.stringify(this.dynForm.form.getRawValue(), null, 2), ['json']).value;
            this.modelJson = highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_1__["highlightAuto"](JSON.stringify(this.dynForm.tdmForm.model, null, 2), ['json']).value;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"])(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_5__["DynamicFormComponent"]),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_5__["DynamicFormComponent"])
    ], FormWrapperComponent.prototype, "dynForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormWrapperComponent.prototype, "rightDrawerOpened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], FormWrapperComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormWrapperComponent.prototype, "jsonView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Array)
    ], FormWrapperComponent.prototype, "code", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormWrapperComponent.prototype, "noDashboard", void 0);
    FormWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'form-wrapper',
            template: __webpack_require__(/*! ./form-wrapper.component.html */ "./src/modules/@forms/shared/form-wrapper/form-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./form-wrapper.component.scss */ "./src/modules/@forms/shared/form-wrapper/form-wrapper.component.scss")]
        })
    ], FormWrapperComponent);
    return FormWrapperComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/shared/index.ts":
/*!********************************************!*\
  !*** ./src/modules/@forms/shared/index.ts ***!
  \********************************************/
/*! exports provided: FormsSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/modules/@forms/shared/module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormsSharedModule", function() { return _module__WEBPACK_IMPORTED_MODULE_0__["FormsSharedModule"]; });




/***/ }),

/***/ "./src/modules/@forms/shared/module.ts":
/*!*********************************************!*\
  !*** ./src/modules/@forms/shared/module.ts ***!
  \*********************************************/
/*! exports provided: FormsSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsSharedModule", function() { return FormsSharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
/* harmony import */ var _form_wrapper_form_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-wrapper/form-wrapper.component */ "./src/modules/@forms/shared/form-wrapper/form-wrapper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * An example for @tdm/ngx-dynamic-forms
 *
 * @demo core: Identity, ExtendAction, transformNameStrategy, skip
 * @demo angular-http: HttpResource, UrlParam
 */
var FormsSharedModule = /** @class */ (function () {
    function FormsSharedModule() {
    }
    FormsSharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_form_wrapper_form_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["FormWrapperComponent"]],
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            exports: [_form_wrapper_form_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["FormWrapperComponent"]]
        })
    ], FormsSharedModule);
    return FormsSharedModule;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/1-introduction/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/@forms/tutorials/1-introduction/index.ts ***!
  \**************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _introduction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introduction.component */ "./src/modules/@forms/tutorials/1-introduction/introduction.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return _introduction_component__WEBPACK_IMPORTED_MODULE_0__["IntroductionComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/1-introduction/introduction.component.html":
/*!*********************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/1-introduction/introduction.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-1'}]:true\"></tdm-markdown-view>\n\n<div fxLayout fxLayoutAlign=\"center center\" fxLayoutWrap=\"wrap\">\n  <tdm-markdown-view fxFlex=\"45%\"\n                     [code]=\"(code | async | tdmCode:[{file: 'model.ts', section: 'DEMO-1'}])[0]\"></tdm-markdown-view>\n\n  <div fxFlex=\"10%\" class=\"center-text\">\n    <mat-icon style=\"font-size: 48px\">compare_arrows</mat-icon>\n  </div>\n  <div fxFlex=\"45%\">\n    <dynamic-form [model]=\"model\"></dynamic-form>\n  </div>\n</div>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-2'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"I'm the dashboard\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template'}, {title: 'Style'}, {title: 'Model', section: 'DEMO-2'}]\">\n\n  <!--@tdm-example:TDM-DEMO-->\n  <dynamic-form [model]=\"model\"></dynamic-form>\n  <!--@tdm-example:TDM-DEMO-->\n</form-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-3'}]:true\"></tdm-markdown-view>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"led-sample\">\n      <tdm-led color=\"green\"></tdm-led>\n    </div>\n    <span>VALID</span>\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"led-sample\">\n      <tdm-led color=\"red\" blink></tdm-led>\n    </div>\n    <span>INVALID</span>\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"led-sample\">\n      <tdm-led color=\"yellow\"></tdm-led>\n    </div>\n    <span>DISABLED</span>\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"led-sample\">\n      <tdm-led color=\"blue\" blink></tdm-led>\n    </div>\n    <span>PENDING</span>\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"led-sample\">\n      <tdm-led></tdm-led>\n    </div>\n    <span>NOT SET</span>\n  </div>\n</div>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-4'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/1-introduction/introduction.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/1-introduction/introduction.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".led-sample {\n  height: 24px;\n  width: 24px;\n  margin-bottom: 15px; }\n  .led-sample + span {\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/1-introduction/introduction.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/1-introduction/introduction.component.ts ***!
  \*******************************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/1-introduction/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_3__["UIDeveloper"]();
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | FormsIntroductionComponent */ "FormsIntroductionComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/1-introduction/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    IntroductionComponent.tutorial = {
        id: 'introduction',
        name: 'Introduction'
    };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/modules/@forms/tutorials/1-introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.scss */ "./src/modules/@forms/tutorials/1-introduction/introduction.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/1-introduction/model.ts":
/*!**************************************************************!*\
  !*** ./src/modules/@forms/tutorials/1-introduction/model.ts ***!
  \**************************************************************/
/*! exports provided: UIDeveloper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIDeveloper", function() { return UIDeveloper; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* @tdm-example:DEMO-2 */



var UIDeveloper = /** @class */ (function () {
    /* @tdm-example:DEMO-1 */
    function UIDeveloper() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["FormProp"])({
            required: true,
            render: {
                vType: 'text',
                label: 'Developer Name'
            }
        })
        /* @tdm-ignore:DEMO-1 */
        ,
        __metadata("design:type", String)
    ], UIDeveloper.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["FormProp"])({
            required: true,
            render: {
                vType: 'number',
                label: 'Year Of Birth'
            },
            validators: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1900), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(new Date().getFullYear())])
        })
        /* @tdm-ignore:DEMO-1 */
        ,
        __metadata("design:type", Number)
    ], UIDeveloper.prototype, "yearOfBirth", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["FormProp"])({
            required: true,
            render: {
                vType: 'radio',
                label: 'Gender',
                data: {
                    options: [
                        { value: 'male', label: 'MALE' },
                        { value: 'female', label: 'FEMALE' },
                        { value: 'other', label: 'OTHER' },
                    ]
                }
            }
        })
        /* @tdm-ignore:DEMO-1 */
        ,
        __metadata("design:type", String)
    ], UIDeveloper.prototype, "gender", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["FormProp"])({
            render: {
                vType: 'select',
                label: 'Framework',
                data: {
                    options: [
                        { value: 'angular' },
                        { value: 'react' },
                        { value: 'vue' },
                        { value: 'ember' },
                        { value: 'knockout' },
                        { value: 'other' }
                    ]
                }
            }
        })
        /* @tdm-ignore:DEMO-1 */
        ,
        __metadata("design:type", String)
    ], UIDeveloper.prototype, "framework", void 0);
    UIDeveloper = __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_1__["Model"])(),
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["FormModel"])()
        /* @tdm-example:DEMO-1 */
    ], UIDeveloper);
    return UIDeveloper;
}());

/* @tdm-example:DEMO-1 */
/* @tdm-example:DEMO-2 */


/***/ }),

/***/ "./src/modules/@forms/tutorials/10-hot-bind/hot-bind.component.html":
/*!**************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/10-hot-bind/hot-bind.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<form-wrapper [jsonView]=\"true\" title=\"Hot Bind\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template', section: 'tdmDemo'}, {title: 'Model'}]\">\n  <!--@tdm-example:tdmDemo-->\n  <div class=\"custom-form-actions\">\n    <mat-slide-toggle [checked]=\"hotBind\"\n                      (change)=\"hotBind = !!$event.checked\">Hot Bind</mat-slide-toggle>\n  </div>\n  <dynamic-form [model]=\"model\" [hotBind]=\"hotBind\"></dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/10-hot-bind/hot-bind.component.scss":
/*!**************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/10-hot-bind/hot-bind.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/10-hot-bind/hot-bind.component.ts":
/*!************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/10-hot-bind/hot-bind.component.ts ***!
  \************************************************************************/
/*! exports provided: HotBindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotBindComponent", function() { return HotBindComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var HotBindComponent = /** @class */ (function () {
    function HotBindComponent() {
        this.hotBind = true;
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        this.code = __webpack_require__.e(/*! import() | FormsHotBindComponent */ "FormsHotBindComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/10-hot-bind/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        /* @tdm-ignore:* */
    }
    /* @tdm-ignore:* */
    HotBindComponent.tutorial = {
        id: 'hot-bind',
        name: 'Hot Bind'
    };
    HotBindComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-hot-bind',
            template: __webpack_require__(/*! ./hot-bind.component.html */ "./src/modules/@forms/tutorials/10-hot-bind/hot-bind.component.html"),
            styles: [__webpack_require__(/*! ./hot-bind.component.scss */ "./src/modules/@forms/tutorials/10-hot-bind/hot-bind.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], HotBindComponent);
    return HotBindComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/10-hot-bind/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/@forms/tutorials/10-hot-bind/index.ts ***!
  \***********************************************************/
/*! exports provided: HotBindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hot_bind_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hot-bind.component */ "./src/modules/@forms/tutorials/10-hot-bind/hot-bind.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HotBindComponent", function() { return _hot_bind_component__WEBPACK_IMPORTED_MODULE_0__["HotBindComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/10a-disable-form/disable-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/10a-disable-form/disable-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Disable Form\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template', section: 'tdmDemo'}, {title: 'Model'}]\">\n  <!--@tdm-example:tdmDemo-->\n  <div class=\"custom-form-actions\">\n    <mat-slide-toggle [checked]=\"disabled\"\n                      (change)=\"disabled = !!$event.checked\">Disabled</mat-slide-toggle>\n  </div>\n  <dynamic-form [model]=\"model\" [disabled]=\"disabled\"></dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/10a-disable-form/disable-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/10a-disable-form/disable-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/10a-disable-form/disable-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/10a-disable-form/disable-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DisableFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableFormComponent", function() { return DisableFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _shared_form_wrapper_form_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/form-wrapper/form-wrapper.component */ "./src/modules/@forms/shared/form-wrapper/form-wrapper.component.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var DisableFormComponent = /** @class */ (function () {
    function DisableFormComponent() {
        var _this = this;
        this.disabled = true;
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_4__["Hero"]();
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | FormsDisableFormComponent */ "FormsDisableFormComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/10a-disable-form/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        var waitForAnUpdate = function () {
            setTimeout(function () {
                if (_this.formWrapper && _this.formWrapper.form) {
                    _this.formWrapper.form.updateValueAndValidity();
                }
                else {
                    waitForAnUpdate();
                }
            });
        };
        waitForAnUpdate();
    }
    DisableFormComponent.tutorial = {
        id: 'disable-form',
        name: 'Disable Form'
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_form_wrapper_form_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["FormWrapperComponent"]),
        __metadata("design:type", _shared_form_wrapper_form_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["FormWrapperComponent"])
    ], DisableFormComponent.prototype, "formWrapper", void 0);
    DisableFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-disable-form',
            template: __webpack_require__(/*! ./disable-form.component.html */ "./src/modules/@forms/tutorials/10a-disable-form/disable-form.component.html"),
            styles: [__webpack_require__(/*! ./disable-form.component.scss */ "./src/modules/@forms/tutorials/10a-disable-form/disable-form.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_3__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        }),
        __metadata("design:paramtypes", [])
    ], DisableFormComponent);
    return DisableFormComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/10a-disable-form/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/@forms/tutorials/10a-disable-form/index.ts ***!
  \****************************************************************/
/*! exports provided: DisableFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _disable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disable-form.component */ "./src/modules/@forms/tutorials/10a-disable-form/disable-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisableFormComponent", function() { return _disable_form_component__WEBPACK_IMPORTED_MODULE_0__["DisableFormComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/11-commit/commit.component.html":
/*!**********************************************************************!*\
  !*** ./src/modules/@forms/tutorials/11-commit/commit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Commit\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template', section: 'tdmDemo'}, {title: 'Model'}]\">\n<!--@tdm-example:tdmDemo-->\n  <dynamic-form #dynForm [model]=\"model\">\n    <button mat-raised-button color=\"primary\"\n            [disabled]=\"dynForm.form.status !== 'VALID' || !dynForm.form.dirty\"\n            (click)=\"dynForm.tdmForm.commitToModel(true)\">SAVE</button>\n    <button mat-button [disabled]=\"dynForm.form.pristine\" (click)=\"dynForm.tdmForm.reset()\">CANCEL</button>\n  </dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/11-commit/commit.component.scss":
/*!**********************************************************************!*\
  !*** ./src/modules/@forms/tutorials/11-commit/commit.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/11-commit/commit.component.ts":
/*!********************************************************************!*\
  !*** ./src/modules/@forms/tutorials/11-commit/commit.component.ts ***!
  \********************************************************************/
/*! exports provided: CommitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitComponent", function() { return CommitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var CommitComponent = /** @class */ (function () {
    function CommitComponent() {
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        this.code = __webpack_require__.e(/*! import() | FormsCommitComponent */ "FormsCommitComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/11-commit/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        /* @tdm-ignore:* */
    }
    /* @tdm-ignore:* */
    CommitComponent.tutorial = {
        id: 'commit',
        name: 'Commit to Model'
    };
    CommitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-commit',
            template: __webpack_require__(/*! ./commit.component.html */ "./src/modules/@forms/tutorials/11-commit/commit.component.html"),
            styles: [__webpack_require__(/*! ./commit.component.scss */ "./src/modules/@forms/tutorials/11-commit/commit.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], CommitComponent);
    return CommitComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/11-commit/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/@forms/tutorials/11-commit/index.ts ***!
  \*********************************************************/
/*! exports provided: CommitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commit.component */ "./src/modules/@forms/tutorials/11-commit/commit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommitComponent", function() { return _commit_component__WEBPACK_IMPORTED_MODULE_0__["CommitComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/12-control-outlet/control-outlet.component.html":
/*!**************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/12-control-outlet/control-outlet.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part1'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Outlet context\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template', section: 'tdmDemo'}, {title: 'Model'}]\">\n<!--@tdm-example:tdmDemo-->\n<dynamic-form #dynForm [model]=\"model\"></dynamic-form>\n</form-wrapper> <!--@tdm-ignore-line-->\n\n<div class=\"red-super-power-box\">\n  <h3 *dynamicControlOutlet=\"'superPower'; let ctx; dynForm: dynForm\" class=\"red-super-power-title\">Super Power Is In The Red Box</h3>\n</div>\n<!--@tdm-example:tdmDemo-->\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part2'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/12-control-outlet/control-outlet.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/12-control-outlet/control-outlet.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red-super-power-box {\n  padding: 25px;\n  margin: 15px;\n  background-color: indianred; }\n\n.red-super-power-title {\n  text-align: center;\n  color: indianred; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/12-control-outlet/control-outlet.component.ts":
/*!************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/12-control-outlet/control-outlet.component.ts ***!
  \************************************************************************************/
/*! exports provided: ControlOutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlOutletComponent", function() { return ControlOutletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var ControlOutletComponent = /** @class */ (function () {
    function ControlOutletComponent() {
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        this.code = __webpack_require__.e(/*! import() | FormsControlOutletComponent */ "FormsControlOutletComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/12-control-outlet/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        /* @tdm-ignore:* */
    }
    /* @tdm-ignore:* */
    ControlOutletComponent.tutorial = {
        id: 'control-outlet',
        name: 'Control Outlet'
    };
    ControlOutletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-control-outlet',
            template: __webpack_require__(/*! ./control-outlet.component.html */ "./src/modules/@forms/tutorials/12-control-outlet/control-outlet.component.html"),
            styles: [__webpack_require__(/*! ./control-outlet.component.scss */ "./src/modules/@forms/tutorials/12-control-outlet/control-outlet.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], ControlOutletComponent);
    return ControlOutletComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/12-control-outlet/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/@forms/tutorials/12-control-outlet/index.ts ***!
  \*****************************************************************/
/*! exports provided: ControlOutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _control_outlet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-outlet.component */ "./src/modules/@forms/tutorials/12-control-outlet/control-outlet.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlOutletComponent", function() { return _control_outlet_component__WEBPACK_IMPORTED_MODULE_0__["ControlOutletComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/12-control-panel/control-panel.component.html":
/*!************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/12-control-panel/control-panel.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/12-control-panel/control-panel.component.scss":
/*!************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/12-control-panel/control-panel.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/12-control-panel/control-panel.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/12-control-panel/control-panel.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ControlPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function() { return ControlPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var ControlPanelComponent = /** @class */ (function () {
    function ControlPanelComponent() {
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        this.code = __webpack_require__.e(/*! import() | FormsControlPanelComponent */ "FormsControlPanelComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/12-control-panel/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        /* @tdm-ignore:* */
    }
    /* @tdm-ignore:* */
    ControlPanelComponent.tutorial = {
        id: 'control-panel',
        name: 'Control Panel'
    };
    ControlPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-control-panel',
            template: __webpack_require__(/*! ./control-panel.component.html */ "./src/modules/@forms/tutorials/12-control-panel/control-panel.component.html"),
            styles: [__webpack_require__(/*! ./control-panel.component.scss */ "./src/modules/@forms/tutorials/12-control-panel/control-panel.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], ControlPanelComponent);
    return ControlPanelComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/12-control-panel/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/@forms/tutorials/12-control-panel/index.ts ***!
  \****************************************************************/
/*! exports provided: ControlPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _control_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-panel.component */ "./src/modules/@forms/tutorials/12-control-panel/control-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function() { return _control_panel_component__WEBPACK_IMPORTED_MODULE_0__["ControlPanelComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/13-complex-data-structure/complex-data-structures.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/13-complex-data-structure/complex-data-structures.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'SIMPLE.md'}]:true\"></tdm-markdown-view>\n\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/13-complex-data-structure/complex-data-structures.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/13-complex-data-structure/complex-data-structures.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code-class {\n  padding: 20px;\n  max-height: 400px; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/13-complex-data-structure/complex-data-structures.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/13-complex-data-structure/complex-data-structures.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ComplexDataStructuresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexDataStructuresComponent", function() { return ComplexDataStructuresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComplexDataStructuresComponent = /** @class */ (function () {
    function ComplexDataStructuresComponent() {
        this.code = __webpack_require__.e(/*! import() | FormsComplexDataStructuresComponent */ "FormsComplexDataStructuresComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/13-complex-data-structure/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        /* @tdm-ignore:* */
    }
    /* @tdm-ignore:* */
    ComplexDataStructuresComponent.tutorial = {
        id: 'complex-data-structures',
        name: 'Overview',
        subHeader: 'Complex Data Structures'
    };
    ComplexDataStructuresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-complex-data-structures',
            template: __webpack_require__(/*! ./complex-data-structures.component.html */ "./src/modules/@forms/tutorials/13-complex-data-structure/complex-data-structures.component.html"),
            styles: [__webpack_require__(/*! ./complex-data-structures.component.scss */ "./src/modules/@forms/tutorials/13-complex-data-structure/complex-data-structures.component.scss")]
        })
    ], ComplexDataStructuresComponent);
    return ComplexDataStructuresComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/13-complex-data-structure/index.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/13-complex-data-structure/index.ts ***!
  \*************************************************************************/
/*! exports provided: ComplexDataStructuresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _complex_data_structures_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complex-data-structures.component */ "./src/modules/@forms/tutorials/13-complex-data-structure/complex-data-structures.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplexDataStructuresComponent", function() { return _complex_data_structures_component__WEBPACK_IMPORTED_MODULE_0__["ComplexDataStructuresComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/14-child-form/child-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/14-child-form/child-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part1'}]:true\"></tdm-markdown-view>\n\n<form-wrapper #formWrapper\n              [rightDrawerOpened]=\"rightDrawerOpened\"\n              title=\"Child Form\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template', section: 'tdmDemo'}, {title: 'Model'}]\">\n  <!--@tdm-example:tdmDemo-->\n  <div class=\"form-wrapper-right-drawer\">\n\n    <div style=\"text-align: right\">\n      <button mat-icon-button (click)=\"rightDrawerOpened = false\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n\n    <ng-container *dynamicControlOutlet=\"'*'; let ctx; dynForm: dynForm; vType: 'form'\">\n      <dynamic-form-row [fromContext]=\"ctx\" custom>\n        <a mat-button (click)=\"editExternalForm(ctx)\">edit</a>\n        <mat-error style=\"display: inline;\" *ngIf=\"hasError('required', ctx)\">Required</mat-error>\n      </dynamic-form-row>\n    </ng-container>\n\n  </div>\n\n  <dynamic-form #dynForm [model]=\"model\">\n    <ng-container *ngIf=\"showChildForm\">\n      <ng-container *dynamicFormOverride=\"'*'; let ctx; vType: 'form'\">\n        <dynamic-form [model]=\"childForm\"></dynamic-form>\n      </ng-container>\n    </ng-container>\n  </dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part2'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/14-child-form/child-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/14-child-form/child-form.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/14-child-form/child-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/14-child-form/child-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChildFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildFormComponent", function() { return ChildFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/14-child-form/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */


var ChildFormComponent = /** @class */ (function () {
    function ChildFormComponent(cdr) {
        this.cdr = cdr;
        this.code = __webpack_require__.e(/*! import() | FormsChildFormComponent */ "FormsChildFormComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/14-child-form/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        this.model = new _model__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
    }
    ChildFormComponent.prototype.editExternalForm = function (context) {
        this.rightDrawerOpened = true;
        this.showChildForm = true;
        if (!this.childForm) {
            var event_1 = Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["createChildFormEvent"])(context);
            if (event_1.isNew) {
                event_1.context.fControl = context.tdmForm.createControl(context.item.fullName, null, true);
                event_1.context.fGroup.setControl(context.item.name, event_1.context.fControl);
                event_1.context.item.markAsChanged();
            }
            this.childForm = event_1.createTDMModelForm();
            this.cdr.detectChanges();
        }
    };
    ChildFormComponent.prototype.hasError = function (errorName, ctx) {
        if (ctx.fControl) {
            return ctx.fControl.hasError(errorName);
        }
        else if (ctx.fArray) {
            return ctx.fArray.hasError(errorName);
        }
        else if (ctx.fGroup) {
            return ctx.fGroup.hasError(errorName);
        }
        return false;
    };
    /* @tdm-ignore:* */
    ChildFormComponent.tutorial = {
        id: 'child-form',
        name: 'Child Form'
    };
    ChildFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-child-form',
            template: __webpack_require__(/*! ./child-form.component.html */ "./src/modules/@forms/tutorials/14-child-form/child-form.component.html"),
            styles: [__webpack_require__(/*! ./child-form.component.scss */ "./src/modules/@forms/tutorials/14-child-form/child-form.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ChildFormComponent);
    return ChildFormComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/14-child-form/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/@forms/tutorials/14-child-form/index.ts ***!
  \*************************************************************/
/*! exports provided: ChildFormComponent, HeroAddress, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _child_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./child-form.component */ "./src/modules/@forms/tutorials/14-child-form/child-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildFormComponent", function() { return _child_form_component__WEBPACK_IMPORTED_MODULE_0__["ChildFormComponent"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/14-child-form/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroAddress", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["HeroAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Hero"]; });





/***/ }),

/***/ "./src/modules/@forms/tutorials/14-child-form/model.ts":
/*!*************************************************************!*\
  !*** ./src/modules/@forms/tutorials/14-child-form/model.ts ***!
  \*************************************************************/
/*! exports provided: HeroAddress, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroAddress", function() { return HeroAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroAddress = /** @class */ (function () {
    function HeroAddress() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Street',
                }
            }
        }),
        __metadata("design:type", String)
    ], HeroAddress.prototype, "street", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'City',
                }
            }
        }),
        __metadata("design:type", String)
    ], HeroAddress.prototype, "city", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Zip',
                }
            }
        }),
        __metadata("design:type", String)
    ], HeroAddress.prototype, "zip", void 0);
    HeroAddress = __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"])({
            form: true
        })
    ], HeroAddress);
    return HeroAddress;
}());

var Hero = /** @class */ (function () {
    function Hero() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'number',
                    label: 'Hero ID'
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "id", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Hero Name'
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'boolean',
                    label: 'Has Tracking Device'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "hasTracking", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slideToggle',
                    label: 'Double Agent'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "doubleAgent", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slider',
                    label: 'BMI Index',
                    data: { min: 1, max: 35 }
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "bmi", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'select',
                    label: 'Super Power',
                    data: {
                        options: [
                            { value: 'selfHealing', label: 'Self Healing' },
                            { value: 'flying', label: 'Flying' },
                            { value: 'cloaking', label: 'Cloaking' },
                            { value: 'cloning', label: 'Cloaning' },
                            { value: 'invisibility', label: 'Invisibility' }
                        ]
                    }
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "superPower", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'form',
                    label: 'Address'
                },
                childForm: true
            }
        }),
        __metadata("design:type", HeroAddress)
    ], Hero.prototype, "address", void 0);
    Hero = __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"])({
            form: true
        })
    ], Hero);
    return Hero;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/15-flattening/flattening.component.html":
/*!******************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/15-flattening/flattening.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part1'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Flattening\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template', section: 'tdmDemo'}, {title: 'Model'}]\">\n<!--@tdm-example:tdmDemo-->\n  <dynamic-form #dynForm [model]=\"model\" [filter]=\"['address']\">\n    <button mat-raised-button color=\"primary\"\n            [disabled]=\"dynForm.form.status !== 'VALID' || !dynForm.form.dirty\"\n            (click)=\"dynForm.tdmForm.commitToModel(true)\">SAVE</button>\n    <button mat-button [disabled]=\"dynForm.form.pristine\" (click)=\"dynForm.tdmForm.reset()\">CANCEL</button>\n  </dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part2'}]:true\"></tdm-markdown-view>\n\n<div fxLayout=\"row\">\n  <div fxFlex=\"50%\" class=\"code-class\">\n    <tdm-markdown-view overflowContainer\n                       [markdown]=\"code | async | tdmCode:[{file: 'other-view.md', section: 'visualReal'}]:true\"></tdm-markdown-view>\n  </div>\n  <div fxFlex=\"50%\" class=\"code-class\">\n    <tdm-markdown-view overflowContainer\n                       [markdown]=\"code | async | tdmCode:[{file: 'other-view.md', section: 'visualVirtual'}]:true\"></tdm-markdown-view>\n  </div>\n</div>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part3'}]:true\"></tdm-markdown-view>\n\n<tdm-markdown-view>\n  Let's try out, first we create the <code>Coordinates</code> model:\n</tdm-markdown-view>\n<div fxLayout=\"row\">\n  <div fxFlex=\"50%\" class=\"code-class\">\n    <tdm-markdown-view overflowContainer\n                       [markdown]=\"code | async | tdmCode:[{file: 'other-view.md', section: 'coordinates'}]:true\"></tdm-markdown-view>\n  </div>\n  <div fxFlex=\"50%\" class=\"code-class\">\n    <tdm-markdown-view overflowContainer\n                       [markdown]=\"code | async | tdmCode:[{file: 'other-view.md', section: 'coordinatesClass'}]:true\"></tdm-markdown-view>\n  </div>\n</div>\n<tdm-markdown-view>\n  Now the <code>Base</code> model\n</tdm-markdown-view>\n<div fxLayout=\"row\">\n  <div fxFlex=\"50%\" class=\"code-class\">\n    <tdm-markdown-view overflowContainer\n                       [markdown]=\"code | async | tdmCode:[{file: 'other-view.md', section: 'base'}]:true\"></tdm-markdown-view>\n  </div>\n  <div fxFlex=\"50%\" class=\"code-class\">\n    <tdm-markdown-view overflowContainer\n                       [markdown]=\"code | async | tdmCode:[{file: 'other-view.md', section: 'baseClass'}]:true\"></tdm-markdown-view>\n  </div>\n</div>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part4'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/15-flattening/flattening.component.scss":
/*!******************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/15-flattening/flattening.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code-class {\n  padding: 20px;\n  max-height: 400px; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/15-flattening/flattening.component.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/15-flattening/flattening.component.ts ***!
  \****************************************************************************/
/*! exports provided: FlatteningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatteningComponent", function() { return FlatteningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/15-flattening/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var FlatteningComponent = /** @class */ (function () {
    function FlatteningComponent() {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        this.code = __webpack_require__.e(/*! import() | FormsFlatteningComponent */ "FormsFlatteningComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/15-flattening/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        /* @tdm-ignore:* */
    }
    /* @tdm-ignore:* */
    FlatteningComponent.tutorial = {
        id: 'flattening',
        name: 'Flattening Nested Objects'
    };
    FlatteningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-flattening',
            template: __webpack_require__(/*! ./flattening.component.html */ "./src/modules/@forms/tutorials/15-flattening/flattening.component.html"),
            styles: [__webpack_require__(/*! ./flattening.component.scss */ "./src/modules/@forms/tutorials/15-flattening/flattening.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], FlatteningComponent);
    return FlatteningComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/15-flattening/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/@forms/tutorials/15-flattening/index.ts ***!
  \*************************************************************/
/*! exports provided: FlatteningComponent, Hero, HeroAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flattening_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flattening.component */ "./src/modules/@forms/tutorials/15-flattening/flattening.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlatteningComponent", function() { return _flattening_component__WEBPACK_IMPORTED_MODULE_0__["FlatteningComponent"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/15-flattening/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Hero"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroAddress", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["HeroAddress"]; });





/***/ }),

/***/ "./src/modules/@forms/tutorials/15-flattening/model.ts":
/*!*************************************************************!*\
  !*** ./src/modules/@forms/tutorials/15-flattening/model.ts ***!
  \*************************************************************/
/*! exports provided: HeroAddress, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _14_child_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../14-child-form */ "./src/modules/@forms/tutorials/14-child-form/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroAddress", function() { return _14_child_form__WEBPACK_IMPORTED_MODULE_1__["HeroAddress"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Hero = /** @class */ (function () {
    function Hero() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'number',
                    label: 'Hero ID'
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "id", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Hero Name'
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'boolean',
                    label: 'Has Tracking Device'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "hasTracking", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slideToggle',
                    label: 'Double Agent'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "doubleAgent", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slider',
                    label: 'BMI Index',
                    data: { min: 1, max: 35 }
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "bmi", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'select',
                    label: 'Super Power',
                    data: {
                        options: [
                            { value: 'selfHealing', label: 'Self Healing' },
                            { value: 'flying', label: 'Flying' },
                            { value: 'cloaking', label: 'Cloaking' },
                            { value: 'cloning', label: 'Cloaning' },
                            { value: 'invisibility', label: 'Invisibility' }
                        ]
                    }
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "superPower", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'form',
                    label: 'Address'
                },
                childForm: true
            }
        }),
        __metadata("design:type", _14_child_form__WEBPACK_IMPORTED_MODULE_1__["HeroAddress"])
    ], Hero.prototype, "address", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                flatten: {
                    name: {
                        required: true,
                        render: {
                            vType: 'text',
                            label: 'Base Name',
                        }
                    },
                    coordinates: {
                        flatten: {
                            lng: {
                                render: {
                                    vType: 'number',
                                    label: 'Base Longitude'
                                }
                            },
                            lat: {
                                render: {
                                    vType: 'number',
                                    label: 'Base Latitude'
                                }
                            }
                        }
                    }
                }
            }
        }),
        __metadata("design:type", Object)
    ], Hero.prototype, "base", void 0);
    Hero = __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"])({
            form: true
        })
    ], Hero);
    return Hero;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/16-arrays/arrays.component.html":
/*!**********************************************************************!*\
  !*** ./src/modules/@forms/tutorials/16-arrays/arrays.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part1'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Arrays\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template', section: 'tdmDemo'}, {title: 'Model'}]\">\n<!--@tdm-example:tdmDemo-->\n  <div class=\"form-container-wrapper\" ngProjectAs=\"dynamic-form\">\n\n    <div class=\"form-container\" [@translateTab]=\"external.posMaster\" [class.active]=\"external.posMaster === 'center'\">\n      <dynamic-form #dynForm\n                    [model]=\"model\"\n                    (rendererEvent)=\"onRendererEvent($event)\"></dynamic-form>\n      <button mat-raised-button color=\"primary\"\n              [disabled]=\"dynForm.form.status !== 'VALID' || !dynForm.form.dirty\"\n              (click)=\"dynForm.tdmForm.commitToModel(true)\">SAVE</button>\n      <button mat-button [disabled]=\"dynForm.form.pristine\" (click)=\"cancelForm(dynForm.tdmForm)\">CANCEL</button>\n    </div>\n\n    <div *ngFor=\"let f of external.forms; index as i\"\n         [@translateTab]=\"external.forms[i].pos\"\n         [class.active]=\"external.forms[i].pos === 'center'\"\n         class=\"form-container\" >\n      <dynamic-form #d [model]=\"f.form\" (rendererEvent)=\"onRendererEvent($event)\"></dynamic-form>\n      <button mat-raised-button color=\"primary\"\n              [disabled]=\"d.form.status !== 'VALID' || !d.form.dirty\"\n              (click)=\"closeExternalForm(true)\">UPDATE</button>\n      <button mat-button (click)=\"closeExternalForm(false)\">BACK</button>\n    </div>\n  </div>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part2'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/16-arrays/arrays.component.scss":
/*!**********************************************************************!*\
  !*** ./src/modules/@forms/tutorials/16-arrays/arrays.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container-wrapper {\n  position: relative;\n  overflow: hidden;\n  transition: height 0.5s cubic-bezier(0.35, 0, 0.25, 1); }\n\n.form-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  display: block; }\n\n.form-container.active {\n    position: relative;\n    overflow-x: hidden;\n    overflow-y: auto;\n    z-index: 1; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/16-arrays/arrays.component.ts":
/*!********************************************************************!*\
  !*** ./src/modules/@forms/tutorials/16-arrays/arrays.component.ts ***!
  \********************************************************************/
/*! exports provided: ArraysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraysComponent", function() { return ArraysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/16-arrays/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */


var ArraysComponent = /** @class */ (function () {
    function ArraysComponent() {
        this.code = __webpack_require__.e(/*! import() | FormsArraysComponent */ "FormsArraysComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/16-arrays/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */
        this.external = {
            posMaster: 'center',
            forms: [],
            current: -1
        };
        this.model = new _model__WEBPACK_IMPORTED_MODULE_4__["Hero"]();
        this.model.allies = ['Thor', 'Captain America'];
        this.model.address = [
            Object.assign(new _model__WEBPACK_IMPORTED_MODULE_4__["HeroAddress"](), {
                street: 'Bat Cave Lane',
                city: 'Gotham',
                zip: '9999'
            }),
            Object.assign(new _model__WEBPACK_IMPORTED_MODULE_4__["HeroAddress"](), {
                street: 'Island Ave`',
                city: 'Themyscira'
            })
        ];
    }
    ArraysComponent.prototype.onRendererEvent = function (event) {
        switch (event.type) {
            case 'childFormEdit':
                this.addForm(event);
                break;
            default:
                break;
        }
    };
    ArraysComponent.prototype.cancelForm = function (tdmForm) {
        tdmForm.reset();
    };
    ArraysComponent.prototype.closeExternalForm = function (updated) {
        var ext = this.external.forms.pop();
        this.external.current--;
        if (this.external.current === -1) {
            this.external.posMaster = 'center';
        }
        else {
            this.external.forms[this.external.current].pos = 'center';
        }
        if (!updated) {
            ext.event.reset();
        }
        ext.event.context.item.markAsChanged();
    };
    ArraysComponent.prototype.addForm = function (event) {
        var external = {
            event: event,
            form: event.createTDMModelForm(),
            pos: 'center'
        };
        this.external.forms.push(external);
        if (this.external.current === -1) {
            this.external.posMaster = 'left';
        }
        else {
            this.external.forms[this.external.current].pos = 'left';
        }
        this.external.current++;
    };
    /* @tdm-ignore:* */
    ArraysComponent.tutorial = {
        id: 'arrays',
        name: 'Arrays'
    };
    ArraysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-arrays',
            template: __webpack_require__(/*! ./arrays.component.html */ "./src/modules/@forms/tutorials/16-arrays/arrays.component.html"),
            styles: [__webpack_require__(/*! ./arrays.component.scss */ "./src/modules/@forms/tutorials/16-arrays/arrays.component.scss")],
            animations: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["matTabsAnimations"].translateTab],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        }),
        __metadata("design:paramtypes", [])
    ], ArraysComponent);
    return ArraysComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/16-arrays/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/@forms/tutorials/16-arrays/index.ts ***!
  \*********************************************************/
/*! exports provided: ArraysComponent, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrays_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays.component */ "./src/modules/@forms/tutorials/16-arrays/arrays.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArraysComponent", function() { return _arrays_component__WEBPACK_IMPORTED_MODULE_0__["ArraysComponent"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/16-arrays/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Hero"]; });





/***/ }),

/***/ "./src/modules/@forms/tutorials/16-arrays/model.ts":
/*!*********************************************************!*\
  !*** ./src/modules/@forms/tutorials/16-arrays/model.ts ***!
  \*********************************************************/
/*! exports provided: HeroAddress, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _15_flattening__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../15-flattening */ "./src/modules/@forms/tutorials/15-flattening/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroAddress", function() { return _15_flattening__WEBPACK_IMPORTED_MODULE_1__["HeroAddress"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Hero = /** @class */ (function () {
    function Hero() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'number',
                    label: 'Hero ID'
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "id", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Hero Name'
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'boolean',
                    label: 'Has Tracking Device'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "hasTracking", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slideToggle',
                    label: 'Double Agent'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "doubleAgent", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slider',
                    label: 'BMI Index',
                    data: { min: 1, max: 35 }
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "bmi", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'select',
                    label: 'Super Power',
                    data: {
                        options: [
                            { value: 'selfHealing', label: 'Self Healing' },
                            { value: 'flying', label: 'Flying' },
                            { value: 'cloaking', label: 'Cloaking' },
                            { value: 'cloning', label: 'Cloaning' },
                            { value: 'invisibility', label: 'Invisibility' }
                        ]
                    }
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "superPower", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                flatten: {
                    name: {
                        required: true,
                        render: {
                            vType: 'text',
                            label: 'Base Name',
                        }
                    },
                    coordinates: {
                        flatten: {
                            lng: {
                                render: {
                                    vType: 'number',
                                    label: 'Base Longitude'
                                }
                            },
                            lat: {
                                render: {
                                    vType: 'number',
                                    label: 'Base Latitude'
                                }
                            }
                        }
                    }
                }
            }
        }),
        __metadata("design:type", Object)
    ], Hero.prototype, "base", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Allies'
                }
            }
        }),
        __metadata("design:type", Array)
    ], Hero.prototype, "allies", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            type: function () { return _15_flattening__WEBPACK_IMPORTED_MODULE_1__["HeroAddress"]; },
            form: {
                required: true,
                render: {
                    vType: 'form',
                    label: 'Address',
                    identity: 'street'
                },
                childForm: true
            }
        }),
        __metadata("design:type", Array)
    ], Hero.prototype, "address", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'form',
                    label: 'Brother'
                },
                childForm: true
            }
        }),
        __metadata("design:type", Hero)
    ], Hero.prototype, "brother", void 0);
    Hero = __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"])({
            form: true
        })
    ], Hero);
    return Hero;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/1a-overview/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/@forms/tutorials/1a-overview/index.ts ***!
  \***********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.component */ "./src/modules/@forms/tutorials/1a-overview/overview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return _overview_component__WEBPACK_IMPORTED_MODULE_0__["OverviewComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/1a-overview/overview.component.html":
/*!**************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/1a-overview/overview.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/1a-overview/overview.component.scss":
/*!**************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/1a-overview/overview.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/1a-overview/overview.component.ts":
/*!************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/1a-overview/overview.component.ts ***!
  \************************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
        this.code = __webpack_require__.e(/*! import() | FormsOverviewComponent */ "FormsOverviewComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/1a-overview/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
    }
    OverviewComponent.tutorial = {
        id: 'overview',
        name: 'Overview'
    };
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/modules/@forms/tutorials/1a-overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/modules/@forms/tutorials/1a-overview/overview.component.scss")]
        })
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/2-setup/index.ts":
/*!*******************************************************!*\
  !*** ./src/modules/@forms/tutorials/2-setup/index.ts ***!
  \*******************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.component */ "./src/modules/@forms/tutorials/2-setup/setup.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return _setup_component__WEBPACK_IMPORTED_MODULE_0__["SetupComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/2-setup/setup.component.html":
/*!*******************************************************************!*\
  !*** ./src/modules/@forms/tutorials/2-setup/setup.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/2-setup/setup.component.scss":
/*!*******************************************************************!*\
  !*** ./src/modules/@forms/tutorials/2-setup/setup.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/2-setup/setup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/@forms/tutorials/2-setup/setup.component.ts ***!
  \*****************************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SetupComponent = /** @class */ (function () {
    function SetupComponent() {
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | FormsSetupComponent */ "FormsSetupComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/2-setup/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    SetupComponent.tutorial = {
        id: 'setup',
        name: 'Setup'
    };
    SetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/modules/@forms/tutorials/2-setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.scss */ "./src/modules/@forms/tutorials/2-setup/setup.component.scss")]
        })
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/3-creating-a-model/creating-a-model.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/3-creating-a-model/creating-a-model.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part1'}]:true\"></tdm-markdown-view>\n\n<form-wrapper [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template'}, {title: 'Model'}]\">\n  <!--@tdm-example:tdmDemo-->\n  <dynamic-form [model]=\"model\"></dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/3-creating-a-model/creating-a-model.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/3-creating-a-model/creating-a-model.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/3-creating-a-model/creating-a-model.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/3-creating-a-model/creating-a-model.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CreatingAModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatingAModelComponent", function() { return CreatingAModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/3-creating-a-model/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CreatingAModelComponent = /** @class */ (function () {
    function CreatingAModelComponent() {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_1__["Hero"]();
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | FormsCreatingAModelComponent */ "FormsCreatingAModelComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/3-creating-a-model/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    CreatingAModelComponent.tutorial = {
        id: 'creating-a-model',
        name: 'Creating A Model'
    };
    CreatingAModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-creating-a-model',
            template: __webpack_require__(/*! ./creating-a-model.component.html */ "./src/modules/@forms/tutorials/3-creating-a-model/creating-a-model.component.html"),
            styles: [__webpack_require__(/*! ./creating-a-model.component.scss */ "./src/modules/@forms/tutorials/3-creating-a-model/creating-a-model.component.scss")],
        })
    ], CreatingAModelComponent);
    return CreatingAModelComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/3-creating-a-model/index.ts":
/*!******************************************************************!*\
  !*** ./src/modules/@forms/tutorials/3-creating-a-model/index.ts ***!
  \******************************************************************/
/*! exports provided: CreatingAModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creating_a_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creating-a-model.component */ "./src/modules/@forms/tutorials/3-creating-a-model/creating-a-model.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatingAModelComponent", function() { return _creating_a_model_component__WEBPACK_IMPORTED_MODULE_0__["CreatingAModelComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/3-creating-a-model/model.ts":
/*!******************************************************************!*\
  !*** ./src/modules/@forms/tutorials/3-creating-a-model/model.ts ***!
  \******************************************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Hero = /** @class */ (function () {
    function Hero() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["FormProp"])({
            render: {
                vType: 'number',
                label: 'Hero ID'
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "id", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["FormProp"])({
            render: {
                vType: 'text',
                label: 'Hero Name'
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["FormProp"])({
            render: {
                vType: 'boolean',
                label: 'Super Hero'
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "superHero", void 0);
    Hero = __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"])(),
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["FormModel"])()
    ], Hero);
    return Hero;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/4-element-metadata/element-metadata.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/4-element-metadata/element-metadata.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<tdm-code-view [code]=\"code | async | tdmCode:[{file: 'model.ts'}]\"></tdm-code-view>\n\n<form-wrapper [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template'}, {title: 'Model'}]\">\n  <!--@tdm-example:tdmDemo-->\n  <dynamic-form [model]=\"model\"></dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n\n<tdm-markdown-view>\n  <p>There is something wrong with the form, an inline layout is applied. In the next chapter we will try to fix that.</p>\n</tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/4-element-metadata/element-metadata.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/4-element-metadata/element-metadata.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/4-element-metadata/element-metadata.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/4-element-metadata/element-metadata.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ElementMetadataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementMetadataComponent", function() { return ElementMetadataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/4-element-metadata/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ElementMetadataComponent = /** @class */ (function () {
    function ElementMetadataComponent() {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_1__["Hero"]();
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | FormsElementMetadataComponent */ "FormsElementMetadataComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/4-element-metadata/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    ElementMetadataComponent.tutorial = {
        id: 'element-metadata',
        name: 'Element Metadata'
    };
    ElementMetadataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-element-metadata',
            template: __webpack_require__(/*! ./element-metadata.component.html */ "./src/modules/@forms/tutorials/4-element-metadata/element-metadata.component.html"),
            styles: [__webpack_require__(/*! ./element-metadata.component.scss */ "./src/modules/@forms/tutorials/4-element-metadata/element-metadata.component.scss")],
        })
    ], ElementMetadataComponent);
    return ElementMetadataComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/4-element-metadata/index.ts":
/*!******************************************************************!*\
  !*** ./src/modules/@forms/tutorials/4-element-metadata/index.ts ***!
  \******************************************************************/
/*! exports provided: ElementMetadataComponent, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _element_metadata_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-metadata.component */ "./src/modules/@forms/tutorials/4-element-metadata/element-metadata.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementMetadataComponent", function() { return _element_metadata_component__WEBPACK_IMPORTED_MODULE_0__["ElementMetadataComponent"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/4-element-metadata/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Hero"]; });





/***/ }),

/***/ "./src/modules/@forms/tutorials/4-element-metadata/model.ts":
/*!******************************************************************!*\
  !*** ./src/modules/@forms/tutorials/4-element-metadata/model.ts ***!
  \******************************************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Hero = /** @class */ (function () {
    function Hero() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'number',
                    label: 'Hero ID'
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "id", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Hero Name'
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'date',
                    label: 'Hero Birth'
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "birth", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'boolean',
                    label: 'Has Tracking Device'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "hasTracking", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slideToggle',
                    label: 'Double Agent'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "doubleAgent", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slider',
                    label: 'BMI Index',
                    data: { min: 1, max: 35 }
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "bmi", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'select',
                    label: 'Super Power',
                    data: {
                        options: [
                            { value: 'selfHealing', label: 'Self Healing' },
                            { value: 'flying', label: 'Flying' },
                            { value: 'cloaking', label: 'Cloaking' },
                            { value: 'cloning', label: 'Cloning' },
                            { value: 'invisibility', label: 'Invisibility' }
                        ]
                    }
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "superPower", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'textarea',
                    label: 'Bio',
                    data: {
                        autoSize: false,
                        minRows: 3,
                        maxRows: 5
                    }
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "bio", void 0);
    Hero = __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"])({
            form: true
        })
    ], Hero);
    return Hero;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/5-renderer-container/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/@forms/tutorials/5-renderer-container/index.ts ***!
  \********************************************************************/
/*! exports provided: RenderContainerComponent, DynamicFormRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-container.component */ "./src/modules/@forms/tutorials/5-renderer-container/render-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderContainerComponent", function() { return _render_container_component__WEBPACK_IMPORTED_MODULE_0__["RenderContainerComponent"]; });

/* harmony import */ var _renderer_dynamic_form_row_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer/dynamic-form-row.component */ "./src/modules/@forms/tutorials/5-renderer-container/renderer/dynamic-form-row.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormRowComponent", function() { return _renderer_dynamic_form_row_component__WEBPACK_IMPORTED_MODULE_1__["DynamicFormRowComponent"]; });





/***/ }),

/***/ "./src/modules/@forms/tutorials/5-renderer-container/render-container.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/5-renderer-container/render-container.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part1'}]:true\"></tdm-markdown-view>\n\n<tdm-code-view [code]=\"code | async | tdmCode:[{file: 'dynamic-form-row.component.html'}, {file: 'dynamic-form-row.component.ts'}]\"></tdm-code-view>\n\n\n<form-wrapper [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template'}, {title: 'Model'}]\">\n  <!--@tdm-example:tdmDemo-->\n  <dynamic-form [model]=\"model\"></dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part2'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/5-renderer-container/render-container.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/5-renderer-container/render-container.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".element-row {\n  position: relative; }\n\n.element-row:not(.expanded) {\n  cursor: pointer; }\n\n.element-row:not(.expanded):hover {\n  background: #f5f5f5; }\n\n.element-row.expanded {\n  border-bottom-color: transparent; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/5-renderer-container/render-container.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/5-renderer-container/render-container.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RenderContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderContainerComponent", function() { return RenderContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
/* harmony import */ var _renderer_dynamic_form_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer/dynamic-form-row.component */ "./src/modules/@forms/tutorials/5-renderer-container/renderer/dynamic-form-row.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RenderContainerComponent = /** @class */ (function () {
    function RenderContainerComponent() {
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_2__["Hero"]();
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | FormsRenderContainerComponent */ "FormsRenderContainerComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/5-renderer-container/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        this.model.bmi = 25;
        this.model.name = 'Bat Man';
        this.model.doubleAgent = true;
    }
    RenderContainerComponent.tutorial = {
        id: 'render-container',
        name: 'Render Container'
    };
    RenderContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-render-container',
            template: __webpack_require__(/*! ./render-container.component.html */ "./src/modules/@forms/tutorials/5-renderer-container/render-container.component.html"),
            styles: [__webpack_require__(/*! ./render-container.component.scss */ "./src/modules/@forms/tutorials/5-renderer-container/render-container.component.scss")],
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _renderer_dynamic_form_row_component__WEBPACK_IMPORTED_MODULE_3__["DynamicFormRowComponent"] }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RenderContainerComponent);
    return RenderContainerComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/5-renderer-container/renderer/dynamic-form-row.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/5-renderer-container/renderer/dynamic-form-row.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [style.display]=\"item.hidden ? 'none' : undefined\">\n  <div fxLayout=\"row\" class=\"dyn-form-row\">\n    <div fxFlex=\"0 1 50%\" fxLayoutAlign=\"end center\" class=\"dyn-form-label\" >\n      <span *ngIf=\"item.required\">*</span>\n      <span>{{item.label}}</span>\n    </div>\n    <div fxFlex=\"0 1 50%\" class=\"dyn-form-element-container dyn-form-element-container-{{item.vType}}\">\n      <material-form-control-renderer *ngIf=\"!custom\"\n                                      showLabels=\"false\"\n                                      [dynForm]=\"dynForm\"\n                                      [tdmForm]=\"tdmForm\"\n                                      [fArray]=\"fArray\"\n                                      [fControl]=\"fControl\"\n                                      [fGroup]=\"fGroup\"\n                                      [item]=\"item\"></material-form-control-renderer>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/5-renderer-container/renderer/dynamic-form-row.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/5-renderer-container/renderer/dynamic-form-row.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dyn-form-row {\n  margin: 0 25px 5px 25px; }\n\n.dyn-form-label {\n  text-align: right; }\n\n.dyn-form-element-container {\n  padding-left: 25px; }\n\n.dyn-form-element-container.dyn-form-element-container-radio {\n    padding-left: 0; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/5-renderer-container/renderer/dynamic-form-row.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/5-renderer-container/renderer/dynamic-form-row.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DynamicFormRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormRowComponent", function() { return DynamicFormRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/esm5/coercion.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicFormRowComponent = /** @class */ (function () {
    function DynamicFormRowComponent() {
    }
    Object.defineProperty(DynamicFormRowComponent.prototype, "fromContext", {
        /**
         * Allows setting the context using `DynamicControlRenderContext` directly.
         */
        set: function (value) {
            if (value) {
                Object.assign(this, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormRowComponent.prototype.ngOnChanges = function (change) {
        if ('custom' in change) {
            this.custom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(this.custom);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DynamicFormRowComponent.prototype, "custom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["DynamicFormComponent"])
    ], DynamicFormRowComponent.prototype, "dynForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["RenderInstruction"])
    ], DynamicFormRowComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["TDMModelForm"])
    ], DynamicFormRowComponent.prototype, "tdmForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"])
    ], DynamicFormRowComponent.prototype, "fArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], DynamicFormRowComponent.prototype, "fControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], DynamicFormRowComponent.prototype, "fGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicFormRowComponent.prototype, "fromContext", null);
    DynamicFormRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-form-row',
            template: __webpack_require__(/*! ./dynamic-form-row.component.html */ "./src/modules/@forms/tutorials/5-renderer-container/renderer/dynamic-form-row.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-form-row.component.scss */ "./src/modules/@forms/tutorials/5-renderer-container/renderer/dynamic-form-row.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], DynamicFormRowComponent);
    return DynamicFormRowComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/6-validation/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/@forms/tutorials/6-validation/index.ts ***!
  \************************************************************/
/*! exports provided: ValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.component */ "./src/modules/@forms/tutorials/6-validation/validation.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return _validation_component__WEBPACK_IMPORTED_MODULE_0__["ValidationComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/6-validation/model.ts":
/*!************************************************************!*\
  !*** ./src/modules/@forms/tutorials/6-validation/model.ts ***!
  \************************************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function fakeCheckName(c) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var name = c.value || '';
            if (!name || name[0].toLowerCase() === 'a') {
                resolve({
                    nameExists: name + " already exists"
                });
            }
            else {
                resolve(null);
            }
        }, 1000);
    });
}
var Hero = /** @class */ (function () {
    function Hero() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'number',
                    label: 'Hero ID'
                },
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(999999)])
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "id", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Hero Name'
                },
                asyncValidators: fakeCheckName
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'boolean',
                    label: 'Has Tracking Device'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "hasTracking", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slideToggle',
                    label: 'Double Agent'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "doubleAgent", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slider',
                    label: 'BMI Index',
                    data: { min: 1, max: 35 }
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "bmi", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'select',
                    label: 'Super Power',
                    data: { options: [
                            { value: 'selfHealing', label: 'Self Healing' },
                            { value: 'flying', label: 'Flying' },
                            { value: 'cloaking', label: 'Cloaking' },
                            { value: 'cloning', label: 'Cloaning' },
                            { value: 'invisibility', label: 'Invisibility' }
                        ] }
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "superPower", void 0);
    Hero = __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"])({
            form: true
        })
    ], Hero);
    return Hero;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/6-validation/validation.component.html":
/*!*****************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/6-validation/validation.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Validation\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template'}, {title: 'Model'}]\">\n  <div class=\"custom-form-actions\">\n    <mat-slide-toggle [checked]=\"required\"\n                      (change)=\"requiredChanged(dynForm, !!$event.checked)\">ID Required</mat-slide-toggle>\n  </div>\n  <dynamic-form #dynForm [model]=\"model\"></dynamic-form>\n</form-wrapper>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/6-validation/validation.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/6-validation/validation.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".element-row {\n  position: relative; }\n\n.element-row:not(.expanded) {\n  cursor: pointer; }\n\n.element-row:not(.expanded):hover {\n  background: #f5f5f5; }\n\n.element-row.expanded {\n  border-bottom-color: transparent; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/6-validation/validation.component.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/6-validation/validation.component.ts ***!
  \***************************************************************************/
/*! exports provided: ValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return ValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/6-validation/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var ValidationComponent = /** @class */ (function () {
    function ValidationComponent() {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        this.required = false;
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | FormsValidationComponent */ "FormsValidationComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/6-validation/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    ValidationComponent.prototype.requiredChanged = function (dynForm, value) {
        var ri = dynForm.tdmForm.renderData.find(function (r) { return r.name === 'id'; });
        this.required = value;
        ri.required = value;
    };
    ValidationComponent.tutorial = {
        id: 'validation',
        name: 'Validation'
    };
    ValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-validation',
            template: __webpack_require__(/*! ./validation.component.html */ "./src/modules/@forms/tutorials/6-validation/validation.component.html"),
            styles: [__webpack_require__(/*! ./validation.component.scss */ "./src/modules/@forms/tutorials/6-validation/validation.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], ValidationComponent);
    return ValidationComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/7-virtual-groups/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/@forms/tutorials/7-virtual-groups/index.ts ***!
  \****************************************************************/
/*! exports provided: VirtualGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_groups_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual-groups.component */ "./src/modules/@forms/tutorials/7-virtual-groups/virtual-groups.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualGroupsComponent", function() { return _virtual_groups_component__WEBPACK_IMPORTED_MODULE_0__["VirtualGroupsComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/7-virtual-groups/virtual-groups.component.html":
/*!*************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/7-virtual-groups/virtual-groups.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part1'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Sections\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template', section: 'simple'}, {title: 'Model'}]\">\n  <div ngProjectAs=\"dynamic-form\">\n    <!--@tdm-example:simple-->\n    <h1>Section: User Name</h1>\n    <dynamic-form #dynFormMaster\n                  [model]=\"model\"\n                  filterMode=\"include\"\n                  [filter]=\"['id', 'name']\"></dynamic-form>\n    <br>\n  </div><!--@tdm-ignore-line-->\n\n  <div ngProjectAs=\"dynamic-form\"><!--@tdm-ignore-line-->\n    <h1>Section: Other</h1>\n    <dynamic-form [slaveOf]=\"dynFormMaster\"\n                  [filter]=\"['id', 'name']\"></dynamic-form>\n    <!--@tdm-example:simple-->\n  </div>\n</form-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part2'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Sections #2\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template', section: '3way'}, {title: 'Model'}]\">\n  <div ngProjectAs=\"dynamic-form\">\n    <!--@tdm-example:3way-->\n    <h1>Section: User Name</h1>\n    <dynamic-form #dynFormMaster3Way\n                  [model]=\"model\"\n                  filterMode=\"include\"\n                  [filter]=\"['id', 'name']\"></dynamic-form>\n    <br>\n  </div><!--@tdm-ignore-line-->\n\n  <div ngProjectAs=\"dynamic-form\"><!--@tdm-ignore-line-->\n    <h1>Section: Other</h1>\n    <mat-tab-group>\n      <mat-tab label=\"BOOLEAN\">\n        <dynamic-form [slaveOf]=\"dynFormMaster3Way\"\n                      [filter]=\"['id', 'name', 'bmi', 'superPower']\"></dynamic-form>\n      </mat-tab>\n      <mat-tab label=\"OTHER\">\n        <dynamic-form [slaveOf]=\"dynFormMaster3Way\"\n                      [filter]=\"['id', 'name', 'hasTracking', 'doubleAgent']\"></dynamic-form>\n      </mat-tab>\n    </mat-tab-group>\n    <!--@tdm-example:3way-->\n  </div>\n</form-wrapper>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/7-virtual-groups/virtual-groups.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/7-virtual-groups/virtual-groups.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".element-row {\n  position: relative; }\n\n.element-row:not(.expanded) {\n  cursor: pointer; }\n\n.element-row:not(.expanded):hover {\n  background: #f5f5f5; }\n\n.element-row.expanded {\n  border-bottom-color: transparent; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/7-virtual-groups/virtual-groups.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/7-virtual-groups/virtual-groups.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VirtualGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualGroupsComponent", function() { return VirtualGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var VirtualGroupsComponent = /** @class */ (function () {
    function VirtualGroupsComponent() {
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | FormsVirtualGroupsComponent */ "FormsVirtualGroupsComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/7-virtual-groups/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    VirtualGroupsComponent.tutorial = {
        id: 'virtual-groups',
        name: 'Virtual Groups'
    };
    VirtualGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-virtual-groups',
            template: __webpack_require__(/*! ./virtual-groups.component.html */ "./src/modules/@forms/tutorials/7-virtual-groups/virtual-groups.component.html"),
            styles: [__webpack_require__(/*! ./virtual-groups.component.scss */ "./src/modules/@forms/tutorials/7-virtual-groups/virtual-groups.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], VirtualGroupsComponent);
    return VirtualGroupsComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/8-local-override/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/@forms/tutorials/8-local-override/index.ts ***!
  \****************************************************************/
/*! exports provided: LocalOverrideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _local_override_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-override.component */ "./src/modules/@forms/tutorials/8-local-override/local-override.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalOverrideComponent", function() { return _local_override_component__WEBPACK_IMPORTED_MODULE_0__["LocalOverrideComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/8-local-override/local-override.component.html":
/*!*************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/8-local-override/local-override.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part1'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Local Custom Template\"\n              [code]=\"code | async | tdmCode:[{title: 'Component', section: 'tdmModel'}, {title: 'Template', section: 'tdmModel'}, {title: 'Model'}]\">\n<!--@tdm-example:tdmModel-->\n  <dynamic-form #dynFormMaster [model]=\"model\">\n\n    <ng-container *dynamicFormOverride=\"'*'; let ctx; vType: ['boolean', 'slideToggle']\">\n      <dynamic-form-row [fromContext]=\"ctx\" custom>\n        <mat-button-toggle-group [formControl]=\"ctx.fControl\">\n          <mat-button-toggle [value]=\"true\">YES</mat-button-toggle>\n          <mat-button-toggle [value]=\"false\">NO</mat-button-toggle>\n        </mat-button-toggle-group>\n      </dynamic-form-row>\n    </ng-container>\n\n    <ng-container *dynamicFormOverride=\"'name'; let ctx\">\n      <dynamic-form-row [fromContext]=\"ctx\" custom>\n        <mat-form-field>\n          <input type=\"text\" matInput [formControl]=\"ctx.fControl\" [matAutocomplete]=\"auto\">\n        </mat-form-field>\n\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option value=\"batman\">Bat Man</mat-option>\n          <mat-option value=\"superman\">Super Man</mat-option>\n          <mat-option value=\"spiderman\">Spider Man</mat-option>\n          <mat-option value=\"thor\">Thor</mat-option>\n          <mat-option value=\"wonderwomen\">Wonder Women</mat-option>\n          <mat-option value=\"captainamerica\">Captain America</mat-option>\n        </mat-autocomplete>\n      </dynamic-form-row>\n    </ng-container>\n\n  </dynamic-form>\n  <!--@tdm-example:tdmModel-->\n</form-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part2'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Programmatic Override\"\n              [code]=\"code | async | tdmCode:[{title: 'Component', section: 'tdmModel2'}, {title: 'Template', section: 'tdmModel2'}, {title: 'Model'}]\">\n\n<!--@tdm-example:tdmModel2-->\n  <dynamic-form #dynFormCustomOverride [slaveOf]=\"dynFormMaster\"></dynamic-form>\n  <ng-template #defaultFieldOverrideTpl let-ctx>\n    <div>\n      <span style=\"display: inline-block; min-width: 200px\"><b>{{ctx.item.label}}</b></span>\n      <span>{{ctx.tdmForm.getValue(ctx.item.getRuntimePath(ctx.fControl)) || 'Not Set'}}</span>\n    </div>\n  </ng-template>\n  <!--@tdm-example:tdmModel2-->\n</form-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part3'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/8-local-override/local-override.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/8-local-override/local-override.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/8-local-override/local-override.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/8-local-override/local-override.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LocalOverrideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalOverrideComponent", function() { return LocalOverrideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* @tdm-example:tdmModel */
/* @tdm-example:tdmModel2 */

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */


var LocalOverrideComponent = /** @class */ (function () {
    function LocalOverrideComponent() {
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        /* @tdm-ignore:tdmModel */
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | FormsLocalOverrideComponent */ "FormsLocalOverrideComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/8-local-override/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    LocalOverrideComponent.prototype.ngAfterViewInit = function () {
        this.dynFormCustomOverride.addOverride({ controlName: '*' }, this.defaultFieldOverrideTpl, true);
    };
    LocalOverrideComponent.tutorial = {
        id: 'local-override',
        name: 'Local Override'
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dynFormCustomOverride'),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["DynamicFormComponent"])
    ], LocalOverrideComponent.prototype, "dynFormCustomOverride", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('defaultFieldOverrideTpl', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], LocalOverrideComponent.prototype, "defaultFieldOverrideTpl", void 0);
    LocalOverrideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-local-override',
            template: __webpack_require__(/*! ./local-override.component.html */ "./src/modules/@forms/tutorials/8-local-override/local-override.component.html"),
            styles: [__webpack_require__(/*! ./local-override.component.scss */ "./src/modules/@forms/tutorials/8-local-override/local-override.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], LocalOverrideComponent);
    return LocalOverrideComponent;
}());

/* @tdm-example:tdmModel */
/* @tdm-example:tdmModel2 */


/***/ }),

/***/ "./src/modules/@forms/tutorials/9-filter-disable-hidden-state/filter-disable-hidden-state.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/9-filter-disable-hidden-state/filter-disable-hidden-state.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part1'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Filter / Disable / Hidden\"\n              [code]=\"code | async | tdmCode:[{title: 'Component', section: 'tdmDemo'}, {title: 'Template', section: 'tdmDemo'}, {title: 'Model'}]\">\n  <!--@tdm-example:tdmDemo-->\n  <div class=\"custom-form-actions\">\n    <label>Filter Mode: </label>\n    <mat-radio-group #filterMode=\"matRadioGroup\" value=\"exclude\">\n      <mat-radio-button value=\"exclude\">Exclude</mat-radio-button>\n      <mat-radio-button value=\"include\">Include</mat-radio-button>\n    </mat-radio-group>\n  </div>\n\n  <dynamic-form [model]=\"model\"\n                [filter]=\"['superPower']\"\n                [filterMode]=\"filterMode.selected.value\"\n                [hiddenState]=\"['hasTracking']\"\n                [disabledState]=\"['name', 'id']\">\n  </dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n\n<tdm-markdown-view>\n  <p>The following example demonstrates an interactive panel for toggling each of the states</p>\n</tdm-markdown-view>\n<form-wrapper #formWrapper rightDrawerOpened\n              title=\"Exclude / Disable / Hidden interactive\"\n              [code]=\"code | async | tdmCode:[{title: 'Component', section: 'tdmDemoInteractive'}, {title: 'Template', section: 'tdmDemoInteractive'}, {title: 'Model'}]\">\n  <div class=\"custom-form-actions\" *ngIf=\"!formWrapper.rightDrawerOpened\">\n    <button mat-icon-button (click)=\"formWrapper.rightDrawerOpened = true\">\n      OPEN STATE CONSOLE\n      <mat-icon>keyboard_arrow_right</mat-icon>\n    </button>\n  </div>\n  <div class=\"form-wrapper-right-drawer\">\n    <div style=\"text-align: right\">\n      <button mat-icon-button (click)=\"formWrapper.rightDrawerOpened = false\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n    <!--@tdm-example:tdmDemoInteractive-->\n    <div class=\"filter-mode\">\n      <label>Filter Mode: </label>\n      <mat-radio-group #filterModeInteractive=\"matRadioGroup\" value=\"exclude\">\n        <mat-radio-button value=\"exclude\">Exclude</mat-radio-button>\n        <mat-radio-button value=\"include\">Include</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <mat-list dense style=\"max-width: 400px; min-height: 300px\">\n      <mat-list-item>\n        <div fxLayout=\"row\" style=\"width: 100%;\">\n          <div fxFlex=\"40%\"></div>\n          <div fxFlex=\"20%\">{{filterModeInteractive.value === 'include' ? 'Include' : 'Exclude'}}</div>\n          <div fxFlex=\"20%\">Disabled</div>\n          <div fxFlex=\"20%\">Hidden</div>\n        </div>\n      </mat-list-item>\n      <mat-list-item *ngFor=\"let prop of ['id', 'name', 'hasTracking', 'doubleAgent', 'bmi', 'superPower']\">\n        <div fxLayout=\"row\" style=\"width: 100%;\">\n          <div fxFlex=\"40%\">{{prop}}</div>\n          <mat-checkbox fxFlex=\"20%\"\n                        [checked]=\"controlState.exclude.indexOf(prop) > -1\"\n                        (click)=\"handleControlState(controlState.exclude, prop)\"></mat-checkbox>\n          <mat-checkbox fxFlex=\"20%\"\n                        [checked]=\"controlState.disabled.indexOf(prop) > -1\"\n                        (click)=\"handleControlState(controlState.disabled, prop)\"></mat-checkbox>\n          <mat-checkbox fxFlex=\"20%\"\n                        [checked]=\"controlState.hidden.indexOf(prop) > -1\"\n                        (click)=\"handleControlState(controlState.hidden, prop)\"></mat-checkbox>\n        </div>\n      </mat-list-item>\n    </mat-list>\n  </div> <!--@tdm-ignore-line-->\n  <div ngProjectAs=\"dynamic-form\" style=\"min-height: 300px\">\n    <dynamic-form [model]=\"model\"\n                  [filter]=\"controlState.exclude\"\n                  [filterMode]=\"filterModeInteractive.selected.value\"\n                  [disabledState]=\"controlState.disabled\"\n                  [hiddenState]=\"controlState.hidden\">\n    </dynamic-form>\n  </div>\n  <!--@tdm-example:tdmDemoInteractive-->\n</form-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part2'}]:true\"></tdm-markdown-view>\n\n<form-wrapper #formWrapper2 rightDrawerOpened\n              title=\"Ignoring validation in an Excluded field\"\n              [code]=\"code | async | tdmCode:[{title: 'Component', section: 'tdmDemoExcludeRequired'}, {title: 'Template', section: 'tdmDemoExcludeRequired'}, {title: 'Model'}]\">\n  <div class=\"custom-form-actions\" *ngIf=\"!formWrapper2.rightDrawerOpened\">\n    <button mat-icon-button (click)=\"formWrapper2.rightDrawerOpened = true\">\n      OPEN STATE CONSOLE\n      <mat-icon>keyboard_arrow_right</mat-icon>\n    </button>\n  </div>\n  <div class=\"form-wrapper-right-drawer\">\n    <div style=\"text-align: right\">\n      <button mat-icon-button (click)=\"formWrapper2.rightDrawerOpened = false\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n    <!--@tdm-example:tdmDemoExcludeRequired-->\n    <mat-list dense style=\"max-width: 400px\">\n      <mat-list-item>\n        <div fxLayout=\"row\" style=\"width: 100%;\">\n          <div fxFlex=\"40%\"></div>\n          <div fxFlex=\"20%\">Exclude</div>\n          <div fxFlex=\"20%\">Disabled</div>\n          <div fxFlex=\"20%\">Hidden</div>\n        </div>\n      </mat-list-item>\n      <mat-list-item *ngFor=\"let prop of ['name']\">\n        <div fxLayout=\"row\" style=\"width: 100%;\">\n          <div fxFlex=\"40%\">{{prop}}</div>\n          <mat-checkbox fxFlex=\"20%\"\n                        disabled\n                        [checked]=\"controlStateExcludeDisabled.exclude.indexOf(prop) > -1\"></mat-checkbox>\n          <mat-checkbox fxFlex=\"20%\"\n                        [checked]=\"controlStateExcludeDisabled.disabled.indexOf(prop) > -1\"\n                        (click)=\"handleControlState(controlStateExcludeDisabled.disabled, prop)\"></mat-checkbox>\n          <mat-checkbox fxFlex=\"20%\"\n                        disabled\n                        [checked]=\"controlStateExcludeDisabled.hidden.indexOf(prop) > -1\"></mat-checkbox>\n        </div>\n      </mat-list-item>\n    </mat-list>\n  </div> <!--@tdm-ignore-line-->\n  <dynamic-form [model]=\"modelExcludeDisabled\"\n                [filter]=\"controlStateExcludeDisabled.exclude\"\n                [disabledState]=\"controlStateExcludeDisabled.disabled\"\n                [hiddenState]=\"controlStateExcludeDisabled.hidden\"></dynamic-form>\n  <!--@tdm-example:tdmDemoExcludeRequired-->\n</form-wrapper>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/9-filter-disable-hidden-state/filter-disable-hidden-state.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/9-filter-disable-hidden-state/filter-disable-hidden-state.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-wrapper-right-drawer {\n  width: 300px; }\n\n.filter-mode {\n  margin: 15px; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/9-filter-disable-hidden-state/filter-disable-hidden-state.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/9-filter-disable-hidden-state/filter-disable-hidden-state.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: FilterDisableHiddenStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDisableHiddenStateComponent", function() { return FilterDisableHiddenStateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* @tdm-example:tdmDemo */
/* @tdm-example:tdmDemoInteractive */
/* @tdm-example:tdmDemoExcludeRequired */

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */
;

var FilterDisableHiddenStateComponent = /** @class */ (function () {
    function FilterDisableHiddenStateComponent() {
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        /* @tdm-ignore:tdmDemo */
        this.modelExcludeDisabled = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__["Hero"](); /* @tdm-ignore-line:tdmDemoInteractive */
        this.code = __webpack_require__.e(/*! import() | FormsFilterDisableHiddenStateComponent */ "FormsFilterDisableHiddenStateComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/9-filter-disable-hidden-state/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        this.controlState = { exclude: [], disabled: [], hidden: [] }; /* @tdm-ignore-line:tdmDemoExcludeRequired */ // tslint:disable-line
        this.controlStateExcludeDisabled = { exclude: ['name'], disabled: [], hidden: [] }; /* @tdm-ignore-line:tdmDemoInteractive */
        /* @tdm-ignore:* */
    }
    FilterDisableHiddenStateComponent.prototype.handleControlState = function (state, name) {
        setTimeout(function () {
            var idx = state.indexOf(name);
            if (idx === -1) {
                state.push(name);
            }
            else {
                state.splice(idx, 1);
            }
        });
    };
    /* @tdm-ignore:tdmDemo */
    /* @tdm-ignore:* */
    FilterDisableHiddenStateComponent.tutorial = {
        id: 'filter-disable-hidden-state',
        name: 'Filter / Disabled / Hidden state'
    };
    FilterDisableHiddenStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-filter-disable-hidden-state',
            template: __webpack_require__(/*! ./filter-disable-hidden-state.component.html */ "./src/modules/@forms/tutorials/9-filter-disable-hidden-state/filter-disable-hidden-state.component.html"),
            styles: [__webpack_require__(/*! ./filter-disable-hidden-state.component.scss */ "./src/modules/@forms/tutorials/9-filter-disable-hidden-state/filter-disable-hidden-state.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], FilterDisableHiddenStateComponent);
    return FilterDisableHiddenStateComponent;
}());

/* @tdm-example:tdmDemo */
/* @tdm-example:tdmDemoInteractive */
/* @tdm-example:tdmDemoExcludeRequired */


/***/ }),

/***/ "./src/modules/@forms/tutorials/9-filter-disable-hidden-state/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/9-filter-disable-hidden-state/index.ts ***!
  \*****************************************************************************/
/*! exports provided: FilterDisableHiddenStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_disable_hidden_state_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-disable-hidden-state.component */ "./src/modules/@forms/tutorials/9-filter-disable-hidden-state/filter-disable-hidden-state.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterDisableHiddenStateComponent", function() { return _filter_disable_hidden_state_component__WEBPACK_IMPORTED_MODULE_0__["FilterDisableHiddenStateComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/events/before-render-event/before-render-event.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/before-render-event/before-render-event.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n<form-wrapper title=\"Event: (beforeRender)\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template'}, {title: 'Style'}, {title: 'Model'}]\">\n<!--@tdm-example:tdmDemo-->\n<dynamic-form [model]=\"model\"\n              [filter]=\"['base', 'allies', 'basesDestroyed']\"\n              (beforeRender)=\"beforeRender($event)\"></dynamic-form>\n<!--@tdm-example:tdmDemo-->\n</form-wrapper>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/events/before-render-event/before-render-event.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/before-render-event/before-render-event.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/events/before-render-event/before-render-event.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/before-render-event/before-render-event.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: getSuperPowersAsync, BeforeRenderEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperPowersAsync", function() { return getSuperPowersAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeRenderEventComponent", function() { return BeforeRenderEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

function getSuperPowersAsync() {
    return new Promise(function (r) { return setTimeout(r, 1000); })
        .then(function () {
        return [
            { value: 'atomicVision', label: 'Atomic Vision' },
            { value: 'teleportation', label: 'Teleportation' },
            { value: 'physicalRestoration', label: 'Physical Restoration' },
            { value: 'timeTravel', label: 'Time Travel' },
            { value: 'mindReading', label: 'Mind Reading' }
        ];
    });
}
var BeforeRenderEventComponent = /** @class */ (function () {
    function BeforeRenderEventComponent() {
        this.code = __webpack_require__.e(/*! import() | FormsBeforeRenderEventComponent */ "FormsBeforeRenderEventComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/events/before-render-event/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        /* @tdm-ignore:* */
    }
    BeforeRenderEventComponent.prototype.beforeRender = function ($event) {
        var bmi = $event.instructions['bmi'];
        if (bmi) {
            bmi.vType = 'number';
        }
        var superPower = $event.instructions['superPower'];
        if (superPower) {
            // ASYNC CALLS THAT BLOCK THE WHOLE FORM FROM RENDERING, GOOD FOR GETTING DATA FROM REMOTE SERVER.
            // E.G.: GETTING GROUPS LISTED UNDER A USER, ETC...
            var p = getSuperPowersAsync().then(function (newPowers) {
                var existingPowers = superPower.getData('options') || [];
                existingPowers.push.apply(existingPowers, newPowers);
                superPower.mergeData({ options: existingPowers });
            });
            // mark this field as async, no render until promise completes.
            $event.async(p);
        }
    };
    /* @tdm-ignore:* */
    BeforeRenderEventComponent.tutorial = {
        id: 'before-render-event',
        name: 'Event: (beforeRender)',
        subHeader: 'Events'
    };
    BeforeRenderEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-before-render-event',
            template: __webpack_require__(/*! ./before-render-event.component.html */ "./src/modules/@forms/tutorials/events/before-render-event/before-render-event.component.html"),
            styles: [__webpack_require__(/*! ./before-render-event.component.scss */ "./src/modules/@forms/tutorials/events/before-render-event/before-render-event.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], BeforeRenderEventComponent);
    return BeforeRenderEventComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/events/before-render-event/index.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/before-render-event/index.ts ***!
  \**************************************************************************/
/*! exports provided: getSuperPowersAsync, BeforeRenderEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _before_render_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./before-render-event.component */ "./src/modules/@forms/tutorials/events/before-render-event/before-render-event.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSuperPowersAsync", function() { return _before_render_event_component__WEBPACK_IMPORTED_MODULE_0__["getSuperPowersAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeRenderEventComponent", function() { return _before_render_event_component__WEBPACK_IMPORTED_MODULE_0__["BeforeRenderEventComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/events/field-sync-redraw/field-sync-redraw.component.html":
/*!************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/field-sync-redraw/field-sync-redraw.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Field Sync / Redraw\" [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template'}, {title: 'Style'}, {title: 'Model'}]\"> <!--@tdm-ignore-line-->\n  <div class=\"custom-form-actions\" *ngIf=\"! (dynForm?.renderState | async)\">\n    <mat-form-field>\n      <mat-select [value]=\"stateFieldType\" (change)=\"stateFieldType = $event.value\">\n        <mat-option value=\"select\">Select</mat-option>\n        <mat-option value=\"radio\">Radio Group</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <button mat-button (click)=\"dynForm.redraw()\">REDRAW</button>\n    <button mat-button (click)=\"fieldSync()\">FIELD SYNC</button>\n  </div>\n  <div class=\"render-state-form-container\" ngProjectAs=\"dynamic-form\">\n    <dynamic-form #dynForm\n                  style=\"display: block\"\n                  [model]=\"model\"\n                  [filter]=\"['base', 'allies', 'basesDestroyed']\"\n                  (beforeRender)=\"beforeRender($event)\"></dynamic-form>\n    <div class=\"ui-block\" *ngIf=\"dynForm?.renderState | async\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </div>\n</form-wrapper> <!--@tdm-ignore-line-->\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/events/field-sync-redraw/field-sync-redraw.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/field-sync-redraw/field-sync-redraw.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".render-state-form-container {\n  position: relative;\n  min-height: 300px; }\n\n.ui-block {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/events/field-sync-redraw/field-sync-redraw.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/field-sync-redraw/field-sync-redraw.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: FieldSyncRedrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSyncRedrawComponent", function() { return FieldSyncRedrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
/* harmony import */ var _before_render_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../before-render-event */ "./src/modules/@forms/tutorials/events/before-render-event/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 /* @tdm-ignore-line */

 /* @tdm-ignore-line */


var FieldSyncRedrawComponent = /** @class */ (function () {
    function FieldSyncRedrawComponent() {
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        this.code = __webpack_require__.e(/*! import() | FormsFieldSyncRedrawComponent */ "FormsFieldSyncRedrawComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/events/field-sync-redraw/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        this.stateFieldType = 'select';
        /* @tdm-ignore:* */
    }
    FieldSyncRedrawComponent.prototype.beforeRender = function ($event) {
        var superPower = $event.instructions['superPower'];
        if (superPower) {
            // ASYNC CALLS THAT BLOCK THE WHOLE FORM FROM RENDERING, GOOD FOR GETTING DATA FROM REMOTE SERVER.
            // E.G.: GETTING GROUPS LISTED UNDER A USER, ETC...
            var existingPowers_1 = superPower.getData('options') || [];
            var p = Object(_before_render_event__WEBPACK_IMPORTED_MODULE_4__["getSuperPowersAsync"])().then(function (newPowers) {
                if (existingPowers_1.length !== 10) {
                    existingPowers_1.push.apply(existingPowers_1, newPowers);
                }
                superPower.mergeData({ options: existingPowers_1 });
            });
            // mark this field as async, no render until promise completes.
            $event.async(p);
            if (existingPowers_1.length !== 10) {
                this.stateFieldType = superPower.vType = 'select';
            }
            else {
                this.fieldSync();
            }
        }
    };
    FieldSyncRedrawComponent.prototype.fieldSync = function () {
        var superPower = this.dynForm.instructions['superPower'];
        if (superPower && this.stateFieldType !== superPower.vType) {
            superPower.vType = this.stateFieldType;
            if (this.stateFieldType === 'radio') {
                superPower.mergeData({ vertical: true });
            }
        }
    };
    /* @tdm-ignore:* */
    FieldSyncRedrawComponent.tutorial = {
        id: 'field-sync-redraw',
        name: 'Field Sync / Redraw'
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dynForm'),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["DynamicFormComponent"])
    ], FieldSyncRedrawComponent.prototype, "dynForm", void 0);
    FieldSyncRedrawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-field-sync-redraw',
            template: __webpack_require__(/*! ./field-sync-redraw.component.html */ "./src/modules/@forms/tutorials/events/field-sync-redraw/field-sync-redraw.component.html"),
            styles: [__webpack_require__(/*! ./field-sync-redraw.component.scss */ "./src/modules/@forms/tutorials/events/field-sync-redraw/field-sync-redraw.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], FieldSyncRedrawComponent);
    return FieldSyncRedrawComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/events/field-sync-redraw/index.ts":
/*!************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/field-sync-redraw/index.ts ***!
  \************************************************************************/
/*! exports provided: FieldSyncRedrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_sync_redraw_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-sync-redraw.component */ "./src/modules/@forms/tutorials/events/field-sync-redraw/field-sync-redraw.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldSyncRedrawComponent", function() { return _field_sync_redraw_component__WEBPACK_IMPORTED_MODULE_0__["FieldSyncRedrawComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/events/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/index.ts ***!
  \******************************************************/
/*! exports provided: BeforeRenderEventComponent, RenderStateEventComponent, FieldSyncRedrawComponent, ValueChangesEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _before_render_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./before-render-event */ "./src/modules/@forms/tutorials/events/before-render-event/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeRenderEventComponent", function() { return _before_render_event__WEBPACK_IMPORTED_MODULE_0__["BeforeRenderEventComponent"]; });

/* harmony import */ var _render_state_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-state-event */ "./src/modules/@forms/tutorials/events/render-state-event/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderStateEventComponent", function() { return _render_state_event__WEBPACK_IMPORTED_MODULE_1__["RenderStateEventComponent"]; });

/* harmony import */ var _field_sync_redraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-sync-redraw */ "./src/modules/@forms/tutorials/events/field-sync-redraw/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldSyncRedrawComponent", function() { return _field_sync_redraw__WEBPACK_IMPORTED_MODULE_2__["FieldSyncRedrawComponent"]; });

/* harmony import */ var _value_changes_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./value-changes-event */ "./src/modules/@forms/tutorials/events/value-changes-event/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueChangesEventComponent", function() { return _value_changes_event__WEBPACK_IMPORTED_MODULE_3__["ValueChangesEventComponent"]; });







/***/ }),

/***/ "./src/modules/@forms/tutorials/events/render-state-event/index.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/render-state-event/index.ts ***!
  \*************************************************************************/
/*! exports provided: RenderStateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_state_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-state-event.component */ "./src/modules/@forms/tutorials/events/render-state-event/render-state-event.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderStateEventComponent", function() { return _render_state_event_component__WEBPACK_IMPORTED_MODULE_0__["RenderStateEventComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/events/render-state-event/render-state-event.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/render-state-event/render-state-event.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Event: (renderState)\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template'}, {title: 'Style'}, {title: 'Model'}]\">\n<!--@tdm-example:TDM-DEMO-->\n  <div class=\"render-state-form-container\" ngProjectAs=\"dynamic-form\">\n    <dynamic-form #dynForm\n                  style=\"display: block\"\n                  [model]=\"model\"\n                  [filter]=\"['base', 'allies', 'basesDestroyed']\"\n                  (beforeRender)=\"beforeRender($event)\"></dynamic-form>\n    <div class=\"ui-block\" *ngIf=\"dynForm?.renderState | async\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </div>\n  <!--@tdm-example:TDM-DEMO-->\n\n</form-wrapper>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/events/render-state-event/render-state-event.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/render-state-event/render-state-event.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".render-state-form-container {\n  position: relative;\n  min-height: 300px; }\n\n.ui-block {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/events/render-state-event/render-state-event.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/render-state-event/render-state-event.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RenderStateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderStateEventComponent", function() { return RenderStateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _before_render_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../before-render-event */ "./src/modules/@forms/tutorials/events/before-render-event/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var RenderStateEventComponent = /** @class */ (function (_super) {
    __extends(RenderStateEventComponent, _super);
    function RenderStateEventComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = __webpack_require__.e(/*! import() | FormsFieldSyncRedrawComponent */ "FormsFieldSyncRedrawComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/events/render-state-event/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        return _this;
        /* @tdm-ignore:* */
    }
    /* @tdm-ignore:* */
    RenderStateEventComponent.tutorial = {
        id: 'render-state-event',
        name: 'Event: (renderState)'
    };
    RenderStateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-render-state-event',
            template: __webpack_require__(/*! ./render-state-event.component.html */ "./src/modules/@forms/tutorials/events/render-state-event/render-state-event.component.html"),
            styles: [__webpack_require__(/*! ./render-state-event.component.scss */ "./src/modules/@forms/tutorials/events/render-state-event/render-state-event.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], RenderStateEventComponent);
    return RenderStateEventComponent;
}(_before_render_event__WEBPACK_IMPORTED_MODULE_3__["BeforeRenderEventComponent"]));



/***/ }),

/***/ "./src/modules/@forms/tutorials/events/value-changes-event/index.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/value-changes-event/index.ts ***!
  \**************************************************************************/
/*! exports provided: ValueChangesEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_changes_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value-changes-event.component */ "./src/modules/@forms/tutorials/events/value-changes-event/value-changes-event.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueChangesEventComponent", function() { return _value_changes_event_component__WEBPACK_IMPORTED_MODULE_0__["ValueChangesEventComponent"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/events/value-changes-event/value-changes-event.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/value-changes-event/value-changes-event.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Event: (valueChanges)\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template'}, {title: 'Style'}, {title: 'Model'}]\">\n<!--@tdm-example:TDM-DEMO-->\n  <div class=\"render-state-form-container\" ngProjectAs=\"dynamic-form\">\n    <dynamic-form #dynForm\n                  style=\"display: block\"\n                  [model]=\"model\"\n                  [disabledState]=\"disabledControls\"\n                  (valueChanges)=\"valueChanges($event, dynForm)\"></dynamic-form>\n    <div class=\"ui-block\" *ngIf=\"dynForm?.renderState | async\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </div>\n  <!--@tdm-example:TDM-DEMO-->\n\n</form-wrapper>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/events/value-changes-event/value-changes-event.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/value-changes-event/value-changes-event.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/events/value-changes-event/value-changes-event.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/events/value-changes-event/value-changes-event.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ValueChangesEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueChangesEventComponent", function() { return ValueChangesEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var ValueChangesEventComponent = /** @class */ (function () {
    function ValueChangesEventComponent() {
        this.code = __webpack_require__.e(/*! import() | FormsValueChangesEventComponent */ "FormsValueChangesEventComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/events/value-changes-event/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        this.model = new _4_element_metadata__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        this.disabledControls = ['id'];
        /* @tdm-ignore:* */
    }
    ValueChangesEventComponent.prototype.valueChanges = function ($event, dynForm) {
        for (var _i = 0, $event_1 = $event; _i < $event_1.length; _i++) {
            var c = $event_1[_i];
            switch (c.key) {
                case 'name':
                    var len = c.currentValue && c.currentValue.length;
                    dynForm.tdmForm.setValue('id', len);
                    break;
                case 'doubleAgent':
                    if (c.currentValue) {
                        this.disabledControls.push('hasTracking');
                        dynForm.tdmForm.setValue('hasTracking', false);
                    }
                    else {
                        var idx = this.disabledControls.indexOf('hasTracking');
                        if (idx > -1) {
                            this.disabledControls.splice(idx, 1);
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    };
    /* @tdm-ignore:* */
    ValueChangesEventComponent.tutorial = {
        id: 'value-changes-event',
        name: 'Event: (valueChanges)'
    };
    ValueChangesEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-value-changes-event',
            template: __webpack_require__(/*! ./value-changes-event.component.html */ "./src/modules/@forms/tutorials/events/value-changes-event/value-changes-event.component.html"),
            styles: [__webpack_require__(/*! ./value-changes-event.component.scss */ "./src/modules/@forms/tutorials/events/value-changes-event/value-changes-event.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _5_renderer_container__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRowComponent"] }
            ]
            /* @tdm-ignore:* */
        })
    ], ValueChangesEventComponent);
    return ValueChangesEventComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/@forms/tutorials/index.ts ***!
  \***********************************************/
/*! exports provided: FormsTutorialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/modules/@forms/tutorials/module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormsTutorialsModule", function() { return _module__WEBPACK_IMPORTED_MODULE_0__["FormsTutorialsModule"]; });




/***/ }),

/***/ "./src/modules/@forms/tutorials/module.ts":
/*!************************************************!*\
  !*** ./src/modules/@forms/tutorials/module.ts ***!
  \************************************************/
/*! exports provided: FormsTutorialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsTutorialsModule", function() { return FormsTutorialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms_plugin_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms/plugin/material */ "../../libs/ngx-dynamic-forms/plugin/material/src/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
/* harmony import */ var _1_introduction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./1-introduction */ "./src/modules/@forms/tutorials/1-introduction/index.ts");
/* harmony import */ var _1a_overview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./1a-overview */ "./src/modules/@forms/tutorials/1a-overview/index.ts");
/* harmony import */ var _2_setup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./2-setup */ "./src/modules/@forms/tutorials/2-setup/index.ts");
/* harmony import */ var _3_creating_a_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./3-creating-a-model */ "./src/modules/@forms/tutorials/3-creating-a-model/index.ts");
/* harmony import */ var _4_element_metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./4-element-metadata */ "./src/modules/@forms/tutorials/4-element-metadata/index.ts");
/* harmony import */ var _5_renderer_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./5-renderer-container */ "./src/modules/@forms/tutorials/5-renderer-container/index.ts");
/* harmony import */ var _6_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./6-validation */ "./src/modules/@forms/tutorials/6-validation/index.ts");
/* harmony import */ var _7_virtual_groups__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./7-virtual-groups */ "./src/modules/@forms/tutorials/7-virtual-groups/index.ts");
/* harmony import */ var _8_local_override__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./8-local-override */ "./src/modules/@forms/tutorials/8-local-override/index.ts");
/* harmony import */ var _9_filter_disable_hidden_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./9-filter-disable-hidden-state */ "./src/modules/@forms/tutorials/9-filter-disable-hidden-state/index.ts");
/* harmony import */ var _10_hot_bind__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./10-hot-bind */ "./src/modules/@forms/tutorials/10-hot-bind/index.ts");
/* harmony import */ var _10a_disable_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./10a-disable-form */ "./src/modules/@forms/tutorials/10a-disable-form/index.ts");
/* harmony import */ var _11_commit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./11-commit */ "./src/modules/@forms/tutorials/11-commit/index.ts");
/* harmony import */ var _12_control_outlet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./12-control-outlet */ "./src/modules/@forms/tutorials/12-control-outlet/index.ts");
/* harmony import */ var _12_control_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./12-control-panel */ "./src/modules/@forms/tutorials/12-control-panel/index.ts");
/* harmony import */ var _13_complex_data_structure__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./13-complex-data-structure */ "./src/modules/@forms/tutorials/13-complex-data-structure/index.ts");
/* harmony import */ var _14_child_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./14-child-form */ "./src/modules/@forms/tutorials/14-child-form/index.ts");
/* harmony import */ var _15_flattening__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./15-flattening */ "./src/modules/@forms/tutorials/15-flattening/index.ts");
/* harmony import */ var _16_arrays__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./16-arrays */ "./src/modules/@forms/tutorials/16-arrays/index.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./events */ "./src/modules/@forms/tutorials/events/index.ts");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./renderer */ "./src/modules/@forms/tutorials/renderer/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared */ "./src/modules/@forms/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var TUTORIALS = [
    _1_introduction__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"],
    _1a_overview__WEBPACK_IMPORTED_MODULE_4__["OverviewComponent"],
    _2_setup__WEBPACK_IMPORTED_MODULE_5__["SetupComponent"],
    _3_creating_a_model__WEBPACK_IMPORTED_MODULE_6__["CreatingAModelComponent"],
    _4_element_metadata__WEBPACK_IMPORTED_MODULE_7__["ElementMetadataComponent"],
    _5_renderer_container__WEBPACK_IMPORTED_MODULE_8__["RenderContainerComponent"],
    _6_validation__WEBPACK_IMPORTED_MODULE_9__["ValidationComponent"],
    _7_virtual_groups__WEBPACK_IMPORTED_MODULE_10__["VirtualGroupsComponent"],
    _8_local_override__WEBPACK_IMPORTED_MODULE_11__["LocalOverrideComponent"],
    _9_filter_disable_hidden_state__WEBPACK_IMPORTED_MODULE_12__["FilterDisableHiddenStateComponent"],
    _10_hot_bind__WEBPACK_IMPORTED_MODULE_13__["HotBindComponent"],
    _10a_disable_form__WEBPACK_IMPORTED_MODULE_14__["DisableFormComponent"],
    _11_commit__WEBPACK_IMPORTED_MODULE_15__["CommitComponent"],
    _12_control_outlet__WEBPACK_IMPORTED_MODULE_16__["ControlOutletComponent"],
    _12_control_panel__WEBPACK_IMPORTED_MODULE_17__["ControlPanelComponent"],
    _events__WEBPACK_IMPORTED_MODULE_22__["BeforeRenderEventComponent"],
    _events__WEBPACK_IMPORTED_MODULE_22__["RenderStateEventComponent"],
    _events__WEBPACK_IMPORTED_MODULE_22__["FieldSyncRedrawComponent"],
    _events__WEBPACK_IMPORTED_MODULE_22__["ValueChangesEventComponent"],
    _13_complex_data_structure__WEBPACK_IMPORTED_MODULE_18__["ComplexDataStructuresComponent"],
    _14_child_form__WEBPACK_IMPORTED_MODULE_19__["ChildFormComponent"],
    _15_flattening__WEBPACK_IMPORTED_MODULE_20__["FlatteningComponent"],
    _16_arrays__WEBPACK_IMPORTED_MODULE_21__["ArraysComponent"],
    _renderer__WEBPACK_IMPORTED_MODULE_23__["TheRendererComponent"],
    _renderer__WEBPACK_IMPORTED_MODULE_23__["ExtendingTheRendererComponent"],
    _renderer__WEBPACK_IMPORTED_MODULE_23__["ChildFormRendererComponent"],
    _renderer__WEBPACK_IMPORTED_MODULE_23__["ArrayRendererComponent"]
];
var COMPONENTS = [
    TUTORIALS,
    _5_renderer_container__WEBPACK_IMPORTED_MODULE_8__["DynamicFormRowComponent"],
    _renderer__WEBPACK_IMPORTED_MODULE_23__["RendererV1Component"],
    _renderer__WEBPACK_IMPORTED_MODULE_23__["RendererV2Component"],
    _renderer__WEBPACK_IMPORTED_MODULE_23__["RendererV3Component"],
    _renderer__WEBPACK_IMPORTED_MODULE_23__["RendererV4Component"]
];
function isTutorial(value) {
    return !!(value.tutorial && value.tutorial.name && value.tutorial.id);
}
var FormsTutorialsModule = /** @class */ (function () {
    function FormsTutorialsModule(tutorialService) {
        for (var _i = 0, TUTORIALS_1 = TUTORIALS; _i < TUTORIALS_1.length; _i++) {
            var c = TUTORIALS_1[_i];
            if (isTutorial(c)) {
                tutorialService.addTutorial(c);
            }
        }
    }
    FormsTutorialsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [COMPONENTS],
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _shared__WEBPACK_IMPORTED_MODULE_24__["FormsSharedModule"],
                _tdm_ngx_dynamic_forms_plugin_material__WEBPACK_IMPORTED_MODULE_1__["MaterialDynamicFormsModule"].forRoot(),
            ],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_2__["TutorialService"]],
            exports: [COMPONENTS],
            entryComponents: [
                TUTORIALS,
                _5_renderer_container__WEBPACK_IMPORTED_MODULE_8__["DynamicFormRowComponent"],
                _renderer__WEBPACK_IMPORTED_MODULE_23__["RendererV1Component"],
                _renderer__WEBPACK_IMPORTED_MODULE_23__["RendererV2Component"],
                _renderer__WEBPACK_IMPORTED_MODULE_23__["RendererV3Component"],
                _renderer__WEBPACK_IMPORTED_MODULE_23__["RendererV4Component"]
            ]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_2__["TutorialService"]])
    ], FormsTutorialsModule);
    return FormsTutorialsModule;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/1-the-renderer/index.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/1-the-renderer/index.ts ***!
  \***********************************************************************/
/*! exports provided: TheRendererComponent, RendererV1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _the_renderer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./the-renderer.component */ "./src/modules/@forms/tutorials/renderer/1-the-renderer/the-renderer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheRendererComponent", function() { return _the_renderer_component__WEBPACK_IMPORTED_MODULE_0__["TheRendererComponent"]; });

/* harmony import */ var _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer/renderer.component */ "./src/modules/@forms/tutorials/renderer/1-the-renderer/renderer/renderer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RendererV1Component", function() { return _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_1__["RendererV1Component"]; });





/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/1-the-renderer/model.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/1-the-renderer/model.ts ***!
  \***********************************************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* @tdm-example:plain */

/* @tdm-ignore:plain */

var Hero = /** @class */ (function () {
    /* @tdm-ignore:plain */
    function Hero() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FormProp"])({
            render: {
                vType: 'number',
                label: 'Hero ID'
            }
        })
        /* @tdm-ignore:plain */
        ,
        __metadata("design:type", Number)
    ], Hero.prototype, "id", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FormProp"])({
            render: {
                vType: 'text',
                label: 'Hero Name'
            }
        })
        /* @tdm-ignore:plain */
        ,
        __metadata("design:type", String)
    ], Hero.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FormProp"])({
            render: {
                vType: 'boolean',
                label: 'Super Hero'
            }
        })
        /* @tdm-ignore:plain */
        ,
        __metadata("design:type", Boolean)
    ], Hero.prototype, "superHero", void 0);
    Hero = __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Model"])(),
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FormModel"])()
        /* @tdm-ignore:plain */
    ], Hero);
    return Hero;
}());

/* @tdm-example:plain */


/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/1-the-renderer/renderer/renderer.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/1-the-renderer/renderer/renderer.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"item.vType\">\n  <label for=\"{{item.name}}\">{{item.label}}</label>\n  <input id=\"{{item.name}}\" *ngSwitchCase=\"'text'\" type=\"text\" [formControl]=\"fControl\" />\n  <input id=\"{{item.name}}\" *ngSwitchCase=\"'number'\" type=\"number\" [formControl]=\"fControl\" />\n</div>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/1-the-renderer/renderer/renderer.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/1-the-renderer/renderer/renderer.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RendererV1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererV1Component", function() { return RendererV1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _renderer_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer.types */ "./src/modules/@forms/tutorials/renderer/1-the-renderer/renderer/renderer.types.ts");
/* harmony import */ var _renderer_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_renderer_types__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RendererV1Component = /** @class */ (function () {
    function RendererV1Component() {
    }
    RendererV1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'renderer-v1',
            template: __webpack_require__(/*! ./renderer.component.html */ "./src/modules/@forms/tutorials/renderer/1-the-renderer/renderer/renderer.component.html")
        })
    ], RendererV1Component);
    return RendererV1Component;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/1-the-renderer/renderer/renderer.types.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/1-the-renderer/renderer/renderer.types.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/1-the-renderer/the-renderer.component.html":
/*!******************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/1-the-renderer/the-renderer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part1'}]:true\"></tdm-markdown-view>\n<tdm-markdown-view overflowContainer\n                   [code]=\"(code | async | tdmCode:[{id: 'DynamicControlRenderContext'}])[0]\"></tdm-markdown-view>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part2'}]:true\"></tdm-markdown-view>\n<tdm-markdown-view overflowContainer\n                   [code]=\"(code | async | tdmCode:[{title: 'Model', section: 'plain'}])[0]\"></tdm-markdown-view>\n\n\n<tdm-markdown-view>\n  <p>A now our Simple Renderer <code>@Component</code></p>\n</tdm-markdown-view>\n<tdm-code-view [code]=\"code | async | tdmCode:[{file: 'renderer.component.ts'}, {file: 'renderer.types.ts'}, {file: 'renderer.component.html'}]\"></tdm-code-view>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part3'}]:true\"></tdm-markdown-view>\n\n<tdm-markdown-view>\n  <p>Rendering a dynamic form component:</p>\n</tdm-markdown-view>\n<form-wrapper style=\"min-height: 300px\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template'}, {title: 'Model'}]\">\n  <!--@tdm-example:tdmDemo-->\n  <dynamic-form [model]=\"model\"></dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part4'}]:true\"></tdm-markdown-view>\n\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/1-the-renderer/the-renderer.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/1-the-renderer/the-renderer.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/1-the-renderer/the-renderer.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/1-the-renderer/the-renderer.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TheRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheRendererComponent", function() { return TheRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer/renderer.component */ "./src/modules/@forms/tutorials/renderer/1-the-renderer/renderer/renderer.component.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/renderer/1-the-renderer/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TheRendererComponent = /** @class */ (function () {
    function TheRendererComponent() {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | FormsTheRendererComponent */ "FormsTheRendererComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/renderer/1-the-renderer/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    TheRendererComponent.tutorial = {
        id: 'the-renderer',
        name: 'The Renderer',
        subHeader: 'Renderer'
    };
    TheRendererComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-the-renderer',
            template: __webpack_require__(/*! ./the-renderer.component.html */ "./src/modules/@forms/tutorials/renderer/1-the-renderer/the-renderer.component.html"),
            styles: [__webpack_require__(/*! ./the-renderer.component.scss */ "./src/modules/@forms/tutorials/renderer/1-the-renderer/the-renderer.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_2__["RendererV1Component"] }
            ]
            /* @tdm-ignore:* */
        })
    ], TheRendererComponent);
    return TheRendererComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/extending-the-renderer.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/extending-the-renderer.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part1'}]:true\"></tdm-markdown-view>\n\n<tdm-markdown-view [code]=\"(code | async | tdmCode:[{file: 'renderer-v2.types.ts'}])[0]\"></tdm-markdown-view>\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part2'}]:true\"></tdm-markdown-view>\n\n<tdm-code-view [code]=\"code | async | tdmCode:[{file: 'renderer-v2.component.ts'}, {file: 'renderer-v2.types.ts'}, {file: 'renderer-v2.component.html'}, {file: 'renderer-v2.component.scss'}]\"></tdm-code-view>\n\n<tdm-markdown-view>\n  <h4>Let's see it in action.</h4>\n</tdm-markdown-view>\n<form-wrapper style=\"min-height: 300px\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template'}, {title: 'Model'}]\">\n  <!--@tdm-example:tdmDemo-->\n  <dynamic-form [model]=\"model\"></dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'part3'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/extending-the-renderer.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/extending-the-renderer.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/extending-the-renderer.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/extending-the-renderer.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ExtendingTheRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendingTheRendererComponent", function() { return ExtendingTheRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _renderer_renderer_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer/renderer-v2.component */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.component.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExtendingTheRendererComponent = /** @class */ (function () {
    function ExtendingTheRendererComponent() {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | FormsExtendingTheRendererComponent */ "FormsExtendingTheRendererComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    ExtendingTheRendererComponent.tutorial = {
        id: 'extending-the-renderer',
        name: 'Extending the Renderer'
    };
    ExtendingTheRendererComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-extending-the-renderer',
            template: __webpack_require__(/*! ./extending-the-renderer.component.html */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/extending-the-renderer.component.html"),
            styles: [__webpack_require__(/*! ./extending-the-renderer.component.scss */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/extending-the-renderer.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _renderer_renderer_v2_component__WEBPACK_IMPORTED_MODULE_2__["RendererV2Component"] }
            ]
            /* @tdm-ignore:* */
        })
    ], ExtendingTheRendererComponent);
    return ExtendingTheRendererComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/index.ts ***!
  \*********************************************************************************/
/*! exports provided: ExtendingTheRendererComponent, RendererV2Component, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extending_the_renderer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extending-the-renderer.component */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/extending-the-renderer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendingTheRendererComponent", function() { return _extending_the_renderer_component__WEBPACK_IMPORTED_MODULE_0__["ExtendingTheRendererComponent"]; });

/* harmony import */ var _renderer_renderer_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer/renderer-v2.component */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RendererV2Component", function() { return _renderer_renderer_v2_component__WEBPACK_IMPORTED_MODULE_1__["RendererV2Component"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _model__WEBPACK_IMPORTED_MODULE_2__["Hero"]; });






/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/model.ts":
/*!*********************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/model.ts ***!
  \*********************************************************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Hero = /** @class */ (function () {
    function Hero() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'number',
                    label: 'Hero ID'
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "id", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Hero Name'
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'boolean',
                    label: 'Has Tracking Device'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "hasTracking", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slideToggle',
                    label: 'Double Agent'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "doubleAgent", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slider',
                    label: 'BMI Index',
                    data: { min: 1, max: 35 }
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "bmi", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'select',
                    label: 'Super Power',
                    data: {
                        options: [
                            { value: 'selfHealing', label: 'Self Healing' },
                            { value: 'flying', label: 'Flying' },
                            { value: 'cloaking', label: 'Cloaking' },
                            { value: 'cloning', label: 'Cloning' },
                            { value: 'invisibility', label: 'Invisibility' }
                        ]
                    }
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "superPower", void 0);
    Hero = __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"])({
            form: true
        })
    ], Hero);
    return Hero;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.isArray\" [ngSwitch]=\"item.vType\">\n  <mat-checkbox *ngSwitchCase=\"'boolean'\"\n                [formControl]=\"fControl\">{{ item.label }}</mat-checkbox>\n\n  <mat-slide-toggle *ngSwitchCase=\"'slideToggle'\"\n                    [formControl]=\"fControl\">{{ item.label }}</mat-slide-toggle>\n\n  <ng-container *ngSwitchCase=\"'slider'\">\n    <span>{{item.label}}</span>\n    <mat-slider [formControl]=\"fControl\"\n                thumbLabel=\"true\"\n                [tickInterval]=\"1\"\n                [min]=\"item.data?.min\" [max]=\"item.data?.max\"></mat-slider>\n  </ng-container>\n\n  <ng-container *ngSwitchCase=\"'radio'\">\n    <span>{{item.label}}</span>\n    <mat-radio-group *ngSwitchCase=\"'radio'\"\n                     [class.vertical-mat-radio-group]=\"item.data?.vertical\"\n                     [formControl]=\"fControl\">\n      <mat-radio-button *ngFor=\"let sel of item.data.options\" [value]=\"sel.value\">{{sel.label || sel.value}}</mat-radio-button>\n    </mat-radio-group>\n  </ng-container>\n\n  <mat-form-field *ngSwitchCase=\"'select'\">\n    <mat-select [formControl]=\"fControl\"\n                [placeholder]=\"item.label\">\n      <mat-option *ngFor=\"let sel of item.data.options\" [value]=\"sel.value\">{{sel.label || sel.value}}</mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"hasError('required')\">Required</mat-error>\n  </mat-form-field>\n\n  <mat-form-field *ngSwitchDefault>\n    <input matInput\n           [type]=\"item.vType\"\n           [formControl]=\"fControl\"\n           [placeholder]=\"item.label\"\n           [min]=\"item.data?.min\" [max]=\"item.data?.max\">\n    <mat-error *ngIf=\"hasError('required')\">Required</mat-error>\n  </mat-form-field>\n\n</ng-container>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-selection-list {\n  max-height: 250px; }\n\nmat-radio-group {\n  padding-left: 25px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\nmat-radio-group mat-radio-button:not(.vertical-mat-radio-group) {\n    margin-right: 10px; }\n\nmat-radio-group.vertical-mat-radio-group {\n    padding-right: 15px;\n    overflow-x: visible;\n    overflow-y: auto;\n    max-height: 200px;\n    display: inline-flex;\n    flex-direction: column;\n    flex-wrap: nowrap; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RendererV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererV2Component", function() { return RendererV2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _renderer_v2_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer-v2.types */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.types.ts");
/* harmony import */ var _renderer_v2_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_renderer_v2_types__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RendererV2Component = /** @class */ (function () {
    function RendererV2Component() {
    }
    RendererV2Component.prototype.hasError = function (errorName) {
        if (this.fControl) {
            return this.fControl.hasError(errorName);
        }
        else if (this.fArray) {
            return this.fArray.hasError(errorName);
        }
        else if (this.fGroup) {
            return this.fGroup.hasError(errorName);
        }
        return false;
    };
    RendererV2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'renderer-v2',
            template: __webpack_require__(/*! ./renderer-v2.component.html */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.component.html"),
            styles: [__webpack_require__(/*! ./renderer-v2.component.scss */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.component.scss")]
        })
    ], RendererV2Component);
    return RendererV2Component;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.types.ts":
/*!******************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/renderer/renderer-v2.types.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/child-form-renderer.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/3-child-form-renderer/child-form-renderer.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Child Form\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template', section: 'tdmDemo'}, {title: 'Model'}]\">\n  <!--@tdm-example:tdmDemo-->\n  <dynamic-form [model]=\"model\"\n                [filter]=\"['allies']\"></dynamic-form>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/child-form-renderer.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/3-child-form-renderer/child-form-renderer.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/child-form-renderer.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/3-child-form-renderer/child-form-renderer.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ChildFormRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildFormRendererComponent", function() { return ChildFormRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _renderer_renderer_v3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer/renderer-v3.component */ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/renderer/renderer-v3.component.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var ChildFormRendererComponent = /** @class */ (function () {
    function ChildFormRendererComponent() {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        this.code = __webpack_require__.e(/*! import() | FormsChildFormRendererComponent */ "FormsChildFormRendererComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        /* @tdm-ignore:* */
    }
    /* @tdm-ignore:* */
    ChildFormRendererComponent.tutorial = {
        id: 'child-form-renderer',
        name: 'Child Form Renderer'
    };
    ChildFormRendererComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-child-form-renderer',
            template: __webpack_require__(/*! ./child-form-renderer.component.html */ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/child-form-renderer.component.html"),
            styles: [__webpack_require__(/*! ./child-form-renderer.component.scss */ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/child-form-renderer.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _renderer_renderer_v3_component__WEBPACK_IMPORTED_MODULE_2__["RendererV3Component"] }
            ]
            /* @tdm-ignore:* */
        })
    ], ChildFormRendererComponent);
    return ChildFormRendererComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/index.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/3-child-form-renderer/index.ts ***!
  \******************************************************************************/
/*! exports provided: RendererV3Component, ChildFormRendererComponent, BaseCamp, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderer_renderer_v3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer/renderer-v3.component */ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/renderer/renderer-v3.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RendererV3Component", function() { return _renderer_renderer_v3_component__WEBPACK_IMPORTED_MODULE_0__["RendererV3Component"]; });

/* harmony import */ var _child_form_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child-form-renderer.component */ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/child-form-renderer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildFormRendererComponent", function() { return _child_form_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ChildFormRendererComponent"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseCamp", function() { return _model__WEBPACK_IMPORTED_MODULE_2__["BaseCamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _model__WEBPACK_IMPORTED_MODULE_2__["Hero"]; });






/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/model.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/3-child-form-renderer/model.ts ***!
  \******************************************************************************/
/*! exports provided: BaseCamp, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCamp", function() { return BaseCamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseCamp = /** @class */ (function () {
    function BaseCamp() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Base Name',
                }
            }
        }),
        __metadata("design:type", String)
    ], BaseCamp.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                flatten: {
                    lng: {
                        render: {
                            vType: 'number',
                            label: 'Base Longitude'
                        }
                    },
                    lat: {
                        render: {
                            vType: 'number',
                            label: 'Base Latitude'
                        }
                    }
                }
            }
        }),
        __metadata("design:type", Object)
    ], BaseCamp.prototype, "coordinates", void 0);
    BaseCamp = __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"])({
            form: true
        })
    ], BaseCamp);
    return BaseCamp;
}());

var Hero = /** @class */ (function () {
    function Hero() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'number',
                    label: 'Hero ID'
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "id", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Hero Name'
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'boolean',
                    label: 'Has Tracking Device'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "hasTracking", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slideToggle',
                    label: 'Double Agent'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "doubleAgent", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slider',
                    label: 'BMI Index',
                    data: { min: 1, max: 35 }
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "bmi", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'select',
                    label: 'Super Power',
                    data: {
                        options: [
                            { value: 'selfHealing', label: 'Self Healing' },
                            { value: 'flying', label: 'Flying' },
                            { value: 'cloaking', label: 'Cloaking' },
                            { value: 'cloning', label: 'Cloaning' },
                            { value: 'invisibility', label: 'Invisibility' }
                        ]
                    }
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "superPower", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    identity: 'name',
                    vType: 'form',
                    label: 'Base Camp'
                },
                childForm: true
            }
        }),
        __metadata("design:type", BaseCamp)
    ], Hero.prototype, "base", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Allies'
                }
            }
        }),
        __metadata("design:type", Array)
    ], Hero.prototype, "allies", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            type: function () { return BaseCamp; },
            form: {
                required: true,
                render: {
                    identity: 'name',
                    vType: 'form',
                    label: 'Base Camp'
                },
                childForm: true
            }
        }),
        __metadata("design:type", Array)
    ], Hero.prototype, "basesDestroyed", void 0);
    Hero = __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"])({
            form: true
        })
    ], Hero);
    return Hero;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/renderer/renderer-v3.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/3-child-form-renderer/renderer/renderer-v3.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!item.isArray;\" [ngSwitch]=\"item.vType\" [style.display]=\"item.hidden ? 'none' : undefined\">\n  <mat-checkbox *ngSwitchCase=\"'boolean'\"\n                [formControl]=\"fControl\">{{ item.label }}</mat-checkbox>\n\n  <mat-slide-toggle *ngSwitchCase=\"'slideToggle'\"\n                    [formControl]=\"fControl\">{{ item.label }}</mat-slide-toggle>\n\n  <ng-container *ngSwitchCase=\"'slider'\">\n    <span>{{item.label}}</span>\n    <mat-slider [formControl]=\"fControl\"\n                thumbLabel=\"true\"\n                [tickInterval]=\"1\"\n                [min]=\"item.data?.min\" [max]=\"item.data?.max\"></mat-slider>\n  </ng-container>\n\n  <ng-container *ngSwitchCase=\"'radio'\">\n    <span>{{item.label}}</span>\n    <mat-radio-group *ngSwitchCase=\"'radio'\"\n                     [class.vertical-mat-radio-group]=\"item.data?.vertical\"\n                     [formControl]=\"fControl\">\n      <mat-radio-button *ngFor=\"let sel of item.data.options\" [value]=\"sel.value\">{{sel.label || sel.value}}</mat-radio-button>\n    </mat-radio-group>\n    <mat-error *ngIf=\"hasError('required')\">Required</mat-error>\n  </ng-container>\n\n  <mat-form-field *ngSwitchCase=\"'select'\">\n    <mat-select [formControl]=\"fControl\"\n                [placeholder]=\"item.label\">\n      <mat-option *ngFor=\"let sel of item.data.options\" [value]=\"sel.value\">{{sel.label || sel.value}}</mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"hasError('required')\">Required</mat-error>\n  </mat-form-field>\n\n  <ng-container *ngSwitchCase=\"'form'\">\n    <a mat-button (click)=\"editChildFrom()\">{{item.label}}</a>\n    <span>{{fGroup.get(item.name + '.' + item.identity)?.value}}</span>\n    <dynamic-form *ngIf=\"externalTdmForm\" [model]=\"externalTdmForm\"></dynamic-form>\n  </ng-container>\n\n  <mat-form-field *ngSwitchDefault>\n    <input matInput\n           [type]=\"item.vType\"\n           [formControl]=\"fControl\"\n           [placeholder]=\"item.label\">\n    <mat-error *ngIf=\"hasError('required')\">Required</mat-error>\n  </mat-form-field>\n\n</div>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/renderer/renderer-v3.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/3-child-form-renderer/renderer/renderer-v3.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-selection-list {\n  max-height: 250px; }\n\nmat-radio-group {\n  padding-left: 25px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\nmat-radio-group mat-radio-button:not(.vertical-mat-radio-group) {\n    margin-right: 10px; }\n\nmat-radio-group.vertical-mat-radio-group {\n    padding-right: 15px;\n    overflow-x: visible;\n    overflow-y: auto;\n    max-height: 200px;\n    display: inline-flex;\n    flex-direction: column;\n    flex-wrap: nowrap; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/renderer/renderer-v3.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/3-child-form-renderer/renderer/renderer-v3.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RendererV3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererV3Component", function() { return RendererV3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RendererV3Component = /** @class */ (function () {
    function RendererV3Component(dynForm) {
        this.dynForm = dynForm;
    }
    RendererV3Component.prototype.editChildFrom = function () {
        if (!this.externalTdmForm) {
            if (this.fControl.value === null) {
                this.fControl = this.tdmForm.createControl(this.item.fullName, null, true);
                this.fGroup.setControl(this.item.name, this.fControl);
            }
            this.externalTdmForm = this.tdmForm.createChildForm(this.item.fullName, this.fControl.value, this.fControl);
        }
    };
    RendererV3Component.prototype.hasError = function (errorName) {
        if (this.fControl) {
            return this.fControl.hasError(errorName);
        }
        else if (this.fArray) {
            return this.fArray.hasError(errorName);
        }
        else if (this.fGroup) {
            return this.fGroup.hasError(errorName);
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["RenderInstruction"])
    ], RendererV3Component.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["TDMModelForm"])
    ], RendererV3Component.prototype, "tdmForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"])
    ], RendererV3Component.prototype, "fArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], RendererV3Component.prototype, "fControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], RendererV3Component.prototype, "fGroup", void 0);
    RendererV3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'renderer-v3',
            template: __webpack_require__(/*! ./renderer-v3.component.html */ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/renderer/renderer-v3.component.html"),
            styles: [__webpack_require__(/*! ./renderer-v3.component.scss */ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/renderer/renderer-v3.component.scss")]
        }),
        __metadata("design:paramtypes", [_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["DynamicFormComponent"]])
    ], RendererV3Component);
    return RendererV3Component;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/4-array-renderer/array-renderer.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/4-array-renderer/array-renderer.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<form-wrapper title=\"Commit\"\n              [code]=\"code | async | tdmCode:[{title: 'Component'}, {title: 'Template', section: 'tdmDemo'}, {title: 'Model'}]\">\n<!--@tdm-example:tdmDemo-->\n  <dynamic-form #dynForm [model]=\"model\" [filter]=\"['allies', 'basesDestroyed']\"></dynamic-form>\n\n  <mat-tab-group ngProjectAs=\"dynamic-form\">\n    <mat-tab label=\"Allies\">\n      <dynamic-form [slaveOf]=\"dynForm\" [filter]=\"['allies']\" filterMode=\"include\"></dynamic-form>\n    </mat-tab>\n    <mat-tab label=\"Bases Destroyed\">\n      <dynamic-form [slaveOf]=\"dynForm\" [filter]=\"['basesDestroyed']\" filterMode=\"include\"></dynamic-form>\n    </mat-tab>\n  </mat-tab-group>\n\n  <button mat-raised-button color=\"primary\"\n          [disabled]=\"dynForm.form.status !== 'VALID' || !dynForm.form.dirty\"\n          (click)=\"dynForm.tdmForm.commitToModel(true)\">SAVE</button>\n  <button mat-button [disabled]=\"dynForm.form.pristine\" (click)=\"dynForm.tdmForm.reset()\">CANCEL</button>\n  <!--@tdm-example:tdmDemo-->\n</form-wrapper>\n\n<tdm-markdown-view>\n  <h4>Here is the renderer implementation</h4>\n</tdm-markdown-view>\n\n<tdm-code-view [code]=\"code | async | tdmCode:[{file: 'renderer-v3.component.ts'}, {file: 'renderer-v3.component.html'}, {file: 'renderer-v3.component.scss'}]\"></tdm-code-view>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/4-array-renderer/array-renderer.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/4-array-renderer/array-renderer.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/4-array-renderer/array-renderer.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/4-array-renderer/array-renderer.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ArrayRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayRendererComponent", function() { return ArrayRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
/* harmony import */ var _renderer_renderer_v4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer/renderer-v4.component */ "./src/modules/@forms/tutorials/renderer/4-array-renderer/renderer/renderer-v4.component.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/renderer/4-array-renderer/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 /* @tdm-ignore-line */
 /* @tdm-ignore-line */

var ArrayRendererComponent = /** @class */ (function () {
    function ArrayRendererComponent() {
        this.code = __webpack_require__.e(/*! import() | FormsArrayRendererComponent */ "FormsArrayRendererComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@forms/tutorials/renderer/4-array-renderer/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); /* @tdm-ignore-line */ // tslint:disable-line
        this.model = new _model__WEBPACK_IMPORTED_MODULE_3__["Hero"]();
        this.model.allies = ['Thor', 'Captain America'];
        this.model.basesDestroyed = [
            {
                name: 'Bat Cave',
                coordinates: {
                    lng: 10,
                    lat: -10
                }
            },
            {
                name: 'Themyscira',
                coordinates: {
                    lng: 99,
                    lat: -99
                }
            }
        ];
    }
    /* @tdm-ignore:* */
    ArrayRendererComponent.tutorial = {
        id: 'array-renderer',
        name: 'Arrays Renderer'
    };
    ArrayRendererComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-array-renderer',
            template: __webpack_require__(/*! ./array-renderer.component.html */ "./src/modules/@forms/tutorials/renderer/4-array-renderer/array-renderer.component.html"),
            styles: [__webpack_require__(/*! ./array-renderer.component.scss */ "./src/modules/@forms/tutorials/renderer/4-array-renderer/array-renderer.component.scss")],
            /* @tdm-ignore:* */
            providers: [
                { provide: _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["FORM_CONTROL_COMPONENT"], useValue: _renderer_renderer_v4_component__WEBPACK_IMPORTED_MODULE_2__["RendererV4Component"] }
            ]
            /* @tdm-ignore:* */
        }),
        __metadata("design:paramtypes", [])
    ], ArrayRendererComponent);
    return ArrayRendererComponent;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/4-array-renderer/index.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/4-array-renderer/index.ts ***!
  \*************************************************************************/
/*! exports provided: RendererV4Component, ArrayRendererComponent, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderer_renderer_v4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer/renderer-v4.component */ "./src/modules/@forms/tutorials/renderer/4-array-renderer/renderer/renderer-v4.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RendererV4Component", function() { return _renderer_renderer_v4_component__WEBPACK_IMPORTED_MODULE_0__["RendererV4Component"]; });

/* harmony import */ var _array_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-renderer.component */ "./src/modules/@forms/tutorials/renderer/4-array-renderer/array-renderer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayRendererComponent", function() { return _array_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ArrayRendererComponent"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/modules/@forms/tutorials/renderer/4-array-renderer/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _model__WEBPACK_IMPORTED_MODULE_2__["Hero"]; });






/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/4-array-renderer/model.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/4-array-renderer/model.ts ***!
  \*************************************************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Hero = /** @class */ (function () {
    function Hero() {
    }
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'number',
                    label: 'Hero ID'
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "id", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Hero Name'
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "name", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'boolean',
                    label: 'Has Tracking Device'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "hasTracking", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slideToggle',
                    label: 'Double Agent'
                }
            }
        }),
        __metadata("design:type", Boolean)
    ], Hero.prototype, "doubleAgent", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'slider',
                    label: 'BMI Index',
                    data: { min: 1, max: 35 }
                }
            }
        }),
        __metadata("design:type", Number)
    ], Hero.prototype, "bmi", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'select',
                    label: 'Super Power',
                    data: {
                        options: [
                            { value: 'selfHealing', label: 'Self Healing' },
                            { value: 'flying', label: 'Flying' },
                            { value: 'cloaking', label: 'Cloaking' },
                            { value: 'cloning', label: 'Cloaning' },
                            { value: 'invisibility', label: 'Invisibility' }
                        ]
                    }
                }
            }
        }),
        __metadata("design:type", String)
    ], Hero.prototype, "superPower", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                flatten: {
                    name: {
                        required: true,
                        render: {
                            vType: 'text',
                            label: 'Base Name',
                        }
                    },
                    coordinates: {
                        flatten: {
                            lng: {
                                render: {
                                    vType: 'number',
                                    label: 'Base Longitude'
                                }
                            },
                            lat: {
                                render: {
                                    vType: 'number',
                                    label: 'Base Latitude'
                                }
                            }
                        }
                    }
                }
            }
        }),
        __metadata("design:type", Object)
    ], Hero.prototype, "base", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                required: true,
                render: {
                    vType: 'text',
                    label: 'Allies'
                }
            }
        }),
        __metadata("design:type", Array)
    ], Hero.prototype, "allies", void 0);
    __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
            form: {
                render: {
                    vType: 'none',
                    label: 'Bases Destroyed',
                    identity: 'name'
                },
                flatten: {
                    name: {
                        required: true,
                        render: {
                            vType: 'text',
                            label: 'Base Name',
                        }
                    },
                    coordinates: {
                        flatten: {
                            lng: {
                                render: {
                                    vType: 'number',
                                    label: 'Base Longitude'
                                }
                            },
                            lat: {
                                render: {
                                    vType: 'number',
                                    label: 'Base Latitude'
                                }
                            }
                        }
                    }
                }
            }
        }),
        __metadata("design:type", Array)
    ], Hero.prototype, "basesDestroyed", void 0);
    Hero = __decorate([
        Object(_tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["Model"])({
            form: true
        })
    ], Hero);
    return Hero;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/4-array-renderer/renderer/renderer-v4.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/4-array-renderer/renderer/renderer-v4.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!item.isArray; else FormArray\" [ngSwitch]=\"item.vType\" [style.display]=\"item.hidden ? 'none' : undefined\">\n  <mat-checkbox *ngSwitchCase=\"'boolean'\"\n                [formControl]=\"fControl\">{{ item.label }}</mat-checkbox>\n\n  <mat-slide-toggle *ngSwitchCase=\"'slideToggle'\"\n                    [formControl]=\"fControl\">{{ item.label }}</mat-slide-toggle>\n\n  <ng-container *ngSwitchCase=\"'slider'\">\n    <span>{{item.label}}</span>\n    <mat-slider [formControl]=\"fControl\"\n                thumbLabel=\"true\"\n                [tickInterval]=\"1\"\n                [min]=\"item.data?.min\" [max]=\"item.data?.max\"></mat-slider>\n  </ng-container>\n\n  <ng-container *ngSwitchCase=\"'radio'\">\n    <span>{{item.label}}</span>\n    <mat-radio-group *ngSwitchCase=\"'radio'\"\n                     [class.vertical-mat-radio-group]=\"item.data?.vertical\"\n                     [formControl]=\"fControl\">\n      <mat-radio-button *ngFor=\"let sel of item.data.options\" [value]=\"sel.value\">{{sel.label || sel.value}}</mat-radio-button>\n    </mat-radio-group>\n    <mat-error *ngIf=\"hasError('required')\">Required</mat-error>\n  </ng-container>\n\n  <mat-form-field *ngSwitchCase=\"'select'\">\n    <mat-select [formControl]=\"fControl\"\n                [placeholder]=\"item.label\">\n      <mat-option *ngFor=\"let sel of item.data.options\" [value]=\"sel.value\">{{sel.label || sel.value}}</mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"hasError('required')\">Required</mat-error>\n  </mat-form-field>\n\n  <ng-container *ngSwitchCase=\"'form'\">\n    <a mat-button (click)=\"editChildFrom()\">{{item.label}}</a>\n    <span>{{fGroup.get(item.name + '.' + item.identity)?.value}}</span>\n    <dynamic-form *ngIf=\"externalTdmForm\" [model]=\"externalTdmForm\"></dynamic-form>\n  </ng-container>\n\n  <mat-form-field *ngSwitchDefault>\n    <input matInput\n           [type]=\"item.vType\"\n           [formControl]=\"fControl\"\n           [placeholder]=\"item.label\">\n    <mat-error *ngIf=\"hasError('required')\">Required</mat-error>\n  </mat-form-field>\n</div>\n<ng-template #FormArray>\n  <div *ngIf=\"item.isArray\" [formGroup]=\"fGroup\" [style.display]=\"item.hidden ? 'none' : undefined\">\n    <!--<dynamic-form-array [formArrayName]=\"item.name\"-->\n    <!--[tdmForm]=\"tdmForm\"-->\n    <!--[fGroup]=\"fGroup\"-->\n    <!--[fArray]=\"fArray\"-->\n    <!--[item]=\"item\">-->\n    <!--</dynamic-form-array>-->\n\n    <!--<div [formArrayName]=\"item.name\">-->\n    <!--<ng-container *dynamicFormArray=\"let ctx; tdmForm: tdmForm; fGroup: fGroup; fArray: fArray; item: item\"></ng-container>-->\n    <!--</div>-->\n\n    <div [formArrayName]=\"item.name\" >\n      <div *forFormArray=\"let c of fArray; tdmForm: tdmForm; fGroup: fGroup; item: item\">\n        <renderer-v4 [tdmForm]=\"c.tdmForm\" [item]=\"c.item\" [fGroup]=\"c.fGroup\" [fArray]=\"c.fArray\" [fControl]=\"c.fControl\"></renderer-v4>\n      </div>\n    </div>\n    <mat-error *ngIf=\"hasError('required')\">Required</mat-error>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/4-array-renderer/renderer/renderer-v4.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/4-array-renderer/renderer/renderer-v4.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-selection-list {\n  max-height: 250px; }\n\nmat-radio-group {\n  padding-left: 25px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\nmat-radio-group mat-radio-button:not(.vertical-mat-radio-group) {\n    margin-right: 10px; }\n\nmat-radio-group.vertical-mat-radio-group {\n    padding-right: 15px;\n    overflow-x: visible;\n    overflow-y: auto;\n    max-height: 200px;\n    display: inline-flex;\n    flex-direction: column;\n    flex-wrap: nowrap; }\n"

/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/4-array-renderer/renderer/renderer-v4.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/4-array-renderer/renderer/renderer-v4.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: RendererV4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererV4Component", function() { return RendererV4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/ngx-dynamic-forms */ "../../libs/ngx-dynamic-forms/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RendererV4Component = /** @class */ (function () {
    function RendererV4Component() {
    }
    RendererV4Component.prototype.editChildFrom = function () {
        if (!this.externalTdmForm) {
            if (this.fControl.value === null) {
                this.fControl = this.tdmForm.createControl(this.item.fullName, null, true);
                this.fGroup.setControl(this.item.name, this.fControl);
            }
            this.externalTdmForm = this.tdmForm.createChildForm(this.item.fullName, this.fControl.value, this.fControl);
        }
    };
    RendererV4Component.prototype.hasError = function (errorName) {
        if (this.fControl) {
            return this.fControl.hasError(errorName);
        }
        else if (this.fArray) {
            return this.fArray.hasError(errorName);
        }
        else if (this.fGroup) {
            return this.fGroup.hasError(errorName);
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["RenderInstruction"])
    ], RendererV4Component.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tdm_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["TDMModelForm"])
    ], RendererV4Component.prototype, "tdmForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"])
    ], RendererV4Component.prototype, "fArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], RendererV4Component.prototype, "fControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], RendererV4Component.prototype, "fGroup", void 0);
    RendererV4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'renderer-v4',
            template: __webpack_require__(/*! ./renderer-v4.component.html */ "./src/modules/@forms/tutorials/renderer/4-array-renderer/renderer/renderer-v4.component.html"),
            styles: [__webpack_require__(/*! ./renderer-v4.component.scss */ "./src/modules/@forms/tutorials/renderer/4-array-renderer/renderer/renderer-v4.component.scss")]
        })
    ], RendererV4Component);
    return RendererV4Component;
}());



/***/ }),

/***/ "./src/modules/@forms/tutorials/renderer/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/@forms/tutorials/renderer/index.ts ***!
  \********************************************************/
/*! exports provided: TheRendererComponent, RendererV1Component, RendererV2Component, ExtendingTheRendererComponent, ChildFormRendererComponent, Hero, BaseCamp, RendererV3Component, RendererV4Component, ArrayRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1_the_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1-the-renderer */ "./src/modules/@forms/tutorials/renderer/1-the-renderer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheRendererComponent", function() { return _1_the_renderer__WEBPACK_IMPORTED_MODULE_0__["TheRendererComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RendererV1Component", function() { return _1_the_renderer__WEBPACK_IMPORTED_MODULE_0__["RendererV1Component"]; });

/* harmony import */ var _2_extending_the_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2-extending-the-renderer */ "./src/modules/@forms/tutorials/renderer/2-extending-the-renderer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RendererV2Component", function() { return _2_extending_the_renderer__WEBPACK_IMPORTED_MODULE_1__["RendererV2Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendingTheRendererComponent", function() { return _2_extending_the_renderer__WEBPACK_IMPORTED_MODULE_1__["ExtendingTheRendererComponent"]; });

/* harmony import */ var _3_child_form_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3-child-form-renderer */ "./src/modules/@forms/tutorials/renderer/3-child-form-renderer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildFormRendererComponent", function() { return _3_child_form_renderer__WEBPACK_IMPORTED_MODULE_2__["ChildFormRendererComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _3_child_form_renderer__WEBPACK_IMPORTED_MODULE_2__["Hero"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseCamp", function() { return _3_child_form_renderer__WEBPACK_IMPORTED_MODULE_2__["BaseCamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RendererV3Component", function() { return _3_child_form_renderer__WEBPACK_IMPORTED_MODULE_2__["RendererV3Component"]; });

/* harmony import */ var _4_array_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./4-array-renderer */ "./src/modules/@forms/tutorials/renderer/4-array-renderer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RendererV4Component", function() { return _4_array_renderer__WEBPACK_IMPORTED_MODULE_3__["RendererV4Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayRendererComponent", function() { return _4_array_renderer__WEBPACK_IMPORTED_MODULE_3__["ArrayRendererComponent"]; });







/***/ })

}]);
//# sourceMappingURL=forms.js.map