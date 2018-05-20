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
exports.__esModule = true;
var webpack = require("webpack");
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
var PLUGIN_NAME = 'ServiceWorkerTsPlugin';
/**
 * A Plugin that does what ServiceWorkerWebpackPlugin but with type checking using ForkTsCheckerWebpackPlugin.
 * The plugin wraps ServiceWorkerWebpackPlugin so it can control the flow of errors from it and display them (without this errors are hidden).
 */
var ServiceWorkerTsPlugin = /** @class */ (function (_super) {
    __extends(ServiceWorkerTsPlugin, _super);
    function ServiceWorkerTsPlugin(tsPluginOptions, swPluginOptions) {
        var _this = _super.call(this, swPluginOptions) || this;
        _this.pending = [];
        _this.watching = false;
        _this.running = true;
        _this.firstRun = true;
        tsPluginOptions.logger = _this.logger = Object.create(console);
        _this.logger.warn = _this.logger.error = function () { }; // tslint:disable-line:no-empty
        tsPluginOptions.formatter = function (message, useColors) {
            if (_this.running) {
                if (!_this.firstRun && _this.compilation) {
                    _this.postLog(message);
                }
                else {
                    _this.pending.push(message);
                }
            }
            return '';
        };
        _this.forkTsChecker = new ForkTsCheckerWebpackPlugin(tsPluginOptions);
        return _this;
    }
    ServiceWorkerTsPlugin.prototype.apply = function (compiler) {
        var _this = this;
        compiler.hooks.done.tap(PLUGIN_NAME, function () {
            if (_this.firstRun) {
                _this.flush();
                _this.firstRun = false;
            }
            if (!_this.watching) {
                _this.running = false;
            }
        });
        compiler.hooks.watchRun.tapAsync(PLUGIN_NAME, function (c, callback) {
            _this.watching = true;
            compiler.hooks.watchClose.tap(PLUGIN_NAME, function () {
                _this.flush();
                _this.running = false;
            });
            callback();
        });
        // we create a DO-NOTHING compilation just to get a callback for later.
        // we use the callback to emit an error later, if such occures on the child compilation of the serviceworker plugin compilation child
        // couldn't find another way to do so, as the underlaying ServiceWorkerWebpackPlugin plugin silence all error's from it's internal handleMake() implementation.
        // see handleMake() for more details.
        compiler.hooks.make.tapAsync(PLUGIN_NAME, function (c, callback) { return _this.errorGuard = callback; });
        _super.prototype.apply.call(this, compiler);
    };
    ServiceWorkerTsPlugin.prototype.handleMake = function (compilation, compiler) {
        var _this = this;
        this.compilation = compilation;
        // This is a placeholder for errors caused in the compilation process done for the service worker (by the parent class).
        // we set this to the errors array of the compilation of the child compiler.
        // The parent class will create all of the above, we just listen to the childCompiler event of the CURRENT compilation
        // and once fired, we listen to the compilation event of it (this will be the last of: compiler => compilation => childCompiler => compilation)
        // we save the ref for that compilation so if the compilation has errors we will know about them.
        var childCompilation;
        // Assign the ngtools webpack plugin instance from the parent compilation to all compilation created by a child
        // compiler of the parent compilation.
        // We need this so imports from the server bundle to outside of it will work (they go to the ngtools webpack plugin)
        var syncAotPluginBetweenCompilations = function (childCompiler, compilerName, compilerIndex) {
            if (syncAotPluginBetweenCompilations) {
                childCompiler.hooks.compilation.tap(PLUGIN_NAME, function (compilation2) {
                    compilation2._ngToolsWebpackPluginInstance = compilation._ngToolsWebpackPluginInstance;
                    childCompilation = compilation2;
                });
                syncAotPluginBetweenCompilations = undefined;
            }
        };
        compilation.hooks.childCompiler.tap(PLUGIN_NAME, syncAotPluginBetweenCompilations);
        return _super.prototype.handleMake.call(this, compilation, compiler)
            .then(function () { return _this.errorGuard(childCompilation.errors[0]); })["catch"](function (err) {
            _this.errorGuard(err);
            throw err;
        });
    };
    ServiceWorkerTsPlugin.prototype.handleEmit = function (compilation, compiler, callback) {
        /*
        Overriding handleEmit() is required for serveral reasons:
          1) The base method is not 100% safe, if error is thrown webpack will freeze (callback never invoked)
          2) When the base method does find errors it will push them to `compilation.errors` which does not bubble up to webpack.
             To make webpack aware of the error we need to pass it to the callback.
          3) The base methods try's to access `webpack.optimize.UglifyJsPlugin` which will throw an error in webpack 4+.
             A workaround is implemented to avoid the error.
             remove when https://github.com/oliviertassinari/serviceworker-webpack-plugin/issues/73 is fixed.
        */
        /* 3 */ var oldOptimize = webpack.optimize;
        webpack.optimize = Object.create(oldOptimize, {
            UglifyJsPlugin: {
                // this is a specific fix for the parent class issue
                // When minimize is true, it will return the first plugin's constructor so the `instanceof` expression is true.
                // otherwise it will return an ad-hoc class which will never resolve to true.
                get: function () {
                    return compiler.options.optimization && compiler.options.optimization.minimize
                        ? compiler.options.plugins[0].constructor
                        : /** @class */ (function () {
                            function class_1() {
                            }
                            return class_1;
                        }());
                }
            }
        }); /* 3 */
        var cb = function (err) {
            /* 3 */ webpack.optimize = oldOptimize; /* 3 */
            /* 2 */ callback(err || compilation.errors[0]); /* 2 */
        };
        /* 1 */ try {
            _super.prototype.handleEmit.call(this, compilation, compiler, cb);
        }
        catch (err) {
            compilation.errors.push(err);
            cb();
        } /* 1 */
    };
    ServiceWorkerTsPlugin.prototype.flush = function () {
        while (this.pending.length) {
            this.postLog(this.pending.shift());
        }
    };
    ServiceWorkerTsPlugin.prototype.postLog = function (message) {
        if (message.type === 'diagnostic') {
            var log = {
                // module: ''
                file: message.file,
                message: message.content,
                location: { line: message.line, character: message.character },
                loaderSource: ''
            };
            if (message.severity === 'error') {
                this.compilation.errors.push(log);
            }
            else {
                this.compilation.warnings.push(log);
            }
        }
    };
    ServiceWorkerTsPlugin.create = function (tsPluginOptions, swPluginOptions) {
        var sw = new ServiceWorkerTsPlugin(tsPluginOptions, swPluginOptions);
        return [sw.forkTsChecker, sw];
    };
    return ServiceWorkerTsPlugin;
}(ServiceWorkerWebpackPlugin));
exports.ServiceWorkerTsPlugin = ServiceWorkerTsPlugin;
