(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["http~northwind-app"],{

/***/ "../../libs/service-mocker/client/src/index.ts":
/*!**************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/client/src/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: ClientBase, Client, OnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ "../../libs/service-mocker/client/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientBase", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["ClientBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["Client"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnMessage", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["OnMessage"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/service-mocker/client/src/lib/client-base.ts":
/*!************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/client/src/lib/client-base.ts ***!
  \************************************************************************************************************/
/*! exports provided: ClientBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientBase", function() { return ClientBase; });
var ClientBase = /** @class */ (function () {
    function ClientBase() {
    }
    Object.defineProperty(ClientBase.prototype, "ready", {
        get: function () {
            return this._smClient.ready;
        },
        enumerable: true,
        configurable: true
    });
    ClientBase.prototype.dispose = function () {
        this._smClient.dispose();
    };
    ClientBase.prototype.send = function (action, data, timeout) {
        return this._smClient.sendAction(action, data, timeout);
    };
    return ClientBase;
}());



/***/ }),

/***/ "../../libs/service-mocker/client/src/lib/client.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/client/src/lib/client.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ServiceMockerClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockerClient", function() { return ServiceMockerClient; });
/* harmony import */ var service_mocker_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! service-mocker/client */ "../../node_modules/service-mocker/client/index.js");
/* harmony import */ var service_mocker_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(service_mocker_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tdm_service_mocker_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/service-mocker/shared */ "../../libs/service-mocker/shared/src/index.ts");


var ServiceMockerClient = /** @class */ (function () {
    function ServiceMockerClient(mockClient, messageHandler) {
        var _this = this;
        this.mockClient = mockClient;
        this.messageHandler = messageHandler;
        this.messageEventListener = function (event) { return _this.onMessage(event); };
        this.ready = this.mockClient.ready.then(function (registration) {
            _this.controller = registration.active;
            _this.controller.addEventListener('message', _this.messageEventListener);
        });
    }
    ServiceMockerClient.prototype.onMessage = function (event) {
        var data = event.data, ports = event.ports;
        if (!data || !ports || !ports.length) {
            return;
        }
        var port = ports[0];
        if (this.messageHandler.canHandle(data.action)) {
            this.messageHandler.handle(data.action, data.data)
                .then(function (response) { return port.postMessage(response); })
                .catch(function (err) { return port.postMessage(Object(_tdm_service_mocker_shared__WEBPACK_IMPORTED_MODULE_1__["postError"])(err)); });
        }
    };
    ServiceMockerClient.prototype.sendAction = function (action, data, timeout) {
        var message = { action: action, data: data };
        return Object(_tdm_service_mocker_shared__WEBPACK_IMPORTED_MODULE_1__["sendMessageRequest"])(this.controller, message, timeout);
    };
    ServiceMockerClient.prototype.dispose = function () {
        this.controller.removeEventListener('message', this.messageEventListener);
    };
    ServiceMockerClient.create = function (messageHandler, scriptURL) {
        if (scriptURL === void 0) { scriptURL = './sw.js'; }
        var mockClient = Object(service_mocker_client__WEBPACK_IMPORTED_MODULE_0__["createClient"])(scriptURL);
        var client = new ServiceMockerClient(mockClient, messageHandler);
        return client;
    };
    return ServiceMockerClient;
}());



/***/ }),

/***/ "../../libs/service-mocker/client/src/lib/decorator/client.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/client/src/lib/decorator/client.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client */ "../../libs/service-mocker/client/src/lib/client.ts");
/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-base */ "../../libs/service-mocker/client/src/lib/client-base.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metadata */ "../../libs/service-mocker/client/src/lib/metadata/index.ts");
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




var client = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_3__["ClientMetadata"], true, 'class');
var ContextMessageHandler = /** @class */ (function () {
    function ContextMessageHandler(instance, handlersMap) {
        this.instance = instance;
        this.handlersMap = handlersMap;
    }
    ContextMessageHandler.prototype.canHandle = function (name) {
        return this.handlersMap.has(name);
    };
    ContextMessageHandler.prototype.handle = function (action, data) {
        var methodName = this.handlersMap.get(action);
        return this.instance[methodName](data);
    };
    return ContextMessageHandler;
}());
function isExtendingClientBase(target) {
    while (target) {
        if (target === _client_base__WEBPACK_IMPORTED_MODULE_2__["ClientBase"]) {
            return true;
        }
        target = Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["getBaseClass"])(target);
    }
    return false;
}
function Client(metaArgs) {
    return function (target) {
        if (!isExtendingClientBase(target)) {
            throw new Error("Class " + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(target) + " decorated with \"@Client()\" must extend \"ClientBase\"");
        }
        var WrappedClientMockerServer = /** @class */ (function (_super) {
            __extends(WrappedClientMockerServer, _super);
            function WrappedClientMockerServer() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                var clientMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getMetaFor(target, _metadata__WEBPACK_IMPORTED_MODULE_3__["ClientMetadata"], true);
                var serviceMockerClient = _client__WEBPACK_IMPORTED_MODULE_1__["ServiceMockerClient"]
                    .create(new ContextMessageHandler(_this, clientMeta.messageHandlers), clientMeta.scriptURL);
                Object.defineProperty(_this, '_smClient', { value: serviceMockerClient });
                if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(_this.init)) {
                    _this.init();
                }
                return _this;
            }
            return WrappedClientMockerServer;
        }(target));
        _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].registerTarget(WrappedClientMockerServer);
        _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].extend(target, WrappedClientMockerServer);
        target = client(metaArgs)(WrappedClientMockerServer) || WrappedClientMockerServer;
        return target;
    };
}


/***/ }),

/***/ "../../libs/service-mocker/client/src/lib/decorator/index.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/client/src/lib/decorator/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: Client, OnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "../../libs/service-mocker/client/src/lib/decorator/client.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return _client__WEBPACK_IMPORTED_MODULE_0__["Client"]; });

/* harmony import */ var _on_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on-message */ "../../libs/service-mocker/client/src/lib/decorator/on-message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnMessage", function() { return _on_message__WEBPACK_IMPORTED_MODULE_1__["OnMessage"]; });





/***/ }),

/***/ "../../libs/service-mocker/client/src/lib/decorator/on-message.ts":
/*!*********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/client/src/lib/decorator/on-message.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: OnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnMessage", function() { return OnMessage; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/service-mocker/client/src/lib/metadata/index.ts");


var onMessage = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_1__["OnMessageMetadata"], 'method');
function OnMessage(metaArgs) {
    if (!metaArgs) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return onMessage(args[1])(args[0], args[1], args[2]);
        };
    }
    else {
        return onMessage(metaArgs);
    }
}


/***/ }),

/***/ "../../libs/service-mocker/client/src/lib/index.ts":
/*!******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/client/src/lib/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: ClientBase, Client, OnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorator */ "../../libs/service-mocker/client/src/lib/decorator/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return _decorator__WEBPACK_IMPORTED_MODULE_0__["Client"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnMessage", function() { return _decorator__WEBPACK_IMPORTED_MODULE_0__["OnMessage"]; });

/* harmony import */ var _client_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-base */ "../../libs/service-mocker/client/src/lib/client-base.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientBase", function() { return _client_base__WEBPACK_IMPORTED_MODULE_1__["ClientBase"]; });

/// <reference path="../../../shared/src/lib/service-worker" />




/***/ }),

/***/ "../../libs/service-mocker/client/src/lib/metadata/client.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/client/src/lib/metadata/client.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ClientMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientMetadata", function() { return ClientMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _on_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on-message */ "../../libs/service-mocker/client/src/lib/metadata/on-message.ts");
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


var ClientMetadata = /** @class */ (function (_super) {
    __extends(ClientMetadata, _super);
    function ClientMetadata(metaArgs, info, target) {
        var _this = _super.call(this, info) || this;
        _this.messageHandlers = new Map();
        if (metaArgs && metaArgs.scriptURL) {
            _this.scriptURL = metaArgs.scriptURL;
        }
        var clientMessage = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getMetaFor(target, _on_message__WEBPACK_IMPORTED_MODULE_1__["OnMessageMetadata"]);
        if (clientMessage) {
            for (var _i = 0, _a = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MapExt"].asKeyValArray(clientMessage); _i < _a.length; _i++) {
                var _b = _a[_i], k = _b[0], v = _b[1];
                _this.messageHandlers.set(v.eventName, k);
            }
        }
        return _this;
    }
    ClientMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            single: true,
            inherit: _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["ModelMetadata"],
            allowOn: ['class']
        }),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], ClientMetadata);
    return ClientMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/service-mocker/client/src/lib/metadata/index.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/client/src/lib/metadata/index.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ClientMetadata, OnMessageMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "../../libs/service-mocker/client/src/lib/metadata/client.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientMetadata", function() { return _client__WEBPACK_IMPORTED_MODULE_0__["ClientMetadata"]; });

