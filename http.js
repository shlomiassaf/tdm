(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["http"],{

/***/ "../../libs/ngx-http-client/package.json":
/*!********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/package.json ***!
  \********************************************************************************************/
/*! exports provided: name, version, peerDependencies, default */
/***/ (function(module) {

module.exports = {"name":"@tdm/ngx-http-client","version":"1.0.0","peerDependencies":{"@angular/core":"^6.0.0","@angular/common":"^6.0.0","@tdm/tixin":"*","@tdm/core":"*","@tdm/data":"*"}};

/***/ }),

/***/ "./src/modules/@http/example-page/example-page.component.html":
/*!********************************************************************!*\
  !*** ./src/modules/@http/example-page/example-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container autosize=\"autoSize\">\n  <mat-drawer mode=\"side\" opened=\"true\">\n    <mat-nav-list>\n      <a *ngFor=\"let t of examplesChanged | async\"\n         mat-list-item\n         [routerLink]=\"['..', t.tutorial.id]\"\n         routerLinkActive=\"active\">{{t.tutorial.name}}</a>\n    </mat-nav-list>\n  </mat-drawer>\n  <mat-drawer-content>\n    <div class=\"tdm-page\">\n      <div class=\"tdm-page-content\">\n        <div>\n          <h2 *ngIf=\"is404\">Not found, please select from the list on the left</h2>\n          <span #exampleView></span>\n        </div>\n      </div>\n    </div>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/modules/@http/example-page/example-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/modules/@http/example-page/example-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nmat-drawer-container {\n  background: none;\n  flex: 1; }\nmat-drawer {\n  background: #1565c0; }\nmat-drawer a[mat-list-item] {\n    color: #FFFFFF; }\n"

/***/ }),

/***/ "./src/modules/@http/example-page/example-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/modules/@http/example-page/example-page.component.ts ***!
  \******************************************************************/
/*! exports provided: ExamplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplePageComponent", function() { return ExamplePageComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExamplePageComponent = /** @class */ (function () {
    function ExamplePageComponent(exampleService, resolver, route, router) {
        var _this = this;
        this.exampleService = exampleService;
        this.resolver = resolver;
        this.route = route;
        this.router = router;
        this.autoSize = false;
        this.examplesChanged = exampleService.tutorialsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () {
            _this.autoSize = true;
            setTimeout(function () { return _this.autoSize = false; }, 1);
        }));
    }
    ExamplePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = this.route.paramMap.subscribe(function (params) {
            _this.is404 = false;
            var id = params.get('name');
            var example = _this.exampleService.get(id);
            if (!example) {
                _this.is404 = true;
            }
            else {
                _this.renderExample(example);
            }
        });
    };
    ExamplePageComponent.prototype.ngOnDestroy = function () {
        this._subs.unsubscribe();
    };
    ExamplePageComponent.prototype.renderExample = function (example) {
        this.tutVcRef.clear();
        var componentFactory = this.resolver.resolveComponentFactory(example);
        this.tutVcRef.createComponent(componentFactory, this.tutVcRef.length);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('exampleView', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], ExamplePageComponent.prototype, "tutVcRef", void 0);
    ExamplePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-page',
            styles: [__webpack_require__(/*! ./example-page.component.scss */ "./src/modules/@http/example-page/example-page.component.scss")],
            template: __webpack_require__(/*! ./example-page.component.html */ "./src/modules/@http/example-page/example-page.component.html")
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_3__["TutorialService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExamplePageComponent);
    return ExamplePageComponent;
}());



/***/ }),

/***/ "./src/modules/@http/example-page/index.ts":
/*!*************************************************!*\
  !*** ./src/modules/@http/example-page/index.ts ***!
  \*************************************************/
/*! exports provided: ExamplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _example_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example-page.component */ "./src/modules/@http/example-page/example-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExamplePageComponent", function() { return _example_page_component__WEBPACK_IMPORTED_MODULE_0__["ExamplePageComponent"]; });




/***/ }),

/***/ "./src/modules/@http/module.ts":
/*!*************************************!*\
  !*** ./src/modules/@http/module.ts ***!
  \*************************************/
/*! exports provided: NgxHttpAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxHttpAppModule", function() { return NgxHttpAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
/* harmony import */ var _ngx_http_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-http-app */ "./src/modules/@http/ngx-http-app/index.ts");
/* harmony import */ var _example_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example-page */ "./src/modules/@http/example-page/index.ts");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorial */ "./src/modules/@http/tutorial/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/modules/@http/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NgxHttpAppModule = /** @class */ (function () {
    function NgxHttpAppModule(topNavService) {
        topNavService.addNavItem({
            title: 'HTTP Resource',
            imgIconSrc: 'https://material.angular.io/assets/img/homepage/angular-white-transparent.svg',
            routerLink: {
                routerLink: ['./ngx-http']
            }
        });
    }
    NgxHttpAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ngx_http_app__WEBPACK_IMPORTED_MODULE_3__["NgxHttpAppComponent"], _example_page__WEBPACK_IMPORTED_MODULE_4__["ExamplePageComponent"]],
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                // NgxHttpExamplesModule,
                _tutorial__WEBPACK_IMPORTED_MODULE_5__["NgxHttpTutorialsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"])
            ]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_2__["TopNavService"]])
    ], NgxHttpAppModule);
    return NgxHttpAppModule;
}());



/***/ }),

/***/ "./src/modules/@http/ngx-http-app/__tdm-code__.ts":
/*!********************************************************!*\
  !*** ./src/modules/@http/ngx-http-app/__tdm-code__.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{"file":"FEATURES.md","lang":"md","section":"DAO","code":"<p>Supports Data Access Object pattern out of the box</p>\n","title":"DAO"},{"file":"FEATURES.md","lang":"md","section":"ActiveRecord","code":"<p>Support&#39;s Active Record (opt-in, via plugin) with full type support for models.</p>\n","title":"Active Record"},{"file":"FEATURES.md","lang":"md","section":"RXJS","code":"<p>Support&#39;s RXJS streams (opt-in, via plugin)</p>\n","title":"RXJS"}]

/***/ }),

/***/ "./src/modules/@http/ngx-http-app/index.ts":
/*!*************************************************!*\
  !*** ./src/modules/@http/ngx-http-app/index.ts ***!
  \*************************************************/
/*! exports provided: NgxHttpAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_http_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-http-app.component */ "./src/modules/@http/ngx-http-app/ngx-http-app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxHttpAppComponent", function() { return _ngx_http_app_component__WEBPACK_IMPORTED_MODULE_0__["NgxHttpAppComponent"]; });




/***/ }),

/***/ "./src/modules/@http/ngx-http-app/ngx-http-app.component.html":
/*!********************************************************************!*\
  !*** ./src/modules/@http/ngx-http-app/ngx-http-app.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-package-welcome title=\"Http Resource\"\n                     description=\"A metadata driven, DAO and Active Record library for angular. Powerful, typed, robust.\"\n                     buttonText=\"TUTORIAL >>\"\n                     buttonLink=\"./tutorial/introduction\"\n                     name=\"ngx-http-client\"\n                     [version]=\"version\" [ngVersion]=\"ngVersion\"\n                     [deps]=\"['tixin', 'core', 'data']\">\n</tdm-package-welcome>\n<div class=\"tdm-page\">\n  <div class=\"tdm-page-content\">\n    <div>\n      <div fxLayout fxLayoutAlign=\"center center\" fxLayoutWrap=\"wrap\">\n        <div fxFlex=\"100%\" class=\"center-text\">\n          <h1>DOCUMENTATION WIP</h1>\n          <div class=\"tldr-header\">\n            <p>From a model to xhr HTTP calls using angular's http client.</p>\n            <p>HTTP Resource is simple and intuitive, providing a basic not intrusive interface to start with.\n              Setup your models for quick CRUD operations in no time and invoke HTTP calls using a Data Access Object.</p>\n            <p>HTTP Resource is also highly extensible (via plugins), opt-in for Active Record pattern plugin and/or the\n            resource control plugin to enjoy the full power of angular.</p>\n          </div>\n        </div>\n      </div>\n\n      <tdm-markdown-view><h1 class=\"center-text\">Features</h1></tdm-markdown-view>\n      <tdm-feature-list [features]=\"features\"></tdm-feature-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/modules/@http/ngx-http-app/ngx-http-app.component.scss":
/*!********************************************************************!*\
  !*** ./src/modules/@http/ngx-http-app/ngx-http-app.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.tldr-header {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 16px 0;\n  color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/modules/@http/ngx-http-app/ngx-http-app.component.ts":
/*!******************************************************************!*\
  !*** ./src/modules/@http/ngx-http-app/ngx-http-app.component.ts ***!
  \******************************************************************/
