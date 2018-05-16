(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "../../libs/data/plugin/active-record/src/index.ts":
/*!******************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/plugin/active-record/src/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: ActiveRecordPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ "../../libs/data/plugin/active-record/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveRecordPlugin", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["ActiveRecordPlugin"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/data/plugin/active-record/src/lib/$rc.ts":
/*!********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/plugin/active-record/src/lib/$rc.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../libs/data/plugin/active-record/src/lib/index.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/plugin/active-record/src/lib/index.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ActiveRecordPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveRecordPlugin", function() { return ActiveRecordPlugin; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");


/**
 * Returns all of the actions registered for a target going through the proto chain and all
 * mixins associated with each proto.
 *
 * Returns a unique list of actioned, uniqueness is set by the `name` of each action.
 * If 2 actions with the same 'name' exists, the top level actions wins, i.e. the first in the chain.
 *
 * @param target
 * @param adapterClass
 * @returns
 */
function getActions(target, adapterClass) {
    var chain = Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["getProtoChain"])(target);
    var actions = new Map();
    for (var i = 0, len = chain.length; i < len; i++) {
        if (_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].hasTarget(chain[i])) {
            var adapterMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getAdapter(adapterClass);
            var mixins = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["SetExt"].asArray(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getMixins(chain[i], adapterClass));
            if (adapterMeta) {
                var protoActions = adapterMeta.getActions.apply(adapterMeta, [chain[i]].concat(mixins));
                _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MapExt"].fromArray(protoActions, function (v) { return v.name; }, actions, true);
            }
        }
    }
    return _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MapExt"].asValArray(actions);
}
function composeAction(obj, action, fn) {
    obj[action.name] = fn;
    if (action.alias) {
        action.alias.forEach(function (alias) { return (obj[alias] = obj[action.name]); });
    }
}
function registerAction(action, collProto, override) {
    if (override === void 0) { override = false; }
    var ctx = new _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ExecuteContext"](this.targetMetadata, action);
    var self = this;
    if (action.decoratorInfo.isStatic) {
        if (override || !Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(this.target[action.name])) {
            composeAction(this.target, action, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return self.execute(ctx.clone(), { args: args }, 'instance');
            });
        }
        if (action.isCollection &&
            action.collInstance &&
            (override || !Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(collProto[action.name]))) {
            composeAction(collProto, action, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                this.splice(0, this.length);
                return self.execute(ctx.clone(this), { args: args }, 'instance');
            });
        }
    }
    else {
        if (action.isCollection) {
            throw new Error('An action with a collection response must be a static level member');
        }
        if (override || !Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(this.target.prototype[action.name])) {
            composeAction(this.target.prototype, action, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // we call `self.execute` with 'instance' so it acts like AR in its resource control but we need the promise
                // so we use the resource control to get it right away.
                return _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ResourceControl"].get(self.execute(ctx.clone(this), { args: args }, 'instance'));
            });
        }
    }
}
function activeRecord(target) {
    // don't apply active record on non TDMModel targets (i.e. @Model targets)
    // TODO: the event should be specific to `@tdm/data` and not onProcessType
    if (!_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMModelBase"].instanceOf(target.prototype)) {
        return;
    }
    var ac = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getAC(target);
    var collProto = {};
    // build actions on the target type for the currently active adapter.
    if (ac) {
        getActions(target, ac.adapterClass).forEach(function (a) {
            // TODO check action instance of ActionMetadata + in ActionMetadata verify using DecoratorInfo
            var extAction = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"]
                .getTargetMeta(target)
                .getExtendingAction(a.decoratorInfo);
            if (extAction) {
                var metaArgs = Object.assign({}, a.metaArgs, extAction);
                var metaClass = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].get(ac.adapterMeta.actionMetaClass);
                a = metaClass.factory(metaArgs, target, extAction.decoratorInfo)
                    .metaValue;
            }
            registerAction.call(ac, a, collProto, true);
        });
    }
    // creating collection type for this target
    if (Object.keys(collProto).length > 0) {
        ac.targetMetadata.collectionClass = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMCollection"].factory(collProto);
    }
}
function attachResourceControl(propertyName) {
    function getThisCtrl() {
        return _tdm_data__WEBPACK_IMPORTED_MODULE_1__["ResourceControl"].get(this);
    }
    // extend TDMModel
    Object.defineProperty(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMModelBase"].prototype, propertyName, {
        configurable: true,
        get: getThisCtrl
    });
    // extend TDMCollection
    function StatefulActiveRecordCollection() { }
    Object.defineProperty(StatefulActiveRecordCollection.prototype, propertyName, { get: getThisCtrl });
    _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["TDMCollection"].extend(StatefulActiveRecordCollection);
}
var ActiveRecordPlugin = /** @class */ (function () {
    function ActiveRecordPlugin() {
    }
    /**
     * Init the plugin
     * @param options ActiveRecordOptions
     */
    ActiveRecordPlugin.prototype.init = function (options) {
        if (options.resourceControl) {
            attachResourceControl(options.resourceControl);
        }
        if (options.hasOwnProperty('enableActions') === false ||
            options.enableActions === true) {
            _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].on.processType(activeRecord);
        }
    };
    return ActiveRecordPlugin;
}());

_tdm_data__WEBPACK_IMPORTED_MODULE_1__["PluginStore"].register('ActiveRecord', ActiveRecordPlugin);


/***/ }),

/***/ "../../libs/data/plugin/control-flow/src/index.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/plugin/control-flow/src/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ResourceControlFlowPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ "../../libs/data/plugin/control-flow/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceControlFlowPlugin", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["ResourceControlFlowPlugin"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/data/plugin/control-flow/src/lib/index.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/plugin/control-flow/src/lib/index.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ResourceControlFlowPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceControlFlowPlugin", function() { return ResourceControlFlowPlugin; });
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _rc_ext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rc-ext */ "../../libs/data/plugin/control-flow/src/lib/rc-ext.ts");


var ResourceControlFlowPlugin = /** @class */ (function () {
    function ResourceControlFlowPlugin() {
    }
    /**
     * Init the plugin
     * @param propertyName {string} ['@ar'] Optional, the property name to attach to the each model
     */
    ResourceControlFlowPlugin.prototype.init = function () {
        Object(_rc_ext__WEBPACK_IMPORTED_MODULE_1__["init"])();
    };
    return ResourceControlFlowPlugin;
}());

_tdm_data__WEBPACK_IMPORTED_MODULE_0__["PluginStore"].register('ResourceControlFlow', ResourceControlFlowPlugin);


/***/ }),

/***/ "../../libs/data/plugin/control-flow/src/lib/rc-ext.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/plugin/control-flow/src/lib/rc-ext.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ResourceControlFlow, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceControlFlow", function() { return ResourceControlFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _tdm_tixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/tixin */ "../../libs/tixin/src/index.ts");
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
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
 *
 * ## Observables and `ActiveRecordState`
 * `ActiveRecordState` notification mechanism is based on observables.
 * This is great for UI interfaces but requires implementing tear down logic, that is unsubscribing
 * from stream. To help with that, all of the streams in `ActiveRecordState` are shared & lazy, they will only
 * register if accessed to and automatically disconnect when the number of subscribers is 0.
 *
 * You can also call `ActiveRecordState.disconnect()` to clear all subscriptions.
 *
 * When using an observable aware UI framework subscriptions managed by the framework so as long as
 * you don't manually subscribe you are safe. e.g: In Angular using the `async` pipe (`|`) will also
 * unsubscribe when the component get disposed.
 */
var ResourceControlFlow = /** @class */ (function (_super) {
    __extends(ResourceControlFlow, _super);
    function ResourceControlFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ResourceControlFlow.prototype, "hasSnapshot", {
        get: function () {
            return !!this.snapshot;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reply the last operation.
     * Busy state must be false and the resource should have been executed at least once (any action)
     */
    ResourceControlFlow.prototype.replay = function () {
        if (this.busy) {
            _tdm_core__WEBPACK_IMPORTED_MODULE_1__["errors"].throw.model(this.parent, "Can not replay while busy.");
        }
        if (!this.lastExecute) {
            _tdm_core__WEBPACK_IMPORTED_MODULE_1__["errors"].throw.model(this.parent, "No replay data");
        }
        var last = this.lastExecute;
        if (_tdm_core__WEBPACK_IMPORTED_MODULE_1__["TDMCollection"].instanceOf(this.parent)) {
            this.parent.splice(0, this.parent.length);
        }
        var result = last.ac.createExecFactory(last.action)(this._mode === 'instance' ? this.parent : undefined, last.params);
        return result === this.parent ? this : _tdm_data__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"].get(result);
    };
    /**
     * Reply the last operation after the provided resources finish their current operation.
     * This method will not invoke a `replay` for the provided resources, they are assumed in-flight or post-flight.
     *
     * For the current resource, the same rules that apply on `replay()` apply on `replayAfter`, i.e. the busy state must
     * be false and the resource should have been executed at least once.
     * @param resources
     * @param ignoreError Whether to reply or not if an error is thrown from some or all of the resources.
     * always: Always execute the reply operation
     * some: Execute the reply operation if at least one item did not throw.
     * never: Don't execute the reply operation if at least one item threw.
     */
    ResourceControlFlow.prototype.replayAfter = function (resources, ignoreError) {
        var _this = this;
        if (ignoreError === void 0) { ignoreError = 'never'; }
        if (this.busy) {
            _tdm_core__WEBPACK_IMPORTED_MODULE_1__["errors"].throw.model(this.parent, "Can not replay while busy.");
        }
        if (!this.lastExecute) {
            _tdm_core__WEBPACK_IMPORTED_MODULE_1__["errors"].throw.model(this.parent, "No replay data");
        }
        this.set('busy', true);
        var arr = Array.isArray(resources)
            ? resources.slice()
            : [resources];
        var catcher;
        switch (ignoreError) {
            case 'always':
                catcher = function () { }; // tslint:disable-line
                break;
            case 'some':
                catcher = function (err) {
                    arr.pop();
                    if (arr.length === 0) {
                        throw err;
                    }
                };
                break;
            default:
                catcher = function (err) {
                    throw err;
                };
                break;
        }
        var flowControl = function (resource) {
            var rc = _tdm_data__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"].get(resource);
            return rc.busy ? rc.next().catch(catcher) : Promise.resolve();
        };
        Promise.all(arr.map(flowControl))
            .then(function () {
            _this.set('busy', false);
            _this.replay();
        })
            .catch(function (err) {
            _this.set('busy', false);
            _tdm_data__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"].emitEvent(new _tdm_data__WEBPACK_IMPORTED_MODULE_2__["ActionErrorResourceEvent"](_this.parent, err));
        });
    };
    /**
     * Creates a snapshot of the current instance and stores it.
     * Only one snapshot is stored per instance, if a new one is created the previous snapshot is overwriten.
     * This snapshot is created using serialization which means that all `@Model()` and `@Prop()` rules apply.
     *
     * @param mapperFactory An optional [[MapperFactory]] to use, defaults to the mapper set for the model or
     * [[directMapper]] if not set.
     */
    ResourceControlFlow.prototype.createSnapshot = function (mapperFactory) {
        if (mapperFactory === void 0) { mapperFactory = _tdm_core__WEBPACK_IMPORTED_MODULE_1__["directMapper"]; }
        this.snapshot = Object(_tdm_core__WEBPACK_IMPORTED_MODULE_1__["autoSerialize"])(this.parent, mapperFactory);
    };
    /**
     * Restores a previously created snapshot into the current instance (merge).
     * If a snapshot does not exist it will not restore, nothing is thrown. (use hasSnapshot to check)
     * Snapshot is removed after restoring.
     * This snapshot is restored using deserialization which means that all `@Model()` and `@Prop()` rules apply.
     *
     * @param mapperFactory An optional [[MapperFactory]] to use, defaults to the mapper set for the model or
     * [[directMapper]] if not set.
     */
    ResourceControlFlow.prototype.restoreSnapshot = function (mapperFactory) {
        if (mapperFactory === void 0) { mapperFactory = _tdm_core__WEBPACK_IMPORTED_MODULE_1__["directMapper"]; }
        if (this.hasSnapshot) {
            Object(_tdm_core__WEBPACK_IMPORTED_MODULE_1__["autoDeserialize"])(this.snapshot, this.parent.constructor, this.parent, mapperFactory);
            this.snapshot = undefined;
        }
    };
    /**
     * Clone's (deep) the resource.
     * This is a deep clone done using serialization -> deserialization, which means that all `@Model()` and `@Prop()`
     * rules apply.
     *
     * @param mapperFactory An optional [[MapperFactory]] to use, defaults to the mapper set for the model or
     * [[directMapper]] if not set.
     */
    ResourceControlFlow.prototype.clone = function (mapperFactory) {
        if (mapperFactory === void 0) { mapperFactory = _tdm_core__WEBPACK_IMPORTED_MODULE_1__["directMapper"]; }
        return _tdm_core__WEBPACK_IMPORTED_MODULE_1__["TDMModelBase"].clone(this.parent, mapperFactory);
    };
    return ResourceControlFlow;
}(_tdm_data__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"]));

function init() {
    Object(_tdm_tixin__WEBPACK_IMPORTED_MODULE_0__["TixinFree"])(_tdm_data__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"], ResourceControlFlow, 'proto');
}


/***/ }),

/***/ "../../libs/data/plugin/rx-resource-control/src/index.ts":
/*!************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/plugin/rx-resource-control/src/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: RxResourceControlPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ "../../libs/data/plugin/rx-resource-control/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RxResourceControlPlugin", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["RxResourceControlPlugin"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/data/plugin/rx-resource-control/src/lib/index.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/plugin/rx-resource-control/src/lib/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RxResourceControlPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxResourceControlPlugin", function() { return RxResourceControlPlugin; });
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _rc_ext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rc-ext */ "../../libs/data/plugin/rx-resource-control/src/lib/rc-ext.ts");


var RxResourceControlPlugin = /** @class */ (function () {
    function RxResourceControlPlugin() {
    }
    /**
     * Init the plugin
     */
    RxResourceControlPlugin.prototype.init = function () {
        Object(_rc_ext__WEBPACK_IMPORTED_MODULE_1__["init"])();
    };
    return RxResourceControlPlugin;
}());

_tdm_data__WEBPACK_IMPORTED_MODULE_0__["PluginStore"].register('RxResourceControl', RxResourceControlPlugin);


/***/ }),

/***/ "../../libs/data/plugin/rx-resource-control/src/lib/rc-ext.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/data/plugin/rx-resource-control/src/lib/rc-ext.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: RxResourceControl, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxResourceControl", function() { return RxResourceControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "../../node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "../../node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _tdm_tixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tdm/tixin */ "../../libs/tixin/src/index.ts");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
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
 *
 * ## Observables and `ActiveRecordState`
 * `ActiveRecordState` notification mechanism is based on observables.
 * This is great for UI interfaces but requires implementing tear down logic, that is unsubscribing
 * from stream. To help with that, all of the streams in `ActiveRecordState` are shared & lazy, they will only
 * register if accessed to and automatically disconnect when the number of subscribers is 0.
 *
 * You can also call `ActiveRecordState.disconnect()` to clear all subscriptions.
 *
 * When using an observable aware UI framework subscriptions managed by the framework so as long as
 * you don't manually subscribe you are safe. e.g: In Angular using the `async` pipe (`|`) will also
 * unsubscribe when the component get disposed.
 */
var RxResourceControl = /** @class */ (function (_super) {
    __extends(RxResourceControl, _super);
    function RxResourceControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Disconnect all rx subscriptions
     */
    RxResourceControl.prototype.disconnect = function () {
        // TODO: unsubscribing the subjects will throw when "nexting" them
        // check if this approach does not leak
        if (this.hasOwnProperty('_busySubject')) {
            this._busySubject.observers.forEach(function (o) { return o.complete(); });
        }
        if (this.hasOwnProperty('_selfSubject')) {
            this._selfSubject.observers.forEach(function (o) { return o.complete(); });
        }
    };
    // workaround for https://github.com/Microsoft/TypeScript/issues/15892
    // has a slight impact as it set's a property on the class.
    RxResourceControl._rx = _tdm_data__WEBPACK_IMPORTED_MODULE_5__["ResourceControl"].addEventListener(function rootHandler(event) {
        if (event instanceof _tdm_data__WEBPACK_IMPORTED_MODULE_5__["StateChangeResourceEvent"]) {
            if (event.key === 'busy') {
                this._busySubject.next(event.newVal);
            }
        }
        else if (event.type === 'ActionSuccess') {
            this._selfSubject.next(this.parent);
        }
    });
    __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_4__["LazyInit"])(function () {
            return this._busySubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
        }),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], RxResourceControl.prototype, "busy$", void 0);
    __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_4__["LazyInit"])(function () {
            return this._selfSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
        }),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], RxResourceControl.prototype, "self$", void 0);
    __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_4__["LazyInit"])(function () {
            return new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.busy);
        }),
        __metadata("design:type", rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"])
    ], RxResourceControl.prototype, "_busySubject", void 0);
    __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_4__["LazyInit"])(function () {
            return new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.parent);
        }),
        __metadata("design:type", rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"])
    ], RxResourceControl.prototype, "_selfSubject", void 0);
    return RxResourceControl;
}(_tdm_data__WEBPACK_IMPORTED_MODULE_5__["ResourceControl"]));

function init() {
    Object(_tdm_tixin__WEBPACK_IMPORTED_MODULE_3__["TixinFree"])(_tdm_data__WEBPACK_IMPORTED_MODULE_5__["ResourceControl"], RxResourceControl, 'proto');
}


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

/***/ "../../libs/ngx-http-client/src/index.ts":
/*!********************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/index.ts ***!
  \********************************************************************************************/
/*! exports provided: HttpActionMethodType, HttpAction, UrlParam, HttpResource, NgDAO, HttpDefaultConfig, HttpClientResourceModule, ActiveRecord, ActiveRecordCollection, HttpActiveRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ "../../libs/ngx-http-client/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpActionMethodType", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["HttpActionMethodType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpAction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["HttpAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlParam", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["UrlParam"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpResource", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["HttpResource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgDAO", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["NgDAO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpDefaultConfig", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["HttpDefaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClientResourceModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["HttpClientResourceModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveRecord", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["ActiveRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveRecordCollection", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["ActiveRecordCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpActiveRecord", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["HttpActiveRecord"]; });

/*
       * Public API Surface of mylib
       */