/* harmony import */ var _on_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on-message */ "../../libs/service-mocker/client/src/lib/metadata/on-message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnMessageMetadata", function() { return _on_message__WEBPACK_IMPORTED_MODULE_1__["OnMessageMetadata"]; });





/***/ }),

/***/ "../../libs/service-mocker/client/src/lib/metadata/on-message.ts":
/*!********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/client/src/lib/metadata/on-message.ts ***!
  \********************************************************************************************************************/
/*! exports provided: OnMessageMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnMessageMetadata", function() { return OnMessageMetadata; });
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

var OnMessageMetadata = /** @class */ (function (_super) {
    __extends(OnMessageMetadata, _super);
    function OnMessageMetadata(eventName, info) {
        var _this = _super.call(this, info) || this;
        _this.eventName = eventName;
        return _this;
    }
    OnMessageMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['member'],
            extend: 'mergeMap'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], OnMessageMetadata);
    return OnMessageMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/service-mocker/shared/src/index.ts":
/*!**************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/shared/src/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: ServiceWorkerMessageError, postError, sendMessageRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ "../../libs/service-mocker/shared/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerMessageError", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["ServiceWorkerMessageError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postError", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["postError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendMessageRequest", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["sendMessageRequest"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/service-mocker/shared/src/lib/index.ts":
/*!******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/shared/src/lib/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: ServiceWorkerMessageError, postError, sendMessageRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messaging */ "../../libs/service-mocker/shared/src/lib/messaging.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerMessageError", function() { return _messaging__WEBPACK_IMPORTED_MODULE_0__["ServiceWorkerMessageError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postError", function() { return _messaging__WEBPACK_IMPORTED_MODULE_0__["postError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendMessageRequest", function() { return _messaging__WEBPACK_IMPORTED_MODULE_0__["sendMessageRequest"]; });

/// <reference path="./service-worker" />



/***/ }),

/***/ "../../libs/service-mocker/shared/src/lib/messaging.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/shared/src/lib/messaging.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ServiceWorkerMessageError, postError, sendMessageRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerMessageError", function() { return ServiceWorkerMessageError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postError", function() { return postError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageRequest", function() { return sendMessageRequest; });
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
var ServiceWorkerMessageError = /** @class */ (function (_super) {
    __extends(ServiceWorkerMessageError, _super);
    function ServiceWorkerMessageError() {
        var _this = _super.call(this) || this;
        _this.name = 'ServiceWorkerMessageError';
        return _this;
    }
    ServiceWorkerMessageError.create = function (request, message, remoteError) {
        // tslint:disable-next-line:no-use-before-declare
        var err = new ServiceWorkerMessageError();
        Object.setPrototypeOf(err, ServiceWorkerMessageError.prototype);
        err.request = request;
        if (remoteError) {
            err.remoteError = remoteError;
            err.message = err.name + ": " + message + "\n" + remoteError.name + ": " + remoteError.message;
            if (remoteError.stack) {
                err.stack = remoteError.stack;
            }
        }
        else {
            err.message = message;
        }
        return err;
    };
    return ServiceWorkerMessageError;
}(Error));

function postError(error, withStack) {
    if (withStack === void 0) { withStack = true; }
    var e = {
        error: {
            name: error.name,
            message: error.message
        }
    };
    if (withStack) {
        e.error.stack = error.stack;
    }
    return e;
}
function sendMessageRequest(target, message, timeout) {
    if (timeout === void 0) { timeout = 3 * 1e3; }
    var _a = new MessageChannel(), port1 = _a.port1, port2 = _a.port2;
    return new Promise(function (resolve, reject) {
        var timer = isFinite(timeout) && setTimeout(function () {
            reject(ServiceWorkerMessageError.create(message.data, "Service worker message timeout."));
        }, timeout);
        port1.onmessage = function (_a) {
            var data = _a.data;
            if (timer) {
                clearTimeout(timer);
            }
            // avoid high transient memory usage, see
            // https://html.spec.whatwg.org/multipage/comms.html#ports-and-garbage-collection
            port1.close();
            port2.close();
            if (data && data.error) {
                reject(ServiceWorkerMessageError.create(message, "Service worker remote error.", data.error));
            }
            else {
                resolve({ data: data, request: message.data });
            }
        };
        if (target === self.window) {
            // posting message to self => legacy mode
            // add `origin` param to `window.postMessage(message, targetOrigin, [transfer])`
            target.postMessage(message, '*', [port2]);
        }
        else {
            target.postMessage(message, [port2]);
        }
    });
}


/***/ }),

/***/ "../../node_modules/babel-runtime/regenerator/index.js":
/*!**********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/babel-runtime/regenerator/index.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime-module.js":
/*!*************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/regenerator-runtime/runtime-module.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "../../node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "../../node_modules/service-mocker/client/index.js":
/*!******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/client/index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createClient = createClient;

var _client = __webpack_require__(/*! ./modern/client */ "../../node_modules/service-mocker/client/modern/client.js");

var _client2 = __webpack_require__(/*! ./legacy/client */ "../../node_modules/service-mocker/client/legacy/client.js");

/**
 * Constructs a new Client instance with the given scriptURL
 *
 * @param  {string} scriptURL The location of your server script
 * @param  {Object} options   Initial options
 * @return {MockerClient}
 */
function createClient(scriptURL) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (options.forceLegacy) {
    return new _client2.LegacyClient(scriptURL);
  }

  var useLegacy = isLegacyMode();

  /* istanbul ignore if */
  if (useLegacy) {
    console.warn('Switching to legacy mode...');
    return new _client2.LegacyClient(scriptURL);
  }

  return new _client.ModernClient(scriptURL);
}

/* istanbul ignore next */
function isLegacyMode() {
  if (!('serviceWorker' in navigator)) {
    // tslint:disable-next-line max-line-length
    console.warn('Service worker is not supported in your browser, please check: http://caniuse.com/#feat=serviceworkers');

    return true;
  }

  if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
    // tslint:disable-next-line max-line-length
    console.warn('Service workers should be registered in secure pages, further information: https://github.com/w3c/ServiceWorker/blob/master/explainer.md#getting-started');

    return true;
  }

  return false;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/client/legacy/client.js":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/client/legacy/client.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.LegacyClient = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _utils = __webpack_require__(/*! ../../utils/ */ "../../node_modules/service-mocker/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants/ */ "../../node_modules/service-mocker/constants/index.js");

var _patchXhr = __webpack_require__(/*! ./patch-xhr */ "../../node_modules/service-mocker/client/legacy/patch-xhr.js");