/*! exports provided: NgxHttpAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxHttpAppComponent", function() { return NgxHttpAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/client */ "./src/modules/@shared/client/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var client = new _shared_client__WEBPACK_IMPORTED_MODULE_1__["SWClient"]();
client.ready
    .then(function () {
    console.log('CLIENT CREATED');
    client.restoreDB()
        .then(function (data) { return console.log('DB RESTORED'); })
        .catch(function (err) { return console.error(err); });
})
    .catch(function (err) { return console.error(err); });
var NgxHttpAppComponent = /** @class */ (function () {
    function NgxHttpAppComponent() {
        this.version = __webpack_require__(/*! ../../../../../../libs/ngx-http-client/package.json */ "../../libs/ngx-http-client/package.json").version;
        this.ngVersion = _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full;
        this.code = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/ngx-http-app/__tdm-code__.ts");
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
    NgxHttpAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-app',
            styles: [__webpack_require__(/*! ./ngx-http-app.component.scss */ "./src/modules/@http/ngx-http-app/ngx-http-app.component.scss")],
            template: __webpack_require__(/*! ./ngx-http-app.component.html */ "./src/modules/@http/ngx-http-app/ngx-http-app.component.html")
        })
    ], NgxHttpAppComponent);
    return NgxHttpAppComponent;
}());



/***/ }),

/***/ "./src/modules/@http/routes.ts":
/*!*************************************!*\
  !*** ./src/modules/@http/routes.ts ***!
  \*************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
/* harmony import */ var _ngx_http_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-http-app */ "./src/modules/@http/ngx-http-app/index.ts");


var ROUTES = [
    {
        path: '',
        children: [
            { path: '', pathMatch: 'full', component: _ngx_http_app__WEBPACK_IMPORTED_MODULE_1__["NgxHttpAppComponent"] },
            { path: 'tutorial/:name', component: _shared__WEBPACK_IMPORTED_MODULE_0__["TutorialPageComponent"] },
        ]
    }
];


/***/ }),

/***/ "./src/modules/@http/shared/http-resource-wrapper/http-resource-wrapper.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/modules/@http/shared/http-resource-wrapper/http-resource-wrapper.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content select=\".form-description\"></ng-content>\n<div class=\"http-wrapper-container\">\n  <div class=\"form-wrapper mat-elevation-z4\" fxLayout=\"column\">\n    <mat-toolbar *ngIf=\"!noDashboard\">\n      <div fxFlex=\"nogrow\">\n        <div class=\"http-status-indicator\" [matTooltip]=\"'Status: ' + status\">\n          <tdm-led [blink]=\"ledBlinking\" [color]=\"ledColor\"></tdm-led>\n        </div>\n      </div>\n      <span class=\"form-title\" fxFlex>{{title}}</span>\n      <button mat-icon-button (click)=\"invokeAction()\">\n        <mat-icon>{{ inFlight ? 'stop' : 'play_arrow'}}</mat-icon>\n      </button>\n    </mat-toolbar>\n    <div fxFlex=\"grow\" class=\"http-wrapper-content\">\n      <mat-drawer-container>\n        <mat-drawer-content>\n          <mat-tab-group #tabs style=\"margin-top: -48px;\">\n            <mat-tab>\n              <ng-template mat-tab-label></ng-template>\n              <div class=\"http-wrapper-container-main-content\">\n                <ng-content select=\".custom-http-actions\"></ng-content>\n                <div fxLayout=\"row\">\n                  <div fxFlex=\"30%\" class=\"http-event-log-container\">\n                    <h3 class=\"event-log-header\">Requests</h3>\n                    <mat-accordion displayMode=\"flat\">\n                      <mat-expansion-panel *ngFor=\"let ad of resourceActions; index as index\"\n                                           [class.selected]=\"index === selectedActionIndex\"\n                                           [expanded]=\"index === selectedActionIndex\"\n                                           (closed)=\"actionDataClose(index)\"\n                                           (opened)=\"actionDataOpen(index)\">\n                        <mat-expansion-panel-header class=\"event-log-item-header\">\n                          <mat-panel-title>\n                            <mat-spinner diameter=\"24\" *ngIf=\"!ad.complete\"></mat-spinner>\n                            <span *ngIf=\"ad.complete\">#{{ index + 1 }}</span>\n                          </mat-panel-title>\n                          <mat-panel-description class=\"http-request-status http-request-status-{{ad.status}}\">\n                            {{ad.status}}\n                          </mat-panel-description>\n                        </mat-expansion-panel-header>\n\n                        <div fxLayout=\"column\" *ngFor=\"let eLog of ad.eventLog\" class=\"http-event-log-record\">\n                          <div fxFlex class=\"http-event-log-time\">\n                            {{eLog.date | date: 'HH:mm:SSS' }}\n                          </div>\n                          <div fxFlex class=\"http-event-log-type\">\n                            {{ eLog.event.type }}\n                          </div>\n                        </div>\n\n                      </mat-expansion-panel>\n                    </mat-accordion>\n                  </div>\n                  <div fxFlex=\"70%\" class=\"http-object-showcase\">\n                    <ng-container *ngIf=\"!selectedAction\">\n                      <ng-content *ngIf=\"!code\" select=\".http-source-code-snip\"></ng-content>\n                      <tdm-code-view *ngIf=\"code\" [code]=\"code\" noElevation></tdm-code-view>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"selectedAction\">\n                      <mat-tab-group *ngIf=\"selectedAction.complete\">\n                        <mat-tab *ngFor=\"let t of selectedAction.tabStringify\" [label]=\"t.label\">\n                          <div class=\"json-view\">\n                            <pre><code [innerHtml]=\"t.html\"></code></pre>\n                          </div>\n                        </mat-tab>\n                      </mat-tab-group>\n                      <div *ngIf=\"!selectedAction.complete\" class=\"http-object-showcase-spinner\">\n                        <mat-spinner></mat-spinner>\n                      </div>\n                    </ng-container>\n                  </div>\n                </div>\n              </div>\n              <ng-content select=\".http-footer\"></ng-content>\n            </mat-tab>\n          </mat-tab-group>\n        </mat-drawer-content>\n      </mat-drawer-container>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/modules/@http/shared/http-resource-wrapper/http-resource-wrapper.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/modules/@http/shared/http-resource-wrapper/http-resource-wrapper.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".http-status-indicator {\n  width: 24px;\n  height: 24px;\n  margin: 0 15px; }\n\n.http-wrapper-container-main-content, .http-object-showcase {\n  min-height: 300px;\n  max-height: 450px; }\n\n.http-object-showcase {\n  position: relative;\n  padding: 10px; }\n\n.http-object-showcase .http-object-showcase-spinner {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n.event-log-header {\n  text-align: center; }\n\n.http-event-log-container {\n  background-color: white;\n  padding: 10px 0; }\n\n.http-event-log-container mat-expansion-panel.selected mat-expansion-panel-header {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    background-color: rgba(0, 0, 0, 0.04); }\n\n.http-event-log-container .mat-expansion-panel:not([class*=mat-elevation-z]) {\n    box-shadow: none; }\n\n.event-log-item-header {\n  padding: 0 6px; }\n\n.http-event-log-record {\n  padding-bottom: 15px; }\n\n.http-event-log-time {\n  font-size: 0.74em;\n  color: darkgray; }\n\n.http-request-status {\n  transition: color 250ms ease-in-out;\n  flex-grow: 1; }\n\n.http-request-status-Success {\n  color: #599001; }\n\n.http-request-status-In-Flight {\n  color: #3F8CFF; }\n\n.http-request-status-Error {\n  color: #F00; }\n"

/***/ }),

