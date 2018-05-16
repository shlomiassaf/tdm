var serviceWorkerOption = {
  "assets": [
    "/FormsArrayRendererComponent.js",
    "/FormsArraysComponent.js",
    "/FormsBeforeRenderEventComponent.js",
    "/FormsChildFormComponent.js",
    "/FormsChildFormRendererComponent.js",
    "/FormsCommitComponent.js",
    "/FormsComplexDataStructuresComponent.js",
    "/FormsControlOutletComponent.js",
    "/FormsControlPanelComponent.js",
    "/FormsCreatingAModelComponent.js",
    "/FormsDisableFormComponent.js",
    "/FormsElementMetadataComponent.js",
    "/FormsExtendingTheRendererComponent.js",
    "/FormsFieldSyncRedrawComponent.js",
    "/FormsFilterDisableHiddenStateComponent.js",
    "/FormsFlatteningComponent.js",
    "/FormsHotBindComponent.js",
    "/FormsIntroductionComponent.js",
    "/FormsLocalOverrideComponent.js",
    "/FormsOverviewComponent.js",
    "/FormsRenderContainerComponent.js",
    "/FormsSetupComponent.js",
    "/FormsTheRendererComponent.js",
    "/FormsValidationComponent.js",
    "/FormsValueChangesEventComponent.js",
    "/FormsVirtualGroupsComponent.js",
    "/NgxHttpActiveRecordComponent.js",
    "/NgxHttpCancellingComponent.js",
    "/NgxHttpCreatingAModelComponent.js",
    "/NgxHttpDaoComponent.js",
    "/NgxHttpEventsComponent.js",
    "/NgxHttpFlowControlComponentComponent.js",
    "/NgxHttpIntroductionComponent.js",
    "/NgxHttpNextComponent.js",
    "/NgxHttpOptionsComponent.js",
    "/NgxHttpOverviewComponent.js",
    "/NgxHttpResourceControlComponent.js",
    "/NgxHttpRxResourceControlComponent.js",
    "/NgxHttpSetupComponent.js",
    "/NgxHttpStaticOptionsComponent.js",
    "/NgxHttpTodoComponent.js",
    "/common.js",
    "/forms.js",
    "/http.js",
    "/http~northwind-app.js",
    "/main.js",
    "/northwind.js",
    "/northwind-app.js",
    "/polyfills.js",
    "/runtime.js",
    "/styles.js",
    "/vendor.js",
    "/favicon.ico",
    "/3rdpartylicenses.txt",
    "/index.html"
  ]
};
        
        /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/modules/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../libs/core/src/index.ts":
/*!*********************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/src/index.ts ***!
  \*********************************************************************************/
/*! exports provided: errors, Errors, TDMCollection, TDMModelBase, Model, directMapper, TransformationError, DirectSerializeMapper, DirectDeserializeMapper, Type, Prop, Exclude, Relation, Identity, serialize, autoSerialize, deserialize, autoDeserialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core */ "../../libs/core/src/lib/core.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["Errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMCollection", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["TDMCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelBase", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["TDMModelBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["Model"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directMapper", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["directMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransformationError", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["TransformationError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectSerializeMapper", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["DirectSerializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectDeserializeMapper", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["DirectDeserializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["Prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exclude", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["Exclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Relation", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["Relation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["Identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["serialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoSerialize", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["autoSerialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deserialize", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["deserialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoDeserialize", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["autoDeserialize"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/core/src/lib/add/target-metadata.ts":
/*!***************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/src/lib/add/target-metadata.ts ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators */ "../../libs/core/src/lib/decorators.ts");


(function (CLS) {
    CLS.prototype.getCreateProp = function getCreateProp(info) {
        var name = Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isString"])(info) ? info : info.name;
        if (!this.config.has(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["PropMetadata"], name)) {
            Object(_decorators__WEBPACK_IMPORTED_MODULE_1__["Prop"])()(this.target.prototype, name);
        }
        return this.config.get(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["PropMetadata"], name);
    };
})(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TargetMetadata"]);


/***/ }),

/***/ "../../libs/core/src/lib/core.ts":
/*!************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/src/lib/core.ts ***!
  \************************************************************************************/
/*! exports provided: errors, Errors, TDMCollection, TDMModelBase, Model, directMapper, TransformationError, DirectSerializeMapper, DirectDeserializeMapper, Type, Prop, Exclude, Relation, Identity, serialize, autoSerialize, deserialize, autoDeserialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return serialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoSerialize", function() { return autoSerialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserialize", function() { return deserialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoDeserialize", function() { return autoDeserialize; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["Errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMCollection", function() { return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelBase", function() { return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMModelBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["Model"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directMapper", function() { return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["directMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransformationError", function() { return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TransformationError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectSerializeMapper", function() { return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["DirectSerializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectDeserializeMapper", function() { return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["DirectDeserializeMapper"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators */ "../../libs/core/src/lib/decorators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["Prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exclude", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["Exclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Relation", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["Relation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["Identity"]; });

/* harmony import */ var _add_target_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/target-metadata */ "../../libs/core/src/lib/add/target-metadata.ts");




// public serialize / deserialize functions

/**
 * Serialize a class instance into a plain object.
 * @param mapper
 * @param instance
 * @param type optional, if not set taken from instance.constructor
 * @returns
 */
function serialize(mapper, instance, type) {
    return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].serialize(type || instance.constructor, mapper.serializer(instance));
}
/**
 * Automatically serialize an instance.
 * This method will serialize an instance by first trying to locate the target using the `constructor` function.
 * If a target is found and if it's a model target (i.e. ModelMetadata) it will try to get the mapper assign for that
 * model.
 *
 * If no target, model or mapper was found it will use the fallbackMapper mapper provided, or `directMapper`
 * if no fallback is provided provided.
 *
 * Note that when provided a fallback mapper, make sure it is able to serialize unknown targets. (plain objects)
 */
function autoSerialize(instance, fallbackMapper) {
    if (fallbackMapper === void 0) { fallbackMapper = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["directMapper"]; }
    var tMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(instance.constructor);
    var mapper = (tMeta && tMeta.hasModel && tMeta.model().mapper) || fallbackMapper;
    return serialize(mapper, instance);
}
/**
 * De-serialize a plain object into a the provided instance or, when no instance is provided, to a new instance.
 */
function deserialize(mapper, plainObject, type, instance) {
    return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].deserialize(mapper.deserializer(plainObject, type), instance);
}
/**
 * Automatically de-serialize an object to/into an instance.
 * This method will de-serialize an object by first trying to locate a model (i.e. ModelMetadata) for the target.
 * If a model is found it will try to get the mapper assign for that model.
 *
 * If no model or mapper was found it will use the fallbackMapper mapper provided, or `directMapper`
 * if no fallback is provided provided.
 *
 */
function autoDeserialize(plainObject, type, instance, fallbackMapper) {
    if (instance === void 0) { instance = null; }
    if (fallbackMapper === void 0) { fallbackMapper = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["directMapper"]; }
    var tMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(type);
    var mapper = (tMeta && tMeta.hasModel && tMeta.model().mapper) || fallbackMapper;
    return deserialize(mapper, plainObject, type, instance);
}
(function (CLS) {
    CLS.clone = function (resource, mapperFactory) {
        if (mapperFactory === void 0) { mapperFactory = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["directMapper"]; }
        return autoDeserialize(autoSerialize(resource, mapperFactory), resource.constructor, null, mapperFactory);
    };
})(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMModelBase"]);


/***/ }),

/***/ "../../libs/core/src/lib/decorators.ts":
/*!******************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/src/lib/decorators.ts ***!
  \******************************************************************************************/
/*! exports provided: Prop, exclude, Exclude, Relation, Type, Identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return Prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude", function() { return exclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exclude", function() { return Exclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relation", function() { return Relation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return Identity; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");

_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].on.processType(function (target) {
    var meta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(target);
    meta.getValues(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["RelationMetadata"]).forEach(function (relation) {
        // Its possible to set @Relation() without @Prop(), so make sure to create one if not set by the user.
        var prop = meta.getCreateProp(relation.decoratorInfo);
        prop.setRelationship(relation);
        // if the fk is a different key, attach a reference to the foreign key PropMetadata (and create 1 if not there)
        if (relation.name !== relation.foreignKey) {
            meta.getCreateProp(relation.foreignKey).foreignKeyOf = prop;
        }
    });
});
/**
 * @propertyDecorator instance
 * @param def
 */
var Prop = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["PropMetadata"], true);
/** @internal */
var exclude = {};
exclude = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["ExcludeMetadata"], true, 'classPropMethod'); // for Angular AOT
/**
 * @propertyDecorator instance
 */
function Exclude(metaArgs) {
    return exclude(metaArgs);
}
/**
 * @propertyDecorator instance
 * @param def
 */
var Relation = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["RelationMetadata"], true);
/**
 * @propertyDecorator instance
 * @param def
 */
var Type = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TypeMetadata"]);
/**
 * @propertyDecorator instance
 */
function Identity() {
    return function (target, key) {
        _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(target.constructor).model().identity = key;
    };
}


/***/ }),

/***/ "../../libs/core/tdm/src/index.ts":
/*!*************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/index.ts ***!
  \*************************************************************************************/
/*! exports provided: errors, Errors, stringify, isNumber, isString, isFunction, isUndefined, isJsObject, isPrimitive, LazyInit, DualKeyMap, SetExt, KeySet, MapExt, ensureTargetIsType, setMetaHelper, BaseMetadata, BaseParamMetadata, TargetEvents, lazyRef, getBaseClass, getProtoChain, reflection, MetaClassMetadata, MetaClass, TypeMetadata, PropMetadata, ExcludeMetadata, RelationMetadata, TargetStore, TargetMetadata, targetStore, directMapper, TransformationError, DirectSerializeMapper, DirectDeserializeMapper, DeserializeMapper, SerializeMapper, transformValueOut, PlainObjectMapper, TDMCollection, TDMModelBase, Model, ModelMetadata, processModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/tdm */ "../../libs/core/tdm/src/lib/tdm.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["Errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJsObject", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["isJsObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyInit", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["LazyInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DualKeyMap", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["DualKeyMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetExt", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["SetExt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeySet", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["KeySet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapExt", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["MapExt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensureTargetIsType", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["ensureTargetIsType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMetaHelper", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["setMetaHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseMetadata", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseParamMetadata", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseParamMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetEvents", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["TargetEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazyRef", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["lazyRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBaseClass", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["getBaseClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProtoChain", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["getProtoChain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reflection", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["reflection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaClassMetadata", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClassMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaClass", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeMetadata", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["TypeMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropMetadata", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["PropMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExcludeMetadata", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["ExcludeMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelationMetadata", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["RelationMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetStore", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["TargetStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetMetadata", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["TargetMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetStore", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directMapper", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["directMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransformationError", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["TransformationError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectSerializeMapper", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["DirectSerializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectDeserializeMapper", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["DirectDeserializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeserializeMapper", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["DeserializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SerializeMapper", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["SerializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformValueOut", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["transformValueOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlainObjectMapper", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["PlainObjectMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMCollection", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelBase", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMModelBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["Model"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelMetadata", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["ModelMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processModel", function() { return _lib_tdm__WEBPACK_IMPORTED_MODULE_0__["processModel"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/core/tdm/src/lib/add/mapping/index.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/add/mapping/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: initMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMapping", function() { return initMapping; });
/* harmony import */ var _tdm_tixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/tixin */ "../../libs/tixin/src/index.ts");
/* harmony import */ var _metadata_target_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metadata/target-metadata */ "../../libs/core/tdm/src/lib/metadata/target-metadata.ts");
/* harmony import */ var _metadata_target_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metadata/target-store */ "../../libs/core/tdm/src/lib/metadata/target-store.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model */ "../../libs/core/tdm/src/lib/add/model/index.ts");
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mapping */ "../../libs/core/tdm/src/lib/mapping/index.ts");
/* harmony import */ var _mapping_target_transformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mapping/target-transformer */ "../../libs/core/tdm/src/lib/mapping/target-transformer.ts");
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");
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







function initMapping() {
    var PlainObject = /** @class */ (function () {
        function PlainObject() {
        }
        PlainObject = __decorate([
            Object(_model__WEBPACK_IMPORTED_MODULE_3__["Model"])({ resName: 'InternalPlainObject' })
        ], PlainObject);
        return PlainObject;
    }());
    _metadata_target_store__WEBPACK_IMPORTED_MODULE_2__["TargetStore"].prototype.serialize = function serialize(target, mapper) {
        var meta = this.getTargetMeta(target);
        if (meta) {
            return meta.serialize(mapper);
        }
    };
    /**
     * Deserialize and instance of "DeserializeMapper" into an instance of tge target supplied
     * @param target
     * @param mapper
     * @returns
     */
    _metadata_target_store__WEBPACK_IMPORTED_MODULE_2__["TargetStore"].prototype.deserialize = function deserialize(mapper, instance) {
        if (this.hasTarget(mapper.sourceType)) {
            var meta = this.getTargetMeta(mapper.sourceType);
            var result = instance || meta.model().factory(mapper.isCollection);
            meta.deserialize(mapper, result);
            return result;
        }
        else {
            return this.deserializePlain(mapper, instance);
        }
    };
    /**
     * Deserialize and instance of "DeserializeMapper" into a plain object (object literal)
     * @param mapper
     * @param instance Optional, if not set a new instance of will be created.
     */
    _metadata_target_store__WEBPACK_IMPORTED_MODULE_2__["TargetStore"].prototype.deserializePlain = function deserializePlain(mapper, instance) {
        var meta = this.getTargetMeta(PlainObject);
        var result = instance || mapper.isCollection ? [] : {};
        meta.deserialize(mapper, result, true);
        return result;
    };
    var MappingTargetMetadata = /** @class */ (function (_super) {
        __extends(MappingTargetMetadata, _super);
        function MappingTargetMetadata() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MappingTargetMetadata.prototype.serialize = function (mapper) {
            return this.transformer.serialize(mapper);
        };
        MappingTargetMetadata.prototype.deserialize = function (mapper, target, plain) {
            if (plain === void 0) { plain = false; }
            if (mapper.isCollection) {
                if (!Array.isArray(target)) {
                    throw _mapping__WEBPACK_IMPORTED_MODULE_4__["TransformationError"].coll_obj(true);
                }
                var refItems = target.splice(0, target.length);
                var identKey_1 = _metadata_target_store__WEBPACK_IMPORTED_MODULE_2__["targetStore"].getIdentityKey(this.target, 'incoming');
                var _loop_1 = function () {
                    var t = void 0;
                    // compare current item to map with a list of items that if we, if we got.
                    // if match use that instance.
                    // TODO: Move compare to the global store, so logic can change without bugs.
                    if (refItems.length > 0 && Object(_fw__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(mapper.getIdentity)) {
                        var incomingIdent_1 = mapper.getIdentity();
                        t = _fw__WEBPACK_IMPORTED_MODULE_6__["array"].findRemove(refItems, function (item) { return item[identKey_1] === incomingIdent_1; });
                    }
                    if (!t) {
                        t = plain ? {} : this_1.model().factory(false);
                    }
                    this_1.transformer.deserialize(mapper, t);
                    target.push(t);
                };
                var this_1 = this;
                while (mapper.next()) {
                    _loop_1();
                }
            }
            else {
                if (Array.isArray(target)) {
                    throw _mapping__WEBPACK_IMPORTED_MODULE_4__["TransformationError"].coll_obj(false);
                }
                this.transformer.deserialize(mapper, target);
            }
        };
        __decorate([
            Object(_fw__WEBPACK_IMPORTED_MODULE_6__["LazyInit"])(function () {
                return new _mapping_target_transformer__WEBPACK_IMPORTED_MODULE_5__["TargetTransformer"](this);
            }),
            __metadata("design:type", _mapping_target_transformer__WEBPACK_IMPORTED_MODULE_5__["TargetTransformer"])
        ], MappingTargetMetadata.prototype, "transformer", void 0);
        return MappingTargetMetadata;
    }(_metadata_target_metadata__WEBPACK_IMPORTED_MODULE_1__["TargetMetadata"]));
    Object(_tdm_tixin__WEBPACK_IMPORTED_MODULE_0__["Tixin"])(_metadata_target_metadata__WEBPACK_IMPORTED_MODULE_1__["TargetMetadata"], MappingTargetMetadata);
}


/***/ }),

/***/ "../../libs/core/tdm/src/lib/add/model/decorator.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/add/model/decorator.ts ***!
  \*******************************************************************************************************/
/*! exports provided: Model, processModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processModel", function() { return processModel; });
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metadata */ "../../libs/core/tdm/src/lib/metadata/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "../../libs/core/tdm/src/lib/add/model/model.ts");



/**
 * @propertyDecorator static
 * @param metaArgs
 */
function Model(metaArgs) {
    return function (target) {
        var metaClass = _fw__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].create(_model__WEBPACK_IMPORTED_MODULE_2__["ModelMetadata"], metaArgs, target);
        processModel(target, metaClass, metaClass.skip !== true);
    };
}
/**
 * Takes a model and process it.
 * The first step is to extend the target, if it inherits.
 * The second step is calling the build() method on the metadata class which will
 * start the event lifecycle.
 */
function processModel(target, metaClass, build) {
    for (var _i = 0, _a = Object(_fw__WEBPACK_IMPORTED_MODULE_0__["getProtoChain"])(target); _i < _a.length; _i++) {
        var proto = _a[_i];
        if (target !== proto && _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].hasTarget(proto)) {
            _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].extend(proto, target);
        }
    }
    if (build) {
        metaClass.build();
    }
}


/***/ }),

/***/ "../../libs/core/tdm/src/lib/add/model/index.ts":
/*!***************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/add/model/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: ModelMetadata, Model, processModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _target_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target-metadata */ "../../libs/core/tdm/src/lib/add/model/target-metadata.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "../../libs/core/tdm/src/lib/add/model/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelMetadata", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["ModelMetadata"]; });

/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator */ "../../libs/core/tdm/src/lib/add/model/decorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _decorator__WEBPACK_IMPORTED_MODULE_2__["Model"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processModel", function() { return _decorator__WEBPACK_IMPORTED_MODULE_2__["processModel"]; });






/***/ }),

/***/ "../../libs/core/tdm/src/lib/add/model/model.ts":
/*!***************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/add/model/model.ts ***!
  \***************************************************************************************************/
/*! exports provided: MODEL_PH, extendSingle, ModelMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_PH", function() { return MODEL_PH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendSingle", function() { return extendSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelMetadata", function() { return ModelMetadata; });
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metadata */ "../../libs/core/tdm/src/lib/metadata/index.ts");
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


var MODEL_PH = Symbol('ModelMetadata placeholder');
// exporting to satisfy angular AOT
/** @internal */
function extendSingle(from, to, meta) {
    if (!to) {
        var tMeta = _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getTargetMeta(meta.to);
        return (tMeta[MODEL_PH] = from.clone(meta.to));
    }
    else {
        Object.keys(from).forEach(function (k) {
            if (!(k in to)) {
                to[k] = from[k];
            }
        });
    }
}
var ModelMetadata = /** @class */ (function (_super) {
    __extends(ModelMetadata, _super);
    function ModelMetadata(metaArgs, info, target) {
        var _this = _super.call(this, info) || this;
        var tMeta = _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getTargetMeta(target);
        /*
        Checking up the proto-tree if there are temp model metadata values set.
        This allows inheritance of model classes where the base class has no class decorator but do have
        member decorators.
    
        ```ts
            class UserBase {
              @Identity()
              @UrlParam() id: number;
            }
    
            @HttpResource({
              endpoint: '/api/users/:id/:param',
              urlParams: { param: '99' }
            })
            class User extends ActiveRecord(UserBase) { }
        ```
    
        In the example, UserBase does not have a class decorator but the derived class User does.
    
        > Note: Stopping on the first prototype that has an instantiated ModelMetadata, we can stop there
        because implementation will invoke `extend` for prototypes and since it's now an instance it will auto-extend.
         */
        var protoChain = Object(_fw__WEBPACK_IMPORTED_MODULE_0__["getProtoChain"])(target);
        for (var i = protoChain.length - 1; i > 0; i--) {
            // we skip idx 0, its the target itself.
            var meta = _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].hasTarget(protoChain[i]) &&
                _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getTargetMeta(protoChain[i]);
            if (meta) {
                if (meta[MODEL_PH] && !meta.hasModel) {
                    Object.assign(_this, meta[MODEL_PH]);
                }
                else if (meta.hasModel) {
                    break;
                }
            }
        }
        var classMetadata = tMeta.hasOwnProperty(MODEL_PH) ? tMeta[MODEL_PH] : {};
        Object.assign(_this, classMetadata, metaArgs || {}, { target: target, tMeta: tMeta } // last obj is for clone, so we won't take previous values
        );
        if (!_this.resName) {
            _this.resName = Object(_fw__WEBPACK_IMPORTED_MODULE_0__["stringify"])(target);
        }
        tMeta[MODEL_PH] = _this;
        return _this;
    }
    ModelMetadata_1 = ModelMetadata;
    Object.defineProperty(ModelMetadata.prototype, "built", {
        get: function () {
            return this._built;
        },
        enumerable: true,
        configurable: true
    });
    ModelMetadata.prototype.clone = function (target) {
        var ctor = this.constructor;
        return new ctor(this, this.decoratorInfo, target);
    };
    ModelMetadata.prototype.factory = function (isColl) {
        return isColl ? this.tMeta.createCollection() : new this.target();
    };
    /**
     * Build the model.
     * @param safe If set to true will not throw if the model is already built.
     * @returns true if the model was built by this call
     */
    ModelMetadata.prototype.build = function (safe) {
        if (this.built) {
            if (safe === true) {
                return false;
            }
            else {
                throw new Error("\"" + Object(_fw__WEBPACK_IMPORTED_MODULE_0__["stringify"])(this.target) + "\" already built.");
            }
        }
        this._built = true;
        _fw__WEBPACK_IMPORTED_MODULE_0__["targetEvents"].FIRE.beforeProcessType(this.target);
        _fw__WEBPACK_IMPORTED_MODULE_0__["targetEvents"].FIRE.processType(this.target);
        return true;
    };
    ModelMetadata = ModelMetadata_1 = __decorate([
        Object(_fw__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['class'],
            single: true,
            extendSingle: extendSingle
        }),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], ModelMetadata);
    return ModelMetadata;
    var ModelMetadata_1;
}(_fw__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/core/tdm/src/lib/add/model/target-metadata.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/add/model/target-metadata.ts ***!
  \*************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../metadata */ "../../libs/core/tdm/src/lib/metadata/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "../../libs/core/tdm/src/lib/add/model/model.ts");


Object.defineProperty(_metadata__WEBPACK_IMPORTED_MODULE_0__["TargetMetadata"].prototype, 'model', {
    value: function () {
        // this[MODEL_PH] is set from ModelMetadata constructor
        // if not set, create one to act as temporary placeholder until set.
        // ModelMetadata will grab the data on the placeholder and take it into account
        return this[_model__WEBPACK_IMPORTED_MODULE_1__["MODEL_PH"]] || (this[_model__WEBPACK_IMPORTED_MODULE_1__["MODEL_PH"]] = {});
    }
});
Object.defineProperty(_metadata__WEBPACK_IMPORTED_MODULE_0__["TargetMetadata"].prototype, 'hasModel', {
    get: function () {
        return this[_model__WEBPACK_IMPORTED_MODULE_1__["MODEL_PH"]] instanceof _model__WEBPACK_IMPORTED_MODULE_1__["ModelMetadata"];
    }
});


/***/ }),

/***/ "../../libs/core/tdm/src/lib/add/target-store/index.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/add/target-store/index.ts ***!
  \**********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fw_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fw/utils */ "../../libs/core/tdm/src/lib/fw/utils.ts");
/* harmony import */ var _fw_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fw/events */ "../../libs/core/tdm/src/lib/fw/events.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metadata */ "../../libs/core/tdm/src/lib/metadata/index.ts");
/* harmony import */ var _add_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../add/model */ "../../libs/core/tdm/src/lib/add/model/index.ts");




// set the name for name lookup
_metadata__WEBPACK_IMPORTED_MODULE_2__["targetStore"].on.processType(function (target) {
    var model = _metadata__WEBPACK_IMPORTED_MODULE_2__["targetStore"].getTargetMeta(target).model();
    if (model) {
        // TODO: make this type safe
        _metadata__WEBPACK_IMPORTED_MODULE_2__["targetStore"]['namedTargets'].set(model.resName, target);
    }
});
_metadata__WEBPACK_IMPORTED_MODULE_2__["TargetMetadata"].prototype.getIdentityKey = function getIdentityKey(direction) {
    return _metadata__WEBPACK_IMPORTED_MODULE_2__["targetStore"].getIdentityKey(this.target, direction);
};
_metadata__WEBPACK_IMPORTED_MODULE_2__["TargetStore"].prototype.getTargetName = function getTargetName(target) {
    return _metadata__WEBPACK_IMPORTED_MODULE_2__["targetStore"].getMetaFor(target, _add_model__WEBPACK_IMPORTED_MODULE_3__["ModelMetadata"], true, 'resName');
};
_metadata__WEBPACK_IMPORTED_MODULE_2__["TargetStore"].prototype.getTargetMeta = function getTargetMeta(target) {
    var meta = this.builtTargets.get(target);
    if (!meta) {
        var metaArgs = this.targets.get(target);
        if (!metaArgs) {
            this.registerTarget(target);
            return this.getTargetMeta(target);
        }
        meta = new _metadata__WEBPACK_IMPORTED_MODULE_2__["TargetMetadata"](target, metaArgs);
        this.builtTargets.set(target, meta);
        _fw_events__WEBPACK_IMPORTED_MODULE_1__["targetEvents"].FIRE.createMetadata(target);
    }
    return meta;
};
_metadata__WEBPACK_IMPORTED_MODULE_2__["TargetStore"].prototype.getIdentityKey = function getIdentityKey(target, direction) {
    var meta = this.getTargetMeta(target);
    var model = meta.model();
    var identity = model.identity;
    if (identity) {
        if (!direction) {
            return identity;
        }
        var propMeta = meta.getMetaFor(_metadata__WEBPACK_IMPORTED_MODULE_2__["PropMetadata"], identity);
        // apply naming strategy when DONT HAVE ALIAS!
        if (propMeta.name === propMeta.alias[direction]) {
            var transformNameStrategy = model.transformNameStrategy;
            if (transformNameStrategy &&
                Object(_fw_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(transformNameStrategy[direction])) {
                // in exclusive mode there is no point in have 2 transformation strategies.
                // incoming is never there since incoming keys are not calculated, only defined Props.
                if (model.transformStrategy === 'exclusive') {
                    direction = 'outgoing';
                }
                return transformNameStrategy[direction](propMeta.name);
            }
        }
        return direction === 'outgoing'
            ? propMeta.alias.outgoing
            : propMeta.alias.incoming;
    }
};


/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/base-metadata.ts":
/*!****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/base-metadata.ts ***!
  \****************************************************************************************************/
/*! exports provided: BaseMetadata, BaseParamMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseMetadata", function() { return BaseMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseParamMetadata", function() { return BaseParamMetadata; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../libs/core/tdm/src/lib/fw/utils.ts");
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

var BaseMetadata = /** @class */ (function () {
    function BaseMetadata(decoratorInfo) {
        this.decoratorInfo = decoratorInfo;
        this.name = decoratorInfo.name;
    }
    return BaseMetadata;
}());

var BaseParamMetadata = /** @class */ (function (_super) {
    __extends(BaseParamMetadata, _super);
    function BaseParamMetadata(di, target) {
        var _this = _super.call(this, di) || this;
        _this.paramType = _utils__WEBPACK_IMPORTED_MODULE_0__["reflection"].paramTypes(target.prototype, _this.name)[di.paramIndex];
        return _this;
    }
    Object.defineProperty(BaseParamMetadata.prototype, "paramIndex", {
        get: function () {
            return this.decoratorInfo.paramIndex;
        },
        enumerable: true,
        configurable: true
    });
    return BaseParamMetadata;
}(BaseMetadata));



/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/errors.ts":
/*!*********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/errors.ts ***!
  \*********************************************************************************************/
/*! exports provided: Errors, errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../libs/core/tdm/src/lib/fw/utils.ts");

var ERROR_EXEC_TYPE = Symbol('Throw');
var Errors = /** @class */ (function () {
    function Errors() {
        // support for post instantiation mixins on the prototype (plugins) - don't use new.
        Errors.create(this);
    }
    Object.defineProperty(Errors.prototype, "throw", {
        /**
         * Returns a marked Errors repository where the next call to an error object will throw.
         *
         * e.g. `errors.THROW().decorator(...)` will throw
         */
        get: function () {
            return Object.assign(Object.create(this), (_a = {}, _a[ERROR_EXEC_TYPE] = 'throw', _a));
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    Errors.prototype.decorator = function (target, message, propertyName) {
        var CLS = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(target) ? target : target.constructor;
        if (!propertyName) {
            return this.ERROR("Invalid decorator @ " + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(CLS) + "}: " + message);
        }
        else {
            var dot = CLS === target ? '#' : '.';
            return this.ERROR("Invalid decorator @ " + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(target) + dot + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(propertyName) + ": " + message);
        }
    };
    Errors.prototype.model = function (model, message) {
        return this.ERROR("Model Error [" + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(model) + "]: " + message);
    };
    Errors.prototype.modelSingleCol = function (model, expectedCol) {
        return this.ERROR( true
            ? "Expected a COLLECTION but got an OBJECT [Target: " + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(model) + "]"
            : undefined);
    };
    /**
     * @internal
     */
    Errors.prototype.ERROR = function (message, assign) {
        var err = new Error(message);
        if (assign) {
            Object.assign(err, assign);
        }
        if (this[ERROR_EXEC_TYPE] === 'throw') {
            throw err;
        }
        else {
            return err;
        }
    };
    /**
     * Creates a new TargetStore instance.
     * @param instance optional, used internally
     */
    Errors.create = function (instance) {
        var errors = instance || Object.create(Errors.prototype);
        return errors;
    };
    return Errors;
}());

var errors = Errors.create();


/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/events.ts":
/*!*********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/events.ts ***!
  \*********************************************************************************************/
/*! exports provided: TargetEvents, EVENT_FIRE, targetEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetEvents", function() { return TargetEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_FIRE", function() { return EVENT_FIRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetEvents", function() { return targetEvents; });
/* harmony import */ var _set_map_ext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-map-ext */ "../../libs/core/tdm/src/lib/fw/set-map-ext.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../libs/core/tdm/src/lib/fw/utils.ts");


var eventHandlers = new _set_map_ext__WEBPACK_IMPORTED_MODULE_0__["KeySet"]();
var metaInitHandlers = new _set_map_ext__WEBPACK_IMPORTED_MODULE_0__["KeySet"]();
/**
 * Event listeners registration object for lifecycle metadata events on a target.
 *
 * @pluginApi
 * @mixable
 * @singleton
 */
var TargetEvents = /** @class */ (function () {
    function TargetEvents() {
        // support for post instantiation mixins on the prototype (plugins) - don't use new.
        TargetEvents.create(this);
    }
    TargetEvents.prototype.metaInit = function (metaClass) {
        return {
            run: function (handler) {
                metaInitHandlers.add(metaClass, handler);
            }
        };
    };
    /**
     * Fired when the {@link TargetMetadata} instance is created for the target)
     *
     * FireBefore: processType
     */
    TargetEvents.prototype.createMetadata = function (handler) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(handler)) {
            eventHandlers.add('createMetadata', handler);
        }
    };
    /**
     * Fired before the type is processed, after extending all metadata.
     * This event is not guaranteed to fire, it will fire only if the type is decorated with an appropriate decorator.
     *
     * FireAfter: createMetadata
     * FireBefore: processType
     */
    TargetEvents.prototype.beforeProcessType = function (handler) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(handler)) {
            eventHandlers.add('beforeProcessType', handler);
        }
    };
    /**
     * Fired when the type is processed, after extending all metadata.
     * This event is not guaranteed to fire, it will fire only if the type is decorated with an appropriate decorator.
     *
     * FireAfter: beforeProcessType
     */
    TargetEvents.prototype.processType = function (handler) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(handler)) {
            eventHandlers.add('processType', handler);
        }
    };
    TargetEvents.create = function (instance) {
        var targetStore = instance || Object.create(TargetEvents.prototype);
        targetStore.FIRE = EVENT_FIRE;
        return targetStore;
    };
    return TargetEvents;
}());

var EVENT_FIRE = {
    metaInit: function (metaClass, target, value, metaArgs) {
        var eventMap = metaInitHandlers.get(metaClass);
        if (eventMap) {
            Array.from(eventMap.values()).forEach(function (handler) {
                return handler(target, value, metaArgs);
            });
        }
    },
    createMetadata: function (target) {
        return fireTargetEvent('createMetadata', target);
    },
    beforeProcessType: function (target) {
        return fireTargetEvent('beforeProcessType', target);
    },
    processType: function (target) {
        return fireTargetEvent('processType', target);
    }
};
var targetEvents = TargetEvents.create();
function fireTargetEvent(event, target) {
    var eventMap = eventHandlers.get(event);
    if (eventMap) {
        Array.from(eventMap.values()).forEach(function (handler) { return handler(target); });
    }
}


/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/index.ts":
/*!********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/index.ts ***!
  \********************************************************************************************/
/*! exports provided: Errors, errors, DualKeyMap, KeySet, SetExt, MapExt, isNumber, isString, isFunction, isStaticDecorator, isUndefined, ensureTargetIsType, isJsObject, isPrimitive, stringify, reflection, LazyInit, array, getProtoChain, getBaseClass, BaseMetadata, BaseParamMetadata, propAliasConfig, propTransformConfig, TargetEvents, EVENT_FIRE, targetEvents, lazyRef, GLOBAL_KEY, MetaClassMetadata, getMetaClass, MetaClass, decoratorInfo, registerHelpers, extendHelpers, setMetaHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "../../libs/core/tdm/src/lib/fw/errors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__["Errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__["errors"]; });

/* harmony import */ var _set_map_ext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-map-ext */ "../../libs/core/tdm/src/lib/fw/set-map-ext.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DualKeyMap", function() { return _set_map_ext__WEBPACK_IMPORTED_MODULE_1__["DualKeyMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeySet", function() { return _set_map_ext__WEBPACK_IMPORTED_MODULE_1__["KeySet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetExt", function() { return _set_map_ext__WEBPACK_IMPORTED_MODULE_1__["SetExt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapExt", function() { return _set_map_ext__WEBPACK_IMPORTED_MODULE_1__["MapExt"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../../libs/core/tdm/src/lib/fw/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStaticDecorator", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isStaticDecorator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensureTargetIsType", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["ensureTargetIsType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJsObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isJsObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["stringify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reflection", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["reflection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyInit", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["LazyInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "array", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["array"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProtoChain", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["getProtoChain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBaseClass", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["getBaseClass"]; });

/* harmony import */ var _base_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-metadata */ "../../libs/core/tdm/src/lib/fw/base-metadata.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseMetadata", function() { return _base_metadata__WEBPACK_IMPORTED_MODULE_3__["BaseMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseParamMetadata", function() { return _base_metadata__WEBPACK_IMPORTED_MODULE_3__["BaseParamMetadata"]; });

/* harmony import */ var _normalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normalize */ "../../libs/core/tdm/src/lib/fw/normalize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propAliasConfig", function() { return _normalize__WEBPACK_IMPORTED_MODULE_4__["propAliasConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propTransformConfig", function() { return _normalize__WEBPACK_IMPORTED_MODULE_4__["propTransformConfig"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events */ "../../libs/core/tdm/src/lib/fw/events.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetEvents", function() { return _events__WEBPACK_IMPORTED_MODULE_5__["TargetEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENT_FIRE", function() { return _events__WEBPACK_IMPORTED_MODULE_5__["EVENT_FIRE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetEvents", function() { return _events__WEBPACK_IMPORTED_MODULE_5__["targetEvents"]; });

/* harmony import */ var _lazy_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazy-ref */ "../../libs/core/tdm/src/lib/fw/lazy-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazyRef", function() { return _lazy_ref__WEBPACK_IMPORTED_MODULE_6__["lazyRef"]; });

/* harmony import */ var _metadata_framework_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metadata-framework/index */ "../../libs/core/tdm/src/lib/fw/metadata-framework/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_KEY", function() { return _metadata_framework_index__WEBPACK_IMPORTED_MODULE_7__["GLOBAL_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaClassMetadata", function() { return _metadata_framework_index__WEBPACK_IMPORTED_MODULE_7__["MetaClassMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMetaClass", function() { return _metadata_framework_index__WEBPACK_IMPORTED_MODULE_7__["getMetaClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaClass", function() { return _metadata_framework_index__WEBPACK_IMPORTED_MODULE_7__["MetaClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decoratorInfo", function() { return _metadata_framework_index__WEBPACK_IMPORTED_MODULE_7__["decoratorInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerHelpers", function() { return _metadata_framework_index__WEBPACK_IMPORTED_MODULE_7__["registerHelpers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendHelpers", function() { return _metadata_framework_index__WEBPACK_IMPORTED_MODULE_7__["extendHelpers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMetaHelper", function() { return _metadata_framework_index__WEBPACK_IMPORTED_MODULE_7__["setMetaHelper"]; });











/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/lazy-ref.ts":
/*!***********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/lazy-ref.ts ***!
  \***********************************************************************************************/
/*! exports provided: lazyRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyRef", function() { return lazyRef; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../libs/core/tdm/src/lib/fw/utils.ts");
/**
 * Same as angular's `forwardRef`, different name to prevent confusion / collusion.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var lazyRefKey = Symbol('lazyRef');
var toString = function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(this());
};
/**
 * Allows to refer to references which are not yet defined.
 *
 * For instance, `lazyRef` is used when the `token` which we need to refer to for the purposes of
 * DI is declared,
 * but not yet defined. It is also used when the `token` which we use when creating a query is not
 * yet defined.
 *
 * ### Example
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
 * @experimental
 */
function lazyRef(lazyRefFn) {
    lazyRefFn[lazyRefKey] = lazyRef;
    lazyRefFn.toString = toString;
    return lazyRefFn;
}
(function (lazyRef) {
    /**
     * Lazily retrieves the reference value from a lazyRef.
     *
     * Acts as the identity function when given a non-forward-ref value.
     *
     * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
     *
     * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
     *
     * See: {@link lazyRef}
     * @experimental
     */
    function resolve(type) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(type) && type[lazyRefKey] === lazyRef ? type() : type;
    }
    lazyRef.resolve = resolve;
})(lazyRef || (lazyRef = {}));


/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/metadata-framework/index.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/metadata-framework/index.ts ***!
  \***************************************************************************************************************/
/*! exports provided: GLOBAL_KEY, MetaClassMetadata, getMetaClass, MetaClass, decoratorInfo, registerHelpers, extendHelpers, setMetaHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meta_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta-class */ "../../libs/core/tdm/src/lib/fw/metadata-framework/meta-class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_KEY", function() { return _meta_class__WEBPACK_IMPORTED_MODULE_0__["GLOBAL_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaClassMetadata", function() { return _meta_class__WEBPACK_IMPORTED_MODULE_0__["MetaClassMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMetaClass", function() { return _meta_class__WEBPACK_IMPORTED_MODULE_0__["getMetaClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaClass", function() { return _meta_class__WEBPACK_IMPORTED_MODULE_0__["MetaClass"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../libs/core/tdm/src/lib/fw/metadata-framework/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decoratorInfo", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["decoratorInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerHelpers", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["registerHelpers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendHelpers", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["extendHelpers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMetaHelper", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["setMetaHelper"]; });

/* harmony import */ var _meta_class_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta-class-get */ "../../libs/core/tdm/src/lib/fw/metadata-framework/meta-class-get.ts");





/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/metadata-framework/meta-class-get.ts":
/*!************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/metadata-framework/meta-class-get.ts ***!
  \************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meta_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta-class */ "../../libs/core/tdm/src/lib/fw/metadata-framework/meta-class.ts");

_meta_class__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].get = _meta_class__WEBPACK_IMPORTED_MODULE_0__["getMetaClass"];


/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/metadata-framework/meta-class.ts":
/*!********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/metadata-framework/meta-class.ts ***!
  \********************************************************************************************************************/
/*! exports provided: GLOBAL_KEY, MetaClassMetadata, getMetaClass, MetaClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_KEY", function() { return GLOBAL_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaClassMetadata", function() { return MetaClassMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetaClass", function() { return getMetaClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaClass", function() { return MetaClass; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "../../libs/core/tdm/src/lib/fw/utils.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "../../libs/core/tdm/src/lib/fw/events.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../../libs/core/tdm/src/lib/fw/metadata-framework/utils.ts");
// This is a core class with lot's of type crazy stuff, enforcing max-line-length will create an unreadable mess
// tslint:disable:max-line-length



var store = new Map();
/**
 * A token representing single items (see {@link MetaClassMetadataArgs.single})
 * Use this token as a key for single items in TargetMetadata
 */
var GLOBAL_KEY = /** @class */ (function () {
    function GLOBAL_KEY() {
    }
    return GLOBAL_KEY;
}()); // tslint:disable-line:class-name

/**
 * Represents management and control logic for metadata class's
 */
// tslint:disable-next-line:max-classes-per-file
var MetaClassMetadata = /** @class */ (function () {
    function MetaClassMetadata(target, metaArgs) {
        this.target = target;
        this.metaArgs = metaArgs;
        this.proxyTo = [];
        if (!this.metaArgs) {
            this.metaArgs = {};
        }
        else {
            if (metaArgs.inherit) {
                this.metaArgs = metaArgs = Object.assign({}, MetaClass.get(metaArgs.inherit).metaArgs, metaArgs);
            }
            if (metaArgs.factory) {
                this.factory = metaArgs.factory;
            }
            if (metaArgs.register) {
                if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(metaArgs.register)) {
                    this.register = _utils__WEBPACK_IMPORTED_MODULE_2__["registerHelpers"][metaArgs.register];
                }
                else if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(metaArgs.register)) {
                    this.register = metaArgs.register;
                }
            }
            if (metaArgs.proxy) {
                var proxy = metaArgs.proxy;
                proxy.metaClass = this;
                MetaClass.get(metaArgs.proxy.host).proxyTo.push(proxy);
            }
            if (metaArgs.extend) {
                if (metaArgs.single === true) {
                    // TODO: make error message clear;
                    throw new Error('Extending a single class is done using extendSingle');
                }
                if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(metaArgs.extend)) {
                    this.extend = _utils__WEBPACK_IMPORTED_MODULE_2__["extendHelpers"][metaArgs.extend];
                }
                else if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(metaArgs.extend)) {
                    this.extend = metaArgs.extend;
                }
            }
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(metaArgs.extendSingle)) {
                if (metaArgs.single !== true) {
                    // TODO: make error message clear;
                    throw new Error('Extending a non-single class is done using extend');
                }
                this.extendSingle = metaArgs.extendSingle;
            }
        }
    }
    /**
     * Create a new instance of the metadata class
     * @param metaArgs
     * @param target
     * @param key
     * @param desc
     * @returns
     */
    MetaClassMetadata.prototype.create = function (metaArgs, target, key, desc) {
        return this.createCurry(metaArgs, target, key, desc)();
    };
    MetaClassMetadata.prototype.createCurry = function (metaArgs, target, key, desc) {
        var _this = this;
        var info = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["decoratorInfo"])(target, key, desc);
        var allowOn = this.metaArgs.allowOn;
        if (allowOn && allowOn.length > 0) {
            if (info.type === 'class') {
                if (allowOn.indexOf('class') === -1) {
                    throw new Error("Metadata class " + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(this.target) + " can not decorate a class (" + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(target) + ")");
                }
            }
            else if (info.isStatic) {
                if (allowOn.indexOf('staticMember') === -1) {
                    throw new Error("Metadata class " + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(this.target) + " can not decorate a static member (" + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(target) + "#" + key + ")");
                }
            }
            else if (info.type === 'param') {
                if (allowOn.indexOf('param') === -1) {
                    throw new Error("Metadata class " + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(this.target) + " can not decorate a param (" + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(target) + "#" + key + ")");
                }
            }
            else {
                if (allowOn.indexOf('member') === -1) {
                    throw new Error("Metadata class " + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(this.target) + " can not decorate an instance member " +
                        ("(" + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stringify"])(target.constructor) + "." + key + ")"));
                }
            }
        }
        var meta = this.factory(metaArgs, target, info, key, desc);
        var curry = (function (_meta) {
            if (!_meta) {
                _meta = meta;
            }
            // in case factory return undefined
            if (!_meta) {
                return;
            }
            _this.register(_meta);
            var chain = _this.singleChain(_meta);
            if (chain) {
                // we use this class's register implementation for all
                chain.forEach(function (c) { return _this.register(c); });
            }
            _events__WEBPACK_IMPORTED_MODULE_1__["targetEvents"].FIRE.metaInit(_meta.metaClassKey, _meta.target, _meta.metaValue, metaArgs);
            var proxies = _this.findProxies(metaArgs);
            proxies.forEach(function (ra) {
                if (ra) {
                    // we check since findProxies returns undefined when no key on metadata arguments was found
                    for (var i = 0, len = ra.args.length; i < len; i++) {
                        ra.meta.create(ra.args[i], target, key, desc);
                    }
                }
            });
            return meta && meta.metaValue;
        });
        curry.meta = meta;
        return curry;
    };
    MetaClassMetadata.prototype.createDecorator = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (function (def) {
            return function (target, key, desc) {
                _this.create(def, target, key, desc);
            };
        });
    };
    /**
     * @internal
     */
    MetaClassMetadata.prototype.factory = function (metaArgs, target, info, key, desc) {
        var type = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["ensureTargetIsType"])(target);
        var meta = {
            info: info,
            target: type,
            metaClassKey: this.target,
            metaPropKey: this.metaArgs.single === true ? GLOBAL_KEY : info.name,
            metaValue: new this.target(metaArgs, info, type)
        };
        return meta;
    };
    /**
     * Given a MetaClassInstanceDetails, if its a single metadata (single) and has a chain (inherit)
     * it will go up the chain and create MetaClassInstanceDetails that match the given one just with
     * the inherited class as the metaClass property.
     *
     * This is used to allow registering inheriting single metadata classes.
     * For example, a ModelMetadata might get extended by an adapter resource, the only metadata class
     * registered is the extending one, if we will not register the ModelMetadata token as well logic
     * that expects to find it will fail.
     * @param meta
     * @returns
     */
    MetaClassMetadata.prototype.singleChain = function (meta) {
        if (this.metaArgs.single === true && this.metaArgs.inherit) {
            var parentMeta = Object.create(meta);
            parentMeta.metaClassKey = this.metaArgs.inherit;
            var deep = getMetaClass(this.metaArgs.inherit).singleChain(meta);
            return deep ? [parentMeta].concat(deep) : [parentMeta];
        }
    };
    MetaClassMetadata.prototype.findProxies = function (metaArgs) {
        var results = [];
        if (metaArgs) {
            // we need to take into account parent metadata
            if (this.metaArgs.inherit) {
                results.splice.apply(results, [0,
                    0].concat(MetaClass.get(this.metaArgs.inherit).findProxies(metaArgs)));
            }
            var local = this.proxyTo.map(function (proxy) {
                if (metaArgs.hasOwnProperty(proxy.containerKey)) {
                    var myMetaArgs = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(proxy.before)
                        ? proxy.before(metaArgs[proxy.containerKey])
                        : metaArgs[proxy.containerKey];
                    delete metaArgs[proxy.containerKey];
                    return proxy.forEach === true && Array.isArray(myMetaArgs)
                        ? { meta: proxy.metaClass, args: myMetaArgs }
                        : { meta: proxy.metaClass, args: [myMetaArgs] };
                }
            });
            results.splice.apply(results, [results.length, 0].concat(local));
        }
        return results;
    };
    /**
     * A factory for {@link MetaClassMetadata} instances
     *
     * > This will create an instance of a metadata class container.
     * A Metadata container can create instances of the metadata class it "contains", thus, the instance
     * returned from the static `create` method also has a 'create' method however that instance level
     * `create` method is a factory for instance of the metadata class, not the container.
     *
     * @param target
     * @param metaArgs
     * @returns
     */
    MetaClassMetadata.create = function (target, metaArgs) {
        return new MetaClassMetadata(target, metaArgs);
    };
    return MetaClassMetadata;
}());

function getMetaClass(target) {
    return store.get(target);
}
function MetaClass(metaArgs) {
    return function (target) {
        store.set(target, MetaClassMetadata.create(target, metaArgs));
    };
}
// tslint:disable-next-line:no-namespace
(function (MetaClass) {
    /**
     * Creates a metadata class instance.
     * This is a shortcut for `MetaClass.get(MyMetadataClass).create(...);
     * @param metaClass
     * @param metaArgs
     * @param target
     * @param key
     * @param desc
     */
    function create(metaClass, metaArgs, target, key, desc) {
        return store.get(metaClass).create(metaArgs, target, key, desc);
    }
    MetaClass.create = create;
    function decorator(metaClass) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return store.get(metaClass).createDecorator();
    }
    MetaClass.decorator = decorator;
    function defaultRegistrator(fn) {
        MetaClassMetadata.prototype['register'] = fn;
    }
    MetaClass.defaultRegistrator = defaultRegistrator;
})(MetaClass || (MetaClass = {}));


/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/metadata-framework/utils.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/metadata-framework/utils.ts ***!
  \***************************************************************************************************************/
/*! exports provided: decoratorInfo, registerHelpers, extendHelpers, setMetaHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decoratorInfo", function() { return decoratorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerHelpers", function() { return registerHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendHelpers", function() { return extendHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMetaHelper", function() { return setMetaHelper; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "../../libs/core/tdm/src/lib/fw/utils.ts");

function decoratorInfo() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(args[0]) && !args[1]) {
        // target is function and key is not set
        return { type: 'class' };
    }
    else {
        var type = args.length === 3 && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(args[2]) ? 'param' : 'member';
        var result = {
            type: type,
            name: args[1],
            isStatic: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isStaticDecorator"])(args[0]),
            hasDescriptor: args.length === 3 && type === 'member'
        };
        if (type === 'param') {
            result.paramIndex = args[2];
        }
        return result;
    }
}
var registerHelpers = {};
var extendHelpers = {};
function setMetaHelper(type, name, helperFn) {
    switch (type) {
        case 'extend':
            extendHelpers[name] = helperFn;
            break;
        case 'register':
            registerHelpers[name] = helperFn;
            break;
        default:
            break;
    }
}


/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/normalize.ts":
/*!************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/normalize.ts ***!
  \************************************************************************************************/
/*! exports provided: propAliasConfig, propTransformConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propAliasConfig", function() { return propAliasConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTransformConfig", function() { return propTransformConfig; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../libs/core/tdm/src/lib/fw/utils.ts");

function propAliasConfig(from, fallback) {
    var incoming, outgoing;
    if (!from) {
        incoming = outgoing = fallback;
    }
    else if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(from)) {
        incoming = outgoing = from;
    }
    else {
        incoming = from.incoming || fallback;
        outgoing = from.outgoing || fallback;
    }
    return { incoming: incoming, outgoing: outgoing };
}
function propTransformConfig(from) {
    var incoming, outgoing;
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(from)) {
        incoming = outgoing = from;
    }
    else if (from) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(from.incoming)) {
            incoming = from.incoming;
        }
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(from.outgoing)) {
            outgoing = from.outgoing;
        }
    }
    return { incoming: incoming, outgoing: outgoing };
}


/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/set-map-ext.ts":
/*!**************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/set-map-ext.ts ***!
  \**************************************************************************************************/
/*! exports provided: DualKeyMap, KeySet, SetExt, MapExt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DualKeyMap", function() { return DualKeyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeySet", function() { return KeySet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetExt", function() { return SetExt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapExt", function() { return MapExt; });
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
var emptyIterator = (_a = {
        next: function () {
            return { value: null, done: true };
        }
    },
    _a[Symbol.iterator] = function () {
        return emptyIterator;
    },
    _a);
// TODO: move to separate package along with other utils on @tdm/core
/**
 * A dual map, key->key->value
 */
var DualKeyMap = /** @class */ (function () {
    function DualKeyMap() {
        this.map = new Map();
        this[Symbol.toStringTag] = 'Map';
    }
    DualKeyMap.prototype.has = function (type, id) {
        if (id === undefined) {
            return this.map.has(type);
        }
        else {
            var t = this.map.get(type);
            return t ? t.has(id) : false;
        }
    };
    DualKeyMap.prototype.get = function (type, id) {
        var t = this.map.get(type);
        return id === undefined ? t : t && t.get(id);
    };
    DualKeyMap.prototype.delete = function (type, id) {
        if (id === undefined) {
            return this.map.delete(type);
        }
        else {
            var t = this.map.get(type);
            return !(t && t.delete(id));
        }
    };
    DualKeyMap.prototype.set = function (type, idOrMap, value) {
        if (idOrMap instanceof Map) {
            if (arguments.length === 2) {
                this.map.set(type, idOrMap);
            }
        }
        else {
            var t = this.map.get(type) || new Map();
            t.set(idOrMap, value);
            this.map.set(type, t);
        }
    };
    DualKeyMap.prototype.clear = function (type) {
        if (type === undefined) {
            this.map.clear();
        }
        {
            var t = this.map.get(type);
            t && t.clear();
        }
    };
    DualKeyMap.prototype.forEach = function (callbackfn, type, thisArg) {
        if (callbackfn === true) {
            this.map.forEach(type, thisArg);
        }
        else {
            var t = this.map.get(type);
            t && t.forEach(callbackfn, thisArg);
        }
    };
    DualKeyMap.prototype.entries = function (type) {
        if (type === undefined) {
            return this.map.entries();
        }
        else {
            var t = this.map.get(type);
            return t ? t.entries() : this.makeEmptyIterator();
        }
    };
    DualKeyMap.prototype.keys = function (type) {
        if (type === undefined) {
            return this.map.keys();
        }
        else {
            var t = this.map.get(type);
            return t ? t.keys() : this.makeEmptyIterator();
        }
    };
    DualKeyMap.prototype.values = function (type) {
        if (type === undefined) {
            return this.map.values();
        }
        else {
            var t = this.map.get(type);
            return t ? t.values() : this.makeEmptyIterator();
        }
    };
    Object.defineProperty(DualKeyMap.prototype, "size", {
        get: function () {
            return this.map.size;
        },
        enumerable: true,
        configurable: true
    });
    DualKeyMap.prototype.sizeOf = function (type) {
        var t = this.map.get(type);
        return t ? t.size : 0;
    };
    DualKeyMap.prototype.makeEmptyIterator = function () {
        return emptyIterator;
    };
    DualKeyMap.prototype[Symbol.iterator] = function () {
        return this.map[Symbol.iterator]();
    };
    return DualKeyMap;
}());

/**
 * The child of Map and Set
 */
var KeySet = /** @class */ (function () {
    function KeySet() {
        this.map = new Map();
    }
    KeySet.prototype.has = function (key, value) {
        if (arguments.length === 1) {
            return this.map.has(key);
        }
        else {
            var t = this.map.get(key);
            return t ? t.has(value) : false;
        }
    };
    KeySet.prototype.get = function (key, index) {
        if (arguments.length === 1) {
            return this.map.get(key);
        }
        else {
            var set = this.map.get(key);
            if (set) {
                return SetExt.index(set, index);
            }
        }
    };
    /**
     * Set's the Set for a key.
     * @param key
     * @param set An optional set, if not supplied a new Set is created.
     */
    KeySet.prototype.set = function (key, set) {
        if (!set) {
            set = new Set();
        }
        this.map.set(key, set);
        return set;
    };
    KeySet.prototype.add = function (key, value) {
        var t = this.map.get(key) || new Set();
        t.add(value);
        this.map.set(key, t);
        return this;
    };
    KeySet.prototype.clear = function (key) {
        if (!key) {
            this.map.clear();
        }
        else {
            var t = this.map.get(key);
            t && t.clear();
        }
    };
    KeySet.prototype.delete = function (key, value) {
        if (arguments.length === 1) {
            return this.delete(key);
        }
        else {
            var t = this.map.get(key);
            return t ? t.delete(value) : false;
        }
    };
    KeySet.prototype.forEach = function (key, callbackfn, thisArg) {
        var t = this.map.get(key);
        if (t) {
            t.forEach(callbackfn, thisArg);
        }
    };
    Object.defineProperty(KeySet.prototype, "size", {
        /**
         * Returns the amount of map entries
         */
        get: function () {
            return this.map.size;
        },
        enumerable: true,
        configurable: true
    });
    KeySet.prototype.sizeOf = function (key) {
        var t = this.map.get(key);
        return t ? t.size : 0;
    };
    return KeySet;
}());

var SetExt = /** @class */ (function (_super) {
    __extends(SetExt, _super);
    function SetExt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SetExt.prototype.first = function () {
        return SetExt.first(this);
    };
    SetExt.prototype.index = function (index) {
        return SetExt.index(this, index);
    };
    SetExt.prototype.asArray = function () {
        return SetExt.asArray(this);
    };
    SetExt.prototype.isSuperset = function (subset) {
        return SetExt.isSuperset(this, subset);
    };
    SetExt.prototype.combine = function () {
        var source = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            source[_i] = arguments[_i];
        }
        SetExt.combine.apply(SetExt, [this].concat(source));
    };
    /**
     * Deduct all of the sources
     * @param source
     * returns the target
     */
    SetExt.prototype.deduct = function () {
        var source = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            source[_i] = arguments[_i];
        }
        SetExt.deduct.apply(SetExt, [this].concat(source));
    };
    SetExt.prototype.union = function () {
        var source = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            source[_i] = arguments[_i];
        }
        return SetExt.union.apply(SetExt, [SetExt, this].concat(source));
    };
    /**
     * Returns all the items that were in this set and the supplied set.
     * @param setA
     * @param setB
     * @param initSetExt
     */
    SetExt.prototype.intersection = function (set) {
        return SetExt.intersection(this, set, true);
    };
    /**
     * Returns all the items that are in this set, but not in the target set.
     * Returns a new SetExt instance.
     * @param set
     * @returns
     */
    SetExt.prototype.difference = function (set) {
        return SetExt.difference(this, set, true);
    };
    /**
     * Returns all the items that were not in this set and the supplied set.
     * Returns a new SetExt instance.
     * @param set
     * @returns
     */
    SetExt.prototype.negative = function (set) {
        return SetExt.negative(this, set, true);
    };
    SetExt.first = function (set) {
        return set.values().next().value;
    };
    SetExt.index = function (set, index) {
        var iterator = set.values();
        for (var i = 0; i < index; i++) {
            if (iterator.next().done) {
                return undefined;
            }
        }
        return iterator.next().value;
    };
    SetExt.asArray = function (set) {
        return Array.from(set);
    };
    SetExt.isSuperset = function (set, subset) {
        return !SetExt.asArray(subset).some(function (v) { return !set.has(v); });
    };
    SetExt.combine = function (target) {
        var source = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            source[_i - 1] = arguments[_i];
        }
        for (var i = 0, len = source.length; i < len; i++) {
            var arr = Array.isArray(source[i])
                ? source[i]
                : SetExt.asArray(source[i]);
            for (var z = 0, lenZ = arr.length; z < lenZ; z++) {
                if (!target.has(arr[z])) {
                    target.add(arr[z]);
                }
            }
        }
        return target;
    };
    /**
     * Deduct all of the sources from the target.
     * @param target
     * @param source
     * returns the target
     */
    SetExt.deduct = function (target) {
        var source = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            source[_i - 1] = arguments[_i];
        }
        for (var i = 0, len = source.length; i < len; i++) {
            var arr = SetExt.asArray(source[i]);
            for (var z = 0, lenZ = arr.length; z < lenZ; z++) {
                target.delete(arr[z]);
            }
        }
        return target;
    };
    SetExt.union = function () {
        var source = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            source[_i] = arguments[_i];
        }
        var union = typeof source[0] === 'function'
            ? new (source.shift())()
            : new Set();
        SetExt.combine.apply(SetExt, [union].concat(source));
        return union;
    };
    /**
     * Returns all the items that were in both sets.
     * @param setA
     * @param setB
     * @param initSetExt
     */
    SetExt.intersection = function (setA, setB, initSetExt) {
        var intersection = initSetExt ? new SetExt() : new Set();
        var arr = SetExt.asArray(setB);
        for (var z = 0, lenZ = arr.length; z < lenZ; z++) {
            if (setA.has(arr[z])) {
                intersection.add(arr[z]);
            }
        }
        return intersection;
    };
    /**
     * Returns all the items that are in source set, but not in the target set.
     * @param source
     * @param target
     * @param initSetExt
     * @returns
     */
    SetExt.difference = function (source, target, initSetExt) {
        var difference = initSetExt
            ? new SetExt(source)
            : new Set(source);
        var arr = SetExt.asArray(target);
        for (var z = 0, lenZ = arr.length; z < lenZ; z++) {
            difference.delete(arr[z]);
        }
        return difference;
    };
    /**
     * Returns all the items that were not in both sets.
     * @param source
     * @param target
     * @param initSetExt
     * @returns
     */
    SetExt.negative = function (source, target, initSetExt) {
        var negative = initSetExt
            ? new SetExt(source)
            : new Set(source);
        var arr = SetExt.asArray(target);
        for (var z = 0, lenZ = arr.length; z < lenZ; z++) {
            if (negative.has(arr[z])) {
                negative.delete(arr[z]);
            }
            else {
                negative.add(arr[z]);
            }
        }
        return negative;
    };
    return SetExt;
}(Set));

var MapExt = /** @class */ (function () {
    function MapExt() {
    }
    /**
     * Merge source map into target map.
     * @param target
     * @param source
     * @param diffOnly if true will only merge keys from source that does not exist on target.
     */
    MapExt.mergeInto = function (target, source, diffOnly) {
        var arr = MapExt.asKeyArray(source);
        for (var i = 0, len = arr.length; i < len; i++) {
            if (!diffOnly || !target.has(arr[i])) {
                target.set(arr[i], source.get(arr[i]));
            }
        }
        return target;
    };
    /**
     * Set the values of an array into a map
     * @param arr
     * @param keySelector A function returning the key to be used in the map
     * @param map The map to set on, optional. If not set a new map is created.
     * @param diffOnly Set only new values, optional. Valid only if a map is supplied.
     * @returns
     */
    MapExt.fromArray = function (arr, keySelector, map, diffOnly) {
        if (!(map instanceof Map)) {
            map = new Map();
            diffOnly = false;
        }
        for (var i = 0, len = arr.length; i < len; i++) {
            var key = keySelector(arr[i]);
            if (!diffOnly || !map.has(key)) {
                map.set(key, arr[i]);
            }
        }
        return map;
    };
    MapExt.asKeyValArray = function (map) {
        return Array.from(map.entries());
    };
    MapExt.asKeyArray = function (map) {
        return Array.from(map.keys());
    };
    MapExt.asValArray = function (map) {
        return Array.from(map.values());
    };
    MapExt.asObjectLiteral = function (map) {
        return MapExt.asKeyArray(map).reduce(function (prev, curr) {
            prev[curr.toString()] = map.get(curr);
            return prev;
        }, {});
    };
    return MapExt;
}());

var _a;


/***/ }),

/***/ "../../libs/core/tdm/src/lib/fw/utils.ts":
/*!********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/fw/utils.ts ***!
  \********************************************************************************************/
/*! exports provided: isNumber, isString, isFunction, isStaticDecorator, isUndefined, ensureTargetIsType, isJsObject, isPrimitive, stringify, reflection, LazyInit, array, getProtoChain, getBaseClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStaticDecorator", function() { return isStaticDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureTargetIsType", function() { return ensureTargetIsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsObject", function() { return isJsObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reflection", function() { return reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyInit", function() { return LazyInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProtoChain", function() { return getProtoChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseClass", function() { return getBaseClass; });
function isNumber(obj) {
    return typeof obj === 'number';
}
function isString(obj) {
    return typeof obj === 'string';
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isStaticDecorator(target) {
    return isFunction(target);
}
var undef = undefined;
function isUndefined(obj) {
    return obj === undef;
}
function ensureTargetIsType(type) {
    return isFunction(type) ? type : type.constructor;
}
function isJsObject(obj) {
    return obj !== null && (typeof obj === 'function' || typeof obj === 'object');
}
function isPrimitive(obj) {
    return !isJsObject(obj);
}
/**
 * See https://github.com/angular/angular/blob/2.0.0-rc.4/modules/%40angular/facade/src/lang.ts#L149
 * @param token
 * @returns
 */
function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token === undefined || token === null) {
        return '' + token;
    }
    if (token.name) {
        return token.name;
    }
    if (token.overriddenName) {
        return token.overriddenName;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
var reflection = {
    designType: function (target, key) {
        return Reflect.getMetadata('design:type', target, key);
    },
    paramTypes: function (target, key) {
        return Reflect.getMetadata('design:paramtypes', target, key);
    }
};
function LazyInit(getter) {
    return function (target, propertyKey, descriptor) {
        if (descriptor) {
            throw new Error('LazyInit can only decorate properties');
        }
        Object.defineProperty(target, propertyKey, {
            get: function () {
                var ret = getter.call(this);
                Object.defineProperty(this, propertyKey, { value: ret });
                return ret;
            }
        });
    };
}
/**
 * @pluginApi
 */
var array = (function () {
    var findRemove = function (arr, predicate, thisArg) {
        var idx = arr.findIndex(predicate, thisArg);
        if (idx > -1) {
            return arr.splice(idx, 1)[0];
        }
    };
    return { findRemove: findRemove };
})();
/**
 * Returns the chain of prototypes up to Object (not included)
 * @pluginApi
 * @param cls
 */
function getProtoChain(cls) {
    var classes = [];
    while (cls && cls !== Object) {
        classes.push(cls);
        var proto = Object.getPrototypeOf(cls.prototype);
        cls = isFunction(proto) || !proto ? proto : proto.constructor;
    }
    return classes;
}
function getBaseClass(cls) {
    var proto = Object.getPrototypeOf(cls.prototype);
    return !proto || isFunction(proto) ? proto : proto.constructor;
}


/***/ }),

/***/ "../../libs/core/tdm/src/lib/mapping/direct-mapper/direct-mapper.ts":
/*!***********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/mapping/direct-mapper/direct-mapper.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DirectDeserializeMapper, DirectChildDeserializeMapper, DirectSerializeMapper, DirectChildSerializeMapper, directMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectDeserializeMapper", function() { return DirectDeserializeMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectChildDeserializeMapper", function() { return DirectChildDeserializeMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectSerializeMapper", function() { return DirectSerializeMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectChildSerializeMapper", function() { return DirectChildSerializeMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directMapper", function() { return directMapper; });
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metadata */ "../../libs/core/tdm/src/lib/metadata/index.ts");
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mapper */ "../../libs/core/tdm/src/lib/mapping/mapper.ts");
/* harmony import */ var _prop_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../prop-container */ "../../libs/core/tdm/src/lib/mapping/prop-container.ts");
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
 * A mapper that has no mapping effect.
 * Maps every property on the source to the same property on the target.
 * This mapper does not support non primitive id's
 */
var DirectDeserializeMapper = /** @class */ (function (_super) {
    __extends(DirectDeserializeMapper, _super);
    function DirectDeserializeMapper(source, sourceType, plainMapper) {
        var _this = _super.call(this, source, sourceType, plainMapper) || this;
        _this.idx = -1;
        if (!(_this instanceof DirectChildDeserializeMapper)) {
            _this.existing = new _fw__WEBPACK_IMPORTED_MODULE_0__["DualKeyMap"]();
        }
        _this.identity = _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getIdentityKey(_this.sourceType, 'outgoing');
        _this.isCollection = Array.isArray(source);
        if (!_this.isCollection) {
            _this.current = _this.source;
        }
        return _this;
    }
    DirectDeserializeMapper.prototype.setRef = function (value) {
        if (this.current) {
            this.existing.set(this.sourceType, this.getIdentity(), value);
        }
    };
    Object.defineProperty(DirectDeserializeMapper.prototype, "ref", {
        get: function () {
            if (this.current) {
                return this.existing.get(this.sourceType, this.getIdentity());
            }
        },
        enumerable: true,
        configurable: true
    });
    DirectDeserializeMapper.prototype.getIdentity = function () {
        // TODO: Move to the global store, so logic can change without bugs.
        return this.current[this.identity];
    };
    DirectDeserializeMapper.prototype.next = function () {
        if (this.isCollection) {
            this.current = this.source[++this.idx];
            return !!this.current;
        }
        else {
            return false;
        }
    };
    DirectDeserializeMapper.prototype.getKeys = function () {
        return Object.keys(this.current);
    };
    DirectDeserializeMapper.prototype.getValue = function (key, prop) {
        var value = this.current[key];
        if (prop) {
            // The adapter has the responsibility to manage relationships.
            // It doesn't care about key matching (e.g. key in property customer_id but property is customer)
            // it get's a value and the property to assign to, the adapter should check if the value it got
            // was an id or an object.
            // this relationship handling logic makes this whole adapter support only primitive ID properties.
            // if we have primitives we treat them as id's and create an object.
            // later we wil check if this value is in cache, if not create it.
            // if its not a primitive, it will process as a full object included in the payload.
            var rel = this.getRelationQuery(prop, value);
            if (rel) {
                value = rel;
            }
            if (_metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].hasTarget(prop.type.ref)) {
                return (this.getCache(prop.type.ref, value) || this.deserialize(value, prop));
            }
        }
        return typeof value === 'object'
            ? this.plainMapper.deserialize(value)
            : value;
    };
    DirectDeserializeMapper.prototype.deserialize = function (value, prop) {
        var mapper = this.ref
            ? new DirectChildDeserializeMapper(value, prop.type.ref, this.existing, this.plainMapper)
            : directMapper.deserializer(value, prop.type.ref, this.plainMapper); // tslint:disable-line
        return _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].deserialize(mapper);
    };
    /**
     *  Returns a relationship object with the identity property set.
     *  This object can then be used by the cache to identify if a value is cached or not (using the type & identity comb)
     */
    DirectDeserializeMapper.prototype.getRelationQuery = function (prop, value) {
        if (prop.relation && Object(_fw__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(value)) {
            return _a = {},
                _a[_metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getIdentityKey(prop.type.ref, 'outgoing')] = value,
                _a;
        }
        var _a;
    };
    DirectDeserializeMapper.prototype.getCache = function (type, value) {
        var idKey = _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getIdentityKey(type, 'outgoing');
        var idVal = idKey && value[idKey];
        if (idVal) {
            return this.existing.get(type, idVal);
        }
    };
    return DirectDeserializeMapper;
}(_mapper__WEBPACK_IMPORTED_MODULE_2__["DeserializeMapper"]));

// tslint:disable-next-line
var DirectChildDeserializeMapper = /** @class */ (function (_super) {
    __extends(DirectChildDeserializeMapper, _super);
    function DirectChildDeserializeMapper(source, sourceType, existing, plainMapper) {
        var _this = _super.call(this, source, sourceType, plainMapper) || this;
        _this.existing = existing;
        return _this;
    }
    return DirectChildDeserializeMapper;
}(DirectDeserializeMapper));

// tslint:disable-next-line
var DirectSerializeMapper = /** @class */ (function (_super) {
    __extends(DirectSerializeMapper, _super);
    function DirectSerializeMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectSerializeMapper.prototype.serialize = function (container) {
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
    DirectSerializeMapper.prototype.serializeObject = function (obj, container) {
        var _this = this;
        var data = {};
        var cb = function (pMap) {
            var p = pMap.prop;
            if (p && _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].hasTarget(p.type.ref)) {
                var type = p.type.ref;
                if (p.relation && !p.type.isArray) {
                    var idKey_1 = _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getIdentityKey(type);
                    // if the rel points to a different fk property name, @tdm will make sure prop.obj is that fk.
                    data[pMap.obj] = obj[pMap.cls][idKey_1];
                }
                else {
                    data[pMap.obj] = _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].serialize(type, new DirectChildSerializeMapper(obj[pMap.cls], _this.cache, _this.plainMapper));
                }
            }
            else {
                var newVal = _this.plainMapper.serialize(Object(_prop_container__WEBPACK_IMPORTED_MODULE_3__["transformValueOut"])(obj[pMap.cls], p));
                data[pMap.obj] = newVal;
            }
        };
        container.forEach(Object.keys(obj), cb);
        var idKey = _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getIdentityKey(container.target);
        if (idKey !== _metadata__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getIdentityKey(container.target, 'outgoing')) {
            delete data[idKey];
        }
        return data;
    };
    DirectSerializeMapper.prototype.serializeCollection = function (arr, container) {
        var _this = this;
        return arr.map(function (s) { return _this.serializeObject(s, container); });
    };
    return DirectSerializeMapper;
}(_mapper__WEBPACK_IMPORTED_MODULE_2__["SerializeMapper"]));

// tslint:disable-next-line
var DirectChildSerializeMapper = /** @class */ (function (_super) {
    __extends(DirectChildSerializeMapper, _super);
    function DirectChildSerializeMapper(source, cache, plainMapper) {
        var _this = _super.call(this, source, plainMapper) || this;
        _this.cache = cache;
        return _this;
    }
    return DirectChildSerializeMapper;
}(DirectSerializeMapper));

var directMapper = {
    serializer: function (source, plainMapper) {
        return new DirectSerializeMapper(source, plainMapper);
    },
    deserializer: function (source, sourceType, plainMapper) {
        return new DirectDeserializeMapper(source, sourceType, plainMapper);
    }
};


/***/ }),

/***/ "../../libs/core/tdm/src/lib/mapping/errors.ts":
/*!**************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/mapping/errors.ts ***!
  \**************************************************************************************************/
/*! exports provided: TransformationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformationError", function() { return TransformationError; });
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
var TransformationError = /** @class */ (function (_super) {
    __extends(TransformationError, _super);
    function TransformationError(message) {
        return _super.call(this, message) || this;
    }
    TransformationError.coll_obj = function (expectedCol) {
        return new TransformationError(expectedCol
            ? "Expected a collection but got an object"
            : "Expected an object but got a collection");
    };
    return TransformationError;
}(Error));



/***/ }),

/***/ "../../libs/core/tdm/src/lib/mapping/index.ts":
/*!*************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/mapping/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: PlainObjectMapper, directMapper, DirectSerializeMapper, DirectDeserializeMapper, TransformationError, transformValueOut, transformValueIn, InclusivePropertyContainer, ExclusivePropertyContainer, SerializeMapper, DeserializeMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "../../libs/core/tdm/src/lib/mapping/errors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransformationError", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__["TransformationError"]; });

/* harmony import */ var _prop_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prop-container */ "../../libs/core/tdm/src/lib/mapping/prop-container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformValueOut", function() { return _prop_container__WEBPACK_IMPORTED_MODULE_1__["transformValueOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformValueIn", function() { return _prop_container__WEBPACK_IMPORTED_MODULE_1__["transformValueIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InclusivePropertyContainer", function() { return _prop_container__WEBPACK_IMPORTED_MODULE_1__["InclusivePropertyContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExclusivePropertyContainer", function() { return _prop_container__WEBPACK_IMPORTED_MODULE_1__["ExclusivePropertyContainer"]; });

/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapper */ "../../libs/core/tdm/src/lib/mapping/mapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SerializeMapper", function() { return _mapper__WEBPACK_IMPORTED_MODULE_2__["SerializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeserializeMapper", function() { return _mapper__WEBPACK_IMPORTED_MODULE_2__["DeserializeMapper"]; });

/* harmony import */ var _plain_object_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plain-object-mapper */ "../../libs/core/tdm/src/lib/mapping/plain-object-mapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlainObjectMapper", function() { return _plain_object_mapper__WEBPACK_IMPORTED_MODULE_3__["PlainObjectMapper"]; });

/* harmony import */ var _direct_mapper_direct_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./direct-mapper/direct-mapper */ "../../libs/core/tdm/src/lib/mapping/direct-mapper/direct-mapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directMapper", function() { return _direct_mapper_direct_mapper__WEBPACK_IMPORTED_MODULE_4__["directMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectSerializeMapper", function() { return _direct_mapper_direct_mapper__WEBPACK_IMPORTED_MODULE_4__["DirectSerializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectDeserializeMapper", function() { return _direct_mapper_direct_mapper__WEBPACK_IMPORTED_MODULE_4__["DirectDeserializeMapper"]; });








/***/ }),

/***/ "../../libs/core/tdm/src/lib/mapping/mapper.ts":
/*!**************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/mapping/mapper.ts ***!
  \**************************************************************************************************/
/*! exports provided: SerializeMapper, DeserializeMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerializeMapper", function() { return SerializeMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeserializeMapper", function() { return DeserializeMapper; });
/* harmony import */ var _plain_object_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plain-object-mapper */ "../../libs/core/tdm/src/lib/mapping/plain-object-mapper.ts");

/**
 * Represents the contract a Serializer needs to implements.
 * A Serializer should handle both a collection and a single item and should be able to identify them.
 *
 * Since Serialization transforms a KNOWN document to an UNKNOWN document the serializer is gets
 * free control over the output.
 * The library provides the instance and a container of property metadata for the instance and the
 * serializer should do the rest.
 *
 * Since the output schema is now known to the library the whole process is managed by the serializer.
 * The library helps with metadata.
 */
var SerializeMapper = /** @class */ (function () {
    function SerializeMapper(source, plainMapper) {
        this.source = source;
        this.plainMapper = plainMapper || new _plain_object_mapper__WEBPACK_IMPORTED_MODULE_0__["PlainObjectMapper"]();
    }
    return SerializeMapper;
}());

/**
 * Represents the contract a Deserializer needs to implements.
 * A Deserializer should handle both a collection and a single item and should be able to identify them.
 *
 * Since deserialization transforms UNKNOWN document to a KNOWN document the deserializer must implement
 * a specific interface so the library can normalize an unknown document into a known one.
 *
 * If a collection is found the deserializer move to an iteration mode via the next() method.
 * In a collection, the cursor must not point on an item until the first call to next().
 * In a single item next() is never used so the cursor must point to the item provided.
 *
 * The deserialization process:
 *   - Initialize the item (constructor) and identify the type (collection/single)
 *   - Find and return the keys for the current item (getKeys() done for each item)
 *   - Get the value for a given key
 *
 *
 * The Deserializer is responsible for deserializing the whole document, including nested items and
 * related items. It is therefor recommended to keep a cache of generated items if the document is expected to have nested resources.
 * Caching logic can be implemented by implementing the `setRef()` and `getIdentity()` methods and
 * using a child deserializer class or a count flag.
 *
 * > See `directMapper` and `@tdm/json-api-mapper` for implementation example.
 *
 */
var DeserializeMapper = /** @class */ (function () {
    function DeserializeMapper(source, sourceType, plainMapper) {
        this.source = source;
        this.sourceType = sourceType;
        this.plainMapper = plainMapper || new _plain_object_mapper__WEBPACK_IMPORTED_MODULE_0__["PlainObjectMapper"]();
    }
    return DeserializeMapper;
}());



/***/ }),

/***/ "../../libs/core/tdm/src/lib/mapping/plain-object-mapper.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/mapping/plain-object-mapper.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PlainObjectMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlainObjectMapper", function() { return PlainObjectMapper; });
var PRIMITIVES = ['boolean', 'string', 'number', 'symbol'];
/**
 * A plain object (POJO/POCO) serializer/deserializer.
 * Extend for custom behaviour.
 */
var PlainObjectMapper = /** @class */ (function () {
    function PlainObjectMapper() {
    }
    PlainObjectMapper.prototype.deserialize = function (obj) {
        return this._deserialize(obj);
    };
    PlainObjectMapper.prototype.serialize = function (obj) {
        return this._serialize(obj, new Map());
    };
    PlainObjectMapper.prototype._deserialize = function (obj) {
        return obj;
    };
    PlainObjectMapper.prototype._serialize = function (obj, cache) {
        if (obj === null || obj === undefined) {
            return null;
        }
        // we can be passive about resolving primitives, let them fallback if nothing hits...
        // however, since primitive are used often, it likely that we save checks if we use an active approach.
        if (PRIMITIVES.indexOf(typeof obj) > -1) {
            return obj;
        }
        var cachedVal = cache.get(obj);
        if (cachedVal) {
            return cachedVal;
        }
        if (Array.isArray(obj)) {
            cache.set(obj, (cachedVal = []));
            for (var i = 0, len = obj.length; i < len; i++) {
                cachedVal.push(this._serialize(obj[i], cache));
            }
        }
        else if (obj instanceof Date) {
            cache.set(obj, (cachedVal = obj.toISOString()));
        }
        else if (obj instanceof RegExp) {
            cache.set(obj, (cachedVal = obj.toString()));
        }
        else if (typeof obj === 'object' || typeof obj === 'function') {
            cache.set(obj, (cachedVal = {}));
            var keys = Object.keys(obj);
            for (var i = 0, len = keys.length; i < len; i++) {
                cachedVal[keys[i]] = this._serialize(obj[keys[i]], cache);
            }
        }
        else {
            // throw here? don't think there's a way to get here
            cache.set(obj, (cachedVal = obj.toString()));
        }
        return cachedVal;
    };
    return PlainObjectMapper;
}());



/***/ }),

/***/ "../../libs/core/tdm/src/lib/mapping/prop-container.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/mapping/prop-container.ts ***!
  \**********************************************************************************************************/
/*! exports provided: transformValueOut, transformValueIn, InclusivePropertyContainer, ExclusivePropertyContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformValueOut", function() { return transformValueOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformValueIn", function() { return transformValueIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InclusivePropertyContainer", function() { return InclusivePropertyContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExclusivePropertyContainer", function() { return ExclusivePropertyContainer; });
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");

function transformValueOut(value, prop) {
    if (prop && prop.transform && prop.transform.outgoing) {
        return prop.transform.outgoing(value);
    }
    return value;
}
function transformValueIn(value, prop) {
    if (prop && prop.transform && prop.transform.incoming) {
        return prop.transform.incoming(value);
    }
    return value;
}
function excludedPredicate(e) {
    return e.name === this;
}
var InclusivePropertyContainer = /** @class */ (function () {
    function InclusivePropertyContainer(target, compiled, predicate, renamer) {
        this.target = target;
        this.compiled = compiled;
        this.predicate = predicate;
        this.renamer = renamer;
    }
    InclusivePropertyContainer.prototype.forEach = function (keys, cb) {
        var len = keys.length;
        var instructions = this.compiled.instructions.slice();
        var excluded = this.compiled.excluded.slice();
        for (var i = 0; i < len; i++) {
            var prop = _fw__WEBPACK_IMPORTED_MODULE_0__["array"].findRemove(instructions, this.predicate, keys[i]) || {
                cls: keys[i],
                obj: keys[i],
                exclude: _fw__WEBPACK_IMPORTED_MODULE_0__["array"].findRemove(excluded, excludedPredicate, keys[i])
            };
            if (!prop.exclude) {
                // we only transform names for ad-hoc properties. registered @Prop's are transformed
                // when the prop is compiled.
                if (!prop.prop && this.renamer) {
                    this.renamer(prop);
                }
                cb(prop);
            }
        }
    };
    /**
     * A forEach loop on all instructions including excluded instructions and properties not in "keys" but in metadata.
     * It is recommended to use "forEach" unless the mapper implementation has different transformation strategies.
     * @param keys
     * @param cb
     */
    InclusivePropertyContainer.prototype.forEachRaw = function (keys, cb) {
        var len = keys.length;
        var instructions = this.compiled.instructions.slice();
        var excluded = this.compiled.excluded.slice();
        for (var i = 0; i < len; i++) {
            var prop = _fw__WEBPACK_IMPORTED_MODULE_0__["array"].findRemove(instructions, this.predicate, keys[i]) || {
                cls: keys[i],
                obj: keys[i],
                exclude: _fw__WEBPACK_IMPORTED_MODULE_0__["array"].findRemove(excluded, excludedPredicate, keys[i])
            };
            // we only transform names for ad-hoc properties. registered @Prop's are transformed
            // when the prop is compiled.
            if (!prop.prop && this.renamer) {
                this.renamer(prop);
            }
            cb(prop);
        }
        len = instructions.length;
        for (var i = 0; i < len; i++) {
            var prop = instructions[i];
            // we only transform names for ad-hoc properties. registered @Prop's are transformed
            // when the prop is compiled.
            if (!prop.prop && this.renamer) {
                this.renamer(prop);
            }
            cb(prop);
        }
    };
    return InclusivePropertyContainer;
}());

var ExclusivePropertyContainer = /** @class */ (function () {
    function ExclusivePropertyContainer(target, compiled) {
        this.target = target;
        this.compiled = compiled;
    }
    ExclusivePropertyContainer.prototype.forEach = function (keys, cb) {
        var instructions = this.compiled.instructions;
        // No need to apply transformNameStrategy, it is cached in the instructions.
        for (var i = 0, len = instructions.length; i < len; i++) {
            !instructions[i].exclude && cb(instructions[i]);
        }
    };
    /**
     * A forEach loop on all instructions including excluded instructions and properties not in "keys" but in metadata.
     * It is recommended to use "forEach" unless the mapper implementation has different transformation strategies.
     * @param keys
     * @param cb
     */
    ExclusivePropertyContainer.prototype.forEachRaw = function (keys, cb) {
        var instructions = this.compiled.instructions;
        for (var i = 0, len = instructions.length; i < len; i++) {
            cb(instructions[i]);
        }
    };
    return ExclusivePropertyContainer;
}());



/***/ }),

/***/ "../../libs/core/tdm/src/lib/mapping/target-transformer.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/mapping/target-transformer.ts ***!
  \**************************************************************************************************************/
/*! exports provided: namingStrategyMap, getInstructions, TargetTransformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namingStrategyMap", function() { return namingStrategyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstructions", function() { return getInstructions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetTransformer", function() { return TargetTransformer; });
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/core/tdm/src/lib/metadata/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "../../libs/core/tdm/src/lib/mapping/index.ts");
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
 * Returns an array of 2 property names, first is the name of the transformed output
 * second is the name of the property name to transform.
 * Used for applying NamingStrategyConfig based on the TransformDir
 * @param dir
 * @param transformNameStrategy
 */
function namingStrategyMap(dir, transformNameStrategy) {
    return transformNameStrategy && Object(_fw__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(transformNameStrategy[dir]);
}
/**
 * @internal
 */
function getInstructions(meta, dir) {
    // all excluded instructions for this type
    // this array will be filtered to hold only @Exclude without @Prop
    var excluded = meta
        .getValues(_metadata__WEBPACK_IMPORTED_MODULE_1__["ExcludeMetadata"])
        .filter(function (e) { return !e.from || e.from === dir; });
    var model = meta.model();
    // in exclusive mode there is no point in have 2 transformation strategies.
    // incoming is never there since incoming keys are not calculated, only defined Props.
    if (model.transformStrategy === 'exclusive') {
        dir = 'outgoing';
    }
    // only apply naming strategy on outgoing, incoming has no effect here
    var naming = namingStrategyMap(dir, model.transformNameStrategy);
    var fkMap = new Map();
    // TODO: move to for loop
    var instructions = meta.getValues(_metadata__WEBPACK_IMPORTED_MODULE_1__["PropMetadata"]).map(function (prop) {
        var obj = {
            cls: prop.name,
            obj: prop.alias[dir],
            exclude: _fw__WEBPACK_IMPORTED_MODULE_0__["array"].findRemove(excluded, function (e) { return e.name === prop.name; }),
            prop: prop
        };
        // apply naming strategy when DONT HAVE ALIAS!
        if (!obj.exclude && naming && obj.cls === obj.obj) {
            obj.obj = model.transformNameStrategy[dir](obj.cls);
        }
        // store the PoClassPropertyMap of a belongsTo PropMetadata relation
        // and the PoClassPropertyMap of all foreign key PropMetadata.
        // These arr actually matching pairs of a belongTo relation and it's fk
        // (not all belongsTo has fk, only different property name is a fk)
        //
        // At the end, go through the stored PropMetadata's and see if matching pairs found (2 values in array)
        // for all of them, swap the prop names so:
        // belongsTo PoClassPropertyMap will output (deserialize) to the original fk property name
        // foreignKey PoClassPropertyMap wil input (serialize) to the belongsTo property name
        // this swap make the deserialize/serialize process transparent to fk mismatch defined on the model.
        // De/Serialize implementations are only responsible to return the right object
        // (e.g. detect when a key is incoming, return obj instead)
        if (prop.relation) {
            var arr = fkMap.get(prop) || [];
            arr[0] = obj;
            fkMap.set(prop, arr);
        }
        else if (prop.foreignKeyOf) {
            var arr = fkMap.get(prop.foreignKeyOf) || [];
            arr[1] = obj;
            fkMap.set(prop.foreignKeyOf, arr);
        }
        return obj;
    });
    Array.from(fkMap.entries()).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        if (v.length === 2) {
            // this is a swap
            v[0].obj = v[1].cls;
            v[1].cls = k.name; // v[0].cls === k.name
        }
    });
    return { excluded: excluded, instructions: instructions };
}
function serializePredicate(p) {
    return p.cls === this;
}
function deserializePredicate(p) {
    return p.obj === this;
}
/**
 * A Target transformer is the running context of a mapper.
 * It will run the mapper, provide input and parse results
 */
var TargetTransformer = /** @class */ (function () {
    function TargetTransformer(meta) {
        this.meta = meta;
    }
    TargetTransformer.prototype.serialize = function (mapper) {
        return mapper.serialize(this.outgoingContainer);
    };
    /**
     * Deserialize a single target.
     * Does not support collection deserialization, if mapper is a collection will throw.
     * @param mapper
     * @param target
     */
    TargetTransformer.prototype.deserialize = function (mapper, target) {
        var cb = function (prop) {
            var propMeta = (prop.prop && prop.prop.foreignKeyOf) || prop.prop;
            target[prop.cls] = Object(_index__WEBPACK_IMPORTED_MODULE_2__["transformValueIn"])(mapper.getValue(prop.obj, propMeta), propMeta);
        };
        if (Object(_fw__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(mapper.setRef)) {
            mapper.setRef(target);
        }
        if (mapper.raw === true) {
            this.incomingContainer.forEachRaw(mapper.getKeys(), cb);
        }
        else {
            this.incomingContainer.forEach(mapper.getKeys(), cb);
        }
        if (Object(_fw__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(mapper.getIdentity)) {
            if (this.identity) {
                var ident = Object(_index__WEBPACK_IMPORTED_MODULE_2__["transformValueIn"])(mapper.getIdentity(), this.identity.prop);
                if (ident) {
                    target[this.identity.cls] = ident;
                }
            }
        }
    };
    __decorate([
        Object(_fw__WEBPACK_IMPORTED_MODULE_0__["LazyInit"])(function () {
            var idKey = this.meta.getIdentityKey();
            if (idKey) {
                return (this.hasOwnProperty('incoming')
                    ? this.incoming
                    : this.outgoing).instructions.find(function (p) { return p.prop.name === idKey; });
            }
        }),
        __metadata("design:type", Object)
    ], TargetTransformer.prototype, "identity", void 0);
    __decorate([
        Object(_fw__WEBPACK_IMPORTED_MODULE_0__["LazyInit"])(function () {
            return getInstructions(this.meta, 'incoming');
        }),
        __metadata("design:type", Object)
    ], TargetTransformer.prototype, "incoming", void 0);
    __decorate([
        Object(_fw__WEBPACK_IMPORTED_MODULE_0__["LazyInit"])(function () {
            return getInstructions(this.meta, 'outgoing');
        }),
        __metadata("design:type", Object)
    ], TargetTransformer.prototype, "outgoing", void 0);
    __decorate([
        Object(_fw__WEBPACK_IMPORTED_MODULE_0__["LazyInit"])(function () {
            var model = this.meta.model();
            if (model.transformStrategy === 'exclusive') {
                return new _index__WEBPACK_IMPORTED_MODULE_2__["ExclusivePropertyContainer"](this.meta.target, this.incoming);
            }
            else {
                var rename = namingStrategyMap('incoming', model.transformNameStrategy)
                    ? function (prop) { return (prop.cls = model.transformNameStrategy.incoming(prop.obj)); }
                    : undefined;
                return new _index__WEBPACK_IMPORTED_MODULE_2__["InclusivePropertyContainer"](this.meta.target, this.incoming, deserializePredicate, rename);
            }
        }),
        __metadata("design:type", Object)
    ], TargetTransformer.prototype, "incomingContainer", void 0);
    __decorate([
        Object(_fw__WEBPACK_IMPORTED_MODULE_0__["LazyInit"])(function () {
            var model = this.meta.model();
            if (model.transformStrategy === 'exclusive') {
                return new _index__WEBPACK_IMPORTED_MODULE_2__["ExclusivePropertyContainer"](this.meta.target, this.outgoing);
            }
            else {
                var rename = namingStrategyMap('outgoing', model.transformNameStrategy)
                    ? function (prop) { return (prop.obj = model.transformNameStrategy.outgoing(prop.cls)); }
                    : undefined;
                return new _index__WEBPACK_IMPORTED_MODULE_2__["InclusivePropertyContainer"](this.meta.target, this.outgoing, serializePredicate, rename);
            }
        }),
        __metadata("design:type", Object)
    ], TargetTransformer.prototype, "outgoingContainer", void 0);
    return TargetTransformer;
}());



/***/ }),

/***/ "../../libs/core/tdm/src/lib/metadata/exclude.ts":
/*!****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/metadata/exclude.ts ***!
  \****************************************************************************************************/
/*! exports provided: factory, ExcludeMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcludeMetadata", function() { return ExcludeMetadata; });
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");
/* harmony import */ var _target_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target-store */ "../../libs/core/tdm/src/lib/metadata/target-store.ts");
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prop */ "../../libs/core/tdm/src/lib/metadata/prop.ts");
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



// exporting to satisfy angular AOT
function factory(metaArgs, target, info) {
    if (info.type === 'class') {
        _target_store__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getTargetMeta(target).model().transformStrategy =
            'exclusive';
    }
    else {
        return {
            info: info,
            target: target.constructor,
            metaClassKey: ExcludeMetadata,
            metaPropKey: info.name,
            metaValue: new ExcludeMetadata(metaArgs, info)
        };
    }
}
var ExcludeMetadata = /** @class */ (function (_super) {
    __extends(ExcludeMetadata, _super);
    function ExcludeMetadata(metaArgs, info) {
        var _this = _super.call(this, info) || this;
        if (metaArgs) {
            _this.from = metaArgs.from;
        }
        return _this;
    }
    ExcludeMetadata = __decorate([
        Object(_fw__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['class', 'member'],
            extend: 'mergeMap',
            proxy: {
                host: _prop__WEBPACK_IMPORTED_MODULE_2__["PropMetadata"],
                containerKey: 'exclude'
            },
            factory: factory
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], ExcludeMetadata);
    return ExcludeMetadata;
}(_fw__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/core/tdm/src/lib/metadata/helpers.ts":
/*!****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/metadata/helpers.ts ***!
  \****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");
/* harmony import */ var _target_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target-store */ "../../libs/core/tdm/src/lib/metadata/target-store.ts");


/**
 * Registers the value as any array.
 * If array does not exists will create one and push the value into it.
 *
 * Handles both single and property style registration.
 */
_fw__WEBPACK_IMPORTED_MODULE_0__["registerHelpers"].array = function (meta) {
    var propKey = this.metaArgs.single === true ? true : meta.metaPropKey;
    var curr = _target_store__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getMetaFor(meta.target, meta.metaClassKey, propKey);
    if (!curr) {
        _target_store__WEBPACK_IMPORTED_MODULE_1__["targetStore"].setMetaFor(meta.target, meta.metaClassKey, propKey, (curr = []));
    }
    curr.push(meta.metaValue);
};
_fw__WEBPACK_IMPORTED_MODULE_0__["extendHelpers"].mergeMap = function (from, to) {
    return to
        ? _fw__WEBPACK_IMPORTED_MODULE_0__["MapExt"].mergeInto(to, from)
        : new Map(from.entries());
};
_fw__WEBPACK_IMPORTED_MODULE_0__["extendHelpers"].mergeMapArray = function (from, to) {
    if (!to) {
        to = new Map();
    }
    _fw__WEBPACK_IMPORTED_MODULE_0__["MapExt"].asKeyValArray(from).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        if (!to.has(k)) {
            to.set(k, v.slice());
        }
        else {
            var arrFrom = v;
            var arrTo = to.get(k);
            var _loop_1 = function (metaClass) {
                if (!arrTo.some(function (a) { return a.name === metaClass.name; })) {
                    arrTo.push(metaClass);
                }
            };
            for (var _i = 0, arrFrom_1 = arrFrom; _i < arrFrom_1.length; _i++) {
                var metaClass = arrFrom_1[_i];
                _loop_1(metaClass);
            }
        }
    });
    return to;
};


/***/ }),

/***/ "../../libs/core/tdm/src/lib/metadata/index.ts":
/*!**************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/metadata/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: ExcludeMetadata, TargetStore, targetStore, PropMetadata, TypeMetadata, RelationMetadata, TargetMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _target_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target-store */ "../../libs/core/tdm/src/lib/metadata/target-store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetStore", function() { return _target_store__WEBPACK_IMPORTED_MODULE_0__["TargetStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetStore", function() { return _target_store__WEBPACK_IMPORTED_MODULE_0__["targetStore"]; });

/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prop */ "../../libs/core/tdm/src/lib/metadata/prop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropMetadata", function() { return _prop__WEBPACK_IMPORTED_MODULE_1__["PropMetadata"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "../../libs/core/tdm/src/lib/metadata/type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeMetadata", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TypeMetadata"]; });

/* harmony import */ var _relation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relation */ "../../libs/core/tdm/src/lib/metadata/relation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelationMetadata", function() { return _relation__WEBPACK_IMPORTED_MODULE_3__["RelationMetadata"]; });

/* harmony import */ var _exclude__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exclude */ "../../libs/core/tdm/src/lib/metadata/exclude.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExcludeMetadata", function() { return _exclude__WEBPACK_IMPORTED_MODULE_4__["ExcludeMetadata"]; });

/* harmony import */ var _target_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./target-metadata */ "../../libs/core/tdm/src/lib/metadata/target-metadata.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetMetadata", function() { return _target_metadata__WEBPACK_IMPORTED_MODULE_5__["TargetMetadata"]; });









/***/ }),

/***/ "../../libs/core/tdm/src/lib/metadata/prop.ts":
/*!*************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/metadata/prop.ts ***!
  \*************************************************************************************************/
/*! exports provided: PropMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropMetadata", function() { return PropMetadata; });
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");
/* harmony import */ var _target_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target-store */ "../../libs/core/tdm/src/lib/metadata/target-store.ts");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "../../libs/core/tdm/src/lib/metadata/type.ts");
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



var PropMetadata = /** @class */ (function (_super) {
    __extends(PropMetadata, _super);
    function PropMetadata(obj, info, target) {
        var _this = _super.call(this, info) || this;
        _this.target = target;
        if (!obj) {
            obj = {};
        }
        // TODO: throw if name is not a string (can be symbol)
        _this.alias = Object(_fw__WEBPACK_IMPORTED_MODULE_0__["propAliasConfig"])(obj.alias, info.name);
        if (obj.transform) {
            _this.transform = Object(_fw__WEBPACK_IMPORTED_MODULE_0__["propTransformConfig"])(obj.transform);
        }
        if (obj.type) {
            _this.typeArgs = obj.type;
        }
        return _this;
    }
    PropMetadata.prototype.setRelationship = function (rel) {
        if (!this.type.isGetter) {
            if (!this.type.ref ||
                this.type.ref === Object ||
                this.type.ref === Array) {
                throw new Error("Property " + this.decoratorInfo.name + " with relation but without a type, please set a type.");
            }
        }
        this.relation = rel;
    };
    __decorate([
        Object(_fw__WEBPACK_IMPORTED_MODULE_0__["LazyInit"])(function () {
            // get the type information.
            // 3 options:
            // 1. User set the @Type decorator, so we will find it in the metadata store
            // 2. User the the 'type' property in PropMetadataArgs which will mimic @Type in the PropMetadata constructor
            // 3. Auto resolve, we will create a new instance with no getter.
            return (_target_store__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getMetaFor(this.target, _type__WEBPACK_IMPORTED_MODULE_2__["TypeMetadata"], this.name) ||
                new _type__WEBPACK_IMPORTED_MODULE_2__["TypeMetadata"](this.typeArgs, this.decoratorInfo, this.target));
        }),
        __metadata("design:type", _type__WEBPACK_IMPORTED_MODULE_2__["TypeMetadata"])
    ], PropMetadata.prototype, "type", void 0);
    PropMetadata = __decorate([
        Object(_fw__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['member'],
            extend: 'mergeMap'
        }),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], PropMetadata);
    return PropMetadata;
}(_fw__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/core/tdm/src/lib/metadata/relation.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/metadata/relation.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RelationMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationMetadata", function() { return RelationMetadata; });
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");
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

var RelationMetadata = /** @class */ (function (_super) {
    __extends(RelationMetadata, _super);
    function RelationMetadata(obj, info) {
        var _this = _super.call(this, info) || this;
        _this.foreignKey = (obj && obj.foreignKey) || info.name;
        return _this;
    }
    RelationMetadata = __decorate([
        Object(_fw__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['member'],
            extend: 'mergeMap'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], RelationMetadata);
    return RelationMetadata;
}(_fw__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));

// to make it easy on generics later
// declare module '../fw/metadata-framework/meta-class' {
//   module MetaClass {
//     function get(target: typeof RelationMetadata): MetaClassMetadata<RelationMetadataArgs, RelationMetadata>;
//   }
// }


/***/ }),

/***/ "../../libs/core/tdm/src/lib/metadata/target-metadata.ts":
/*!************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/metadata/target-metadata.ts ***!
  \************************************************************************************************************/
/*! exports provided: TargetMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetMetadata", function() { return TargetMetadata; });
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");
/* harmony import */ var _target_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target-store */ "../../libs/core/tdm/src/lib/metadata/target-store.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model */ "../../libs/core/tdm/src/lib/model/index.ts");


// import { PropMetadata } from './prop';

/**
 * The metadata store for a target.
 *
 * Each target in the {@link TargetStore} has a matching TargetMetadata instance.
 * Each instance holds all the metadata data registered under that target.
 *
 * @pluginApi
 */
var TargetMetadata = /** @class */ (function () {
    function TargetMetadata(target, config) {
        this.target = target;
        this.config = config;
    }
    /**
     * Returns an array of values represented by the key.
     * If the key has no values returns an empty array.
     *
     * This is a safe metadata collection extractor.
     * @param type
     * @returns
     */
    TargetMetadata.prototype.getValues = function (type) {
        var values = this.config.get(type);
        return values ? Array.from(values.values()) : [];
    };
    TargetMetadata.prototype.getMetaFor = function (metaClass, name) {
        if (Object(_fw__WEBPACK_IMPORTED_MODULE_0__["isString"])(name)) {
            var meta = this.config.get(metaClass);
            if (meta) {
                return meta.get(name);
            }
        }
        else if (name === true) {
            var meta = this.config.get(_fw__WEBPACK_IMPORTED_MODULE_0__["GLOBAL_KEY"]);
            if (meta) {
                return meta.get(metaClass);
            }
        }
        else {
            return this.config.get(metaClass);
        }
    };
    TargetMetadata.prototype.setMetaFor = function (metaClass, name, value) {
        // TODO: don't go to target-store for this, implement here
        if (Object(_fw__WEBPACK_IMPORTED_MODULE_0__["isString"])(name)) {
            _target_store__WEBPACK_IMPORTED_MODULE_1__["targetStore"].setMetaFor(this.target, metaClass, name, value);
        }
        else {
            _target_store__WEBPACK_IMPORTED_MODULE_1__["targetStore"].setMetaFor(this.target, metaClass, true, name);
        }
    };
    /**
     * Create a new instance of the TDMCollection for this type.
     * @returns
     */
    TargetMetadata.prototype.createCollection = function () {
        return new _model__WEBPACK_IMPORTED_MODULE_2__["TDMCollection"]();
    };
    return TargetMetadata;
}());



/***/ }),

/***/ "../../libs/core/tdm/src/lib/metadata/target-store.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/metadata/target-store.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TargetStore, targetStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetStore", function() { return TargetStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetStore", function() { return targetStore; });
/* harmony import */ var _fw_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fw/utils */ "../../libs/core/tdm/src/lib/fw/utils.ts");
/* harmony import */ var _fw_set_map_ext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fw/set-map-ext */ "../../libs/core/tdm/src/lib/fw/set-map-ext.ts");
/* harmony import */ var _fw_metadata_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fw/metadata-framework */ "../../libs/core/tdm/src/lib/fw/metadata-framework/index.ts");
/* harmony import */ var _fw_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fw/events */ "../../libs/core/tdm/src/lib/fw/events.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "../../libs/core/tdm/src/lib/metadata/helpers.ts");




/**
 * The global type registry.
 *
 * Hold {@link TargetMetadata} for models.
 *
 * @pluginApi
 * @mixable
 * @singleton
 */
var TargetStore = /** @class */ (function () {
    function TargetStore() {
        // support for post instantiation mixins on the prototype (plugins) - don't use new.
        TargetStore.create(this);
    }
    Object.defineProperty(TargetStore.prototype, "on", {
        /**
         * register listeners for metadata lifecycle events on a target.
         * @returns
         */
        get: function () {
            return _fw_events__WEBPACK_IMPORTED_MODULE_3__["targetEvents"];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a single local item.
     * @param key
     * @param index optional, if not set returns the first.
     * @returns
     */
    TargetStore.prototype.local = function (key, index) {
        if (index === void 0) { index = 0; }
        var set = this.locals.get(key);
        if (set) {
            return _fw_set_map_ext__WEBPACK_IMPORTED_MODULE_1__["SetExt"].index(set, index);
        }
    };
    TargetStore.prototype.hasTarget = function (target) {
        return this.targets.has(target);
    };
    /**
     * Returns the target metadata of all models registered. (targets with ModelMetadata or derived)
     * Only built models are returned, with valid ModelMetadata instances.
     * Do not call this method from a decorator.
     */
    TargetStore.prototype.getAllModels = function () {
        return Array.from(this.builtTargets.values()).filter(function (tMeta) { return tMeta.hasModel; });
    };
    TargetStore.prototype.findTarget = function (name) {
        return this.namedTargets.get(name);
    };
    TargetStore.prototype.getMetaFor = function (target, metaClass, name, singleKey) {
        var dkm = this.targets.get(target);
        if (dkm) {
            if (name === true) {
                var v = dkm.get(_fw_metadata_framework__WEBPACK_IMPORTED_MODULE_2__["GLOBAL_KEY"], metaClass);
                return v && singleKey ? v[singleKey] : v;
            }
            else if (name) {
                return dkm.get(metaClass, name);
            }
            else {
                return dkm.get(metaClass);
            }
        }
    };
    TargetStore.prototype.setMetaFormFactory = function (meta) {
        if (meta) {
            if (meta.metaPropKey === _fw_metadata_framework__WEBPACK_IMPORTED_MODULE_2__["GLOBAL_KEY"]) {
                this.set(meta.target, _fw_metadata_framework__WEBPACK_IMPORTED_MODULE_2__["GLOBAL_KEY"], meta.metaClassKey, meta.metaValue);
            }
            else {
                this.setMetaFor(meta.target, meta.metaClassKey, meta.metaPropKey, meta.metaValue);
            }
        }
    };
    TargetStore.prototype.setMetaFor = function (target, metaClass, name, value) {
        if (name === true) {
            this.set(target, _fw_metadata_framework__WEBPACK_IMPORTED_MODULE_2__["GLOBAL_KEY"], metaClass, value);
        }
        else {
            this.set(target, metaClass, name, value);
        }
    };
    /**
     * Registers the target in the store, does not build.
     * Used for targets without metadata
     * @param target
     */
    TargetStore.prototype.registerTarget = function (target) {
        if (!this.hasTarget(target)) {
            this.targets.set(target, new _fw_set_map_ext__WEBPACK_IMPORTED_MODULE_1__["DualKeyMap"]());
        }
    };
    /**
     * Extends metadata from one target to the other.
     * Extending types will not trigger a metadata instantiation.
     * @param from
     * @param to
     */
    TargetStore.prototype.extend = function (from, to) {
        if (!this.hasTarget(from) || !this.hasTarget(to)) {
            throw new Error('Target not registered.');
        }
        var fromTarget = this.targets.get(from);
        var toTarget = this.targets.get(to);
        Array.from(fromTarget.keys()).forEach(function (clsKey) {
            if (clsKey === _fw_metadata_framework__WEBPACK_IMPORTED_MODULE_2__["GLOBAL_KEY"]) {
                var singleTypes = fromTarget.get(clsKey);
                var toSingleTypes_1 = toTarget.get(clsKey) || new Map();
                _fw_set_map_ext__WEBPACK_IMPORTED_MODULE_1__["MapExt"].asKeyValArray(singleTypes).forEach(function (_a) {
                    var type = _a[0], instance = _a[1];
                    // type is a class, using <any> since for TS its a TdmPropertyKey
                    var metaClass = _fw_metadata_framework__WEBPACK_IMPORTED_MODULE_2__["MetaClass"].get(type);
                    if (metaClass.extendSingle) {
                        var toInstance = toSingleTypes_1.get(type);
                        var value = metaClass.extendSingle(instance, toInstance, {
                            from: from,
                            to: to
                        });
                        if (!Object(_fw_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value)) {
                            toSingleTypes_1.set(type, value);
                        }
                    }
                });
                if (toSingleTypes_1.size > 0) {
                    toTarget.set(clsKey, toSingleTypes_1);
                }
            }
            else {
                var metaClass = _fw_metadata_framework__WEBPACK_IMPORTED_MODULE_2__["MetaClass"].get(clsKey);
                if (metaClass.extend) {
                    var value = metaClass.extend(fromTarget.get(clsKey), toTarget.get(clsKey), { from: from, to: to });
                    if (!Object(_fw_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value)) {
                        toTarget.set(clsKey, value);
                    }
                }
            }
        });
    };
    TargetStore.prototype.set = function (target, k, k1, v) {
        // TODO: implement LRU since most values are set sequentially on the same target.
        var dkm = this.targets.get(target);
        if (!dkm) {
            this.targets.set(target, (dkm = new _fw_set_map_ext__WEBPACK_IMPORTED_MODULE_1__["DualKeyMap"]()));
        }
        dkm.set(k, k1, v);
        return v;
    };
    /**
     * Creates a new TargetStore instance.
     * @param instance optional, used internally
     * @returns
     */
    TargetStore.create = function (instance) {
        var targetStore = instance || Object.create(TargetStore.prototype);
        targetStore.locals = new _fw_set_map_ext__WEBPACK_IMPORTED_MODULE_1__["KeySet"]();
        targetStore.namedTargets = new Map();
        targetStore.targets = new Map();
        targetStore.builtTargets = new Map();
        return targetStore;
    };
    return TargetStore;
}());

var targetStore = TargetStore.create();
_fw_metadata_framework__WEBPACK_IMPORTED_MODULE_2__["MetaClass"].defaultRegistrator(function (meta) { return targetStore.setMetaFormFactory(meta); });



/***/ }),

/***/ "../../libs/core/tdm/src/lib/metadata/type.ts":
/*!*************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/metadata/type.ts ***!
  \*************************************************************************************************/
/*! exports provided: TypeMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeMetadata", function() { return TypeMetadata; });
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fw */ "../../libs/core/tdm/src/lib/fw/index.ts");
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

var TypeMetadata = /** @class */ (function (_super) {
    __extends(TypeMetadata, _super);
    function TypeMetadata(metaArgs, info, target) {
        var _this = _super.call(this, info) || this;
        var type = target
            ? _fw__WEBPACK_IMPORTED_MODULE_0__["reflection"].designType(target.prototype, _this.name)
            : Object;
        var def;
        if (Object(_fw__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(metaArgs)) {
            def = { ref: metaArgs, forwardRef: true, isArray: type === Array };
        }
        else if (metaArgs) {
            def = metaArgs;
            if (!def.hasOwnProperty('isArray')) {
                def.isArray = type === Array;
            }
            if (!def.ref) {
                def.ref = def.forwardRef === true ? function () { return Object; } : Object;
            }
        }
        else {
            def = { ref: type === Array ? Object : type, isArray: type === Array };
        }
        _this.isArray = def.isArray;
        if (def.forwardRef === true) {
            // WHY configurable: true -> see @tdm/data -> meta-class extension
            Object.defineProperty(_this, 'ref', {
                configurable: true,
                get: def.ref
            });
            _this.isGetter = true;
        }
        else {
            _this.ref = def.ref;
        }
        return _this;
    }
    TypeMetadata = __decorate([
        Object(_fw__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['member'],
            extend: 'mergeMap'
        }),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], TypeMetadata);
    return TypeMetadata;
}(_fw__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/core/tdm/src/lib/model/index.ts":
/*!***********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/model/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: TDMCollection, TDMModelBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tdm-collection */ "../../libs/core/tdm/src/lib/model/tdm-collection.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMCollection", function() { return _tdm_collection__WEBPACK_IMPORTED_MODULE_0__["TDMCollection"]; });

/* harmony import */ var _tdm_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tdm-model */ "../../libs/core/tdm/src/lib/model/tdm-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelBase", function() { return _tdm_model__WEBPACK_IMPORTED_MODULE_1__["TDMModelBase"]; });





/***/ }),

/***/ "../../libs/core/tdm/src/lib/model/tdm-collection.ts":
/*!********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/model/tdm-collection.ts ***!
  \********************************************************************************************************/
/*! exports provided: TDMCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDMCollection", function() { return TDMCollection; });
/* harmony import */ var _tdm_tixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/tixin */ "../../libs/tixin/src/index.ts");
/* harmony import */ var _metadata_target_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata/target-store */ "../../libs/core/tdm/src/lib/metadata/target-store.ts");
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


var TDMCollectionMark = Symbol('TDMCollection instance mark');
var NON_EXTENDABLE_PROPS = ['constructor'];
var pCopyMap = new Map();
function buildAndCacheProperties(proto) {
    var propertiesToCopy = Object.getOwnPropertyNames(proto)
        .concat(Object.getOwnPropertySymbols(proto))
        .filter(function (v) { return NON_EXTENDABLE_PROPS.indexOf(v) === -1; });
    pCopyMap.set(proto, propertiesToCopy);
}
function runtimeExtend(proto, thisVar) {
    var propertiesToCopy = pCopyMap.get(proto) || [];
    thisVar[TDMCollectionMark] = true;
    for (var i = 0, len = propertiesToCopy.length; i < len; i++) {
        var name_1 = propertiesToCopy[i];
        var propDesc = Object.getOwnPropertyDescriptor(proto, name_1);
        if (propDesc) {
            Object.defineProperty(thisVar, name_1, propDesc);
        }
        else {
            thisVar[name_1] = proto[name_1];
        }
    }
}
// TODO: document the class and how to use it. explain about methods that return new instance (concat, reverse, etc) that return Array instance and not ActiveRecordCollection instance.
// TODO: override ref changing methods? throw on them? return ActiveRecordCollection on them?
var TDMCollection = /** @class */ (function (_super) {
    __extends(TDMCollection, _super);
    function TDMCollection() {
        var _this = _super.call(this) || this;
        runtimeExtend(TDMCollection.prototype, _this);
        return _this;
    }
    TDMCollection.extend = function (type) {
        Object(_tdm_tixin__WEBPACK_IMPORTED_MODULE_0__["Tixin"])(TDMCollection, type);
        buildAndCacheProperties(TDMCollection.prototype);
    };
    TDMCollection.instanceOf = function (instance) {
        return instance[TDMCollectionMark] === true;
    };
    /**
     * Creates a new instance of TDMCollection.
     * If a type is specified, returns the TDMCollection class for that type.
     * It is recommended to use this method along with a type to ensure plugins functionality.
     * @param type
     */
    TDMCollection.create = function (type) {
        if (!type) {
            return new TDMCollection();
        }
        else {
            return _metadata_target_store__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getTargetMeta(type).createCollection();
        }
    };
    /**
     * Creates a new TDMCollection class mixed in with the proto object.
     * @param proto An object literal used as a mixin to the TDMCollection prototype.
     * @returns
     */
    TDMCollection.factory = function (proto) {
        var clz = /** @class */ (function (_super) {
            __extends(RuntimeTDMCollection, _super);
            function RuntimeTDMCollection() {
                var _this = _super.call(this) || this;
                runtimeExtend(clz.prototype, _this);
                return _this;
            }
            RuntimeTDMCollection.extend = function (type) {
                Object(_tdm_tixin__WEBPACK_IMPORTED_MODULE_0__["Tixin"])(TDMCollection, type);
                buildAndCacheProperties(clz.prototype);
            };
            return RuntimeTDMCollection;
        }(TDMCollection));
        Object.defineProperty(clz, Symbol.hasInstance, {
            value: clz.instanceOf
        });
        Object.assign(clz.prototype, proto);
        buildAndCacheProperties(clz.prototype);
        return clz;
    };
    return TDMCollection;
}(Array));

Object.defineProperty(TDMCollection, Symbol.hasInstance, {
    value: TDMCollection.instanceOf
});
buildAndCacheProperties(TDMCollection.prototype);


/***/ }),

/***/ "../../libs/core/tdm/src/lib/model/tdm-model.ts":
/*!***************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/model/tdm-model.ts ***!
  \***************************************************************************************************/
/*! exports provided: TDMModelBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDMModelBase", function() { return TDMModelBase; });
/* harmony import */ var _tdm_tixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/tixin */ "../../libs/tixin/src/index.ts");
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

var TDMModelMark = Symbol('TDMModel instance mark');
var TDMModelBase = /** @class */ (function () {
    function TDMModelBase() {
    }
    TDMModelBase.prototype.toString = function () {
        return this.constructor.name;
    };
    TDMModelBase.instanceOf = function (instance) {
        return instance[TDMModelMark] === true;
    };
    TDMModelBase.factory = function (model) {
        var TDModel = /** @class */ (function (_super) {
            __extends(TDModel, _super);
            function TDModel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return TDModel;
        }(model));
        Object.defineProperty(TDModel, 'name', {
            configurable: true,
            value: model.name
        });
        Object.defineProperty(TDModel, Symbol.hasInstance, {
            value: TDMModelBase.instanceOf
        });
        Object(_tdm_tixin__WEBPACK_IMPORTED_MODULE_0__["TixinFree"])(TDModel, TDMModelBase, 'proto');
        // TODO: copy other TS reflection info
        var paramTypes = Reflect.getOwnMetadata('design:paramtypes', model);
        Reflect.defineMetadata('design:paramtypes', paramTypes, TDModel);
        return TDModel;
    };
    return TDMModelBase;
}());

Object.defineProperty(TDMModelBase.prototype, TDMModelMark, { value: true });


/***/ }),

/***/ "../../libs/core/tdm/src/lib/tdm.ts":
/*!***************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/core/tdm/src/lib/tdm.ts ***!
  \***************************************************************************************/
/*! exports provided: errors, Errors, stringify, isNumber, isString, isFunction, isUndefined, isJsObject, isPrimitive, LazyInit, DualKeyMap, SetExt, KeySet, MapExt, ensureTargetIsType, setMetaHelper, BaseMetadata, BaseParamMetadata, TargetEvents, lazyRef, getBaseClass, getProtoChain, reflection, MetaClassMetadata, MetaClass, TypeMetadata, PropMetadata, ExcludeMetadata, RelationMetadata, TargetStore, TargetMetadata, targetStore, directMapper, TransformationError, DirectSerializeMapper, DirectDeserializeMapper, DeserializeMapper, SerializeMapper, transformValueOut, PlainObjectMapper, TDMCollection, TDMModelBase, Model, ModelMetadata, processModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fw_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fw/index */ "../../libs/core/tdm/src/lib/fw/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["Errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["stringify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJsObject", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["isJsObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyInit", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["LazyInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DualKeyMap", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["DualKeyMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetExt", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["SetExt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeySet", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["KeySet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapExt", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["MapExt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensureTargetIsType", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["ensureTargetIsType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMetaHelper", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["setMetaHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseMetadata", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseParamMetadata", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["BaseParamMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetEvents", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["TargetEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazyRef", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["lazyRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBaseClass", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["getBaseClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProtoChain", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["getProtoChain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reflection", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["reflection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaClassMetadata", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["MetaClassMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaClass", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_0__["MetaClass"]; });

/* harmony import */ var _metadata_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metadata/index */ "../../libs/core/tdm/src/lib/metadata/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_1__["TypeMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_1__["PropMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExcludeMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_1__["ExcludeMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelationMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_1__["RelationMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetStore", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_1__["TargetStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_1__["TargetMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetStore", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_1__["targetStore"]; });

/* harmony import */ var _mapping_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapping/index */ "../../libs/core/tdm/src/lib/mapping/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directMapper", function() { return _mapping_index__WEBPACK_IMPORTED_MODULE_2__["directMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransformationError", function() { return _mapping_index__WEBPACK_IMPORTED_MODULE_2__["TransformationError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectSerializeMapper", function() { return _mapping_index__WEBPACK_IMPORTED_MODULE_2__["DirectSerializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectDeserializeMapper", function() { return _mapping_index__WEBPACK_IMPORTED_MODULE_2__["DirectDeserializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeserializeMapper", function() { return _mapping_index__WEBPACK_IMPORTED_MODULE_2__["DeserializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SerializeMapper", function() { return _mapping_index__WEBPACK_IMPORTED_MODULE_2__["SerializeMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformValueOut", function() { return _mapping_index__WEBPACK_IMPORTED_MODULE_2__["transformValueOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlainObjectMapper", function() { return _mapping_index__WEBPACK_IMPORTED_MODULE_2__["PlainObjectMapper"]; });

/* harmony import */ var _model_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/index */ "../../libs/core/tdm/src/lib/model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMCollection", function() { return _model_index__WEBPACK_IMPORTED_MODULE_3__["TDMCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelBase", function() { return _model_index__WEBPACK_IMPORTED_MODULE_3__["TDMModelBase"]; });

/* harmony import */ var _add_model_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/model/index */ "../../libs/core/tdm/src/lib/add/model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _add_model_index__WEBPACK_IMPORTED_MODULE_4__["Model"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelMetadata", function() { return _add_model_index__WEBPACK_IMPORTED_MODULE_4__["ModelMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processModel", function() { return _add_model_index__WEBPACK_IMPORTED_MODULE_4__["processModel"]; });

/* harmony import */ var _add_target_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/target-store */ "../../libs/core/tdm/src/lib/add/target-store/index.ts");
/* harmony import */ var _add_mapping__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/mapping */ "../../libs/core/tdm/src/lib/add/mapping/index.ts");







Object(_add_mapping__WEBPACK_IMPORTED_MODULE_6__["initMapping"])();
 // we need this for d.ts export, the 2 rows above are not set in d.ts)


/***/ }),

/***/ "../../libs/data/src/index.ts":
/*!*********************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/index.ts ***!
  \*********************************************************************************/
/*! exports provided: ActionMetadata, ActionMethodType, AdapterMetadata, AfterHook, AutoIdentity, BeforeHook, BelongsTo, BelongsToMetadata, Exclude, ExtendAction, ExtendActionMetadata, Hook, HookMetadata, Identity, Owns, OwnsMetadata, Prop, Resource, store, validators, plugins, PluginStore, isResourceEvent, events$, ResourceEvent, ActionErrorResourceEvent, ActionEndResourceEvent, eventFactory, StateChangeResourceEvent, findProp, isSymbol, isTdmPropertyKey, promiser, TDMModelBase, TDMCollection, DAO, ResourceControl, ActionController, ExecuteContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/data */ "../../libs/data/src/lib/data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionMetadata", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["ActionMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionMethodType", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["ActionMethodType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdapterMetadata", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["AdapterMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AfterHook", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["AfterHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoIdentity", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["AutoIdentity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeHook", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["BeforeHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BelongsTo", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["BelongsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BelongsToMetadata", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["BelongsToMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exclude", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["Exclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendAction", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["ExtendAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendActionMetadata", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["ExtendActionMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hook", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["Hook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HookMetadata", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["HookMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["Identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Owns", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["Owns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwnsMetadata", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["OwnsMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["Prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["Resource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validators", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["validators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["plugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginStore", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["PluginStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isResourceEvent", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["isResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events$", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["events$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceEvent", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["ResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionErrorResourceEvent", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["ActionErrorResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionEndResourceEvent", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["ActionEndResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFactory", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["eventFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateChangeResourceEvent", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["StateChangeResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findProp", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["findProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["isSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTdmPropertyKey", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["isTdmPropertyKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promiser", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["promiser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelBase", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["TDMModelBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMCollection", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["TDMCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAO", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["DAO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceControl", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["ResourceControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionController", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["ActionController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecuteContext", function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__["ExecuteContext"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/data/src/lib/active-record/interfaces.ts":
/*!********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/active-record/interfaces.ts ***!
  \********************************************************************************************************/
/*! exports provided: ARMethods, ARHooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARMethods", function() { return ARMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARHooks", function() { return ARHooks; });
/**
 * String enumeration of active record object methods
 */
var ARMethods = {
    // Keep this any, or 3rd party extending of ARMethodType will fail
    $create: '$create',
    $update: '$update',
    $replace: '$replace',
    $remove: '$remove',
    $get: '$get'
};
var ARHooks = {
    $create: { type: 'instance' },
    $update: { type: 'instance' },
    $replace: { type: 'instance' },
    $remove: { type: 'instance' },
    $get: { type: 'instance' },
    findById: { type: 'static' },
    find: { type: 'static' },
    findOne: { type: 'static' },
    query: { type: 'static' },
    findAll: { type: 'static' },
    create: { type: 'static' },
    update: { type: 'static' },
    replace: { type: 'static' },
    remove: { type: 'static' },
    /**
     * Clear the whole table representing a resource.
     */
    clear: { type: 'static' }
};


/***/ }),

/***/ "../../libs/data/src/lib/core-validators.ts":
/*!***********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/core-validators.ts ***!
  \***********************************************************************************************/
/*! exports provided: declared, required, instanceOf, Min, Max, Between, validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declared", function() { return declared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return instanceOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Min", function() { return Min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Max", function() { return Max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Between", function() { return Between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validators", function() { return validators; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");

var undef = undefined;
function isTypeof(value, type) {
    switch (type) {
        case Boolean:
            return typeof value === 'boolean';
        case String:
            return typeof value === 'string';
        case Number:
            return typeof value === 'number';
        default:
            return false;
    }
}
/**
 * Validates that the value is declared on the object, i.e. hasOwnProperty
 * The value can be undefined, null or any other falsy expression.
 *
 */
var declared = {
    name: 'declared',
    validate: function (ctx) {
        return ctx.target.hasOwnProperty(ctx.member);
    },
    errorMessage: function (ctx) {
        return "Property " + ctx.member + " is not declared";
    }
};
/**
 * Validates that the value is present, i.e. the value is not undefined and not null.
 */
var required = {
    name: 'required',
    validate: function (ctx) {
        return ctx.value !== undef && ctx.value !== null;
    },
    errorMessage: function (ctx) {
        return "Property " + ctx.member + " is required";
    }
};
/**
 * Checks if the value is an instance of it's type.
 * If instanceOf check fails and the type is Boolean, String or Number and additional check is done
 * using the typeof operator.
 */
var instanceOf = {
    name: 'instanceOf',
    validate: function (ctx) {
        return ctx.value instanceof ctx.type || isTypeof(ctx.value, ctx.type);
    },
    errorMessage: function (ctx) {
        return "Property " + ctx.member + " is not an instance of " + ctx.type.name;
    }
};
/**
 * Validates that the value is greater than or equal to the minimum.
 * Does not validate that value is a number.
 */
var Min = /** @class */ (function () {
    function Min(min) {
        this.min = min;
        this.name = 'minimum';
        if (!Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(min)) {
            _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"].throw.validationConfig(this.name, 'input "min" is not a number');
        }
    }
    Min.prototype.validate = function (ctx) {
        return ctx.value >= this.min;
    };
    Min.prototype.errorMessage = function (ctx) {
        return "Property " + ctx.member + " must be greater than or equal to " + this.min;
    };
    return Min;
}());

/**
 * Validates that the value is less than or equal to the maximum.
 * Does not validate that value is a number.
 */
var Max = /** @class */ (function () {
    function Max(max) {
        this.max = max;
        this.name = 'maximum';
        if (!Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(max)) {
            _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"].throw.validationConfig(this.name, 'input "max" is not a number');
        }
    }
    Max.prototype.validate = function (ctx) {
        return ctx.value <= this.max;
    };
    Max.prototype.errorMessage = function (ctx) {
        return "Property " + ctx.member + " must be less than or equal to " + this.max;
    };
    return Max;
}());

/**
 * Validates that the value is between (but not equal to) the minimum and maximum.
 * Does not validate that value is a number.
 */
var Between = /** @class */ (function () {
    function Between(min, max) {
        this.min = min;
        this.max = max;
        this.name = 'between';
        if (!Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(min)) {
            _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"].throw.validationConfig(this.name, 'input "min" is not a number');
        }
        if (!Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(max)) {
            _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"].throw.validationConfig(this.name, 'input "max" is not a number');
        }
    }
    Between.prototype.validate = function (ctx) {
        return ctx.value > this.min && ctx.value < this.max;
    };
    Between.prototype.errorMessage = function (ctx) {
        return "Property " + ctx.member + " must be between " + this.min + " and " + this.max;
    };
    return Between;
}());

var validators = {
    declared: declared,
    required: required,
    instanceOf: instanceOf,
    Min: Min,
    Max: Max,
    Between: Between
};


/***/ }),

/***/ "../../libs/data/src/lib/core/action-controller.ts":
/*!******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/core/action-controller.ts ***!
  \******************************************************************************************************/
/*! exports provided: ActionController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionController", function() { return ActionController; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "../../libs/data/src/lib/events/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/data/src/lib/utils/index.ts");
/* harmony import */ var _resource_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource-control */ "../../libs/data/src/lib/resource-control.ts");
/* harmony import */ var _execute_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./execute-context */ "../../libs/data/src/lib/core/execute-context.ts");





var ActionController = /** @class */ (function () {
    function ActionController(targetMetadata, adapterClass) {
        this.targetMetadata = targetMetadata;
        this.adapterClass = adapterClass;
        this.target = targetMetadata.target;
        // TODO: adapter can be shared for all targets
        this.adapter = new adapterClass();
        this.adapterMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getAdapter(adapterClass);
    }
    ActionController.prototype.createExecFactory = function (action, ret) {
        var ac = this;
        return function (self, params) {
            return ac.execute(this.clone(self), params, ret);
        }.bind(new _execute_context__WEBPACK_IMPORTED_MODULE_4__["ExecuteContext"](this.targetMetadata, action));
    };
    ActionController.prototype.execute = function (ctx, params, ret) {
        var _this = this;
        var action = ctx.action;
        var args = params.args || [];
        if (args.length < action.paramHint) {
            args[action.paramHint - 1] = {};
        }
        // we keep alive any resource that returns an instance, which is AR.
        var keepAliveResourceControl = ret !== 'promise';
        // if the user opt in to force promise response, mark it
        if (action.post && action.post.returns && ret !== 'promise') {
            ret = 'promise';
            // 'instance' is ActiveRecord but post process that also controls the return value is not longer 'instance'
            // We must clone the instance otherwise it will create strange behaviour in `ResourceControl` (busy, _next, etc..)
            ctx = ctx.clone();
            if (ctx.instance) {
                // TODO: instead of clone we can do Object.create(ctx.instance), should be b
                ctx.setInstance(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMModelBase"].clone(ctx.instance));
            }
        }
        var options = Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(action.pre) ? action.pre.apply(action, [ctx].concat(args)) : args[0];
        if (!ctx.instance) {
            ctx.setInstance();
        }
        // finally set the mode after the initial setup.
        var promiseMode = ret === 'promise';
        var eState;
        // TODO: move this to be part of the promise flow
        var doFinally = function () {
            eState.rc.set('busy', false);
        };
        // TODO:  fireEvent uses member name as Hook matcher, this requires member name to be one of
        //        "ARHookableMethods", let user set the action method in ActionMetadata or something
        //        - Also applied to fireEvent "after" below.
        var promise = new Promise(function (resolve) { return setTimeout(resolve, 0); })
            .then(function () {
            if (!!action.isCollection !== _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMCollection"].instanceOf(ctx.instance)) {
                throw _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"].modelSingleCol(ctx.instance, action.isCollection);
            }
            else if (eState.wasBusy) {
                throw new Error('An action is already running');
            }
            Object(_events__WEBPACK_IMPORTED_MODULE_1__["dispatchEvent"])(_events__WEBPACK_IMPORTED_MODULE_1__["eventFactory"].actionStart(ctx.instance));
            if (_this.adapter.supports.cancel) {
                Object(_events__WEBPACK_IMPORTED_MODULE_1__["dispatchEvent"])(new _events__WEBPACK_IMPORTED_MODULE_1__["CancellationTokenResourceEvent"](ctx.instance, function () {
                    return _this.cancel(eState, ctx);
                }));
            }
        })
            .then(function () {
            return _this.fireHook(action.name, 'before', ctx.instance, options);
        })
            .then(function () { return _this.validate('outgoing', action.validation, ctx); })
            .then(function () {
            if (eState.cancelled === true) {
                // this error will be omitted, its here to skip all the then's.
                throw new Error('Cancelled');
            }
            var adapterResponse = _this.adapter.execute(ctx, options, params);
            eState.id = adapterResponse.id;
            eState.request = adapterResponse.request;
            // TODO: If user cancelled and the adapter does not throw an error on cancellation
            //       this means that the promise chain will continue, need to fix it.
            //       Need to create a promise flow where steps can be skipped
            //       this also applies on the first 2 steps
            return adapterResponse.response.then(function (response) {
                if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isJsObject"])(response.data)) {
                    if (response.skipDeserialize !== true ||
                        !action.post ||
                        !action.post.returns) {
                        ctx.deserialize(response.data);
                    }
                }
                if (action.post) {
                    eState.postReturnsResult = action.post.handler.apply(ctx.instance, [
                        response,
                        options
                    ]);
                }
                return (action.isCollection
                    ? Promise.resolve()
                    : _this.validate('incoming', action.validation, ctx))
                    .then(function () {
                    return _this.fireHook(action.name, 'after', ctx.instance, options, response);
                })
                    .then(function () { return response; });
            });
        })
            .then(function (response) {
            Object(_events__WEBPACK_IMPORTED_MODULE_1__["dispatchEvent"])(_events__WEBPACK_IMPORTED_MODULE_1__["eventFactory"].success(ctx.instance));
            doFinally();
            Object(_events__WEBPACK_IMPORTED_MODULE_1__["dispatchEvent"])(_events__WEBPACK_IMPORTED_MODULE_1__["eventFactory"].actionEnd(ctx.instance, 'success', eState.request, response.response));
            return action.post && action.post.returns
                ? eState.postReturnsResult
                : promiseMode && !Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isJsObject"])(response.data)
                    ? response.data
                    : ctx.instance;
        })
            .catch(function (error) {
            if (eState.cancelled !== true) {
                Object(_events__WEBPACK_IMPORTED_MODULE_1__["dispatchEvent"])(_events__WEBPACK_IMPORTED_MODULE_1__["eventFactory"].error(ctx.instance, error, eState.request));
                if (promiseMode) {
                    // rethrow if the user handles the promise
                    doFinally();
                    throw error;
                }
            }
            doFinally();
        });
        // fired before the promise is returned to the user (the last param, async, is not set)
        // this is important, because we must register the instance/promise for lookup's before the user can
        // do ResourceControl.get(...)
        Object(_events__WEBPACK_IMPORTED_MODULE_1__["dispatchEvent"])(new _events__WEBPACK_IMPORTED_MODULE_1__["ExecuteInitResourceEvent"](ctx.instance, { ac: this, action: action, params: params }, ret, promise, keepAliveResourceControl));
        eState = {
            rc: _resource_control__WEBPACK_IMPORTED_MODULE_3__["ResourceControl"].get(ctx.instance)
        };
        // we only care about busy mode when working on an instance to prevent race conditions.
        if (!promiseMode) {
            eState.wasBusy = eState.rc.busy;
        }
        eState.rc.set('busy', true);
        // TODO: implement timeout to protect from stale promises?
        return promiseMode ? promise : ctx.instance;
    };
    ActionController.prototype.cancel = function (eState, ctx) {
        if (!eState.cancelled) {
            eState.cancelled = true;
            Object(_events__WEBPACK_IMPORTED_MODULE_1__["dispatchEvent"])(_events__WEBPACK_IMPORTED_MODULE_1__["eventFactory"].cancel(ctx.instance));
            eState.rc.set('busy', false);
            if (eState.id) {
                this.adapter.cancel(eState.id);
            }
            Object(_events__WEBPACK_IMPORTED_MODULE_1__["dispatchEvent"])(_events__WEBPACK_IMPORTED_MODULE_1__["eventFactory"].actionEnd(ctx.instance, 'cancel', eState.request));
        }
    };
    ActionController.prototype.validate = function (type, validation, ctx) {
        if (type === validation || validation === 'both') {
            return this.targetMetadata
                .validate(ctx.instance)
                .then(function (validationErrors) {
                if (validationErrors.length > 0) {
                    _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"].throw.validation(ctx.instance, validationErrors);
                }
            });
        }
        else {
            return Promise.resolve();
        }
    };
    ActionController.prototype.fireHook = function (action, event, self, options) {
        var args = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            args[_i - 4] = arguments[_i];
        }
        var hookMetadata = this.targetMetadata.findHookEvent(action, event);
        var fn = hookMetadata
            ? hookMetadata.decoratorInfo.isStatic
                ? this.target[hookMetadata.name]
                : self[hookMetadata.name]
            : _utils__WEBPACK_IMPORTED_MODULE_2__["noop"];
        return Promise.resolve(fn.apply(self, [options].concat(args)));
    };
    return ActionController;
}());



/***/ }),

/***/ "../../libs/data/src/lib/core/execute-context.ts":
/*!****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/core/execute-context.ts ***!
  \****************************************************************************************************/
/*! exports provided: ExecuteContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteContext", function() { return ExecuteContext; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/data/src/lib/utils/index.ts");
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../default-config */ "../../libs/data/src/lib/default-config.ts");



// TODO: TS 2.3 (set the instance type)
// export class ExecuteContext<T = any, Z extends ActionMetadata = ActionMetadata> {
var ExecuteContext = /** @class */ (function () {
    function ExecuteContext(meta, action, mapper) {
        this.meta = meta;
        this.action = action;
        this.mapper =
            this.mapper || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findProp"])('mapper', _default_config__WEBPACK_IMPORTED_MODULE_2__["defaultConfig"], meta.model());
    }
    Object.defineProperty(ExecuteContext.prototype, "targetMeta", {
        get: function () {
            return this.meta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecuteContext.prototype, "instance", {
        /**
         * The instance representing this execution context.
         *
         * The instance not set, to set the instance use the setInstance() method.
         * Note that calling any method in ExecuteContext that requires the instance (setIdentity, deserialize,
         * serialize  etc...) will automatically init a new instance.
         *
         * This also mean that the instance can be set from an action's "pre" handler.
         * An instance set must be an instance of the target or an instance of ActiveRecordCollection.
         * (i.e. return true from the call to ExecuteContext#instanceOf)
         */
        get: function () {
            // TODO: TS 2.3 TDMModel<T> | TDMCollection<T> {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecuteContext.prototype, "safeInstance", {
        get: function () {
            return this._instance || (this.setInstance(), this._instance);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The the instance for this execution context.
     * If no value supplied the instance set is a new instance or a new TDMCollection (based on the action)
     * @param value
     */
    ExecuteContext.prototype.setInstance = function (value) {
        if (this._instance) {
            throw new Error('Instance exists');
        }
        if (!value) {
            value = this.meta.model().factory(this.action.isCollection);
        }
        else if (!this.instanceOf(value)) {
            throw new Error('Instance does not match type');
        }
        this._instance = value;
    };
    /**
     * Returns true if an object is an instance of the target type of this execution context.
     * The target type is ActionRecordCollection when the action of this execution context
     * is true (ActionMetadata#isCollection) otherwise it is the target.
     * @param obj
     */
    ExecuteContext.prototype.instanceOf = function (obj) {
        return this.action.isCollection
            ? _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMCollection"].instanceOf(obj)
            : obj instanceof this.meta.target;
    };
    ExecuteContext.prototype.getIdentity = function () {
        return this.safeInstance[this.meta.getIdentityKey()];
    };
    ExecuteContext.prototype.setIdentity = function (identity) {
        this.safeInstance[this.meta.getIdentityKey()] = identity;
    };
    /**
     * Serialize the instance in this execution context.
     */
    ExecuteContext.prototype.serialize = function () {
        return this.meta.serialize(this.mapper.serializer(this.safeInstance));
    };
    /**
     * Deserialize an object into the instance of the current execution context.
     * If an instance does not exist, it will be created on the fly.
     * @param data
     */
    ExecuteContext.prototype.deserialize = function (data) {
        if (data) {
            // only if exists (false, 0, '' and all falsy's === not exists)
            var mapper = this.mapper.deserializer(data, this.meta.target);
            var isColl = !!this.action.isCollection;
            if (mapper.isCollection !== isColl) {
                _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"].throw.modelSingleCol(this.safeInstance, isColl);
            }
            this.meta.deserialize(mapper, this.safeInstance);
        }
    };
    /**
     * Returns a context-free copy of the current execution context.
     * The returned execution context does not contain the instance and/or data that existed in the source execution
     * context.
     */
    ExecuteContext.prototype.clone = function (instance) {
        var ctx = new ExecuteContext(this.meta, this.action, this.mapper);
        if (instance) {
            ctx.setInstance(instance);
        }
        return ctx;
    };
    return ExecuteContext;
}());



/***/ }),

/***/ "../../libs/data/src/lib/core/index.ts":
/*!******************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/core/index.ts ***!
  \******************************************************************************************/
/*! exports provided: ActionController, ExecuteContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-controller */ "../../libs/data/src/lib/core/action-controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionController", function() { return _action_controller__WEBPACK_IMPORTED_MODULE_0__["ActionController"]; });

/* harmony import */ var _execute_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./execute-context */ "../../libs/data/src/lib/core/execute-context.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecuteContext", function() { return _execute_context__WEBPACK_IMPORTED_MODULE_1__["ExecuteContext"]; });





/***/ }),

/***/ "../../libs/data/src/lib/core/target-validator.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/core/target-validator.ts ***!
  \*****************************************************************************************************/
/*! exports provided: getInstructions, TargetValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstructions", function() { return getInstructions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetValidator", function() { return TargetValidator; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
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
 * @internal
 */
function getInstructions(targetType) {
    // TODO: once @Validators are allowed (along with PropMetadata#Validators) aggregate here.
    return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"]
        .getTargetMeta(targetType)
        .getValues(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["PropMetadata"])
        .map(function (prop) { return ({
        validators: prop.validation,
        prop: prop
    }); });
}
var TargetValidator = /** @class */ (function () {
    function TargetValidator(targetType) {
        this.targetType = targetType;
    }
    TargetValidator.prototype.validate = function (instance) {
        var promises = [];
        var meta = this.meta;
        meta.forEach(function (p) {
            var context = {
                member: p.prop.name,
                target: instance,
                value: instance[p.prop.name],
                type: p.prop.type.ref
            };
            var propValidations = p.validators.map(function (validator) {
                return Promise.resolve(validator.validate(context)).then(function (result) { return (!result ? validator : undefined); });
            });
            var promise = Promise.all(propValidations).then(function (results) {
                return {
                    context: context,
                    validators: results.filter(function (v) { return !!v; })
                };
            });
            promises.push(promise);
        });
        return Promise.all(promises).then(function (results) {
            return results.filter(function (r) { return r.validators.length > 0; }).map(function (r) {
                return {
                    context: r.context,
                    errors: r.validators.reduce(function (prev, v) {
                        prev[v.name] = v.errorMessage(r.context);
                        return prev;
                    }, {})
                };
            });
        });
    };
    __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["LazyInit"])(function () {
            return getInstructions(this.targetType);
        }),
        __metadata("design:type", Array)
    ], TargetValidator.prototype, "meta", void 0);
    return TargetValidator;
}());



/***/ }),

/***/ "../../libs/data/src/lib/dao/dao.ts":
/*!***************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/dao/dao.ts ***!
  \***************************************************************************************/
/*! exports provided: DAO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAO", function() { return DAO; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbols */ "../../libs/data/src/lib/dao/symbols.ts");


var DAO = /** @class */ (function () {
    function DAO() {
    }
    DAO.prototype.findById = function (target, id, options) {
        return this.run(target, 'findById', id, options);
    };
    DAO.prototype.find = function (target, options) {
        return this.run(target, 'find', options);
    };
    DAO.prototype.findOne = function (target, options) {
        return this.find(target, options);
    };
    DAO.prototype.query = function (target, options) {
        return this.run(target, 'query', options);
    };
    DAO.prototype.findAll = function (target, options) {
        return this.query(target, options);
    };
    DAO.prototype.create = function (target, obj, options) {
        return this.runTargetOrInstance(target, 'create', obj, options);
    };
    DAO.prototype.update = function (target, obj, options) {
        return this.runTargetOrInstance(target, 'update', obj, options);
    };
    DAO.prototype.replace = function (target, obj, options) {
        return this.runTargetOrInstance(target, 'replace', obj, options);
    };
    DAO.prototype.remove = function (target, id, options) {
        return this.runTargetOrInstance(target, 'remove', id, options);
    };
    /**
     * Clear the whole table representing a resource.
     */
    DAO.prototype.clear = function (target) {
        return this.run(target, 'clear');
    };
    DAO.prototype.runTargetOrInstance = function (target, cmd) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(target)) {
            return this.run.apply(this, [target, cmd].concat(args));
        }
        else {
            if (_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].hasTarget(target.constructor)) {
                return this.run.apply(this, [target.constructor, cmd].concat(args));
            }
            // TODO: got down proto chain and search for target.
        }
        // TODO: normalize error.
        return Promise.reject(new Error('Invalid input'));
    };
    DAO.prototype.run = function (target, cmd) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (!_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].hasTarget(target)) {
            // TODO: normalize error.
            return Promise.reject(new Error('Target does not exist'));
        }
        var meta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(target);
        if (!meta.activeAdapter) {
            return Promise.reject(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"].modelNoAdapter(target));
        }
        var action = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getAdapter(meta.activeAdapter).getDAOAction(cmd);
        if (!action) {
            return Promise.reject(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"].adapterNoAction(meta.activeAdapter, cmd));
        }
        return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"]
            .getAC(target, meta.activeAdapter)
            .createExecFactory(action, 'promise')(undefined, { args: args });
    };
    /**
     * Returns the DAO of an adapter, attached to a target.
     * @param adapterClass
     * @param target
     * @param factoryArgs
     * @returns
     */
    DAO.of = function (adapterClass, target, factoryArgs) {
        var clz = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getAdapter(adapterClass).DAOClass;
        var daoCtx = {
            target: target,
            adapter: adapterClass,
            factoryArgs: factoryArgs
        };
        return Object.create(clz.prototype, (_a = {},
            _a[_symbols__WEBPACK_IMPORTED_MODULE_1__["DAOContextSymbol"]] = { value: daoCtx },
            _a));
        var _a;
    };
    return DAO;
}());



/***/ }),

/***/ "../../libs/data/src/lib/dao/index.ts":
/*!*****************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/dao/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: DAOContextSymbol, DAOMethods, DAO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbols */ "../../libs/data/src/lib/dao/symbols.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAOContextSymbol", function() { return _symbols__WEBPACK_IMPORTED_MODULE_0__["DAOContextSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAOMethods", function() { return _symbols__WEBPACK_IMPORTED_MODULE_0__["DAOMethods"]; });

/* harmony import */ var _dao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dao */ "../../libs/data/src/lib/dao/dao.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAO", function() { return _dao__WEBPACK_IMPORTED_MODULE_1__["DAO"]; });





/***/ }),

/***/ "../../libs/data/src/lib/dao/symbols.ts":
/*!*******************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/dao/symbols.ts ***!
  \*******************************************************************************************/
/*! exports provided: DAOContextSymbol, DAOMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAOContextSymbol", function() { return DAOContextSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAOMethods", function() { return DAOMethods; });
/**
 * @internal
 */
var DAOContextSymbol = Symbol('DAO context prop');
var DAOMethods = {
    // Keep this any, or 3rd party extending of DAOMethodType will fail
    findById: 'findById',
    find: 'find',
    findOne: 'findOne',
    query: 'query',
    findAll: 'findAll',
    create: 'create',
    update: 'update',
    replace: 'replace',
    remove: 'remove',
    /**
     * Clear the whole table representing a resource.
     */
    clear: 'clear'
};


/***/ }),

/***/ "../../libs/data/src/lib/data.ts":
/*!************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/data.ts ***!
  \************************************************************************************/
/*! exports provided: ActionMetadata, ActionMethodType, AdapterMetadata, AfterHook, AutoIdentity, BeforeHook, BelongsTo, BelongsToMetadata, Exclude, ExtendAction, ExtendActionMetadata, Hook, HookMetadata, Identity, Owns, OwnsMetadata, Prop, Resource, store, validators, plugins, PluginStore, isResourceEvent, events$, ResourceEvent, ActionErrorResourceEvent, ActionEndResourceEvent, eventFactory, StateChangeResourceEvent, findProp, isSymbol, isTdmPropertyKey, promiser, TDMModelBase, TDMCollection, DAO, ResourceControl, ActionController, ExecuteContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metadata_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata/index */ "../../libs/data/src/lib/metadata/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["ActionMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionMethodType", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["ActionMethodType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdapterMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["AdapterMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AfterHook", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["AfterHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoIdentity", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["AutoIdentity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeHook", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["BeforeHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BelongsTo", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["BelongsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BelongsToMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["BelongsToMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exclude", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["Exclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendAction", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["ExtendAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendActionMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["ExtendActionMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hook", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["Hook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HookMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["HookMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["Identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Owns", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["Owns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwnsMetadata", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["OwnsMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["Prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["Resource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _metadata_index__WEBPACK_IMPORTED_MODULE_0__["store"]; });

/* harmony import */ var _transformation_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transformation/index */ "../../libs/data/src/lib/transformation/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/index */ "../../libs/data/src/lib/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionController", function() { return _core_index__WEBPACK_IMPORTED_MODULE_2__["ActionController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecuteContext", function() { return _core_index__WEBPACK_IMPORTED_MODULE_2__["ExecuteContext"]; });

/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-validators */ "../../libs/data/src/lib/core-validators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validators", function() { return _core_validators__WEBPACK_IMPORTED_MODULE_3__["validators"]; });

/* harmony import */ var _fw_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fw/index */ "../../libs/data/src/lib/fw/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_4__["plugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginStore", function() { return _fw_index__WEBPACK_IMPORTED_MODULE_4__["PluginStore"]; });

/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/index */ "../../libs/data/src/lib/events/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isResourceEvent", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["isResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events$", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["events$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceEvent", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["ResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionErrorResourceEvent", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["ActionErrorResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionEndResourceEvent", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["ActionEndResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFactory", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["eventFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateChangeResourceEvent", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["StateChangeResourceEvent"]; });

/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/index */ "../../libs/data/src/lib/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findProp", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_6__["findProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_6__["isSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTdmPropertyKey", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_6__["isTdmPropertyKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promiser", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_6__["promiser"]; });

/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMModelBase", function() { return _tdm_core__WEBPACK_IMPORTED_MODULE_7__["TDMModelBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TDMCollection", function() { return _tdm_core__WEBPACK_IMPORTED_MODULE_7__["TDMCollection"]; });

/* harmony import */ var _dao_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dao/index */ "../../libs/data/src/lib/dao/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAO", function() { return _dao_index__WEBPACK_IMPORTED_MODULE_8__["DAO"]; });

/* harmony import */ var _resource_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resource-control */ "../../libs/data/src/lib/resource-control.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceControl", function() { return _resource_control__WEBPACK_IMPORTED_MODULE_9__["ResourceControl"]; });


 // extending @tdm/core





// re-export common types from core





/***/ }),

/***/ "../../libs/data/src/lib/default-config.ts":
/*!**********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/default-config.ts ***!
  \**********************************************************************************************/
/*! exports provided: defaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return defaultConfig; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");

var defaultConfig = {
    mapper: _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["directMapper"],
    transformStrategy: 'inclusive',
    transformNameStrategy: undefined
};


/***/ }),

/***/ "../../libs/data/src/lib/events/events.ts":
/*!*********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/events/events.ts ***!
  \*********************************************************************************************/
/*! exports provided: ResourceEvent, ActionErrorResourceEvent, ActionEndResourceEvent, eventFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceEvent", function() { return ResourceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionErrorResourceEvent", function() { return ActionErrorResourceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionEndResourceEvent", function() { return ActionEndResourceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFactory", function() { return eventFactory; });
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
var ResourceEvent = /** @class */ (function () {
    function ResourceEvent(resource, type) {
        this.resource = resource;
        this.type = type;
    }
    return ResourceEvent;
}());

var ActionErrorResourceEvent = /** @class */ (function (_super) {
    __extends(ActionErrorResourceEvent, _super);
    function ActionErrorResourceEvent(resource, error, request, response) {
        var _this = _super.call(this, resource, 'ActionError') || this;
        _this.resource = resource;
        _this.error = error;
        _this.request = request;
        _this.response = response;
        return _this;
    }
    return ActionErrorResourceEvent;
}(ResourceEvent));

var ActionEndResourceEvent = /** @class */ (function (_super) {
    __extends(ActionEndResourceEvent, _super);
    function ActionEndResourceEvent(resource, result, request, response) {
        var _this = _super.call(this, resource, 'ActionEnd') || this;
        _this.resource = resource;
        _this.result = result;
        _this.request = request;
        _this.response = response;
        return _this;
    }
    return ActionEndResourceEvent;
}(ResourceEvent));

var eventFactory = {
    actionStart: function (resource) {
        return new ResourceEvent(resource, 'ActionStart');
    },
    error: function (resource, err, request, response) {
        return new ActionErrorResourceEvent(resource, err, request, response);
    },
    cancel: function (resource) {
        return new ResourceEvent(resource, 'ActionCancel');
    },
    success: function (resource) {
        return new ResourceEvent(resource, 'ActionSuccess');
    },
    actionEnd: function (resource, result, request, response) {
        return new ActionEndResourceEvent(resource, result, request, response);
    }
};


/***/ }),

/***/ "../../libs/data/src/lib/events/index.ts":
/*!********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/events/index.ts ***!
  \********************************************************************************************/
/*! exports provided: dispatcher, events$, dispatchEvent, isResourceEvent, ResourceEvent, ActionErrorResourceEvent, ActionEndResourceEvent, eventFactory, isInternalError, CancellationTokenResourceEvent, ExecuteInitResourceEvent, StateChangeResourceEvent, SimpleEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatcher", function() { return dispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events$", function() { return events$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchEvent", function() { return dispatchEvent; });
/* harmony import */ var _simple_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-events */ "../../libs/data/src/lib/events/simple-events.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "../../libs/data/src/lib/events/interfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isResourceEvent", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_1__["isResourceEvent"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "../../libs/data/src/lib/events/events.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceEvent", function() { return _events__WEBPACK_IMPORTED_MODULE_2__["ResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionErrorResourceEvent", function() { return _events__WEBPACK_IMPORTED_MODULE_2__["ActionErrorResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionEndResourceEvent", function() { return _events__WEBPACK_IMPORTED_MODULE_2__["ActionEndResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFactory", function() { return _events__WEBPACK_IMPORTED_MODULE_2__["eventFactory"]; });

/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal */ "../../libs/data/src/lib/events/internal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInternalError", function() { return _internal__WEBPACK_IMPORTED_MODULE_3__["isInternalError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CancellationTokenResourceEvent", function() { return _internal__WEBPACK_IMPORTED_MODULE_3__["CancellationTokenResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecuteInitResourceEvent", function() { return _internal__WEBPACK_IMPORTED_MODULE_3__["ExecuteInitResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateChangeResourceEvent", function() { return _internal__WEBPACK_IMPORTED_MODULE_3__["StateChangeResourceEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleEvents", function() { return _simple_events__WEBPACK_IMPORTED_MODULE_0__["SimpleEvents"]; });






var dispatcher;
var events$;
dispatcher = events$ = new _simple_events__WEBPACK_IMPORTED_MODULE_0__["SimpleEvents"]();
/**
 * Dispatch a resource control event.
 * These event's are fired to local listeners, not the user's listeners.
 * The local listeners will trigger user's listeners.
 *
 * @param event
 * @param async When not set, fire's the event sync within the current task.
 * When set to true the event is fired at the end of the current micro task
 * When set to a number, the even if fired as a macro task, after an amount of ms provided as the number.
 */
function dispatchEvent(event, async) {
    if (async >= 0) {
        setTimeout(function () { return dispatcher.next(event); }, async);
    }
    else if (async === true) {
        Promise.resolve(null).then(function () { return dispatcher.next(event); });
    }
    else {
        try {
            dispatcher.next(event);
        }
        catch (err) { } // tslint:disable-line:no-empty
        // we don't want handler's error to interrupt the process, the handler should handle it's own errors.
    }
}
/* An example of an rxjs based event system  */
// import { Subject } from 'rxjs/Subject'
// import 'rxjs/add/operator/share'; // TODO: move to no-side effect implementation
// dispatcher = new Subject<ResourceEvent>();
// events$ = (dispatcher as any).share();


/***/ }),

/***/ "../../libs/data/src/lib/events/interfaces.ts":
/*!*************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/events/interfaces.ts ***!
  \*************************************************************************************************/
/*! exports provided: isResourceEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isResourceEvent", function() { return isResourceEvent; });
function isResourceEvent(type, evt) {
    return type === evt.type;
}


/***/ }),

/***/ "../../libs/data/src/lib/events/internal.ts":
/*!***********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/events/internal.ts ***!
  \***********************************************************************************************/
/*! exports provided: isInternalError, CancellationTokenResourceEvent, ExecuteInitResourceEvent, StateChangeResourceEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInternalError", function() { return isInternalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationTokenResourceEvent", function() { return CancellationTokenResourceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteInitResourceEvent", function() { return ExecuteInitResourceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateChangeResourceEvent", function() { return StateChangeResourceEvent; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "../../libs/data/src/lib/events/events.ts");
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

var internalError = Symbol('Internal Resource Error');
function isInternalError(event) {
    return event[internalError] === true;
}
/**
 * Sends the cancellation token (function) so the listener (resource control) can cancel.
 *
 * @internal
 */
var CancellationTokenResourceEvent = /** @class */ (function (_super) {
    __extends(CancellationTokenResourceEvent, _super);
    function CancellationTokenResourceEvent(resource, cancel) {
        var _this = _super.call(this, resource, '$CancellationToken') || this;
        _this.resource = resource;
        _this.cancel = cancel;
        _this[internalError] = true;
        return _this;
    }
    return CancellationTokenResourceEvent;
}(_events__WEBPACK_IMPORTED_MODULE_0__["ResourceEvent"]));

/**
 * @internal
 */
var ExecuteInitResourceEvent = /** @class */ (function (_super) {
    __extends(ExecuteInitResourceEvent, _super);
    function ExecuteInitResourceEvent(resource, data, mode, promise, keepAlive) {
        var _this = _super.call(this, resource, '$ExecuteInit') || this;
        _this.resource = resource;
        _this.data = data;
        _this.mode = mode;
        _this[internalError] = true;
        _this.promise = promise;
        _this.keepAlive = keepAlive;
        return _this;
    }
    return ExecuteInitResourceEvent;
}(_events__WEBPACK_IMPORTED_MODULE_0__["ResourceEvent"]));

/**
 * @internal
 */
var StateChangeResourceEvent = /** @class */ (function (_super) {
    __extends(StateChangeResourceEvent, _super);
    function StateChangeResourceEvent(resource, key, oldVal, newVal) {
        var _this = _super.call(this, resource, '$StateChange') || this;
        _this.resource = resource;
        _this.key = key;
        _this.oldVal = oldVal;
        _this.newVal = newVal;
        _this[internalError] = true;
        return _this;
    }
    return StateChangeResourceEvent;
}(_events__WEBPACK_IMPORTED_MODULE_0__["ResourceEvent"]));



/***/ }),

/***/ "../../libs/data/src/lib/events/simple-events.ts":
/*!****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/events/simple-events.ts ***!
  \****************************************************************************************************/
/*! exports provided: SimpleEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEvents", function() { return SimpleEvents; });
/**
 * A simple event dispatcher and emitter, used as the default events implementation.
 * The API is minimal and somewhat shared with the observables API for extensibility.
 */
var SimpleEvents = /** @class */ (function () {
    function SimpleEvents() {
        this.listeners = [];
    }
    SimpleEvents.prototype.next = function (value) {
        var listeners = this.listeners.slice();
        for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
            var l = listeners_1[_i];
            l(value);
        }
    };
    SimpleEvents.prototype.subscribe = function (next) {
        var _this = this;
        this.listeners.push(next);
        var unsubscribe = function () {
            var idx = _this.listeners.indexOf(next);
            if (idx > -1) {
                _this.listeners.splice(idx, 1);
            }
        };
        return { unsubscribe: unsubscribe };
    };
    SimpleEvents.prototype.clear = function () {
        this.listeners.splice(0, this.listeners.length);
    };
    return SimpleEvents;
}());



/***/ }),

/***/ "../../libs/data/src/lib/fw/errors.ts":
/*!*****************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/fw/errors.ts ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");

var pt = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["Errors"].prototype;
pt.modelNoAdapter = function modelNoAdapterError(model) {
    return this.model(model, "No active adapter registered.");
};
pt.adapterNoAction = function adapterNoActionError(adapterClass, action) {
    return this.adapter(adapterClass, "Action \"" + action + "\" is not registered.");
};
pt.validation = function validationError(model, errors) {
    // TODO: print validation errors
    return this.ERROR("Validation Error [" + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(model) + "]", { errors: errors });
};
pt.validationConfig = function validationConfigError(validationName, message) {
    return this.ERROR("Invalid validation configuration params for \"" + validationName + "\": " + message);
};
pt.plugin = function plugin(pluginName, message) {
    return this.ERROR("Plugin Error [" + pluginName + "]: " + message);
};
pt.pluginMissing = function plugin(pluginName) {
    return this.plugin(pluginName, "Unknown or missing plugin");
};
pt.adapter = function adapter(adapterClass, message) {
    return this.ERROR("Adapter Error [" + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(adapterClass) + "]: " + message);
};
pt.adapterRegistered = function adapterRegistered(adapterClass, registeredIn) {
    return this.adapter(adapterClass, "Adapter already registered" + (registeredIn ? " (in " + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(registeredIn) + ")" : ''));
};
pt.adapterNotRegistered = function adapterNotRegistered(adapterClass, model) {
    return this.adapter(adapterClass, "Adapter not registered" + (model ? " (in " + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(model) + ")" : ''));
};


/***/ }),

/***/ "../../libs/data/src/lib/fw/index.ts":
/*!****************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/fw/index.ts ***!
  \****************************************************************************************/
/*! exports provided: PluginStore, plugins, ARMethods, ARHooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "../../libs/data/src/lib/fw/errors.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "../../libs/data/src/lib/fw/interfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARMethods", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_1__["ARMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARHooks", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_1__["ARHooks"]; });

/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugin */ "../../libs/data/src/lib/fw/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginStore", function() { return _plugin__WEBPACK_IMPORTED_MODULE_2__["PluginStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return _plugin__WEBPACK_IMPORTED_MODULE_2__["plugins"]; });






/***/ }),

/***/ "../../libs/data/src/lib/fw/interfaces.ts":
/*!*********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/fw/interfaces.ts ***!
  \*********************************************************************************************/
/*! exports provided: ARMethods, ARHooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _active_record_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../active-record/interfaces */ "../../libs/data/src/lib/active-record/interfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARMethods", function() { return _active_record_interfaces__WEBPACK_IMPORTED_MODULE_0__["ARMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARHooks", function() { return _active_record_interfaces__WEBPACK_IMPORTED_MODULE_0__["ARHooks"]; });




/***/ }),

/***/ "../../libs/data/src/lib/fw/plugin.ts":
/*!*****************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/fw/plugin.ts ***!
  \*****************************************************************************************/
/*! exports provided: PluginStore, plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginStore", function() { return PluginStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return plugins; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");

var PluginStore = /** @class */ (function () {
    function PluginStore() {
    }
    PluginStore.prototype.assertPlugin = function (name) {
        if (!this[name]) {
            _tdm_core__WEBPACK_IMPORTED_MODULE_0__["errors"].throw.pluginMissing(name);
        }
    };
    /**
     * Register's a plugin in the store.
     * The plugin is not initialized until the user invokes the init() method.
     * @param name
     * @param type
     */
    PluginStore.register = function (name, type) {
        if (PluginStore.prototype.hasOwnProperty(name)) {
            throw new Error("Plugin conflict \"" + name + "\"");
        }
        Object.defineProperty(PluginStore.prototype, name, { value: new type() });
    };
    return PluginStore;
}());

var plugins = Object.create(PluginStore.prototype);


/***/ }),

/***/ "../../libs/data/src/lib/metadata/decorators.ts":
/*!***************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/metadata/decorators.ts ***!
  \***************************************************************************************************/
/*! exports provided: Type, Prop, Exclude, Identity, NoopAdapter, AutoIdentity, Resource, ExtendAction, BelongsTo, Owns, Hook, BeforeHook, AfterHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _tdm_core__WEBPACK_IMPORTED_MODULE_0__["Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return _tdm_core__WEBPACK_IMPORTED_MODULE_0__["Prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exclude", function() { return _tdm_core__WEBPACK_IMPORTED_MODULE_0__["Exclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return _tdm_core__WEBPACK_IMPORTED_MODULE_0__["Identity"]; });

/* harmony import */ var _transformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transformation */ "../../libs/data/src/lib/transformation/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoopAdapter", function() { return _transformation__WEBPACK_IMPORTED_MODULE_1__["NoopAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoIdentity", function() { return _transformation__WEBPACK_IMPORTED_MODULE_1__["AutoIdentity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return _transformation__WEBPACK_IMPORTED_MODULE_1__["Resource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendAction", function() { return _transformation__WEBPACK_IMPORTED_MODULE_1__["ExtendAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BelongsTo", function() { return _transformation__WEBPACK_IMPORTED_MODULE_1__["BelongsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Owns", function() { return _transformation__WEBPACK_IMPORTED_MODULE_1__["Owns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hook", function() { return _transformation__WEBPACK_IMPORTED_MODULE_1__["Hook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeHook", function() { return _transformation__WEBPACK_IMPORTED_MODULE_1__["BeforeHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AfterHook", function() { return _transformation__WEBPACK_IMPORTED_MODULE_1__["AfterHook"]; });





/***/ }),

/***/ "../../libs/data/src/lib/metadata/index.ts":
/*!**********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/metadata/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: store, ExtendActionMetadata, AdapterMetadata, HookMetadata, Type, Prop, Exclude, Identity, ActionMethodType, ActionMetadata, BelongsToMetadata, OwnsMetadata, NoopAdapter, AutoIdentity, Resource, ExtendAction, BelongsTo, Owns, Hook, BeforeHook, AfterHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meta_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta-types */ "../../libs/data/src/lib/metadata/meta-types/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendActionMetadata", function() { return _meta_types__WEBPACK_IMPORTED_MODULE_0__["ExtendActionMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdapterMetadata", function() { return _meta_types__WEBPACK_IMPORTED_MODULE_0__["AdapterMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HookMetadata", function() { return _meta_types__WEBPACK_IMPORTED_MODULE_0__["HookMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionMethodType", function() { return _meta_types__WEBPACK_IMPORTED_MODULE_0__["ActionMethodType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionMetadata", function() { return _meta_types__WEBPACK_IMPORTED_MODULE_0__["ActionMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BelongsToMetadata", function() { return _meta_types__WEBPACK_IMPORTED_MODULE_0__["BelongsToMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwnsMetadata", function() { return _meta_types__WEBPACK_IMPORTED_MODULE_0__["OwnsMetadata"]; });

/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "../../libs/data/src/lib/metadata/store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store__WEBPACK_IMPORTED_MODULE_1__["store"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators */ "../../libs/data/src/lib/metadata/decorators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exclude", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Exclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoopAdapter", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["NoopAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoIdentity", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["AutoIdentity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Resource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendAction", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["ExtendAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BelongsTo", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["BelongsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Owns", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Owns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hook", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Hook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeHook", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["BeforeHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AfterHook", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["AfterHook"]; });

/* harmony import */ var _set_action_metadata_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-action-metadata-helpers */ "../../libs/data/src/lib/metadata/set-action-metadata-helpers.ts");






/***/ }),

/***/ "../../libs/data/src/lib/metadata/meta-types/action.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/metadata/meta-types/action.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ActionMethodType, ActionMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMethodType", function() { return ActionMethodType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMetadata", function() { return ActionMetadata; });
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

var ActionMethodType;
(function (ActionMethodType) {
    /**
     * Used to mark a method as local to the implementing adapter.
     */
    ActionMethodType[ActionMethodType["LOCAL"] = 0] = "LOCAL";
    ActionMethodType[ActionMethodType["READ"] = 1] = "READ";
    ActionMethodType[ActionMethodType["CREATE"] = 2] = "CREATE";
    ActionMethodType[ActionMethodType["REPLACE"] = 3] = "REPLACE";
    ActionMethodType[ActionMethodType["UPDATE"] = 4] = "UPDATE";
    ActionMethodType[ActionMethodType["DELETE"] = 5] = "DELETE";
})(ActionMethodType || (ActionMethodType = {}));
var ActionMetadata = /** @class */ (function (_super) {
    __extends(ActionMetadata, _super);
    function ActionMetadata(metaArgs, info) {
        var _this = _super.call(this, info) || this;
        _this.metaArgs = metaArgs;
        Object.assign(_this, metaArgs);
        if (metaArgs.post) {
            if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(metaArgs.post)) {
                _this.post = { handler: metaArgs.post };
            }
            else if (metaArgs.post && Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(metaArgs.post.handler)) {
                _this.post = metaArgs.post;
            }
        }
        if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isString"])(metaArgs.alias)) {
            _this.alias = [metaArgs.alias];
        }
        _this.paramHint = metaArgs.paramHint || 0;
        return _this;
    }
    return ActionMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/data/src/lib/metadata/meta-types/adapter.ts":
/*!***********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/metadata/meta-types/adapter.ts ***!
  \***********************************************************************************************************/
/*! exports provided: factory, register, AdapterMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterMetadata", function() { return AdapterMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index */ "../../libs/data/src/lib/utils/index.ts");
/* harmony import */ var _dao_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dao/index */ "../../libs/data/src/lib/dao/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function unsupportedDAOCmd() {
    // TODO: normalize error.
    return Promise.reject(new Error("DAO does not support this action"));
}
// this is here so we don't break the flow.
// adapter meta is different then other meta's since it might get created before the meta is available
// since metadata (actions) for the adapter might be set before the meta is created.
// this workaround prevents the need for an adapter store, the meta is used as the store.
// to support that we allow setting the metadata args in a later period.
// the register() method is aware of that and knows how to handle this scenario.
/** @internal */
function factory(metaArgs, target, info) {
    return Object.assign(this.constructor.prototype.factory.call(this, metaArgs, target, info), { metaArgs: metaArgs });
}
/** @internal */
function register(meta) {
    var adapter = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getAdapter(meta.target);
    Object.assign(adapter, meta['metaArgs']);
    adapter.buildDAO();
}
var AdapterMetadata = /** @class */ (function () {
    function AdapterMetadata() {
        this.actions = new Map();
    }
    AdapterMetadata.prototype.addAction = function (meta, target) {
        if (!Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(target)) {
            target = meta.target;
            meta = meta.metaValue;
        }
        var actions = this.actions.get(target) || [];
        actions.push(meta);
        this.actions.set(target, actions);
    };
    AdapterMetadata.prototype.getDAOAction = function (key) {
        return this.actions.get(this.DAOClass).find(function (a) { return a.name === key; });
    };
    AdapterMetadata.prototype.getActions = function () {
        var _this = this;
        var targets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targets[_i] = arguments[_i];
        }
        var metadataColl = targets.map(function (t) { return _this.actions.get(t); }).filter(function (t) { return !!t; });
        return _utils_index__WEBPACK_IMPORTED_MODULE_1__["array"].flatten(metadataColl);
    };
    /**
     * @internal
     */
    AdapterMetadata.prototype.buildDAO = function () {
        var actions = this.getActions(this.DAOClass);
        var daoProto = this.DAOClass.prototype;
        actions.forEach(function (action) {
            if (action.decoratorInfo.isStatic) {
                throw new Error('DAO can not define static actions.');
            }
            daoProto[action.name] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var ctx = this[_dao_index__WEBPACK_IMPORTED_MODULE_2__["DAOContextSymbol"]];
                return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"]
                    .getAC(ctx.target, ctx.adapter)
                    .createExecFactory(action, 'promise')(undefined, {
                    args: args,
                    factoryArgs: ctx.factoryArgs
                });
            };
            if (action.alias) {
                action.alias.forEach(function (alias) { return (daoProto[alias] = daoProto[action.name]); });
            }
        });
        // set unsupported handlers for missing commands.
        var keys = Object.keys(_dao_index__WEBPACK_IMPORTED_MODULE_2__["DAOMethods"]);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!daoProto[key]) {
                daoProto[key] = unsupportedDAOCmd;
            }
        }
    };
    AdapterMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['class'],
            factory: factory,
            register: register
        })
    ], AdapterMetadata);
    return AdapterMetadata;
}());



/***/ }),

/***/ "../../libs/data/src/lib/metadata/meta-types/extend-action.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/metadata/meta-types/extend-action.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ExtendActionMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendActionMetadata", function() { return ExtendActionMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "../../libs/data/src/lib/metadata/meta-types/action.ts");
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


var ExtendActionMetadata = /** @class */ (function (_super) {
    __extends(ExtendActionMetadata, _super);
    function ExtendActionMetadata(metaArgs, info) {
        var _this = _super.call(this, metaArgs, info) || this;
        Object.assign(_this, metaArgs);
        return _this;
    }
    ExtendActionMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['staticMember', 'member'],
            extend: 'mergeMapArray',
            register: 'array'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], ExtendActionMetadata);
    return ExtendActionMetadata;
}(_action__WEBPACK_IMPORTED_MODULE_1__["ActionMetadata"]));



/***/ }),

/***/ "../../libs/data/src/lib/metadata/meta-types/hook.ts":
/*!********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/metadata/meta-types/hook.ts ***!
  \********************************************************************************************************/
/*! exports provided: factory, register, extend, HookMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HookMetadata", function() { return HookMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _fw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fw */ "../../libs/data/src/lib/fw/index.ts");
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


/** @internal */
function factory(metaArgs, target, info, key, desc) {
    var action = metaArgs.action;
    if (!_fw__WEBPACK_IMPORTED_MODULE_1__["ARHooks"].hasOwnProperty(action)) {
        _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"].throw.decorator(target, "Invalid hook '" + action + "'", key);
    }
    var t = _fw__WEBPACK_IMPORTED_MODULE_1__["ARHooks"][action].type;
    if (info.isStatic ? t === 'instance' : t === 'static') {
        _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["errors"].throw.decorator(target, "Hook '" + action + "' can only decorate " + t + " methods", key);
    }
    return this.constructor.prototype.factory.call(this, metaArgs, target, info, key, desc);
}
/** @internal */
function register(meta) {
    var hook = (_a = {}, _a[meta.metaValue.event] = meta.metaValue, _a);
    var currHook = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getMetaFor(meta.target, HookMetadata, meta.metaValue.action) || {};
    _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].setMetaFor(meta.target, HookMetadata, meta.metaValue.action, Object.assign(currHook, hook));
    var _a;
}
/** @internal */
function extend(from, to) {
    if (!to) {
        to = new Map(from.entries());
    }
    else {
        // TODO: Refactor to support static/instance like ExtendAction in case 2 hooks with same prop name
        _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MapExt"].asKeyValArray(from).forEach(function (_a) {
            var k = _a[0], hookFrom = _a[1];
            if (!to.has(k)) {
                to.set(k, hookFrom);
            }
            else {
                var hookTo_1 = to.get(k);
                Object.keys(hookFrom).forEach(function (event) {
                    if (!hookTo_1.hasOwnProperty(event)) {
                        hookTo_1[event] = hookFrom[event];
                    }
                });
            }
        });
    }
    return to;
}
var HookMetadata = /** @class */ (function (_super) {
    __extends(HookMetadata, _super);
    function HookMetadata(obj, info) {
        var _this = _super.call(this, info) || this;
        _this.event = obj.event;
        _this.action = obj.action;
        return _this;
    }
    HookMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['staticMember', 'member'],
            factory: factory,
            extend: extend,
            register: register
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], HookMetadata);
    return HookMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/data/src/lib/metadata/meta-types/index.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/metadata/meta-types/index.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ExtendActionMetadata, AdapterMetadata, HookMetadata, ActionMethodType, ActionMetadata, BelongsToMetadata, OwnsMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "../../libs/data/src/lib/metadata/meta-types/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionMethodType", function() { return _action__WEBPACK_IMPORTED_MODULE_0__["ActionMethodType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionMetadata", function() { return _action__WEBPACK_IMPORTED_MODULE_0__["ActionMetadata"]; });

/* harmony import */ var _extend_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extend-action */ "../../libs/data/src/lib/metadata/meta-types/extend-action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendActionMetadata", function() { return _extend_action__WEBPACK_IMPORTED_MODULE_1__["ExtendActionMetadata"]; });

/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapter */ "../../libs/data/src/lib/metadata/meta-types/adapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdapterMetadata", function() { return _adapter__WEBPACK_IMPORTED_MODULE_2__["AdapterMetadata"]; });

/* harmony import */ var _relations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relations */ "../../libs/data/src/lib/metadata/meta-types/relations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BelongsToMetadata", function() { return _relations__WEBPACK_IMPORTED_MODULE_3__["BelongsToMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwnsMetadata", function() { return _relations__WEBPACK_IMPORTED_MODULE_3__["OwnsMetadata"]; });

/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hook */ "../../libs/data/src/lib/metadata/meta-types/hook.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HookMetadata", function() { return _hook__WEBPACK_IMPORTED_MODULE_4__["HookMetadata"]; });








/***/ }),

/***/ "../../libs/data/src/lib/metadata/meta-types/relations.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/metadata/meta-types/relations.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BelongsToMetadata, OwnsMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BelongsToMetadata", function() { return BelongsToMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnsMetadata", function() { return OwnsMetadata; });
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

var BelongsToMetadata = /** @class */ (function (_super) {
    __extends(BelongsToMetadata, _super);
    function BelongsToMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BelongsToMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            inherit: _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["RelationMetadata"]
        })
    ], BelongsToMetadata);
    return BelongsToMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["RelationMetadata"]));

var OwnsMetadata = /** @class */ (function (_super) {
    __extends(OwnsMetadata, _super);
    function OwnsMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OwnsMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            inherit: _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["RelationMetadata"]
        })
    ], OwnsMetadata);
    return OwnsMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["RelationMetadata"]));



/***/ }),

/***/ "../../libs/data/src/lib/metadata/set-action-metadata-helpers.ts":
/*!********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/metadata/set-action-metadata-helpers.ts ***!
  \********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");

function register(meta) {
    if (!this.target.adapterClass) {
        throw new Error("Class " + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(this) + " must implement a static property 'adapterClass' that points to the Adapter it uses");
    }
    else if (!Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(this.target.adapterClass.prototype.execute)) {
        throw new Error("Class " + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(this) + " points to an invalid Adapter class");
    }
    _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].setMetaFormFactory(meta);
    _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getAdapter(this.target.adapterClass).addAction(meta);
}
function extend(from, to, meta) {
    var _this = this;
    _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MapExt"].asValArray(from).forEach(function (v) {
        return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getAdapter(_this.adapterClass).addAction(v, meta.to);
    });
    return to
        ? // TODO: on mixins we override, on "extends" class we don't...
            // this overrides at all times (wrong behaviour for class extends)
            _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MapExt"].mergeInto(to, from)
        : new Map(from.entries());
}
Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["setMetaHelper"])('register', 'actionMetadata', register);
Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["setMetaHelper"])('extend', 'actionMetadata', extend);


/***/ }),

/***/ "../../libs/data/src/lib/metadata/store.ts":
/*!**********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/metadata/store.ts ***!
  \**********************************************************************************************/
/*! exports provided: Store, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");

var Store = /** @class */ (function () {
    function Store() {
        // support for post instantiation mixins on the prototype (plugins) - don't use new.
        Store.create(this);
    }
    Store.prototype.getIdentityKey = function (target, direction) {
        return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getIdentityKey(target, direction);
    };
    Store.prototype.hasTarget = function (target) {
        return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].hasTarget(target);
    };
    Store.prototype.serialize = function (target, mapper) {
        return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].serialize(target, mapper);
    };
    /**
     * Deserialize and instance of "DeserializeMapper" into an instance of tge target supplied
     * @param target
     * @param mapper
     * @returns
     */
    Store.prototype.deserialize = function (mapper) {
        return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].deserialize(mapper);
    };
    /**
     * Deserialize and instance of "DeserializeMapper" into a plain object (object literal)
     * @param mapper
     */
    Store.prototype.deserializePlain = function (mapper) {
        return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].deserializePlain(mapper);
    };
    /**
     * Search for a target registered in the repository by it's name.
     * @see ModelMetadataArgs#resName
     * @param name
     */
    Store.prototype.findModel = function (name) {
        return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].findTarget(name);
    };
    Store.prototype.getModelName = function (target) {
        return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetName(target);
    };
    /**
     * Marks mixins as part of the functionality of a target, in a specific adapter.
     * This will not apply the mixin, it's just metadata about he relation.
     * @param target
     * @param adapterClass
     * @param mixins
     */
    Store.prototype.markMixins = function (target, adapterClass) {
        var mixins = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            mixins[_i - 2] = arguments[_i];
        }
        _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].registerMixins.apply(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"], [target, adapterClass].concat(mixins));
    };
    /**
     * Creates a new Store instance.
     * @param instance optional, used internally
     * @returns
     */
    Store.create = function (instance) {
        var store = instance || Object.create(Store.prototype);
        return store;
    };
    return Store;
}());

var store = Store.create();


/***/ }),

/***/ "../../libs/data/src/lib/resource-control.ts":
/*!************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/resource-control.ts ***!
  \************************************************************************************************/
/*! exports provided: ResourceControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceControl", function() { return ResourceControl; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "../../libs/data/src/lib/events/index.ts");


// Weak map for private emitter
// TODO: check perf, maybe symbols are "less" private but more performant
var privateDict = new WeakMap();
var handlers = [];
/**
 * An controller, state and notification interface for instances of TDM models.
 * Each model instance has a corresponding ResourceControl instance.
 *
 * To get the ResourceControl instance for a specific model instance call ResourceControl#get(modelInstance)
 *
 * > If you are using the `ActiveRecord` plugin you can also opt in to have a property on each model instance
 * that reference the ResourceControl instance.
 *
 * Notifications are stream of resource related events, derived from {@link ResourceEvent}.
 * Each event is bound to a resource instance, hence every event fired in a ResourceControl instance
 * is an event bound to the resource.
 *
 * The notification are passive lifecycle event, intended to be used by the consumer of a resource.
 * Passive hooks does not effect actions, they are used for state (UI) representation.
 *
 * For active lifecycle hooks, being able to effect an action, use metadata life cycle hooks (`ActiveRecordHooks`)
 *
 */
var ResourceControl = /** @class */ (function () {
    function ResourceControl(parent) {
        this.parent = parent;
        this.state = { busy: false };
        var eventSys = this.initEventSys();
        this.dispatcher = eventSys.dispatcher;
        this.events$ = eventSys.emitter;
    }
    Object.defineProperty(ResourceControl.prototype, "busy", {
        /**
         * Indicates if the active record is busy performing an action.
         */
        get: function () {
            return this.state.busy;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set a new state value
     * @param key
     * @param value
     */
    ResourceControl.prototype.set = function (key, value) {
        if (this.state[key] !== value) {
            var event_1 = new _events__WEBPACK_IMPORTED_MODULE_1__["StateChangeResourceEvent"](this.parent, key, this.state[key], (this.state[key] = value));
            ResourceControl.emitEvent(event_1);
        }
    };
    /**
     * Returns a promise, resolving on the next response from the current resource.
     * Will throw is there is no active action for this resource (i.e. not busy)
     * @returns
     */
    ResourceControl.prototype.next = function (silent) {
        var _this = this;
        if (this._mode === 'promise' && this._next) {
            return this._next;
        }
        return Promise.resolve().then(function () {
            if (!_this.busy) {
                return Promise.reject(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["errors"].model(_this.parent, 'Call to next() while not in an active action.'));
            }
            else {
                return new Promise(function (resolve, reject) {
                    var subs = _this.events$.subscribe(function (event) {
                        if (Object(_events__WEBPACK_IMPORTED_MODULE_1__["isResourceEvent"])('ActionError', event)) {
                            reject(event.error);
                            subs.unsubscribe();
                        }
                        else if (Object(_events__WEBPACK_IMPORTED_MODULE_1__["isResourceEvent"])('ActionEnd', event)) {
                            // TODO: ActionEnd is fired for both ActionSuccess and ActionCancel
                            // since promises does not cancel this is a design hole...
                            resolve(_this._next || _this.parent);
                            subs.unsubscribe();
                        }
                    });
                });
            }
        });
    };
    /**
     * Cancel the current action.
     * Does not throw if no action is running.
     */
    ResourceControl.prototype.cancel = function () {
        if (this.busy && this.actionCancel) {
            this.actionCancel();
            this.actionCancel = undefined;
        }
    };
    /**
     * Initialize the event system, return the dispatcher and emitter
     *
     * Derived implementations can implement different mechanisms
     */
    ResourceControl.prototype.initEventSys = function () {
        var simpleEvents = new _events__WEBPACK_IMPORTED_MODULE_1__["SimpleEvents"]();
        return { dispatcher: simpleEvents, emitter: simpleEvents };
    };
    ResourceControl.addEventListener = function (handler) {
        handlers.push(handler);
    };
    ResourceControl.removeEventListener = function (handler) {
        var idx = handlers.indexOf(handler);
        if (idx > -1) {
            handlers.splice(idx, 1);
            return true;
        }
        return false;
    };
    /**
     * Returns a resource control for an instance of a resource.
     * If it's an instance and a resource control does not exist it will create it.
     * If it's a promise for a resource, will return it only if a resource was already created.
     */
    ResourceControl.get = function (instance) {
        var rc = privateDict.get(instance);
        if (!rc &&
            (_tdm_core__WEBPACK_IMPORTED_MODULE_0__["TDMModelBase"].instanceOf(instance) || _tdm_core__WEBPACK_IMPORTED_MODULE_0__["TDMCollection"].instanceOf(instance))) {
            privateDict.set(instance, (rc = new ResourceControl(instance)));
        }
        return rc;
    };
    /**
     * Emits an `ResourceEvent` in the `ActiveRecordState#.$events` of a `BaseResource`
     * @internal
     * @param event
     */
    ResourceControl.emitEvent = function (event) {
        var rc = ResourceControl.get(event.resource);
        for (var i = 0, len = handlers.length; i < len; i++) {
            handlers[i].call(rc, event);
        }
        if (!Object(_events__WEBPACK_IMPORTED_MODULE_1__["isInternalError"])(event)) {
            rc.dispatcher.next(event);
        }
    };
    /* An IFFE that returns undefined. Workaround for https://github.com/Microsoft/TypeScript/issues/15892
    It acts as a type initializer (not instance initializer), running after the type is created.
    We run it inside the class because we need access to private/protected member.
    it has a slight runtime impact as it set's a property on the class, a function invocation.
    Although forcing runtime changes due to design time type restrictions is a bad practice it was still preferred because
    the impact is minimal and type safety is extremely important in such low level constructs, I like to think of this as
    a virtual runtime assertion.
    */
    ResourceControl._ = (function () {
        _events__WEBPACK_IMPORTED_MODULE_1__["events$"].subscribe(ResourceControl.emitEvent);
        ResourceControl.addEventListener(function rootHandler(event) {
            if (event instanceof _events__WEBPACK_IMPORTED_MODULE_1__["CancellationTokenResourceEvent"]) {
                this.actionCancel = event.cancel;
            }
            else if (event instanceof _events__WEBPACK_IMPORTED_MODULE_1__["ExecuteInitResourceEvent"]) {
                mapPromiseAndKeepAlive(this, event);
                this.lastExecute = event.data;
                this._next = event.promise;
                this._mode = event.mode;
            }
            else {
                switch (event.type) {
                    case 'ActionError':
                    case 'ActionEnd':
                        this.actionCancel = undefined;
                        this._next = undefined;
                        break;
                }
            }
        });
    })();
    return ResourceControl;
}());

function mapPromiseAndKeepAlive(resourceControl, event) {
    privateDict.set(event.promise, resourceControl);
    var doFinally = function x() {
        privateDict.delete(event.promise);
        if (!event.keepAlive) {
            privateDict.delete(event.resource);
        }
    }.bind(event);
    event.promise.then(doFinally, doFinally);
}


/***/ }),

/***/ "../../libs/data/src/lib/transformation/decorators.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/transformation/decorators.ts ***!
  \*********************************************************************************************************/
/*! exports provided: NoopAdapter, AutoIdentity, Resource, ExtendAction, BelongsTo, Owns, Hook, BeforeHook, AfterHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopAdapter", function() { return NoopAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoIdentity", function() { return AutoIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendAction", function() { return ExtendAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BelongsTo", function() { return BelongsTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Owns", function() { return Owns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hook", function() { return Hook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeHook", function() { return BeforeHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterHook", function() { return AfterHook; });
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metadata */ "../../libs/data/src/lib/metadata/index.ts");
/* harmony import */ var _meta_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta-class */ "../../libs/data/src/lib/transformation/meta-class.ts");
/* harmony import */ var _target_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target-store */ "../../libs/data/src/lib/transformation/target-store.ts");
/* harmony import */ var _target_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./target-metadata */ "../../libs/data/src/lib/transformation/target-metadata.ts");
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prop */ "../../libs/data/src/lib/transformation/prop.ts");
/* harmony import */ var _relations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./relations */ "../../libs/data/src/lib/transformation/relations.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mixins */ "../../libs/data/src/lib/transformation/mixins.ts");



/* Workaround, see index.ts in this directory */






// TODO: this is a workaround to allow registering Models with no adapter so `onProcessType` event
// fires, need to fire the build event even if no adapter is set, this requires refactoring.
var NoopAdapter = /** @class */ (function () {
    function NoopAdapter() {
        this.supports = { cancel: false };
    }
    NoopAdapter.prototype.execute = function (ctx, options) {
        return { id: 1, response: Promise.resolve(undefined) };
    };
    NoopAdapter.prototype.cancel = function (id) { };
    return NoopAdapter;
}());

_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].registerAdapter(NoopAdapter, {
    actionMetaClass: /** @class */ (function () {
        function class_1() {
        }
        return class_1;
    }()),
    DAOClass: /** @class */ (function () {
        function class_2() {
        }
        return class_2;
    }()),
    resourceMetaClass: _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["ModelMetadata"]
});
function AutoIdentity() {
    return function (target, key) {
        Object(_tdm_core__WEBPACK_IMPORTED_MODULE_0__["Identity"])()(target, key);
        var model = (_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"]
            .getTargetMeta(target.constructor)
            .model().autoGenIdentity = true);
    };
}
var _Resource = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["MetaClass"].get(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["ModelMetadata"]).createResourceDecorator(NoopAdapter); // FOR AOT
/**
 * A Resource with a NOOP adapter.
 * @classDecorator
 * @param metaArgs
 */
function Resource(metaArgs) {
    return _Resource(metaArgs);
}
/**
 * @propertyDecorator instance
 * @param metaArgs
 */
var ExtendAction = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_2__["ExtendActionMetadata"]);
/**
 * @propertyDecorator instance
 * @param def
 */
var BelongsTo = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_2__["BelongsToMetadata"], true);
/**
 * @propertyDecorator instance
 * @param def
 */
var Owns = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_2__["OwnsMetadata"], true);
var Hook = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_2__["HookMetadata"]);
function BeforeHook(action) {
    return Hook({ event: 'before', action: action });
}
function AfterHook(action) {
    return Hook({ event: 'after', action: action });
}


/***/ }),

/***/ "../../libs/data/src/lib/transformation/index.ts":
/*!****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/transformation/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: NoopAdapter, AutoIdentity, Resource, ExtendAction, BelongsTo, Owns, Hook, BeforeHook, AfterHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators */ "../../libs/data/src/lib/transformation/decorators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoopAdapter", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["NoopAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoIdentity", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["AutoIdentity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["Resource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendAction", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["ExtendAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BelongsTo", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["BelongsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Owns", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["Owns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hook", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["Hook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeHook", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["BeforeHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AfterHook", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["AfterHook"]; });

/* For some reason, in test (jest) these will execute after the export statement, causing an error */
/* to workaround that the imports are now in the decorators.ts file. */
// import './target-store'
// import './target-metadata';
// import './prop';
// import './relations';
// import './resource';
// import './mixins';



/***/ }),

/***/ "../../libs/data/src/lib/transformation/meta-class.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/transformation/meta-class.ts ***!
  \*********************************************************************************************************/
/*! exports provided: resource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resource", function() { return resource; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");

var ADAPTER_REF = Symbol('Adapter Ref');
/**
 * A Factory for Resource class decorators, the returned decorator will automatically register the
 * target & adapterType with the resource.
 * @param adapterClass
 */
function resource(adapterClass) {
    var metaClass = this;
    return function ResourceDecorator(metaArgs) {
        return function (target) {
            if (_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getAdapter(adapterClass).resourceMetaClass !==
                metaClass.target) {
                throw new Error("Adapter " + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(adapterClass) + " resource metadata mismatch");
            }
            if (metaArgs.factory) {
                console.warn('Model#factory can not be set in @tdm/data');
                delete metaArgs.factory;
            }
            var TDMModel = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMModelBase"].factory(target);
            TDMModel[ADAPTER_REF] = adapterClass;
            // Creating ModelMetadata instance (or a derived class of ModelMetadata)
            var modelMeta = metaClass.create(metaArgs || {}, target);
            // targetStore.registerTarget(target);
            var meta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(target);
            // check for properties that set the type to self (same class)
            // the class will point to the base class (target) that TDModel extends.
            // this is fine if the user didn't set `typeGetter`, if he did we get TDModel
            meta.getValues(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["PropMetadata"]).forEach(function (p) {
                var desc = Object.getOwnPropertyDescriptor(p, 'type');
                if (desc &&
                    desc.configurable &&
                    Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(desc.get) &&
                    desc.get() === target) {
                    Object.defineProperty(p, 'type', {
                        configurable: true,
                        value: TDMModel
                    });
                }
            });
            _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].registerTarget(TDMModel);
            var tdmModelMeta = metaClass.extendSingle(modelMeta, undefined, {
                from: target,
                to: TDMModel
            });
            if (modelMeta.skip !== true) {
                tdmModelMeta.build();
            }
            return TDMModel;
        };
    };
}
_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClassMetadata"].prototype.createResourceDecorator = resource;
_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].on.beforeProcessType(function (target) {
    var tMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(target);
    // default behaviour, register the first adapter, if multiple...
    if (target[ADAPTER_REF]) {
        if (!tMeta.activeAdapter) {
            tMeta.setActiveAdapter(target[ADAPTER_REF]);
        }
    }
});


/***/ }),

/***/ "../../libs/data/src/lib/transformation/mixins.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/transformation/mixins.ts ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");

// const mixinCache = new Set<any>();
//
//
// /**
//  * For every mixins, go down the proto chain and extend the metadata.
//  * @param mixin
//  */
// function extendMixin(mixin: any): void {
//   if (!mixinCache.has(mixin)) {
//     const chain = getProtoChain(mixin);
//     if (chain[0] === mixin) chain.shift();
//
//     if (chain.length > 0) {
//       for (let i=chain.length-1; i>0; i--) {
//         if (!mixinCache.has(chain[i+1]) && targetStore.hasTarget(chain[i])) {
//           targetStore.registerTarget(chain[i+1]);
//           targetStore.extend(chain[i], chain[i+1]);
//         }
//       }
//       targetStore.registerTarget(chain[0]);
//       targetStore.registerTarget(mixin);
//       targetStore.extend(chain[0], mixin);
//     }
//   }
// }
_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TargetStore"].prototype.registerMixins = function registerMixins(target, adapterClass) {
    var mixins = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        mixins[_i - 2] = arguments[_i];
    }
    if (mixins.length > 0) {
        var model = this.getTargetMeta(target).model();
        var registered = model.mixins;
        if (!registered) {
            model.mixins = registered = new _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["KeySet"]();
        }
        var set = registered.has(adapterClass)
            ? registered.get(adapterClass)
            : registered.set(adapterClass);
        _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["SetExt"].combine(set, mixins);
        // seems to much, maybe a decorator will be better...
        // mixins.forEach( m => extendMixin(m) );
    }
};
_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TargetStore"].prototype.getMixins = function getMixins(target, adapterClass) {
    var model = this.getTargetMeta(target).model();
    return (model.mixins && model.mixins.get(adapterClass)) || new Set();
};
_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TargetStore"].prototype.hasMixins = function hasMixins(target, adapterClass) {
    var mixins = this.getTargetMeta(target).model().mixins;
    var registered = mixins && mixins.get(adapterClass);
    return registered && registered.size > 0;
};


/***/ }),

/***/ "../../libs/data/src/lib/transformation/prop.ts":
/*!***************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/transformation/prop.ts ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/data/src/lib/metadata/index.ts");


_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["PropMetadata"].prototype.setCoreRelationship = function (rel) {
    this.setRelationship(new _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["RelationMetadata"]({ foreignKey: rel.foreignKey }, rel.decoratorInfo));
    if (rel instanceof _metadata__WEBPACK_IMPORTED_MODULE_1__["BelongsToMetadata"]) {
        this.rel = 'belongsTo';
    }
    else {
        this.rel = this.type.isArray ? 'hasMany' : 'hasOne';
    }
};
_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].on
    .metaInit(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["PropMetadata"])
    .run(function (target, prop, metaArgs) {
    if (!metaArgs) {
        metaArgs = {};
    }
    prop.validation = Array.isArray(metaArgs.validation)
        ? metaArgs.validation.slice()
        : metaArgs.validation && Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(metaArgs.validation.validate)
            ? [metaArgs.validation]
            : [];
});


/***/ }),

/***/ "../../libs/data/src/lib/transformation/relations.ts":
/*!********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/transformation/relations.ts ***!
  \********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/data/src/lib/metadata/index.ts");


_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].on.processType(function (target) {
    var meta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(target);
    var identity = meta.getIdentityKey();
    if (identity) {
        meta.getCreateProp(identity);
    }
    [_metadata__WEBPACK_IMPORTED_MODULE_1__["BelongsToMetadata"], _metadata__WEBPACK_IMPORTED_MODULE_1__["OwnsMetadata"]].forEach(function (relClass) {
        meta.getValues(relClass).forEach(function (relation) {
            // Its possible to set @Relation() without @Prop(), so make sure to create one if not set by the user.
            var prop = meta.getCreateProp(relation.decoratorInfo);
            prop.setCoreRelationship(relation);
            // if the fk is a different key, attach a reference to the foreign key PropMetadata (and create one if not there)
            if (relation.name !== relation.foreignKey) {
                meta.getCreateProp(relation.foreignKey).foreignKeyOf = prop;
            }
        });
    });
});


/***/ }),

/***/ "../../libs/data/src/lib/transformation/target-metadata.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/transformation/target-metadata.ts ***!
  \**************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_tixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/tixin */ "../../libs/tixin/src/index.ts");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metadata */ "../../libs/data/src/lib/metadata/index.ts");
/* harmony import */ var _core_action_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/action-controller */ "../../libs/data/src/lib/core/action-controller.ts");
/* harmony import */ var _core_target_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/target-validator */ "../../libs/data/src/lib/core/target-validator.ts");
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





var CoreTargetMetadata = /** @class */ (function (_super) {
    __extends(CoreTargetMetadata, _super);
    function CoreTargetMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CoreTargetMetadata.prototype, "activeAdapter", {
        get: function () {
            return this._activeAdapter;
        },
        enumerable: true,
        configurable: true
    });
    CoreTargetMetadata.prototype.validate = function (instance) {
        return this.validator.validate(instance);
    };
    CoreTargetMetadata.prototype.findHook = function (action) {
        return this.config.get(_metadata__WEBPACK_IMPORTED_MODULE_2__["HookMetadata"], action);
    };
    CoreTargetMetadata.prototype.findHookEvent = function (action, event) {
        var hook = this.getMetaFor(_metadata__WEBPACK_IMPORTED_MODULE_2__["HookMetadata"], action);
        if (hook) {
            return hook[event];
        }
    };
    CoreTargetMetadata.prototype.hasAdapter = function (adapterClass) {
        return this.adapters.has(adapterClass);
    };
    CoreTargetMetadata.prototype.isActive = function (adapterClass) {
        return this._activeAdapter === adapterClass;
    };
    CoreTargetMetadata.prototype.getAC = function (adapterClass, create) {
        if (create === void 0) { create = true; }
        if (!adapterClass) {
            adapterClass = this.activeAdapter;
        }
        return (this.adapters.get(adapterClass) ||
            (create ? this.registerAdapter(adapterClass) : undefined));
    };
    CoreTargetMetadata.prototype.getExtendingAction = function (info) {
        var arr = this.config.get(_metadata__WEBPACK_IMPORTED_MODULE_2__["ExtendActionMetadata"], info.name);
        if (arr) {
            return arr.find(function (a) { return a.name === info.name && a.decoratorInfo.isStatic === info.isStatic; });
        }
    };
    CoreTargetMetadata.prototype.setActiveAdapter = function (adapter) {
        var _this = this;
        this._activeAdapter = adapter;
        this.getProtoChainWithMixins(this.target, adapter).forEach(function (proto) {
            if (_this.target !== proto && _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].hasTarget(proto)) {
                _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].extend(proto, _this.target);
            }
        });
    };
    CoreTargetMetadata.prototype.getProtoChainWithMixins = function (target, adapterClass) {
        return Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["getProtoChain"])(target).reduce(function (protoSet, proto) {
            protoSet.add(proto);
            _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["SetExt"].combine(protoSet, _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getMixins(proto, adapterClass));
            return protoSet;
        }, new Set());
    };
    CoreTargetMetadata.prototype.registerAdapter = function (adapterClass) {
        if (!_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].hasAdapter(adapterClass)) {
            _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["errors"].throw.adapterNotRegistered(adapterClass, this.target);
        }
        else if (this.adapters.has(adapterClass)) {
            _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["errors"].throw.adapterRegistered(adapterClass, this.target);
        }
        else {
            return this.adapters
                .set(adapterClass, new _core_action_controller__WEBPACK_IMPORTED_MODULE_3__["ActionController"](this, adapterClass))
                .get(adapterClass);
        }
    };
    __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["LazyInit"])(function () {
            return new _core_target_validator__WEBPACK_IMPORTED_MODULE_4__["TargetValidator"](this.target);
        }),
        __metadata("design:type", _core_target_validator__WEBPACK_IMPORTED_MODULE_4__["TargetValidator"])
    ], CoreTargetMetadata.prototype, "validator", void 0);
    __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["LazyInit"])(function () {
            return new Map();
        }),
        __metadata("design:type", Map)
    ], CoreTargetMetadata.prototype, "adapters", void 0);
    return CoreTargetMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["TargetMetadata"]));
Object(_tdm_tixin__WEBPACK_IMPORTED_MODULE_0__["Tixin"])(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["TargetMetadata"], CoreTargetMetadata);
// override core implementation to support type specific collection class
_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["TargetMetadata"].prototype.createCollection = function () {
    return this.collectionClass
        ? new this.collectionClass()
        : new _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["TDMCollection"]();
};


/***/ }),

/***/ "../../libs/data/src/lib/transformation/target-store.ts":
/*!***********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/transformation/target-store.ts ***!
  \***********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_tixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/tixin */ "../../libs/tixin/src/index.ts");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metadata */ "../../libs/data/src/lib/metadata/index.ts");
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



var CoreTargetStore = /** @class */ (function (_super) {
    __extends(CoreTargetStore, _super);
    function CoreTargetStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreTargetStore.prototype.getAdapter = function (adapterClass) {
        return (this.local(adapterClass) ||
            (this.locals.add(adapterClass, new _metadata__WEBPACK_IMPORTED_MODULE_2__["AdapterMetadata"]()),
                this.getAdapter(adapterClass)));
    };
    CoreTargetStore.prototype.hasAdapter = function (adapterClass) {
        return this.locals.has(adapterClass);
    };
    CoreTargetStore.prototype.registerAdapter = function (adapterClass, metaArgs) {
        _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["MetaClass"].get(_metadata__WEBPACK_IMPORTED_MODULE_2__["AdapterMetadata"]).create(metaArgs, adapterClass);
    };
    CoreTargetStore.prototype.getAC = function (target, adapterClass) {
        if (this.hasTarget(target)) {
            return adapterClass
                ? this.getTargetMeta(target).getAC(adapterClass)
                : this.getTargetMeta(target).getAC();
        }
    };
    return CoreTargetStore;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["TargetStore"]));
Object(_tdm_tixin__WEBPACK_IMPORTED_MODULE_0__["Tixin"])(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["TargetStore"], CoreTargetStore);


/***/ }),

/***/ "../../libs/data/src/lib/utils/index.ts":
/*!*******************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/src/lib/utils/index.ts ***!
  \*******************************************************************************************/
/*! exports provided: findProp, isSymbol, isTdmPropertyKey, noop, promiser, array */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findProp", function() { return findProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTdmPropertyKey", function() { return isTdmPropertyKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiser", function() { return promiser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");

/**
 * Search search each object in "objects", right to left, for a key and returns the value.
 * Fallback object must have the key.
 * @param key
 * @param fallback
 * @param objects
 * @returns
 */
function findProp(key, fallback) {
    var objects = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        objects[_i - 2] = arguments[_i];
    }
    for (var i = objects.length - 1; i >= 0; i--) {
        if (objects[i] && objects[i].hasOwnProperty(key)) {
            return objects[i][key];
        }
    }
    return fallback[key];
}
function isSymbol(obj) {
    return typeof obj === 'symbol';
}
function isTdmPropertyKey(obj) {
    return Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isString"])(obj) || isSymbol(obj) || Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(obj);
}
function noop() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
/**
 * returns an object with a promise, resolver and rejector.
 * @returns
 */
function promiser() {
    var resolve;
    var reject;
    var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });
    return { resolve: resolve, reject: reject, promise: promise };
}
var array = (function () {
    var scalar = function (v) { return !Array.isArray(v); };
    var flatten = function (deep, flat) {
        if (flat === void 0) { flat = []; }
        if (deep.length === 0)
            return flat;
        var head = deep[0], tail = deep.slice(1);
        if (scalar(head)) {
            return flatten(tail, flat.concat(head));
        }
        else {
            return flatten(tail, flat.concat(flatten(head)));
        }
    };
    var findRemove = function (arr, predicate, thisArg) {
        var idx = arr.findIndex(predicate, thisArg);
        if (idx > -1) {
            return arr.splice(idx, 1)[0];
        }
    };
    return {
        findRemove: findRemove,
        flatten: function (array) {
            return flatten(array);
        }
    };
})();


/***/ }),

/***/ "../../libs/local-forage/src/index.ts":
/*!*****************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/local-forage/src/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: LocalForageDaoFactory, LocalForageAction, LocalForageResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_localForage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/localForage */ "../../libs/local-forage/src/lib/localForage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalForageDaoFactory", function() { return _lib_localForage__WEBPACK_IMPORTED_MODULE_0__["LocalForageDaoFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalForageAction", function() { return _lib_localForage__WEBPACK_IMPORTED_MODULE_0__["LocalForageAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalForageResource", function() { return _lib_localForage__WEBPACK_IMPORTED_MODULE_0__["LocalForageResource"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/local-forage/src/lib/core/index.ts":
/*!**************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/local-forage/src/lib/core/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: LocalForageAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _local_forage_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-forage-adapter */ "../../libs/local-forage/src/lib/core/local-forage-adapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalForageAdapter", function() { return _local_forage_adapter__WEBPACK_IMPORTED_MODULE_0__["LocalForageAdapter"]; });




/***/ }),

/***/ "../../libs/local-forage/src/lib/core/local-forage-adapter.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/local-forage/src/lib/core/local-forage-adapter.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: LocalForageAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalForageAdapter", function() { return LocalForageAdapter; });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ "../../node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid/v4 */ "../../node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadata */ "../../libs/local-forage/src/lib/metadata/index.ts");



var uuid = uuid_v4__WEBPACK_IMPORTED_MODULE_1__;


var KEY_PREFIX = 'tdm';
var METADATA_TABLE = '__METADATA_TABLE__';
function isValidString(value) {
    return (value != null && value !== '');
}
function makePath() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(isValidString).join('/').replace(/([^:\/]|^)\/{2,}/g, '$1/');
}
var promiseQueue = {
    queue: [],
    running: null,
    runPending: false,
    get length() {
        return this.queue.length + (this.running ? 1 : 0);
    },
    enqueue: function (task, run) {
        var _this = this;
        if (run === true && !this.running) {
            this.runAsMacroTask();
        }
        return new Promise(function (resolve, reject) { return _this.queue.push({ resolve: resolve, reject: reject, task: task }); });
    },
    dequeue: function () {
        if (this.queue.length > 0) {
            var t_1 = this.queue.shift();
            return t_1.task()
                .then(function (value) {
                t_1.resolve(value);
                return value;
            })
                .catch(function (err) {
                t_1.reject(err);
                return err;
            });
        }
        else {
            return Promise.reject(new Error('Queue is empty'));
        }
    },
    runAsMacroTask: function () {
        var _this = this;
        if (!this.runPending && !this.running) {
            this.runPending = true;
            setTimeout(function () { return _this.run(); }, 0);
        }
    },
    run: function () {
        var _this = this;
        if (!this.running && this.queue.length > 0) {
            var resolve_1;
            var result_1 = [];
            var drain_1 = function (value) {
                result_1.push(value);
                if (_this.queue.length === 0) {
                    _this.running = null;
                    _this.runPending = false;
                    resolve_1(result_1);
                }
                else {
                    _this.dequeue().then(drain_1);
                }
            };
            this.running = new Promise(function (r) { return resolve_1 = r; });
            this.dequeue().then(drain_1);
        }
        return this;
    }
};
var LocalForageAdapter = /** @class */ (function () {
    function LocalForageAdapter() {
        this.supports = { cancel: false };
        this.idCount = 1;
    }
    LocalForageAdapter.prototype.execute = function (ctx, options, params) {
        var _this = this;
        var id = this.idCount++;
        return {
            id: id,
            response: promiseQueue.enqueue(function () { return _this._execute(ctx, options, params); }, true)
        };
    };
    LocalForageAdapter.prototype.cancel = function (id) { }; // tslint:disable-line:no-empty
    LocalForageAdapter.prototype._execute = function (ctx, options, params) {
        var _this = this;
        try {
            options = options || {};
            var action_1 = ctx.action;
            var resource_1 = ctx.targetMeta.model();
            if (!resource_1) {
                return Promise.reject(new Error('LocalForage resource not set.'));
            }
            var resourceKey_1 = this.getResourceKey(resource_1);
            var executeResponse_1 = { data: undefined };
            var response = void 0;
            switch (action_1.method) {
                case _tdm_data__WEBPACK_IMPORTED_MODULE_3__["ActionMethodType"].READ:
                    response = action_1.isCollection
                        ? this.getAll(resource_1)
                        : this.getById(resource_1, ctx.instance || ctx.data);
                    break;
                case _tdm_data__WEBPACK_IMPORTED_MODULE_3__["ActionMethodType"].DELETE:
                    var actionName = action_1.name;
                    executeResponse_1.skipDeserialize = true;
                    if (actionName === 'remove') {
                        var idToRemove_1 = ctx.data[resource_1.identity];
                        response = this.removeId(resourceKey_1, idToRemove_1)
                            .then(function () { return localforage__WEBPACK_IMPORTED_MODULE_0__["removeItem"](_this.appendKey(resourceKey_1, idToRemove_1)); });
                    }
                    else if (actionName === 'clear') {
                        response = this.removeTable(resourceKey_1);
                    }
                    else {
                        response = Promise.reject("Unknown DELETE command \"" + actionName + "\"");
                    }
                    break;
                case _tdm_data__WEBPACK_IMPORTED_MODULE_3__["ActionMethodType"].CREATE:
                    if (action_1.name === 'create') {
                        response = this.getById(resource_1, ctx.data)
                            .then(function (item) {
                            if (item) {
                                return Promise
                                    .reject(new Error(resource_1.resName + " with identity " + item[resource_1.identity] + " exists"));
                            }
                            else {
                                if (resource_1.autoGenIdentity === true) {
                                    ctx.data[resource_1.identity] = uuid();
                                }
                                var idToCreate_1 = ctx.data[resource_1.identity];
                                ctx.deserialize(ctx.data);
                                return _this.ensureId(resourceKey_1, idToCreate_1)
                                    .then(function () { return localforage__WEBPACK_IMPORTED_MODULE_0__["setItem"](_this.appendKey(resourceKey_1, idToCreate_1), ctx.serialize()); });
                            }
                        });
                    }
                    else if (action_1.name === 'createBulk') {
                        response = this.getKeys(this.getResourceKey(resource_1))
                            .then(function (keys) {
                            var promises = [];
                            var ids = [];
                            var singleCtx = new _tdm_data__WEBPACK_IMPORTED_MODULE_3__["ExecuteContext"](ctx.targetMeta, Object.create(ctx.action, { isCollection: { value: false } }));
                            for (var _i = 0, _a = ctx.data; _i < _a.length; _i++) {
                                var d = _a[_i];
                                if (resource_1.autoGenIdentity === true) {
                                    d[resource_1.identity] = uuid();
                                }
                                var currId = d[resource_1.identity];
                                if (keys.has(currId)) {
                                    promises.push(Promise.reject(new Error(resource_1.resName + " with identity " + currId + " exists")));
                                }
                                else {
                                    ids.push(currId);
                                    var c = singleCtx.clone();
                                    c.deserialize(d);
                                    promises.push(localforage__WEBPACK_IMPORTED_MODULE_0__["setItem"](_this.appendKey(resourceKey_1, currId), c.serialize()));
                                }
                            }
                            return _this.ensureId.apply(_this, [resourceKey_1].concat(ids)).then(function () { return Promise.all(promises); });
                        });
                    }
                    break;
                case _tdm_data__WEBPACK_IMPORTED_MODULE_3__["ActionMethodType"].REPLACE:
                case _tdm_data__WEBPACK_IMPORTED_MODULE_3__["ActionMethodType"].UPDATE:
                    response = this.getById(resource_1, ctx.data)
                        .then(function (item) {
                        if (!item) {
                            return Promise.reject(new Error('Not Found'));
                        }
                        else {
                            var idToUpdate = ctx.data[resource_1.identity];
                            var newCtx = void 0;
                            if (action_1.method === _tdm_data__WEBPACK_IMPORTED_MODULE_3__["ActionMethodType"].UPDATE) {
                                newCtx = ctx.clone();
                                newCtx.deserialize(item);
                            }
                            else {
                                newCtx = ctx;
                            }
                            newCtx.deserialize(ctx.data);
                            return localforage__WEBPACK_IMPORTED_MODULE_0__["setItem"](_this.appendKey(resourceKey_1, idToUpdate), newCtx.serialize());
                        }
                    });
                    break;
                default:
                    response = Promise.resolve();
                    break;
            }
            return response.then(function (value) {
                executeResponse_1.data = value;
                return executeResponse_1;
            });
        }
        catch (err) {
            return Promise.reject(err);
        }
    };
    LocalForageAdapter.prototype.getAll = function (resource) {
        var _this = this;
        var resourceKey = this.getResourceKey(resource);
        return this.getKeys(resourceKey, true)
            .then(function (keys) {
            return Promise.all(keys.map(function (k) { return localforage__WEBPACK_IMPORTED_MODULE_0__["getItem"](_this.appendKey(resourceKey, k)); }));
        });
    };
    LocalForageAdapter.prototype.getById = function (resource, instance) {
        return localforage__WEBPACK_IMPORTED_MODULE_0__["getItem"](this.getInstanceKey(resource, instance));
    };
    LocalForageAdapter.prototype.appendKey = function (resourceKey, instanceKey) {
        return resourceKey + "." + instanceKey;
    };
    LocalForageAdapter.prototype.getResourceKey = function (resource) {
        return KEY_PREFIX + "." + resource.resName;
    };
    LocalForageAdapter.prototype.getInstanceKey = function (resource, instance) {
        var identValue = instance[resource.identity];
        return this.getResourceKey(resource) + "." + identValue;
    };
    LocalForageAdapter.prototype.getKeys = function (resourceKey, asArray) {
        return localforage__WEBPACK_IMPORTED_MODULE_0__["getItem"](resourceKey)
            .then(function (ids) {
            if (asArray === true) {
                return ids || [];
            }
            else {
                return new Set(ids || []);
            }
        });
    };
    LocalForageAdapter.prototype.saveKeys = function (resourceKey, keys) {
        var _this = this;
        return localforage__WEBPACK_IMPORTED_MODULE_0__["getItem"](resourceKey)
            .then(function (resourceTable) {
            var isRemove = !(keys && keys.size);
            if (isRemove) {
                if (resourceTable) {
                    return _this.removeTable(resourceKey);
                }
            }
            else {
                if (!resourceTable) {
                    return _this.addTable(resourceKey, _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_2__["SetExt"].asArray(keys));
                }
                else {
                    return localforage__WEBPACK_IMPORTED_MODULE_0__["setItem"](resourceKey, _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_2__["SetExt"].asArray(keys));
                }
            }
        })
            .then(function () { return keys; });
    };
    LocalForageAdapter.prototype.ensureId = function (resourceKey) {
        var _this = this;
        var ids = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            ids[_i - 1] = arguments[_i];
        }
        return this.getKeys(resourceKey)
            .then(function (foundIds) {
            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                var id = ids_1[_i];
                foundIds.add(id);
            }
            return _this.saveKeys(resourceKey, foundIds);
        });
    };
    LocalForageAdapter.prototype.removeId = function (resourceKey) {
        var _this = this;
        var ids = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            ids[_i - 1] = arguments[_i];
        }
        return this.getKeys(resourceKey)
            .then(function (foundIds) {
            for (var _i = 0, ids_2 = ids; _i < ids_2.length; _i++) {
                var id = ids_2[_i];
                foundIds.delete(id);
            }
            return _this.saveKeys(resourceKey, foundIds);
        });
    };
    LocalForageAdapter.prototype.removeTable = function (key) {
        var _this = this;
        var metaKey = KEY_PREFIX + "." + METADATA_TABLE;
        return localforage__WEBPACK_IMPORTED_MODULE_0__["getItem"](metaKey)
            .then(function (metaTableArray) {
            var metaTable = new Set(metaTableArray || []);
            metaTable.delete(key);
            return localforage__WEBPACK_IMPORTED_MODULE_0__["setItem"](metaKey, _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_2__["SetExt"].asArray(metaTable)) // update tables map
                .then(function () { return _this.getKeys(key, true); }) // get all rows
                .then(function (keys) { return Promise.all(// remove each row
            keys.map(function (k) { return localforage__WEBPACK_IMPORTED_MODULE_0__["removeItem"](_this.appendKey(key, k)); })); })
                .then(function () { return localforage__WEBPACK_IMPORTED_MODULE_0__["removeItem"](key); }); // remove table
        });
    };
    LocalForageAdapter.prototype.addTable = function (key, content) {
        var metaKey = KEY_PREFIX + "." + METADATA_TABLE;
        return localforage__WEBPACK_IMPORTED_MODULE_0__["getItem"](metaKey)
            .then(function (metaTableArray) {
            var metaTable = new Set(metaTableArray || []);
            metaTable.add(key);
            return localforage__WEBPACK_IMPORTED_MODULE_0__["setItem"](metaKey, _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_2__["SetExt"].asArray(metaTable))
                .then(function () {
                if (content) {
                    return localforage__WEBPACK_IMPORTED_MODULE_0__["setItem"](key, content);
                }
            });
        });
    };
    return LocalForageAdapter;
}());

_metadata__WEBPACK_IMPORTED_MODULE_4__["LocalForageActionMetadata"].adapterClass = LocalForageAdapter;


/***/ }),

/***/ "../../libs/local-forage/src/lib/decorators.ts":
/*!**************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/local-forage/src/lib/decorators.ts ***!
  \**************************************************************************************************/
/*! exports provided: LocalForageAction, LocalForageResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalForageAction", function() { return LocalForageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalForageResource", function() { return LocalForageResource; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../libs/local-forage/src/lib/core/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "../../libs/local-forage/src/lib/metadata/index.ts");



var LocalForageAction = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_2__["LocalForageActionMetadata"]);
// FOR AOT
var localForageResource = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].get(_metadata__WEBPACK_IMPORTED_MODULE_2__["LocalForageResourceMetadata"]).createResourceDecorator(_core__WEBPACK_IMPORTED_MODULE_1__["LocalForageAdapter"]);
function LocalForageResource(def) {
    var t = localForageResource(def);
    return t;
}
_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].on
    .processType(function (target) {
    var resource = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getMetaFor(target, _metadata__WEBPACK_IMPORTED_MODULE_2__["LocalForageResourceMetadata"], true);
    if (resource && !resource.identity) {
        throw new Error("Invalid LocalForageResource \"" + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(target) + "\" local forage resources must have an identity declared.");
    }
});


/***/ }),

/***/ "../../libs/local-forage/src/lib/local-forage-dao.ts":
/*!********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/local-forage/src/lib/local-forage-dao.ts ***!
  \********************************************************************************************************/
/*! exports provided: LocalForageDaoActions, LocalForageDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalForageDaoActions", function() { return LocalForageDaoActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalForageDao", function() { return LocalForageDao; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators */ "../../libs/local-forage/src/lib/decorators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalForageDaoActions = {
    query: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["LocalForageAction"])({
        method: _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ActionMethodType"].READ,
        isCollection: true,
        collInstance: true,
        validation: 'incoming',
        alias: 'findAll'
    }),
    findById: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["LocalForageAction"])({
        method: _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ActionMethodType"].READ,
        validation: 'incoming',
        pre: function (ctx, id, options) {
            ctx.setIdentity(id);
            return options;
        }
    }),
    find: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["LocalForageAction"])({
        method: _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ActionMethodType"].READ,
        validation: 'incoming',
        alias: 'findOne'
    }),
    create: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["LocalForageAction"])({
        method: _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ActionMethodType"].CREATE,
        validation: 'both',
        pre: function (ctx, data, options) {
            ctx.data = data;
            return options;
        }
    }),
    createBulk: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["LocalForageAction"])({
        method: _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ActionMethodType"].CREATE,
        isCollection: true,
        validation: 'both',
        pre: function (ctx, data, options) {
            ctx.data = data;
            return options;
        }
    }),
    update: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["LocalForageAction"])({
        method: _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ActionMethodType"].UPDATE,
        validation: 'both',
        pre: function (ctx, data, options) {
            ctx.data = data;
            return options;
        }
    }),
    replace: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["LocalForageAction"])({
        method: _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ActionMethodType"].REPLACE,
        validation: 'both',
        pre: function (ctx, data, options) {
            ctx.data = data;
            return options;
        }
    }),
    remove: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["LocalForageAction"])({
        method: _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ActionMethodType"].DELETE,
        validation: 'skip',
        pre: function (ctx, id, options) {
            if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(id)) {
                ctx.setIdentity(id);
            }
            else if (ctx.instanceOf(id)) {
                ctx.setInstance(id);
            }
            else {
                ctx.deserialize(id);
            }
            return options;
        }
    }),
    clear: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["LocalForageAction"])({
        method: _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ActionMethodType"].DELETE,
        validation: 'skip'
    })
};
var LocalForageDao = /** @class */ (function () {
    function LocalForageDao() {
    }
    __decorate([
        LocalForageDaoActions.query,
        __metadata("design:type", Function)
    ], LocalForageDao.prototype, "query", void 0);
    __decorate([
        LocalForageDaoActions.findById,
        __metadata("design:type", Function)
    ], LocalForageDao.prototype, "findById", void 0);
    __decorate([
        LocalForageDaoActions.find,
        __metadata("design:type", Function)
    ], LocalForageDao.prototype, "find", void 0);
    __decorate([
        LocalForageDaoActions.create,
        __metadata("design:type", Function)
    ], LocalForageDao.prototype, "create", void 0);
    __decorate([
        LocalForageDaoActions.createBulk,
        __metadata("design:type", Function)
    ], LocalForageDao.prototype, "createBulk", void 0);
    __decorate([
        LocalForageDaoActions.update,
        __metadata("design:type", Function)
    ], LocalForageDao.prototype, "update", void 0);
    __decorate([
        LocalForageDaoActions.replace,
        __metadata("design:type", Function)
    ], LocalForageDao.prototype, "replace", void 0);
    __decorate([
        LocalForageDaoActions.remove,
        __metadata("design:type", Function)
    ], LocalForageDao.prototype, "remove", void 0);
    __decorate([
        LocalForageDaoActions.clear,
        __metadata("design:type", Function)
    ], LocalForageDao.prototype, "clear", void 0);
    return LocalForageDao;
}());



/***/ }),

/***/ "../../libs/local-forage/src/lib/localForage.ts":
/*!***************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/local-forage/src/lib/localForage.ts ***!
  \***************************************************************************************************/
/*! exports provided: LocalForageDaoFactory, LocalForageAction, LocalForageResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators */ "../../libs/local-forage/src/lib/decorators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalForageAction", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["LocalForageAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalForageResource", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["LocalForageResource"]; });

/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ "../../libs/local-forage/src/lib/register.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalForageDaoFactory", function() { return _register__WEBPACK_IMPORTED_MODULE_1__["LocalForageDaoFactory"]; });





/***/ }),

/***/ "../../libs/local-forage/src/lib/metadata/action.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/local-forage/src/lib/metadata/action.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LocalForageActionMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalForageActionMetadata", function() { return LocalForageActionMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
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


var LocalForageActionMetadata = /** @class */ (function (_super) {
    __extends(LocalForageActionMetadata, _super);
    function LocalForageActionMetadata(obj, info) {
        return _super.call(this, obj, info) || this;
    }
    LocalForageActionMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['staticMember', 'member'],
            extend: 'actionMetadata',
            register: 'actionMetadata'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], LocalForageActionMetadata);
    return LocalForageActionMetadata;
}(_tdm_data__WEBPACK_IMPORTED_MODULE_1__["ActionMetadata"]));



/***/ }),

/***/ "../../libs/local-forage/src/lib/metadata/index.ts":
/*!******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/local-forage/src/lib/metadata/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: LocalForageResourceMetadata, LocalForageActionMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "../../libs/local-forage/src/lib/metadata/resource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalForageResourceMetadata", function() { return _resource__WEBPACK_IMPORTED_MODULE_0__["LocalForageResourceMetadata"]; });

/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "../../libs/local-forage/src/lib/metadata/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalForageActionMetadata", function() { return _action__WEBPACK_IMPORTED_MODULE_1__["LocalForageActionMetadata"]; });





/***/ }),

/***/ "../../libs/local-forage/src/lib/metadata/resource.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/local-forage/src/lib/metadata/resource.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LocalForageResourceMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalForageResourceMetadata", function() { return LocalForageResourceMetadata; });
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

var LocalForageResourceMetadata = /** @class */ (function (_super) {
    __extends(LocalForageResourceMetadata, _super);
    function LocalForageResourceMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalForageResourceMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            inherit: _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["ModelMetadata"]
        })
    ], LocalForageResourceMetadata);
    return LocalForageResourceMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["ModelMetadata"]));



/***/ }),

/***/ "../../libs/local-forage/src/lib/register.ts":
/*!************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/local-forage/src/lib/register.ts ***!
  \************************************************************************************************/
/*! exports provided: LocalForageDaoFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalForageDaoFactory", function() { return LocalForageDaoFactory; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "../../libs/local-forage/src/lib/metadata/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "../../libs/local-forage/src/lib/core/index.ts");
/* harmony import */ var _local_forage_dao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-forage-dao */ "../../libs/local-forage/src/lib/local-forage-dao.ts");





_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].registerAdapter(_core__WEBPACK_IMPORTED_MODULE_3__["LocalForageAdapter"], {
    actionMetaClass: _metadata__WEBPACK_IMPORTED_MODULE_2__["LocalForageActionMetadata"],
    DAOClass: _local_forage_dao__WEBPACK_IMPORTED_MODULE_4__["LocalForageDao"],
    resourceMetaClass: _metadata__WEBPACK_IMPORTED_MODULE_2__["LocalForageResourceMetadata"]
});
/**
 * An HttpDAO factory based for a target.
 */
var LocalForageDaoFactory = /** @class */ (function () {
    function LocalForageDaoFactory() {
    }
    LocalForageDaoFactory.prototype.get = function (target) {
        return _tdm_data__WEBPACK_IMPORTED_MODULE_1__["DAO"].of(_core__WEBPACK_IMPORTED_MODULE_3__["LocalForageAdapter"], target);
    };
    return LocalForageDaoFactory;
}());

_tdm_data__WEBPACK_IMPORTED_MODULE_1__["DAO"].localForage = LocalForageDaoFactory.prototype.get;


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

/***/ "../../libs/service-mocker/src/index.ts":
/*!*******************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/index.ts ***!
  \*******************************************************************************************/
/*! exports provided: ServiceMockerServer, ServerBase, HttpError, Server, OnMessage, createRouteHandlerParamDecorator, ServiceMockController, Request, Response, Header, Param, Query, Body, ServiceMockMethod, ServiceMockGet, ServiceMockPost, ServiceMockPut, ServiceMockPatch, ServiceMockDelete, ServiceMockHead, FallbackRoute, HttpCode, Forward, Delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/service-mocker */ "../../libs/service-mocker/src/lib/service-mocker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockerServer", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["ServiceMockerServer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerBase", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["ServerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["HttpError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["Server"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnMessage", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["OnMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRouteHandlerParamDecorator", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["createRouteHandlerParamDecorator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockController", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["ServiceMockController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["Request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["Response"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["Header"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["Param"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["Body"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockMethod", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["ServiceMockMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockGet", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["ServiceMockGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPost", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["ServiceMockPost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPut", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["ServiceMockPut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPatch", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["ServiceMockPatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockDelete", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["ServiceMockDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockHead", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["ServiceMockHead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FallbackRoute", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["FallbackRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCode", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["HttpCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["Forward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delay", function() { return _lib_service_mocker__WEBPACK_IMPORTED_MODULE_0__["Delay"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/builtin-route-handler-params.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/builtin-route-handler-params.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: Request, Response, Header, Param, Query, Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return Param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators */ "../../libs/service-mocker/src/lib/core/decorators/index.ts");

var Request = Object(_decorators__WEBPACK_IMPORTED_MODULE_0__["createRouteHandlerParamDecorator"])('request', function (param, req, res) { return req; });
var Response = Object(_decorators__WEBPACK_IMPORTED_MODULE_0__["createRouteHandlerParamDecorator"])('response', function (param, req, res) { return res; });
var Header = Object(_decorators__WEBPACK_IMPORTED_MODULE_0__["createRouteHandlerParamDecorator"])('header', function (param, req, res, metaArgs) {
    if (req.headers) {
        return metaArgs ? req.headers.get(metaArgs) : req.headers;
    }
});
var Param = Object(_decorators__WEBPACK_IMPORTED_MODULE_0__["createRouteHandlerParamDecorator"])('param', function (param, req, res, metaArgs) {
    if (req.params) {
        return metaArgs ? req.params[metaArgs] : req.params;
    }
});
var Query = Object(_decorators__WEBPACK_IMPORTED_MODULE_0__["createRouteHandlerParamDecorator"])('query', function (param, req, res, metaArgs) {
    if (req.query) {
        return metaArgs ? req.query[metaArgs] : req.query;
    }
});
var Body = Object(_decorators__WEBPACK_IMPORTED_MODULE_0__["createRouteHandlerParamDecorator"])('body', function (param, req, res, metaArgs) {
    switch (metaArgs) {
        case 'json':
            return req.json();
        case 'text':
            return req.text();
        case 'blob':
            return req.blob();
        case 'arrayBuffer':
            return req.arrayBuffer();
        case 'formData':
            return req.formData();
        default:
            return req.json();
    }
});


/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/decorators/fallback-route.ts":
/*!************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/decorators/fallback-route.ts ***!
  \************************************************************************************************************************/
/*! exports provided: FallbackRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FallbackRoute", function() { return FallbackRoute; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/service-mocker/src/lib/core/metadata/index.ts");


var FallbackRoute = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_1__["FallbackRouteMetadata"], true);


/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/decorators/index.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/decorators/index.ts ***!
  \***************************************************************************************************************/
/*! exports provided: Server, OnMessage, createRouteHandlerParamDecorator, ServiceMockController, ServiceMockMethod, ServiceMockGet, ServiceMockPost, ServiceMockPut, ServiceMockPatch, ServiceMockDelete, ServiceMockHead, FallbackRoute, HttpCode, Forward, Delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/service-mocker/src/lib/core/metadata/index.ts");
/* harmony import */ var _metadata_method_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metadata/method-extensions */ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/index.ts");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server */ "../../libs/service-mocker/src/lib/core/decorators/server.ts");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return _server__WEBPACK_IMPORTED_MODULE_3__["Server"]; });

/* harmony import */ var _on_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./on-message */ "../../libs/service-mocker/src/lib/core/decorators/on-message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnMessage", function() { return _on_message__WEBPACK_IMPORTED_MODULE_4__["OnMessage"]; });

/* harmony import */ var _service_mock_method__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-mock-method */ "../../libs/service-mocker/src/lib/core/decorators/service-mock-method.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockMethod", function() { return _service_mock_method__WEBPACK_IMPORTED_MODULE_5__["ServiceMockMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockGet", function() { return _service_mock_method__WEBPACK_IMPORTED_MODULE_5__["ServiceMockGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPost", function() { return _service_mock_method__WEBPACK_IMPORTED_MODULE_5__["ServiceMockPost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPut", function() { return _service_mock_method__WEBPACK_IMPORTED_MODULE_5__["ServiceMockPut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPatch", function() { return _service_mock_method__WEBPACK_IMPORTED_MODULE_5__["ServiceMockPatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockDelete", function() { return _service_mock_method__WEBPACK_IMPORTED_MODULE_5__["ServiceMockDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockHead", function() { return _service_mock_method__WEBPACK_IMPORTED_MODULE_5__["ServiceMockHead"]; });

/* harmony import */ var _fallback_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fallback-route */ "../../libs/service-mocker/src/lib/core/decorators/fallback-route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FallbackRoute", function() { return _fallback_route__WEBPACK_IMPORTED_MODULE_6__["FallbackRoute"]; });

/* harmony import */ var _method_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./method-extensions */ "../../libs/service-mocker/src/lib/core/decorators/method-extensions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCode", function() { return _method_extensions__WEBPACK_IMPORTED_MODULE_7__["HttpCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _method_extensions__WEBPACK_IMPORTED_MODULE_7__["Forward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delay", function() { return _method_extensions__WEBPACK_IMPORTED_MODULE_7__["Delay"]; });

/* harmony import */ var _route_handler_param__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route-handler-param */ "../../libs/service-mocker/src/lib/core/decorators/route-handler-param.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRouteHandlerParamDecorator", function() { return _route_handler_param__WEBPACK_IMPORTED_MODULE_8__["createRouteHandlerParamDecorator"]; });

/* harmony import */ var _service_mock_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service-mock-controller */ "../../libs/service-mocker/src/lib/core/decorators/service-mock-controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockController", function() { return _service_mock_controller__WEBPACK_IMPORTED_MODULE_9__["ServiceMockController"]; });











_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].on
    .processType(function (target) {
    var controllerMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getMetaFor(target, _metadata__WEBPACK_IMPORTED_MODULE_1__["ServiceMockControllerMetadata"], true);
    if (controllerMeta) {
        Object(_metadata_method_extensions__WEBPACK_IMPORTED_MODULE_2__["initExtensions"])(target);
    }
});


/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/decorators/method-extensions.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/decorators/method-extensions.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: HttpCode, Forward, Delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCode", function() { return HttpCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delay", function() { return Delay; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/service-mocker/src/lib/core/metadata/index.ts");


var HttpCode = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_1__["HttpCodeMetadata"]);
var Forward = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_1__["ForwardMetadata"]);
var Delay = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_1__["DelayMetadata"]);


/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/decorators/on-message.ts":
/*!********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/decorators/on-message.ts ***!
  \********************************************************************************************************************/
/*! exports provided: OnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnMessage", function() { return OnMessage; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/service-mocker/src/lib/core/metadata/index.ts");


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

/***/ "../../libs/service-mocker/src/lib/core/decorators/route-handler-param.ts":
/*!*****************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/decorators/route-handler-param.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: resolveRouteHandlerParam, createRouteHandlerParamDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveRouteHandlerParam", function() { return resolveRouteHandlerParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRouteHandlerParamDecorator", function() { return createRouteHandlerParamDecorator; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/service-mocker/src/lib/core/metadata/index.ts");


var methodParamInject = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_1__["RouteHandlerParamMetadata"], 'param');
var methodParamInjections = {};
// tslint:disable:max-line-length
function resolveRouteHandlerParam(ctx, p, metaType, metaArgs) {
    if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(methodParamInjections[metaType])) {
        return methodParamInjections[metaType].apply(null, [p, ctx.req, ctx.res, metaArgs]);
    }
}
function createRouteHandlerParamDecorator(metaType, handler, metaArgsMandatory) {
    methodParamInjections[metaType] = handler;
    return function (metaArgs) {
        if (metaArgsMandatory === true && !metaArgs) {
            throw new Error('');
        }
        return methodParamInject({ metaType: metaType, metaArgs: metaArgs });
    };
}


/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/decorators/server.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/decorators/server.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tdm_1 = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
var index_1 = __webpack_require__(/*! ../../service-mocker-server/index */ "../../libs/service-mocker/src/lib/service-mocker-server/index.ts");
var metadata_1 = __webpack_require__(/*! ../metadata */ "../../libs/service-mocker/src/lib/core/metadata/index.ts");
var method_extensions_1 = __webpack_require__(/*! ../metadata/method-extensions */ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/index.ts");
var request_handler_1 = __webpack_require__(/*! ../request-handler */ "../../libs/service-mocker/src/lib/core/request-handler.ts");
var register_1 = __webpack_require__(/*! ../register */ "../../libs/service-mocker/src/lib/core/register.ts");
var server = tdm_1.MetaClass.decorator(metadata_1.ServerMetadata, true, 'class');
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
function isExtendingServerBase(target) {
    while (target) {
        if (target === index_1.ServerBase) {
            return true;
        }
        target = tdm_1.getBaseClass(target);
    }
    return false;
}
function Server(metaArgs) {
    return function (target) {
        if (!isExtendingServerBase(target)) {
            throw new Error("Class " + tdm_1.stringify(target) + " decorated with \"@Server()\" must extend \"ServerBase\"");
        }
        var WrappedServiceMockerServer = /** @class */ (function (_super) {
            __extends(WrappedServiceMockerServer, _super);
            function WrappedServiceMockerServer() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                var serverMeta = tdm_1.targetStore.getMetaFor(target, metadata_1.ServerMetadata, true);
                var serviceMockerServer = index_1.ServiceMockerServer
                    .create(new ContextMessageHandler(_this, serverMeta.messageHandlers), serverMeta.baseUrl);
                register_1.registerControllers(serverMeta, serviceMockerServer);
                if (tdm_1.isFunction(_this.init)) {
                    _this.init();
                }
                var fallback = tdm_1.targetStore.getMetaFor(target, metadata_1.FallbackRouteMetadata);
                if (fallback) {
                    var fallbackMeta = tdm_1.MapExt.asValArray(fallback)[0];
                    if (fallbackMeta) {
                        serviceMockerServer.router.scope()
                            .all('/*', request_handler_1.createGlobalMiddlewareHandler(serverMeta.baseUrl, request_handler_1.createHandler(function () { return _this; }, fallbackMeta), function (req, res) { return res.forward(req.url); }));
                    }
                }
                return _this;
            }
            return WrappedServiceMockerServer;
        }(target));
        tdm_1.targetStore.registerTarget(WrappedServiceMockerServer);
        tdm_1.targetStore.extend(target, WrappedServiceMockerServer);
        target = server(metaArgs)(WrappedServiceMockerServer) || WrappedServiceMockerServer;
        method_extensions_1.initExtensions(target);
        return target;
    };
}
exports.Server = Server;


/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/decorators/service-mock-controller.ts":
/*!*********************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/decorators/service-mock-controller.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ServiceMockController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockController", function() { return ServiceMockController; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/service-mocker/src/lib/core/metadata/index.ts");


var serviceMockController = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_1__["ServiceMockControllerMetadata"], 'class');
function ServiceMockController(metaArgs) {
    return function (target) {
        target = serviceMockController(metaArgs)(target) || target;
        var metaClass = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getMetaFor(target, _metadata__WEBPACK_IMPORTED_MODULE_1__["ServiceMockControllerMetadata"], true);
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["processModel"])(target, metaClass, metaClass.skip !== true);
    };
}


/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/decorators/service-mock-method.ts":
/*!*****************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/decorators/service-mock-method.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ServiceMockMethod, ServiceMockGet, ServiceMockPost, ServiceMockPut, ServiceMockPatch, ServiceMockDelete, ServiceMockHead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockMethod", function() { return ServiceMockMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockGet", function() { return ServiceMockGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPost", function() { return ServiceMockPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPut", function() { return ServiceMockPut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPatch", function() { return ServiceMockPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockDelete", function() { return ServiceMockDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockHead", function() { return ServiceMockHead; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/service-mocker/src/lib/core/metadata/index.ts");


var ServiceMockMethod = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_1__["ServiceMockMethodMetadata"]);
function createMethodDecorator(method) {
    return function (metaArgs) {
        return ServiceMockMethod(Object.assign({}, metaArgs || {}, { method: method }));
    };
}
var ServiceMockGet = createMethodDecorator('get');
var ServiceMockPost = createMethodDecorator('post');
var ServiceMockPut = createMethodDecorator('put');
var ServiceMockPatch = createMethodDecorator('patch');
var ServiceMockDelete = createMethodDecorator('delete');
var ServiceMockHead = createMethodDecorator('head');


/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/index.ts":
/*!****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: Server, OnMessage, createRouteHandlerParamDecorator, ServiceMockController, Request, Response, Header, Param, Query, Body, ServiceMockMethod, ServiceMockGet, ServiceMockPost, ServiceMockPut, ServiceMockPatch, ServiceMockDelete, ServiceMockHead, FallbackRoute, HttpCode, Forward, Delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators */ "../../libs/service-mocker/src/lib/core/decorators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["Server"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnMessage", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["OnMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRouteHandlerParamDecorator", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["createRouteHandlerParamDecorator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockController", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["ServiceMockController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockMethod", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["ServiceMockMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockGet", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["ServiceMockGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPost", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["ServiceMockPost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPut", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["ServiceMockPut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPatch", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["ServiceMockPatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockDelete", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["ServiceMockDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockHead", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["ServiceMockHead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FallbackRoute", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["FallbackRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCode", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["HttpCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["Forward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delay", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["Delay"]; });

/* harmony import */ var _builtin_route_handler_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builtin-route-handler-params */ "../../libs/service-mocker/src/lib/core/builtin-route-handler-params.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _builtin_route_handler_params__WEBPACK_IMPORTED_MODULE_1__["Request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return _builtin_route_handler_params__WEBPACK_IMPORTED_MODULE_1__["Response"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _builtin_route_handler_params__WEBPACK_IMPORTED_MODULE_1__["Header"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return _builtin_route_handler_params__WEBPACK_IMPORTED_MODULE_1__["Param"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _builtin_route_handler_params__WEBPACK_IMPORTED_MODULE_1__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return _builtin_route_handler_params__WEBPACK_IMPORTED_MODULE_1__["Body"]; });





/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/metadata/fallback-route.ts":
/*!**********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/fallback-route.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: FallbackRouteMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FallbackRouteMetadata", function() { return FallbackRouteMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _method_extensions_method_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./method-extensions/method-extensions */ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/method-extensions.ts");
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


var FallbackRouteMetadata = /** @class */ (function (_super) {
    __extends(FallbackRouteMetadata, _super);
    function FallbackRouteMetadata(metaArgs, info) {
        return _super.call(this, info) || this;
    }
    FallbackRouteMetadata.prototype.initExtensions = function (tMeta, prop) {
        for (var _i = 0, _a = Object(_method_extensions_method_extensions__WEBPACK_IMPORTED_MODULE_1__["getExtensions"])(); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], metaClass = _b[1];
            if (!this[key]) {
                var metaClassInstance = tMeta.getMetaFor(metaClass, prop.name);
                // we set 'any' because `getMetaFor returns a type which is the instance of the metaClass however,
                // this is not a rule, the type can be for example and array of the metaClass (we use getValues) for that
                if (metaClassInstance) {
                    this[key] = metaClassInstance;
                }
            }
        }
    };
    FallbackRouteMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['member'],
            extend: 'mergeMap'
        }),
        Object(_method_extensions_method_extensions__WEBPACK_IMPORTED_MODULE_1__["MethodExtensionsHost"])(),
        __metadata("design:paramtypes", [void 0, Object])
    ], FallbackRouteMetadata);
    return FallbackRouteMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/metadata/index.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/index.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ServerMetadata, ServiceMockMethodMetadata, FallbackRouteMetadata, HttpCodeMetadata, ForwardMetadata, DelayMetadata, RouteHandlerParamMetadata, ServiceMockControllerMetadata, OnMessageMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "../../libs/service-mocker/src/lib/core/metadata/server.ts");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerMetadata", function() { return _server__WEBPACK_IMPORTED_MODULE_0__["ServerMetadata"]; });

/* harmony import */ var _service_mock_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-mock-method */ "../../libs/service-mocker/src/lib/core/metadata/service-mock-method.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockMethodMetadata", function() { return _service_mock_method__WEBPACK_IMPORTED_MODULE_1__["ServiceMockMethodMetadata"]; });

/* harmony import */ var _fallback_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fallback-route */ "../../libs/service-mocker/src/lib/core/metadata/fallback-route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FallbackRouteMetadata", function() { return _fallback_route__WEBPACK_IMPORTED_MODULE_2__["FallbackRouteMetadata"]; });

/* harmony import */ var _method_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./method-extensions */ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCodeMetadata", function() { return _method_extensions__WEBPACK_IMPORTED_MODULE_3__["HttpCodeMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForwardMetadata", function() { return _method_extensions__WEBPACK_IMPORTED_MODULE_3__["ForwardMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelayMetadata", function() { return _method_extensions__WEBPACK_IMPORTED_MODULE_3__["DelayMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteHandlerParamMetadata", function() { return _method_extensions__WEBPACK_IMPORTED_MODULE_3__["RouteHandlerParamMetadata"]; });

/* harmony import */ var _service_mock_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-mock-controller */ "../../libs/service-mocker/src/lib/core/metadata/service-mock-controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockControllerMetadata", function() { return _service_mock_controller__WEBPACK_IMPORTED_MODULE_4__["ServiceMockControllerMetadata"]; });

/* harmony import */ var _on_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./on-message */ "../../libs/service-mocker/src/lib/core/metadata/on-message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnMessageMetadata", function() { return _on_message__WEBPACK_IMPORTED_MODULE_5__["OnMessageMetadata"]; });









/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/delay.ts":
/*!*******************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/method-extensions/delay.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: DelayMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayMetadata", function() { return DelayMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _service_mock_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-mock-method */ "../../libs/service-mocker/src/lib/core/metadata/service-mock-method.ts");
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


var DelayMetadata = /** @class */ (function (_super) {
    __extends(DelayMetadata, _super);
    function DelayMetadata(delay, info) {
        var _this = _super.call(this, info) || this;
        _this.delay = delay;
        return _this;
    }
    DelayMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['member'],
            extend: 'mergeMap',
            proxy: {
                host: _service_mock_method__WEBPACK_IMPORTED_MODULE_1__["ServiceMockMethodMetadata"],
                containerKey: 'httpCode'
            }
        }),
        __metadata("design:paramtypes", [Number, Object])
    ], DelayMetadata);
    return DelayMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/forward.ts":
/*!*********************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/method-extensions/forward.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ForwardMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardMetadata", function() { return ForwardMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _service_mock_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-mock-method */ "../../libs/service-mocker/src/lib/core/metadata/service-mock-method.ts");
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


var ForwardMetadata = /** @class */ (function (_super) {
    __extends(ForwardMetadata, _super);
    function ForwardMetadata(forward, info) {
        var _this = _super.call(this, info) || this;
        _this.forward = forward;
        return _this;
    }
    ForwardMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['member'],
            extend: 'mergeMap',
            proxy: {
                host: _service_mock_method__WEBPACK_IMPORTED_MODULE_1__["ServiceMockMethodMetadata"],
                containerKey: 'forward'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], ForwardMetadata);
    return ForwardMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/http-code.ts":
/*!***********************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/method-extensions/http-code.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: HttpCodeMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCodeMetadata", function() { return HttpCodeMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _service_mock_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-mock-method */ "../../libs/service-mocker/src/lib/core/metadata/service-mock-method.ts");
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


var HttpCodeMetadata = /** @class */ (function (_super) {
    __extends(HttpCodeMetadata, _super);
    function HttpCodeMetadata(code, info) {
        var _this = _super.call(this, info) || this;
        _this.code = code;
        return _this;
    }
    HttpCodeMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['member'],
            extend: 'mergeMap',
            proxy: {
                host: _service_mock_method__WEBPACK_IMPORTED_MODULE_1__["ServiceMockMethodMetadata"],
                containerKey: 'httpCode'
            }
        }),
        __metadata("design:paramtypes", [Number, Object])
    ], HttpCodeMetadata);
    return HttpCodeMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/index.ts":
/*!*******************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/method-extensions/index.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: HttpCodeMetadata, ForwardMetadata, DelayMetadata, RouteHandlerParamMetadata, getExtensions, registerMethodExtensions, MethodExtensionsHost, initExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _method_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./method-extensions */ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/method-extensions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtensions", function() { return _method_extensions__WEBPACK_IMPORTED_MODULE_0__["getExtensions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerMethodExtensions", function() { return _method_extensions__WEBPACK_IMPORTED_MODULE_0__["registerMethodExtensions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MethodExtensionsHost", function() { return _method_extensions__WEBPACK_IMPORTED_MODULE_0__["MethodExtensionsHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initExtensions", function() { return _method_extensions__WEBPACK_IMPORTED_MODULE_0__["initExtensions"]; });

/* harmony import */ var _http_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-code */ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/http-code.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCodeMetadata", function() { return _http_code__WEBPACK_IMPORTED_MODULE_1__["HttpCodeMetadata"]; });

/* harmony import */ var _forward__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forward */ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/forward.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForwardMetadata", function() { return _forward__WEBPACK_IMPORTED_MODULE_2__["ForwardMetadata"]; });

/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delay */ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/delay.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelayMetadata", function() { return _delay__WEBPACK_IMPORTED_MODULE_3__["DelayMetadata"]; });

/* harmony import */ var _route_handler_param__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route-handler-param */ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/route-handler-param.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteHandlerParamMetadata", function() { return _route_handler_param__WEBPACK_IMPORTED_MODULE_4__["RouteHandlerParamMetadata"]; });








/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/method-extensions.ts":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/method-extensions/method-extensions.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: getExtensions, registerMethodExtensions, MethodExtensionsHost, initExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtensions", function() { return getExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMethodExtensions", function() { return registerMethodExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodExtensionsHost", function() { return MethodExtensionsHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initExtensions", function() { return initExtensions; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");

var methodExtensionStore = [];
var methodExtensionHostStore = [];
function getExtensions() {
    return methodExtensionStore;
}
// tslint:disable-next-line:max-line-length
function registerMethodExtensions(key, metaClass) {
    methodExtensionStore.push([key, metaClass]);
}
function MethodExtensionsHost() {
    return function (t) {
        methodExtensionHostStore.push(t);
    };
}
function initExtensions(target) {
    var tMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(target);
    for (var _i = 0, methodExtensionHostStore_1 = methodExtensionHostStore; _i < methodExtensionHostStore_1.length; _i++) {
        var ext = methodExtensionHostStore_1[_i];
        var extMap = tMeta.getMetaFor(ext);
        if (extMap) {
            _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MapExt"].asKeyValArray(extMap).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                var prop = tMeta.getCreateProp(k);
                v.initExtensions(tMeta, prop);
            });
        }
    }
}


/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/route-handler-param.ts":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/method-extensions/route-handler-param.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: RouteHandlerParamMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteHandlerParamMetadata", function() { return RouteHandlerParamMetadata; });
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

var RouteHandlerParamMetadata = /** @class */ (function (_super) {
    __extends(RouteHandlerParamMetadata, _super);
    function RouteHandlerParamMetadata(metaArgs, info, target) {
        var _this = _super.call(this, info, target) || this;
        _this.metaArgs = metaArgs;
        return _this;
    }
    RouteHandlerParamMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['param'],
            register: 'array',
            extend: 'mergeMapArray'
        }),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], RouteHandlerParamMetadata);
    return RouteHandlerParamMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseParamMetadata"]));



/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/metadata/on-message.ts":
/*!******************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/on-message.ts ***!
  \******************************************************************************************************************/
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

/***/ "../../libs/service-mocker/src/lib/core/metadata/server.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/server.ts ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var tdm_1 = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
var on_message_1 = __webpack_require__(/*! ./on-message */ "../../libs/service-mocker/src/lib/core/metadata/on-message.ts");
var ServerMetadata = /** @class */ (function (_super) {
    __extends(ServerMetadata, _super);
    function ServerMetadata(metaArgs, info, target) {
        var _this = _super.call(this, info) || this;
        _this.target = target;
        _this.messageHandlers = new Map();
        _this.baseUrl = metaArgs.baseUrl || '/';
        _this.controllers = metaArgs.controllers;
        var clientMessage = tdm_1.targetStore.getMetaFor(target, on_message_1.OnMessageMetadata);
        if (clientMessage) {
            for (var _i = 0, _a = tdm_1.MapExt.asKeyValArray(clientMessage); _i < _a.length; _i++) {
                var _b = _a[_i], k = _b[0], v = _b[1];
                _this.messageHandlers.set(v.eventName, k);
            }
        }
        return _this;
    }
    ServerMetadata = __decorate([
        tdm_1.MetaClass({
            single: true,
            inherit: tdm_1.ModelMetadata,
            allowOn: ['class']
        }),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof tdm_1.DecoratorInfo !== "undefined" && tdm_1.DecoratorInfo) === "function" && _a || Object, typeof (_b = typeof tdm_1.Constructor !== "undefined" && tdm_1.Constructor) === "function" && _b || Object])
    ], ServerMetadata);
    return ServerMetadata;
    var _a, _b;
}(tdm_1.BaseMetadata));
exports.ServerMetadata = ServerMetadata;


/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/metadata/service-mock-controller.ts":
/*!*******************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/service-mock-controller.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ServiceMockControllerMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockControllerMetadata", function() { return ServiceMockControllerMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _service_mock_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-mock-method */ "../../libs/service-mocker/src/lib/core/metadata/service-mock-method.ts");
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


var ServiceMockControllerMetadata = /** @class */ (function (_super) {
    __extends(ServiceMockControllerMetadata, _super);
    function ServiceMockControllerMetadata(obj, info, t) {
        var _this = _super.call(this, obj, info, t) || this;
        if (obj) {
            _this.path = obj.path || '/';
        }
        return _this;
    }
    ServiceMockControllerMetadata.prototype.setMethod = function (metaArgs) {
        this.methods.set(metaArgs.name, metaArgs);
    };
    ServiceMockControllerMetadata.prototype.getMethod = function (propertyKey) {
        return this.methods.get(propertyKey);
    };
    __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["LazyInit"])(function () {
            return this.tMeta.getMetaFor(_service_mock_method__WEBPACK_IMPORTED_MODULE_1__["ServiceMockMethodMetadata"]);
        }),
        __metadata("design:type", Map)
    ], ServiceMockControllerMetadata.prototype, "methods", void 0);
    ServiceMockControllerMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            inherit: _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["ModelMetadata"]
        }),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], ServiceMockControllerMetadata);
    return ServiceMockControllerMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["ModelMetadata"]));



/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/metadata/service-mock-method.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/metadata/service-mock-method.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ServiceMockMethodMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockMethodMetadata", function() { return ServiceMockMethodMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _method_extensions_method_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./method-extensions/method-extensions */ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/method-extensions.ts");
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


var ServiceMockMethodMetadata = /** @class */ (function (_super) {
    __extends(ServiceMockMethodMetadata, _super);
    function ServiceMockMethodMetadata(obj, info, t) {
        var _this = _super.call(this, info) || this;
        _this.path = obj.path || '/';
        _this.method = obj.method;
        return _this;
    }
    ServiceMockMethodMetadata.prototype.initExtensions = function (tMeta, prop) {
        for (var _i = 0, _a = Object(_method_extensions_method_extensions__WEBPACK_IMPORTED_MODULE_1__["getExtensions"])(); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], metaClass = _b[1];
            if (!this[key]) {
                var metaClassInstance = tMeta.getMetaFor(metaClass, prop.name);
                // we set 'any' because `getMetaFor returns a type which is the instance of the metaClass however,
                // this is not a rule, the type can be for example and array of the metaClass (we use getValues) for that
                if (metaClassInstance) {
                    this[key] = metaClassInstance;
                }
            }
        }
    };
    ServiceMockMethodMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['member'],
            extend: 'mergeMap'
        }),
        Object(_method_extensions_method_extensions__WEBPACK_IMPORTED_MODULE_1__["MethodExtensionsHost"])(),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], ServiceMockMethodMetadata);
    return ServiceMockMethodMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/register.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/register.ts ***!
  \*******************************************************************************************************/
/*! exports provided: registerControllers, registerMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerControllers", function() { return registerControllers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMethods", function() { return registerMethods; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _http_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-error */ "../../libs/service-mocker/src/lib/http-error.ts");
/* harmony import */ var _request_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-handler */ "../../libs/service-mocker/src/lib/core/request-handler.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ "../../libs/service-mocker/src/lib/core/metadata/index.ts");




function registerControllers(serverMeta, serviceMockerServer) {
    var allMode = serverMeta.controllers === 'all';
    var reg = function (t) {
        var m = t.model();
        if (m instanceof _metadata__WEBPACK_IMPORTED_MODULE_3__["ServiceMockControllerMetadata"]) {
            registerMethods(m, serviceMockerServer);
        }
        else if (!allMode) {
            throw new Error("\"" + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(t.target) + "\" is not a controller in \"" + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(serverMeta.target) + "\"");
        }
    };
    if (allMode) {
        _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getAllModels().forEach(reg);
    }
    else {
        var controllers = Array.isArray(serverMeta.controllers)
            ? serverMeta.controllers
            : Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(serverMeta.controllers) ? serverMeta.controllers() : null;
        if (!controllers) {
            throw new Error("@Server() class \"" + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["stringify"])(serverMeta.target) + "\" has no controllers not set.");
        }
        for (var _i = 0, controllers_1 = controllers; _i < controllers_1.length; _i++) {
            var c = controllers_1[_i];
            var t = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(c);
            if (t) {
                reg(t);
            }
        }
    }
}
function registerMethods(ctrl, server) {
    var subRouter = server.router.scope(ctrl.path);
    var methods = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MapExt"].asValArray(ctrl.methods);
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var m = methods_1[_i];
        switch (m.method) {
            case 'get':
            case 'post':
            case 'put':
            case 'patch':
            case 'delete':
            case 'options':
            case 'head':
                subRouter[m.method](m.path, Object(_request_handler__WEBPACK_IMPORTED_MODULE_2__["createHandlerFromController"])(ctrl, m));
                break;
            default:
                break;
        }
    }
    subRouter.all('/*', methodNotAllowed);
}
function methodNotAllowed(req, res) {
    return res.status(405).json(_http_error__WEBPACK_IMPORTED_MODULE_1__["HttpError"].createKnown('405'));
}


/***/ }),

/***/ "../../libs/service-mocker/src/lib/core/request-handler.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/core/request-handler.ts ***!
  \**************************************************************************************************************/
/*! exports provided: createHandlerFromController, createHandler, createGlobalMiddlewareHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHandlerFromController", function() { return createHandlerFromController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return createHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalMiddlewareHandler", function() { return createGlobalMiddlewareHandler; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _http_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-error */ "../../libs/service-mocker/src/lib/http-error.ts");
/* harmony import */ var _decorators_route_handler_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/route-handler-param */ "../../libs/service-mocker/src/lib/core/decorators/route-handler-param.ts");



function getForwardLink(ctx) {
    var forwardValue = ctx.method.forwardMeta.forward === true
        ? resolveMethodValue(ctx)
        : ctx.method.forwardMeta.forward;
    return Promise.resolve(forwardValue);
}
function delay(method) {
    return method.delayMeta
        ? new Promise(function (resolve) { return setTimeout(resolve, method.delayMeta.delay || 0); })
        : Promise.resolve();
}
function getHttpCode(method) {
    return method.httpCodeMeta ? method.httpCodeMeta.code : 200;
}
function resolveMethodValue(ctx) {
    var instance = ctx.instance();
    var name = ctx.method.decoratorInfo.name;
    if (instance && name in instance) {
        return Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(instance[name]) ? emitInstanceMethod(ctx, instance, name) : instance[name];
    }
    else {
        return null;
    }
}
function emitInstanceMethod(ctx, instance, name) {
    var injection = [];
    var routeHandlerParams = ctx.method.routeHandlerParams;
    if (Array.isArray(routeHandlerParams)) {
        for (var _i = 0, routeHandlerParams_1 = routeHandlerParams; _i < routeHandlerParams_1.length; _i++) {
            var p = routeHandlerParams_1[_i];
            var _a = p.metaArgs, metaType = _a.metaType, metaArgs = _a.metaArgs;
            injection[p.paramIndex] = Object(_decorators_route_handler_param__WEBPACK_IMPORTED_MODULE_2__["resolveRouteHandlerParam"])(ctx, p, metaType, metaArgs);
        }
    }
    return Promise.all(injection)
        .then(function (args) { return instance[name].apply(instance, args); });
}
function emitError(res, error, extendError) {
    var httpError = error instanceof _http_error__WEBPACK_IMPORTED_MODULE_1__["HttpError"]
        ? error
        : _http_error__WEBPACK_IMPORTED_MODULE_1__["HttpError"].createKnown('500', error.message || 'Unknown Error');
    var sendData = {
        message: httpError.message
    };
    if (httpError.description) {
        sendData.description = httpError.description;
    }
    if (extendError) {
        Object.assign(sendData, extendError);
    }
    res.status(httpError.httpCode).json(sendData);
}
function createHandlerFromController(ctrl, method) {
    return createHandler(function () { return ctrl.factory(false); }, method);
}
function createHandler(instance, method) {
    return function (req, res) {
        return delay(method)
            .then(function () {
            var ctx = { instance: instance, method: method, req: req, res: res };
            if (method.forwardMeta) {
                return getForwardLink(ctx).then(function (value) { return res.forward(value); });
            }
            else {
                res.type('json');
                return Promise.resolve(resolveMethodValue(ctx))
                    .then(function (value) { return res.status(getHttpCode(method)).json(value); });
            }
        })
            .catch(function (err) { return emitError(res, err); });
    };
}
/**
 * Returns a handler that checks if the current request pathname starts with the given path, if so will
 * invoke `matchHandler` otherwise will invoke noMatchHandler if provided.
 */
function createGlobalMiddlewareHandler(path, matchHandler, noMatchHandler) {
    var regExp = new RegExp("^" + path + "(?:$|/)");
    return function (req, res) {
        var url = new URL(req.url);
        if (regExp.test(url.pathname)) {
            return matchHandler(req, res);
        }
        else if (noMatchHandler) {
            return noMatchHandler(req, res);
        }
    };
}


/***/ }),

/***/ "../../libs/service-mocker/src/lib/http-error.ts":
/*!****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/http-error.ts ***!
  \****************************************************************************************************/
/*! exports provided: KNOWN_HTTP_ERRORS, HttpError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KNOWN_HTTP_ERRORS", function() { return KNOWN_HTTP_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
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
var KNOWN_HTTP_ERRORS = {
    400: {
        name: 'BadRequest',
        message: 'Bad Request'
    },
    401: {
        name: 'Unauthorized',
        message: 'Unauthorized'
    },
    402: {
        name: 'PaymentRequired',
        message: 'Payment Required'
    },
    403: {
        name: 'Forbidden',
        message: 'Forbidden'
    },
    404: {
        name: 'NotFound',
        message: 'Not Found'
    },
    405: {
        name: 'MethodNotAllowed',
        message: 'Method Not Allowed'
    },
    406: {
        name: 'NotAcceptable',
        message: 'Not Acceptable'
    },
    /* ... */
    500: {
        name: 'InternalServerError',
        message: 'Internal Server Error'
    },
    501: {
        name: 'NotImplemented',
        message: 'Not Implemented'
    },
    502: {
        name: 'BadGateway',
        message: 'Bad Gateway'
    },
    503: {
        name: 'ServiceUnavailable',
        message: 'Service Unavailable'
    },
    504: {
        name: 'Gateway Timeout',
        message: 'Gateway Timeout'
    },
    505: {
        name: 'HTTP Version Not Supported',
        message: 'HTTP Version Not Supported'
    }
};
var UNKNOWN_HTTP_ERROR = {
    name: 'UnknownError',
    message: 'Unknown Error'
};
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError() {
        return _super.call(this) || this;
    }
    HttpError.create = function (httpCode, config) {
        if (config === void 0) { config = {}; }
        // tslint:disable-next-line:no-use-before-declare
        var message = config.message, description = config.description;
        var base = config.base || HttpError;
        var httpError = new base();
        Object.setPrototypeOf(httpError, base.prototype);
        httpError.httpCode = httpCode || 500;
        if (message) {
            httpError.message = message;
        }
        if (description) {
            httpError.description = description;
        }
        httpError.stack = new Error().stack;
        return httpError;
    };
    HttpError.createKnown = function (httpCode, description) {
        var knownError = KNOWN_HTTP_ERRORS[httpCode];
        if (!knownError) {
            knownError = UNKNOWN_HTTP_ERROR;
        }
        var httpError = HttpError.create(Number(httpCode), { message: knownError.message, description: description });
        httpError.name = knownError.name;
        return httpError;
    };
    return HttpError;
}(Error));



/***/ }),

/***/ "../../libs/service-mocker/src/lib/init-metadata.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/init-metadata.ts ***!
  \*******************************************************************************************************/
/*! exports provided: initMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMetadata", function() { return initMetadata; });
/* harmony import */ var _core_metadata_method_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/metadata/method-extensions */ "../../libs/service-mocker/src/lib/core/metadata/method-extensions/index.ts");

function initMetadata() {
    _core_metadata_method_extensions__WEBPACK_IMPORTED_MODULE_0__["registerMethodExtensions"]('httpCodeMeta', _core_metadata_method_extensions__WEBPACK_IMPORTED_MODULE_0__["HttpCodeMetadata"]);
    _core_metadata_method_extensions__WEBPACK_IMPORTED_MODULE_0__["registerMethodExtensions"]('forwardMeta', _core_metadata_method_extensions__WEBPACK_IMPORTED_MODULE_0__["ForwardMetadata"]);
    _core_metadata_method_extensions__WEBPACK_IMPORTED_MODULE_0__["registerMethodExtensions"]('delayMeta', _core_metadata_method_extensions__WEBPACK_IMPORTED_MODULE_0__["DelayMetadata"]);
    _core_metadata_method_extensions__WEBPACK_IMPORTED_MODULE_0__["registerMethodExtensions"]('routeHandlerParams', _core_metadata_method_extensions__WEBPACK_IMPORTED_MODULE_0__["RouteHandlerParamMetadata"]);
}


/***/ }),

/***/ "../../libs/service-mocker/src/lib/service-mocker-server/index.ts":
/*!*********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/service-mocker-server/index.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ServiceMockerServer, ServerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_mocker_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-mocker-server */ "../../libs/service-mocker/src/lib/service-mocker-server/service-mocker-server.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockerServer", function() { return _service_mocker_server__WEBPACK_IMPORTED_MODULE_0__["ServiceMockerServer"]; });

/* harmony import */ var _server_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-base */ "../../libs/service-mocker/src/lib/service-mocker-server/server-base.ts");
/* harmony import */ var _server_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerBase", function() { return _server_base__WEBPACK_IMPORTED_MODULE_1__["ServerBase"]; });





/***/ }),

/***/ "../../libs/service-mocker/src/lib/service-mocker-server/server-base.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/service-mocker-server/server-base.ts ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tdm_1 = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
var ServerBase = /** @class */ (function () {
    function ServerBase() {
    }
    ServerBase.prototype.dispose = function () {
        this._smServer.dispose();
    };
    ServerBase.prototype.send = function (action, data, client, timeout) {
        if (tdm_1.isNumber(client)) {
            timeout = client;
            client = undefined;
        }
        if (!client) {
            return this._smServer.sendActionAll(action, data, timeout);
        }
        else {
            return this._smServer.sendAction(client, action, data, timeout);
        }
    };
    return ServerBase;
}());
exports.ServerBase = ServerBase;


/***/ }),

/***/ "../../libs/service-mocker/src/lib/service-mocker-server/service-mocker-server.ts":
/*!*************************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/service-mocker-server/service-mocker-server.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ServiceMockerServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMockerServer", function() { return ServiceMockerServer; });
/* harmony import */ var service_mocker_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! service-mocker/server */ "../../node_modules/service-mocker/server/index.js");
/* harmony import */ var service_mocker_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(service_mocker_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tdm_service_mocker_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/service-mocker/shared */ "../../libs/service-mocker/shared/src/index.ts");


/**
 * Patch the service-mocker MockerRouter to fix the bug with deep nested routes not working properly.
 * SEE https://github.com/service-mocker/service-mocker/issues/48
 */
function pathServiceMockerBug48(router) {
    if (router.constructor['TDM_PATCHED'] !== pathServiceMockerBug48) {
        router.constructor['TDM_PATCHED'] = pathServiceMockerBug48;
        var oldMatch_1 = router.constructor.prototype._match;
        router.constructor.prototype._match = function (event) {
            var request = event.request;
            var url = new URL(request.url, location.href);
            var re = new RegExp("^" + this._basePath + "(.*)");
            var match = re.exec(url.pathname);
            return match ? oldMatch_1.call(this, event) : false;
        };
    }
}
var servers = [];
var ServiceMockerServer = /** @class */ (function () {
    function ServiceMockerServer(mockServer, messageHandler) {
        this.mockServer = mockServer;
        this.messageHandler = messageHandler;
        this.router = mockServer.router;
        pathServiceMockerBug48(this.router);
    }
    ServiceMockerServer.prototype.onMessage = function (event) {
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
    ServiceMockerServer.prototype.dispose = function () {
        var idx = servers.indexOf(this);
        servers.splice(idx, 1);
    };
    ServiceMockerServer.prototype.sendAction = function (client, action, data, timeout) {
        var message = { action: action, data: data };
        return Object(_tdm_service_mocker_shared__WEBPACK_IMPORTED_MODULE_1__["sendMessageRequest"])(client, message, timeout);
    };
    ServiceMockerServer.prototype.sendActionAll = function (action, data, timeout) {
        var _this = this;
        return self.clients.matchAll()
            .then(function (clients) {
            return Promise.all(clients.map(function (c) { return _this.sendAction(c, action, data, timeout); }));
        });
    };
    ServiceMockerServer.create = function (messageHandler, baseURL) {
        var mockServer = Object(service_mocker_server__WEBPACK_IMPORTED_MODULE_0__["createServer"])(baseURL);
        var server = new ServiceMockerServer(mockServer, messageHandler);
        servers.push(server);
        return server;
    };
    return ServiceMockerServer;
}());

self.addEventListener('message', function (event) {
    for (var _i = 0, servers_1 = servers; _i < servers_1.length; _i++) {
        var server = servers_1[_i];
        server.onMessage(event);
    }
});


/***/ }),

/***/ "../../libs/service-mocker/src/lib/service-mocker.ts":
/*!********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/service-mocker/src/lib/service-mocker.ts ***!
  \********************************************************************************************************/
/*! exports provided: ServiceMockerServer, ServerBase, HttpError, Server, OnMessage, createRouteHandlerParamDecorator, ServiceMockController, Request, Response, Header, Param, Query, Body, ServiceMockMethod, ServiceMockGet, ServiceMockPost, ServiceMockPut, ServiceMockPatch, ServiceMockDelete, ServiceMockHead, FallbackRoute, HttpCode, Forward, Delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _service_mocker_server_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-mocker-server/index */ "../../libs/service-mocker/src/lib/service-mocker-server/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockerServer", function() { return _service_mocker_server_index__WEBPACK_IMPORTED_MODULE_1__["ServiceMockerServer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerBase", function() { return _service_mocker_server_index__WEBPACK_IMPORTED_MODULE_1__["ServerBase"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "../../libs/service-mocker/src/lib/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Server"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnMessage", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["OnMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRouteHandlerParamDecorator", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["createRouteHandlerParamDecorator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockController", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["ServiceMockController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Response"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Header"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Param"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Body"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockMethod", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["ServiceMockMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockGet", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["ServiceMockGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPost", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["ServiceMockPost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPut", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["ServiceMockPut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockPatch", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["ServiceMockPatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockDelete", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["ServiceMockDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMockHead", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["ServiceMockHead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FallbackRoute", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["FallbackRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCode", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["HttpCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Forward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delay", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Delay"]; });

/* harmony import */ var _http_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-error */ "../../libs/service-mocker/src/lib/http-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _http_error__WEBPACK_IMPORTED_MODULE_3__["HttpError"]; });

/* harmony import */ var _init_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init-metadata */ "../../libs/service-mocker/src/lib/init-metadata.ts");
/// <reference path="../../shared/src/lib/service-worker" />





Object(_init_metadata__WEBPACK_IMPORTED_MODULE_4__["initMetadata"])();


/***/ }),

/***/ "../../libs/tixin/src/index.ts":
/*!**********************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/tixin/src/index.ts ***!
  \**********************************************************************************/
/*! exports provided: TixinFree, Tixin, TixinExt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/tixin */ "../../libs/tixin/src/lib/tixin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TixinFree", function() { return _lib_tixin__WEBPACK_IMPORTED_MODULE_0__["TixinFree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tixin", function() { return _lib_tixin__WEBPACK_IMPORTED_MODULE_0__["Tixin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TixinExt", function() { return _lib_tixin__WEBPACK_IMPORTED_MODULE_0__["TixinExt"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/tixin/src/lib/tixin.ts":
/*!**************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/tixin/src/lib/tixin.ts ***!
  \**************************************************************************************/
/*! exports provided: TixinFree, Tixin, TixinExt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TixinFree", function() { return TixinFree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tixin", function() { return Tixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TixinExt", function() { return TixinExt; });
function mixObjects(base, mixins) {
    mixins.forEach(function (mixin) {
        Object.getOwnPropertyNames(mixin)
            .concat(Object.getOwnPropertySymbols(mixin))
            .forEach(function (name) {
            // mixin can't override base behaviour, only add
            if (!base.hasOwnProperty(name)) {
                // if its a property descriptor we need to rewire the context
                var propDesc = Object.getOwnPropertyDescriptor(mixin, name);
                if (propDesc) {
                    Object.defineProperty(base, name, propDesc);
                }
                else {
                    base[name] = mixin[name];
                }
            }
        });
    });
}
/**
 * Typeless mixin
 */
function TixinFree(base, mixin, extend) {
    if (extend === void 0) { extend = 'both'; }
    if (extend === 'proto' || extend === 'both') {
        mixObjects(base.prototype, [mixin.prototype]);
    }
    if (extend === 'class' || extend === 'both') {
        mixObjects(base, [mixin]);
    }
    return base;
}
/**
 * A type friendly, class based, mixin functions that mix in instance and static members.
 *
 * EXAMPLE:
 * ```ts
 * class User_ {
 *   id: number;
 *   firstName: string;
 *   lastName: string;
 * }
 *
 * class FullName {
 *   get fullName(): string {
 *     return `${this['firstName']} ${this['lastName']}`;
 *   }
 *
 *   static createId(): number {
 *     // a shady id generator.
 *     return Date.now();
 *   }
 * }
 *
 * export const User = Tixin(User_, FullName);
 * export type User = Tixin<User_, FullName>;
 *
 * // not using it:
 * const user = new User();
 * user.id = User.createId();
 * user.firstName = 'John';
 * user.lastName = 'Doe';
 * console.log(user.fullName); // John Doe
 * ```
 *
 * > To allow Generics in static members (e.g. static createUser(): T) see TixinExt
 *
 * ## Limitations:
 * From a type perspective this utility has limitations.
 *
 * #### You can't (currently) extend a mixed in type.
 *```ts
 *  export const User = Tixin(User_, FullName);
 *
 *  export class MyExtendedUser extends User { // <- Type Error
 *  }
 *```
 *
 * ```
 * Type 'Type<User_ & FullName> & typeof FullName & typeof User_' is not a constructor function type.
 * ```
 *
 * The error is misleading, this is a current known TS limitation (see [Github Issue](https://github.com/Microsoft/TypeScript/issues/4890))
 *
 * #### You can use generic inference once, from that point the generic param types for mixin have to be explicitly set:
 * ```ts
 *   export const User = Tixin(User_, FullName); // fine
 *
 *   export const UserNumber2 = Tixin(User, OtherMixin); // Error
 * ```
 *
 * ```
 * The type argument for type parameter 'TBASE' cannot be inferred from the usage.
 * Consider specifying the type arguments explicitly.
 * Type argument candidate 'FullName' is not a valid type argument because it is not a supertype of candidate 'User_'.
 * Property 'fullName' is missing in type 'User_'.
 * ```
 * This might be related to the previous limitation, or not...
 *
 *
 * There are 2 solution:
 *
 * 1) Using the built in interface that supports up to 6 mixins at once. (base + 6)
 * ```ts
 * export const User = Tixin(User_, FullName, OtherMixin); //  FullName, OtherMixin are 2, you can rest param your way for 5 more...
 * export type User = User_ & FullName & OtherMixin
 * ```
 * > This time we cant use `Tixin` to apply the User **type** so we just do it manually...
 *
 * 2) going the long way:
 * ```ts
 *   export const User = Tixin(User_, FullName); // fine
 *
 *   export const UserNumber2 = Tixin<User, typeof User, OtherMixin, typeof OtherMixin>(User, OtherMixin);
 * ```
 *
 *
 * @param base
 * @param mixin
 */
function Tixin(base) {
    var mixins = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        mixins[_i - 1] = arguments[_i];
    }
    mixObjects(base.prototype, mixins.map(function (m) { return m.prototype; }));
    mixObjects(base, mixins);
    return base;
}
/**
 * For full description see Tixin function.
 *
 * The TixinExt utility does the same as Tixin but also allows adding an extra static type to the intersection.
 *
 * Although static members are mixed in there is a situation that requires an additional static mixin.
 * In a TypeScript class we can not apply generics on static members in the class level, only in a member based level.
 * If we want to return our final mixin type from a static member (e.g: factory) we need a different type.
 *
 * Example:
 * ```ts
 * class User_ {
 *   id: number;
 *   firstName: string;
 *   lastName: string;
 * }
 *
 * class FullName {
 *   get fullName(): string {
 *     return `${this['firstName']} ${this['lastName']}`;
 *   }
 * }
 *
 * const createNew = {
 *   create(): any {
 *     return new User_(); // at this point User_ is fully mixed in.
 *   }
 * }
 *
 * interface CreateStatic<T> {
 *   create(): Tixin<T, FullName>;
 * }
 *
 * export const User = TixinExt(User_, createNew as CreateStatic<User_>, FullName );
 * export type User = Tixin<User_, FullName>;
 * ```
 *
 * > Same as Tixin, TixinExt supports up to 6 mixins but only 1 extra static member.
 * If you need more then 1 just intersect all of your extera static interfaces to 1.
 * @param base
 * @param extraStatic Optional object for extra static member, use for static functions that require generics with Generics.
 * @param mixins
 */
function TixinExt(base, extraStatic) {
    var mixins = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        mixins[_i - 2] = arguments[_i];
    }
    Tixin.apply(void 0, [base].concat(mixins));
    mixObjects(base, Array.of(extraStatic));
    return base;
}
/* tslint:disable:max-line-length */


/***/ }),

/***/ "../../node_modules/babel-runtime/regenerator/index.js":
/*!**********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/babel-runtime/regenerator/index.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../../node_modules/localforage/dist/localforage.js":
/*!*******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/localforage/dist/localforage.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!
    localForage -- Offline Storage, Improved
    Version 1.7.1
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support (#5572)
        // since Safari 10.1 shipped with fetch, we can use that to detect it
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback retuns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = req.onblocked = function (err) {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(err);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [name], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});


/***/ }),

/***/ "../../node_modules/mime-component/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/mime-component/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var types = __webpack_require__(/*! ./types */ "../../node_modules/mime-component/types.js");

/**
 * Expose the types.
 */

exports.types = types;

/**
 * Lookup with `ext`.
 *
 * @param {String} ext
 * @return {String}
 * @api public
 */

exports.lookup = function(ext){
  if ('.' == ext[0]) ext = ext.slice(1);
  return types[ext];
};

/***/ }),

/***/ "../../node_modules/mime-component/types.js":
/*!***********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/mime-component/types.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { '123': 'application/vnd.lotus-1-2-3',
  ez: 'application/andrew-inset',
  aw: 'application/applixware',
  atom: 'application/atom+xml',
  atomcat: 'application/atomcat+xml',
  atomsvc: 'application/atomsvc+xml',
  ccxml: 'application/ccxml+xml',
  cdmia: 'application/cdmi-capability',
  cdmic: 'application/cdmi-container',
  cdmid: 'application/cdmi-domain',
  cdmio: 'application/cdmi-object',
  cdmiq: 'application/cdmi-queue',
  cu: 'application/cu-seeme',
  davmount: 'application/davmount+xml',
  dbk: 'application/docbook+xml',
  dssc: 'application/dssc+der',
  xdssc: 'application/dssc+xml',
  ecma: 'application/ecmascript',
  emma: 'application/emma+xml',
  epub: 'application/epub+zip',
  exi: 'application/exi',
  pfr: 'application/font-tdpfr',
  gml: 'application/gml+xml',
  gpx: 'application/gpx+xml',
  gxf: 'application/gxf',
  stk: 'application/hyperstudio',
  ink: 'application/inkml+xml',
  inkml: 'application/inkml+xml',
  ipfix: 'application/ipfix',
  jar: 'application/java-archive',
  ser: 'application/java-serialized-object',
  class: 'application/java-vm',
  js: 'application/javascript',
  json: 'application/json',
  jsonml: 'application/jsonml+json',
  lostxml: 'application/lost+xml',
  hqx: 'application/mac-binhex40',
  cpt: 'application/mac-compactpro',
  mads: 'application/mads+xml',
  mrc: 'application/marc',
  mrcx: 'application/marcxml+xml',
  ma: 'application/mathematica',
  nb: 'application/mathematica',
  mb: 'application/mathematica',
  mathml: 'application/mathml+xml',
  mbox: 'application/mbox',
  mscml: 'application/mediaservercontrol+xml',
  metalink: 'application/metalink+xml',
  meta4: 'application/metalink4+xml',
  mets: 'application/mets+xml',
  mods: 'application/mods+xml',
  m21: 'application/mp21',
  mp21: 'application/mp21',
  mp4s: 'application/mp4',
  doc: 'application/msword',
  dot: 'application/msword',
  mxf: 'application/mxf',
  bin: 'application/octet-stream',
  dms: 'application/octet-stream',
  lrf: 'application/octet-stream',
  mar: 'application/octet-stream',
  so: 'application/octet-stream',
  dist: 'application/octet-stream',
  distz: 'application/octet-stream',
  pkg: 'application/octet-stream',
  bpk: 'application/octet-stream',
  dump: 'application/octet-stream',
  elc: 'application/octet-stream',
  deploy: 'application/octet-stream',
  oda: 'application/oda',
  opf: 'application/oebps-package+xml',
  ogx: 'application/ogg',
  omdoc: 'application/omdoc+xml',
  onetoc: 'application/onenote',
  onetoc2: 'application/onenote',
  onetmp: 'application/onenote',
  onepkg: 'application/onenote',
  oxps: 'application/oxps',
  xer: 'application/patch-ops-error+xml',
  pdf: 'application/pdf',
  pgp: 'application/pgp-encrypted',
  asc: 'application/pgp-signature',
  sig: 'application/pgp-signature',
  prf: 'application/pics-rules',
  p10: 'application/pkcs10',
  p7m: 'application/pkcs7-mime',
  p7c: 'application/pkcs7-mime',
  p7s: 'application/pkcs7-signature',
  p8: 'application/pkcs8',
  ac: 'application/pkix-attr-cert',
  cer: 'application/pkix-cert',
  crl: 'application/pkix-crl',
  pkipath: 'application/pkix-pkipath',
  pki: 'application/pkixcmp',
  pls: 'application/pls+xml',
  ai: 'application/postscript',
  eps: 'application/postscript',
  ps: 'application/postscript',
  cww: 'application/prs.cww',
  pskcxml: 'application/pskc+xml',
  rdf: 'application/rdf+xml',
  rif: 'application/reginfo+xml',
  rnc: 'application/relax-ng-compact-syntax',
  rl: 'application/resource-lists+xml',
  rld: 'application/resource-lists-diff+xml',
  rs: 'application/rls-services+xml',
  gbr: 'application/rpki-ghostbusters',
  mft: 'application/rpki-manifest',
  roa: 'application/rpki-roa',
  rsd: 'application/rsd+xml',
  rss: 'application/rss+xml',
  rtf: 'application/rtf',
  sbml: 'application/sbml+xml',
  scq: 'application/scvp-cv-request',
  scs: 'application/scvp-cv-response',
  spq: 'application/scvp-vp-request',
  spp: 'application/scvp-vp-response',
  sdp: 'application/sdp',
  setpay: 'application/set-payment-initiation',
  setreg: 'application/set-registration-initiation',
  shf: 'application/shf+xml',
  smi: 'application/smil+xml',
  smil: 'application/smil+xml',
  rq: 'application/sparql-query',
  srx: 'application/sparql-results+xml',
  gram: 'application/srgs',
  grxml: 'application/srgs+xml',
  sru: 'application/sru+xml',
  ssdl: 'application/ssdl+xml',
  ssml: 'application/ssml+xml',
  tei: 'application/tei+xml',
  teicorpus: 'application/tei+xml',
  tfi: 'application/thraud+xml',
  tsd: 'application/timestamped-data',
  plb: 'application/vnd.3gpp.pic-bw-large',
  psb: 'application/vnd.3gpp.pic-bw-small',
  pvb: 'application/vnd.3gpp.pic-bw-var',
  tcap: 'application/vnd.3gpp2.tcap',
  pwn: 'application/vnd.3m.post-it-notes',
  aso: 'application/vnd.accpac.simply.aso',
  imp: 'application/vnd.accpac.simply.imp',
  acu: 'application/vnd.acucobol',
  atc: 'application/vnd.acucorp',
  acutc: 'application/vnd.acucorp',
  air: 'application/vnd.adobe.air-application-installer-package+zip',
  fcdt: 'application/vnd.adobe.formscentral.fcdt',
  fxp: 'application/vnd.adobe.fxp',
  fxpl: 'application/vnd.adobe.fxp',
  xdp: 'application/vnd.adobe.xdp+xml',
  xfdf: 'application/vnd.adobe.xfdf',
  ahead: 'application/vnd.ahead.space',
  azf: 'application/vnd.airzip.filesecure.azf',
  azs: 'application/vnd.airzip.filesecure.azs',
  azw: 'application/vnd.amazon.ebook',
  acc: 'application/vnd.americandynamics.acc',
  ami: 'application/vnd.amiga.ami',
  apk: 'application/vnd.android.package-archive',
  cii: 'application/vnd.anser-web-certificate-issue-initiation',
  fti: 'application/vnd.anser-web-funds-transfer-initiation',
  atx: 'application/vnd.antix.game-component',
  mpkg: 'application/vnd.apple.installer+xml',
  m3u8: 'application/vnd.apple.mpegurl',
  swi: 'application/vnd.aristanetworks.swi',
  iota: 'application/vnd.astraea-software.iota',
  aep: 'application/vnd.audiograph',
  mpm: 'application/vnd.blueice.multipass',
  bmi: 'application/vnd.bmi',
  rep: 'application/vnd.businessobjects',
  cdxml: 'application/vnd.chemdraw+xml',
  mmd: 'application/vnd.chipnuts.karaoke-mmd',
  cdy: 'application/vnd.cinderella',
  cla: 'application/vnd.claymore',
  rp9: 'application/vnd.cloanto.rp9',
  c4g: 'application/vnd.clonk.c4group',
  c4d: 'application/vnd.clonk.c4group',
  c4f: 'application/vnd.clonk.c4group',
  c4p: 'application/vnd.clonk.c4group',
  c4u: 'application/vnd.clonk.c4group',
  c11amc: 'application/vnd.cluetrust.cartomobile-config',
  c11amz: 'application/vnd.cluetrust.cartomobile-config-pkg',
  csp: 'application/vnd.commonspace',
  cdbcmsg: 'application/vnd.contact.cmsg',
  cmc: 'application/vnd.cosmocaller',
  clkx: 'application/vnd.crick.clicker',
  clkk: 'application/vnd.crick.clicker.keyboard',
  clkp: 'application/vnd.crick.clicker.palette',
  clkt: 'application/vnd.crick.clicker.template',
  clkw: 'application/vnd.crick.clicker.wordbank',
  wbs: 'application/vnd.criticaltools.wbs+xml',
  pml: 'application/vnd.ctc-posml',
  ppd: 'application/vnd.cups-ppd',
  car: 'application/vnd.curl.car',
  pcurl: 'application/vnd.curl.pcurl',
  dart: 'application/vnd.dart',
  rdz: 'application/vnd.data-vision.rdz',
  uvf: 'application/vnd.dece.data',
  uvvf: 'application/vnd.dece.data',
  uvd: 'application/vnd.dece.data',
  uvvd: 'application/vnd.dece.data',
  uvt: 'application/vnd.dece.ttml+xml',
  uvvt: 'application/vnd.dece.ttml+xml',
  uvx: 'application/vnd.dece.unspecified',
  uvvx: 'application/vnd.dece.unspecified',
  uvz: 'application/vnd.dece.zip',
  uvvz: 'application/vnd.dece.zip',
  fe_launch: 'application/vnd.denovo.fcselayout-link',
  dna: 'application/vnd.dna',
  mlp: 'application/vnd.dolby.mlp',
  dpg: 'application/vnd.dpgraph',
  dfac: 'application/vnd.dreamfactory',
  kpxx: 'application/vnd.ds-keypoint',
  ait: 'application/vnd.dvb.ait',
  svc: 'application/vnd.dvb.service',
  geo: 'application/vnd.dynageo',
  mag: 'application/vnd.ecowin.chart',
  nml: 'application/vnd.enliven',
  esf: 'application/vnd.epson.esf',
  msf: 'application/vnd.epson.msf',
  qam: 'application/vnd.epson.quickanime',
  slt: 'application/vnd.epson.salt',
  ssf: 'application/vnd.epson.ssf',
  es3: 'application/vnd.eszigno3+xml',
  et3: 'application/vnd.eszigno3+xml',
  ez2: 'application/vnd.ezpix-album',
  ez3: 'application/vnd.ezpix-package',
  fdf: 'application/vnd.fdf',
  mseed: 'application/vnd.fdsn.mseed',
  seed: 'application/vnd.fdsn.seed',
  dataless: 'application/vnd.fdsn.seed',
  gph: 'application/vnd.flographit',
  ftc: 'application/vnd.fluxtime.clip',
  fm: 'application/vnd.framemaker',
  frame: 'application/vnd.framemaker',
  maker: 'application/vnd.framemaker',
  book: 'application/vnd.framemaker',
  fnc: 'application/vnd.frogans.fnc',
  ltf: 'application/vnd.frogans.ltf',
  fsc: 'application/vnd.fsc.weblaunch',
  oas: 'application/vnd.fujitsu.oasys',
  oa2: 'application/vnd.fujitsu.oasys2',
  oa3: 'application/vnd.fujitsu.oasys3',
  fg5: 'application/vnd.fujitsu.oasysgp',
  bh2: 'application/vnd.fujitsu.oasysprs',
  ddd: 'application/vnd.fujixerox.ddd',
  xdw: 'application/vnd.fujixerox.docuworks',
  xbd: 'application/vnd.fujixerox.docuworks.binder',
  fzs: 'application/vnd.fuzzysheet',
  txd: 'application/vnd.genomatix.tuxedo',
  ggb: 'application/vnd.geogebra.file',
  ggt: 'application/vnd.geogebra.tool',
  gex: 'application/vnd.geometry-explorer',
  gre: 'application/vnd.geometry-explorer',
  gxt: 'application/vnd.geonext',
  g2w: 'application/vnd.geoplan',
  g3w: 'application/vnd.geospace',
  gmx: 'application/vnd.gmx',
  kml: 'application/vnd.google-earth.kml+xml',
  kmz: 'application/vnd.google-earth.kmz',
  gqf: 'application/vnd.grafeq',
  gqs: 'application/vnd.grafeq',
  gac: 'application/vnd.groove-account',
  ghf: 'application/vnd.groove-help',
  gim: 'application/vnd.groove-identity-message',
  grv: 'application/vnd.groove-injector',
  gtm: 'application/vnd.groove-tool-message',
  tpl: 'application/vnd.groove-tool-template',
  vcg: 'application/vnd.groove-vcard',
  hal: 'application/vnd.hal+xml',
  zmm: 'application/vnd.handheld-entertainment+xml',
  hbci: 'application/vnd.hbci',
  les: 'application/vnd.hhe.lesson-player',
  hpgl: 'application/vnd.hp-hpgl',
  hpid: 'application/vnd.hp-hpid',
  hps: 'application/vnd.hp-hps',
  jlt: 'application/vnd.hp-jlyt',
  pcl: 'application/vnd.hp-pcl',
  pclxl: 'application/vnd.hp-pclxl',
  'sfd-hdstx': 'application/vnd.hydrostatix.sof-data',
  mpy: 'application/vnd.ibm.minipay',
  afp: 'application/vnd.ibm.modcap',
  listafp: 'application/vnd.ibm.modcap',
  list3820: 'application/vnd.ibm.modcap',
  irm: 'application/vnd.ibm.rights-management',
  sc: 'application/vnd.ibm.secure-container',
  icc: 'application/vnd.iccprofile',
  icm: 'application/vnd.iccprofile',
  igl: 'application/vnd.igloader',
  ivp: 'application/vnd.immervision-ivp',
  ivu: 'application/vnd.immervision-ivu',
  igm: 'application/vnd.insors.igm',
  xpw: 'application/vnd.intercon.formnet',
  xpx: 'application/vnd.intercon.formnet',
  i2g: 'application/vnd.intergeo',
  qbo: 'application/vnd.intu.qbo',
  qfx: 'application/vnd.intu.qfx',
  rcprofile: 'application/vnd.ipunplugged.rcprofile',
  irp: 'application/vnd.irepository.package+xml',
  xpr: 'application/vnd.is-xpr',
  fcs: 'application/vnd.isac.fcs',
  jam: 'application/vnd.jam',
  rms: 'application/vnd.jcp.javame.midlet-rms',
  jisp: 'application/vnd.jisp',
  joda: 'application/vnd.joost.joda-archive',
  ktz: 'application/vnd.kahootz',
  ktr: 'application/vnd.kahootz',
  karbon: 'application/vnd.kde.karbon',
  chrt: 'application/vnd.kde.kchart',
  kfo: 'application/vnd.kde.kformula',
  flw: 'application/vnd.kde.kivio',
  kon: 'application/vnd.kde.kontour',
  kpr: 'application/vnd.kde.kpresenter',
  kpt: 'application/vnd.kde.kpresenter',
  ksp: 'application/vnd.kde.kspread',
  kwd: 'application/vnd.kde.kword',
  kwt: 'application/vnd.kde.kword',
  htke: 'application/vnd.kenameaapp',
  kia: 'application/vnd.kidspiration',
  kne: 'application/vnd.kinar',
  knp: 'application/vnd.kinar',
  skp: 'application/vnd.koan',
  skd: 'application/vnd.koan',
  skt: 'application/vnd.koan',
  skm: 'application/vnd.koan',
  sse: 'application/vnd.kodak-descriptor',
  lasxml: 'application/vnd.las.las+xml',
  lbd: 'application/vnd.llamagraphics.life-balance.desktop',
  lbe: 'application/vnd.llamagraphics.life-balance.exchange+xml',
  apr: 'application/vnd.lotus-approach',
  pre: 'application/vnd.lotus-freelance',
  nsf: 'application/vnd.lotus-notes',
  org: 'application/vnd.lotus-organizer',
  scm: 'application/vnd.lotus-screencam',
  lwp: 'application/vnd.lotus-wordpro',
  portpkg: 'application/vnd.macports.portpkg',
  mcd: 'application/vnd.mcd',
  mc1: 'application/vnd.medcalcdata',
  cdkey: 'application/vnd.mediastation.cdkey',
  mwf: 'application/vnd.mfer',
  mfm: 'application/vnd.mfmp',
  flo: 'application/vnd.micrografx.flo',
  igx: 'application/vnd.micrografx.igx',
  mif: 'application/vnd.mif',
  daf: 'application/vnd.mobius.daf',
  dis: 'application/vnd.mobius.dis',
  mbk: 'application/vnd.mobius.mbk',
  mqy: 'application/vnd.mobius.mqy',
  msl: 'application/vnd.mobius.msl',
  plc: 'application/vnd.mobius.plc',
  txf: 'application/vnd.mobius.txf',
  mpn: 'application/vnd.mophun.application',
  mpc: 'application/vnd.mophun.certificate',
  xul: 'application/vnd.mozilla.xul+xml',
  cil: 'application/vnd.ms-artgalry',
  cab: 'application/vnd.ms-cab-compressed',
  xls: 'application/vnd.ms-excel',
  xlm: 'application/vnd.ms-excel',
  xla: 'application/vnd.ms-excel',
  xlc: 'application/vnd.ms-excel',
  xlt: 'application/vnd.ms-excel',
  xlw: 'application/vnd.ms-excel',
  xlam: 'application/vnd.ms-excel.addin.macroenabled.12',
  xlsb: 'application/vnd.ms-excel.sheet.binary.macroenabled.12',
  xlsm: 'application/vnd.ms-excel.sheet.macroenabled.12',
  xltm: 'application/vnd.ms-excel.template.macroenabled.12',
  eot: 'application/vnd.ms-fontobject',
  chm: 'application/vnd.ms-htmlhelp',
  ims: 'application/vnd.ms-ims',
  lrm: 'application/vnd.ms-lrm',
  thmx: 'application/vnd.ms-officetheme',
  cat: 'application/vnd.ms-pki.seccat',
  stl: 'application/vnd.ms-pki.stl',
  ppt: 'application/vnd.ms-powerpoint',
  pps: 'application/vnd.ms-powerpoint',
  pot: 'application/vnd.ms-powerpoint',
  ppam: 'application/vnd.ms-powerpoint.addin.macroenabled.12',
  pptm: 'application/vnd.ms-powerpoint.presentation.macroenabled.12',
  sldm: 'application/vnd.ms-powerpoint.slide.macroenabled.12',
  ppsm: 'application/vnd.ms-powerpoint.slideshow.macroenabled.12',
  potm: 'application/vnd.ms-powerpoint.template.macroenabled.12',
  mpp: 'application/vnd.ms-project',
  mpt: 'application/vnd.ms-project',
  docm: 'application/vnd.ms-word.document.macroenabled.12',
  dotm: 'application/vnd.ms-word.template.macroenabled.12',
  wps: 'application/vnd.ms-works',
  wks: 'application/vnd.ms-works',
  wcm: 'application/vnd.ms-works',
  wdb: 'application/vnd.ms-works',
  wpl: 'application/vnd.ms-wpl',
  xps: 'application/vnd.ms-xpsdocument',
  mseq: 'application/vnd.mseq',
  mus: 'application/vnd.musician',
  msty: 'application/vnd.muvee.style',
  taglet: 'application/vnd.mynfc',
  nlu: 'application/vnd.neurolanguage.nlu',
  ntf: 'application/vnd.nitf',
  nitf: 'application/vnd.nitf',
  nnd: 'application/vnd.noblenet-directory',
  nns: 'application/vnd.noblenet-sealer',
  nnw: 'application/vnd.noblenet-web',
  ngdat: 'application/vnd.nokia.n-gage.data',
  'n-gage': 'application/vnd.nokia.n-gage.symbian.install',
  rpst: 'application/vnd.nokia.radio-preset',
  rpss: 'application/vnd.nokia.radio-presets',
  edm: 'application/vnd.novadigm.edm',
  edx: 'application/vnd.novadigm.edx',
  ext: 'application/vnd.novadigm.ext',
  odc: 'application/vnd.oasis.opendocument.chart',
  otc: 'application/vnd.oasis.opendocument.chart-template',
  odb: 'application/vnd.oasis.opendocument.database',
  odf: 'application/vnd.oasis.opendocument.formula',
  odft: 'application/vnd.oasis.opendocument.formula-template',
  odg: 'application/vnd.oasis.opendocument.graphics',
  otg: 'application/vnd.oasis.opendocument.graphics-template',
  odi: 'application/vnd.oasis.opendocument.image',
  oti: 'application/vnd.oasis.opendocument.image-template',
  odp: 'application/vnd.oasis.opendocument.presentation',
  otp: 'application/vnd.oasis.opendocument.presentation-template',
  ods: 'application/vnd.oasis.opendocument.spreadsheet',
  ots: 'application/vnd.oasis.opendocument.spreadsheet-template',
  odt: 'application/vnd.oasis.opendocument.text',
  odm: 'application/vnd.oasis.opendocument.text-master',
  ott: 'application/vnd.oasis.opendocument.text-template',
  oth: 'application/vnd.oasis.opendocument.text-web',
  xo: 'application/vnd.olpc-sugar',
  dd2: 'application/vnd.oma.dd2+xml',
  oxt: 'application/vnd.openofficeorg.extension',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  sldx: 'application/vnd.openxmlformats-officedocument.presentationml.slide',
  ppsx: 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
  potx: 'application/vnd.openxmlformats-officedocument.presentationml.template',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  mgp: 'application/vnd.osgeo.mapguide.package',
  dp: 'application/vnd.osgi.dp',
  esa: 'application/vnd.osgi.subsystem',
  pdb: 'application/vnd.palm',
  pqa: 'application/vnd.palm',
  oprc: 'application/vnd.palm',
  paw: 'application/vnd.pawaafile',
  str: 'application/vnd.pg.format',
  ei6: 'application/vnd.pg.osasli',
  efif: 'application/vnd.picsel',
  wg: 'application/vnd.pmi.widget',
  plf: 'application/vnd.pocketlearn',
  pbd: 'application/vnd.powerbuilder6',
  box: 'application/vnd.previewsystems.box',
  mgz: 'application/vnd.proteus.magazine',
  qps: 'application/vnd.publishare-delta-tree',
  ptid: 'application/vnd.pvi.ptid1',
  qxd: 'application/vnd.quark.quarkxpress',
  qxt: 'application/vnd.quark.quarkxpress',
  qwd: 'application/vnd.quark.quarkxpress',
  qwt: 'application/vnd.quark.quarkxpress',
  qxl: 'application/vnd.quark.quarkxpress',
  qxb: 'application/vnd.quark.quarkxpress',
  bed: 'application/vnd.realvnc.bed',
  mxl: 'application/vnd.recordare.musicxml',
  musicxml: 'application/vnd.recordare.musicxml+xml',
  cryptonote: 'application/vnd.rig.cryptonote',
  cod: 'application/vnd.rim.cod',
  rm: 'application/vnd.rn-realmedia',
  rmvb: 'application/vnd.rn-realmedia-vbr',
  link66: 'application/vnd.route66.link66+xml',
  st: 'application/vnd.sailingtracker.track',
  see: 'application/vnd.seemail',
  sema: 'application/vnd.sema',
  semd: 'application/vnd.semd',
  semf: 'application/vnd.semf',
  ifm: 'application/vnd.shana.informed.formdata',
  itp: 'application/vnd.shana.informed.formtemplate',
  iif: 'application/vnd.shana.informed.interchange',
  ipk: 'application/vnd.shana.informed.package',
  twd: 'application/vnd.simtech-mindmapper',
  twds: 'application/vnd.simtech-mindmapper',
  mmf: 'application/vnd.smaf',
  teacher: 'application/vnd.smart.teacher',
  sdkm: 'application/vnd.solent.sdkm+xml',
  sdkd: 'application/vnd.solent.sdkm+xml',
  dxp: 'application/vnd.spotfire.dxp',
  sfs: 'application/vnd.spotfire.sfs',
  sdc: 'application/vnd.stardivision.calc',
  sda: 'application/vnd.stardivision.draw',
  sdd: 'application/vnd.stardivision.impress',
  smf: 'application/vnd.stardivision.math',
  sdw: 'application/vnd.stardivision.writer',
  vor: 'application/vnd.stardivision.writer',
  sgl: 'application/vnd.stardivision.writer-global',
  smzip: 'application/vnd.stepmania.package',
  sm: 'application/vnd.stepmania.stepchart',
  sxc: 'application/vnd.sun.xml.calc',
  stc: 'application/vnd.sun.xml.calc.template',
  sxd: 'application/vnd.sun.xml.draw',
  std: 'application/vnd.sun.xml.draw.template',
  sxi: 'application/vnd.sun.xml.impress',
  sti: 'application/vnd.sun.xml.impress.template',
  sxm: 'application/vnd.sun.xml.math',
  sxw: 'application/vnd.sun.xml.writer',
  sxg: 'application/vnd.sun.xml.writer.global',
  stw: 'application/vnd.sun.xml.writer.template',
  sus: 'application/vnd.sus-calendar',
  susp: 'application/vnd.sus-calendar',
  svd: 'application/vnd.svd',
  sis: 'application/vnd.symbian.install',
  sisx: 'application/vnd.symbian.install',
  xsm: 'application/vnd.syncml+xml',
  bdm: 'application/vnd.syncml.dm+wbxml',
  xdm: 'application/vnd.syncml.dm+xml',
  tao: 'application/vnd.tao.intent-module-archive',
  pcap: 'application/vnd.tcpdump.pcap',
  cap: 'application/vnd.tcpdump.pcap',
  dmp: 'application/vnd.tcpdump.pcap',
  tmo: 'application/vnd.tmobile-livetv',
  tpt: 'application/vnd.trid.tpt',
  mxs: 'application/vnd.triscape.mxs',
  tra: 'application/vnd.trueapp',
  ufd: 'application/vnd.ufdl',
  ufdl: 'application/vnd.ufdl',
  utz: 'application/vnd.uiq.theme',
  umj: 'application/vnd.umajin',
  unityweb: 'application/vnd.unity',
  uoml: 'application/vnd.uoml+xml',
  vcx: 'application/vnd.vcx',
  vsd: 'application/vnd.visio',
  vst: 'application/vnd.visio',
  vss: 'application/vnd.visio',
  vsw: 'application/vnd.visio',
  vis: 'application/vnd.visionary',
  vsf: 'application/vnd.vsf',
  wbxml: 'application/vnd.wap.wbxml',
  wmlc: 'application/vnd.wap.wmlc',
  wmlsc: 'application/vnd.wap.wmlscriptc',
  wtb: 'application/vnd.webturbo',
  nbp: 'application/vnd.wolfram.player',
  wpd: 'application/vnd.wordperfect',
  wqd: 'application/vnd.wqd',
  stf: 'application/vnd.wt.stf',
  xar: 'application/vnd.xara',
  xfdl: 'application/vnd.xfdl',
  hvd: 'application/vnd.yamaha.hv-dic',
  hvs: 'application/vnd.yamaha.hv-script',
  hvp: 'application/vnd.yamaha.hv-voice',
  osf: 'application/vnd.yamaha.openscoreformat',
  osfpvg: 'application/vnd.yamaha.openscoreformat.osfpvg+xml',
  saf: 'application/vnd.yamaha.smaf-audio',
  spf: 'application/vnd.yamaha.smaf-phrase',
  cmp: 'application/vnd.yellowriver-custom-menu',
  zir: 'application/vnd.zul',
  zirz: 'application/vnd.zul',
  zaz: 'application/vnd.zzazz.deck+xml',
  vxml: 'application/voicexml+xml',
  wgt: 'application/widget',
  hlp: 'application/winhlp',
  wsdl: 'application/wsdl+xml',
  wspolicy: 'application/wspolicy+xml',
  '7z': 'application/x-7z-compressed',
  abw: 'application/x-abiword',
  ace: 'application/x-ace-compressed',
  dmg: 'application/x-apple-diskimage',
  aab: 'application/x-authorware-bin',
  x32: 'application/x-authorware-bin',
  u32: 'application/x-authorware-bin',
  vox: 'application/x-authorware-bin',
  aam: 'application/x-authorware-map',
  aas: 'application/x-authorware-seg',
  bcpio: 'application/x-bcpio',
  torrent: 'application/x-bittorrent',
  blb: 'application/x-blorb',
  blorb: 'application/x-blorb',
  bz: 'application/x-bzip',
  bz2: 'application/x-bzip2',
  boz: 'application/x-bzip2',
  cbr: 'application/x-cbr',
  cba: 'application/x-cbr',
  cbt: 'application/x-cbr',
  cbz: 'application/x-cbr',
  cb7: 'application/x-cbr',
  vcd: 'application/x-cdlink',
  cfs: 'application/x-cfs-compressed',
  chat: 'application/x-chat',
  pgn: 'application/x-chess-pgn',
  nsc: 'application/x-conference',
  cpio: 'application/x-cpio',
  csh: 'application/x-csh',
  deb: 'application/x-debian-package',
  udeb: 'application/x-debian-package',
  dgc: 'application/x-dgc-compressed',
  dir: 'application/x-director',
  dcr: 'application/x-director',
  dxr: 'application/x-director',
  cst: 'application/x-director',
  cct: 'application/x-director',
  cxt: 'application/x-director',
  w3d: 'application/x-director',
  fgd: 'application/x-director',
  swa: 'application/x-director',
  wad: 'application/x-doom',
  ncx: 'application/x-dtbncx+xml',
  dtb: 'application/x-dtbook+xml',
  res: 'application/x-dtbresource+xml',
  dvi: 'application/x-dvi',
  evy: 'application/x-envoy',
  eva: 'application/x-eva',
  bdf: 'application/x-font-bdf',
  gsf: 'application/x-font-ghostscript',
  psf: 'application/x-font-linux-psf',
  otf: 'application/x-font-otf',
  pcf: 'application/x-font-pcf',
  snf: 'application/x-font-snf',
  ttf: 'application/x-font-ttf',
  ttc: 'application/x-font-ttf',
  pfa: 'application/x-font-type1',
  pfb: 'application/x-font-type1',
  pfm: 'application/x-font-type1',
  afm: 'application/x-font-type1',
  woff: 'application/x-font-woff',
  arc: 'application/x-freearc',
  spl: 'application/x-futuresplash',
  gca: 'application/x-gca-compressed',
  ulx: 'application/x-glulx',
  gnumeric: 'application/x-gnumeric',
  gramps: 'application/x-gramps-xml',
  gtar: 'application/x-gtar',
  hdf: 'application/x-hdf',
  install: 'application/x-install-instructions',
  iso: 'application/x-iso9660-image',
  jnlp: 'application/x-java-jnlp-file',
  latex: 'application/x-latex',
  lzh: 'application/x-lzh-compressed',
  lha: 'application/x-lzh-compressed',
  mie: 'application/x-mie',
  prc: 'application/x-mobipocket-ebook',
  mobi: 'application/x-mobipocket-ebook',
  application: 'application/x-ms-application',
  lnk: 'application/x-ms-shortcut',
  wmd: 'application/x-ms-wmd',
  wmz: 'application/x-msmetafile',
  xbap: 'application/x-ms-xbap',
  mdb: 'application/x-msaccess',
  obd: 'application/x-msbinder',
  crd: 'application/x-mscardfile',
  clp: 'application/x-msclip',
  exe: 'application/x-msdownload',
  dll: 'application/x-msdownload',
  com: 'application/x-msdownload',
  bat: 'application/x-msdownload',
  msi: 'application/x-msdownload',
  mvb: 'application/x-msmediaview',
  m13: 'application/x-msmediaview',
  m14: 'application/x-msmediaview',
  wmf: 'application/x-msmetafile',
  emf: 'application/x-msmetafile',
  emz: 'application/x-msmetafile',
  mny: 'application/x-msmoney',
  pub: 'application/x-mspublisher',
  scd: 'application/x-msschedule',
  trm: 'application/x-msterminal',
  wri: 'application/x-mswrite',
  nc: 'application/x-netcdf',
  cdf: 'application/x-netcdf',
  nzb: 'application/x-nzb',
  p12: 'application/x-pkcs12',
  pfx: 'application/x-pkcs12',
  p7b: 'application/x-pkcs7-certificates',
  spc: 'application/x-pkcs7-certificates',
  p7r: 'application/x-pkcs7-certreqresp',
  rar: 'application/x-rar-compressed',
  ris: 'application/x-research-info-systems',
  sh: 'application/x-sh',
  shar: 'application/x-shar',
  swf: 'application/x-shockwave-flash',
  xap: 'application/x-silverlight-app',
  sql: 'application/x-sql',
  sit: 'application/x-stuffit',
  sitx: 'application/x-stuffitx',
  srt: 'application/x-subrip',
  sv4cpio: 'application/x-sv4cpio',
  sv4crc: 'application/x-sv4crc',
  t3: 'application/x-t3vm-image',
  gam: 'application/x-tads',
  tar: 'application/x-tar',
  tcl: 'application/x-tcl',
  tex: 'application/x-tex',
  tfm: 'application/x-tex-tfm',
  texinfo: 'application/x-texinfo',
  texi: 'application/x-texinfo',
  obj: 'application/x-tgif',
  ustar: 'application/x-ustar',
  src: 'application/x-wais-source',
  der: 'application/x-x509-ca-cert',
  crt: 'application/x-x509-ca-cert',
  fig: 'application/x-xfig',
  xlf: 'application/x-xliff+xml',
  xpi: 'application/x-xpinstall',
  xz: 'application/x-xz',
  z1: 'application/x-zmachine',
  z2: 'application/x-zmachine',
  z3: 'application/x-zmachine',
  z4: 'application/x-zmachine',
  z5: 'application/x-zmachine',
  z6: 'application/x-zmachine',
  z7: 'application/x-zmachine',
  z8: 'application/x-zmachine',
  xaml: 'application/xaml+xml',
  xdf: 'application/xcap-diff+xml',
  xenc: 'application/xenc+xml',
  xhtml: 'application/xhtml+xml',
  xht: 'application/xhtml+xml',
  xml: 'application/xml',
  xsl: 'application/xml',
  dtd: 'application/xml-dtd',
  xop: 'application/xop+xml',
  xpl: 'application/xproc+xml',
  xslt: 'application/xslt+xml',
  xspf: 'application/xspf+xml',
  mxml: 'application/xv+xml',
  xhvml: 'application/xv+xml',
  xvml: 'application/xv+xml',
  xvm: 'application/xv+xml',
  yang: 'application/yang',
  yin: 'application/yin+xml',
  zip: 'application/zip',
  adp: 'audio/adpcm',
  au: 'audio/basic',
  snd: 'audio/basic',
  mid: 'audio/midi',
  midi: 'audio/midi',
  kar: 'audio/midi',
  rmi: 'audio/midi',
  mp4a: 'audio/mp4',
  mpga: 'audio/mpeg',
  mp2: 'audio/mpeg',
  mp2a: 'audio/mpeg',
  mp3: 'audio/mpeg',
  m2a: 'audio/mpeg',
  m3a: 'audio/mpeg',
  oga: 'audio/ogg',
  ogg: 'audio/ogg',
  spx: 'audio/ogg',
  s3m: 'audio/s3m',
  sil: 'audio/silk',
  uva: 'audio/vnd.dece.audio',
  uvva: 'audio/vnd.dece.audio',
  eol: 'audio/vnd.digital-winds',
  dra: 'audio/vnd.dra',
  dts: 'audio/vnd.dts',
  dtshd: 'audio/vnd.dts.hd',
  lvp: 'audio/vnd.lucent.voice',
  pya: 'audio/vnd.ms-playready.media.pya',
  ecelp4800: 'audio/vnd.nuera.ecelp4800',
  ecelp7470: 'audio/vnd.nuera.ecelp7470',
  ecelp9600: 'audio/vnd.nuera.ecelp9600',
  rip: 'audio/vnd.rip',
  weba: 'audio/webm',
  aac: 'audio/x-aac',
  aif: 'audio/x-aiff',
  aiff: 'audio/x-aiff',
  aifc: 'audio/x-aiff',
  caf: 'audio/x-caf',
  flac: 'audio/x-flac',
  mka: 'audio/x-matroska',
  m3u: 'audio/x-mpegurl',
  wax: 'audio/x-ms-wax',
  wma: 'audio/x-ms-wma',
  ram: 'audio/x-pn-realaudio',
  ra: 'audio/x-pn-realaudio',
  rmp: 'audio/x-pn-realaudio-plugin',
  wav: 'audio/x-wav',
  xm: 'audio/xm',
  cdx: 'chemical/x-cdx',
  cif: 'chemical/x-cif',
  cmdf: 'chemical/x-cmdf',
  cml: 'chemical/x-cml',
  csml: 'chemical/x-csml',
  xyz: 'chemical/x-xyz',
  bmp: 'image/bmp',
  cgm: 'image/cgm',
  g3: 'image/g3fax',
  gif: 'image/gif',
  ief: 'image/ief',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  jpe: 'image/jpeg',
  ktx: 'image/ktx',
  png: 'image/png',
  btif: 'image/prs.btif',
  sgi: 'image/sgi',
  svg: 'image/svg+xml',
  svgz: 'image/svg+xml',
  tiff: 'image/tiff',
  tif: 'image/tiff',
  psd: 'image/vnd.adobe.photoshop',
  uvi: 'image/vnd.dece.graphic',
  uvvi: 'image/vnd.dece.graphic',
  uvg: 'image/vnd.dece.graphic',
  uvvg: 'image/vnd.dece.graphic',
  sub: 'text/vnd.dvb.subtitle',
  djvu: 'image/vnd.djvu',
  djv: 'image/vnd.djvu',
  dwg: 'image/vnd.dwg',
  dxf: 'image/vnd.dxf',
  fbs: 'image/vnd.fastbidsheet',
  fpx: 'image/vnd.fpx',
  fst: 'image/vnd.fst',
  mmr: 'image/vnd.fujixerox.edmics-mmr',
  rlc: 'image/vnd.fujixerox.edmics-rlc',
  mdi: 'image/vnd.ms-modi',
  wdp: 'image/vnd.ms-photo',
  npx: 'image/vnd.net-fpx',
  wbmp: 'image/vnd.wap.wbmp',
  xif: 'image/vnd.xiff',
  webp: 'image/webp',
  '3ds': 'image/x-3ds',
  ras: 'image/x-cmu-raster',
  cmx: 'image/x-cmx',
  fh: 'image/x-freehand',
  fhc: 'image/x-freehand',
  fh4: 'image/x-freehand',
  fh5: 'image/x-freehand',
  fh7: 'image/x-freehand',
  ico: 'image/x-icon',
  sid: 'image/x-mrsid-image',
  pcx: 'image/x-pcx',
  pic: 'image/x-pict',
  pct: 'image/x-pict',
  pnm: 'image/x-portable-anymap',
  pbm: 'image/x-portable-bitmap',
  pgm: 'image/x-portable-graymap',
  ppm: 'image/x-portable-pixmap',
  rgb: 'image/x-rgb',
  tga: 'image/x-tga',
  xbm: 'image/x-xbitmap',
  xpm: 'image/x-xpixmap',
  xwd: 'image/x-xwindowdump',
  eml: 'message/rfc822',
  mime: 'message/rfc822',
  igs: 'model/iges',
  iges: 'model/iges',
  msh: 'model/mesh',
  mesh: 'model/mesh',
  silo: 'model/mesh',
  dae: 'model/vnd.collada+xml',
  dwf: 'model/vnd.dwf',
  gdl: 'model/vnd.gdl',
  gtw: 'model/vnd.gtw',
  mts: 'model/vnd.mts',
  vtu: 'model/vnd.vtu',
  wrl: 'model/vrml',
  vrml: 'model/vrml',
  x3db: 'model/x3d+binary',
  x3dbz: 'model/x3d+binary',
  x3dv: 'model/x3d+vrml',
  x3dvz: 'model/x3d+vrml',
  x3d: 'model/x3d+xml',
  x3dz: 'model/x3d+xml',
  appcache: 'text/cache-manifest',
  ics: 'text/calendar',
  ifb: 'text/calendar',
  css: 'text/css',
  csv: 'text/csv',
  html: 'text/html',
  htm: 'text/html',
  n3: 'text/n3',
  txt: 'text/plain',
  text: 'text/plain',
  conf: 'text/plain',
  def: 'text/plain',
  list: 'text/plain',
  log: 'text/plain',
  in: 'text/plain',
  dsc: 'text/prs.lines.tag',
  rtx: 'text/richtext',
  sgml: 'text/sgml',
  sgm: 'text/sgml',
  tsv: 'text/tab-separated-values',
  t: 'text/troff',
  tr: 'text/troff',
  roff: 'text/troff',
  man: 'text/troff',
  me: 'text/troff',
  ms: 'text/troff',
  ttl: 'text/turtle',
  uri: 'text/uri-list',
  uris: 'text/uri-list',
  urls: 'text/uri-list',
  vcard: 'text/vcard',
  curl: 'text/vnd.curl',
  dcurl: 'text/vnd.curl.dcurl',
  scurl: 'text/vnd.curl.scurl',
  mcurl: 'text/vnd.curl.mcurl',
  fly: 'text/vnd.fly',
  flx: 'text/vnd.fmi.flexstor',
  gv: 'text/vnd.graphviz',
  '3dml': 'text/vnd.in3d.3dml',
  spot: 'text/vnd.in3d.spot',
  jad: 'text/vnd.sun.j2me.app-descriptor',
  wml: 'text/vnd.wap.wml',
  wmls: 'text/vnd.wap.wmlscript',
  s: 'text/x-asm',
  asm: 'text/x-asm',
  c: 'text/x-c',
  cc: 'text/x-c',
  cxx: 'text/x-c',
  cpp: 'text/x-c',
  h: 'text/x-c',
  hh: 'text/x-c',
  dic: 'text/x-c',
  f: 'text/x-fortran',
  for: 'text/x-fortran',
  f77: 'text/x-fortran',
  f90: 'text/x-fortran',
  java: 'text/x-java-source',
  opml: 'text/x-opml',
  p: 'text/x-pascal',
  pas: 'text/x-pascal',
  nfo: 'text/x-nfo',
  etx: 'text/x-setext',
  sfv: 'text/x-sfv',
  uu: 'text/x-uuencode',
  vcs: 'text/x-vcalendar',
  vcf: 'text/x-vcard',
  '3gp': 'video/3gpp',
  '3g2': 'video/3gpp2',
  h261: 'video/h261',
  h263: 'video/h263',
  h264: 'video/h264',
  jpgv: 'video/jpeg',
  jpm: 'video/jpm',
  jpgm: 'video/jpm',
  mj2: 'video/mj2',
  mjp2: 'video/mj2',
  mp4: 'video/mp4',
  mp4v: 'video/mp4',
  mpg4: 'video/mp4',
  mpeg: 'video/mpeg',
  mpg: 'video/mpeg',
  mpe: 'video/mpeg',
  m1v: 'video/mpeg',
  m2v: 'video/mpeg',
  ogv: 'video/ogg',
  qt: 'video/quicktime',
  mov: 'video/quicktime',
  uvh: 'video/vnd.dece.hd',
  uvvh: 'video/vnd.dece.hd',
  uvm: 'video/vnd.dece.mobile',
  uvvm: 'video/vnd.dece.mobile',
  uvp: 'video/vnd.dece.pd',
  uvvp: 'video/vnd.dece.pd',
  uvs: 'video/vnd.dece.sd',
  uvvs: 'video/vnd.dece.sd',
  uvv: 'video/vnd.dece.video',
  uvvv: 'video/vnd.dece.video',
  dvb: 'video/vnd.dvb.file',
  fvt: 'video/vnd.fvt',
  mxu: 'video/vnd.mpegurl',
  m4u: 'video/vnd.mpegurl',
  pyv: 'video/vnd.ms-playready.media.pyv',
  uvu: 'video/vnd.uvvu.mp4',
  uvvu: 'video/vnd.uvvu.mp4',
  viv: 'video/vnd.vivo',
  webm: 'video/webm',
  f4v: 'video/x-f4v',
  fli: 'video/x-fli',
  flv: 'video/x-flv',
  m4v: 'video/x-m4v',
  mkv: 'video/x-matroska',
  mk3d: 'video/x-matroska',
  mks: 'video/x-matroska',
  mng: 'video/x-mng',
  asf: 'video/x-ms-asf',
  asx: 'video/x-ms-asf',
  vob: 'video/x-ms-vob',
  wm: 'video/x-ms-wm',
  wmv: 'video/x-ms-wmv',
  wmx: 'video/x-ms-wmx',
  wvx: 'video/x-ms-wvx',
  avi: 'video/x-msvideo',
  movie: 'video/x-sgi-movie',
  smv: 'video/x-smv',
  ice: 'x-conference/x-cooltalk' }


/***/ }),

/***/ "../../node_modules/reflect-metadata/Reflect.js":
/*!***************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/reflect-metadata/Reflect.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map

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

/***/ "../../node_modules/service-mocker/node_modules/isarray/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/node_modules/isarray/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../node_modules/service-mocker/node_modules/path-to-regexp/index.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/node_modules/path-to-regexp/index.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "../../node_modules/service-mocker/node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "../../node_modules/service-mocker/node_modules/qs/lib/formats.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/node_modules/qs/lib/formats.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "../../node_modules/service-mocker/node_modules/qs/lib/index.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/node_modules/qs/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "../../node_modules/service-mocker/node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "../../node_modules/service-mocker/node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "../../node_modules/service-mocker/node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "../../node_modules/service-mocker/node_modules/qs/lib/parse.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/node_modules/qs/lib/parse.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../../node_modules/service-mocker/node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "../../node_modules/service-mocker/node_modules/qs/lib/stringify.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/node_modules/qs/lib/stringify.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../../node_modules/service-mocker/node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "../../node_modules/service-mocker/node_modules/qs/lib/formats.js");

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "../../node_modules/service-mocker/node_modules/qs/lib/utils.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/node_modules/qs/lib/utils.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "../../node_modules/service-mocker/node_modules/statuses/codes.json":
/*!***********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/node_modules/statuses/codes.json ***!
  \***********************************************************************************************************************/
/*! exports provided: 100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, default */
/***/ (function(module) {

module.exports = {"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","306":"(Unused)","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I'm a teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Unordered Collection","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"};

/***/ }),

/***/ "../../node_modules/service-mocker/node_modules/statuses/index.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/node_modules/statuses/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var codes = __webpack_require__(/*! ./codes.json */ "../../node_modules/service-mocker/node_modules/statuses/codes.json")

/**
 * Module exports.
 * @public
 */

module.exports = status

// status code to message map
status.STATUS_CODES = codes

// array of status codes
status.codes = populateStatusesMap(status, codes)

// status codes for redirects
status.redirect = {
  300: true,
  301: true,
  302: true,
  303: true,
  305: true,
  307: true,
  308: true
}

// status codes for empty bodies
status.empty = {
  204: true,
  205: true,
  304: true
}

// status codes for when you should retry the request
status.retry = {
  502: true,
  503: true,
  504: true
}

/**
 * Populate the statuses map for given codes.
 * @private
 */

function populateStatusesMap (statuses, codes) {
  var arr = []

  Object.keys(codes).forEach(function forEachCode (code) {
    var message = codes[code]
    var status = Number(code)

    // Populate properties
    statuses[status] = message
    statuses[message] = status
    statuses[message.toLowerCase()] = status

    // Add to array
    arr.push(status)
  })

  return arr
}

/**
 * Get the status code.
 *
 * Given a number, this will throw if it is not a known status
 * code, otherwise the code will be returned. Given a string,
 * the string will be parsed for a number and return the code
 * if valid, otherwise will lookup the code assuming this is
 * the status message.
 *
 * @param {string|number} code
 * @returns {number}
 * @public
 */

function status (code) {
  if (typeof code === 'number') {
    if (!status[code]) throw new Error('invalid status code: ' + code)
    return code
  }

  if (typeof code !== 'string') {
    throw new TypeError('code must be a number or string')
  }

  // '403'
  var n = parseInt(code, 10)
  if (!isNaN(n)) {
    if (!status[n]) throw new Error('invalid status code: ' + n)
    return n
  }

  n = status[code.toLowerCase()]
  if (!n) throw new Error('invalid status message: "' + code + '"')
  return n
}


/***/ }),

/***/ "../../node_modules/service-mocker/server/index.js":
/*!******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/server/index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.createServer = createServer;
var _server = __webpack_require__(/*! ./server */ "../../node_modules/service-mocker/server/server.js");
/**
 * Constructs a new Server instance
 *
 * @param  {string} baseURL The base URL of all routes, default is '/'
 * @return {MockerServer}
 */
function createServer() {
    var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    return new _server.MockerServer(baseURL);
}


/***/ }),

/***/ "../../node_modules/service-mocker/server/request.js":
/*!********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/server/request.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.MockerRequest = exports.ExtandableRequest = undefined;
var _qs = __webpack_require__(/*! qs */ "../../node_modules/service-mocker/node_modules/qs/lib/index.js");
var _qs2 = _interopRequireDefault(_qs);
var _utils = __webpack_require__(/*! ../utils/ */ "../../node_modules/service-mocker/utils/index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
function _possibleConstructorReturn(self, call) { if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
} return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
} subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var requestLog = _utils.debug.scope('request');
// convert native `Request` to extendable
// export or you'll get an error of 'using private'
/* istanbul ignore next: polyfill is legacy browsers only */
var ExtandableRequest = exports.ExtandableRequest = fetch.polyfill ? Request : (0, _utils.extensify)(Request);
var MockerRequest = exports.MockerRequest = function (_ExtandableRequest) {
    _inherits(MockerRequest, _ExtandableRequest);
    /**
     * Constructs a mocker request object
     *
     * @param {FetchEvent} event Fetch event
     * @param {RouteRule}  route Router rule object
     */
    /**
     * Fetch event
     *
     * @private
     * @readonly
     * @type {FetchEvent}
     */
    /**
     * Contains properties mapped the route parameters.
     *
     * @readonly
     * @type {object}
     */
    /**
     * Literally equivalent to `router.baseURL` property of current router.
     *
     * @readonly
     * @type {string}
     */
    function MockerRequest(event, route) {
        _classCallCheck(this, MockerRequest);
        var request = event.request;
        var regex = route.regex, keys = route.keys, baseURL = route.baseURL;
        // avoid polluting original request
        var _this = _possibleConstructorReturn(this, _ExtandableRequest.call(this, request.clone()));
        _this.baseURL = undefined;
        _this.path = undefined;
        _this.params = null;
        _this.query = null;
        _this._event = null;
        _this._route = null;
        var base = new URL(baseURL);
        var requestURL = new URL(request.url, location.href);
        var path = base.pathname === '/' ? requestURL.pathname : requestURL.pathname.replace(base.pathname, '');
        var matches = regex.exec(path);
        var params = {};
        // skip full matched string at [0]
        var max = matches.length;
        for (var i = 1; i < max; i++) {
            var name = keys[i - 1].name;
            params[name] = decodeParam(matches[i]);
        }
        _this._event = event;
        _this._route = route;
        _this.path = path;
        _this.params = params;
        _this.baseURL = baseURL;
        _this.query = _qs2.default.parse(requestURL.search.slice(1)); // remove leading '?'
        // overwrite relative URL from fetch polyfill
        /* istanbul ignore if: legacy browsers only */
        if (_this.url !== requestURL.href) {
            Object.defineProperty(_this, 'url', {
                value: requestURL.href,
                writable: false,
                enumerable: true,
                configurable: true
            });
        }
        return _this;
    }
    /**
     * Route rule object
     *
     * @private
     * @readonly
     * @type {RouteRule}
     */
    /**
     * Contains a property for each query string parameter from the request.
     *
     * @readonly
     * @type {object}
     */
    /**
     * Contains the path part of the current request.
     *
     * @readonly
     * @type {string}
     */
    MockerRequest.prototype.clone = function clone() {
        return new MockerRequest(this._event, this._route);
    };
    return MockerRequest;
}(ExtandableRequest);
/**
 * Decode request parameter
 *
 * @param  {string} value Parameter value
 * @return {string}
 */
function decodeParam(value) {
    if (typeof value !== 'string' || value.length === 0) {
        return value;
    }
    try {
        return decodeURIComponent(value);
    }
    catch (err) {
        requestLog.error('decode param: ' + value + ' failed', err);
        return null;
    }
}


/***/ }),

/***/ "../../node_modules/service-mocker/server/response.js":
/*!*********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/server/response.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.MockerResponse = undefined;
var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");
var _regenerator2 = _interopRequireDefault(_regenerator);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
/**
 * Concat new request info with given old request
 */
/**
 * Concat new request info with given old request
 *
 * @param  {Request}          oldRequest Old Request object
 * @param  {RequestInfo}      input      New Request input
 * @param  {RequestInit}      [init={}]  New Request init
 * @return {Promise<Request>}
 */
var concatRequest = function () {
    var _ref2 = _asyncToGenerator(_regenerator2.default.mark(function _callee2(oldRequest, input) {
        var init = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var tempRequest;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        tempRequest = new Request(input, oldRequest);
                        if (!(!init.body && oldRequest.method !== 'GET' && oldRequest.method !== 'HEAD')) {
                            _context2.next = 5;
                            break;
                        }
                        _context2.next = 4;
                        return bodyParser(oldRequest);
                    case 4:
                        init.body = _context2.sent;
                    case 5:
                        return _context2.abrupt('return', new Request(tempRequest, init));
                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
    return function concatRequest(_x4, _x5) {
        return _ref2.apply(this, arguments);
    };
}();
/**
 * Parse request body
 * 1. If you're using github fetch polyfill, return the private member `_bodyInit`,
 * 2. Else parsing request body as blob.
 *
 * @param  {Request} request Request object to be parsed
 * @return {any}
 */
var _mimeComponent = __webpack_require__(/*! mime-component */ "../../node_modules/mime-component/index.js");
var _mimeComponent2 = _interopRequireDefault(_mimeComponent);
var _statuses = __webpack_require__(/*! statuses */ "../../node_modules/service-mocker/node_modules/statuses/index.js");
var _statuses2 = _interopRequireDefault(_statuses);
var _utils = __webpack_require__(/*! ../utils/ */ "../../node_modules/service-mocker/utils/index.js");
var _request = __webpack_require__(/*! ./request */ "../../node_modules/service-mocker/server/request.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try {
    var info = gen[key](arg);
    var value = info.value;
}
catch (error) {
    reject(error);
    return;
} if (info.done) {
    resolve(value);
}
else {
    return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); });
} } return step("next"); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
var responseLog = _utils.debug.scope('response');
var IS_IE_EDGE = /Edge/.test(navigator.userAgent);
var MockerResponse = function () {
    /**
     * Constructs a mocker response object
     *
     * @param {FetchEvent} event Fetch event
     */
    /**
     * Response status code
     *
     * @private
     * @type {number}
     */
    /**
     * Fetch event
     *
     * @private
     * @readonly
     * @type {FetchEvent}
     */
    function MockerResponse(event) {
        _classCallCheck(this, MockerResponse);
        this.headers = new Headers({
            'X-Powered-By': 'ServiceMocker'
        });
        this._event = null;
        this._body = undefined;
        this._statusCode = 200;
        this._deferred = new _utils.Defer();
        var _deferred = this._deferred;
        this._event = event;
        // everything within service worker should be asynchronous
        event.respondWith(_deferred.promise);
    }
    /**
     * Sets the HTTP status for the response.
     *
     * @chainable
     * @param  {number} code Status code
     * @return {this}
     */
    /**
     * Internal defer object to resolve response
     *
     * @private
     * @readonly
     * @type {Defer}
     */
    /**
     * Response body to be sent
     *
     * @private
     * @type {any}
     */
    /**
     * Response headers
     *
     * @readonly
     * @type {Headers}
     */
    MockerResponse.prototype.status = function status(code) {
        this._statusCode = code;
        return this;
    };
    /**
     * Sets the Content-Type HTTP header to the MIME type.
     * If the given MIME doesn't contain '/' character,
     * use `mime.lookup(type)` to obtain MIME type.
     *
     * @chainable
     * @param  {string} type MIME type
     * @return {this}
     */
    MockerResponse.prototype.type = function type(_type) {
        var contentType = _type.indexOf('/') === -1 ? _mimeComponent2.default.lookup(_type) : _type;
        this.headers.set('content-type', contentType);
        return this;
    };
    /**
     * Send a JSON response.
     *
     * @param {any} [body] Any JSON compatible type, including object, array, string, Boolean, or number.
     */
    MockerResponse.prototype.json = function json(body) {
        this._body = JSON.stringify(body);
        if (!this.headers.has('content-type')) {
            this.type('json');
        }
        this.end();
    };
    /**
     * Sends the HTTP response.
     *
     * @param {any} [body] Response body, one of Blob, ArrayBuffer, Object, or any primitive types
     */
    MockerResponse.prototype.send = function send(body) {
        // don't parse native Response objects
        if (body instanceof Response) {
            this._body = body;
            this.end();
            return;
        }
        var contentType = 'text';
        switch (typeof body === 'undefined' ? 'undefined' : _typeof(body)) {
            case 'string':
                // follow the express style
                this._body = body;
                contentType = 'html';
                break;
            case 'boolean':
            case 'number':
            case 'object':
                if (body instanceof Blob) {
                    this._body = body;
                    contentType = body.type || 'bin';
                }
                else if (body instanceof ArrayBuffer) {
                    this._body = body;
                    contentType = 'bin';
                }
                else {
                    this.json(body);
                    return;
                }
                break;
        }
        if (!this.headers.has('content-type')) {
            this.type(contentType);
        }
        this.end();
    };
    /**
     * Set the response HTTP status code to statusCode and
     * send its status text representation as the response body.
     *
     * Equivalent to `res.status(code).send(statusText)`
     *
     * @param {number} code Status code
     */
    MockerResponse.prototype.sendStatus = function sendStatus(code) {
        var body = _statuses2.default[code] || JSON.stringify(code);
        this.type('text').status(code).send(body);
    };
    /**
     * End the response processing and pass the response to `fetchEvent.respondWith()`.
     * Simply call this method will end the response WITHOUT any data,
     * if you want to respond with data, use `res.send()` and `res.json()`.
     */
    MockerResponse.prototype.end = function end() {
        // respond with body if it's a native Response object
        if (this._body instanceof Response) {
            this._deferred.resolve(this._body);
            return;
        }
        var request = this._event.request;
        var responseBody = this._body;
        // leave body empty for null body status
        if (_statuses2.default.empty[this._statusCode]) {
            /* istanbul ignore if */
            if (IS_IE_EDGE) {
                responseLog.warn('using null body status in IE Edge may raise a `TypeMismatchError` Error');
            }
            responseBody = undefined;
        }
        // skip body for HEAD requests
        if (request.method === 'HEAD') {
            responseBody = undefined;
        }
        // set default contentType to 'text/plain', see
        // https://tools.ietf.org/html/rfc2045#section-5.2
        if (!this.headers.has('content-type')) {
            this.type('text');
        }
        var responseInit = {
            headers: this.headers,
            status: this._statusCode,
            statusText: _statuses2.default[this._statusCode] || JSON.stringify(this._statusCode)
        };
        var response = new Response(responseBody, responseInit);
        this._deferred.resolve(response);
    };
    /**
     * Forward the request to another destination.
     * The forwarded request will NOT be captured by service worker.
     *
     * @param {RequestInfo|MockerRequest} input Destination URL or a Request object or MockerRequest
     * @param {RequestInit=}              init  Fetch request init
     */
    MockerResponse.prototype.forward = function () {
        var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(input, init) {
            var request;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            request = void 0;
                            if (!(input instanceof Request)) {
                                _context.next = 5;
                                break;
                            }
                            // forward native Request
                            request = new Request(input, init);
                            _context.next = 12;
                            break;
                        case 5:
                            if (!(input instanceof _request.MockerRequest)) {
                                _context.next = 9;
                                break;
                            }
                            // forward MockerRequest
                            request = new Request(input._native, init);
                            _context.next = 12;
                            break;
                        case 9:
                            _context.next = 11;
                            return concatRequest(this._event.request, input, init);
                        case 11:
                            request = _context.sent;
                        case 12:
                            // fetch will somehow consume the body
                            this._deferred.resolve(nativeFetch(request));
                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        function forward(_x, _x2) {
            return _ref.apply(this, arguments);
        }
        return forward;
    }();
    return MockerResponse;
}();
exports.MockerResponse = MockerResponse;
function bodyParser(request) {
    // handle github fetch polyfill
    /* istanbul ignore if */
    if (fetch.polyfill) {
        return request._bodyInit;
    }
    try {
        // always parse as blob
        return request.clone().blob();
    }
    catch (e) {
        /* istanbul ignore next */
        responseLog.warn('parsing request body failed, you may need to parse it manually', e);
    }
}
/* istanbul ignore next */
/**
 * Fetch with native `fetch`
 * 1. If `fetch.mockerPatched` is found, it means you're running on
 *    legacy mode with fetch support, return with `fetch.native`.
 *
 * 2. Else if `XMLHttpRequest.mockerPatched` is found, you're possibly
 *    using a fetch polyfill, processing as the following:
 *    2.1. Reset `XMLHttpRequest` to native one `(patched)XMLHttpRequest.native`,
 *    2.2. Run fetch polyfill (with native XHR),
 *    2.3. Restore `XMLHttpRequest` to patched one,
 *    2.4. Return the fetch promise.
 *
 * 3. Or, you may be running in service worker context, return `fetch`.
 *
 * @param  {RequestInfo}       input
 * @param  {RequestInit}       [init]
 * @return {Promise<Response>}
 */
function nativeFetch(input, init) {
    var _self = self, fetch = _self.fetch, XHR = _self.XMLHttpRequest;
    // native fetch
    if (fetch.mockerPatched) {
        return fetch.native(input, init);
    }
    // fetch polyfills
    if (XHR && XHR.mockerPatched) {
        // restore native...
        self.XMLHttpRequest = XHR.native;
        // do a native fetch
        var promise = fetch(input, init);
        // replace with our fetch
        self.XMLHttpRequest = XHR;
        return promise;
    }
    return fetch(input, init);
}


/***/ }),

/***/ "../../node_modules/service-mocker/server/router.js":
/*!*******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/server/router.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.SubRouter = exports.MockerRouter = undefined;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
var _pathToRegexp = __webpack_require__(/*! path-to-regexp */ "../../node_modules/service-mocker/node_modules/path-to-regexp/index.js");
var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);
var _utils = __webpack_require__(/*! ../utils/ */ "../../node_modules/service-mocker/utils/index.js");
var _request3 = __webpack_require__(/*! ./request */ "../../node_modules/service-mocker/server/request.js");
var _response = __webpack_require__(/*! ./response */ "../../node_modules/service-mocker/server/response.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
var routerLog = _utils.debug.scope('router');
// bacic HTTP request methods in fetch standard, see
// https://fetch.spec.whatwg.org/#concept-method
var methods = ['get', 'post', 'put', 'head', 'delete', 'options', 'patch'];
var MockerRouter = exports.MockerRouter = function () {
    /**
     * Constructs a new router object
     *
     * @param {string} [baseURL='/'] The base url of this router
     * @param {Array<MiddlewareFn>} [middleware=[]] Middleware that are attached to this router
     */
    /**
     * A collection of all routings
     *
     * @private
     * @type {Array<RouteRule>}
     */
    /**
     * The origin which this router belongs to
     *
     * @private
     * @type {string}
     */
    /**
     * save all routers for lazy evaluations
     *
     * @static
     * @type {Array<MockerRouter>}
     */
    function MockerRouter() {
        var _middleware;
        var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
        var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        _classCallCheck(this, MockerRouter);
        this.baseURL = undefined;
        this._origin = undefined;
        this._basePath = undefined;
        this._rules = [];
        this._middleware = [];
        MockerRouter.routers.push(this);
        (_middleware = this._middleware).push.apply(_middleware, middleware);
        // resolve url based on current origin for relative path
        // `location.origin` is not supported in IE
        var url = new URL(baseURL, location.href);
        this._origin = url.origin;
        this._basePath = url.pathname.replace(/\/$/, ''); // remove trailing slash
        this.baseURL = this._origin + this._basePath;
    }
    /**
     * Create a new router with the given path as scope
     *
     * @param {string}        [path]
     * @return {MockerRouter}
     */
    /**
     * A collection of all middleware
     *
     * @private
     * @type {Array<MiddlewareFn>}
     */
    /**
     * The base path of this router
     *
     * @private
     * @type {string}
     */
    /**
     * A parsed base URL
     *
     * @readonly
     * @type {string}
     */
    MockerRouter.prototype.scope = function scope(path) {
        // in case of falsy values
        if (!path) {
            path = '/';
        }
        if (path[0] !== '/') {
            throw new TypeError('the scope of router should start with "/", got ' + path);
        }
        return new MockerRouter(this.baseURL + path, this._middleware);
    };
    /* istanbul ignore next */
    MockerRouter.prototype.base = function base(path) {
        routerLog.warn('`router.base()` is deprecated, use `router.scope()` instead.');
        return this.scope(path);
    };
    /**
     * Create a scoped router with the given path as
     * route path for every routing method.
     *
     * @param  {string|RegExp} path Routing's path
     * @return {SubRouter}
     */
    MockerRouter.prototype.route = function route(path) {
        return new SubRouter(this, path);
    };
    /**
     * Attach middleware to current router
     *
     * @param  {MiddlewareFn} fn Middleware function
     * @return {this}
     */
    MockerRouter.prototype.use = function use(fn) {
        if (typeof fn !== 'function') {
            throw new TypeError('Middleware is expected to be a function');
        }
        this._middleware.push(fn);
        return this;
    };
    /**
     * Register a new routing to current router
     *
     * @private
     * @param  {string}       method   HTTP method
     * @param  {RoutePath}    path     Routing path rule
     * @param  {function|any} callback Routing callback handler
     * @return {this}
     */
    MockerRouter.prototype._register = function _register(method, path, callback) {
        method = method.toUpperCase();
        var regex = (0, _pathToRegexp2.default)(path);
        var cb = void 0;
        if (typeof callback === 'function') {
            cb = callback;
        }
        else {
            // shorthand method
            cb = function cb(_request, response) {
                response.send(callback);
            };
        }
        this._rules.push({
            method: method,
            path: path,
            regex: regex,
            callback: cb,
            keys: regex.keys,
            baseURL: this.baseURL,
            isAll: method === 'ALL'
        });
        return this;
    };
    /**
     * Match the proper routing, return `true` if rule matched
     *
     * @private
     * @param {FetchEvent} event Fetch event
     * @return {boolean}
     */
    MockerRouter.prototype._match = function _match(event) {
        var _this = this;
        var request = event.request;
        // `request.url` maybe relative in legacy mode
        var url = new URL(request.url, location.href);
        if (url.origin !== this._origin) {
            return false;
        }
        // strip router's base path
        var re = new RegExp('^' + this._basePath);
        var path = url.pathname.replace(re, '');
        var _loop = function _loop(rule) {
            var method = rule.method, regex = rule.regex, callback = rule.callback;
            if (regex.test(path) && (request.method === method || rule.isAll)) {
                //! Response object must be constructed synchronously
                var _request2 = new _request3.MockerRequest(event, rule);
                var response = new _response.MockerResponse(event);
                // apply (async) middleware
                Promise.all(_this._middleware.map(function (fn) {
                    return fn.call(event, _request2, response);
                })).then(function () {
                    callback.call(event, _request2, response);
                });
                return {
                    v: true
                };
            }
        };
        for (var _iterator = this._rules, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;
            if (_isArray) {
                if (_i >= _iterator.length)
                    break;
                _ref = _iterator[_i++];
            }
            else {
                _i = _iterator.next();
                if (_i.done)
                    break;
                _ref = _i.value;
            }
            var rule = _ref;
            var _ret = _loop(rule);
            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object")
                return _ret.v;
        }
        return false;
    };
    return MockerRouter;
}();
MockerRouter.routers = [];
var SubRouter = exports.SubRouter = function () {
    /**
     * Constructs a sub router
     * @param {MockerRouter}  router Parent router object
     * @param {string|RegExp} path   Routing path
     */
    /**
     * Router object
     *
     * @private
     * @type {MockerRouter}
     */
    function SubRouter(router, path) {
        _classCallCheck(this, SubRouter);
        this._router = null;
        this._path = undefined;
        this._router = router;
        this._path = path;
    }
    /**
     * Register a new scoped routing
     *
     * @private
     * @param {string}       method   HTTP method
     * @param {function|any} callback Routing callback handler
     * @return {this}
     */
    /**
     * Routing path rule
     *
     * @private
     * @type {string|RegExp}
     */
    SubRouter.prototype._register = function _register(method, callback) {
        this._router._register(method, this._path, callback);
        return this;
    };
    return SubRouter;
}();
var allMethods = ['all'].concat(methods);
// assign all methods to router
allMethods.forEach(function (method) {
    MockerRouter.prototype[method] = function (path, callback) {
        return this._register(method, path, callback);
    };
});
allMethods.forEach(function (method) {
    SubRouter.prototype[method] = function (callback) {
        return this._register(method, callback);
    };
});


/***/ }),

/***/ "../../node_modules/service-mocker/server/server.js":
/*!*******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/service-mocker/server/server.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.MockerServer = undefined;
var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");
var _regenerator2 = _interopRequireDefault(_regenerator);
var _router = __webpack_require__(/*! ./router */ "../../node_modules/service-mocker/server/router.js");
var _constants = __webpack_require__(/*! ../constants/ */ "../../node_modules/service-mocker/constants/index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try {
    var info = gen[key](arg);
    var value = info.value;
}
catch (error) {
    reject(error);
    return;
} if (info.done) {
    resolve(value);
}
else {
    return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); });
} } return step("next"); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
var MockerServer = exports.MockerServer = function () {
    /**
     * Constructs a server object
     *
     * @param {string} [baseURL='/'] The base URL of all routes, default is '/'
     */
    /**
     * Indicates which mode current server is running on
     *
     * @readonly
     * @type {boolean}
     */
    function MockerServer() {
        var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
        _classCallCheck(this, MockerServer);
        this.isLegacy = self === self.window;
        this.router = null;
        this.router = new _router.MockerRouter(baseURL);
    }
    /**
     * Attach middleware to current server
     *
     * @param  {MiddlewareFn} fn Middleware function
     * @return {this}
     */
    /**
     * Returns the Router instance of current server
     *
     * @readonly
     * @type {MockerRouter}
     */
    MockerServer.prototype.use = function use(fn) {
        this.router.use(fn);
        return this;
    };
    return MockerServer;
}();
// Event listeners MUST be added on the initial evaluation of worker scripts.
/* istanbul ignore next: unable to report coverage from sw context */
self.addEventListener('message', function () {
    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(event) {
        var data, ports, port;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        data = event.data, ports = event.ports;
                        if (!(!data || !ports || !ports.length)) {
                            _context.next = 3;
                            break;
                        }
                        return _context.abrupt('return');
                    case 3:
                        port = ports[0];
                        // handle connections
                        _context.t0 = data.action;
                        _context.next = _context.t0 === _constants.ACTION.PING ? 7 : _context.t0 === _constants.ACTION.REQUEST_CLAIM ? 8 : 11;
                        break;
                    case 7:
                        return _context.abrupt('return', port.postMessage({
                            action: _constants.ACTION.PONG
                        }));
                    case 8:
                        _context.next = 10;
                        return self.clients.claim();
                    case 10:
                        return _context.abrupt('return', port.postMessage({
                            action: _constants.ACTION.ESTABLISHED
                        }));
                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));
    return function (_x2) {
        return _ref.apply(this, arguments);
    };
}());
self.addEventListener('fetch', function (event) {
    _router.MockerRouter.routers.some(function (router) {
        return router._match(event);
    });
});
// IE will somehow fires `activate` event on form elements
/* istanbul ignore if: unable to report coverage from sw context */
if (self !== self.window) {
    self.addEventListener('install', function (event) {
        event.waitUntil(self.skipWaiting());
    });
    self.addEventListener('activate', function (event) {
        event.waitUntil(self.clients.claim());
    });
}


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

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/*!***********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/uuid/lib/bytesToUuid.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/*!***********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/uuid/lib/rng-browser.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../../node_modules/uuid/v4.js":
/*!**********************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/node_modules/uuid/v4.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/modules/server/contract.ts":
/*!****************************************!*\
  !*** ./src/modules/server/contract.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/modules/server/controllers/base-controller.ts":
/*!***********************************************************!*\
  !*** ./src/modules/server/controllers/base-controller.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.prototype.getAll = function () {
        return new data_1.DAO().query(this.modelClass);
    };
    ;
    BaseController.prototype.get = function (id) {
        return new data_1.DAO().findById(this.modelClass, id);
    };
    ;
    BaseController.prototype.create = function (body) {
        return new data_1.DAO().create(this.modelClass, body);
    };
    ;
    BaseController.prototype.update = function (body) {
        return new data_1.DAO().update(this.modelClass, body).then(function () { return null; });
    };
    ;
    BaseController.prototype.replace = function (body) {
        return new data_1.DAO().replace(this.modelClass, body).then(function () { return null; });
    };
    ;
    __decorate([
        service_mocker_1.ServiceMockGet({
            path: '/'
        }),
        service_mocker_1.Delay(1000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], BaseController.prototype, "getAll", null);
    __decorate([
        service_mocker_1.ServiceMockGet({
            path: '/:id'
        }),
        service_mocker_1.Delay(1000),
        __param(0, service_mocker_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Object)
    ], BaseController.prototype, "get", null);
    __decorate([
        service_mocker_1.ServiceMockPost({
            path: '/',
            httpCode: 204
        }),
        service_mocker_1.Delay(1000),
        __param(0, service_mocker_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], BaseController.prototype, "create", null);
    __decorate([
        service_mocker_1.ServiceMockPatch({
            path: '/:id',
            httpCode: 204
        }),
        service_mocker_1.Delay(1000),
        __param(0, service_mocker_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], BaseController.prototype, "update", null);
    __decorate([
        service_mocker_1.ServiceMockPut({
            path: '/:id',
            httpCode: 204
        }),
        service_mocker_1.Delay(1000),
        __param(0, service_mocker_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], BaseController.prototype, "replace", null);
    return BaseController;
}());
exports.BaseController = BaseController;


/***/ }),

/***/ "./src/modules/server/controllers/category.ts":
/*!****************************************************!*\
  !*** ./src/modules/server/controllers/category.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var models_1 = __webpack_require__(/*! ../models */ "./src/modules/server/models/index.ts");
var base_controller_1 = __webpack_require__(/*! ./base-controller */ "./src/modules/server/controllers/base-controller.ts");
var CategoryController = /** @class */ (function (_super) {
    __extends(CategoryController, _super);
    function CategoryController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelClass = models_1.Category;
        return _this;
    }
    CategoryController = __decorate([
        service_mocker_1.ServiceMockController({
            path: '/categories'
        })
    ], CategoryController);
    return CategoryController;
}(base_controller_1.BaseController));
exports.CategoryController = CategoryController;


/***/ }),

/***/ "./src/modules/server/controllers/customer.ts":
/*!****************************************************!*\
  !*** ./src/modules/server/controllers/customer.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var models_1 = __webpack_require__(/*! ../models */ "./src/modules/server/models/index.ts");
var base_controller_1 = __webpack_require__(/*! ./base-controller */ "./src/modules/server/controllers/base-controller.ts");
var CustomerController = /** @class */ (function (_super) {
    __extends(CustomerController, _super);
    function CustomerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelClass = models_1.Customer;
        return _this;
    }
    CustomerController = __decorate([
        service_mocker_1.ServiceMockController({
            path: '/customers'
        })
    ], CustomerController);
    return CustomerController;
}(base_controller_1.BaseController));
exports.CustomerController = CustomerController;


/***/ }),

/***/ "./src/modules/server/controllers/employee-territory.ts":
/*!**************************************************************!*\
  !*** ./src/modules/server/controllers/employee-territory.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var models_1 = __webpack_require__(/*! ../models */ "./src/modules/server/models/index.ts");
var base_controller_1 = __webpack_require__(/*! ./base-controller */ "./src/modules/server/controllers/base-controller.ts");
var EmployeeTerritoryController = /** @class */ (function (_super) {
    __extends(EmployeeTerritoryController, _super);
    function EmployeeTerritoryController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelClass = models_1.EmployeeTerritory;
        return _this;
    }
    EmployeeTerritoryController = __decorate([
        service_mocker_1.ServiceMockController({
            path: '/employeeTerritories'
        })
    ], EmployeeTerritoryController);
    return EmployeeTerritoryController;
}(base_controller_1.BaseController));
exports.EmployeeTerritoryController = EmployeeTerritoryController;


/***/ }),

/***/ "./src/modules/server/controllers/employee.ts":
/*!****************************************************!*\
  !*** ./src/modules/server/controllers/employee.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var models_1 = __webpack_require__(/*! ../models */ "./src/modules/server/models/index.ts");
var base_controller_1 = __webpack_require__(/*! ./base-controller */ "./src/modules/server/controllers/base-controller.ts");
var EmployeeController = /** @class */ (function (_super) {
    __extends(EmployeeController, _super);
    function EmployeeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelClass = models_1.Employee;
        return _this;
    }
    EmployeeController = __decorate([
        service_mocker_1.ServiceMockController({
            path: '/employees'
        })
    ], EmployeeController);
    return EmployeeController;
}(base_controller_1.BaseController));
exports.EmployeeController = EmployeeController;


/***/ }),

/***/ "./src/modules/server/controllers/index.ts":
/*!*************************************************!*\
  !*** ./src/modules/server/controllers/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./customer */ "./src/modules/server/controllers/customer.ts"));
__export(__webpack_require__(/*! ./category */ "./src/modules/server/controllers/category.ts"));
__export(__webpack_require__(/*! ./employee */ "./src/modules/server/controllers/employee.ts"));
__export(__webpack_require__(/*! ./employee-territory */ "./src/modules/server/controllers/employee-territory.ts"));
__export(__webpack_require__(/*! ./order */ "./src/modules/server/controllers/order.ts"));
__export(__webpack_require__(/*! ./order-detail */ "./src/modules/server/controllers/order-detail.ts"));
__export(__webpack_require__(/*! ./product */ "./src/modules/server/controllers/product.ts"));
__export(__webpack_require__(/*! ./region */ "./src/modules/server/controllers/region.ts"));
__export(__webpack_require__(/*! ./shipper */ "./src/modules/server/controllers/shipper.ts"));
__export(__webpack_require__(/*! ./supplier */ "./src/modules/server/controllers/supplier.ts"));
__export(__webpack_require__(/*! ./territory */ "./src/modules/server/controllers/territory.ts"));


/***/ }),

/***/ "./src/modules/server/controllers/order-detail.ts":
/*!********************************************************!*\
  !*** ./src/modules/server/controllers/order-detail.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var models_1 = __webpack_require__(/*! ../models */ "./src/modules/server/models/index.ts");
var base_controller_1 = __webpack_require__(/*! ./base-controller */ "./src/modules/server/controllers/base-controller.ts");
var OrderDetailController = /** @class */ (function (_super) {
    __extends(OrderDetailController, _super);
    function OrderDetailController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelClass = models_1.OrderDetail;
        return _this;
    }
    OrderDetailController = __decorate([
        service_mocker_1.ServiceMockController({
            path: '/orderDetails'
        })
    ], OrderDetailController);
    return OrderDetailController;
}(base_controller_1.BaseController));
exports.OrderDetailController = OrderDetailController;


/***/ }),

/***/ "./src/modules/server/controllers/order.ts":
/*!*************************************************!*\
  !*** ./src/modules/server/controllers/order.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var models_1 = __webpack_require__(/*! ../models */ "./src/modules/server/models/index.ts");
var base_controller_1 = __webpack_require__(/*! ./base-controller */ "./src/modules/server/controllers/base-controller.ts");
var OrderController = /** @class */ (function (_super) {
    __extends(OrderController, _super);
    function OrderController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelClass = models_1.Order;
        return _this;
    }
    OrderController = __decorate([
        service_mocker_1.ServiceMockController({
            path: '/orders'
        })
    ], OrderController);
    return OrderController;
}(base_controller_1.BaseController));
exports.OrderController = OrderController;


/***/ }),

/***/ "./src/modules/server/controllers/product.ts":
/*!***************************************************!*\
  !*** ./src/modules/server/controllers/product.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var models_1 = __webpack_require__(/*! ../models */ "./src/modules/server/models/index.ts");
var base_controller_1 = __webpack_require__(/*! ./base-controller */ "./src/modules/server/controllers/base-controller.ts");
var ProductController = /** @class */ (function (_super) {
    __extends(ProductController, _super);
    function ProductController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelClass = models_1.Product;
        return _this;
    }
    ProductController = __decorate([
        service_mocker_1.ServiceMockController({
            path: '/products'
        })
    ], ProductController);
    return ProductController;
}(base_controller_1.BaseController));
exports.ProductController = ProductController;


/***/ }),

/***/ "./src/modules/server/controllers/region.ts":
/*!**************************************************!*\
  !*** ./src/modules/server/controllers/region.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var models_1 = __webpack_require__(/*! ../models */ "./src/modules/server/models/index.ts");
var base_controller_1 = __webpack_require__(/*! ./base-controller */ "./src/modules/server/controllers/base-controller.ts");
var RegionController = /** @class */ (function (_super) {
    __extends(RegionController, _super);
    function RegionController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelClass = models_1.Region;
        return _this;
    }
    RegionController = __decorate([
        service_mocker_1.ServiceMockController({
            path: '/regions'
        })
    ], RegionController);
    return RegionController;
}(base_controller_1.BaseController));
exports.RegionController = RegionController;


/***/ }),

/***/ "./src/modules/server/controllers/shipper.ts":
/*!***************************************************!*\
  !*** ./src/modules/server/controllers/shipper.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var models_1 = __webpack_require__(/*! ../models */ "./src/modules/server/models/index.ts");
var base_controller_1 = __webpack_require__(/*! ./base-controller */ "./src/modules/server/controllers/base-controller.ts");
var ShipperController = /** @class */ (function (_super) {
    __extends(ShipperController, _super);
    function ShipperController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelClass = models_1.Shipper;
        return _this;
    }
    ShipperController = __decorate([
        service_mocker_1.ServiceMockController({
            path: '/shippers'
        })
    ], ShipperController);
    return ShipperController;
}(base_controller_1.BaseController));
exports.ShipperController = ShipperController;


/***/ }),

/***/ "./src/modules/server/controllers/supplier.ts":
/*!****************************************************!*\
  !*** ./src/modules/server/controllers/supplier.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var models_1 = __webpack_require__(/*! ../models */ "./src/modules/server/models/index.ts");
var base_controller_1 = __webpack_require__(/*! ./base-controller */ "./src/modules/server/controllers/base-controller.ts");
var SupplierController = /** @class */ (function (_super) {
    __extends(SupplierController, _super);
    function SupplierController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelClass = models_1.Supplier;
        return _this;
    }
    SupplierController = __decorate([
        service_mocker_1.ServiceMockController({
            path: '/suppliers'
        })
    ], SupplierController);
    return SupplierController;
}(base_controller_1.BaseController));
exports.SupplierController = SupplierController;


/***/ }),

/***/ "./src/modules/server/controllers/territory.ts":
/*!*****************************************************!*\
  !*** ./src/modules/server/controllers/territory.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var models_1 = __webpack_require__(/*! ../models */ "./src/modules/server/models/index.ts");
var base_controller_1 = __webpack_require__(/*! ./base-controller */ "./src/modules/server/controllers/base-controller.ts");
var TerritoryController = /** @class */ (function (_super) {
    __extends(TerritoryController, _super);
    function TerritoryController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelClass = models_1.Territory;
        return _this;
    }
    TerritoryController = __decorate([
        service_mocker_1.ServiceMockController({
            path: '/territories'
        })
    ], TerritoryController);
    return TerritoryController;
}(base_controller_1.BaseController));
exports.TerritoryController = TerritoryController;


/***/ }),

/***/ "./src/modules/server/index.ts":
/*!*************************************!*\
  !*** ./src/modules/server/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", { value: true });
// because we are on webpack child compilation we want to force full load, not partial modules.
__webpack_require__(/*! reflect-metadata */ "../../node_modules/reflect-metadata/Reflect.js");
__webpack_require__(/*! service-mocker/server */ "../../node_modules/service-mocker/server/index.js");
__webpack_require__(/*! @tdm/tixin */ "../../libs/tixin/src/index.ts");
__webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
__webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
__webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
__webpack_require__(/*! @tdm/service-mocker/shared */ "../../libs/service-mocker/shared/src/index.ts");
var tdm_1 = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
var data_1 = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
var server_1 = __webpack_require__(/*! service-mocker/server */ "../../node_modules/service-mocker/server/index.js");
var service_mocker_1 = __webpack_require__(/*! @tdm/service-mocker */ "../../libs/service-mocker/src/index.ts");
var shared_1 = __webpack_require__(/*! @tdm/service-mocker/shared */ "../../libs/service-mocker/shared/src/index.ts");
__webpack_require__(/*! ./contract */ "./src/modules/server/contract.ts");
var controllers_1 = __webpack_require__(/*! ./controllers */ "./src/modules/server/controllers/index.ts");
// registerOfflineWorker(<any> self);
var MyServer = /** @class */ (function (_super) {
    __extends(MyServer, _super);
    function MyServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyServer.prototype.init = function () { };
    MyServer.prototype.handle404 = function (res) {
        return res.status(404).json(service_mocker_1.HttpError.createKnown('404'));
    };
    MyServer.prototype.restoreDb = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, tName, target, dao;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = Object.keys(data);
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        tName = _a[_i];
                        target = tdm_1.targetStore.findTarget(tName);
                        if (!target) return [3 /*break*/, 4];
                        dao = data_1.DAO.localForage(target);
                        return [4 /*yield*/, dao.clear()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, dao.createBulk(data[tName])];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        service_mocker_1.FallbackRoute(),
        __param(0, service_mocker_1.Response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof server_1.MockerResponse !== "undefined" && server_1.MockerResponse) === "function" && _a || Object]),
        __metadata("design:returntype", Object)
    ], MyServer.prototype, "handle404", null);
    __decorate([
        service_mocker_1.OnMessage(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_b = typeof shared_1.ClientRequest !== "undefined" && shared_1.ClientRequest) === "function" && _b || Object]),
        __metadata("design:returntype", Object)
    ], MyServer.prototype, "restoreDb", null);
    MyServer = __decorate([
        service_mocker_1.Server({
            baseUrl: '/api',
            controllers: [
                controllers_1.CategoryController,
                controllers_1.CustomerController,
                controllers_1.EmployeeController,
                controllers_1.EmployeeTerritoryController,
                controllers_1.OrderController,
                controllers_1.OrderDetailController,
                controllers_1.ProductController,
                controllers_1.RegionController,
                controllers_1.ShipperController,
                controllers_1.SupplierController,
                controllers_1.TerritoryController
            ]
        })
    ], MyServer);
    return MyServer;
    var _a, _b;
}(service_mocker_1.ServerBase));
var server = new MyServer();


/***/ }),

/***/ "./src/modules/server/models/category.ts":
/*!***********************************************!*\
  !*** ./src/modules/server/models/category.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
var local_forage_1 = __webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
var Category = /** @class */ (function () {
    function Category() {
    }
    __decorate([
        core_1.Identity(),
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Category.prototype, "CategoryID", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Category.prototype, "CategoryName", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Category.prototype, "Description", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Category.prototype, "Picture", void 0);
    Category = __decorate([
        local_forage_1.LocalForageResource({
            resName: 'categories'
        })
    ], Category);
    return Category;
}());
exports.Category = Category;


/***/ }),

/***/ "./src/modules/server/models/customer.ts":
/*!***********************************************!*\
  !*** ./src/modules/server/models/customer.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
var local_forage_1 = __webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
var Customer = /** @class */ (function () {
    function Customer() {
    }
    __decorate([
        core_1.Identity(),
        core_1.Prop(),
        __metadata("design:type", String)
    ], Customer.prototype, "CustomerID", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Customer.prototype, "CompanyName", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Customer.prototype, "ContactName", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Customer.prototype, "ContactTitle", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Customer.prototype, "Address", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Customer.prototype, "City", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Customer.prototype, "Region", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Customer.prototype, "PostalCode", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Customer.prototype, "Country", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Customer.prototype, "Phone", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Customer.prototype, "Fax", void 0);
    Customer = __decorate([
        local_forage_1.LocalForageResource({
            resName: 'customers'
        })
    ], Customer);
    return Customer;
}());
exports.Customer = Customer;


/***/ }),

/***/ "./src/modules/server/models/employee-territory.ts":
/*!*********************************************************!*\
  !*** ./src/modules/server/models/employee-territory.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
var local_forage_1 = __webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
var EmployeeTerritory = /** @class */ (function () {
    function EmployeeTerritory() {
    }
    __decorate([
        data_1.AutoIdentity(),
        data_1.Prop(),
        __metadata("design:type", Number)
    ], EmployeeTerritory.prototype, "EmployeeTerritory", void 0);
    __decorate([
        data_1.Prop(),
        __metadata("design:type", Number)
    ], EmployeeTerritory.prototype, "EmployeeID", void 0);
    __decorate([
        data_1.Prop(),
        __metadata("design:type", Number)
    ], EmployeeTerritory.prototype, "TerritoryID", void 0);
    EmployeeTerritory = __decorate([
        local_forage_1.LocalForageResource({
            resName: 'employeeTerritories'
        })
    ], EmployeeTerritory);
    return EmployeeTerritory;
}());
exports.EmployeeTerritory = EmployeeTerritory;


/***/ }),

/***/ "./src/modules/server/models/employee.ts":
/*!***********************************************!*\
  !*** ./src/modules/server/models/employee.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
var local_forage_1 = __webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
var Employee = /** @class */ (function () {
    function Employee() {
    }
    __decorate([
        core_1.Identity(),
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Employee.prototype, "EmployeeID", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "LastName", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "FirstName", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "Title", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "TitleOfCourtesy", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "BirthDate", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "HireDate", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "Address", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "City", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "Region", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "PostalCode", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "Country", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "HomePhone", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Employee.prototype, "Extension", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Object)
    ], Employee.prototype, "Photo", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "Notes", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Employee.prototype, "ReportsTo", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Employee.prototype, "PhotoPath", void 0);
    Employee = __decorate([
        local_forage_1.LocalForageResource({
            resName: 'employees'
        })
    ], Employee);
    return Employee;
}());
exports.Employee = Employee;


/***/ }),

/***/ "./src/modules/server/models/index.ts":
/*!********************************************!*\
  !*** ./src/modules/server/models/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./customer */ "./src/modules/server/models/customer.ts"));
__export(__webpack_require__(/*! ./category */ "./src/modules/server/models/category.ts"));
__export(__webpack_require__(/*! ./employee */ "./src/modules/server/models/employee.ts"));
__export(__webpack_require__(/*! ./employee-territory */ "./src/modules/server/models/employee-territory.ts"));
__export(__webpack_require__(/*! ./order */ "./src/modules/server/models/order.ts"));
__export(__webpack_require__(/*! ./order-detail */ "./src/modules/server/models/order-detail.ts"));
__export(__webpack_require__(/*! ./product */ "./src/modules/server/models/product.ts"));
__export(__webpack_require__(/*! ./region */ "./src/modules/server/models/region.ts"));
__export(__webpack_require__(/*! ./shipper */ "./src/modules/server/models/shipper.ts"));
__export(__webpack_require__(/*! ./supplier */ "./src/modules/server/models/supplier.ts"));
__export(__webpack_require__(/*! ./territory */ "./src/modules/server/models/territory.ts"));


/***/ }),

/***/ "./src/modules/server/models/order-detail.ts":
/*!***************************************************!*\
  !*** ./src/modules/server/models/order-detail.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
var local_forage_1 = __webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
    }
    __decorate([
        data_1.AutoIdentity(),
        data_1.Prop(),
        __metadata("design:type", String)
    ], OrderDetail.prototype, "OrderDetailID", void 0);
    __decorate([
        data_1.Prop(),
        __metadata("design:type", Number)
    ], OrderDetail.prototype, "OrderID", void 0);
    __decorate([
        data_1.Prop(),
        __metadata("design:type", String)
    ], OrderDetail.prototype, "ProductID", void 0);
    __decorate([
        data_1.Prop(),
        __metadata("design:type", String)
    ], OrderDetail.prototype, "UnitPrice", void 0);
    __decorate([
        data_1.Prop(),
        __metadata("design:type", String)
    ], OrderDetail.prototype, "Quantity", void 0);
    __decorate([
        data_1.Prop(),
        __metadata("design:type", String)
    ], OrderDetail.prototype, "Discount", void 0);
    OrderDetail = __decorate([
        local_forage_1.LocalForageResource({
            resName: 'orderDetails'
        })
    ], OrderDetail);
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;


/***/ }),

/***/ "./src/modules/server/models/order.ts":
/*!********************************************!*\
  !*** ./src/modules/server/models/order.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
var data_1 = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
var local_forage_1 = __webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
var customer_1 = __webpack_require__(/*! ./customer */ "./src/modules/server/models/customer.ts");
var employee_1 = __webpack_require__(/*! ./employee */ "./src/modules/server/models/employee.ts");
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        core_1.Identity(),
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Order.prototype, "OrderID", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Order.prototype, "CustomerID", void 0);
    __decorate([
        core_1.Prop(),
        data_1.BelongsTo({ foreignKey: 'CustomerID' }),
        __metadata("design:type", typeof (_a = typeof customer_1.Customer !== "undefined" && customer_1.Customer) === "function" && _a || Object)
    ], Order.prototype, "Customer", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Order.prototype, "EmployeeID", void 0);
    __decorate([
        core_1.Prop(),
        data_1.BelongsTo({ foreignKey: 'EmployeeID' }),
        __metadata("design:type", typeof (_b = typeof employee_1.Employee !== "undefined" && employee_1.Employee) === "function" && _b || Object)
    ], Order.prototype, "Employee", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Order.prototype, "OrderDate", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Order.prototype, "RequiredDate", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Order.prototype, "ShippedDate", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Order.prototype, "ShipVia", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Order.prototype, "Freight", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Order.prototype, "ShipName", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Order.prototype, "ShipAddress", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Order.prototype, "ShipCity", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Order.prototype, "ShipRegion", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Order.prototype, "ShipPostalCode", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Order.prototype, "ShipCountry", void 0);
    Order = __decorate([
        local_forage_1.LocalForageResource({
            resName: 'orders'
        })
    ], Order);
    return Order;
    var _a, _b;
}());
exports.Order = Order;


/***/ }),

/***/ "./src/modules/server/models/product.ts":
/*!**********************************************!*\
  !*** ./src/modules/server/models/product.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
var local_forage_1 = __webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        core_1.Identity(),
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Product.prototype, "ProductID", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Product.prototype, "ProductName", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Product.prototype, "SupplierID", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Product.prototype, "CategoryID", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Product.prototype, "QuantityPerUnit", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Product.prototype, "UnitPrice", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Product.prototype, "UnitsInStock", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Product.prototype, "UnitsOnOrder", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Product.prototype, "ReorderLevel", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Product.prototype, "Discontinued", void 0);
    Product = __decorate([
        local_forage_1.LocalForageResource({
            resName: 'products'
        })
    ], Product);
    return Product;
}());
exports.Product = Product;


/***/ }),

/***/ "./src/modules/server/models/region.ts":
/*!*********************************************!*\
  !*** ./src/modules/server/models/region.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
var local_forage_1 = __webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
var Region = /** @class */ (function () {
    function Region() {
    }
    __decorate([
        core_1.Identity(),
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Region.prototype, "RegionID", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Region.prototype, "RegionDescription", void 0);
    Region = __decorate([
        local_forage_1.LocalForageResource({
            resName: 'regions'
        })
    ], Region);
    return Region;
}());
exports.Region = Region;


/***/ }),

/***/ "./src/modules/server/models/shipper.ts":
/*!**********************************************!*\
  !*** ./src/modules/server/models/shipper.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
var local_forage_1 = __webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
var Shipper = /** @class */ (function () {
    function Shipper() {
    }
    __decorate([
        core_1.Identity(),
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Shipper.prototype, "ShipperID", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Shipper.prototype, "CompanyName", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Shipper.prototype, "Phone", void 0);
    Shipper = __decorate([
        local_forage_1.LocalForageResource({
            resName: 'shippers'
        })
    ], Shipper);
    return Shipper;
}());
exports.Shipper = Shipper;


/***/ }),

/***/ "./src/modules/server/models/supplier.ts":
/*!***********************************************!*\
  !*** ./src/modules/server/models/supplier.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
var local_forage_1 = __webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    __decorate([
        core_1.Identity(),
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Supplier.prototype, "SupplierID", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Supplier.prototype, "CompanyName", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Supplier.prototype, "ContactName", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Supplier.prototype, "ContactTitle", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Supplier.prototype, "Address", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Supplier.prototype, "City", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Supplier.prototype, "Region", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Supplier.prototype, "PostalCode", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Supplier.prototype, "Country", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Supplier.prototype, "Phone", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Supplier.prototype, "Fax", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Supplier.prototype, "HomePage", void 0);
    Supplier = __decorate([
        local_forage_1.LocalForageResource({
            resName: 'suppliers'
        })
    ], Supplier);
    return Supplier;
}());
exports.Supplier = Supplier;


/***/ }),

/***/ "./src/modules/server/models/territory.ts":
/*!************************************************!*\
  !*** ./src/modules/server/models/territory.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
var local_forage_1 = __webpack_require__(/*! @tdm/local-forage */ "../../libs/local-forage/src/index.ts");
var Territory = /** @class */ (function () {
    function Territory() {
    }
    __decorate([
        core_1.Identity(),
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Territory.prototype, "TerritoryID", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", String)
    ], Territory.prototype, "TerritoryDescription", void 0);
    __decorate([
        core_1.Prop(),
        __metadata("design:type", Number)
    ], Territory.prototype, "RegionID", void 0);
    Territory = __decorate([
        local_forage_1.LocalForageResource({
            resName: 'territories'
        })
    ], Territory);
    return Territory;
}());
exports.Territory = Territory;


/***/ })

/******/ });
//# sourceMappingURL=sw.js.map