var _patchFetch = __webpack_require__(/*! ./patch-fetch */ "../../node_modules/service-mocker/client/legacy/patch-fetch.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clientLog = _utils.debug.scope('legacy');
var registrations = {};

var LegacyClient = exports.LegacyClient = function () {

  /**
   * Points to currently activated ServiceWorker object.
   * Stays null when running in legacy mode.
   *
   * @readonly
   * @type {null}
   */

  /**
   * Indicates which mode current client is running on.
   *
   * @readonly
   * @type {boolean}
   */
  function LegacyClient(scriptURL) {
    var _this = this;

    _classCallCheck(this, LegacyClient);

    this.isLegacy = true;
    this.ready = null;
    this.controller = null;
    this._registration = null;

    (0, _patchXhr.patchXHR)();
    (0, _patchFetch.patchFetch)();

    var promise = null;

    // avoid duplications
    if (registrations[scriptURL]) {
      promise = registrations[scriptURL];
    } else {
      registrations[scriptURL] = promise = new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = scriptURL;
        script.onload = resolve;
        script.onerror = reject;

        document.body.appendChild(script);
      });
    }

    /* istanbul ignore next */
    this.ready = promise.then(function () {
      return (0, _utils.sendMessageRequest)(window, {
        action: _constants.ACTION.PING
      });
    }).then(function () {
      clientLog.info('connection established');
      return _this._registration;
    }).catch(function (error) {
      // `ready` should never be rejected
      clientLog.error('bootstrap failed', error);
    });
  }

  /**
   * Update registration, this method has no effect in legacy mode
   *
   * @return {Promise<null>}
   */


  /**
   * Defines whether a client has connected to mocker server.
   * Resolves with `null` as there're actually no registrations
   *
   * @readonly
   * @type {Promise<null>}
   */


  LegacyClient.prototype.update = function () {
    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', Promise.resolve(this._registration));

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function update() {
      return _ref.apply(this, arguments);
    }

    return update;
  }();

  /**
   * Get current registration, resolved with `null` in legacy mode
   *
   * @return {Promise<null>}
   */


  LegacyClient.prototype.getRegistration = function () {
    var _ref2 = _asyncToGenerator(_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', Promise.resolve(this._registration));

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getRegistration() {
      return _ref2.apply(this, arguments);
    }

    return getRegistration;
  }();

  /* istanbul ignore next */
  /**
   * Unregister mocker, this method has no effect in legacy mode
   *
   * @return {Promise<false>}
   */


  LegacyClient.prototype.unregister = function () {
    var _ref3 = _asyncToGenerator(_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _utils.debug.scope('legacy').warn('mocker in legacy mode can\'t be unregistered');

              return _context3.abrupt('return', false);

            case 2:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function unregister() {
      return _ref3.apply(this, arguments);
    }

    return unregister;
  }();

  return LegacyClient;
}();
//# sourceMappingURL=client.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/client/legacy/create-event.js":
/*!********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/client/legacy/create-event.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Create custom event
 *
 * @param  {string} name event name
 * @return {Event}
 */
/* istanbul ignore next */
function createEvent(name) {
  try {
    return new Event(name);
  } catch (e) {
    var event = document.createEvent('Event');
    event.initEvent(name, false, false);
    return event;
  }
}

// Don't use `export function createEvent() {}`
// because `istanbul ignore next` has issue with ES6 exports
// <https://github.com/gotwarlost/istanbul/issues/762>
exports.createEvent = createEvent;
//# sourceMappingURL=create-event.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/client/legacy/dispatch-fetch-event.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/client/legacy/dispatch-fetch-event.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.dispatchFetchEvent = dispatchFetchEvent;

var _utils = __webpack_require__(/*! ../../utils/ */ "../../node_modules/service-mocker/utils/index.js");

var _createEvent = __webpack_require__(/*! ./create-event */ "../../node_modules/service-mocker/client/legacy/create-event.js");

var fetchEvents = [];
var addEventListener = self.addEventListener.bind(self);

// handle fetch events ourselves
self.addEventListener = function (type, listener, useCapture) {
  if (type === 'fetch') {
    fetchEvents.push(listener);
  } else {
    addEventListener(type, listener, useCapture);
  }
};

/**
 * Dispatch fetch event on GlobalScope in legacy mode.
 * Resolved with `null` if `event.respondWith` isn't called.
 *
 * @param  {Request} request Request object
 * @return {Promise<Response>}
 */
function dispatchFetchEvent(request) {
  var fetchEvt = (0, _createEvent.createEvent)('fetch');
  var deferred = new _utils.Defer();

  fetchEvt.request = request;

  fetchEvt.respondWith = function (response) {
    if (deferred.done) {
      // tslint:disable-next-line max-line-length
      throw new Error('Failed to execute \'respondWith\' on \'FetchEvent\': The fetch event has already been responded to.');
    }

    deferred.resolve(response);
  };

  fetchEvents.forEach(function (listener) {
    listener(fetchEvt);
  });

  // `event.respondWith` wasn't called
  if (!deferred.done) {
    deferred.resolve(null);
  }

  return deferred.promise;
}
//# sourceMappingURL=dispatch-fetch-event.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/client/legacy/patch-fetch.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/client/legacy/patch-fetch.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.patchFetch = patchFetch;

var _dispatchFetchEvent = __webpack_require__(/*! ./dispatch-fetch-event */ "../../node_modules/service-mocker/client/legacy/dispatch-fetch-event.js");

function patchFetch() {
  /* istanbul ignore if */
  if (!self.fetch) {
    throw new Error('fetch is required for legacy mode');
  }

  // don't patch polyfills
  if (!isNativeFetch()) {
    return;
  }

  // fetch should be called within Window context
  var nativeFetch = self.fetch.bind(self);

  function patchedFetch(input, init) {
    var request = new Request(input, init);

    return (0, _dispatchFetchEvent.dispatchFetchEvent)(request).then(function (response) {
      if (response) {
        // `event.respondWith` called
        // resolve with mock response
        return response;
      } else {
        // fetch real response
        return nativeFetch(request);
      }
    });
  }

  // marked with `mockerPatched` symbol
  patchedFetch.mockerPatched = true;
  // keep a native reference
  patchedFetch.native = nativeFetch;

  self.fetch = patchedFetch;
}

/**
 * Check `self.fetch` is (possible) a native one or a polyfill
 *
 * @return {boolean}
 */
/**
 * Patch native `fetch` interface
 *
 * Notes:
 * - Why we should patch native `fetch`:
 *   Although all the environments that support service worker will support fetch too,
 *   but there are still possiblities that cause mocker runs in legacy mode,
 *   for example, user starts a remote access with `http://192.168.1.129:3000`,
 *   mocker will bootstrap in legacy mode because service worker can only be regiestered
 *   in secure pages.
 *   In case of this situation, we should patch up native fetch with a custom fetch event.
 *
 * - Don't patch fetch polyfills that are implementing with `XMLHttpRequest`:
 *   Since we've patched up native `XMLHttpRequest`,
 *   patching a fetch polyfill may cause an infinite loop:
 *   [unhandled -> fetch -> xhr -> router(unhandled) -> fetch]
 *
 * - Native fetch should always be called within Window context.
 *
 * - If custom fetch event resolved with `null`, re-fetch with native fetch.
 */

function isNativeFetch() {
  var fetch = self.fetch;

  /* eslint-disable no-multi-spaces */
  return !fetch.mockerPatched && // haven't been patched
  !fetch.polyfill && // github fetch polyfill
  fetch.toString === Function.prototype.toString && // sometimes `toString` method is overrided to pretend it's native XD
  /\[native code\]/.test(fetch.toString()); // fetch is overrided
  /* eslint-enable no-multi-spaces */
}
//# sourceMappingURL=patch-fetch.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/client/legacy/patch-xhr.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/client/legacy/patch-xhr.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

/**
 * Parse response with the specified `responseType`,
 * return `null` if any error occurs, see:
 * https://xhr.spec.whatwg.org/#the-response-attribute
 *
 * @async
 * @param  {Response}     response     Response object
 * @param  {string}       responseType XHR responseType
 * @return {Promise<any>}
 */
var parseResponse = function () {
  var _ref2 = _asyncToGenerator(_regenerator2.default.mark(function _callee2(response, responseType) {
    var res, text, parser;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            res = response.clone();
            _context2.t0 = responseType;
            _context2.next = _context2.t0 === '' ? 5 : _context2.t0 === 'text' ? 5 : _context2.t0 === 'json' ? 8 : _context2.t0 === 'blob' ? 11 : _context2.t0 === 'arraybuffer' ? 14 : _context2.t0 === 'document' ? 17 : 22;
            break;

          case 5:
            _context2.next = 7;
            return res.text();

          case 7:
            return _context2.abrupt('return', _context2.sent);

          case 8:
            _context2.next = 10;
            return res.json();

          case 10:
            return _context2.abrupt('return', _context2.sent);

          case 11:
            _context2.next = 13;
            return res.blob();

          case 13:
            return _context2.abrupt('return', _context2.sent);

          case 14:
            _context2.next = 16;
            return res.arrayBuffer();

          case 16:
            return _context2.abrupt('return', _context2.sent);

          case 17:
            _context2.next = 19;
            return res.text();

          case 19:
            text = _context2.sent;
            parser = new DOMParser();
            return _context2.abrupt('return', parser.parseFromString(text, getDocumentMIME(res)));

          case 22:
            _context2.next = 26;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t1 = _context2['catch'](0);

          case 26:
            return _context2.abrupt('return', null);

          case 27:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 24]]);
  }));

  return function parseResponse(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Get MIME from 'content-type' header
 * @param  {Response} res Response object
 * @return {string}
 */


exports.patchXHR = patchXHR;

var _createEvent = __webpack_require__(/*! ./create-event */ "../../node_modules/service-mocker/client/legacy/create-event.js");

var _dispatchFetchEvent = __webpack_require__(/*! ./dispatch-fetch-event */ "../../node_modules/service-mocker/client/legacy/dispatch-fetch-event.js");

var _utils = __webpack_require__(/*! ../../utils/ */ "../../node_modules/service-mocker/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Patch native `XMLHttpRequest`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Notes:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - When and how to dispatch fetch event:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   1. A XMLHttpRequest won't be sent until we call `xhr.send()`, so we should dispatch a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   fetch event when `xhr.send()` is invoked,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   2. By overriding `xhr.open()` method, we can get `request_method` and `request_url`,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   3. By overriding `xhr.setRequestHeader()`, we can get `request_headers`,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   4. Create a request instance with `request_method`, `request_url`, `request_headers`,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      and other options got from `this[xhrProp]` like `this.withCredentials` (will be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      delegated to `this.nativeXHR[xhrProp]`).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   5. Dispatch fetch event with the request.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   6. If fetch event responds with a `Response`, parse it and dispatch `readystatechange`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      event and progress events via `this.dispatchEvent()` (will be delegated to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      `this.nativeXHR.dispatchEvent()`).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   7. Or, re-send native requeust via `this.nativeXHR.send()`.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - About events handling:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   1. Since we delegate all `XMLHttpRequest.prototype` methods to `this.nativeXHR`, there's
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   no need to create an event emitter, simply calling `this.dispatchEvent()` and all
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   registered listeners will be invoked, including those are set by `instance#on[event]`.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   2. Meanwhile, all the event handlers you registered on `ExtandableXHR` instance will actually be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   registered on `this.nativeXHR`. So even if we re-send the native request, all the handlers will
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   be called properly.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

function patchXHR() {
  if (XMLHttpRequest.mockerPatched) {
    return;
  }

  self.XMLHttpRequest = MockerXHR;
}

// only `readystatechange` event and progress events are need to be dispatched
var EVENTS_LIST = ['readystatechange', 'loadstart', 'progress', 'load', 'loadend'];

var ExtandableXHR = (0, _utils.extensify)(XMLHttpRequest);

var MockerXHR = function (_ExtandableXHR) {
  _inherits(MockerXHR, _ExtandableXHR);

  function MockerXHR() {
    var _temp, _this, _ret;

    _classCallCheck(this, MockerXHR);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _ExtandableXHR.call.apply(_ExtandableXHR, [this].concat(args))), _this), _this._requestHeaders = new Headers(), _this._responseHeaders = null, _this._responseMIME = undefined, _this._method = undefined, _this._url = undefined, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // marked with `mockerPatched` symbol


  // keep a native reference


  // record request headers via `setRequestHeader` method


  // save response headers for `getResponseHeader(s)` methods


  // override response 'Content-Type' header via `overrideMimeType` method


  // save request method and url via `open` method


  MockerXHR.prototype.setRequestHeader = function setRequestHeader(header, value) {
    _ExtandableXHR.prototype.setRequestHeader.call(this, header, value);
    this._requestHeaders.append(header, value);
  };

  MockerXHR.prototype.getResponseHeader = function getResponseHeader(header) {
    if (!this._responseHeaders) {
      return _ExtandableXHR.prototype.getResponseHeader.call(this, header);
    }

    return this._responseHeaders.get(header);
  };

  MockerXHR.prototype.getAllResponseHeaders = function getAllResponseHeaders() {
    if (!this._responseHeaders) {
      return _ExtandableXHR.prototype.getAllResponseHeaders.call(this);
    }

    var results = [];

    // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-getallresponseheaders
    var seperator = String.fromCharCode(0x3A) + String.fromCharCode(0x20);
    var linebreaker = String.fromCharCode(0x0D) + String.fromCharCode(0x0A);

    this._responseHeaders.forEach(function (value, name) {
      results.push([name, value].join(seperator));
    });

    return results.join(linebreaker);
  };

  MockerXHR.prototype.overrideMimeType = function overrideMimeType(mime) {
    /* istanbul ignore if */
    if (!_ExtandableXHR.prototype.overrideMimeType) {
      return;
    }

    _ExtandableXHR.prototype.overrideMimeType.call(this, mime);
    this._responseMIME = mime;
  };

  MockerXHR.prototype.open = function open(method, url) {
    var _ExtandableXHR$protot;

    for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      rest[_key2 - 2] = arguments[_key2];
    }

    (_ExtandableXHR$protot = _ExtandableXHR.prototype.open).call.apply(_ExtandableXHR$protot, [this, method, url].concat(rest));
    this._method = method;
    this._url = url;
  };

  MockerXHR.prototype.send = function send(data) {
    var _this2 = this;

    if (this.readyState !== this.OPENED) {
      throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');
    }

    this._mockFetch(data).then(function (result) {
      if (result) {
        // `event.respondWith` called
        // resolve with mock response
        _this2._processResponse(result);
      } else {
        // send real XMLHttpRequest
        _ExtandableXHR.prototype.send.call(_this2, data);
      }
    });
  };

  /**
   * Mock fetch
   * @private
   * @param  {any}               data request body
   * @return {Promise<Response>}
   */


  MockerXHR.prototype._mockFetch = function _mockFetch(data) {
    // GET|HEAD requests cannot include body
    // set body to `null` will raise a TypeMismatchError in IE Edge
    var body = this._method === 'GET' || this._method === 'HEAD' ? undefined : data;

    var credentials = this.withCredentials ? 'include' : 'omit';

    var request = new Request(this._url, {
      body: body,
      credentials: credentials,
      method: this._method,
      headers: this._requestHeaders
    });

    return (0, _dispatchFetchEvent.dispatchFetchEvent)(request);
  };

  /**
   * Process response object
   *
   * @private
   * @param  {Response}      response Response object
   */


  MockerXHR.prototype._processResponse = function () {
    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(response) {
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this._responseMIME) {
                // apply `overrideMimeType`
                response.headers.set('content-type', this._responseMIME);
              }

              _context.next = 3;
              return parseResponse(response, this.responseType);

            case 3:
              result = _context.sent;


              this._responseHeaders = response.headers;

              // pretend this request is DONE
              this._setProperty('readyState', this.DONE);
              this._setProperty('responseURL', response.url);
              this._setProperty('status', response.status);
              this._setProperty('statusText', response.statusText);
              this._setProperty('response', result);

              if (!this.responseType || this.responseType === 'text') {
                this._setProperty('responseText', result);
              }

              if (this.responseType === 'document') {
                this._setProperty('responseXML', result);
              }

              this._dispatchEvents();

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _processResponse(_x) {
      return _ref.apply(this, arguments);
    }

    return _processResponse;
  }();

  /**
   * Assign property to self
   * @private
   * @param {string} name  property name
   * @param {any}    value property value
   */


  MockerXHR.prototype._setProperty = function _setProperty(name, value) {
    // in IE & Safari, these property are internally read-only on native XHR instance
    // assign to patched XHR, as a trade-off
    Object.defineProperty(this, name, {
      value: value,
      writable: false,
      enumerable: true,
      configurable: true
    });
  };

  /**
   * Dispatch XHR events
   * @private
   */


  MockerXHR.prototype._dispatchEvents = function _dispatchEvents() {
    var _this3 = this;

    EVENTS_LIST.forEach(function (type) {
      var event = (0, _createEvent.createEvent)(type);

      if (type !== 'readystatechange') {
        // progress event
        event.total = event.loaded = 1;
      }

      // Caveat: `this` & `event.target` are still the native one
      _this3.dispatchEvent(event);
    });
  };

  return MockerXHR;
}(ExtandableXHR);