/***/ "./src/modules/@http/shared/http-resource-wrapper/http-resource-wrapper.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/modules/@http/shared/http-resource-wrapper/http-resource-wrapper.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: HttpResourceWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResourceWrapperComponent", function() { return HttpResourceWrapperComponent; });
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/highlight */ "../../node_modules/highlight.js/lib/highlight.js");
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__["registerLanguage"]('json', __webpack_require__(/*! highlight.js/lib/languages/json.js */ "../../node_modules/highlight.js/lib/languages/json.js"));





function createLoggableRequest(request) {
    var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"](request.method, request.url, request.body, request);
    var reqLike = {
        method: req.method,
        url: req.urlWithParams || req.url,
        headers: req.headers.keys().reduce(function (agg, k) { agg[k] = req.headers.get(k); return agg; }, {}),
        body: req.body,
        reportProgress: req.reportProgress,
        withCredentials: req.withCredentials,
        responseType: req.responseType
    };
    return reqLike;
}
function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
function createCode(obj) {
    return highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__["highlightAuto"](JSON.stringify(obj, null, 2), ['json']).value;
}
var HttpResourceWrapperComponent = /** @class */ (function () {
    function HttpResourceWrapperComponent() {
        this.resources = [];
        this.resourceActions = [];
        this.inFlight = false;
        this.status = 'Idle';
    }
    HttpResourceWrapperComponent.prototype.invokeAction = function () {
        var _this = this;
        if (this.inFlight) {
            for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
                var rc = _a[_i];
                rc.cancel();
            }
            return;
        }
        this.inFlight = true;
        this.resources = [];
        this.resourceActions = [];
        this.ledBlinking = true;
        this.ledColor = 'blue';
        this.status = 'In-Flight';
        this.selectedAction = undefined;
        this.selectedActionIndex = -1;
        var self = this;
        var runResult = this.run();
        var listener = function listener(e) {
            var _this = this;
            if (e.type[0] === '$') {
                return;
            }
            // we need to support DAO and AR.
            // With DAO the ResourceControl (this) will always be different from call to call.
            // With AR it will be the same instance of ResourceControl for all calls, but luckily 2 can't run together (busy)
            // so we can use that.
            var index = self.resources.findIndex(function (r, i) { return r === _this && !self.resourceActions[i].complete; });
            if (index === -1) {
                var actionData_1 = { eventLog: [], tabStringify: [], status: 'In-Flight' };
                index = self.resources.push(this) - 1;
                self.resourceActions.push(actionData_1);
                if (self.resources.length === 1) {
                    self.selectedAction = actionData_1;
                    self.selectedActionIndex = 0;
                }
                this.next().then(function (result) {
                    actionData_1.tabStringify.unshift({
                        label: 'Result',
                        html: createCode(result ? Object(_tdm_core__WEBPACK_IMPORTED_MODULE_4__["autoSerialize"])(result) : result)
                    });
                });
            }
            var actionData = self.resourceActions[index];
            var isLast = self.handleEvent(e, actionData);
            if (isLast) {
                actionData.complete = true;
                if (!runResult && self.resourceActions.every(function (ad) { return ad.complete; })) {
                    removeListener(); // tslint:disable-line:no-use-before-declare
                }
            }
        };
        _tdm_data__WEBPACK_IMPORTED_MODULE_5__["ResourceControl"].addEventListener(listener);
        var removeListener = function () {
            _this.inFlight = false;
            _tdm_data__WEBPACK_IMPORTED_MODULE_5__["ResourceControl"].removeEventListener(listener);
        };
        if (isPromise(runResult)) {
            runResult.then(removeListener, removeListener);
        }
        else if (runResult) {
            runResult.$rc.next().then(removeListener, removeListener);
        }
    };
    HttpResourceWrapperComponent.prototype.actionDataOpen = function (index) {
        this.selectedActionIndex = index;
        this.selectedAction = this.resourceActions[index];
    };
    HttpResourceWrapperComponent.prototype.actionDataClose = function (index) {
        if (this.selectedActionIndex === index) {
            this.selectedActionIndex = -1;
            this.selectedAction = undefined;
        }
    };
    HttpResourceWrapperComponent.prototype.ngOnChanges = function (change) {
        if ('noDashboard' in change) {
            this.noDashboard = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(this.noDashboard);
        }
    };
    HttpResourceWrapperComponent.prototype.handleEvent = function (event, actionLog) {
        var isLast = false;
        if (Object(_tdm_data__WEBPACK_IMPORTED_MODULE_5__["isResourceEvent"])('ActionError', event)) {
            actionLog.status = this.status = 'Error';
            this.ledBlinking = true;
            this.ledColor = 'red';
            this.setTabObjects(event, actionLog.tabStringify);
            isLast = true;
        }
        else if (Object(_tdm_data__WEBPACK_IMPORTED_MODULE_5__["isResourceEvent"])('ActionEnd', event)) {
            actionLog.status = this.status = event.result === 'success' ? 'Success' : 'Cancel';
            this.ledBlinking = false;
            this.ledColor = event.result === 'success' ? 'green' : 'yellow';
            this.setTabObjects(event, actionLog.tabStringify);
            isLast = true;
        }
        actionLog.eventLog.push({ date: new Date(), event: event });
        return isLast;
    };
    HttpResourceWrapperComponent.prototype.setTabObjects = function (event, tabStringify) {
        if (event.request) {
            tabStringify.push({
                label: 'Request',
                html: createCode(createLoggableRequest(event.request))
            });
        }
        if (event.response) {
            tabStringify.push({
                label: 'Response',
                html: createCode(event.response)
            });
        }
        if (Object(_tdm_data__WEBPACK_IMPORTED_MODULE_5__["isResourceEvent"])('ActionError', event)) {
            if (event.error) {
                tabStringify.push({
                    label: 'Error',
                    html: createCode(event.error)
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Function)
    ], HttpResourceWrapperComponent.prototype, "run", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], HttpResourceWrapperComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], HttpResourceWrapperComponent.prototype, "code", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], HttpResourceWrapperComponent.prototype, "noDashboard", void 0);
    HttpResourceWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'http-resource-wrapper',
            template: __webpack_require__(/*! ./http-resource-wrapper.component.html */ "./src/modules/@http/shared/http-resource-wrapper/http-resource-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./http-resource-wrapper.component.scss */ "./src/modules/@http/shared/http-resource-wrapper/http-resource-wrapper.component.scss")]
        })
    ], HttpResourceWrapperComponent);
    return HttpResourceWrapperComponent;
}());



/***/ }),

/***/ "./src/modules/@http/shared/index.ts":
/*!*******************************************!*\
  !*** ./src/modules/@http/shared/index.ts ***!
  \*******************************************/
/*! exports provided: HttpResourceSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/modules/@http/shared/module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpResourceSharedModule", function() { return _module__WEBPACK_IMPORTED_MODULE_0__["HttpResourceSharedModule"]; });




/***/ }),

/***/ "./src/modules/@http/shared/module.ts":
/*!********************************************!*\
  !*** ./src/modules/@http/shared/module.ts ***!
  \********************************************/
/*! exports provided: HttpResourceSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResourceSharedModule", function() { return HttpResourceSharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
/* harmony import */ var _http_resource_wrapper_http_resource_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-resource-wrapper/http-resource-wrapper.component */ "./src/modules/@http/shared/http-resource-wrapper/http-resource-wrapper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HttpResourceSharedModule = /** @class */ (function () {
    function HttpResourceSharedModule() {
    }
    HttpResourceSharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_http_resource_wrapper_http_resource_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["HttpResourceWrapperComponent"]],
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            exports: [_http_resource_wrapper_http_resource_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["HttpResourceWrapperComponent"]]
        })
    ], HttpResourceSharedModule);
    return HttpResourceSharedModule;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/1-introduction/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/@http/tutorial/1-introduction/index.ts ***!
  \************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _introduction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introduction.component */ "./src/modules/@http/tutorial/1-introduction/introduction.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return _introduction_component__WEBPACK_IMPORTED_MODULE_0__["IntroductionComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/1-introduction/introduction.component.html":
