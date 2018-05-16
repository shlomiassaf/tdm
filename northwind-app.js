(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["northwind-app"],{

/***/ "./src/modules/@northwind-app/components/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/@northwind-app/components/index.ts ***!
  \********************************************************/
/*! exports provided: NorthwindAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nortwind_app_northwind_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nortwind-app/northwind-app.component */ "./src/modules/@northwind-app/components/nortwind-app/northwind-app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NorthwindAppComponent", function() { return _nortwind_app_northwind_app_component__WEBPACK_IMPORTED_MODULE_0__["NorthwindAppComponent"]; });




/***/ }),

/***/ "./src/modules/@northwind-app/components/nortwind-app/northwind-app.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/modules/@northwind-app/components/nortwind-app/northwind-app.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\">\n  <ng-container *ngFor=\"let col of columns\" [matColumnDef]=\"col\">\n    <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{element[col]}}</mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"columns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: columns;\"\n           class=\"element-row\"\n           matRipple\n           [cdkDetailRow]=\"row\" [cdkDetailRowTpl]=\"tpl\"></mat-row>\n\n</mat-table>\n"

/***/ }),

/***/ "./src/modules/@northwind-app/components/nortwind-app/northwind-app.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/modules/@northwind-app/components/nortwind-app/northwind-app.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tdm-app {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 64px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1; }\n\n.tdm-navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n\n.tdm-navbar .title {\n    margin-right: 25px; }\n\nmain {\n  height: 100%;\n  width: 100%; }\n\nmain .main-view {\n    flex: 1;\n    height: 100%;\n    width: 100%; }\n\nmain .main-view router-outlet + * {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      width: 100%; }\n\n.tdm-top-nav-link img {\n  height: 26px;\n  vertical-align: middle;\n  margin: 0 4px 3px 0; }\n\n.tdm-top-nav-link.active {\n  background: rgba(0, 0, 0, 0.1); }\n"

/***/ }),

/***/ "./src/modules/@northwind-app/components/nortwind-app/northwind-app.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/modules/@northwind-app/components/nortwind-app/northwind-app.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NorthwindAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NorthwindAppComponent", function() { return NorthwindAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/client */ "./src/modules/@shared/client/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var listTypeMap = {
    customers: {
        query: function () {
            return _shared_client__WEBPACK_IMPORTED_MODULE_1__["Customer"].query();
        },
        columns: [
            'CustomerID',
            'ContactName',
            'ContactTitle',
            'Country'
        ]
    },
    employees: {
        query: function () {
            return _shared_client__WEBPACK_IMPORTED_MODULE_1__["Employee"].query();
        },
        columns: [
            'EmployeeID',
            'FirstName',
            'LastName',
            'Title'
        ]
    },
    orders: {
        query: function () {
            return _shared_client__WEBPACK_IMPORTED_MODULE_1__["Order"].query();
        },
        columns: [
            'OrderID',
            'OrderDate'
        ]
    }
};
var NorthwindAppComponent = /** @class */ (function () {
    function NorthwindAppComponent(activeRoute, router) {
        var _this = this;
        this.activeRoute = activeRoute;
        this.router = router;
        this.dataSource = new _shared__WEBPACK_IMPORTED_MODULE_2__["DataSourceContainer"]([]);
        this._subs = activeRoute.paramMap
            .subscribe(function (params) { return _this.onListTypeChange(params.get('listType')); });
    }
    NorthwindAppComponent.prototype.onListTypeChange = function (listType) {
        if (!listType) {
            this.router.navigate(['./orders'], {
                relativeTo: this.activeRoute,
                replaceUrl: true
            });
            return;
        }
        if (this.listType === listType) {
            return;
        }
        switch (listType) {
            case 'customers':
            case 'employees':
            case 'orders':
                this.listType = listType;
                this.collection = listTypeMap[listType].query();
                this.columns = listTypeMap[listType].columns;
                this.dataSource.updateSource(this.collection.$rc.self$);
                break;
            default:
                this.router.navigate(['/page-404']);
                break;
        }
    };
    NorthwindAppComponent.prototype.ngOnDestroy = function () {
        this._subs.unsubscribe();
    };
    NorthwindAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'northwind-app',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./northwind-app.component.html */ "./src/modules/@northwind-app/components/nortwind-app/northwind-app.component.html"),
            styles: [__webpack_require__(/*! ./northwind-app.component.scss */ "./src/modules/@northwind-app/components/nortwind-app/northwind-app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NorthwindAppComponent);
    return NorthwindAppComponent;
}());



/***/ }),

/***/ "./src/modules/@northwind-app/module.ts":
/*!**********************************************!*\
  !*** ./src/modules/@northwind-app/module.ts ***!
  \**********************************************/
/*! exports provided: NorthwindAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NorthwindAppModule", function() { return NorthwindAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/modules/@northwind-app/components/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./src/modules/@northwind-app/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NorthwindAppModule = /** @class */ (function () {
    function NorthwindAppModule(topNavService) {
        topNavService.addNavItem({
            title: 'Orders',
            domain: 'northwind',
            routerLink: {
                routerLink: ['./northwind-app/orders']
            }
        });
        topNavService.addNavItem({
            title: 'Customers',
            domain: 'northwind',
            routerLink: {
                routerLink: ['./northwind-app/customers']
            }
        });
        topNavService.addNavItem({
            title: 'Employees',
            domain: 'northwind',
            routerLink: {
                routerLink: ['./northwind-app/employees']
            }
        });
    }
    NorthwindAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components__WEBPACK_IMPORTED_MODULE_3__["NorthwindAppComponent"], _routes__WEBPACK_IMPORTED_MODULE_4__["NorthwindAppDomainComponent"]],
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"])
            ]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_2__["TopNavService"]])
    ], NorthwindAppModule);
    return NorthwindAppModule;
}());



/***/ }),

/***/ "./src/modules/@northwind-app/routes.ts":
/*!**********************************************!*\
  !*** ./src/modules/@northwind-app/routes.ts ***!
  \**********************************************/
/*! exports provided: NorthwindAppDomainComponent, ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NorthwindAppDomainComponent", function() { return NorthwindAppDomainComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/modules/@northwind-app/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NorthwindAppDomainComponent = /** @class */ (function () {
    function NorthwindAppDomainComponent(topNavService) {
        this.topNavService = topNavService;
        topNavService.pushDomain('northwind');
    }
    NorthwindAppDomainComponent.prototype.ngOnDestroy = function () {
        this.topNavService.popDomain();
    };
    NorthwindAppDomainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'northwind-app-domain',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["TopNavService"]])
    ], NorthwindAppDomainComponent);
    return NorthwindAppDomainComponent;
}());

var ROUTES = [
    {
        path: '',
        component: NorthwindAppDomainComponent,
        children: [
            { path: '', pathMatch: 'full', component: _components__WEBPACK_IMPORTED_MODULE_2__["NorthwindAppComponent"] },
            { path: ':listType', component: _components__WEBPACK_IMPORTED_MODULE_2__["NorthwindAppComponent"] }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=northwind-app.js.map