MockerXHR.mockerPatched = true;
MockerXHR.native = XMLHttpRequest;
function getDocumentMIME(res) {
  var contentType = res.headers.get('content-type');

  /* istanbul ignore if */
  if (!contentType) {
    return 'text/html';
  }

  // strip charset
  return contentType.replace(/;.*/, '');
}
//# sourceMappingURL=patch-xhr.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/client/modern/client.js":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/client/modern/client.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ModernClient = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _utils = __webpack_require__(/*! ../../utils/ */ "../../node_modules/service-mocker/utils/index.js");

var _register = __webpack_require__(/*! ./register */ "../../node_modules/service-mocker/client/modern/register.js");

var _connect = __webpack_require__(/*! ./connect */ "../../node_modules/service-mocker/client/modern/connect.js");

var _getNewestReg = __webpack_require__(/*! ./get-newest-reg */ "../../node_modules/service-mocker/client/modern/get-newest-reg.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModernClient = exports.ModernClient = function () {

  /**
   * Defines whether a client has connected to mocker server.
   *
   * @readonly
   * @type {Promise<ServiceWorkerRegistration>}
   */
  function ModernClient(scriptURL) {
    var _this = this;

    _classCallCheck(this, ModernClient);

    this.isLegacy = false;
    this.ready = null;
    this.controller = null;

    /* istanbul ignore next */
    this.ready = this._init(scriptURL).then(function (registration) {
      _this.controller = registration.active;
      return registration;
    }).catch(function (error) {
      _utils.debug.error('mocker initialization failed: ', error);
    });
  }

  /**
   * Update the service worker registration immediately
   *
   * @return {Promise<ServiceWorkerRegistration>}
   */


  /**
   * Points to currently activated ServiceWorker object.
   *
   * @readonly
   * @type {ServiceWorker}
   */

  /**
   * Indicates which mode current client is running on.
   *
   * @readonly
   * @type {boolean}
   */


  ModernClient.prototype.update = function () {
    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', (0, _getNewestReg.getNewestReg)());

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function update() {
      return _ref.apply(this, arguments);
    }

    return update;
  }();

  /**
   * Get current service worker registration.
   *
   * @return {Promise<ServiceWorkerRegistration>}
   */


  ModernClient.prototype.getRegistration = function () {
    var _ref2 = _asyncToGenerator(_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', this.ready);

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getRegistration() {
      return _ref2.apply(this, arguments);
    }

    return getRegistration;
  }();

  /* istanbul ignore next: don't unregister sw in tests */
  /**
   * Unregister current service worker registration,
   * call this method will invoke `ServiceWorkerRegistration.unregister()` method when possible.
   *
   * @return {Promise<boolean>}
   */


  ModernClient.prototype.unregister = function () {
    var _ref3 = _asyncToGenerator(_regenerator2.default.mark(function _callee3() {
      var registration, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.getRegistration();

            case 2:
              registration = _context3.sent;
              _context3.next = 5;
              return registration.unregister();

            case 5:
              result = _context3.sent;


              if (!result) {
                // tslint:disable-next-line max-line-length
                _utils.debug.warn('this service worker has already been unregistered, you may need to close all relative tabs to remove it');
              }

              return _context3.abrupt('return', result);

            case 8:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function unregister() {
      return _ref3.apply(this, arguments);
    }

    return unregister;
  }();

  /**
   * Init mocker
   *
   * @private
   * @param  {string} scriptURL
   * @return {Promise<ServiceWorkerRegistration>}
   */


  ModernClient.prototype._init = function () {
    var _ref4 = _asyncToGenerator(_regenerator2.default.mark(function _callee4(scriptURL) {
      var registration;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _register.register)(scriptURL, {
                scope: location.pathname
              });

            case 2:
              registration = _context4.sent;


              this._autoSyncClient();

              return _context4.abrupt('return', registration);

            case 5:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function _init(_x) {
      return _ref4.apply(this, arguments);
    }

    return _init;
  }();

  /**
   * Synchronize mocker controller when sw controller changed
   *
   * @private
   */


  ModernClient.prototype._autoSyncClient = function _autoSyncClient() {
    var _this2 = this;

    var _navigator = navigator,
        serviceWorker = _navigator.serviceWorker;


    var updateLog = _utils.debug.scope('update');

    /* istanbul ignore next: won't occur in tests */
    serviceWorker.addEventListener('controllerchange', _asyncToGenerator(_regenerator2.default.mark(function _callee5() {
      var registration;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return (0, _connect.connect)(true);

            case 3:
              registration = _context5.sent;

              _this2.controller = registration.active;

              updateLog.color('crimson').warn('mocker updated, reload your requests to take effect');
              _context5.next = 11;
              break;

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5['catch'](0);

              updateLog.error('connecting to new service worker failed', _context5.t0);

            case 11:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this2, [[0, 8]]);
    })));
  };

  return ModernClient;
}();
//# sourceMappingURL=client.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/client/modern/connect.js":
/*!***************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/client/modern/connect.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.connect = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

/**
 * Connect to service worker
 *
 * @param  {boolean} [skipUpdate=false] Set to `true` to bypass auto update
 * @return {Promise<ServiceWorkerRegistration>}
 */
var connect = exports.connect = function () {
  var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee() {
    var skipUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var _navigator, serviceWorker, hasController, reg;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _navigator = navigator, serviceWorker = _navigator.serviceWorker;

            // controller may be set when sw is ready

            hasController = !!serviceWorker.controller;

            // chrome will sometimes be hanging after reloading page
            // delay all actions until sw is ready

            _context.next = 4;
            return serviceWorker.ready;

          case 4:
            if (!(!skipUpdate && hasController)) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return (0, _getNewestReg.getNewestReg)();

          case 7:
            _context.t0 = _context.sent;
            _context.next = 13;
            break;

          case 10:
            _context.next = 12;
            return serviceWorker.getRegistration();

          case 12:
            _context.t0 = _context.sent;

          case 13:
            reg = _context.t0;
            return _context.abrupt('return', handshake(reg));

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function connect() {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Establish service worker connection
 *
 * @param  {ServiceWorkerRegistration} registration
 * @return {Promise<ServiceWorkerRegistration>}
 */


var handshake = function () {
  var _ref2 = _asyncToGenerator(_regenerator2.default.mark(function _callee2(registration) {
    var controller;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            controller = registration.active;

            /* istanbul ignore if */

            if (controller) {
              _context2.next = 3;
              break;
            }

            throw new Error('no active service worker registration is found');

          case 3:
            if (navigator.serviceWorker.controller) {
              _context2.next = 6;
              break;
            }

            _context2.next = 6;
            return (0, _utils.sendMessageRequest)(controller, {
              action: _constants.ACTION.REQUEST_CLAIM
            });

          case 6:
            _context2.next = 8;
            return (0, _utils.sendMessageRequest)(controller, {
              action: _constants.ACTION.PING
            });

          case 8:

            _utils.debug.scope('modern').info('connection established');

            return _context2.abrupt('return', registration);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function handshake(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var _utils = __webpack_require__(/*! ../../utils/ */ "../../node_modules/service-mocker/utils/index.js");

var _constants = __webpack_require__(/*! ../../constants/ */ "../../node_modules/service-mocker/constants/index.js");

var _getNewestReg = __webpack_require__(/*! ./get-newest-reg */ "../../node_modules/service-mocker/client/modern/get-newest-reg.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=connect.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/client/modern/get-newest-reg.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/client/modern/get-newest-reg.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getNewestReg = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

/**
 * Get newest service worker registration
 *
 * @return {Promise<ServiceWorkerRegistration>}
 */
/* istanbul ignore next: unable to test it on single run */
var getNewestReg = function () {
  var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee() {
    var _navigator, serviceWorker, registration, newWorker;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _navigator = navigator, serviceWorker = _navigator.serviceWorker;


            updateLog.color('darkorchid').info('checking for updates');

            _context.next = 4;
            return serviceWorker.getRegistration();

          case 4:
            registration = _context.sent;

            if (registration) {
              _context.next = 7;
              break;
            }

            throw new Error('no active service worker registration is found');

          case 7:
            _context.next = 9;
            return registration.update();

          case 9:
            newWorker = registration.installing || registration.waiting;

            if (!newWorker) {
              _context.next = 16;
              break;
            }

            updateLog.info('installing updates');

            // wait until worker is activated
            _context.next = 14;
            return (0, _utils.eventWaitUntil)(newWorker, 'statechange', function () {
              return newWorker.state === 'activated';
            });

          case 14:
            _context.next = 17;
            break;

          case 16:
            updateLog.color('lightseagreen').info('already up-to-date');

          case 17:
            return _context.abrupt('return', registration);

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getNewestReg() {
    return _ref.apply(this, arguments);
  };
}();

var _utils = __webpack_require__(/*! ../../utils/ */ "../../node_modules/service-mocker/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var updateLog = _utils.debug.scope('update');exports.getNewestReg = getNewestReg;
//# sourceMappingURL=get-newest-reg.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/client/modern/register.js":
/*!****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/client/modern/register.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.register = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

/**
 * Register service worker
 *
 * @param  {string}                             scriptURL
 * @param  {ServiceWorkerRegisterOptions}       options
 * @return {Promise<ServiceWorkerRegistration>}
 */
var register = exports.register = function () {
  var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(scriptURL, options) {
    var _navigator, serviceWorker;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _navigator = navigator, serviceWorker = _navigator.serviceWorker;
            _context.next = 3;
            return serviceWorker.register(scriptURL, options);

          case 3:
            return _context.abrupt('return', (0, _connect.connect)());

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _connect = __webpack_require__(/*! ./connect */ "../../node_modules/service-mocker/client/modern/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=register.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/constants/action.js":
/*!**********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/constants/action.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var ACTION = {
  PING: 'ping',
  PONG: 'pong',
  ESTABLISHED: 'established',
  REQUEST_CLAIM: 'request_claim'
};

Object.keys(ACTION).forEach(function (prop) {
  ACTION[prop] = '@mocker/' + ACTION[prop];
});

exports.ACTION = ACTION;
//# sourceMappingURL=action.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/constants/index.js":
/*!*********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/constants/index.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _action = __webpack_require__(/*! ./action */ "../../node_modules/service-mocker/constants/action.js");

Object.keys(_action).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _action[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/utils/debug.js":
/*!*****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/utils/debug.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isIE = /Trident|Edge/.test(navigator.userAgent);

var defaultColor = 'dodgerblue';

var colorPresets = {
  log: defaultColor,
  info: defaultColor,
  warn: 'goldenrod',
  error: 'crimson'
};

var PrefixedConsole = exports.PrefixedConsole = function () {
  /**
   * Logger namespace
   *
   * @private
   * @type {string}
   */
  function PrefixedConsole() {
    var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mocker';
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : colorPresets.log;

    _classCallCheck(this, PrefixedConsole);

    this._namespace = 'mocker';
    this._color = colorPresets.log;

    this._namespace = namespace;
    this._color = color;
  }

  /**
   * Set logger color, returns new PrefixedConsole
   *
   * @param  {string} c Color string
   * @return {PrefixedConsole}
   */


  /**
   * Logger color
   *
   * @private
   * @type {string}
   */


  PrefixedConsole.prototype.color = function color(c) {
    return new PrefixedConsole(this._namespace, c);
  };

  /**
   * Set logger namespace, returns new PrefixedConsole
   *
   * @param  {string} ns Namespace
   * @return {PrefixedConsole}
   */


  PrefixedConsole.prototype.scope = function scope(ns) {
    return new PrefixedConsole(this._namespace + ':' + ns, this._color);
  };

  return PrefixedConsole;
}();

var debug = exports.debug = new PrefixedConsole();

/* istanbul ignore else */
// inherit console methods
if (typeof Object.setPrototypeOf === 'function') {
  Object.setPrototypeOf(PrefixedConsole.prototype, console);
} else {
  var desc = {};

  Object.getOwnPropertyNames(PrefixedConsole.prototype).forEach(function (prop) {
    desc[prop] = Object.getOwnPropertyDescriptor(PrefixedConsole.prototype, prop);
  });

  PrefixedConsole.prototype = Object.create(console, desc);
}

['log', 'info', 'warn', 'error'].forEach(function (method) {
  PrefixedConsole.prototype[method] = function logger() {
    var _console2;

    var _namespace = this._namespace,
        _color = this._color;

    /* istanbul ignore if */

    for (var _len = arguments.length, messages = Array(_len), _key = 0; _key < _len; _key++) {
      messages[_key] = arguments[_key];
    }

    if (isIE) {
      var _console;

      return (_console = console)[method].apply(_console, ['[' + _namespace + ']'].concat(messages));
    }

    var head = '%c[' + _namespace + ']%c';

    if (/%c/.test(messages[0])) {
      head = head + ' ' + messages.shift();
    }

    var color = _color === defaultColor ? colorPresets[method] : _color;

    (_console2 = console)[method].apply(_console2, [head, 'color: ' + color, 'color: #000'].concat(messages));
  };
});
//# sourceMappingURL=debug.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/utils/defer.js":
/*!*****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/utils/defer.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Defer =
/**
 * Indicates whether this defer is end
 *
 * @type {boolean}
 */
exports.Defer = function Defer() {
  var _this = this;

  _classCallCheck(this, Defer);

  this.done = false;
  this.promise = null;

  this.promise = new Promise(function (resolve, reject) {
    _this.resolve = function (result) {
      resolve(result);
      _this.done = true;
    };

    _this.reject = function (reason) {
      reject(reason);
      _this.done = true;
    };
  });
}

/**
 * Defer's promise object
 *
 * @readonly
 * @type {Promise<any>}
 */
;
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/utils/event-wait-until.js":
/*!****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/utils/event-wait-until.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.eventWaitUntil = eventWaitUntil;
/**
 * Comparer function
 *
 * @callback comparer
 * @param {Event} event Event object
 * @return {boolean}
 */

/**
 * Wait until an event matches given conditions
 *
 * @param  {any}      target   Event target
 * @param  {string}   event    Event name
 * @param  {comparer} comparer Comparer function
 * @return {Promise<Event>}
 */
function eventWaitUntil(target, event, comparer) {
  return new Promise(function (resolve) {
    target.addEventListener(event, function handler(evt) {
      if (comparer(evt)) {
        target.removeEventListener(event, handler);
        resolve(evt);
      }
    });
  });
}
//# sourceMappingURL=event-wait-until.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/utils/extensify.js":
/*!*********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/utils/extensify.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extensify = extensify;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Make the un-extendable classes great again
 *
 * Notes:
 * - Main concepts:
 *   1. The best way to make another native class is to extend native class
 *      with overriding some methods. However, extending the native sometimes
 *      raises an error: <Failed to construct ${Native}: Please use the 'new' operator,
 *      this DOM object constructor cannot be called as a function.>
 *   2. So we should extend `Native` in some ways that are not constructing
 *      new instance with `Native.call(this)`:
 *      2.1. Look back to JavaScript inheritance, no matter which method we choose to
 *           use, we are almost doing the same thing: let the execution context of
 *           `SuperClass.prototype.method` be the instance of `SubClass`.
 *      1.2. Thus if we bind `Native.prototype.method` with a native instance,
 *           we can be free to invoke all methods in prototype! Then attaching these
 *           methods to the `Extendable.prototype`, the instances of `Extendable` will act
 *           as if they're real native instances!
 *
 * - Implementation of `Extendable`:
 *   1. Create a normal class with `this._native` pointing to a native instance,
 *   2. Iterate through the descriptors of `Native.prototype`:
 *      2.1. If the property is a primitive value, do nothing,
 *      2.2. If the property is an accessor, bind `get` and `set` with `this._native`,
 *      2.3. If the property is a function, bind it with `this._native`,
 *      2.4. Copy the descriptor to `Extendable.prototype`
 *   3. Iterate through the descriptors of `Native`, copy them to `Extendable` as
 *      static methods.
 */

/**
 * Make un-extendable native classes extendable
 *
 * @param {AnyClass} Native Native class
 * @return {ExtendableAnyClass}
 */
function extensify(Native) {
  var Extendable = function Extendable() {
    _classCallCheck(this, Extendable);

    this._native = initNative.apply(undefined, arguments);

    checkLack(this._native);
  }
  /**
   * Refer to native object
   *
   * @private
   * @type {AnyClass}
   */
  ;

  function initNative() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 0) {
      return new Native();
    }

    return new (Function.prototype.bind.apply(Native, [null].concat(args)))();
  }

  var checked = false;
  /* istanbul ignore next: safari only */
  function checkLack(instance) {
    if (checked) {
      return;
    }

    // safari 9- only have methods on `XMLHttpRequest.prototype`
    // so we need copy properties from an instance

    var _loop = function _loop(prop) {
      if (!Extendable.prototype.hasOwnProperty(prop)) {
        Object.defineProperty(Extendable.prototype, prop, {
          get: function get() {
            return this._native[prop];
          },
          set: function set(value) {
            this._native[prop] = value;
            return value;
          },

          enumerable: true,
          configurable: true
        });
      }
    };

    for (var prop in instance) {
      _loop(prop);
    }
  }

  // copy all static properties
  // safari 9- will include a "prototype" property on XMLHttpRequest
  try {
    Object.keys(Native).forEach(function (prop) {
      Object.defineProperty(Extendable, prop, Object.getOwnPropertyDescriptor(Native, prop));
    });
  } catch (e) {}

  // delegate all unset properties to `_native`
  (function mapPrototypeMethods() {
    var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Native.prototype;
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Extendable.prototype;

    if (source.constructor === Object) {
      // exit recursion
      return;
    }

    Object.keys(source).forEach(function (prop) {
      /* istanbul ignore if */
      if (target.hasOwnProperty(prop)) {
        return;
      }

      var descriptor = Object.getOwnPropertyDescriptor(source, prop);

      if (descriptor.get || descriptor.set) {
        descriptor.get = function getNative() {
          return this._native[prop];
        };

        descriptor.set = function setNative(value) {
          this._native[prop] = value;
          return value;
        };
      } else if (typeof descriptor.value === 'function') {
        // method
        var nativeFn = descriptor.value;
        descriptor.value = function wrapped() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return nativeFn.apply(this._native, args);
        };
      }

      // enable overriding
      descriptor.configurable = true;

      Object.defineProperty(target, prop, descriptor);
    });

    // recursively look-up
    mapPrototypeMethods(Object.getPrototypeOf(source), target);
  })();

  return Extendable;
}
//# sourceMappingURL=extensify.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/utils/index.js":
/*!*****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/utils/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _debug = __webpack_require__(/*! ./debug */ "../../node_modules/service-mocker/utils/debug.js");

Object.keys(_debug).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _debug[key];
    }
  });
});

var _defer = __webpack_require__(/*! ./defer */ "../../node_modules/service-mocker/utils/defer.js");

Object.keys(_defer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _defer[key];
    }
  });
});

var _extensify = __webpack_require__(/*! ./extensify */ "../../node_modules/service-mocker/utils/extensify.js");

Object.keys(_extensify).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extensify[key];
    }
  });
});