/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/active-record/ar-mixin.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/active-record/ar-mixin.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ActiveRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveRecord", function() { return ActiveRecord; });
/* harmony import */ var _tdm_tixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/tixin */ "../../libs/tixin/src/index.ts");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "../../libs/ngx-http-client/src/lib/core/index.ts");
/* harmony import */ var _http_active_record__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-active-record */ "../../libs/ngx-http-client/src/lib/active-record/http-active-record.ts");
/* tslint:disable:max-line-length */





function ActiveRecord(model) {
    var mixins = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        mixins[_i - 1] = arguments[_i];
    }
    _tdm_data__WEBPACK_IMPORTED_MODULE_2__["plugins"].assertPlugin('ActiveRecord'); // make sure plugin attached
    if (!model) {
        model = /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }());
    }
    /**
     * Marking the mixin HttpActiveRecord for model.
     * Since model is an extending class, it's type will be traversed and looked up for mixins
     * so the deriving class (base) will get all the actions from the HttpActiveRecord
     *
     */
    _tdm_data__WEBPACK_IMPORTED_MODULE_2__["store"].markMixins.apply(_tdm_data__WEBPACK_IMPORTED_MODULE_2__["store"], [model, _core__WEBPACK_IMPORTED_MODULE_3__["HttpAdapter"], _http_active_record__WEBPACK_IMPORTED_MODULE_4__["HttpActiveRecord"]].concat(mixins));
    // we can't send ...mixin to Tixin since the type limits the ..mixins amount
    var result = _tdm_tixin__WEBPACK_IMPORTED_MODULE_0__["Tixin"].apply(void 0, [model, _http_active_record__WEBPACK_IMPORTED_MODULE_4__["HttpActiveRecord"]].concat(mixins));
    var tMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["targetStore"].getTargetMeta(result);
    // if we have a model we are after the class decorator
    if (tMeta.hasModel) {
        tMeta.model().build(true);
    }
    return result;
}
/* FOR TS 2.8+
export type TypeOfActiveRecord<T extends Constructor<any>> = Constructor<ActiveRecord<InstanceType<T>>> & T & HttpActiveRecordStatic<InstanceType<T>> & typeof HttpActiveRecord;

Usage:
@HttpResource({
  endpoint: 'categories'
})
class $Category extends ActiveRecord() implements modelContract.Category {
  @Identity()
  @UrlParam('id')
  @Prop()
  CategoryID: number;

  @Prop()
  CategoryName: string;
}

// export const Category: TypeOfActiveRecord<typeof $Category> = <any> $Category;
// export type Category = InstanceType<typeof Category>;
*/


/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/active-record/http-active-record.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/active-record/http-active-record.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: HttpActiveRecord, ActiveRecordCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpActiveRecord", function() { return HttpActiveRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveRecordCollection", function() { return ActiveRecordCollection; });
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/ngx-http-client/src/lib/metadata/index.ts");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators */ "../../libs/ngx-http-client/src/lib/decorators.ts");
/* harmony import */ var _core_http_dao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/http-dao */ "../../libs/ngx-http-client/src/lib/core/http-dao.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpActiveRecord = /** @class */ (function () {
    function HttpActiveRecord() {
    }
    __decorate([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
            method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Post,
            validation: 'both',
            pre: function (ctx, options) {
                ctx.data = ctx.serialize();
                return options;
            }
        }),
        __metadata("design:type", Function)
    ], HttpActiveRecord.prototype, "$create", void 0);
    __decorate([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
            method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Get,
            validation: 'incoming'
        }),
        __metadata("design:type", Function)
    ], HttpActiveRecord.prototype, "$get", void 0);
    __decorate([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
            method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Put,
            validation: 'both',
            pre: function (ctx, options) {
                ctx.data = ctx.serialize();
                return options;
            }
        }),
        __metadata("design:type", Function)
    ], HttpActiveRecord.prototype, "$update", void 0);
    __decorate([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
            method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Patch,
            validation: 'both',
            pre: function (ctx, options) {
                ctx.data = ctx.serialize();
                return options;
            }
        }),
        __metadata("design:type", Function)
    ], HttpActiveRecord.prototype, "$replace", void 0);
    __decorate([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
            method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Delete,
            validation: 'skip'
        }),
        __metadata("design:type", Function)
    ], HttpActiveRecord.prototype, "$remove", void 0);
    __decorate([
        _core_http_dao__WEBPACK_IMPORTED_MODULE_3__["HttpDAOActions"].query,
        __metadata("design:type", Function)
    ], HttpActiveRecord, "query", void 0);
    __decorate([
        _core_http_dao__WEBPACK_IMPORTED_MODULE_3__["HttpDAOActions"].findById,
        __metadata("design:type", Function)
    ], HttpActiveRecord, "findById", void 0);
    __decorate([
        _core_http_dao__WEBPACK_IMPORTED_MODULE_3__["HttpDAOActions"].find,
        __metadata("design:type", Function)
    ], HttpActiveRecord, "find", void 0);
    __decorate([
        _core_http_dao__WEBPACK_IMPORTED_MODULE_3__["HttpDAOActions"].create,
        __metadata("design:type", Function)
    ], HttpActiveRecord, "create", void 0);
    __decorate([
        _core_http_dao__WEBPACK_IMPORTED_MODULE_3__["HttpDAOActions"].update,
        __metadata("design:type", Function)
    ], HttpActiveRecord, "update", void 0);
    __decorate([
        _core_http_dao__WEBPACK_IMPORTED_MODULE_3__["HttpDAOActions"].replace,
        __metadata("design:type", Function)
    ], HttpActiveRecord, "replace", void 0);
    __decorate([
        _core_http_dao__WEBPACK_IMPORTED_MODULE_3__["HttpDAOActions"].remove,
        __metadata("design:type", Function)
    ], HttpActiveRecord, "remove", void 0);
    return HttpActiveRecord;
}());

var ActiveRecordCollection = _tdm_data__WEBPACK_IMPORTED_MODULE_0__["TDMCollection"];


/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/active-record/index.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/active-record/index.ts ***!
  \**************************************************************************************************************/
/*! exports provided: HttpActiveRecord, ActiveRecordCollection, ActiveRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_active_record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-active-record */ "../../libs/ngx-http-client/src/lib/active-record/http-active-record.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpActiveRecord", function() { return _http_active_record__WEBPACK_IMPORTED_MODULE_0__["HttpActiveRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveRecordCollection", function() { return _http_active_record__WEBPACK_IMPORTED_MODULE_0__["ActiveRecordCollection"]; });

/* harmony import */ var _ar_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ar-mixin */ "../../libs/ngx-http-client/src/lib/active-record/ar-mixin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveRecord", function() { return _ar_mixin__WEBPACK_IMPORTED_MODULE_1__["ActiveRecord"]; });





/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/core/http-adapter.ts":
/*!************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/core/http-adapter.ts ***!
  \************************************************************************************************************/
/*! exports provided: setDefaultFactoryArgs, HttpAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultFactoryArgs", function() { return setDefaultFactoryArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpAdapter", function() { return HttpAdapter; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metadata */ "../../libs/ngx-http-client/src/lib/metadata/index.ts");
/* harmony import */ var _utils_match_pattern__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/match-pattern */ "../../libs/ngx-http-client/src/lib/utils/match-pattern.ts");
/* harmony import */ var _metadata_method_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../metadata/method-mapper */ "../../libs/ngx-http-client/src/lib/metadata/method-mapper.ts");






var defaultFactoryArgs = {
    value: undefined
};
function setDefaultFactoryArgs(args) {
    return (defaultFactoryArgs.value = args);
}
function getFactoryArgs(params) {
    var args = params.factoryArgs || defaultFactoryArgs.value;
    if (!args) {
        throw new Error('HttpClientResourceModule did not init, are you trying to invoke an action before the modules registered?');
    }
    return args;
}
var HttpAdapter = /** @class */ (function () {
    function HttpAdapter() {
        this.supports = { cancel: true };
        this.executing = new Map();
        this.idCount = 1;
    }
    HttpAdapter.prototype.execute = function (ctx, options, params) {
        var _this = this;
        var id = this.idCount++;
        try {
            var _a = getFactoryArgs(params), httpClient_1 = _a.httpClient, defaultConfig = _a.defaultConfig;
            options = options || {};
            var action = ctx.action;
            var resource = ctx.targetMeta.model();
            if (!resource) {
                throw new Error('Http resource not set.');
            }
            var rawUrl = parseRawUrl(resource, action, defaultConfig);
            if (!rawUrl) {
                // TODO: move to @tdm error with more info.
                throw new Error('Invalid endpoint, no endpoint found.');
            }
            var withCredentials = Object(_tdm_data__WEBPACK_IMPORTED_MODULE_2__["findProp"])('withCredentials', defaultConfig, resource, action, options);
            var strip = Object(_tdm_data__WEBPACK_IMPORTED_MODULE_2__["findProp"])('trailingSlashes', defaultConfig, resource, action, options);
            var urlParams = this.getParams(ctx, ctx.targetMeta, resource, options, defaultConfig);
            var _b = this.splitParams(rawUrl, urlParams), path = _b.path, query = _b.query;
            // TODO: this is legacy from `ngx-http`, refactor.
            var method_1 = _metadata_method_mapper__WEBPACK_IMPORTED_MODULE_5__["HttpActionMethodType"][action.methodInfo.source].toUpperCase();
            var url_1 = processUrl(this.parseUrl(rawUrl, path), strip);
            var request_1 = {
                method: method_1,
                url: url_1,
                body: ctx.data,
                headers: this.getHeaders(ctx, resource, options, defaultConfig),
                reportProgress: false,
                observe: 'response',
                params: this.paramsToSearchParams(query),
                responseType: action.postResponseType || 'json',
                withCredentials: withCredentials
            };
            // TODO: TS complains on request so has to force type for it, check why
            var response = new Promise(function (resolve, reject) {
                var httpResponse;
                var subscription = httpClient_1
                    .request(method_1, url_1, request_1)
                    .subscribe(function (v) { return (httpResponse = v); }, function (err) {
                    _this.executing.delete(id);
                    reject(err);
                }, function () {
                    _this.executing.delete(id);
                    resolve({ data: httpResponse.body, response: httpResponse });
                });
                _this.executing.set(id, subscription);
            });
            return { id: id, response: response, request: request_1 };
        }
        catch (err) {
            return { id: id, response: Promise.reject(err) };
        }
    };
    HttpAdapter.prototype.cancel = function (id) {
        var sub = this.executing.get(id);
        if (sub && !sub.closed) {
            sub.unsubscribe();
        }
    };
    HttpAdapter.prototype.getHeaders = function (ctx, resource, options, httpDefaultConfig) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](Object(_tdm_data__WEBPACK_IMPORTED_MODULE_2__["findProp"])('headers', httpDefaultConfig, resource, ctx.action));
        if (options.headers) {
            Object.keys(options.headers).forEach(function (k) {
                if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(options.headers[k])) {
                    headers = headers.delete(k);
                }
                else {
                    headers = headers.set(k, options.headers[k]);
                }
            });
        }
        return headers;
    };
    HttpAdapter.prototype.getParams = function (ctx, meta, resource, options, httpDefaultConfig) {
        var params = Object.assign({}, Object(_tdm_data__WEBPACK_IMPORTED_MODULE_2__["findProp"])('urlParams', httpDefaultConfig, resource, ctx.action));
        if (ctx.instance) {
            // we don't care about the keys (properties) UrlParam is on...
            // TODO: change how UrlParams are stored, instead of target->UrlParamMetadata->propName->Set<UrlParamMetadata>
            // store everything in one set/array to avoid this messy extraction.
            // an alternative is to cache the flattened array.
            var boundParams = meta
                .getValues(_metadata__WEBPACK_IMPORTED_MODULE_3__["UrlParamMetadata"])
                .reduce(function (arr, partial) { return arr.concat(partial); }, []);
            for (var i = 0, len = boundParams.length; i < len; i++) {
                var bp = boundParams[i];
                if (bp.methods.length === 0 ||
                    bp.methods.some(function (mi) { return mi.method === ctx.action.method; })) {
                    params[bp.urlTemplateParamName] = ctx.instance[bp.name];
                }
            }
        }
        if (options.urlParams) {
            Object.assign(params, options.urlParams);
        }
        return params;
    };
    HttpAdapter.prototype.parseUrl = function (url, params) {
        try {
            return Object(_utils_match_pattern__WEBPACK_IMPORTED_MODULE_4__["formatPattern"])(url, params);
        }
        catch (e) {
            throw new Error("URL Parameter Error in " + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["stringify"])(this.constructor) + ": " + e.message);
        }
    };
    /**
     * From a collection of parameters return those belong to the url (path) and those that are not (query).
     * @param url
     * @param params
     * @returns
     */
    HttpAdapter.prototype.splitParams = function (url, params) {
        var pathParamNames = Object(_utils_match_pattern__WEBPACK_IMPORTED_MODULE_4__["getParamNames"])(url);
        return Object.keys(params).reduce(function (splitParams, key) {
            if (!Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(params[key])) {
                if (pathParamNames.indexOf(key) === -1) {
                    splitParams.query[key] = params[key];
                }
                else {
                    splitParams.path[key] = params[key];
                }
            }
            return splitParams;
        }, { path: {}, query: {} });
    };
    HttpAdapter.prototype.paramsToSearchParams = function (params) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({ fromObject: params });
    };
    return HttpAdapter;
}());

function parseRawUrl(resource, action, defaultConfig) {
    var urlParts = [
        defaultConfig.baseUrl,
        action.absolute !== true ? resource.endpoint : '',
        action.endpoint
    ];
    var suffix = '';
    var rawParts = [];
    for (var _i = 0, urlParts_1 = urlParts; _i < urlParts_1.length; _i++) {
        var part = urlParts_1[_i];
        if (part) {
            if (/^.+\/$/.test(part)) {
                suffix = '/';
            }
            var raw = part
                .split('/')
                .filter(function (p) { return !!p; })
                .map(function (u) { return u.replace(/\/(.*(?:\/))\/*/, '$1'); })
                .filter(function (p) { return !!p; });
            rawParts.push.apply(rawParts, raw);
        }
    }
    // TODO: this can be moved to the action, cached there without recalc, only baseUrl might change
    return '/' + rawParts.join('/') + suffix;
}
function processUrl(url, slashes) {
    switch (slashes) {
        case 'strip':
            url = url.replace(/\/+$/, '') || '/';
            break;
        case 'force':
            if (url[url.length - 1] !== '/') {
                url += '/';
            }
            break;
        default:
            break;
    }
    // E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`
    return url.replace(/\/\.(?=\w+($|\?))/, '.').replace(/\/\\\./, '/.'); // replace escaped `/\.` with `/.`
}


/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/core/http-dao.ts":
/*!********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/core/http-dao.ts ***!
  \********************************************************************************************************/
/*! exports provided: HttpDAOActions, HttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpDAOActions", function() { return HttpDAOActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpDao", function() { return HttpDao; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "../../libs/ngx-http-client/src/lib/metadata/index.ts");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators */ "../../libs/ngx-http-client/src/lib/decorators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpDAOActions = {
    query: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
        method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Get,
        isCollection: true,
        collInstance: true,
        validation: 'incoming',
        alias: 'findAll'
    }),
    findById: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
        method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Get,
        validation: 'incoming',
        pre: function (ctx, id, options) {
            ctx.setIdentity(id);
            return options;
        }
    }),
    find: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
        method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Get,
        validation: 'incoming',
        alias: 'findOne'
    }),
    create: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
        method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Post,
        validation: 'both',
        pre: function (ctx, data, options) {
            if (ctx.instanceOf(data)) {
                ctx.setInstance(data);
            }
            else {
                ctx.deserialize(data);
            }
            ctx.data = ctx.serialize();
            return options;
        }
    }),
    update: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
        method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Put,
        validation: 'both',
        pre: function (ctx, data, options) {
            if (ctx.instanceOf(data)) {
                ctx.setInstance(data);
            }
            else {
                ctx.deserialize(data);
            }
            ctx.data = ctx.serialize();
            return options;
        }
    }),
    replace: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
        method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Patch,
        validation: 'both',
        pre: function (ctx, data, options) {
            if (ctx.instanceOf(data)) {
                ctx.setInstance(data);
            }
            else {
                ctx.deserialize(data);
            }
            ctx.data = ctx.serialize();
            return options;
        }
    }),
    remove: Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"])({
        method: _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"].Delete,
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
    })
};
var HttpDao = /** @class */ (function () {
    function HttpDao() {
    }
    __decorate([
        HttpDAOActions.query,
        __metadata("design:type", Function)
    ], HttpDao.prototype, "query", void 0);
    __decorate([
        HttpDAOActions.findById,
        __metadata("design:type", Function)
    ], HttpDao.prototype, "findById", void 0);
    __decorate([
        HttpDAOActions.find,
        __metadata("design:type", Function)
    ], HttpDao.prototype, "find", void 0);
    __decorate([
        HttpDAOActions.create,
        __metadata("design:type", Function)
    ], HttpDao.prototype, "create", void 0);
    __decorate([
        HttpDAOActions.update,
        __metadata("design:type", Function)
    ], HttpDao.prototype, "update", void 0);
    __decorate([
        HttpDAOActions.replace,
        __metadata("design:type", Function)
    ], HttpDao.prototype, "replace", void 0);
    __decorate([
        HttpDAOActions.remove,
        __metadata("design:type", Function)
    ], HttpDao.prototype, "remove", void 0);
    return HttpDao;
}());



/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/core/index.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/core/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: HttpAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-adapter */ "../../libs/ngx-http-client/src/lib/core/http-adapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpAdapter", function() { return _http_adapter__WEBPACK_IMPORTED_MODULE_0__["HttpAdapter"]; });




/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/decorators.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/decorators.ts ***!
  \*****************************************************************************************************/
/*! exports provided: HttpAction, UrlParam, HttpResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpAction", function() { return HttpAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlParam", function() { return UrlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResource", function() { return HttpResource; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../libs/ngx-http-client/src/lib/core/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "../../libs/ngx-http-client/src/lib/metadata/index.ts");



/**
 * @propertyDecorator both
 * @param def
 */
var HttpAction = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_2__["HttpActionMetadata"]);
/**
 * @propertyDecorator instance
 * @param metaArgs
 */
var UrlParam = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].decorator(_metadata__WEBPACK_IMPORTED_MODULE_2__["UrlParamMetadata"], true);
// FOR AOT
var httpResource = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"].get(_metadata__WEBPACK_IMPORTED_MODULE_2__["HttpResourceMetadata"]).createResourceDecorator(_core__WEBPACK_IMPORTED_MODULE_1__["HttpAdapter"]);
/**
 * @classDecorator
 * @param def
 */