/*!*******************************************************************************!*\
  !*** ./src/modules/@http/tutorial/1-introduction/introduction.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-1'}]:true\"></tdm-markdown-view>\n\n<tdm-code-view [code]=\"code | async | tdmCode:[{file: 'dao-ar-example.ts', section: 'MODEL'}, {file: 'dao-ar-example.ts', section: 'DAO'}, {file: 'dao-ar-example.ts', section: 'AR'}]\"></tdm-code-view>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-2'}]:true\"></tdm-markdown-view>\n\n<http-resource-wrapper title=\"Live Example\" [run]=\"run\">\n  <div class=\"http-source-code-snip\">\n    <tdm-code-view [code]=\"(code | async | tdmCode:[{file: 'introduction.component.ts', section: 'code'}])[0]\"></tdm-code-view>\n  </div>\n</http-resource-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-3'}]:true\"></tdm-markdown-view>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"led-sample\">\n      <tdm-led></tdm-led>\n    </div>\n    <span>Idle</span>\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"led-sample\">\n      <tdm-led color=\"blue\" blink></tdm-led>\n    </div>\n    <span>In Flight</span>\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"led-sample\">\n      <tdm-led color=\"green\"></tdm-led>\n    </div>\n    <span>Success</span>\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"led-sample\">\n      <tdm-led color=\"red\" blink></tdm-led>\n    </div>\n    <span>Error</span>\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"led-sample\">\n      <tdm-led color=\"yellow\"></tdm-led>\n    </div>\n    <span>Cancelled</span>\n  </div>\n</div>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-4'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/1-introduction/introduction.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/modules/@http/tutorial/1-introduction/introduction.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".led-sample {\n  height: 24px;\n  width: 24px;\n  margin-bottom: 15px; }\n  .led-sample + span {\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/1-introduction/introduction.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/@http/tutorial/1-introduction/introduction.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _shared_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/client */ "./src/modules/@shared/client/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroductionComponent = /** @class */ (function () {
    /* @tdm-example: code */
    function IntroductionComponent(ngDao) {
        var _this = this;
        this.ngDao = ngDao;
        this.code = __webpack_require__.e(/*! import() | NgxHttpIntroductionComponent */ "NgxHttpIntroductionComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/1-introduction/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        this.run = function () {
            /* @tdm-example: code */
            /* Dependency Injection - ngDao: NgDAO */
            return _this.ngDao.get(_shared_client__WEBPACK_IMPORTED_MODULE_2__["Customer"]).findById('ALFKI');
        };
    }
    IntroductionComponent.tutorial = {
        id: 'introduction',
        name: 'Introduction'
    };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/modules/@http/tutorial/1-introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.scss */ "./src/modules/@http/tutorial/1-introduction/introduction.component.scss")]
        }),
        __metadata("design:paramtypes", [_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["NgDAO"]])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/1a-overview/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/@http/tutorial/1a-overview/index.ts ***!
  \*********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.component */ "./src/modules/@http/tutorial/1a-overview/overview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return _overview_component__WEBPACK_IMPORTED_MODULE_0__["OverviewComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/1a-overview/overview.component.html":
/*!************************************************************************!*\
  !*** ./src/modules/@http/tutorial/1a-overview/overview.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/1a-overview/overview.component.scss":
/*!************************************************************************!*\
  !*** ./src/modules/@http/tutorial/1a-overview/overview.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".led-sample {\n  height: 24px;\n  width: 24px;\n  margin-bottom: 15px; }\n  .led-sample + span {\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/1a-overview/overview.component.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/@http/tutorial/1a-overview/overview.component.ts ***!
  \**********************************************************************/
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
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | NgxHttpOverviewComponent */ "NgxHttpOverviewComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/1a-overview/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    OverviewComponent.tutorial = {
        id: 'overview',
        name: 'Overview'
    };
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/modules/@http/tutorial/1a-overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/modules/@http/tutorial/1a-overview/overview.component.scss")]
        })
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/2-setup/index.ts":
/*!*****************************************************!*\
  !*** ./src/modules/@http/tutorial/2-setup/index.ts ***!
  \*****************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.component */ "./src/modules/@http/tutorial/2-setup/setup.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return _setup_component__WEBPACK_IMPORTED_MODULE_0__["SetupComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/2-setup/setup.component.html":
/*!*****************************************************************!*\
  !*** ./src/modules/@http/tutorial/2-setup/setup.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/2-setup/setup.component.scss":
/*!*****************************************************************!*\
  !*** ./src/modules/@http/tutorial/2-setup/setup.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/2-setup/setup.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/@http/tutorial/2-setup/setup.component.ts ***!
  \***************************************************************/
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
        this.code = __webpack_require__.e(/*! import() | NgxHttpSetupComponent */ "NgxHttpSetupComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/2-setup/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    SetupComponent.tutorial = {
        id: 'setup',
        name: 'Setup'
    };
    SetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/modules/@http/tutorial/2-setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.scss */ "./src/modules/@http/tutorial/2-setup/setup.component.scss")]
        })
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/3-creating-a-model/creating-a-model.component.html":
/*!***************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/3-creating-a-model/creating-a-model.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/3-creating-a-model/creating-a-model.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/3-creating-a-model/creating-a-model.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/3-creating-a-model/creating-a-model.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/3-creating-a-model/creating-a-model.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreatingAModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatingAModelComponent", function() { return CreatingAModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CreatingAModelComponent = /** @class */ (function () {
    function CreatingAModelComponent() {
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | NgxHttpCreatingAModelComponent */ "NgxHttpCreatingAModelComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/3-creating-a-model/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    CreatingAModelComponent.tutorial = {
        id: 'creating-a-resource',
        name: 'Creating A Resource'
    };
    CreatingAModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-creating-a-model',
            template: __webpack_require__(/*! ./creating-a-model.component.html */ "./src/modules/@http/tutorial/3-creating-a-model/creating-a-model.component.html"),
            styles: [__webpack_require__(/*! ./creating-a-model.component.scss */ "./src/modules/@http/tutorial/3-creating-a-model/creating-a-model.component.scss")],
        })
    ], CreatingAModelComponent);
    return CreatingAModelComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/3-creating-a-model/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/@http/tutorial/3-creating-a-model/index.ts ***!
  \****************************************************************/