var _eventWaitUntil = __webpack_require__(/*! ./event-wait-until */ "../../node_modules/service-mocker/utils/event-wait-until.js");

Object.keys(_eventWaitUntil).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _eventWaitUntil[key];
    }
  });
});

var _sendMessageRequest = __webpack_require__(/*! ./send-message-request */ "../../node_modules/service-mocker/utils/send-message-request.js");

Object.keys(_sendMessageRequest).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sendMessageRequest[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/service-mocker/utils/send-message-request.js":
/*!********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/utils/send-message-request.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.sendMessageRequest = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Send message and get the response
 *
 * @param  {any}    target  Message target
 * @param  {any}    message Message body
 * @param  {number} timeout Messaging timeout
 * @return {Promise<any>} Resolves with response message
 */
var sendMessageRequest = exports.sendMessageRequest = function () {
  var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(target, message) {
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3 * 1e3;

    var _ref2, port1, port2;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = new MessageChannel(), port1 = _ref2.port1, port2 = _ref2.port2;
            return _context.abrupt('return', new Promise(function (resolve, reject) {
              var timer = isFinite(timeout) && setTimeout(function () {
                reject(new Error('messaging timeout: ' + JSON.stringify(message)));
              }, timeout);

              port1.onmessage = function (_ref3) {
                var data = _ref3.data;

                if (timer) {
                  clearTimeout(timer);
                }

                // avoid high transient memory usage, see
                // https://html.spec.whatwg.org/multipage/comms.html#ports-and-garbage-collection
                port1.close();
                port2.close();

                /* istanbul ignore else */
                if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
                  data.request = message;
                }

                if (data && data.error) {
                  reject(data);
                } else {
                  resolve(data);
                }
              };

              if (target === self.window) {
                // posting message to self => legacy mode
                // add `origin` param to `window.postMessage(message, targetOrigin, [transfer])`
                target.postMessage(message, '*', [port2]);
              } else {
                target.postMessage(message, [port2]);
              }
            }));

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function sendMessageRequest(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=send-message-request.js.map

/***/ }),

/***/ "./src/modules/@shared/client/client.ts":
/*!**********************************************!*\
  !*** ./src/modules/@shared/client/client.ts ***!
  \**********************************************/
/*! exports provided: SWClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWClient", function() { return SWClient; });
/* harmony import */ var _tdm_service_mocker_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/service-mocker/client */ "../../libs/service-mocker/client/src/index.ts");
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