function HttpResource(def) {
    if (!def.endpoint) {
        throw new Error('Resource endpoint is mandatory.');
    }
    // apply logic to set a default skip when not set, if the base class has no registered HttpAdapter then defer.
    if (def.hasOwnProperty('skip')) {
        return httpResource(def);
    }
    else {
        return function (target) {
            var baseClass = Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["getBaseClass"])(target);
            if (!baseClass || baseClass === Object) {
                def.skip = true;
            }
            else {
                var tMeta = _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["targetStore"].getTargetMeta(baseClass);
                if (tMeta && tMeta.hasAdapter(_core__WEBPACK_IMPORTED_MODULE_1__["HttpAdapter"])) {
                    def.skip = true;
                }
            }
            return httpResource(def)(target);
        };
    }
}


/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/http-default-config.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/http-default-config.ts ***!
  \**************************************************************************************************************/
/*! exports provided: HttpDefaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpDefaultConfig", function() { return HttpDefaultConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HttpDefaultConfig = /** @class */ (function () {
    function HttpDefaultConfig() {
        /**
         * Optional set of pre-bound parameters all actions in this resource.
         *
         * @optional
         * @default {}
         */
        this.urlParams = {};
        /**
         * An object containing any HTTP headers that you want to pre-populate your Headers object with.
         *
         * @optional
         * @default {}
         */
        this.headers = {};
        /**
         * Set the XMLHttpRequest.withCredentials property.
         *
         * @See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
         *
         * @optional
         * @default false
         */
        this.withCredentials = false;
        /**
         * Trailing slashes strategy to use.
         *
         *   - **ignore**: leave calculated URL as is.
         *   - **force**:  ensure the calculated URL ens with a trailing slash
         *   - **strip**: remove all trailing slashes from the calculated URL
         *
         * @optional
         * @default 'ignore'
         */
        this.trailingSlashes = 'ignore';
    }
    HttpDefaultConfig_1 = HttpDefaultConfig;
    HttpDefaultConfig.create = function (config) {
        var cfg = new HttpDefaultConfig_1();
        if (config) {
            Object.assign(cfg, config);
        }
        return cfg;
    };
    HttpDefaultConfig = HttpDefaultConfig_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpDefaultConfig);
    return HttpDefaultConfig;
    var HttpDefaultConfig_1;
}());



/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/index.ts":
/*!************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/index.ts ***!
  \************************************************************************************************/
/*! exports provided: HttpActionMethodType, HttpAction, UrlParam, HttpResource, NgDAO, HttpDefaultConfig, HttpClientResourceModule, ActiveRecord, ActiveRecordCollection, HttpActiveRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metadata */ "../../libs/ngx-http-client/src/lib/metadata/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpActionMethodType", function() { return _metadata__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators */ "../../libs/ngx-http-client/src/lib/decorators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpAction", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["HttpAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlParam", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["UrlParam"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpResource", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["HttpResource"]; });

/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "../../libs/ngx-http-client/src/lib/register.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgDAO", function() { return _register__WEBPACK_IMPORTED_MODULE_3__["NgDAO"]; });

/* harmony import */ var _http_default_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-default-config */ "../../libs/ngx-http-client/src/lib/http-default-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpDefaultConfig", function() { return _http_default_config__WEBPACK_IMPORTED_MODULE_4__["HttpDefaultConfig"]; });

/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module */ "../../libs/ngx-http-client/src/lib/module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClientResourceModule", function() { return _module__WEBPACK_IMPORTED_MODULE_5__["HttpClientResourceModule"]; });

/* harmony import */ var _active_record__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./active-record */ "../../libs/ngx-http-client/src/lib/active-record/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveRecord", function() { return _active_record__WEBPACK_IMPORTED_MODULE_6__["ActiveRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveRecordCollection", function() { return _active_record__WEBPACK_IMPORTED_MODULE_6__["ActiveRecordCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpActiveRecord", function() { return _active_record__WEBPACK_IMPORTED_MODULE_6__["HttpActiveRecord"]; });




// TODO: solve this circular dependency hell






/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/metadata/action.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/metadata/action.ts ***!
  \**********************************************************************************************************/
/*! exports provided: HttpActionMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpActionMetadata", function() { return HttpActionMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "../../libs/ngx-http-client/src/lib/core/index.ts");
/* harmony import */ var _method_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./method-mapper */ "../../libs/ngx-http-client/src/lib/metadata/method-mapper.ts");
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




var HttpActionMetadata = /** @class */ (function (_super) {
    __extends(HttpActionMetadata, _super);
    function HttpActionMetadata(obj, info) {
        var _this = _super.call(this, obj, info) || this;
        if (!obj.hasOwnProperty('method')) {
            throw new Error('Resource Action method is mandatory.');
        }
        _this.methodInfo = Object(_method_mapper__WEBPACK_IMPORTED_MODULE_3__["mapMethod"])(obj.method);
        _this.method = _this.methodInfo.method;
        if (_this.postResponseType && (!_this.post || !_this.post.returns)) {
            throw new Error('"postResponseType" can only be set when using a "post" handler with "returns" set to true');
        }
        if (_this.absolute === true && !_this.endpoint) {
            throw new Error('When setting absolute to true an endpoint is mandatory');
        }
        return _this;
    }
    HttpActionMetadata.adapterClass = _core__WEBPACK_IMPORTED_MODULE_2__["HttpAdapter"];
    HttpActionMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['staticMember', 'member'],
            extend: 'actionMetadata',
            register: 'actionMetadata'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], HttpActionMetadata);
    return HttpActionMetadata;
}(_tdm_data__WEBPACK_IMPORTED_MODULE_1__["ActionMetadata"]));



/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/metadata/index.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/metadata/index.ts ***!
  \*********************************************************************************************************/
/*! exports provided: HttpResourceMetadata, HttpActionMethodType, HttpActionMetadata, UrlParamMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "../../libs/ngx-http-client/src/lib/metadata/resource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpResourceMetadata", function() { return _resource__WEBPACK_IMPORTED_MODULE_0__["HttpResourceMetadata"]; });

/* harmony import */ var _method_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./method-mapper */ "../../libs/ngx-http-client/src/lib/metadata/method-mapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpActionMethodType", function() { return _method_mapper__WEBPACK_IMPORTED_MODULE_1__["HttpActionMethodType"]; });

/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "../../libs/ngx-http-client/src/lib/metadata/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpActionMetadata", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["HttpActionMetadata"]; });

/* harmony import */ var _url_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url-params */ "../../libs/ngx-http-client/src/lib/metadata/url-params.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlParamMetadata", function() { return _url_params__WEBPACK_IMPORTED_MODULE_3__["UrlParamMetadata"]; });







/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/metadata/method-mapper.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/metadata/method-mapper.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: HttpActionMethodType, mapMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpActionMethodType", function() { return HttpActionMethodType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMethod", function() { return mapMethod; });
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");

var HttpActionMethodType;
(function (HttpActionMethodType) {
    HttpActionMethodType[HttpActionMethodType["Get"] = 0] = "Get";
    HttpActionMethodType[HttpActionMethodType["Post"] = 1] = "Post";
    HttpActionMethodType[HttpActionMethodType["Put"] = 2] = "Put";
    HttpActionMethodType[HttpActionMethodType["Delete"] = 3] = "Delete";
    HttpActionMethodType[HttpActionMethodType["Options"] = 4] = "Options";
    HttpActionMethodType[HttpActionMethodType["Head"] = 5] = "Head";
    HttpActionMethodType[HttpActionMethodType["Patch"] = 6] = "Patch";
})(HttpActionMethodType || (HttpActionMethodType = {}));
var METHOD_MAP = (_a = {},
    _a[HttpActionMethodType.Get] = _tdm_data__WEBPACK_IMPORTED_MODULE_0__["ActionMethodType"].READ,
    _a[HttpActionMethodType.Post] = _tdm_data__WEBPACK_IMPORTED_MODULE_0__["ActionMethodType"].CREATE,
    _a[HttpActionMethodType.Put] = _tdm_data__WEBPACK_IMPORTED_MODULE_0__["ActionMethodType"].REPLACE,
    _a[HttpActionMethodType.Delete] = _tdm_data__WEBPACK_IMPORTED_MODULE_0__["ActionMethodType"].DELETE,
    _a[HttpActionMethodType.Patch] = _tdm_data__WEBPACK_IMPORTED_MODULE_0__["ActionMethodType"].UPDATE,
    _a);
function mapMethod(method) {
    var mapped = METHOD_MAP[method];
    return {
        source: method,
        method: typeof mapped === 'undefined' ? _tdm_data__WEBPACK_IMPORTED_MODULE_0__["ActionMethodType"].LOCAL : mapped,
        local: typeof mapped === 'undefined'
    };
}
var _a;


/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/metadata/resource.ts":
/*!************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/metadata/resource.ts ***!
  \************************************************************************************************************/
/*! exports provided: HttpResourceMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResourceMetadata", function() { return HttpResourceMetadata; });
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

var HttpResourceMetadata = /** @class */ (function (_super) {
    __extends(HttpResourceMetadata, _super);
    function HttpResourceMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HttpResourceMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            inherit: _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["ModelMetadata"]
        })
    ], HttpResourceMetadata);
    return HttpResourceMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["ModelMetadata"]));



/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/metadata/url-params.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/metadata/url-params.ts ***!
  \**************************************************************************************************************/
/*! exports provided: UrlParamMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlParamMetadata", function() { return UrlParamMetadata; });
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _method_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./method-mapper */ "../../libs/ngx-http-client/src/lib/metadata/method-mapper.ts");
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


var UrlParamMetadata = /** @class */ (function (_super) {
    __extends(UrlParamMetadata, _super);
    function UrlParamMetadata(metaArgs, info) {
        var _this = _super.call(this, info) || this;
        _this.methods = [];
        var urlParamsMeta = {};
        if (Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["isString"])(metaArgs)) {
            Object.assign(urlParamsMeta, { urlTemplateParamName: metaArgs });
        }
        else {
            if (metaArgs) {
                Object.assign(urlParamsMeta, metaArgs);
            }
            if (!urlParamsMeta.urlTemplateParamName) {
                urlParamsMeta.urlTemplateParamName = info.name;
            }
        }
        Object.assign(_this, urlParamsMeta);
        if (urlParamsMeta.methods) {
            var methods = Array.isArray(urlParamsMeta.methods)
                ? urlParamsMeta.methods
                : Array.of(urlParamsMeta.methods);
            _this.methods = methods.map(_method_mapper__WEBPACK_IMPORTED_MODULE_1__["mapMethod"]);
        }
        else {
            _this.methods = [];
        }
        return _this;
    }
    UrlParamMetadata = __decorate([
        Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["MetaClass"])({
            allowOn: ['member'],
            extend: 'mergeMapArray',
            register: 'array',
            proxy: {
                host: _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["PropMetadata"],
                containerKey: 'urlParam'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], UrlParamMetadata);
    return UrlParamMetadata;
}(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_0__["BaseMetadata"]));



/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/module.ts":
/*!*************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/module.ts ***!
  \*************************************************************************************************/
/*! exports provided: HttpClientResourceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientResourceModule", function() { return HttpClientResourceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_http_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/http-adapter */ "../../libs/ngx-http-client/src/lib/core/http-adapter.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "../../libs/ngx-http-client/src/lib/register.ts");
/* harmony import */ var _http_default_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-default-config */ "../../libs/ngx-http-client/src/lib/http-default-config.ts");
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





var HttpClientResourceModule = /** @class */ (function () {
    function HttpClientResourceModule(httpClient, defaultConfig) {
        if (!httpClient) {
            throw new Error('HttpClientResourceModule could not access HttpClient, did you import HttpClientModule?');
        }
        // every module, we set the last http client.
        Object(_core_http_adapter__WEBPACK_IMPORTED_MODULE_2__["setDefaultFactoryArgs"])({
            httpClient: httpClient,
            defaultConfig: defaultConfig || new _http_default_config__WEBPACK_IMPORTED_MODULE_4__["HttpDefaultConfig"]()
        });
    }
    HttpClientResourceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_register__WEBPACK_IMPORTED_MODULE_3__["NgDAO"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _http_default_config__WEBPACK_IMPORTED_MODULE_4__["HttpDefaultConfig"]])
    ], HttpClientResourceModule);
    return HttpClientResourceModule;
}());



/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/register.ts":
/*!***************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/register.ts ***!
  \***************************************************************************************************/
/*! exports provided: NgDAO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDAO", function() { return NgDAO; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _http_default_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-default-config */ "../../libs/ngx-http-client/src/lib/http-default-config.ts");
/* harmony import */ var _core_http_dao__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/http-dao */ "../../libs/ngx-http-client/src/lib/core/http-dao.ts");
/* harmony import */ var _core_http_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/http-adapter */ "../../libs/ngx-http-client/src/lib/core/http-adapter.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metadata */ "../../libs/ngx-http-client/src/lib/metadata/index.ts");
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








_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_2__["targetStore"].registerAdapter(_core_http_adapter__WEBPACK_IMPORTED_MODULE_6__["HttpAdapter"], {
    actionMetaClass: _metadata__WEBPACK_IMPORTED_MODULE_7__["HttpActionMetadata"],
    DAOClass: _core_http_dao__WEBPACK_IMPORTED_MODULE_5__["HttpDao"],
    resourceMetaClass: _metadata__WEBPACK_IMPORTED_MODULE_7__["HttpResourceMetadata"]
});
/**
 * An HttpDAO factory based for a target.
 */
var NgDAO = /** @class */ (function () {
    function NgDAO(httpClient, defaultConfig) {
        this.factoryArgs = {
            httpClient: httpClient,
            defaultConfig: defaultConfig || new _http_default_config__WEBPACK_IMPORTED_MODULE_4__["HttpDefaultConfig"]()
        };
    }
    NgDAO.prototype.get = function (target) {
        return _tdm_data__WEBPACK_IMPORTED_MODULE_3__["DAO"].of(_core_http_adapter__WEBPACK_IMPORTED_MODULE_6__["HttpAdapter"], target, this.factoryArgs);
    };
    NgDAO = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _http_default_config__WEBPACK_IMPORTED_MODULE_4__["HttpDefaultConfig"]])
    ], NgDAO);
    return NgDAO;
}());



/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/utils/match-pattern.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/utils/match-pattern.ts ***!
  \**************************************************************************************************************/
/*! exports provided: getRegexp, getCompiled, matchPattern, getParamNames, makeParams, getParams, formatPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegexp", function() { return getRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompiled", function() { return getCompiled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPattern", function() { return matchPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParamNames", function() { return getParamNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeParams", function() { return makeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return getParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPattern", function() { return formatPattern; });
/* harmony import */ var _path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path-to-regexp */ "../../libs/ngx-http-client/src/lib/utils/path-to-regexp.ts");

var REGEXP_CACHE = new Map();
var COMPILED_CACHE = new Map();
function getRegexp(pattern) {
    if (!REGEXP_CACHE.has(pattern)) {
        var keys = [];
        var regexp = Object(_path_to_regexp__WEBPACK_IMPORTED_MODULE_0__["pathToRegexp"])(pattern, keys, { end: false });
        REGEXP_CACHE.set(pattern, { keys: keys, regexp: regexp });
    }
    return REGEXP_CACHE.get(pattern);
}
function getCompiled(pattern) {
    if (!COMPILED_CACHE.has(pattern)) {
        COMPILED_CACHE.set(pattern, Object(_path_to_regexp__WEBPACK_IMPORTED_MODULE_0__["compile"])(pattern));
    }
    return COMPILED_CACHE.get(pattern);
}
function matchPattern(pattern, pathname) {
    if (pattern.charAt(0) !== '/') {
        pattern = "/" + pattern;
    }
    var compiled = getRegexp(pattern);
    var match = compiled.regexp.exec(pathname);
    if (!match) {
        return {
            remainingPathname: null,
            paramNames: [],
            paramValues: []
        };
    }
    return {
        remainingPathname: pathname.substr(match[0].length),
        paramNames: compiled.keys.map(function (key) { return key.name; }),
        paramValues: match.slice(1).map(function (value) { return value && decodeURIComponent(value); })
    };
}
function getParamNames(pattern) {
    return getRegexp(pattern).keys.map(function (key) { return key.name; });
}
function makeParams(paramNames, paramValues) {
    var params = {};
    var lastIndex = 0;
    if (Array.isArray(paramValues)) {
        paramNames.forEach(function (paramName, index) {
            if (typeof paramName === 'number') {
                paramName = lastIndex++;
            }
            params[paramName] = paramValues[index];
        });
    }
    return params;
}
function getParams(pattern, pathname) {
    var _a = matchPattern(pattern, pathname), remainingPathname = _a.remainingPathname, paramNames = _a.paramNames, paramValues = _a.paramValues;
    if (remainingPathname === null) {
        return null;
    }
    return makeParams(paramNames, paramValues);
}
function formatPattern(pattern, params) {
    if (params === void 0) { params = {}; }
    return getCompiled(pattern)(params);
}


/***/ }),

/***/ "../../libs/ngx-http-client/src/lib/utils/path-to-regexp.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/libs/ngx-http-client/src/lib/utils/path-to-regexp.ts ***!
  \***************************************************************************************************************/
/*! exports provided: parse, compile, tokensToFunction, tokensToRegExp, pathToRegexp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToFunction", function() { return tokensToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToRegExp", function() { return tokensToRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToRegexp", function() { return pathToRegexp; });
/**
 * The main path matching regexp utility.
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
].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = (options && options.delimiter) || '/';
    var res;
    while ((res = PATH_REGEXP.exec(str)) != null) {
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        // Ignore already escaped sequences.
        if (escaped) {
            path += escaped[1];
            continue;
        }
        var next = str[index];
        var prefix = res[2];
        var name = res[3];
        var capture = res[4];
        var group = res[5];
        var modifier = res[6];
        var asterisk = res[7];
        // Push the current path onto the tokens.
        if (path) {
            tokens.push(path);
            path = '';
        }
        var partial = prefix != null && next != null && next !== prefix;
        var repeat = modifier === '+' || modifier === '*';
        var optional = modifier === '?' || modifier === '*';
        var delimiter = res[2] || defaultDelimiter;
        var pattern = capture || group;
        tokens.push({
            name: name || key++,
            prefix: prefix || '',
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            partial: partial,
            asterisk: !!asterisk,
            pattern: pattern
                ? escapeGroup(pattern)
                : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
        });
    }
    // Match any characters still remaining.
    if (index < str.length) {
        path += str.substr(index);
    }
    // If the path exists, push it onto the end.
    if (path) {
        tokens.push(path);
    }
    return tokens;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options));
}
/**
 * Prettier encoding of URI path segments.
 */