/*! exports provided: CreatingAModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creating_a_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creating-a-model.component */ "./src/modules/@http/tutorial/3-creating-a-model/creating-a-model.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatingAModelComponent", function() { return _creating_a_model_component__WEBPACK_IMPORTED_MODULE_0__["CreatingAModelComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/4-dao/dao.component.html":
/*!*************************************************************!*\
  !*** ./src/modules/@http/tutorial/4-dao/dao.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-1'}]:true\"></tdm-markdown-view>\n\n<http-resource-wrapper title=\"DAO\" [run]=\"run\">\n  <div class=\"http-source-code-snip\">\n    <tdm-code-view [code]=\"(code | async | tdmCode:[{file: 'dao.component.ts', section: 'code'}])[0]\"></tdm-code-view>\n  </div>\n</http-resource-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-2'}]:true\"></tdm-markdown-view>\n\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/4-dao/dao.component.scss":
/*!*************************************************************!*\
  !*** ./src/modules/@http/tutorial/4-dao/dao.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/4-dao/dao.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/@http/tutorial/4-dao/dao.component.ts ***!
  \***********************************************************/
/*! exports provided: DaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaoComponent", function() { return DaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _shared_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/client */ "./src/modules/@shared/client/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DaoComponent = /** @class */ (function () {
    /* @tdm-example: code */
    function DaoComponent(ngDao) {
        var _this = this;
        this.ngDao = ngDao;
        this.code = __webpack_require__.e(/*! import() | NgxHttpDaoComponent */ "NgxHttpDaoComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/4-dao/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        this.run = function () { return __awaiter(_this, void 0, void 0, function () {
            var customerDao, customer, customers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerDao = ngDao.get(_shared_client__WEBPACK_IMPORTED_MODULE_2__["Customer"]);
                        return [4 /*yield*/, customerDao.findById('ALFKI')];
                    case 1:
                        customer = _a.sent();
                        customer.CompanyName = 'Microsoft';
                        customer.City = 'San Francisco';
                        return [4 /*yield*/, customerDao.replace(customer)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, customerDao.query()];
                    case 3:
                        customers = _a.sent();
                        customer = customers.find(function (c) { return c.CustomerID === 'ALFKI'; });
                        if (!customer || customer.CompanyName !== 'Microsoft' || customer.City !== 'San Francisco') {
                            throw new Error('Invalid demo!!!');
                        }
                        return [2 /*return*/];
                }
            });
        }); }; /* @tdm-ignore-line */
    }
    /* @tdm-example: code */
    DaoComponent.tutorial = {
        id: 'dao',
        name: 'DAO'
    };
    DaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-dao',
            template: __webpack_require__(/*! ./dao.component.html */ "./src/modules/@http/tutorial/4-dao/dao.component.html"),
            styles: [__webpack_require__(/*! ./dao.component.scss */ "./src/modules/@http/tutorial/4-dao/dao.component.scss")],
        }),
        __metadata("design:paramtypes", [_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["NgDAO"]])
    ], DaoComponent);
    return DaoComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/4-dao/index.ts":
/*!***************************************************!*\
  !*** ./src/modules/@http/tutorial/4-dao/index.ts ***!
  \***************************************************/
/*! exports provided: DaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dao_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dao.component */ "./src/modules/@http/tutorial/4-dao/dao.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DaoComponent", function() { return _dao_component__WEBPACK_IMPORTED_MODULE_0__["DaoComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/5-options/index.ts":
/*!*******************************************************!*\
  !*** ./src/modules/@http/tutorial/5-options/index.ts ***!
  \*******************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.component */ "./src/modules/@http/tutorial/5-options/options.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return _options_component__WEBPACK_IMPORTED_MODULE_0__["OptionsComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/5-options/options.component.html":
/*!*********************************************************************!*\
  !*** ./src/modules/@http/tutorial/5-options/options.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-1'}]:true\"></tdm-markdown-view>\n\n<http-resource-wrapper title=\"Options\" [run]=\"run\">\n  <div class=\"http-source-code-snip\">\n    <tdm-code-view [code]=\"(code | async | tdmCode:[{file: 'options.component.ts', section: 'code'}])[0]\"></tdm-code-view>\n  </div>\n</http-resource-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-2'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/5-options/options.component.scss":
/*!*********************************************************************!*\
  !*** ./src/modules/@http/tutorial/5-options/options.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/5-options/options.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/@http/tutorial/5-options/options.component.ts ***!
  \*******************************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _shared_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/client */ "./src/modules/@shared/client/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OptionsComponent = /** @class */ (function () {
    /* @tdm-example: code */
    function OptionsComponent(ngDao) {
        this.ngDao = ngDao;
        this.code = __webpack_require__.e(/*! import() | NgxHttpOptionsComponent */ "NgxHttpOptionsComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/5-options/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        this.run = function () {
            return ngDao.get(_shared_client__WEBPACK_IMPORTED_MODULE_2__["Customer"]).findById('ALFKI', {
                urlParams: {
                    someQueryKey: 'someQueryValue'
                }
            });
        };
    }
    /* @tdm-example: code */
    OptionsComponent.tutorial = {
        id: 'options',
        name: 'Options'
    };
    OptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-options',
            template: __webpack_require__(/*! ./options.component.html */ "./src/modules/@http/tutorial/5-options/options.component.html"),
            styles: [__webpack_require__(/*! ./options.component.scss */ "./src/modules/@http/tutorial/5-options/options.component.scss")],
        }),
        __metadata("design:paramtypes", [_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["NgDAO"]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/6-static-options/customer.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/@http/tutorial/6-static-options/customer.ts ***!
  \*****************************************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _shared_client_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/client/models */ "./src/modules/@shared/client/models/index.ts");
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


var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_0__["HttpResource"])({
            endpoint: 'customers/:id?',
            urlParams: {
                id: 'CustomerID',
                test: '123'
            },
            headers: {
                'my-private-header': 'private-header',
                'my-public-header': 'public-header'
            }
        })
    ], Customer);
    return Customer;
}(_shared_client_models__WEBPACK_IMPORTED_MODULE_1__["Customer"]));



/***/ }),

/***/ "./src/modules/@http/tutorial/6-static-options/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/@http/tutorial/6-static-options/index.ts ***!
  \**************************************************************/
/*! exports provided: StaticOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-options.component */ "./src/modules/@http/tutorial/6-static-options/static-options.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticOptionsComponent", function() { return _static_options_component__WEBPACK_IMPORTED_MODULE_0__["StaticOptionsComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/6-static-options/static-options.component.html":
/*!***********************************************************************************!*\
  !*** ./src/modules/@http/tutorial/6-static-options/static-options.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-1'}]:true\"></tdm-markdown-view>\n\n<http-resource-wrapper title=\"Options\" [run]=\"run\">\n  <div class=\"http-source-code-snip\">\n    <tdm-code-view [code]=\"(code | async | tdmCode:[{file: 'static-options.component.ts', section: 'code'}])[0]\"></tdm-code-view>\n  </div>\n</http-resource-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-2'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/6-static-options/static-options.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/modules/@http/tutorial/6-static-options/static-options.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/6-static-options/static-options.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/modules/@http/tutorial/6-static-options/static-options.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StaticOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticOptionsComponent", function() { return StaticOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer */ "./src/modules/@http/tutorial/6-static-options/customer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaticOptionsComponent = /** @class */ (function () {
    /* @tdm-example: code */
    function StaticOptionsComponent(ngDao) {
        this.ngDao = ngDao;
        this.code = __webpack_require__.e(/*! import() | NgxHttpStaticOptionsComponent */ "NgxHttpStaticOptionsComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/6-static-options/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        this.run = function () {
            return ngDao.get(_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]).findById('ALFKI', {
                urlParams: {
                    thisWillBe: 'aMergedParameter'
                },
                headers: {
                    'my-ad-hoc-header': 'ad-hoc-header',
                    'my-public-header': 'public-header-hacked-by-merging'
                }
            });
        };
    }
    /* @tdm-example: code */
    StaticOptionsComponent.tutorial = {
        id: 'static-options',
        name: 'Static Options'
    };
    StaticOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-static-options',
            template: __webpack_require__(/*! ./static-options.component.html */ "./src/modules/@http/tutorial/6-static-options/static-options.component.html"),
            styles: [__webpack_require__(/*! ./static-options.component.scss */ "./src/modules/@http/tutorial/6-static-options/static-options.component.scss")],
        }),
        __metadata("design:paramtypes", [_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["NgDAO"]])
    ], StaticOptionsComponent);
    return StaticOptionsComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/@http/tutorial/index.ts ***!
  \*********************************************/
/*! exports provided: NgxHttpTutorialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/modules/@http/tutorial/module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxHttpTutorialsModule", function() { return _module__WEBPACK_IMPORTED_MODULE_0__["NgxHttpTutorialsModule"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/module.ts":
/*!**********************************************!*\
  !*** ./src/modules/@http/tutorial/module.ts ***!
  \**********************************************/