var SWClient = /** @class */ (function (_super) {
    __extends(SWClient, _super);
    function SWClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SWClient.prototype.installed = function (data) {
        return Promise.resolve(12);
    };
    SWClient.prototype.restoreDB = function () {
        var _this = this;
        return __webpack_require__.e(/*! import() | northwind */ "northwind").then(__webpack_require__.bind(null, /*! ./json-db/index */ "./src/modules/@shared/client/json-db/index.ts"))
            .then(function (module) { return _this.send('restoreDb', module.DB, 1000 * 60); });
    };
    __decorate([
        Object(_tdm_service_mocker_client__WEBPACK_IMPORTED_MODULE_0__["OnMessage"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SWClient.prototype, "installed", null);
    SWClient = __decorate([
        Object(_tdm_service_mocker_client__WEBPACK_IMPORTED_MODULE_0__["Client"])({
            scriptURL: './sw.js'
        })
    ], SWClient);
    return SWClient;
}(_tdm_service_mocker_client__WEBPACK_IMPORTED_MODULE_0__["ClientBase"]));



/***/ }),

/***/ "./src/modules/@shared/client/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/@shared/client/index.ts ***!
  \*********************************************/
/*! exports provided: SWClient, Customer, Category, Employee, EmployeeTerritory, Order, OrderDetail, Product, Region, Shipper, Supplier, Territory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/modules/@shared/client/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Customer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Category"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Employee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeeTerritory", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["EmployeeTerritory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Order"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderDetail", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["OrderDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Product"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Region"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shipper", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Shipper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Supplier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Territory", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Territory"]; });

/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ "./src/modules/@shared/client/client.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SWClient", function() { return _client__WEBPACK_IMPORTED_MODULE_1__["SWClient"]; });





/***/ }),