function encodeURIComponentPretty(str) {
    return encodeURI(str).replace(/[\/?#]/g, function (c) {
        return ('%' +
            c
                .charCodeAt(0)
                .toString(16)
                .toUpperCase());
    });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 */
function encodeAsterisk(str) {
    return encodeURI(str).replace(/[?#]/g, function (c) {
        return ('%' +
            c
                .charCodeAt(0)
                .toString(16)
                .toUpperCase());
    });
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);
    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] === 'object') {
            matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
        }
    }
    return function (obj, opts) {
        var path = '';
        var data = obj || {};
        var options = opts || {};
        var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === 'string') {
                path += token;
                continue;
            }
            var value = data[token.name];
            var segment;
            if (value == null) {
                if (token.optional) {
                    // Prepend partial segment prefixes.
                    if (token.partial) {
                        path += token.prefix;
                    }
                    continue;
                }
                else {
                    throw new TypeError('Expected "' + token.name + '" to be defined');
                }
            }
            if (Array.isArray(value)) {
                if (!token.repeat) {
                    throw new TypeError('Expected "' +
                        token.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(value) +
                        '`');
                }
                if (value.length === 0) {
                    if (token.optional) {
                        continue;
                    }
                    else {
                        throw new TypeError('Expected "' + token.name + '" to not be empty');
                    }
                }
                for (var j = 0; j < value.length; j++) {
                    segment = encode(value[j]);
                    if (!matches[i].test(segment)) {
                        throw new TypeError('Expected all "' +
                            token.name +
                            '" to match "' +
                            token.pattern +
                            '", but received `' +
                            JSON.stringify(segment) +
                            '`');
                    }
                    path += (j === 0 ? token.prefix : token.delimiter) + segment;
                }
                continue;
            }
            segment = token.asterisk ? encodeAsterisk(value) : encode(value);
            if (!matches[i].test(segment)) {
                throw new TypeError('Expected "' +
                    token.name +
                    '" to match "' +
                    token.pattern +
                    '", but received "' +
                    segment +
                    '"');
            }
            path += token.prefix + segment;
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 */
function escapeGroup(group) {
    return group.replace(/([=!:$\/()])/g, '\\$1');
}
/**
 * Attach the keys as a property of the regexp.
 */
function attachKeys(re, keys) {
    re.keys = keys;
    return re;
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
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
            });
        }
    }
    return attachKeys(path, keys);
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(path, keys, options) {
    var parts = [];
    for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp(path[i], keys, options).source);
    }
    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
    return attachKeys(regexp, keys);
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegExp(tokens, keys, options) {
    if (!Array.isArray(keys)) {
        options = /** @type {!Object} */ (keys || options);
        keys = [];
    }
    options = options || {};
    var strict = options.strict;
    var end = options.end !== false;
    var route = '';
    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (typeof token === 'string') {
            route += escapeString(token);
        }
        else {
            var prefix = escapeString(token.prefix);
            var capture = '(?:' + token.pattern + ')';
            keys.push(token);
            if (token.repeat) {
                capture += '(?:' + prefix + capture + ')*';
            }
            if (token.optional) {
                if (!token.partial) {
                    capture = '(?:' + prefix + '(' + capture + '))?';
                }
                else {
                    capture = prefix + '(' + capture + ')?';
                }
            }
            else {
                capture = prefix + '(' + capture + ')';
            }
            route += capture;
        }
    }
    var delimiter = escapeString(options.delimiter || '/');
    var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
        route =
            (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) +
                '(?:' +
                delimiter +
                '(?=$))?';
    }
    if (end) {
        route += '$';
    }
    else {
        // In non-ending mode, we need the capturing groups to match as much as
        // possible by using a positive lookahead to the end or next path segment.
        route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
    }
    return attachKeys(new RegExp('^' + route, flags(options)), keys);
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (!Array.isArray(keys)) {
        options = /** @type {!Object} */ (keys || options);
        keys = [];
    }
    options = options || {};
    if (path instanceof RegExp) {
        return regexpToRegexp(path, /** @type {!Array} */ (keys));
    }
    if (Array.isArray(path)) {
        return arrayToRegexp(
        /** @type {!Array} */ (path), 
        /** @type {!Array} */ (keys), options);
    }
    return stringToRegexp(
    /** @type {string} */ (path), 
    /** @type {!Array} */ (keys), options);
}


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

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"@forms": [
		"./src/modules/@forms/module.ts",
		"common",
		"forms"
	],
	"@http": [
		"./src/modules/@http/module.ts",
		"http~northwind-app",
		"common",
		"http"
	],
	"@northwind-app": [
		"./src/modules/@northwind-app/module.ts",
		"http~northwind-app",
		"common",
		"northwind-app"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/init-tdm.ts":
/*!*************************!*\
  !*** ./src/init-tdm.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tdm_data_plugin_active_record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tdm/data/plugin/active-record */ "../../libs/data/plugin/active-record/src/index.ts");
/* harmony import */ var _tdm_data_plugin_control_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/data/plugin/control-flow */ "../../libs/data/plugin/control-flow/src/index.ts");
/* harmony import */ var _tdm_data_plugin_rx_resource_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tdm/data/plugin/rx-resource-control */ "../../libs/data/plugin/rx-resource-control/src/index.ts");
/* harmony import */ var _tdm_data_plugin_active_record_lib_$rc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tdm/data/plugin/active-record/lib/$rc */ "../../libs/data/plugin/active-record/src/lib/$rc.ts");
/* harmony import */ var _tdm_data_plugin_active_record_lib_$rc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tdm_data_plugin_active_record_lib_$rc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tdm_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tdm/data */ "../../libs/data/src/index.ts");
// adding the active record plugin, this will give the models the ability to perform CRUD operations on themselves.
// This adds the runtime logic to register actions on a type.
// To add design time TypeScript support and declare target actions use an adapter specific mixin
// for example: ActiveRecord from @tdm/ngx--client-http


// adding a resource controller, an object that allows resource instance management.
// Event stream, self$ stream, promise for next result, replay last action, cancellation and more.
// The resource control instance is available via a getter on the ResourceControl: ResourceControl.get(instance)

/**
 * Design time information added to models/collection to get the resource control instance.
 * This has no logical implication, just a property on the model/collection instances to easily get the resource control instance.
 */


// initializing the plugins.
_tdm_data__WEBPACK_IMPORTED_MODULE_4__["plugins"].RxResourceControl.init();
_tdm_data__WEBPACK_IMPORTED_MODULE_4__["plugins"].ActiveRecord.init({ resourceControl: '$rc' });
_tdm_data__WEBPACK_IMPORTED_MODULE_4__["plugins"].ResourceControlFlow.init();


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _init_tdm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init-tdm */ "./src/init-tdm.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app */ "./src/modules/@app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/modules/@app/app.component.html":
/*!*********************************************!*\
  !*** ./src/modules/@app/app.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tdm-app mat-typography\">\n  <div class=\"tdm-navbar mat-elevation-z8\">\n    <mat-toolbar color=\"primary\">\n      <a class=\"title\" [routerLink]=\" ['.'] \" routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">@TDM</a>\n      <a *ngFor=\"let navItem of topNavService.navItems$ | async\"\n         class=\"tdm-top-nav-link\" mat-button\n         [routerLink]=\"navItem.routerLink.routerLink\" routerLinkActive=\"active\" [routerLinkActiveOptions]= \"navItem.routerLinkActiveOptions || {}\">\n        <img *ngIf=\"navItem.imgIconSrc\" [src]=\"navItem.imgIconSrc\" />\n        {{navItem.title}}\n      </a>\n    </mat-toolbar>\n  </div>\n  <main>\n    <div class=\"main-view\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/modules/@app/app.component.scss":
/*!*********************************************!*\
  !*** ./src/modules/@app/app.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tdm-app {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 64px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1; }\n\n.tdm-navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n\n.tdm-navbar .title {\n    margin-right: 25px; }\n\nmain {\n  height: 100%;\n  width: 100%; }\n\nmain .main-view {\n    flex: 1;\n    height: 100%;\n    width: 100%; }\n\nmain .main-view router-outlet + * {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      width: 100%; }\n\n.title {\n  color: white;\n  text-decoration: none; }\n\n.tdm-top-nav-link img {\n  height: 26px;\n  vertical-align: middle;\n  margin: 0 4px 3px 0; }\n\n.tdm-top-nav-link.active {\n  background: rgba(0, 0, 0, 0.1); }\n"

/***/ }),

/***/ "./src/modules/@app/app.component.ts":
/*!*******************************************!*\
  !*** ./src/modules/@app/app.component.ts ***!
  \*******************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(topNavService) {
        this.topNavService = topNavService;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./app.component.html */ "./src/modules/@app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/modules/@app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["TopNavService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/modules/@app/app.module.ts":
/*!****************************************!*\
  !*** ./src/modules/@app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "./src/modules/@shared/index.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/modules/@app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/modules/@app/app.component.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "./src/modules/@app/home/index.ts");
/* harmony import */ var _no_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./no-content */ "./src/modules/@app/no-content/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// App is our top level component



// we first include material-core then styles because styles has @imports that needs to come after material core
// but material core is not an import but a sass @include so we can control the order
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _no_content__WEBPACK_IMPORTED_MODULE_7__["NoContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"], { useHash: true, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"].forRoot()
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/modules/@app/app.routes.ts":
/*!****************************************!*\
  !*** ./src/modules/@app/app.routes.ts ***!
  \****************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/modules/@app/home/index.ts");
/* harmony import */ var _no_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-content */ "./src/modules/@app/no-content/index.ts");


var ROUTES = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'forms', loadChildren: '@forms#FormsAppModule' },
    // { path: 'playground', loadChildren: '@playground#PlaygroundModule' },
    { path: 'ngx-http', loadChildren: '@http#NgxHttpAppModule' },
    { path: 'northwind-app', loadChildren: '@northwind-app#NorthwindAppModule' },
    { path: '**', component: _no_content__WEBPACK_IMPORTED_MODULE_1__["NoContentComponent"] },
];


/***/ }),

/***/ "./src/modules/@app/home/home.component.css":
/*!**************************************************!*\
  !*** ./src/modules/@app/home/home.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*styles for home content only*/\n"

/***/ }),

/***/ "./src/modules/@app/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/modules/@app/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tdm-page-content\">\n  <h1>Type Data Models</h1>\n  <h3>Documentation is WIP</h3>\n  <a [routerLink]=\"['./forms']\">Click for Dynamic Forms</a>\n</div>\n"

/***/ }),

/***/ "./src/modules/@app/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/modules/@app/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/modules/@app/home/home.component.css")],
            template: __webpack_require__(/*! ./home.component.html */ "./src/modules/@app/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/modules/@app/home/index.ts":
/*!****************************************!*\
  !*** ./src/modules/@app/home/index.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/modules/@app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/modules/@app/index.ts":
/*!***********************************!*\
  !*** ./src/modules/@app/index.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ "./src/modules/@app/app.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return _app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"]; });




/***/ }),

/***/ "./src/modules/@app/no-content/index.ts":
/*!**********************************************!*\
  !*** ./src/modules/@app/no-content/index.ts ***!
  \**********************************************/
/*! exports provided: NoContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _no_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-content.component */ "./src/modules/@app/no-content/no-content.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoContentComponent", function() { return _no_content_component__WEBPACK_IMPORTED_MODULE_0__["NoContentComponent"]; });




/***/ }),

/***/ "./src/modules/@app/no-content/no-content.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/@app/no-content/no-content.component.ts ***!
  \*************************************************************/
/*! exports provided: NoContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoContentComponent", function() { return NoContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoContentComponent = /** @class */ (function () {
    function NoContentComponent() {
    }
    NoContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'no-content',
            template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
        })
    ], NoContentComponent);
    return NoContentComponent;
}());



/***/ }),

/***/ "./src/modules/@shared/cdk-detail-row.directive.ts":
/*!*********************************************************!*\
  !*** ./src/modules/@shared/cdk-detail-row.directive.ts ***!
  \*********************************************************/
/*! exports provided: CdkDetailRowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDetailRowDirective", function() { return CdkDetailRowDirective; });
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

var CdkDetailRowDirective = /** @class */ (function () {
    function CdkDetailRowDirective(vcRef) {
        this.vcRef = vcRef;
    }
    Object.defineProperty(CdkDetailRowDirective.prototype, "expended", {
        get: function () {
            return this.opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDetailRowDirective.prototype, "cdkDetailRow", {
        set: function (value) {
            if (value !== this.row) {
                this.row = value;
                // this.render();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDetailRowDirective.prototype, "template", {
        set: function (value) {
            if (value !== this.tRef) {
                this.tRef = value;
                // this.render();
            }
        },
        enumerable: true,
        configurable: true
    });
    CdkDetailRowDirective.prototype.onClick = function () {
        this.toggle();
    };
    CdkDetailRowDirective.prototype.toggle = function () {
        if (this.opened) {
            this.vcRef.clear();
        }
        else {
            this.render();
        }
        this.opened = this.vcRef.length > 0;
    };
    CdkDetailRowDirective.prototype.render = function () {
        this.vcRef.clear();
        if (this.tRef && this.row) {
            this.vcRef.createEmbeddedView(this.tRef, { $implicit: this.row });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.expanded'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], CdkDetailRowDirective.prototype, "expended", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CdkDetailRowDirective.prototype, "cdkDetailRow", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('cdkDetailRowTpl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], CdkDetailRowDirective.prototype, "template", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CdkDetailRowDirective.prototype, "onClick", null);
    CdkDetailRowDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[cdkDetailRow]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], CdkDetailRowDirective);
    return CdkDetailRowDirective;
}());



/***/ }),

/***/ "./src/modules/@shared/components/code-view/code-view.component.html":
/*!***************************************************************************!*\
  !*** ./src/modules/@shared/components/code-view/code-view.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-tab-group *ngIf=\"multi\">\n    <ng-container *ngFor=\"let c of code\">\n      <mat-tab *ngIf=\"c.code\">\n        <ng-template mat-tab-label>\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" [matTooltip]=\"c.title && c.file\">\n            <span>{{c.title || c.file}} [{{c.lang.toUpperCase()}}]</span>\n          </div>\n        </ng-template>\n        <div class=\"tdm-code-example\">\n          <pre><code [innerHtml]=\"c.code\"></code></pre>\n        </div>\n      </mat-tab>\n    </ng-container>\n  </mat-tab-group>\n  <div class=\"tdm-code-example\" *ngIf=\"code && !multi\">\n    <pre><code [innerHtml]=\"code.code\"></code></pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/modules/@shared/components/code-view/code-view.component.scss":
/*!***************************************************************************!*\
  !*** ./src/modules/@shared/components/code-view/code-view.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tdm-code-example {\n  margin: 10px;\n  padding: 15px;\n  max-height: 65vh;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/modules/@shared/components/code-view/code-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/@shared/components/code-view/code-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: TdmCodeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdmCodeViewComponent", function() { return TdmCodeViewComponent; });
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

var TdmCodeViewComponent = /** @class */ (function () {
    function TdmCodeViewComponent() {
    }
    TdmCodeViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.code) {
            this.multi = Array.isArray(this.code);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TdmCodeViewComponent.prototype, "code", void 0);
    TdmCodeViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tdm-code-view',
            template: __webpack_require__(/*! ./code-view.component.html */ "./src/modules/@shared/components/code-view/code-view.component.html"),
            styles: [__webpack_require__(/*! ./code-view.component.scss */ "./src/modules/@shared/components/code-view/code-view.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], TdmCodeViewComponent);
    return TdmCodeViewComponent;
}());



/***/ }),

/***/ "./src/modules/@shared/components/feature-list/feature-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/modules/@shared/components/feature-list/feature-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion class=\"package-feature-list\">\n  <mat-expansion-panel *ngFor=\"let f of features\">\n    <mat-expansion-panel-header>\n      <mat-panel-title><mat-icon>check</mat-icon>{{f.title}}</mat-panel-title>\n    </mat-expansion-panel-header>\n    <tdm-markdown-view *ngIf=\"f.md\" [markdown]=\"f.description\"></tdm-markdown-view>\n    <ng-container *ngIf=\"!f.md\">{{f.description}}</ng-container>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/modules/@shared/components/feature-list/feature-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/modules/@shared/components/feature-list/feature-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.package-feature-list .mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: none; }\n.package-feature-list .mat-expansion-panel:not([class*=mat-elevation-z]).mat-expanded {\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n.package-feature-list mat-panel-title {\n  line-height: 48px;\n  height: 48px;\n  color: rgba(0, 0, 0, 0.54); }\n.package-feature-list mat-panel-title mat-icon {\n    line-height: 48px;\n    height: 48px;\n    color: #4caf50;\n    padding-right: 15px; }\n"

/***/ }),

/***/ "./src/modules/@shared/components/feature-list/feature-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/@shared/components/feature-list/feature-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TdmFeatureListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdmFeatureListComponent", function() { return TdmFeatureListComponent; });
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

var TdmFeatureListComponent = /** @class */ (function () {
    function TdmFeatureListComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TdmFeatureListComponent.prototype, "features", void 0);
    TdmFeatureListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tdm-feature-list',
            template: __webpack_require__(/*! ./feature-list.component.html */ "./src/modules/@shared/components/feature-list/feature-list.component.html"),
            styles: [__webpack_require__(/*! ./feature-list.component.scss */ "./src/modules/@shared/components/feature-list/feature-list.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], TdmFeatureListComponent);
    return TdmFeatureListComponent;
}());



/***/ }),

/***/ "./src/modules/@shared/components/index.ts":
/*!*************************************************!*\
  !*** ./src/modules/@shared/components/index.ts ***!
  \*************************************************/
/*! exports provided: UiBlock, TdmCodeViewComponent, TdmMarkdownViewComponent, TdmPackageWelcomeComponent, TdmFeatureListComponent, TdmLedComponent, TutorialPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_block_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-block.component */ "./src/modules/@shared/components/ui-block.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiBlock", function() { return _ui_block_component__WEBPACK_IMPORTED_MODULE_0__["UiBlock"]; });

/* harmony import */ var _code_view_code_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-view/code-view.component */ "./src/modules/@shared/components/code-view/code-view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TdmCodeViewComponent", function() { return _code_view_code_view_component__WEBPACK_IMPORTED_MODULE_1__["TdmCodeViewComponent"]; });