/*! exports provided: NgxHttpTutorialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxHttpTutorialsModule", function() { return NgxHttpTutorialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
/* harmony import */ var _http_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @http/shared */ "./src/modules/@http/shared/index.ts");
/* harmony import */ var _1_introduction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./1-introduction */ "./src/modules/@http/tutorial/1-introduction/index.ts");
/* harmony import */ var _1a_overview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./1a-overview */ "./src/modules/@http/tutorial/1a-overview/index.ts");
/* harmony import */ var _2_setup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./2-setup */ "./src/modules/@http/tutorial/2-setup/index.ts");
/* harmony import */ var _3_creating_a_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./3-creating-a-model */ "./src/modules/@http/tutorial/3-creating-a-model/index.ts");
/* harmony import */ var _4_dao__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./4-dao */ "./src/modules/@http/tutorial/4-dao/index.ts");
/* harmony import */ var _5_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./5-options */ "./src/modules/@http/tutorial/5-options/index.ts");
/* harmony import */ var _6_static_options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./6-static-options */ "./src/modules/@http/tutorial/6-static-options/index.ts");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo */ "./src/modules/@http/tutorial/todo/index.ts");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugins */ "./src/modules/@http/tutorial/plugins/index.ts");
/* harmony import */ var _resource_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resource-control */ "./src/modules/@http/tutorial/resource-control/index.ts");
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
    _4_dao__WEBPACK_IMPORTED_MODULE_7__["DaoComponent"],
    _5_options__WEBPACK_IMPORTED_MODULE_8__["OptionsComponent"],
    _6_static_options__WEBPACK_IMPORTED_MODULE_9__["StaticOptionsComponent"],
    _resource_control__WEBPACK_IMPORTED_MODULE_12__["ResourceControlComponent"],
    _resource_control__WEBPACK_IMPORTED_MODULE_12__["EventsComponent"],
    _resource_control__WEBPACK_IMPORTED_MODULE_12__["CancellingComponent"],
    _resource_control__WEBPACK_IMPORTED_MODULE_12__["NextComponent"],
    _plugins__WEBPACK_IMPORTED_MODULE_11__["ActiveRecordComponent"],
    _plugins__WEBPACK_IMPORTED_MODULE_11__["FlowControlComponent"],
    _plugins__WEBPACK_IMPORTED_MODULE_11__["RxResourceControlComponent"],
    _todo__WEBPACK_IMPORTED_MODULE_10__["TodoComponent"]
];
var COMPONENTS = [
    TUTORIALS
];
function isTutorial(value) {
    return !!(value.tutorial && value.tutorial.name && value.tutorial.id);
}
var NgxHttpTutorialsModule = /** @class */ (function () {
    function NgxHttpTutorialsModule(tutorialService) {
        for (var _i = 0, TUTORIALS_1 = TUTORIALS; _i < TUTORIALS_1.length; _i++) {
            var c = TUTORIALS_1[_i];
            if (isTutorial(c)) {
                tutorialService.addTutorial(c);
            }
        }
    }
    NgxHttpTutorialsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [COMPONENTS],
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _http_shared__WEBPACK_IMPORTED_MODULE_2__["HttpResourceSharedModule"]
            ],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_1__["TutorialService"]],
            exports: [COMPONENTS],
            entryComponents: [
                TUTORIALS
            ]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["TutorialService"]])
    ], NgxHttpTutorialsModule);
    return NgxHttpTutorialsModule;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/1-active-record/active-record.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/1-active-record/active-record.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-1'}]:true\"></tdm-markdown-view>\n\n<http-resource-wrapper title=\"Active Record\" [run]=\"run\">\n  <div class=\"http-source-code-snip\">\n    <tdm-code-view [code]=\"(code | async | tdmCode:[{file: 'active-record.component.ts', section: 'code'}])[0]\"></tdm-code-view>\n  </div>\n</http-resource-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-2'}]:true\"></tdm-markdown-view>\n\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/1-active-record/active-record.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/1-active-record/active-record.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/1-active-record/active-record.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/1-active-record/active-record.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ActiveRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveRecordComponent", function() { return ActiveRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/client */ "./src/modules/@shared/client/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ActiveRecordComponent = /** @class */ (function () {
    /* @tdm-example: code */
    function ActiveRecordComponent() {
        var _this = this;
        this.code = __webpack_require__.e(/*! import() | NgxHttpActiveRecordComponent */ "NgxHttpActiveRecordComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/plugins/1-active-record/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        this.run = function () { return __awaiter(_this, void 0, void 0, function () {
            var customer, customers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _shared_client__WEBPACK_IMPORTED_MODULE_1__["Customer"].findById('ALFKI').$rc.next()];
                    case 1:
                        customer = _a.sent();
                        customer.CompanyName = 'Microsoft';
                        customer.City = 'San Francisco';
                        return [4 /*yield*/, customer.$replace().next()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, _shared_client__WEBPACK_IMPORTED_MODULE_1__["Customer"].query().$rc.next()];
                    case 3:
                        customers = _a.sent();
                        customer = customers.find(function (c) { return c.CustomerID === 'ALFKI'; });
                        if (!customer || customer.CompanyName !== 'Microsoft' || customer.City !== 'San Francisco') {
                            throw new Error('Invalid demo!!!');
                        }
                        return [2 /*return*/];
                }
            });
        }); }; /* @tdm-ignore-line */
    }
    /* @tdm-example: code */
    ActiveRecordComponent.tutorial = {
        id: 'active-record',
        name: 'Active Record',
        subHeader: 'Plugins'
    };
    ActiveRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-active-record',
            template: __webpack_require__(/*! ./active-record.component.html */ "./src/modules/@http/tutorial/plugins/1-active-record/active-record.component.html"),
            styles: [__webpack_require__(/*! ./active-record.component.scss */ "./src/modules/@http/tutorial/plugins/1-active-record/active-record.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ActiveRecordComponent);
    return ActiveRecordComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/1-active-record/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/1-active-record/index.ts ***!
  \*********************************************************************/
/*! exports provided: ActiveRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _active_record_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active-record.component */ "./src/modules/@http/tutorial/plugins/1-active-record/active-record.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveRecordComponent", function() { return _active_record_component__WEBPACK_IMPORTED_MODULE_0__["ActiveRecordComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/2-flow-control/flow-control.component.html":
/*!***************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/2-flow-control/flow-control.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<http-resource-wrapper title=\"Active Record\" [run]=\"run\"\n                       [code]=\"code | async | tdmCode:[{title: 'Component', section: 'code'}, {title: 'Template', section: 'code'}]\">\n  <div class=\"http-source-code-snip\">\n    <tdm-code-view [code]=\"(code | async | tdmCode:[{file: 'active-record.component.ts', section: 'code'}])[0]\"></tdm-code-view>\n  </div>\n</http-resource-wrapper>\n\n<!--@tdm-example:code-->\n<h2>Busy State: {{ resourceControl?.busy }}</h2>\n<h2>Success Count: {{ count }}</h2>\n<!--@tdm-example:code-->\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/2-flow-control/flow-control.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/2-flow-control/flow-control.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/2-flow-control/flow-control.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/2-flow-control/flow-control.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FlowControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowControlComponent", function() { return FlowControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _shared_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/client */ "./src/modules/@shared/client/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FlowControlComponent = /** @class */ (function () {
    function FlowControlComponent(ngDao) {
        var _this = this;
        this.ngDao = ngDao;
        this.code = __webpack_require__.e(/*! import() | NgxHttpFlowControlComponentComponent */ "NgxHttpFlowControlComponentComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/plugins/2-flow-control/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        this.count = 0;
        this.run = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var promise;
            return __generator(this, function (_a) {
                promise = ngDao.get(_shared_client__WEBPACK_IMPORTED_MODULE_3__["Customer"]).findById('ALFKI');
                this.resourceControl = _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ResourceControl"].get(promise);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var replay = function () {
                            _this.count++;
                            if (_this.count > 3) {
                                resolve();
                            }
                            else {
                                _this.resourceControl = _this.resourceControl.replay();
                                _this.resourceControl.next().then(replay);
                            }
                        };
                        promise.then(replay);
                    })];
            });
        }); }; /* @tdm-ignore-line */
    }
    /* @tdm-example: code */
    FlowControlComponent.tutorial = {
        id: 'flow-control',
        name: 'Flow Control'
    };
    FlowControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-flow-control',
            template: __webpack_require__(/*! ./flow-control.component.html */ "./src/modules/@http/tutorial/plugins/2-flow-control/flow-control.component.html"),
            styles: [__webpack_require__(/*! ./flow-control.component.scss */ "./src/modules/@http/tutorial/plugins/2-flow-control/flow-control.component.scss")],
        }),
        __metadata("design:paramtypes", [_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_2__["NgDAO"]])
    ], FlowControlComponent);
    return FlowControlComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/2-flow-control/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/2-flow-control/index.ts ***!
  \********************************************************************/