/***/ "./src/modules/@shared/client/models/category.ts":
/*!*******************************************************!*\
  !*** ./src/modules/@shared/client/models/category.ts ***!
  \*******************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $Category = /** @class */ (function () {
    function $Category() {
    }
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Identity"])(),
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["UrlParam"])('id'),
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Category.prototype, "CategoryID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Category.prototype, "CategoryName", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Category.prototype, "Description", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Category.prototype, "Picture", void 0);
    $Category = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpResource"])({
            endpoint: 'categories/:id?'
        })
    ], $Category);
    return $Category;
}());
var Category = Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"])($Category);


/***/ }),

/***/ "./src/modules/@shared/client/models/customer.ts":
/*!*******************************************************!*\
  !*** ./src/modules/@shared/client/models/customer.ts ***!
  \*******************************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
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


var $Customer = /** @class */ (function (_super) {
    __extends($Customer, _super);
    function $Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Identity"])(),
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["UrlParam"])('id'),
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Customer.prototype, "CustomerID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Customer.prototype, "CompanyName", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Customer.prototype, "ContactName", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Customer.prototype, "ContactTitle", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Customer.prototype, "Address", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Customer.prototype, "City", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Customer.prototype, "Region", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Customer.prototype, "PostalCode", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Customer.prototype, "Country", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Customer.prototype, "Phone", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Customer.prototype, "Fax", void 0);
    $Customer = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpResource"])({
            endpoint: 'customers/:id?'
        })
    ], $Customer);
    return $Customer;
}(Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"])()));
var Customer = $Customer;


/***/ }),

/***/ "./src/modules/@shared/client/models/employee-territory.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/@shared/client/models/employee-territory.ts ***!
  \*****************************************************************/
/*! exports provided: EmployeeTerritory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeTerritory", function() { return EmployeeTerritory; });
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $EmployeeTerritory = /** @class */ (function () {
    function $EmployeeTerritory() {
    }
    __decorate([
        Object(_tdm_data__WEBPACK_IMPORTED_MODULE_0__["Identity"])(),
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["UrlParam"])('id'),
        Object(_tdm_data__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $EmployeeTerritory.prototype, "EmployeeTerritory", void 0);
    __decorate([
        Object(_tdm_data__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $EmployeeTerritory.prototype, "EmployeeID", void 0);
    __decorate([
        Object(_tdm_data__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $EmployeeTerritory.prototype, "TerritoryID", void 0);
    $EmployeeTerritory = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpResource"])({
            endpoint: 'employeeTerritories/:id?'
        })
    ], $EmployeeTerritory);
    return $EmployeeTerritory;
}());
var EmployeeTerritory = Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"])($EmployeeTerritory);
/* When moving to TS 2.8+
export const EmployeeTerritory: TypeOfActiveRecord<typeof $EmployeeTerritory> = <any> $EmployeeTerritory;
export type EmployeeTerritory = InstanceType<typeof EmployeeTerritory>;
*/


/***/ }),

/***/ "./src/modules/@shared/client/models/employee.ts":
/*!*******************************************************!*\
  !*** ./src/modules/@shared/client/models/employee.ts ***!
  \*******************************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $Employee = /** @class */ (function () {
    function $Employee() {
    }
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Identity"])(),
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["UrlParam"])('id'),
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Employee.prototype, "EmployeeID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "LastName", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "FirstName", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "Title", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "TitleOfCourtesy", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "BirthDate", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "HireDate", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "Address", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "City", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "Region", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "PostalCode", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "Country", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "HomePhone", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Employee.prototype, "Extension", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Object)
    ], $Employee.prototype, "Photo", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "Notes", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Employee.prototype, "ReportsTo", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Employee.prototype, "PhotoPath", void 0);
    $Employee = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpResource"])({
            endpoint: 'employees/:id?'
        })
    ], $Employee);
    return $Employee;
}());
var Employee = Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"])($Employee);
/* When moving to TS 2.8+
export const Employee: TypeOfActiveRecord<typeof $Employee> = <any> $Employee;
export type Employee = InstanceType<typeof Employee>;
*/


/***/ }),

/***/ "./src/modules/@shared/client/models/index.ts":
/*!****************************************************!*\
  !*** ./src/modules/@shared/client/models/index.ts ***!
  \****************************************************/
/*! exports provided: Customer, Category, Employee, EmployeeTerritory, Order, OrderDetail, Product, Region, Shipper, Supplier, Territory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer */ "./src/modules/@shared/client/models/customer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"]; });

/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./src/modules/@shared/client/models/category.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _category__WEBPACK_IMPORTED_MODULE_1__["Category"]; });

/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee */ "./src/modules/@shared/client/models/employee.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return _employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]; });

/* harmony import */ var _employee_territory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-territory */ "./src/modules/@shared/client/models/employee-territory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeeTerritory", function() { return _employee_territory__WEBPACK_IMPORTED_MODULE_3__["EmployeeTerritory"]; });

/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order */ "./src/modules/@shared/client/models/order.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _order__WEBPACK_IMPORTED_MODULE_4__["Order"]; });

/* harmony import */ var _order_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-detail */ "./src/modules/@shared/client/models/order-detail.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderDetail", function() { return _order_detail__WEBPACK_IMPORTED_MODULE_5__["OrderDetail"]; });