/* harmony import */ var _markdown_view_markdown_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdown-view/markdown-view.component */ "./src/modules/@shared/components/markdown-view/markdown-view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TdmMarkdownViewComponent", function() { return _markdown_view_markdown_view_component__WEBPACK_IMPORTED_MODULE_2__["TdmMarkdownViewComponent"]; });

/* harmony import */ var _package_welcome_package_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package-welcome/package-welcome.component */ "./src/modules/@shared/components/package-welcome/package-welcome.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TdmPackageWelcomeComponent", function() { return _package_welcome_package_welcome_component__WEBPACK_IMPORTED_MODULE_3__["TdmPackageWelcomeComponent"]; });

/* harmony import */ var _feature_list_feature_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature-list/feature-list.component */ "./src/modules/@shared/components/feature-list/feature-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TdmFeatureListComponent", function() { return _feature_list_feature_list_component__WEBPACK_IMPORTED_MODULE_4__["TdmFeatureListComponent"]; });

/* harmony import */ var _led_led_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./led/led.component */ "./src/modules/@shared/components/led/led.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TdmLedComponent", function() { return _led_led_component__WEBPACK_IMPORTED_MODULE_5__["TdmLedComponent"]; });

/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial-page */ "./src/modules/@shared/components/tutorial-page/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialPageComponent", function() { return _tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPageComponent"]; });










/***/ }),

/***/ "./src/modules/@shared/components/led/led.component.html":
/*!***************************************************************!*\
  !*** ./src/modules/@shared/components/led/led.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tdm-led\">\n  <div class=\"status-indicator status-indicator-{{color}}\"\n       [class.status-disabled]=\"disabled\"\n       [class.status-blink]=\"blink\"></div>\n</div>\n"

/***/ }),

/***/ "./src/modules/@shared/components/led/led.component.scss":
/*!***************************************************************!*\
  !*** ./src/modules/@shared/components/led/led.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tdm-led {\n  width: 100%;\n  height: 100%; }\n  .tdm-led .status-indicator {\n    margin: 0 auto;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%; }\n  .tdm-led .status-indicator {\n    background-color: transparent;\n    box-shadow: rgba(56, 56, 56, 0.2) 0 -1px 7px 1px, inset #535353 0 -1px 9px, #b0b0b0 0 2px 14px; }\n  .tdm-led .status-indicator.status-indicator-green {\n      background-color: #ABFF00;\n      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px; }\n  @-webkit-keyframes blinkGreen {\n  from {\n    background-color: #ABFF00; }\n  50% {\n    background-color: #3a5700;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 0; }\n  to {\n    background-color: #ABFF00; } }\n  @keyframes blinkGreen {\n  from {\n    background-color: #ABFF00; }\n  50% {\n    background-color: #3a5700;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 0; }\n  to {\n    background-color: #ABFF00; } }\n  .tdm-led .status-indicator.status-indicator-green.status-blink {\n        -webkit-animation: blinkGreen 0.75s infinite;\n        animation: blinkGreen 0.75s infinite; }\n  .tdm-led .status-indicator.status-indicator-yellow {\n      background-color: #FF0;\n      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 12px; }\n  @-webkit-keyframes blinkYellow {\n  from {\n    background-color: #FF0; }\n  50% {\n    background-color: #575700;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }\n  to {\n    background-color: #FF0; } }\n  @keyframes blinkYellow {\n  from {\n    background-color: #FF0; }\n  50% {\n    background-color: #575700;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }\n  to {\n    background-color: #FF0; } }\n  .tdm-led .status-indicator.status-indicator-yellow.status-blink {\n        -webkit-animation: blinkYellow 0.75s infinite;\n        animation: blinkYellow 0.75s infinite; }\n  .tdm-led .status-indicator.status-indicator-red {\n      background-color: #F00;\n      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px; }\n  @-webkit-keyframes blinkRed {\n  from {\n    background-color: #F00; }\n  50% {\n    background-color: #570000;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0; }\n  to {\n    background-color: #F00; } }\n  @keyframes blinkRed {\n  from {\n    background-color: #F00; }\n  50% {\n    background-color: #570000;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0; }\n  to {\n    background-color: #F00; } }\n  .tdm-led .status-indicator.status-indicator-red.status-blink {\n        -webkit-animation: blinkRed 0.75s infinite;\n        animation: blinkRed 0.75s infinite; }\n  .tdm-led .status-indicator.status-indicator-blue {\n      background-color: #3F8CFF;\n      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px, #3F8CFF 0 2px 14px; }\n  @-webkit-keyframes blinkBlue {\n  from {\n    background-color: #3F8CFF; }\n  50% {\n    background-color: #003c96;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px, #3F8CFF 0 2px 0; }\n  to {\n    background-color: #3F8CFF; } }\n  @keyframes blinkBlue {\n  from {\n    background-color: #3F8CFF; }\n  50% {\n    background-color: #003c96;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px, #3F8CFF 0 2px 0; }\n  to {\n    background-color: #3F8CFF; } }\n  .tdm-led .status-indicator.status-indicator-blue.status-blink {\n        -webkit-animation: blinkBlue 0.75s infinite;\n        animation: blinkBlue 0.75s infinite; }\n  .tdm-led .status-indicator.status-disabled {\n      background-color: #b7b7b7;\n      box-shadow: rgba(56, 56, 56, 0.2) 0 -1px 7px 1px, inset #535353 0 -1px 9px, inset #636363 0 2px 14px; }\n"

/***/ }),

/***/ "./src/modules/@shared/components/led/led.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/@shared/components/led/led.component.ts ***!
  \*************************************************************/
/*! exports provided: TdmLedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdmLedComponent", function() { return TdmLedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/esm5/coercion.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TdmLedComponent = /** @class */ (function () {
    function TdmLedComponent() {
    }
    TdmLedComponent.prototype.ngOnChanges = function (changes) {
        if ('disabled' in changes) {
            this.disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(this.disabled);
        }
        if ('blink' in changes) {
            this.blink = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(this.blink);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TdmLedComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TdmLedComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TdmLedComponent.prototype, "blink", void 0);
    TdmLedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tdm-led',
            template: __webpack_require__(/*! ./led.component.html */ "./src/modules/@shared/components/led/led.component.html"),
            styles: [__webpack_require__(/*! ./led.component.scss */ "./src/modules/@shared/components/led/led.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], TdmLedComponent);
    return TdmLedComponent;
}());



/***/ }),

/***/ "./src/modules/@shared/components/markdown-view/markdown-view.component.html":
/*!***********************************************************************************!*\
  !*** ./src/modules/@shared/components/markdown-view/markdown-view.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"markdown-body\" [class.overflow-container]=\"overflowContainer\">\n  <div class=\"markdown-content\" *ngIf=\"markdown\" [innerHtml]=\"markdown\"></div>\n  <pre *ngIf=\"code\" class=\"lang-{{code.lang}}\"><code class=\"lang-{{code.lang}}\" [innerHtml]=\"code.code\"></code></pre>\n  <ng-content></ng-content>\n</div>\n\n"

/***/ }),

/***/ "./src/modules/@shared/components/markdown-view/markdown-view.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/modules/@shared/components/markdown-view/markdown-view.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tdm-code-example {\n  margin: 10px;\n  padding: 15px;\n  max-height: 65vh;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/modules/@shared/components/markdown-view/markdown-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/modules/@shared/components/markdown-view/markdown-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TdmMarkdownViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdmMarkdownViewComponent", function() { return TdmMarkdownViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/esm5/coercion.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TdmMarkdownViewComponent = /** @class */ (function () {
    function TdmMarkdownViewComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    TdmMarkdownViewComponent.prototype.ngOnChanges = function (changes) {
        if ('overflowContainer' in changes) {
            this.overflowContainer = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(this.overflowContainer);
        }
        if ('markdown' in changes) {
            this.markdown = this.sanitizer.bypassSecurityTrustHtml(this.markdown);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TdmMarkdownViewComponent.prototype, "overflowContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TdmMarkdownViewComponent.prototype, "markdown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TdmMarkdownViewComponent.prototype, "code", void 0);
    TdmMarkdownViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tdm-markdown-view',
            template: __webpack_require__(/*! ./markdown-view.component.html */ "./src/modules/@shared/components/markdown-view/markdown-view.component.html"),
            styles: [__webpack_require__(/*! ./markdown-view.component.scss */ "./src/modules/@shared/components/markdown-view/markdown-view.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], TdmMarkdownViewComponent);
    return TdmMarkdownViewComponent;
}());



/***/ }),

/***/ "./src/modules/@shared/components/package-welcome/package-welcome.component.html":
/*!***************************************************************************************!*\
  !*** ./src/modules/@shared/components/package-welcome/package-welcome.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>{{title}}</h1>\n  <h2>{{description}}</h2>\n  <button class=\"tutorial-btn\" [routerLink]=\"[buttonLink]\" mat-raised-button color=\"primary\">{{buttonText}}</button>\n  <div class=\"install-box mat-body-2\">\n    npm install --save {{installCmd}}\n  </div>\n  <div class=\"mat-body-2\" *ngIf=\"version && ngVersion\">\n    version: {{version}} / angular: {{ngVersion}}\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/modules/@shared/components/package-welcome/package-welcome.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/modules/@shared/components/package-welcome/package-welcome.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nheader {\n  text-align: center;\n  color: #ffffff;\n  background: #1565c0;\n  padding: 60px 0; }\nheader h1 {\n    font-size: 56px;\n    font-weight: 300;\n    line-height: 56px; }\nheader h2 {\n    font-size: 18px;\n    font-weight: 300;\n    line-height: 28px; }\nheader .install-box {\n    margin: 30px 0 0 0;\n    padding: 20px 0;\n    background-color: rgba(0, 0, 0, 0.3);\n    color: #f7ff59;\n    letter-spacing: 0.3px; }\n.tutorial-btn {\n  margin-top: 50px; }\n"

/***/ }),

/***/ "./src/modules/@shared/components/package-welcome/package-welcome.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/modules/@shared/components/package-welcome/package-welcome.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TdmPackageWelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdmPackageWelcomeComponent", function() { return TdmPackageWelcomeComponent; });
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

function fullName(pkg) {
    return "@tdm/" + pkg;
}
var TdmPackageWelcomeComponent = /** @class */ (function () {
    function TdmPackageWelcomeComponent() {
    }
    Object.defineProperty(TdmPackageWelcomeComponent.prototype, "installCmd", {
        get: function () {
            var pkgs = [this.name].concat((this.deps || []));
            return pkgs.map(fullName).join('  ');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TdmPackageWelcomeComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TdmPackageWelcomeComponent.prototype, "deps", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TdmPackageWelcomeComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TdmPackageWelcomeComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TdmPackageWelcomeComponent.prototype, "ngVersion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TdmPackageWelcomeComponent.prototype, "version", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TdmPackageWelcomeComponent.prototype, "buttonText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TdmPackageWelcomeComponent.prototype, "buttonLink", void 0);
    TdmPackageWelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tdm-package-welcome',
            template: __webpack_require__(/*! ./package-welcome.component.html */ "./src/modules/@shared/components/package-welcome/package-welcome.component.html"),
            styles: [__webpack_require__(/*! ./package-welcome.component.scss */ "./src/modules/@shared/components/package-welcome/package-welcome.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], TdmPackageWelcomeComponent);
    return TdmPackageWelcomeComponent;
}());



/***/ }),

/***/ "./src/modules/@shared/components/tutorial-page/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/@shared/components/tutorial-page/index.ts ***!
  \***************************************************************/
/*! exports provided: TutorialPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tutorial_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial-page.component */ "./src/modules/@shared/components/tutorial-page/tutorial-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialPageComponent", function() { return _tutorial_page_component__WEBPACK_IMPORTED_MODULE_0__["TutorialPageComponent"]; });




/***/ }),

/***/ "./src/modules/@shared/components/tutorial-page/tutorial-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/modules/@shared/components/tutorial-page/tutorial-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container autosize=\"autoSize\">\n  <mat-drawer mode=\"side\" opened=\"true\">\n    <mat-nav-list>\n      <ng-container *ngFor=\"let t of tutorialsChanged | async\">\n        <h3 *ngIf=\"t.tutorial.subHeader\" matSubheader>{{t.tutorial.subHeader}}</h3>\n        <a mat-list-item\n           [routerLink]=\"['..', t.tutorial.id]\"\n           routerLinkActive=\"active\">{{t.tutorial.name}}</a>\n      </ng-container>\n    </mat-nav-list>\n  </mat-drawer>\n  <mat-drawer-content>\n    <div class=\"tdm-page\">\n      <div class=\"tdm-page-content\" tdmTocArea #tocArea=\"tocArea\" tdmAnchorTrap>\n        <span #tutorialView></span>\n        <tdm-toc [tocArea]=\"tocArea\">\n          <a *tocLinkTemplate=\"let ctx;\"\n             [routerLink]=\"['./']\"\n             [fragment]=\"ctx.link.id\">{{ ctx.link.name }}</a>\n        </tdm-toc>\n      </div>\n    </div>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/modules/@shared/components/tutorial-page/tutorial-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/modules/@shared/components/tutorial-page/tutorial-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nmat-drawer-container {\n  background: none;\n  flex: 1; }\nmat-drawer {\n  background: #1565c0; }\nmat-drawer a[mat-list-item] {\n    color: #FFFFFF; }\n"

/***/ }),

/***/ "./src/modules/@shared/components/tutorial-page/tutorial-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/modules/@shared/components/tutorial-page/tutorial-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TutorialPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageComponent", function() { return TutorialPageComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tutorial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tutorial.service */ "./src/modules/@shared/services/tutorial.service.ts");
/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../toc */ "./src/modules/@shared/toc/index.ts");
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






var TutorialPageComponent = /** @class */ (function () {
    function TutorialPageComponent(document, tutorialService, resolver, route, router) {
        var _this = this;
        this.document = document;
        this.tutorialService = tutorialService;
        this.resolver = resolver;
        this.route = route;
        this.router = router;
        this.autoSize = false;
        this.tutorialsChanged = tutorialService.tutorialsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () {
            _this.autoSize = true;
            setTimeout(function () { return _this.autoSize = false; }, 1);
        }));
    }
    TutorialPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = this.route.paramMap.subscribe(function (params) {
            var id = params.get('name');
            var tutorial = _this.tutorialService.get(id);
            if (!tutorial) {
                _this.router.navigate(['/page-404']);
            }
            else {
                _this.renderTutorial(tutorial);
            }
        });
    };
    TutorialPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // On init, the sidenav content element doesn't yet exist, so it's not possible
        // to subscribe to its scroll event until next tick (when it does exist).
        Promise.resolve().then(function () {
            _this.tocArea.scrollContainer = _this.document.querySelector('.mat-drawer-content');
        });
    };
    TutorialPageComponent.prototype.ngOnDestroy = function () {
        this._subs.unsubscribe();
    };
    TutorialPageComponent.prototype.renderTutorial = function (tutorial) {
        this.tutVcRef.clear();
        var componentFactory = this.resolver.resolveComponentFactory(tutorial);
        var cmpRef = this.tutVcRef.createComponent(componentFactory, this.tutVcRef.length);
        this.tocArea.reinitQueryLinks(Promise.resolve(cmpRef.instance.code));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tutorialView', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], TutorialPageComponent.prototype, "tutVcRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tocArea'),
        __metadata("design:type", _toc__WEBPACK_IMPORTED_MODULE_5__["TocAreaDirective"])
    ], TutorialPageComponent.prototype, "tocArea", void 0);
    TutorialPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tutorial-page',
            styles: [__webpack_require__(/*! ./tutorial-page.component.scss */ "./src/modules/@shared/components/tutorial-page/tutorial-page.component.scss")],
            template: __webpack_require__(/*! ./tutorial-page.component.html */ "./src/modules/@shared/components/tutorial-page/tutorial-page.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document,
            _services_tutorial_service__WEBPACK_IMPORTED_MODULE_4__["TutorialService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TutorialPageComponent);
    return TutorialPageComponent;
}());



/***/ }),

/***/ "./src/modules/@shared/components/ui-block.component.ts":
/*!**************************************************************!*\
  !*** ./src/modules/@shared/components/ui-block.component.ts ***!
  \**************************************************************/
/*! exports provided: UiBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBlock", function() { return UiBlock; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiBlock = /** @class */ (function () {
    function UiBlock() {
    }
    UiBlock = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-block',
            template: "\n<mat-spinner color=\"primary\"></mat-spinner>\n<span>Please wait...</span>\n"
        })
    ], UiBlock);
    return UiBlock;
}());



/***/ }),

/***/ "./src/modules/@shared/data-source/data-source-container.ts":
/*!******************************************************************!*\
  !*** ./src/modules/@shared/data-source/data-source-container.ts ***!
  \******************************************************************/
/*! exports provided: DataSourceContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceContainer", function() { return DataSourceContainer; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "../../node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "../../node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_observable_combineLatest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/combineLatest */ "../../node_modules/rxjs/observable/combineLatest.js");
/* harmony import */ var rxjs_observable_combineLatest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_combineLatest__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _filtering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filtering */ "./src/modules/@shared/data-source/filtering.ts");
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sorting */ "./src/modules/@shared/data-source/sorting.ts");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination */ "./src/modules/@shared/data-source/pagination.ts");
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