/*! exports provided: FlowControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flow_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flow-control.component */ "./src/modules/@http/tutorial/plugins/2-flow-control/flow-control.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowControlComponent", function() { return _flow_control_component__WEBPACK_IMPORTED_MODULE_0__["FlowControlComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/3-rx-resource-control/index.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/3-rx-resource-control/index.ts ***!
  \***************************************************************************/
/*! exports provided: RxResourceControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rx_resource_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-resource-control.component */ "./src/modules/@http/tutorial/plugins/3-rx-resource-control/rx-resource-control.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RxResourceControlComponent", function() { return _rx_resource_control_component__WEBPACK_IMPORTED_MODULE_0__["RxResourceControlComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/3-rx-resource-control/rx-resource-control.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/3-rx-resource-control/rx-resource-control.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n\n<http-resource-wrapper title=\"Active Record\" [run]=\"run\"\n                       [code]=\"code | async | tdmCode:[{title: 'Component', section: 'code'}, {title: 'Template', section: 'code'}]\">\n  <div class=\"http-source-code-snip\">\n    <tdm-code-view [code]=\"(code | async | tdmCode:[{file: 'active-record.component.ts', section: 'code'}])[0]\"></tdm-code-view>\n  </div>\n</http-resource-wrapper>\n\n<!--@tdm-example:code-->\n<h2>Busy State: {{ resourceControl?.busy$ | async }}</h2>\n<h2>Success Count: {{ count$ | async }}</h2>\n<!--@tdm-example:code-->\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/3-rx-resource-control/rx-resource-control.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/3-rx-resource-control/rx-resource-control.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/3-rx-resource-control/rx-resource-control.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/3-rx-resource-control/rx-resource-control.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RxResourceControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxResourceControlComponent", function() { return RxResourceControlComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/client */ "./src/modules/@shared/client/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var RxResourceControlComponent = /** @class */ (function () {
    function RxResourceControlComponent() {
        var _this = this;
        this.code = __webpack_require__.e(/*! import() | NgxHttpRxResourceControlComponent */ "NgxHttpRxResourceControlComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/plugins/3-rx-resource-control/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        this.count = 0;
        this.run = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.resourceControl) {
                    this.resourceControl = _shared_client__WEBPACK_IMPORTED_MODULE_2__["Customer"].findById('ALFKI').$rc;
                    this.count$ = this.resourceControl.self$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (s) { return ++_this.count; }));
                }
                else {
                    this.resourceControl.parent.$get();
                }
                return [2 /*return*/, this.resourceControl.next()];
            });
        }); }; /* @tdm-ignore-line */
    }
    /* @tdm-example: code */
    RxResourceControlComponent.tutorial = {
        id: 'rx-resource-control',
        name: 'Rx ResourceControl'
    };
    RxResourceControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-http-rx-resource-control',
            template: __webpack_require__(/*! ./rx-resource-control.component.html */ "./src/modules/@http/tutorial/plugins/3-rx-resource-control/rx-resource-control.component.html"),
            styles: [__webpack_require__(/*! ./rx-resource-control.component.scss */ "./src/modules/@http/tutorial/plugins/3-rx-resource-control/rx-resource-control.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], RxResourceControlComponent);
    return RxResourceControlComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/plugins/index.ts":
/*!*****************************************************!*\
  !*** ./src/modules/@http/tutorial/plugins/index.ts ***!
  \*****************************************************/
/*! exports provided: ActiveRecordComponent, FlowControlComponent, RxResourceControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1_active_record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1-active-record */ "./src/modules/@http/tutorial/plugins/1-active-record/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveRecordComponent", function() { return _1_active_record__WEBPACK_IMPORTED_MODULE_0__["ActiveRecordComponent"]; });

/* harmony import */ var _2_flow_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2-flow-control */ "./src/modules/@http/tutorial/plugins/2-flow-control/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowControlComponent", function() { return _2_flow_control__WEBPACK_IMPORTED_MODULE_1__["FlowControlComponent"]; });

/* harmony import */ var _3_rx_resource_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3-rx-resource-control */ "./src/modules/@http/tutorial/plugins/3-rx-resource-control/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RxResourceControlComponent", function() { return _3_rx_resource_control__WEBPACK_IMPORTED_MODULE_2__["RxResourceControlComponent"]; });






/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/1-resource-control/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/1-resource-control/index.ts ***!
  \*********************************************************************************/
/*! exports provided: ResourceControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resource_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-control.component */ "./src/modules/@http/tutorial/resource-control/1-resource-control/resource-control.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceControlComponent", function() { return _resource_control_component__WEBPACK_IMPORTED_MODULE_0__["ResourceControlComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/1-resource-control/resource-control.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/1-resource-control/resource-control.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/1-resource-control/resource-control.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/1-resource-control/resource-control.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/1-resource-control/resource-control.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/1-resource-control/resource-control.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ResourceControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceControlComponent", function() { return ResourceControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResourceControlComponent = /** @class */ (function () {
    function ResourceControlComponent() {
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | NgxHttpResourceControlComponent */ "NgxHttpResourceControlComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/resource-control/1-resource-control/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    ResourceControlComponent.tutorial = {
        id: 'resource-control',
        name: 'Resource Control',
        subHeader: 'Resource Control'
    };
    ResourceControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-resource-control',
            template: __webpack_require__(/*! ./resource-control.component.html */ "./src/modules/@http/tutorial/resource-control/1-resource-control/resource-control.component.html"),
            styles: [__webpack_require__(/*! ./resource-control.component.scss */ "./src/modules/@http/tutorial/resource-control/1-resource-control/resource-control.component.scss")],
        })
    ], ResourceControlComponent);
    return ResourceControlComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/2-events/events.component.html":
/*!************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/2-events/events.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-1'}]:true\"></tdm-markdown-view>\n\n<http-resource-wrapper title=\"Options\" [run]=\"run\">\n  <div class=\"http-source-code-snip\">\n    <tdm-code-view [code]=\"(code | async | tdmCode:[{file: 'events.component.ts', section: 'code'}])[0]\"></tdm-code-view>\n  </div>\n</http-resource-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-2'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/2-events/events.component.scss":
/*!************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/2-events/events.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/2-events/events.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/2-events/events.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _shared_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/client */ "./src/modules/@shared/client/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsComponent = /** @class */ (function () {
    /* @tdm-example: code */
    function EventsComponent(ngDao) {
        this.ngDao = ngDao;
        /* @tdm-example: code */
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | NgxHttpEventsComponent */ "NgxHttpEventsComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/resource-control/2-events/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        this.run = function () {
            var promise = ngDao.get(_shared_client__WEBPACK_IMPORTED_MODULE_3__["Customer"]).findById('ALFKI');
            var rc = _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ResourceControl"].get(promise);
            var unsub = rc.events$
                .subscribe(function (event) {
                if (Object(_tdm_data__WEBPACK_IMPORTED_MODULE_1__["isResourceEvent"])('ActionError', event)) {
                    console.error(event.error);
                    unsub.unsubscribe();
                }
                else {
                    console.log(event.type);
                }
            });
        }; /* @tdm-ignore-line */
    }
    EventsComponent.tutorial = {
        id: 'resource-events',
        name: 'Resource Events'
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/modules/@http/tutorial/resource-control/2-events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.scss */ "./src/modules/@http/tutorial/resource-control/2-events/events.component.scss")],
        }),
        __metadata("design:paramtypes", [_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_2__["NgDAO"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/2-events/index.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/2-events/index.ts ***!
  \***********************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.component */ "./src/modules/@http/tutorial/resource-control/2-events/events.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return _events_component__WEBPACK_IMPORTED_MODULE_0__["EventsComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/3-cancelling/cancelling.component.html":
/*!********************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/3-cancelling/cancelling.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-1'}]:true\"></tdm-markdown-view>\n\n<http-resource-wrapper title=\"Options\" [run]=\"run\">\n  <div class=\"http-source-code-snip\">\n    <tdm-code-view [code]=\"(code | async | tdmCode:[{file: 'cancelling.component.ts', section: 'code'}])[0]\"></tdm-code-view>\n  </div>\n</http-resource-wrapper>\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-2'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/3-cancelling/cancelling.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/3-cancelling/cancelling.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/3-cancelling/cancelling.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/3-cancelling/cancelling.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CancellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellingComponent", function() { return CancellingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _shared_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/client */ "./src/modules/@shared/client/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CancellingComponent = /** @class */ (function () {
    /* @tdm-example: code */
    function CancellingComponent(ngDao) {
        this.ngDao = ngDao;
        /* @tdm-example: code */
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | NgxHttpCancellingComponent */ "NgxHttpCancellingComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/resource-control/3-cancelling/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        this.run = function () {
            var promise = ngDao.get(_shared_client__WEBPACK_IMPORTED_MODULE_3__["Customer"]).findById('ALFKI');
            var rc = _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ResourceControl"].get(promise);
            setTimeout(function () { return rc.cancel(); }, 500);
        }; /* @tdm-ignore-line */
    }
    CancellingComponent.tutorial = {
        id: 'resource-cancelling',
        name: 'Request Cancelling'
    };
    CancellingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-cancelling',
            template: __webpack_require__(/*! ./cancelling.component.html */ "./src/modules/@http/tutorial/resource-control/3-cancelling/cancelling.component.html"),
            styles: [__webpack_require__(/*! ./cancelling.component.scss */ "./src/modules/@http/tutorial/resource-control/3-cancelling/cancelling.component.scss")],
        }),
        __metadata("design:paramtypes", [_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_2__["NgDAO"]])
    ], CancellingComponent);
    return CancellingComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/3-cancelling/index.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/3-cancelling/index.ts ***!
  \***************************************************************************/