/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product */ "./src/modules/@shared/client/models/product.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _product__WEBPACK_IMPORTED_MODULE_6__["Product"]; });

/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./region */ "./src/modules/@shared/client/models/region.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return _region__WEBPACK_IMPORTED_MODULE_7__["Region"]; });

/* harmony import */ var _shipper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shipper */ "./src/modules/@shared/client/models/shipper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shipper", function() { return _shipper__WEBPACK_IMPORTED_MODULE_8__["Shipper"]; });

/* harmony import */ var _supplier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./supplier */ "./src/modules/@shared/client/models/supplier.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return _supplier__WEBPACK_IMPORTED_MODULE_9__["Supplier"]; });

/* harmony import */ var _territory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./territory */ "./src/modules/@shared/client/models/territory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Territory", function() { return _territory__WEBPACK_IMPORTED_MODULE_10__["Territory"]; });














/***/ }),

/***/ "./src/modules/@shared/client/models/order-detail.ts":
/*!***********************************************************!*\
  !*** ./src/modules/@shared/client/models/order-detail.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetail", function() { return OrderDetail; });
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $OrderDetail = /** @class */ (function () {
    function $OrderDetail() {
    }
    __decorate([
        Object(_tdm_data__WEBPACK_IMPORTED_MODULE_0__["Identity"])(),
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["UrlParam"])('id'),
        Object(_tdm_data__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $OrderDetail.prototype, "OrderDetailID", void 0);
    __decorate([
        Object(_tdm_data__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $OrderDetail.prototype, "OrderID", void 0);
    __decorate([
        Object(_tdm_data__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $OrderDetail.prototype, "ProductID", void 0);
    __decorate([
        Object(_tdm_data__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $OrderDetail.prototype, "UnitPrice", void 0);
    __decorate([
        Object(_tdm_data__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $OrderDetail.prototype, "Quantity", void 0);
    __decorate([
        Object(_tdm_data__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $OrderDetail.prototype, "Discount", void 0);
    $OrderDetail = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpResource"])({
            endpoint: 'orderDetails/:id?'
        })
    ], $OrderDetail);
    return $OrderDetail;
}());
var OrderDetail = Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"])($OrderDetail);
/* When moving to TS 2.8+
export const OrderDetail: TypeOfActiveRecord<typeof $OrderDetail> = <any> $OrderDetail;
export type OrderDetail = InstanceType<typeof OrderDetail>;
*/


/***/ }),

/***/ "./src/modules/@shared/client/models/order.ts":
/*!****************************************************!*\
  !*** ./src/modules/@shared/client/models/order.ts ***!
  \****************************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer */ "./src/modules/@shared/client/models/customer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var $Order = /** @class */ (function () {
    function $Order() {
    }
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Identity"])(),
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["UrlParam"])('id'),
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Order.prototype, "OrderID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Order.prototype, "CustomerID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Relation"])({ foreignKey: 'CustomerID' }),
        __metadata("design:type", _customer__WEBPACK_IMPORTED_MODULE_2__["Customer"])
    ], $Order.prototype, "Customer", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Order.prototype, "EmployeeID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Order.prototype, "OrderDate", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Order.prototype, "RequiredDate", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Order.prototype, "ShippedDate", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Order.prototype, "ShipVia", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Order.prototype, "Freight", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Order.prototype, "ShipName", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Order.prototype, "ShipAddress", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Order.prototype, "ShipCity", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Order.prototype, "ShipRegion", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Order.prototype, "ShipPostalCode", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Order.prototype, "ShipCountry", void 0);
    $Order = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpResource"])({
            endpoint: 'orders/:id?'
        })
    ], $Order);
    return $Order;
}());
var Order = Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"])($Order);
/* When moving to TS 2.8+
export const Order: TypeOfActiveRecord<typeof $Order> = <any> $Order;
export type Order = InstanceType<typeof Order>;
*/


/***/ }),

/***/ "./src/modules/@shared/client/models/product.ts":
/*!******************************************************!*\
  !*** ./src/modules/@shared/client/models/product.ts ***!
  \******************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $Product = /** @class */ (function () {
    function $Product() {
    }
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Identity"])(),
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["UrlParam"])('id'),
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Product.prototype, "ProductID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Product.prototype, "ProductName", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Product.prototype, "SupplierID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Product.prototype, "CategoryID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Product.prototype, "QuantityPerUnit", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Product.prototype, "UnitPrice", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Product.prototype, "UnitsInStock", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Product.prototype, "UnitsOnOrder", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Product.prototype, "ReorderLevel", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Product.prototype, "Discontinued", void 0);
    $Product = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpResource"])({
            endpoint: 'products/:id?'
        })
    ], $Product);
    return $Product;
}());
var Product = Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"])($Product);
/* When moving to TS 2.8+
export const Product: TypeOfActiveRecord<typeof $Product> = <any> $Product;
export type Product = InstanceType<typeof Product>;
*/


/***/ }),

/***/ "./src/modules/@shared/client/models/region.ts":
/*!*****************************************************!*\
  !*** ./src/modules/@shared/client/models/region.ts ***!
  \*****************************************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $Region = /** @class */ (function () {
    function $Region() {
    }
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Identity"])(),
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["UrlParam"])('id'),
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Region.prototype, "RegionID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Region.prototype, "RegionDescription", void 0);
    $Region = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpResource"])({
            endpoint: 'regions/:id?'
        })
    ], $Region);
    return $Region;
}());
var Region = Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"])($Region);
/* When moving to TS 2.8+
export const Region: TypeOfActiveRecord<typeof $Region> = <any> $Region;
export type Region = InstanceType<typeof Region>;
*/


/***/ }),

/***/ "./src/modules/@shared/client/models/shipper.ts":
/*!******************************************************!*\
  !*** ./src/modules/@shared/client/models/shipper.ts ***!
  \******************************************************/
/*! exports provided: Shipper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shipper", function() { return Shipper; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $Shipper = /** @class */ (function () {
    function $Shipper() {
    }
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Identity"])(),
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["UrlParam"])('id'),
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Shipper.prototype, "ShipperID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Shipper.prototype, "CompanyName", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Shipper.prototype, "Phone", void 0);
    $Shipper = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpResource"])({
            endpoint: 'shippers/:id?'
        })
    ], $Shipper);
    return $Shipper;
}());
var Shipper = Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"])($Shipper);
/* When moving to TS 2.8+
export const Shipper: TypeOfActiveRecord<typeof $Shipper> = <any> $Shipper;
export type Shipper = InstanceType<typeof Shipper>;
*/


/***/ }),

/***/ "./src/modules/@shared/client/models/supplier.ts":
/*!*******************************************************!*\
  !*** ./src/modules/@shared/client/models/supplier.ts ***!
  \*******************************************************/
/*! exports provided: Supplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $Supplier = /** @class */ (function () {
    function $Supplier() {
    }
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Identity"])(),
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["UrlParam"])('id'),
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Supplier.prototype, "SupplierID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Supplier.prototype, "CompanyName", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Supplier.prototype, "ContactName", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Supplier.prototype, "ContactTitle", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Supplier.prototype, "Address", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Supplier.prototype, "City", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Supplier.prototype, "Region", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Supplier.prototype, "PostalCode", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Supplier.prototype, "Country", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Supplier.prototype, "Phone", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Supplier.prototype, "Fax", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Supplier.prototype, "HomePage", void 0);
    $Supplier = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpResource"])({
            endpoint: 'suppliers/:id?'
        })
    ], $Supplier);
    return $Supplier;
}());
var Supplier = Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"])($Supplier);
/* When moving to TS 2.8+
export const Supplier: TypeOfActiveRecord<typeof $Supplier> = <any> $Supplier;
export type Supplier = InstanceType<typeof Supplier>;
*/


/***/ }),

/***/ "./src/modules/@shared/client/models/territory.ts":
/*!********************************************************!*\
  !*** ./src/modules/@shared/client/models/territory.ts ***!
  \********************************************************/
/*! exports provided: Territory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Territory", function() { return Territory; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $Territory = /** @class */ (function () {
    function $Territory() {
    }
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Identity"])(),
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["UrlParam"])('id'),
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Territory.prototype, "TerritoryID", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], $Territory.prototype, "TerritoryDescription", void 0);
    __decorate([
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Number)
    ], $Territory.prototype, "RegionID", void 0);
    $Territory = __decorate([
        Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpResource"])({
            endpoint: 'territories/:id?'
        })
    ], $Territory);
    return $Territory;
}());
var Territory = Object(_tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"])($Territory);
/* When moving to TS 2.8+
export const Territory: TypeOfActiveRecord<typeof $Territory> = <any> $Territory;
export type Territory = InstanceType<typeof Territory>;
*/


/***/ })

}]);
//# sourceMappingURL=http~northwind-app.js.map