var emptySort = { column: null, order: 'asc' };
var DataSourceContainer = /** @class */ (function (_super) {
    __extends(DataSourceContainer, _super);
    /**
     *
     * @param initialData
     * @param keepAlive When set to True will not disconnect upon table disconnection, otherwise does.
     */
    function DataSourceContainer(initialData, keepAlive) {
        var _this = _super.call(this) || this;
        /**
         * If true, pagination is used.
         *
         * @see DataSourceDirective#pagination
         *
         * @default false
         * @type {boolean}
         */
        _this.usePagination = false;
        /**
         * The buffer for virtual lists.
         *
         * @default 10
         */
        _this.buffer = 10;
        _this._pagination = new _pagination__WEBPACK_IMPORTED_MODULE_8__["Paginator"]();
        _this._selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        _this._renderedData = [];
        _this._rawData$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        _this._filter$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        _this._sort$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ column: null, order: 'asc' });
        _this._sourceChanged$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        if (typeof initialData === 'boolean') {
            keepAlive = initialData;
        }
        else if (initialData) {
            _this.updateSource(initialData);
        }
        _this.keepAlive = keepAlive;
        _this.onSourceChanged = _this._sourceChanged$.asObservable();
        _this._filteredData$ = Object(rxjs_observable_combineLatest__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([_this._rawData$, _this._filter$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return Object(_filtering__WEBPACK_IMPORTED_MODULE_6__["filter"])(_this._rawData$.value, _this.filter); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (filteredData) {
            if (_this.usePagination) {
                _this.pagination.total = filteredData.length;
                _this.pagination.page = filteredData.length > 0 ? 1 : 0;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(_this._sort$, function (filteredData, sort) {
            if (!sort || sort.order === '') {
                return _this._filteredData = filteredData;
            }
            var sortFn = typeof sort.sortFn === 'function'
                ? sort.sortFn
                : _sorting__WEBPACK_IMPORTED_MODULE_7__["sortData"];
            return _this._filteredData = sortFn(sort, filteredData);
        }));
        _this.onDataChanged = _this._filteredData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (f) { return undefined; }));
        return _this;
    }
    Object.defineProperty(DataSourceContainer.prototype, "sort", {
        get: function () {
            return this._sort$.value;
        },
        set: function (sort) {
            this._sort$.next(sort);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceContainer.prototype, "filteredData", {
        get: function () {
            return this._filteredData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceContainer.prototype, "filter", {
        get: function () {
            return this._filter$.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceContainer.prototype, "length", {
        get: function () {
            return this._rawData$.value.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceContainer.prototype, "source", {
        get: function () {
            return this._rawData$.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceContainer.prototype, "pagination", {
        get: function () {
            return this._pagination;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceContainer.prototype, "selection", {
        /**
         * Represents selected items on the data source.
         * @returns {SelectionModel<T>}
         */
        get: function () {
            return this._selection;
        },
        enumerable: true,
        configurable: true
    });
    // workaround to refresh the page since row header and row can't communicate
    DataSourceContainer.prototype.refresh = function () {
        this._rawData$.next(this._rawData$.value);
    };
    DataSourceContainer.prototype.setFilter = function (value) {
        var properties = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            properties[_i - 1] = arguments[_i];
        }
        this._filter$.next(Object(_filtering__WEBPACK_IMPORTED_MODULE_6__["createFilter"])(value, properties));
    };
    /**
     * Updates the source.
     * If a an array is supplied, it is a one time value set as the source.
     * If an array is supplied while an observable is already set, the array value will be set but and subsequent streams
     * will override the values.
     * To disconnect an observable source invoke the dispose() method
     * @param data
     * @param aggregateMode {boolean} [false] when true, the data is added to the previous data-set (async pagination)
     */
    DataSourceContainer.prototype.updateSource = function (data, aggregateMode) {
        var _this = this;
        if (aggregateMode === void 0) { aggregateMode = false; }
        if (!Array.isArray(data) && typeof data.subscribe !== 'function') {
            data = [];
        }
        this.dispose(true);
        if (Array.isArray(data)) {
            this.updateRawData(data, aggregateMode);
        }
        else {
            this.gc = data.subscribe(function (d) { return _this.updateRawData(d, aggregateMode); });
        }
    };
    DataSourceContainer.prototype.dispose = function (local) {
        if (this.gc) {
            this.gc.unsubscribe();
            this.gc = undefined;
        }
        if (!local) {
            this._sourceChanged$.unsubscribe();
        }
    };
    DataSourceContainer.prototype.disconnect = function (cv) {
        if (this.keepAlive === false) {
            this.dispose();
        }
    };
    DataSourceContainer.prototype.connect = function (cv) {
        var _this = this;
        return Object(rxjs_observable_combineLatest__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(cv.viewChange, this._filteredData$, this._pagination.onChange)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var view = result[0], displayData = result[1], pageChange = result[2];
            if (_this.usePagination && _this._pagination.total !== displayData.length) {
                _this._pagination.total = displayData.length;
                return _this._renderedData;
            }
            // Set the rendered rows length to the virtual page size. Fill in the data provided
            // from the index start until the end index or pagination size, whichever is smaller.
            if (_this.usePagination) {
                var range = _this.pagination.range;
                displayData = displayData.slice(range[0], range[1]);
            }
            _this._renderedData.length = displayData.length;
            var rangeStart = Math.max(0, view.start - _this.buffer);
            var rangeEnd = Math.min(displayData.length, view.end + _this.buffer);
            for (var i = rangeStart; i < rangeEnd; i++) {
                _this._renderedData[i] = displayData[i];
            }
            return _this._renderedData; // Currently ignoring the view
        }));
    };
    DataSourceContainer.prototype.updateRawData = function (data, aggregateMode) {
        this.selection.clear();
        this.sort = emptySort;
        var coll = aggregateMode === true && Array.isArray(this._rawData$.value)
            ? this._rawData$.value.concat(data) : data.slice();
        this._rawData$.next(coll);
        this._sourceChanged$.next();
    };
    return DataSourceContainer;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["DataSource"]));



/***/ }),

/***/ "./src/modules/@shared/data-source/data-source.directive.ts":
/*!******************************************************************!*\
  !*** ./src/modules/@shared/data-source/data-source.directive.ts ***!
  \******************************************************************/
/*! exports provided: DataSourceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceDirective", function() { return DataSourceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _data_source_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-source-container */ "./src/modules/@shared/data-source/data-source-container.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataSourceDirective = /** @class */ (function () {
    function DataSourceDirective() {
        /** A ghost object to hold properties synced with _dataSource  */
        this.ghost = {};
    }
    Object.defineProperty(DataSourceDirective.prototype, "dataSource", {
        get: function () { return this._dataSource; },
        set: function (value) {
            this._dataSource = value;
            this.sync();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceDirective.prototype, "buffer", {
        get: function () { return this.ghost.buffer; },
        set: function (value) {
            this.ghost.buffer = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
            this.sync();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceDirective.prototype, "pagination", {
        /**
         * Proxy to the usePagination property in DataSourceContainer.
         * @returns {boolean}
         */
        get: function () { return this.ghost.usePagination; },
        set: function (value) {
            this.ghost.usePagination = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this.sync();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceDirective.prototype, "ds", {
        /**
         * Just an alias for DataSourceDirective#tableDataSource
         * @returns {DataSourceContainer<T>}
         */
        get: function () {
            return this._dataSource;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceDirective.prototype.sync = function () {
        if (this._dataSource) {
            if (typeof this.ghost.buffer === 'number') {
                this._dataSource.buffer = this.ghost.buffer;
            }
            if (typeof this.ghost.usePagination === 'boolean') {
                this._dataSource.usePagination = this.ghost.usePagination;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_source_container__WEBPACK_IMPORTED_MODULE_2__["DataSourceContainer"]),
        __metadata("design:paramtypes", [_data_source_container__WEBPACK_IMPORTED_MODULE_2__["DataSourceContainer"]])
    ], DataSourceDirective.prototype, "dataSource", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataSourceDirective.prototype, "buffer", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DataSourceDirective.prototype, "pagination", null);
    DataSourceDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'cdk-table[dataSource], mat-table[dataSource]',
            exportAs: 'dataSource'
        })
    ], DataSourceDirective);
    return DataSourceDirective;
}());



/***/ }),

/***/ "./src/modules/@shared/data-source/filtering.ts":
/*!******************************************************!*\
  !*** ./src/modules/@shared/data-source/filtering.ts ***!
  \******************************************************/
/*! exports provided: createFilter, filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
function createFilter(value, properties) {
    return value === undefined
        ? undefined
        : {
            properties: properties.length > 0 ? properties : undefined,
            type: typeof value === 'function' ? 'predicate' : 'value',
            filter: value
        };
}
function filter(rawData, filter) {
    if (!filter || !rawData || rawData.length === 0) {
        return rawData;
    }
    else {
        var props_1 = filter.properties
            ? filter.properties
            : Object.keys(rawData[0]) // assuming all objects are identical
        ;
        if (filter.type === 'predicate') {
            var value_1 = filter.filter;
            return rawData.filter(function (v) { return value_1(v, props_1); });
        }
        else if (filter.type === 'value') {
            var value_2 = filter.filter;
            return rawData.filter(function (v) { return props_1.some(function (f) { return v[f] === value_2; }); });
        }
    }
    return rawData;
}


/***/ }),

/***/ "./src/modules/@shared/data-source/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/@shared/data-source/index.ts ***!
  \**************************************************/
/*! exports provided: Paginator, DataSourceDirective, DataSourceContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ "./src/modules/@shared/data-source/pagination.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return _pagination__WEBPACK_IMPORTED_MODULE_0__["Paginator"]; });

/* harmony import */ var _data_source_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-source.directive */ "./src/modules/@shared/data-source/data-source.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceDirective", function() { return _data_source_directive__WEBPACK_IMPORTED_MODULE_1__["DataSourceDirective"]; });

/* harmony import */ var _data_source_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-source-container */ "./src/modules/@shared/data-source/data-source-container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceContainer", function() { return _data_source_container__WEBPACK_IMPORTED_MODULE_2__["DataSourceContainer"]; });






/***/ }),

/***/ "./src/modules/@shared/data-source/pagination.ts":
/*!*******************************************************!*\
  !*** ./src/modules/@shared/data-source/pagination.ts ***!
  \*******************************************************/
/*! exports provided: Paginator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return Paginator; });
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "../../node_modules/rxjs-compat/_esm5/BehaviorSubject.js");

var Paginator = /** @class */ (function () {
    function Paginator() {
        this._total = 0;
        this._perPage = 10;
        this._page = 1;
        this._totalPages = 0;
        this.onChange$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({ page: [null, 1] });
        this.onChange = this.onChange$.asObservable();
    }
    Object.defineProperty(Paginator.prototype, "perPage", {
        get: function () { return this._perPage; },
        set: function (value) {
            if (value < 1) {
                throw new Error("Invalid total size value " + value);
            }
            if (this._perPage !== value) {
                var changes = { perPage: [this._perPage, this._perPage = value] };
                var prev = this._page;
                this.calcPages();
                if (prev !== this._page) {
                    changes.page = [prev, this._page];
                }
                this.onChange$.next(changes);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "page", {
        /**
         * Get / Set the current page
         * @returns {number}
         */
        get: function () { return this._page; },
        set: function (value) {
            if (value < 0 || value > this._totalPages) {
                throw new Error("Invalid page index " + value);
            }
            if (this._page !== value) {
                this.setPage(value, true);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "total", {
        get: function () { return this._total; },
        set: function (value) {
            if (value < 0) {
                throw new Error("Invalid total size value " + value);
            }
            if (this._total !== value) {
                var changes = { total: [this._total, this._total = value] };
                var prev = this._page;
                this.calcPages();
                if (prev !== this._page) {
                    changes.page = [prev, this._page];
                }
                this.onChange$.next(changes);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "totalPages", {
        /**
         * The amount of pages in this paginator
         * @returns {number}
         */
        get: function () {
            return this._totalPages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "range", {
        get: function () {
            var start = (this.page - 1) * this.perPage;
            return [start, Math.min(this._total, start + this.perPage)];
        },
        enumerable: true,
        configurable: true
    });
    Paginator.prototype.canMove = function (value) {
        var p = this._page + value;
        return p >= 1 && p <= this.totalPages;
    };
    Paginator.prototype.hasNext = function () { return this.canMove(1); };
    Paginator.prototype.hasPrev = function () { return this.canMove(-1); };
    Paginator.prototype.move = function (value) { this.page = this._page + value; };
    Paginator.prototype.nextPage = function () { this.move(1); };
    Paginator.prototype.prevPage = function () { this.move(-1); };
    Paginator.prototype.reset = function () {
        this.page = 1;
    };
    Paginator.prototype.setPage = function (value, emitOnChange) {
        var prev = this._page;
        this._page = value;
        if (emitOnChange) {
            this.onChange$.next({ page: [prev, value] });
        }
    };
    /**
     * Calculate the number of pages.
     * returns true if the current page has changed due to calculation. (current page > new pages value)
     * @returns {boolean}
     */
    Paginator.prototype.calcPages = function () {
        this._totalPages = Math.ceil(this._total / this.perPage);
        if (this._totalPages > 0 && this._page > this._totalPages) {
            this.setPage(this._totalPages, false);
        }
    };
    return Paginator;
}());



/***/ }),

/***/ "./src/modules/@shared/data-source/sorting.ts":
/*!****************************************************!*\
  !*** ./src/modules/@shared/data-source/sorting.ts ***!
  \****************************************************/
/*! exports provided: sortData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortData", function() { return sortData; });
function sortData(sort, data) {
    var prop = sort.column;
    if (!prop)
        return data;
    return data.slice().sort(function (a, b) {
        var valueA = isNaN(+a[prop]) ? a[prop] : +a[prop];
        var valueB = isNaN(+b[prop]) ? b[prop] : +b[prop];
        return (valueA < valueB ? -1 : 1) * (sort.order === 'asc' ? 1 : -1);
    });
}


/***/ }),

/***/ "./src/modules/@shared/directives/anchor-trap.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/@shared/directives/anchor-trap.directive.ts ***!
  \*****************************************************************/
/*! exports provided: AnchorTrapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorTrapDirective", function() { return AnchorTrapDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/location.service */ "./src/modules/@shared/services/location.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DEFAULT_OPTIONS = { cssTrap: 'tdm-anchor-trap', maxBubble: 3 };
var AnchorTrapDirective = /** @class */ (function () {
    function AnchorTrapDirective(location) {
        this.location = location;
    }
    AnchorTrapDirective.prototype.onClick = function ($event) {
        var anchor = $event.target;
        var cssTrap = (this.options && this.options.cssTrap) || DEFAULT_OPTIONS.cssTrap;
        var maxBubble = (this.options && this.options.maxBubble) || DEFAULT_OPTIONS.maxBubble;
        for (var i = 0; i < maxBubble && anchor; i++) {
            if (anchor.classList.contains(cssTrap)) {
                this.location.tryNavigateToAnchor(anchor);
                $event.stopPropagation();
                $event.preventDefault();
            }
            anchor = anchor.parentElement;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('ngdAnchorTrap'),
        __metadata("design:type", Object)
    ], AnchorTrapDirective.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", Object)
    ], AnchorTrapDirective.prototype, "onClick", null);
    AnchorTrapDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tdmAnchorTrap]'
        }),
        __metadata("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"]])
    ], AnchorTrapDirective);
    return AnchorTrapDirective;
}());



/***/ }),

/***/ "./src/modules/@shared/index.ts":
/*!**************************************!*\
  !*** ./src/modules/@shared/index.ts ***!
  \**************************************/
/*! exports provided: TutorialService, UiBlockService, BlockingRef, LocationService, TopNavService, SharedModule, MaterialModule, UiBlock, TdmCodeViewComponent, TutorialPageComponent, Paginator, DataSourceDirective, DataSourceContainer, TocHeadDirective, TocAreaDirective, TocLinkTemplateDirective, TocComponent, TocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_tutorial_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/tutorial.service */ "./src/modules/@shared/services/tutorial.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialService", function() { return _services_tutorial_service__WEBPACK_IMPORTED_MODULE_0__["TutorialService"]; });

/* harmony import */ var _services_ui_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/ui-block */ "./src/modules/@shared/services/ui-block.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiBlockService", function() { return _services_ui_block__WEBPACK_IMPORTED_MODULE_1__["UiBlockService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockingRef", function() { return _services_ui_block__WEBPACK_IMPORTED_MODULE_1__["BlockingRef"]; });

/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/location.service */ "./src/modules/@shared/services/location.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]; });

/* harmony import */ var _services_top_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/top-nav.service */ "./src/modules/@shared/services/top-nav.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavService", function() { return _services_top_nav_service__WEBPACK_IMPORTED_MODULE_3__["TopNavService"]; });

/* harmony import */ var _data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-source */ "./src/modules/@shared/data-source/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return _data_source__WEBPACK_IMPORTED_MODULE_4__["Paginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceDirective", function() { return _data_source__WEBPACK_IMPORTED_MODULE_4__["DataSourceDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceContainer", function() { return _data_source__WEBPACK_IMPORTED_MODULE_4__["DataSourceContainer"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.module */ "./src/modules/@shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]; });

/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material */ "./src/modules/@shared/material.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/modules/@shared/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiBlock", function() { return _components__WEBPACK_IMPORTED_MODULE_7__["UiBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TdmCodeViewComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_7__["TdmCodeViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialPageComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_7__["TutorialPageComponent"]; });

/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toc */ "./src/modules/@shared/toc/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocHeadDirective", function() { return _toc__WEBPACK_IMPORTED_MODULE_8__["TocHeadDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocAreaDirective", function() { return _toc__WEBPACK_IMPORTED_MODULE_8__["TocAreaDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocLinkTemplateDirective", function() { return _toc__WEBPACK_IMPORTED_MODULE_8__["TocLinkTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocComponent", function() { return _toc__WEBPACK_IMPORTED_MODULE_8__["TocComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocModule", function() { return _toc__WEBPACK_IMPORTED_MODULE_8__["TocModule"]; });












/***/ }),

/***/ "./src/modules/@shared/material.ts":
/*!*****************************************!*\
  !*** ./src/modules/@shared/material.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MATERIAL_MODULES = [
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: MATERIAL_MODULES,
            exports: MATERIAL_MODULES,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/modules/@shared/modules.ts":
/*!****************************************!*\
  !*** ./src/modules/@shared/modules.ts ***!
  \****************************************/
/*! exports provided: ROOT_MODULES, MODULES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_MODULES", function() { return ROOT_MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULES", function() { return MODULES; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material */ "./src/modules/@shared/material.ts");
/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toc */ "./src/modules/@shared/toc/index.ts");









var ROOT_MODULES = [
    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
    _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
    _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_6__["HttpClientResourceModule"],
    _toc__WEBPACK_IMPORTED_MODULE_8__["TocModule"]
];
var MODULES = [
    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
    _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
    _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_6__["HttpClientResourceModule"],
    _toc__WEBPACK_IMPORTED_MODULE_8__["TocModule"]
];


/***/ }),

/***/ "./src/modules/@shared/pipes/code-filter.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/modules/@shared/pipes/code-filter.pipe.ts ***!
  \*******************************************************/
/*! exports provided: TdmCodeExtractPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdmCodeExtractPipe", function() { return TdmCodeExtractPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/core/tdm */ "../../libs/core/tdm/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function invalidPipeArgumentError(type, value) {
    return Error("InvalidPipeArgument: '" + value + "' for pipe '" + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["stringify"])(type) + "'");
}
/**
 * Filter's a collection [[ExtractedCode]] instances based on a provided a query and returns the filtered collection or
 * when explicitly set, the code of each [[ExtractedCode]] instance.
 *
 * ```
 * ExtractedCodeResult instance | tdmCode[:query[:codeOnly]]`
 * ```
 *
 * The query is an object, similar to [[ExtractedCode]] but without the code, where each property->value pair in the
 * query must match the same property->value pair in the extracted code. If all match the query pass.
 *
 * To return the code instead of the [[ExtractedCode]] instance, set the 2nd parameter (`codeOnly`) to true.
 */