/*! exports provided: CancellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cancelling_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancelling.component */ "./src/modules/@http/tutorial/resource-control/3-cancelling/cancelling.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CancellingComponent", function() { return _cancelling_component__WEBPACK_IMPORTED_MODULE_0__["CancellingComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/4-next/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/4-next/index.ts ***!
  \*********************************************************************/
/*! exports provided: NextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./next.component */ "./src/modules/@http/tutorial/resource-control/4-next/next.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NextComponent", function() { return _next_component__WEBPACK_IMPORTED_MODULE_0__["NextComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/4-next/next.component.html":
/*!********************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/4-next/next.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-1'}]:true\"></tdm-markdown-view>\n\n<http-resource-wrapper title=\"Options\"\n                       [run]=\"run\"\n                       [code]=\"code | async | tdmCode:[{title: 'Component', section: 'code'}, {title: 'Template', section: 'code'}]\">\n  <div class=\"http-source-code-snip\">\n    <tdm-code-view [code]=\"(code | async | tdmCode:[{file: 'cancelling.component.ts', section: 'code'}])[0]\"></tdm-code-view>\n  </div>\n</http-resource-wrapper>\n\n<!--@tdm-example:code-->\n<h2>Error message: {{ errorMessage }}</h2>\n<!--@tdm-example:code-->\n\n<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md', section: 'PART-2'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/4-next/next.component.scss":
/*!********************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/4-next/next.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/4-next/next.component.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/4-next/next.component.ts ***!
  \******************************************************************************/
/*! exports provided: NextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextComponent", function() { return NextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _shared_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/client */ "./src/modules/@shared/client/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NextComponent = /** @class */ (function () {
    function NextComponent(ngDao) {
        var _this = this;
        this.ngDao = ngDao;
        /* @tdm-example: code */
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | NgxHttpNextComponent */ "NgxHttpNextComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/resource-control/4-next/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        this.run = function () {
            var promise = ngDao.get(_shared_client__WEBPACK_IMPORTED_MODULE_3__["Customer"]).findById('ALFKI');
            var rc = _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ResourceControl"].get(promise);
            rc.next().then(function (s) {
                rc.next()
                    .catch(function (err) {
                    _this.errorMessage = err.toString();
                });
            });
        }; /* @tdm-ignore-line */
    }
    NextComponent.tutorial = {
        id: 'next',
        name: 'Next()'
    };
    NextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-cancelling',
            template: __webpack_require__(/*! ./next.component.html */ "./src/modules/@http/tutorial/resource-control/4-next/next.component.html"),
            styles: [__webpack_require__(/*! ./next.component.scss */ "./src/modules/@http/tutorial/resource-control/4-next/next.component.scss")],
        }),
        __metadata("design:paramtypes", [_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_2__["NgDAO"]])
    ], NextComponent);
    return NextComponent;
}());



/***/ }),

/***/ "./src/modules/@http/tutorial/resource-control/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/@http/tutorial/resource-control/index.ts ***!
  \**************************************************************/
/*! exports provided: ResourceControlComponent, EventsComponent, CancellingComponent, NextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1_resource_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1-resource-control */ "./src/modules/@http/tutorial/resource-control/1-resource-control/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceControlComponent", function() { return _1_resource_control__WEBPACK_IMPORTED_MODULE_0__["ResourceControlComponent"]; });

/* harmony import */ var _2_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2-events */ "./src/modules/@http/tutorial/resource-control/2-events/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return _2_events__WEBPACK_IMPORTED_MODULE_1__["EventsComponent"]; });

/* harmony import */ var _3_cancelling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3-cancelling */ "./src/modules/@http/tutorial/resource-control/3-cancelling/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CancellingComponent", function() { return _3_cancelling__WEBPACK_IMPORTED_MODULE_2__["CancellingComponent"]; });

/* harmony import */ var _4_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./4-next */ "./src/modules/@http/tutorial/resource-control/4-next/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NextComponent", function() { return _4_next__WEBPACK_IMPORTED_MODULE_3__["NextComponent"]; });







/***/ }),

/***/ "./src/modules/@http/tutorial/todo/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/@http/tutorial/todo/index.ts ***!
  \**************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.component */ "./src/modules/@http/tutorial/todo/todo.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return _todo_component__WEBPACK_IMPORTED_MODULE_0__["TodoComponent"]; });




/***/ }),

/***/ "./src/modules/@http/tutorial/todo/todo.component.html":
/*!*************************************************************!*\
  !*** ./src/modules/@http/tutorial/todo/todo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tdm-markdown-view [markdown]=\"code | async | tdmCode:[{file: 'README.md'}]:true\"></tdm-markdown-view>\n"

/***/ }),

/***/ "./src/modules/@http/tutorial/todo/todo.component.scss":
/*!*************************************************************!*\
  !*** ./src/modules/@http/tutorial/todo/todo.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/@http/tutorial/todo/todo.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/@http/tutorial/todo/todo.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
        /* @tdm-ignore:* */
        this.code = __webpack_require__.e(/*! import() | NgxHttpTodoComponent */ "NgxHttpTodoComponent").then(function() { var module = __webpack_require__(/*! ./__tdm-code__.ts */ "./src/modules/@http/tutorial/todo/__tdm-code__.ts"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }); // tslint:disable-line
        /* @tdm-ignore:* */
    }
    TodoComponent.tutorial = {
        id: 'todo',
        name: 'TODO',
        subHeader: ' '
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-http-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/modules/@http/tutorial/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.scss */ "./src/modules/@http/tutorial/todo/todo.component.scss")],
        })
    ], TodoComponent);
    return TodoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=http.js.map