var TdmCodeExtractPipe = /** @class */ (function () {
    function TdmCodeExtractPipe() {
    }
    TdmCodeExtractPipe_1 = TdmCodeExtractPipe;
    TdmCodeExtractPipe.prototype.transform = function (value, query, codeOnly) {
        if (!Array.isArray(query) || query.length === 0) {
            throw invalidPipeArgumentError(TdmCodeExtractPipe_1, 'query');
        }
        if (!value) {
            return [];
        }
        if (!Array.isArray(value) && (value && Array.isArray(value['default']))) {
            value = value['default'];
        }
        else if (!Array.isArray(value)) {
            throw invalidPipeArgumentError(TdmCodeExtractPipe_1, "Value must be an array, got " + Object(_tdm_core_tdm__WEBPACK_IMPORTED_MODULE_1__["stringify"])(value));
        }
        var queryKeys = [];
        var result = value.filter(function (v) {
            for (var i in query) {
                var keys = queryKeys[i] || (queryKeys[i] = Object.keys(query[i]));
                if (keys.every(function (k) { return v[k] === query[i][k]; })) {
                    return true;
                }
            }
        });
        return codeOnly === true ? result.map(function (c) { return c.code; }) : result;
    };
    TdmCodeExtractPipe = TdmCodeExtractPipe_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'tdmCode' })
    ], TdmCodeExtractPipe);
    return TdmCodeExtractPipe;
    var TdmCodeExtractPipe_1;
}());



/***/ }),

/***/ "./src/modules/@shared/pipes/index.ts":
/*!********************************************!*\
  !*** ./src/modules/@shared/pipes/index.ts ***!
  \********************************************/
/*! exports provided: TdmCodeExtractPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-filter.pipe */ "./src/modules/@shared/pipes/code-filter.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TdmCodeExtractPipe", function() { return _code_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["TdmCodeExtractPipe"]; });




/***/ }),

/***/ "./src/modules/@shared/services/location.service.ts":
/*!**********************************************************!*\
  !*** ./src/modules/@shared/services/location.service.ts ***!
  \**********************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/ReplaySubject */ "../../node_modules/rxjs-compat/_esm5/ReplaySubject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationService = /** @class */ (function () {
    function LocationService(router, location, platformLocation) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.platformLocation = platformLocation;
        this.urlSubject = new rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.currentUrl = this.urlSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (url) { return _this.stripSlashes(url); }));
        this.currentPath = this.currentUrl.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (url) { return url.match(/[^?#]*/)[0]; }));
        this.urlSubject.next(location.path(true));
        this.location.subscribe(function (state) { return _this.urlSubject.next(state.url); });
    }
    // TODO?: ignore if url-without-hash-or-search matches current location?
    LocationService.prototype.go = function (url) {
        if (!url) {
            return;
        }
        url = this.stripSlashes(url);
        if (/^http/.test(url)) {
            // Has http protocol so leave the site
            // (or do a "full page navigation" if a ServiceWorker update has been activated)
            this.goExternal(url);
        }
        else {
            this.location.go(url);
            this.urlSubject.next(url);
        }
    };
    LocationService.prototype.goExternal = function (url) {
        window.location.assign(url);
    };
    LocationService.prototype.replace = function (url) {
        window.location.replace(url);
    };
    LocationService.prototype.stripSlashes = function (url) {
        return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
    };
    LocationService.prototype.tryNavigateToAnchor = function (anchor) {
        var extras = {};
        if (anchor.hash) {
            extras.fragment = anchor.hash.substr(1);
        }
        var href = anchor.getAttribute('href') || '.';
        href = href.split('#')[0];
        if (href[0] === '.') {
            var path = href.split('/').filter(function (s) { return !!s; });
            var urlTree = this.router.parseUrl(this.location.path(true));
            var primary = urlTree.root.children.primary;
            urlTree.fragment = extras.fragment;
            for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                var p = path_1[_i];
                if (p === '..') {
                    primary.segments.pop();
                }
                else if (p !== '.') {
                    primary.segments.push(new _angular_router__WEBPACK_IMPORTED_MODULE_4__["UrlSegment"](p, {}));
                }
            }
            this.router.navigateByUrl(urlTree, extras);
        }
        else {
            this.router.navigate(href.split('/').filter(function (s) { return !!s; }), extras);
        }
    };
    LocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/modules/@shared/services/top-nav.service.ts":
/*!*********************************************************!*\
  !*** ./src/modules/@shared/services/top-nav.service.ts ***!
  \*********************************************************/
/*! exports provided: TopNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavService", function() { return TopNavService; });
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "../../node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopNavService = /** @class */ (function () {
    function TopNavService() {
        this.navItems$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.domainStack = [];
        this.domains = {};
        this.rootDomain = this.navItems$.getValue();
    }
    TopNavService.prototype.pushDomain = function (domain) {
        if (this.currDomain) {
            this.domainStack.push(this.currDomain);
        }
        this.currDomain = domain;
        this.emit(domain);
    };
    TopNavService.prototype.popDomain = function () {
        this.currDomain = this.domainStack.pop();
        this.emit(this.currDomain);
        return this.currDomain;
    };
    TopNavService.prototype.addNavItem = function (nav) {
        if (nav.domain) {
            if (!this.domains[nav.domain]) {
                this.domains[nav.domain] = [];
            }
            this.domains[nav.domain].push(nav);
        }
        else {
            this.rootDomain.push(nav);
        }
        this.emit(nav.domain);
    };
    TopNavService.prototype.removeNavItem = function (nav) {
        var items = nav.domain ? this.domains[nav.domain] : this.rootDomain;
        var idx = items ? items.indexOf(nav) : -1;
        if (idx > -1) {
            items.splice(idx, 1);
            this.emit(nav.domain);
            return true;
        }
        return false;
    };
    TopNavService.prototype.emit = function (domain) {
        if (!domain && !this.currDomain) {
            this.navItems$.next(this.rootDomain.slice());
        }
        else if (domain === this.currDomain) {
            this.navItems$.next(this.domains[domain].slice());
        }
    };
    TopNavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TopNavService);
    return TopNavService;
}());



/***/ }),

/***/ "./src/modules/@shared/services/tutorial.service.ts":
/*!**********************************************************!*\
  !*** ./src/modules/@shared/services/tutorial.service.ts ***!
  \**********************************************************/
/*! exports provided: TutorialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialService", function() { return TutorialService; });
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "../../node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialService = /** @class */ (function () {
    function TutorialService() {
        this.tuts = new Map();
        this.tuts$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.tutorialsChanged = this.tuts$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    TutorialService.prototype.addTutorial = function (tutorial) {
        this.tuts.set(tutorial.tutorial.id, tutorial);
        this.tuts$.next(Array.from(this.tuts.values()));
    };
    TutorialService.prototype.get = function (id) {
        return this.tuts.get(id);
    };
    TutorialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TutorialService);
    return TutorialService;
}());



/***/ }),

/***/ "./src/modules/@shared/services/ui-block.ts":
/*!**************************************************!*\
  !*** ./src/modules/@shared/services/ui-block.ts ***!
  \**************************************************/
/*! exports provided: BlockingRef, UiBlockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockingRef", function() { return BlockingRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBlockService", function() { return UiBlockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockingRef = /** @class */ (function () {
    function BlockingRef(dialogRef, options) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.options = options;
        if (this.options.timeout > 0) {
            setTimeout(function () { return _this.onTimeout(); }, this.options.timeout);
        }
        if (this.options.promise && typeof this.options.promise.then === 'function') {
            this.options.promise
                .then(function () { return _this.onPromise(); })
                .catch(function () { return _this.onPromise(); });
        }
        dialogRef.afterClosed().subscribe(function () { return _this.onClose(); });
    }
    Object.defineProperty(BlockingRef.prototype, "isClosed", {
        get: function () {
            return this.closed;
        },
        enumerable: true,
        configurable: true
    });
    BlockingRef.prototype.close = function () {
        if (this.closed === true) {
            return;
        }
        this.dialogRef.close();
    };
    BlockingRef.prototype.onTimeout = function () {
        if (this.closed === true) {
            return;
        }
        this.dialogRef.close();
    };
    BlockingRef.prototype.onPromise = function () {
        if (this.closed === true) {
            return;
        }
        this.dialogRef.close();
    };
    BlockingRef.prototype.onClose = function () {
        if (this.closed === true) {
            return;
        }
        this.closed = true;
    };
    return BlockingRef;
}());

var UiBlockService = /** @class */ (function () {
    function UiBlockService(dialog) {
        this.dialog = dialog;
        this.activeStreams = new Map();
        this.options = {};
    }
    UiBlockService.prototype.block = function (value) {
        this.options.block = value;
        return this;
    };
    UiBlockService.prototype.closeWithTimeout = function (seconds) {
        this.options.timeout = seconds * 1000;
        return this;
    };
    UiBlockService.prototype.closeWithPromise = function (promise) {
        this.options.promise = promise;
        return this;
    };
    UiBlockService.prototype.fromObservable = function (obs$, component, config) {
        var _this = this;
        var next = function (value) {
            if (value && !_this.activeStreams.get(obs$).ref) {
                var ref = _this.open(component, config);
                _this.activeStreams.get(obs$).ref = ref;
                ref.afterClosed().subscribe(function () { return _this.activeStreams.get(obs$).ref = undefined; });
            }
            else {
                var ref = _this.activeStreams.get(obs$).ref;
                if (ref) {
                    _this.activeStreams.get(obs$).ref = undefined; // to prevent async re-call
                    ref.close();
                }
            }
        };
        var error = function (err) { return _this.disconnectObservable(obs$); };
        var complete = function () { return _this.disconnectObservable(obs$); };
        var activeStream = {};
        this.activeStreams.set(obs$, activeStream);
        activeStream.subs = obs$.subscribe(next, error, complete);
    };
    UiBlockService.prototype.disconnectObservable = function (obs$) {
        var obsStore = this.activeStreams.get(obs$);
        if (obsStore) {
            if (!obsStore.subs.closed) {
                obsStore.subs.unsubscribe();
            }
            if (obsStore.ref) {
                obsStore.ref.close();
            }
            this.activeStreams.delete(obs$);
        }
    };
    UiBlockService.prototype.open = function (component, config) {
        if (config && !config.hasOwnProperty('disableClose')) {
            config.disableClose = !this.options.block;
        }
        var dialogRef = this.dialog.open(component, config);
        var blocking = new BlockingRef(dialogRef, this.options);
        this.options = {};
        return Object.create(dialogRef, { blocking: { value: blocking } });
    };
    UiBlockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], UiBlockService);
    return UiBlockService;
}());



/***/ }),

/***/ "./src/modules/@shared/shared.module.ts":
/*!**********************************************!*\
  !*** ./src/modules/@shared/shared.module.ts ***!
  \**********************************************/
/*! exports provided: DeclarationSharedModule, SharedModuleRoot, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationSharedModule", function() { return DeclarationSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModuleRoot", function() { return SharedModuleRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tdm/ngx-http-client */ "../../libs/ngx-http-client/src/index.ts");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./src/modules/@shared/modules.ts");
/* harmony import */ var _services_ui_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ui-block */ "./src/modules/@shared/services/ui-block.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/location.service */ "./src/modules/@shared/services/location.service.ts");
/* harmony import */ var _services_top_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/top-nav.service */ "./src/modules/@shared/services/top-nav.service.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/modules/@shared/components/index.ts");
/* harmony import */ var _cdk_detail_row_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cdk-detail-row.directive */ "./src/modules/@shared/cdk-detail-row.directive.ts");
/* harmony import */ var _directives_anchor_trap_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/anchor-trap.directive */ "./src/modules/@shared/directives/anchor-trap.directive.ts");
/* harmony import */ var _data_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data-source */ "./src/modules/@shared/data-source/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes */ "./src/modules/@shared/pipes/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DECLARATIONS = [
    _components__WEBPACK_IMPORTED_MODULE_6__["TdmCodeViewComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["TdmMarkdownViewComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["TdmPackageWelcomeComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["TdmFeatureListComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["TdmLedComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["TutorialPageComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["UiBlock"],
    _cdk_detail_row_directive__WEBPACK_IMPORTED_MODULE_7__["CdkDetailRowDirective"],
    _directives_anchor_trap_directive__WEBPACK_IMPORTED_MODULE_8__["AnchorTrapDirective"],
    _data_source__WEBPACK_IMPORTED_MODULE_9__["DataSourceDirective"],
    _pipes__WEBPACK_IMPORTED_MODULE_10__["TdmCodeExtractPipe"]
];
var DeclarationSharedModule = /** @class */ (function () {
    function DeclarationSharedModule() {
    }
    DeclarationSharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: DECLARATIONS,
            imports: _modules__WEBPACK_IMPORTED_MODULE_2__["MODULES"],
            entryComponents: [_components__WEBPACK_IMPORTED_MODULE_6__["UiBlock"]],
            exports: DECLARATIONS
        })
    ], DeclarationSharedModule);
    return DeclarationSharedModule;
}());

// tslint:disable-next-line
var SharedModuleRoot = /** @class */ (function () {
    function SharedModuleRoot() {
    }
    SharedModuleRoot = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: _modules__WEBPACK_IMPORTED_MODULE_2__["ROOT_MODULES"],
            exports: _modules__WEBPACK_IMPORTED_MODULE_2__["MODULES"].concat([
                DeclarationSharedModule
            ]),
            providers: [
                _services_ui_block__WEBPACK_IMPORTED_MODULE_3__["UiBlockService"],
                _services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"],
                _services_top_nav_service__WEBPACK_IMPORTED_MODULE_5__["TopNavService"],
                { provide: _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpDefaultConfig"], useValue: _tdm_ngx_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpDefaultConfig"].create({ baseUrl: '/api' }) }
            ]
        })
    ], SharedModuleRoot);
    return SharedModuleRoot;
}());

// tslint:disable-next-line
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return { ngModule: SharedModuleRoot };
    };
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: _modules__WEBPACK_IMPORTED_MODULE_2__["MODULES"],
            exports: _modules__WEBPACK_IMPORTED_MODULE_2__["MODULES"].concat([
                DeclarationSharedModule
            ])
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/modules/@shared/toc/index.ts":
/*!******************************************!*\
  !*** ./src/modules/@shared/toc/index.ts ***!
  \******************************************/
/*! exports provided: TocHeadDirective, TocAreaDirective, TocLinkTemplateDirective, TocComponent, TocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toc_head_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toc-head.directive */ "./src/modules/@shared/toc/toc-head.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocHeadDirective", function() { return _toc_head_directive__WEBPACK_IMPORTED_MODULE_0__["TocHeadDirective"]; });

/* harmony import */ var _toc_area_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toc-area.directive */ "./src/modules/@shared/toc/toc-area.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocAreaDirective", function() { return _toc_area_directive__WEBPACK_IMPORTED_MODULE_1__["TocAreaDirective"]; });

/* harmony import */ var _toc_link_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toc-link-template */ "./src/modules/@shared/toc/toc-link-template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocLinkTemplateDirective", function() { return _toc_link_template__WEBPACK_IMPORTED_MODULE_2__["TocLinkTemplateDirective"]; });

/* harmony import */ var _toc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toc.component */ "./src/modules/@shared/toc/toc.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocComponent", function() { return _toc_component__WEBPACK_IMPORTED_MODULE_3__["TocComponent"]; });

/* harmony import */ var _toc_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toc.module */ "./src/modules/@shared/toc/toc.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocModule", function() { return _toc_module__WEBPACK_IMPORTED_MODULE_4__["TocModule"]; });








/***/ }),

/***/ "./src/modules/@shared/toc/toc-area.directive.ts":
/*!*******************************************************!*\
  !*** ./src/modules/@shared/toc/toc-area.directive.ts ***!
  \*******************************************************/
/*! exports provided: TocAreaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocAreaDirective", function() { return TocAreaDirective; });
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "../../node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "../../node_modules/rxjs/observable/fromEvent.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _toc_head_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toc-head.directive */ "./src/modules/@shared/toc/toc-head.directive.ts");
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







var DEFAULT_OFFSET_CACHE = [0, 0];
var DEFAULT_SELECTOR = "h1[id]:not(.no-toc), h2[id]:not(.no-toc), h3[id]:not(.no-toc), h1 > a[id].anchor, h2 > a[id].anchor, h3 > a[id].anchor";
function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
/**
 * A logical container and unit of work for a table of contents.
 * [[TocAreaDirective]] represents A group of [[TocHeadDirective]] and with them form an instance of
 * table of contents.
 *
 * [[TocAreaDirective]] contains the logic for handling the behaviour, which includes
 * adding/removing [[TocHeadDirective]] instances and handling scrolling to reflect the active
 * link.
 *
 * [[TocComponent]] uses [[TocAreaDirective]] to create a UI representation of the TOC.
 *
 * [[TocAreaDirective]] can works in a Directive mode or in standalone mode.
 *
 * ## Directive mode
 * In this mode, [[TocAreaDirective]] works with the [[TocHeadDirective]] directive using the
 * angular DI system and collects all instances of [[TocHeadDirective]] within its scope.
 * When the angular router is used, [[TocAreaDirective]] will use [[ActivatedRoute]] via DI
 * to automatically detect changes to the fragment portion of the URL and will try to scroll to
 * the link representing the fragment.
 *
 * > The HTML element H1, H2 and H3 when set with an `id` attribute (`<h1 id="4">Title</h1>`) are
 * triggered by [[TocHeadDirective]], to exclude such elements add the class `no-toc`.
 *
 * ## Standalone mode
 * In this mode, [[TocAreaDirective]] requires manual instantiation by the developer and does not
 * go through the templates.
 * Standalone mode provides TOC support for static HTML content where [[TocHeadDirective]] are
 * manually created by searching for matching elements using the querySelector API.
 * [[TocHeadDirective]] support this scenario with [[TocHeadDirective#fromElement]]
 *
 * To automatically scroll a header link element into view when the fragment portion of a URL has
 * changed the developer needs to manually register to such notification and then use
 * [[TocAreaDirective.scrollTo]] to try and scroll it into view.
 * An alternative, easier way, is to initialize [[TocAreaDirective]] with an [[ActivatedRoute]]
 * instance and [[TocAreaDirective]] will take care of fragment changes.
 */
var TocAreaDirective = /** @class */ (function () {
    function TocAreaDirective(route, elRef) {
        var _this = this;
        this.elRef = elRef;
        this.links = [];
        this._urlFragment = '';
        this._offsetCache = DEFAULT_OFFSET_CACHE;
        this._activeLink$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
        this._linksChanged$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.links);
        this.linksChanged = this._linksChanged$.asObservable();
        this.activeLinkChanged = this._activeLink$.asObservable();
        if (route) {
            this._fragmentSubscription = route.fragment.subscribe(function (fragment) {
                _this._urlFragment = fragment;
                if (fragment) {
                    _this.scrollTo(fragment);
                }
            });
        }
    }
    Object.defineProperty(TocAreaDirective.prototype, "scrollContainer", {
        set: function (value) {
            var _this = this;
            this._isWindowContainer = !value;
            var scrollContainer = value || window;
            if (scrollContainer !== this._scrollContainer) {
                if (this._scrollSubscription) {
                    this._scrollSubscription.unsubscribe();
                }
                this._scrollContainer = scrollContainer;
                if (scrollContainer) {
                    this._scrollSubscription = Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this._scrollContainer, 'scroll')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(10))
                        .subscribe(function () { return _this.onScroll(); });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TocAreaDirective.prototype, "containerHeight", {
        get: function () {
            return this._isWindowContainer
                ? this._scrollContainer.innerHeight
                : this._scrollContainer.scrollHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TocAreaDirective.prototype, "getScrollOffset", {
        /** Gets the scroll offset of the scroll container */
        get: function () {
            return this._isWindowContainer
                ? this._scrollContainer.pageYOffset
                : this._scrollContainer.scrollTop +
                    this._scrollContainer.getBoundingClientRect().top;
        },
        enumerable: true,
        configurable: true
    });
    TocAreaDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        var el = this.elRef && this.elRef.nativeElement;
        if (el && isPromise(this.staticHtmlMode)) {
            this.staticHtmlMode.then(function () {
                _this.queryLinksAndAdd(el);
            });
        }
        else if (el && Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(this.staticHtmlMode)) {
            this.queryLinksAndAdd(el);
        }
    };
    TocAreaDirective.prototype.reinitQueryLinks = function (p) {
        var _this = this;
        var el = this.elRef && this.elRef.nativeElement;
        p.then(function () {
            setTimeout(function () {
                _this.links = [];
                _this.queryLinksAndAdd(el);
                _this._linksChanged$.next(_this.links);
            }, 25);
        });
    };
    /**
     * analyze link and publish links changed event
     * @param tocLink
     */
    TocAreaDirective.prototype.initLink = function (tocLink) {
        if (this._urlFragment && this._urlFragment === tocLink.link.id) {
            this.scrollIntoView(tocLink);
        }
        this._linksChanged$.next(this.links);
    };
    /**
     * Add the tocLink to the collection but does not analyze or publish links changed event
     * @param tocLink
     */
    TocAreaDirective.prototype.add = function (tocLink) {
        this.links.push(tocLink);
    };
    TocAreaDirective.prototype.remove = function (tocLink) {
        var linkIdx = this.links.indexOf(tocLink);
        if (linkIdx > -1) {
            this.links.splice(linkIdx, 1);
            this._linksChanged$.next(this.links);
            if (linkIdx <= this._offsetCache[1]) {
                this._offsetCache = DEFAULT_OFFSET_CACHE;
            }
        }
    };
    TocAreaDirective.prototype.ngOnDestroy = function () {
        if (this._fragmentSubscription) {
            this._fragmentSubscription.unsubscribe();
        }
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
        }
    };
    /**
     * Try to find a [[TocHeadDirective]] using the supplied `fragment`
     * (i.e. fragment equals [[TocLink.id]]) and if found scroll it into view.
     * @param fragment
     */
    TocAreaDirective.prototype.scrollTo = function (fragment) {
        var tocLink = this.links.find(function (l) { return l.link.id === fragment; });
        if (tocLink) {
            this.scrollIntoView(tocLink);
        }
    };
    TocAreaDirective.prototype.scrollIntoView = function (tocLink) {
        var _this = this;
        // scroll after angular finishes rendering the page
        // so resizing operation, element init expansion etc are taking into consideration
        setTimeout(function () {
            _this._activeLink$.next(tocLink);
            tocLink.scrollIntoView();
        });
    };
    TocAreaDirective.prototype.queryLinksAndAdd = function (el) {
        var _this = this;
        var headers = el.querySelectorAll(this.selector || DEFAULT_SELECTOR);
        Array.from(headers).forEach(function (node) {
            _toc_head_directive__WEBPACK_IMPORTED_MODULE_6__["TocHeadDirective"].fromElement(node, _this);
        });
    };
    TocAreaDirective.prototype.onScroll = function () {
        var height = this.containerHeight;
        var scrollOffset = this.getScrollOffset;
        /* We check if the height of the scroll container has changed since last scroll
           If it changed we need to calculate all top positions for the links elemnts as they might
           have change. A good example is an expending element that when opened or closed change the top
           position for all header links below it. */
        if (height !== this._lastHeight) {
            var offset = scrollOffset;
            // The top position of the header link DOM element contains the top section
            // and the scrollOffset also contains it, we reduce one.
            if (!this._isWindowContainer) {
                offset -= this._scrollContainer.getBoundingClientRect().top;
            }
            for (var i = 0, len = this.links.length; i < len; i++) {
                this.links[i].reCalcPosition(offset);
            }
            // cache the height
            this._lastHeight = height;
        }
        this.setActive(scrollOffset);
    };
    /**
     * Set the active header link based on the scrolling offset.
     * The implementation assumes linear scrolling is common so each call to setActive creates a state
     * for the next call to come. The state holds the last offset and active link index.
     * With the state the direction of the scroll is known, and based on the direction of scrolling
     * the array of links is iterated (up/down) from that last active index.
     *
     * This will average iterations to O(1), when each scroll usually either doesn't change the active
     * header or changes it to the next/prev header.
     * @param scrollOffset
     */
    TocAreaDirective.prototype.setActive = function (scrollOffset) {
        var arr = this.links;
        var direction = scrollOffset >= this._offsetCache[0] ? 1 : -1;
        for (var i = this._offsetCache[1]; !!arr[i]; i = i + direction) {
            if (this.isLinkActive(scrollOffset, arr[i], arr[i + 1])) {
                if (arr[i] !== this._activeLink$.getValue()) {
                    this._offsetCache = [scrollOffset, i];
                    this._activeLink$.next(arr[i]);
                }
                return;
            }
        }
        this._offsetCache = DEFAULT_OFFSET_CACHE;
        this._activeLink$.next(undefined);
    };
    TocAreaDirective.prototype.isLinkActive = function (scrollOffset, currentLink, nextLink) {
        // A link is considered active if the page is scrolled passed the anchor without also
        // being scrolled passed the next link
        return scrollOffset >= currentLink.link.top && !(nextLink && nextLink.link.top < scrollOffset);
    };
    Object.defineProperty(TocAreaDirective, "defaultSelector", {
        get: function () {
            return DEFAULT_SELECTOR;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Element),
        __metadata("design:paramtypes", [Element])
    ], TocAreaDirective.prototype, "scrollContainer", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], TocAreaDirective.prototype, "tocTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], TocAreaDirective.prototype, "staticHtmlMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], TocAreaDirective.prototype, "selector", void 0);
    TocAreaDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
            selector: '[tdmTocArea]',
            exportAs: 'tocArea'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], TocAreaDirective);
    return TocAreaDirective;
}());



/***/ }),

/***/ "./src/modules/@shared/toc/toc-head.directive.ts":
/*!*******************************************************!*\
  !*** ./src/modules/@shared/toc/toc-head.directive.ts ***!
  \*******************************************************/
/*! exports provided: TocHeadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocHeadDirective", function() { return TocHeadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toc_area_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toc-area.directive */ "./src/modules/@shared/toc/toc-area.directive.ts");
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
 * A directive that represents a header that has a TOC record (link).
 *
 * Automatically set H1, H2 and H3 elements that has an `id` attribute (`<h1 id="4">Title</h1>`).
 * To exclude an H1, H2 or H3 elements (that has an id) add the class `no-toc` to it.
 *
 * Other elements can also be used as link headers, to mark them add the `tdmTocHead` attribute to
 * them following and id attribute. If the element is not an [[HTMLHeadingElement]] (Hx) it is
 * mandatory to set the `level` (1 to n) attribute. (`<a id="link" name="title" level="2"></a>`)
 *
 * The title used in the TOC is the value in the `name` attribute (Input binging supported) or
 * if not set, the innerText value of the element. Usually the inner text is sufficient unless it
 * includes context that is not visible via CSS / JS.
 *
 * A link directive/element can set/override the `level` value by setting it on the
 * html element explicitly. If set, the attribute overrides the Heading level.
 *
 * This directive is built with support for TOC on static HTML content using the querySelector API.
 * See [[TocHeadDirective#fromElement]]
 */
var TocHeadDirective = /** @class */ (function () {
    function TocHeadDirective(elementRef, tocArea) {
        this.elementRef = elementRef;
        this.tocArea = tocArea;
        this.link = {
            name: '',
            level: 1,
            top: 0,
            id: ''
        };
        this.el = elementRef.nativeElement;
        this.tocArea.add(this);
    }
    TocHeadDirective_1 = TocHeadDirective;
    TocHeadDirective.prototype.assignLink = function (value) {
        if (value) {
            Object.assign(this.link, value);
        }
    };
    TocHeadDirective.prototype.ngAfterViewInit = function () {
        this.addToService();
    };
    TocHeadDirective.prototype.scrollIntoView = function () {
        this.el.scrollIntoView();
    };
    TocHeadDirective.prototype.ngOnDestroy = function () {
        this.tocArea.remove(this);
    };
    TocHeadDirective.prototype.reCalcPosition = function (scrollTop) {
        this.link.top = this.el.getBoundingClientRect().top + scrollTop;
    };
    TocHeadDirective.prototype.addToService = function () {
        if (!this.link.name) {
            // because we bind @Inputs id,name,level to their respective attributes
            // they are now in the element and createLink will grab them.
            this.link = TocHeadDirective_1.createLink(this.el);
        }
        if (this.link.name && this.link.id) {
            this.tocArea.initLink(this);
        }
    };
    /**
     * Creates an instance of [[TocHeadDirective]] for use outside of angular.
     * This will allow treating [[TocHeadDirective]] as a simple class to implement TOC on static
     * HTML content using querySelector API.
     * @param element
     * @param tocArea
     * @param link Optional data to set on the [[TocLink]] object, it is recommended to apply such
     * data here and not after initializing.
     * @return {TocHeadDirective}
     */
    TocHeadDirective.fromElement = function (element, tocArea, link) {
        if (element.tagName === 'A') {
            element = element.parentElement;
        }
        var tocHead = new TocHeadDirective_1(new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](element), tocArea);
        if (!link) {
            link = TocHeadDirective_1.createLink(element);
        }
        tocHead.assignLink(link);
        tocHead.ngAfterViewInit();
        return tocHead;
    };
    TocHeadDirective.createLink = function (element) {
        var tagName = element.tagName.match(/^h(\d)$/i);
        var id = element.id;
        if (!id) {
            var anchor = element.querySelector('a.anchor');
            if (anchor) {
                id = anchor.id;
            }
        }
        return {
            name: element.getAttribute('name') || element.innerText,
            level: element.getAttribute('level') || (tagName ? tagName[1] : 1),
            top: 0,
            id: id
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.id'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TocHeadDirective.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.name'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TocHeadDirective.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.level'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TocHeadDirective.prototype, "level", void 0);
    TocHeadDirective = TocHeadDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tdmTocHead][id], h1[id]:not(.no-toc), h2[id]:not(.no-toc), h3[id]:not(.no-toc)'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _toc_area_directive__WEBPACK_IMPORTED_MODULE_1__["TocAreaDirective"]])
    ], TocHeadDirective);
    return TocHeadDirective;
    var TocHeadDirective_1;
}());



/***/ }),

/***/ "./src/modules/@shared/toc/toc-link-template.ts":
/*!******************************************************!*\
  !*** ./src/modules/@shared/toc/toc-link-template.ts ***!
  \******************************************************/
/*! exports provided: TocLinkTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocLinkTemplateDirective", function() { return TocLinkTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toc.component */ "./src/modules/@shared/toc/toc.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TocLinkTemplateDirective = /** @class */ (function () {
    function TocLinkTemplateDirective(tocComponent, template) {
        tocComponent.setLinkTemplate(template);
    }
    TocLinkTemplateDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tocLinkTemplate]'
        }),
        __metadata("design:paramtypes", [_toc_component__WEBPACK_IMPORTED_MODULE_1__["TocComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], TocLinkTemplateDirective);
    return TocLinkTemplateDirective;
}());



/***/ }),

/***/ "./src/modules/@shared/toc/toc.component.html":
/*!****************************************************!*\
  !*** ./src/modules/@shared/toc/toc.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tdm-toc-container\">\n  <div *ngIf=\"linksChanged | async as links\" class=\"tdm-toc-inner\">\n    <div *ngIf=\"tocArea.tocTitle\" class=\"tdm-toc-heading\">{{ tocArea.tocTitle }}</div>\n    <ul class=\"tdm-toc-list\">\n      <li *ngFor=\"let l of links; let i = index\"\n          class=\"tdm-toc-link tdm-toc-level-{{l.link.level}}\"\n          [class.active]=\"l === activeLink\">\n        <ng-container *ngTemplateOutlet=\"linkTemplate || defaultLinkTemplate; context: { $implicit: { rootUrl: rootUrl, link: l.link } }\"></ng-container>\n      </li>\n    </ul>\n  </div>\n</div>\n<ng-template #defaultLinkTemplate let-ctx>\n  <a [href]=\"'#' + ctx.rootUrl + '#' + ctx.link.id\">{{ ctx.link.name }}</a>\n</ng-template>\n"

/***/ }),

/***/ "./src/modules/@shared/toc/toc.component.ts":
/*!**************************************************!*\
  !*** ./src/modules/@shared/toc/toc.component.ts ***!
  \**************************************************/
/*! exports provided: TocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocComponent", function() { return TocComponent; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "../../node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toc_area_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toc-area.directive */ "./src/modules/@shared/toc/toc-area.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TocComponent = /** @class */ (function () {
    function TocComponent(router, cdr) {
        var _this = this;
        this.cdr = cdr;
        /**
         * Use an internal subject to proxy all incoming data from the TocAreaDirective.linksChanged stream
         * The proxy is in-place to prevent redundant rendering of items in the link detection phase
         * where link's register one by one
         * @internal
         */
        this.linksChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._routeSubscription = router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
            .subscribe(function (event) { return (_this.rootUrl = router.url.split('#')[0]); });
    }
    Object.defineProperty(TocComponent.prototype, "tocArea", {
        get: function () {
            return this._tocArea;
        },
        set: function (value) {
            var _this = this;
            if (this._tocArea !== value) {
                this._tocArea = value;
                this.destroyLocal();
                if (value) {
                    this._linksChangedSubscription = value.linksChanged
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(10))
                        .subscribe(this.linksChanged);
                    this._activeLinkSubscription = value.activeLinkChanged
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (activeLink) { return activeLink !== _this.activeLink; }))
                        .subscribe(function (al) {
                        _this.activeLink = al;
                        _this.cdr.detectChanges();
                    });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    TocComponent.prototype.setLinkTemplate = function (template) {
        this.linkTemplate = template;
    };
    TocComponent.prototype.ngOnDestroy = function () {
        this._routeSubscription.unsubscribe();
        this.destroyLocal();
    };
    TocComponent.prototype.destroyLocal = function () {
        if (this._linksChangedSubscription) {
            this._linksChangedSubscription.unsubscribe();
            this._linksChangedSubscription = undefined;
        }
        if (this._activeLinkSubscription) {
            this._activeLinkSubscription.unsubscribe();
            this._activeLinkSubscription = undefined;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _toc_area_directive__WEBPACK_IMPORTED_MODULE_4__["TocAreaDirective"]),
        __metadata("design:paramtypes", [_toc_area_directive__WEBPACK_IMPORTED_MODULE_4__["TocAreaDirective"]])
    ], TocComponent.prototype, "tocArea", null);
    TocComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'tdm-toc',
            template: __webpack_require__(/*! ./toc.component.html */ "./src/modules/@shared/toc/toc.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], TocComponent);
    return TocComponent;
}());



/***/ }),

/***/ "./src/modules/@shared/toc/toc.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/@shared/toc/toc.module.ts ***!
  \***********************************************/
/*! exports provided: TocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocModule", function() { return TocModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toc_head_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toc-head.directive */ "./src/modules/@shared/toc/toc-head.directive.ts");
/* harmony import */ var _toc_area_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toc-area.directive */ "./src/modules/@shared/toc/toc-area.directive.ts");
/* harmony import */ var _toc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toc.component */ "./src/modules/@shared/toc/toc.component.ts");
/* harmony import */ var _toc_link_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toc-link-template */ "./src/modules/@shared/toc/toc-link-template.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TocModule = /** @class */ (function () {
    function TocModule() {
    }
    TocModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_toc_area_directive__WEBPACK_IMPORTED_MODULE_3__["TocAreaDirective"], _toc_head_directive__WEBPACK_IMPORTED_MODULE_2__["TocHeadDirective"], _toc_component__WEBPACK_IMPORTED_MODULE_4__["TocComponent"], _toc_link_template__WEBPACK_IMPORTED_MODULE_5__["TocLinkTemplateDirective"]],
            exports: [_toc_area_directive__WEBPACK_IMPORTED_MODULE_3__["TocAreaDirective"], _toc_head_directive__WEBPACK_IMPORTED_MODULE_2__["TocHeadDirective"], _toc_component__WEBPACK_IMPORTED_MODULE_4__["TocComponent"], _toc_link_template__WEBPACK_IMPORTED_MODULE_5__["TocLinkTemplateDirective"]]
        })
    ], TocModule);
    return TocModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shlomiassaf/Desktop/Code/shlomi/__LIB__/tdm/apps/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map