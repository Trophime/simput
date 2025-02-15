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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./types/oscillator/src/index.js-exposed");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js??ref--9-0!./types/oscillator/src/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--9-0!./types/oscillator/src/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n;\nmodule.exports = {\n     type: 'oscillator',\n     model: __webpack_require__(/*! ./model.js */ \"./types/oscillator/src/model.js\"),\n     lang: __webpack_require__(/*! ./lang */ \"./types/oscillator/src/lang/index.js\"),\n     convert: __webpack_require__(/*! ./convert.js */ \"./types/oscillator/src/convert.js\"),\n     hooks: __webpack_require__(/*! ./hooks.js */ \"./types/oscillator/src/hooks.js\"),\n     parse: null\n};\n\n//# sourceURL=webpack:///./types/oscillator/src/index.js?./node_modules/babel-loader/lib??ref--9-0");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars.runtime.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\n// istanbul ignore next\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }newObj['default'] = obj;return newObj;\n  }\n}\n\nvar _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ \"./node_modules/handlebars/dist/cjs/handlebars/base.js\");\n\nvar base = _interopRequireWildcard(_handlebarsBase);\n\n// Each of these augment the Handlebars object. No need to setup here.\n// (This is done to easily share code between commonjs and browse envs)\n\nvar _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ \"./node_modules/handlebars/dist/cjs/handlebars/safe-string.js\");\n\nvar _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);\n\nvar _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _handlebarsException2 = _interopRequireDefault(_handlebarsException);\n\nvar _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar Utils = _interopRequireWildcard(_handlebarsUtils);\n\nvar _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ \"./node_modules/handlebars/dist/cjs/handlebars/runtime.js\");\n\nvar runtime = _interopRequireWildcard(_handlebarsRuntime);\n\nvar _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ \"./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js\");\n\nvar _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);\n\n// For compatibility and usage outside of module systems, make the Handlebars object a namespace\nfunction create() {\n  var hb = new base.HandlebarsEnvironment();\n\n  Utils.extend(hb, base);\n  hb.SafeString = _handlebarsSafeString2['default'];\n  hb.Exception = _handlebarsException2['default'];\n  hb.Utils = Utils;\n  hb.escapeExpression = Utils.escapeExpression;\n\n  hb.VM = runtime;\n  hb.template = function (spec) {\n    return runtime.template(spec, hb);\n  };\n\n  return hb;\n}\n\nvar inst = create();\ninst.create = create;\n\n_handlebarsNoConflict2['default'](inst);\n\ninst['default'] = inst;\n\nexports['default'] = inst;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars.runtime.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/base.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.HandlebarsEnvironment = HandlebarsEnvironment;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar _exception = __webpack_require__(/*! ./exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers.js\");\n\nvar _decorators = __webpack_require__(/*! ./decorators */ \"./node_modules/handlebars/dist/cjs/handlebars/decorators.js\");\n\nvar _logger = __webpack_require__(/*! ./logger */ \"./node_modules/handlebars/dist/cjs/handlebars/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar VERSION = '4.0.11';\nexports.VERSION = VERSION;\nvar COMPILER_REVISION = 7;\n\nexports.COMPILER_REVISION = COMPILER_REVISION;\nvar REVISION_CHANGES = {\n  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it\n  2: '== 1.0.0-rc.3',\n  3: '== 1.0.0-rc.4',\n  4: '== 1.x.x',\n  5: '== 2.0.0-alpha.x',\n  6: '>= 2.0.0-beta.1',\n  7: '>= 4.0.0'\n};\n\nexports.REVISION_CHANGES = REVISION_CHANGES;\nvar objectType = '[object Object]';\n\nfunction HandlebarsEnvironment(helpers, partials, decorators) {\n  this.helpers = helpers || {};\n  this.partials = partials || {};\n  this.decorators = decorators || {};\n\n  _helpers.registerDefaultHelpers(this);\n  _decorators.registerDefaultDecorators(this);\n}\n\nHandlebarsEnvironment.prototype = {\n  constructor: HandlebarsEnvironment,\n\n  logger: _logger2['default'],\n  log: _logger2['default'].log,\n\n  registerHelper: function registerHelper(name, fn) {\n    if (_utils.toString.call(name) === objectType) {\n      if (fn) {\n        throw new _exception2['default']('Arg not supported with multiple helpers');\n      }\n      _utils.extend(this.helpers, name);\n    } else {\n      this.helpers[name] = fn;\n    }\n  },\n  unregisterHelper: function unregisterHelper(name) {\n    delete this.helpers[name];\n  },\n\n  registerPartial: function registerPartial(name, partial) {\n    if (_utils.toString.call(name) === objectType) {\n      _utils.extend(this.partials, name);\n    } else {\n      if (typeof partial === 'undefined') {\n        throw new _exception2['default']('Attempting to register a partial called \"' + name + '\" as undefined');\n      }\n      this.partials[name] = partial;\n    }\n  },\n  unregisterPartial: function unregisterPartial(name) {\n    delete this.partials[name];\n  },\n\n  registerDecorator: function registerDecorator(name, fn) {\n    if (_utils.toString.call(name) === objectType) {\n      if (fn) {\n        throw new _exception2['default']('Arg not supported with multiple decorators');\n      }\n      _utils.extend(this.decorators, name);\n    } else {\n      this.decorators[name] = fn;\n    }\n  },\n  unregisterDecorator: function unregisterDecorator(name) {\n    delete this.decorators[name];\n  }\n};\n\nvar log = _logger2['default'].log;\n\nexports.log = log;\nexports.createFrame = _utils.createFrame;\nexports.logger = _logger2['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/base.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.registerDefaultDecorators = registerDefaultDecorators;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nvar _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ \"./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js\");\n\nvar _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);\n\nfunction registerDefaultDecorators(instance) {\n  _decoratorsInline2['default'](instance);\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/decorators.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js":
/*!**************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerDecorator('inline', function (fn, props, container, options) {\n    var ret = fn;\n    if (!props.partials) {\n      props.partials = {};\n      ret = function ret(context, options) {\n        // Create a new partials stack frame prior to exec.\n        var original = container.partials;\n        container.partials = _utils.extend({}, original, props.partials);\n        var ret = fn(context, options);\n        container.partials = original;\n        return ret;\n      };\n    }\n\n    props.partials[options.args[0]] = options.fn;\n\n    return ret;\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/exception.js":
/*!******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/exception.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];\n\nfunction Exception(message, node) {\n  var loc = node && node.loc,\n      line = undefined,\n      column = undefined;\n  if (loc) {\n    line = loc.start.line;\n    column = loc.start.column;\n\n    message += ' - ' + line + ':' + column;\n  }\n\n  var tmp = Error.prototype.constructor.call(this, message);\n\n  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.\n  for (var idx = 0; idx < errorProps.length; idx++) {\n    this[errorProps[idx]] = tmp[errorProps[idx]];\n  }\n\n  /* istanbul ignore else */\n  if (Error.captureStackTrace) {\n    Error.captureStackTrace(this, Exception);\n  }\n\n  try {\n    if (loc) {\n      this.lineNumber = line;\n\n      // Work around issue under safari where we can't directly set the column value\n      /* istanbul ignore next */\n      if (Object.defineProperty) {\n        Object.defineProperty(this, 'column', {\n          value: column,\n          enumerable: true\n        });\n      } else {\n        this.column = column;\n      }\n    }\n  } catch (nop) {\n    /* Ignore if the browser is very particular */\n  }\n}\n\nException.prototype = new Error();\n\nexports['default'] = Exception;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/exception.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.registerDefaultHelpers = registerDefaultHelpers;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nvar _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js\");\n\nvar _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);\n\nvar _helpersEach = __webpack_require__(/*! ./helpers/each */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js\");\n\nvar _helpersEach2 = _interopRequireDefault(_helpersEach);\n\nvar _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js\");\n\nvar _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);\n\nvar _helpersIf = __webpack_require__(/*! ./helpers/if */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js\");\n\nvar _helpersIf2 = _interopRequireDefault(_helpersIf);\n\nvar _helpersLog = __webpack_require__(/*! ./helpers/log */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js\");\n\nvar _helpersLog2 = _interopRequireDefault(_helpersLog);\n\nvar _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js\");\n\nvar _helpersLookup2 = _interopRequireDefault(_helpersLookup);\n\nvar _helpersWith = __webpack_require__(/*! ./helpers/with */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js\");\n\nvar _helpersWith2 = _interopRequireDefault(_helpersWith);\n\nfunction registerDefaultHelpers(instance) {\n  _helpersBlockHelperMissing2['default'](instance);\n  _helpersEach2['default'](instance);\n  _helpersHelperMissing2['default'](instance);\n  _helpersIf2['default'](instance);\n  _helpersLog2['default'](instance);\n  _helpersLookup2['default'](instance);\n  _helpersWith2['default'](instance);\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerHelper('blockHelperMissing', function (context, options) {\n    var inverse = options.inverse,\n        fn = options.fn;\n\n    if (context === true) {\n      return fn(this);\n    } else if (context === false || context == null) {\n      return inverse(this);\n    } else if (_utils.isArray(context)) {\n      if (context.length > 0) {\n        if (options.ids) {\n          options.ids = [options.name];\n        }\n\n        return instance.helpers.each(context, options);\n      } else {\n        return inverse(this);\n      }\n    } else {\n      if (options.data && options.ids) {\n        var data = _utils.createFrame(options.data);\n        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);\n        options = { data: data };\n      }\n\n      return fn(context, options);\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.__esModule = true;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar _exception = __webpack_require__(/*! ../exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nexports['default'] = function (instance) {\n  instance.registerHelper('each', function (context, options) {\n    if (!options) {\n      throw new _exception2['default']('Must pass iterator to #each');\n    }\n\n    var fn = options.fn,\n        inverse = options.inverse,\n        i = 0,\n        ret = '',\n        data = undefined,\n        contextPath = undefined;\n\n    if (options.data && options.ids) {\n      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';\n    }\n\n    if (_utils.isFunction(context)) {\n      context = context.call(this);\n    }\n\n    if (options.data) {\n      data = _utils.createFrame(options.data);\n    }\n\n    function execIteration(field, index, last) {\n      if (data) {\n        data.key = field;\n        data.index = index;\n        data.first = index === 0;\n        data.last = !!last;\n\n        if (contextPath) {\n          data.contextPath = contextPath + field;\n        }\n      }\n\n      ret = ret + fn(context[field], {\n        data: data,\n        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])\n      });\n    }\n\n    if (context && (typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object') {\n      if (_utils.isArray(context)) {\n        for (var j = context.length; i < j; i++) {\n          if (i in context) {\n            execIteration(i, i, i === context.length - 1);\n          }\n        }\n      } else {\n        var priorKey = undefined;\n\n        for (var key in context) {\n          if (context.hasOwnProperty(key)) {\n            // We're running the iterations one step out of sync so we can detect\n            // the last iteration without have to scan the object twice and create\n            // an itermediate keys array.\n            if (priorKey !== undefined) {\n              execIteration(priorKey, i - 1);\n            }\n            priorKey = key;\n            i++;\n          }\n        }\n        if (priorKey !== undefined) {\n          execIteration(priorKey, i - 1, true);\n        }\n      }\n    }\n\n    if (i === 0) {\n      ret = inverse(this);\n    }\n\n    return ret;\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nvar _exception = __webpack_require__(/*! ../exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nexports['default'] = function (instance) {\n  instance.registerHelper('helperMissing', function () /* [args, ]options */{\n    if (arguments.length === 1) {\n      // A missing field in a {{foo}} construct.\n      return undefined;\n    } else {\n      // Someone is actually trying to call something, blow up.\n      throw new _exception2['default']('Missing helper: \"' + arguments[arguments.length - 1].name + '\"');\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerHelper('if', function (conditional, options) {\n    if (_utils.isFunction(conditional)) {\n      conditional = conditional.call(this);\n    }\n\n    // Default behavior is to render the positive path if the value is truthy and not empty.\n    // The `includeZero` option may be set to treat the condtional as purely not empty based on the\n    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.\n    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {\n      return options.inverse(this);\n    } else {\n      return options.fn(this);\n    }\n  });\n\n  instance.registerHelper('unless', function (conditional, options) {\n    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports['default'] = function (instance) {\n  instance.registerHelper('log', function () /* message, options */{\n    var args = [undefined],\n        options = arguments[arguments.length - 1];\n    for (var i = 0; i < arguments.length - 1; i++) {\n      args.push(arguments[i]);\n    }\n\n    var level = 1;\n    if (options.hash.level != null) {\n      level = options.hash.level;\n    } else if (options.data && options.data.level != null) {\n      level = options.data.level;\n    }\n    args[0] = level;\n\n    instance.log.apply(instance, args);\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports['default'] = function (instance) {\n  instance.registerHelper('lookup', function (obj, field) {\n    return obj && obj[field];\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerHelper('with', function (context, options) {\n    if (_utils.isFunction(context)) {\n      context = context.call(this);\n    }\n\n    var fn = options.fn;\n\n    if (!_utils.isEmpty(context)) {\n      var data = options.data;\n      if (options.data && options.ids) {\n        data = _utils.createFrame(options.data);\n        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);\n      }\n\n      return fn(context, {\n        data: data,\n        blockParams: _utils.blockParams([context], [data && data.contextPath])\n      });\n    } else {\n      return options.inverse(this);\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/logger.js":
/*!***************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/logger.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar logger = {\n  methodMap: ['debug', 'info', 'warn', 'error'],\n  level: 'info',\n\n  // Maps a given level value to the `methodMap` indexes above.\n  lookupLevel: function lookupLevel(level) {\n    if (typeof level === 'string') {\n      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());\n      if (levelMap >= 0) {\n        level = levelMap;\n      } else {\n        level = parseInt(level, 10);\n      }\n    }\n\n    return level;\n  },\n\n  // Can be overridden in the host environment\n  log: function log(level) {\n    level = logger.lookupLevel(level);\n\n    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {\n      var method = logger.methodMap[level];\n      if (!console[method]) {\n        // eslint-disable-line no-console\n        method = 'log';\n      }\n\n      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        message[_key - 1] = arguments[_key];\n      }\n\n      console[method].apply(console, message); // eslint-disable-line no-console\n    }\n  }\n};\n\nexports['default'] = logger;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/logger.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {/* global window */\n\n\nexports.__esModule = true;\n\nexports['default'] = function (Handlebars) {\n  /* istanbul ignore next */\n  var root = typeof global !== 'undefined' ? global : window,\n      $Handlebars = root.Handlebars;\n  /* istanbul ignore next */\n  Handlebars.noConflict = function () {\n    if (root.Handlebars === Handlebars) {\n      root.Handlebars = $Handlebars;\n    }\n    return Handlebars;\n  };\n};\n\nmodule.exports = exports['default'];\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/runtime.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.__esModule = true;\nexports.checkRevision = checkRevision;\nexports.template = template;\nexports.wrapProgram = wrapProgram;\nexports.resolvePartial = resolvePartial;\nexports.invokePartial = invokePartial;\nexports.noop = noop;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\n// istanbul ignore next\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }newObj['default'] = obj;return newObj;\n  }\n}\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar Utils = _interopRequireWildcard(_utils);\n\nvar _exception = __webpack_require__(/*! ./exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/handlebars/dist/cjs/handlebars/base.js\");\n\nfunction checkRevision(compilerInfo) {\n  var compilerRevision = compilerInfo && compilerInfo[0] || 1,\n      currentRevision = _base.COMPILER_REVISION;\n\n  if (compilerRevision !== currentRevision) {\n    if (compilerRevision < currentRevision) {\n      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],\n          compilerVersions = _base.REVISION_CHANGES[compilerRevision];\n      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');\n    } else {\n      // Use the embedded version info since the runtime doesn't know about this revision yet\n      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');\n    }\n  }\n}\n\nfunction template(templateSpec, env) {\n  /* istanbul ignore next */\n  if (!env) {\n    throw new _exception2['default']('No environment passed to template');\n  }\n  if (!templateSpec || !templateSpec.main) {\n    throw new _exception2['default']('Unknown template object: ' + (typeof templateSpec === 'undefined' ? 'undefined' : _typeof(templateSpec)));\n  }\n\n  templateSpec.main.decorator = templateSpec.main_d;\n\n  // Note: Using env.VM references rather than local var references throughout this section to allow\n  // for external users to override these as psuedo-supported APIs.\n  env.VM.checkRevision(templateSpec.compiler);\n\n  function invokePartialWrapper(partial, context, options) {\n    if (options.hash) {\n      context = Utils.extend({}, context, options.hash);\n      if (options.ids) {\n        options.ids[0] = true;\n      }\n    }\n\n    partial = env.VM.resolvePartial.call(this, partial, context, options);\n    var result = env.VM.invokePartial.call(this, partial, context, options);\n\n    if (result == null && env.compile) {\n      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);\n      result = options.partials[options.name](context, options);\n    }\n    if (result != null) {\n      if (options.indent) {\n        var lines = result.split('\\n');\n        for (var i = 0, l = lines.length; i < l; i++) {\n          if (!lines[i] && i + 1 === l) {\n            break;\n          }\n\n          lines[i] = options.indent + lines[i];\n        }\n        result = lines.join('\\n');\n      }\n      return result;\n    } else {\n      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');\n    }\n  }\n\n  // Just add water\n  var container = {\n    strict: function strict(obj, name) {\n      if (!(name in obj)) {\n        throw new _exception2['default']('\"' + name + '\" not defined in ' + obj);\n      }\n      return obj[name];\n    },\n    lookup: function lookup(depths, name) {\n      var len = depths.length;\n      for (var i = 0; i < len; i++) {\n        if (depths[i] && depths[i][name] != null) {\n          return depths[i][name];\n        }\n      }\n    },\n    lambda: function lambda(current, context) {\n      return typeof current === 'function' ? current.call(context) : current;\n    },\n\n    escapeExpression: Utils.escapeExpression,\n    invokePartial: invokePartialWrapper,\n\n    fn: function fn(i) {\n      var ret = templateSpec[i];\n      ret.decorator = templateSpec[i + '_d'];\n      return ret;\n    },\n\n    programs: [],\n    program: function program(i, data, declaredBlockParams, blockParams, depths) {\n      var programWrapper = this.programs[i],\n          fn = this.fn(i);\n      if (data || depths || blockParams || declaredBlockParams) {\n        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);\n      } else if (!programWrapper) {\n        programWrapper = this.programs[i] = wrapProgram(this, i, fn);\n      }\n      return programWrapper;\n    },\n\n    data: function data(value, depth) {\n      while (value && depth--) {\n        value = value._parent;\n      }\n      return value;\n    },\n    merge: function merge(param, common) {\n      var obj = param || common;\n\n      if (param && common && param !== common) {\n        obj = Utils.extend({}, common, param);\n      }\n\n      return obj;\n    },\n    // An empty object to use as replacement for null-contexts\n    nullContext: Object.seal({}),\n\n    noop: env.VM.noop,\n    compilerInfo: templateSpec.compiler\n  };\n\n  function ret(context) {\n    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n    var data = options.data;\n\n    ret._setup(options);\n    if (!options.partial && templateSpec.useData) {\n      data = initData(context, data);\n    }\n    var depths = undefined,\n        blockParams = templateSpec.useBlockParams ? [] : undefined;\n    if (templateSpec.useDepths) {\n      if (options.depths) {\n        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;\n      } else {\n        depths = [context];\n      }\n    }\n\n    function main(context /*, options*/) {\n      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);\n    }\n    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);\n    return main(context, options);\n  }\n  ret.isTop = true;\n\n  ret._setup = function (options) {\n    if (!options.partial) {\n      container.helpers = container.merge(options.helpers, env.helpers);\n\n      if (templateSpec.usePartial) {\n        container.partials = container.merge(options.partials, env.partials);\n      }\n      if (templateSpec.usePartial || templateSpec.useDecorators) {\n        container.decorators = container.merge(options.decorators, env.decorators);\n      }\n    } else {\n      container.helpers = options.helpers;\n      container.partials = options.partials;\n      container.decorators = options.decorators;\n    }\n  };\n\n  ret._child = function (i, data, blockParams, depths) {\n    if (templateSpec.useBlockParams && !blockParams) {\n      throw new _exception2['default']('must pass block params');\n    }\n    if (templateSpec.useDepths && !depths) {\n      throw new _exception2['default']('must pass parent depths');\n    }\n\n    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);\n  };\n  return ret;\n}\n\nfunction wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {\n  function prog(context) {\n    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n    var currentDepths = depths;\n    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {\n      currentDepths = [context].concat(depths);\n    }\n\n    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);\n  }\n\n  prog = executeDecorators(fn, prog, container, depths, data, blockParams);\n\n  prog.program = i;\n  prog.depth = depths ? depths.length : 0;\n  prog.blockParams = declaredBlockParams || 0;\n  return prog;\n}\n\nfunction resolvePartial(partial, context, options) {\n  if (!partial) {\n    if (options.name === '@partial-block') {\n      partial = options.data['partial-block'];\n    } else {\n      partial = options.partials[options.name];\n    }\n  } else if (!partial.call && !options.name) {\n    // This is a dynamic partial that returned a string\n    options.name = partial;\n    partial = options.partials[partial];\n  }\n  return partial;\n}\n\nfunction invokePartial(partial, context, options) {\n  // Use the current closure context to save the partial-block if this partial\n  var currentPartialBlock = options.data && options.data['partial-block'];\n  options.partial = true;\n  if (options.ids) {\n    options.data.contextPath = options.ids[0] || options.data.contextPath;\n  }\n\n  var partialBlock = undefined;\n  if (options.fn && options.fn !== noop) {\n    (function () {\n      options.data = _base.createFrame(options.data);\n      // Wrapper function to get access to currentPartialBlock from the closure\n      var fn = options.fn;\n      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {\n        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n        // Restore the partial-block from the closure for the execution of the block\n        // i.e. the part inside the block of the partial call.\n        options.data = _base.createFrame(options.data);\n        options.data['partial-block'] = currentPartialBlock;\n        return fn(context, options);\n      };\n      if (fn.partials) {\n        options.partials = Utils.extend({}, options.partials, fn.partials);\n      }\n    })();\n  }\n\n  if (partial === undefined && partialBlock) {\n    partial = partialBlock;\n  }\n\n  if (partial === undefined) {\n    throw new _exception2['default']('The partial ' + options.name + ' could not be found');\n  } else if (partial instanceof Function) {\n    return partial(context, options);\n  }\n}\n\nfunction noop() {\n  return '';\n}\n\nfunction initData(context, data) {\n  if (!data || !('root' in data)) {\n    data = data ? _base.createFrame(data) : {};\n    data.root = context;\n  }\n  return data;\n}\n\nfunction executeDecorators(fn, prog, container, depths, data, blockParams) {\n  if (fn.decorator) {\n    var props = {};\n    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);\n    Utils.extend(prog, props);\n  }\n  return prog;\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/runtime.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Build out our basic SafeString type\n\n\nexports.__esModule = true;\nfunction SafeString(string) {\n  this.string = string;\n}\n\nSafeString.prototype.toString = SafeString.prototype.toHTML = function () {\n  return '' + this.string;\n};\n\nexports['default'] = SafeString;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/safe-string.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.__esModule = true;\nexports.extend = extend;\nexports.indexOf = indexOf;\nexports.escapeExpression = escapeExpression;\nexports.isEmpty = isEmpty;\nexports.createFrame = createFrame;\nexports.blockParams = blockParams;\nexports.appendContextPath = appendContextPath;\nvar escape = {\n  '&': '&amp;',\n  '<': '&lt;',\n  '>': '&gt;',\n  '\"': '&quot;',\n  \"'\": '&#x27;',\n  '`': '&#x60;',\n  '=': '&#x3D;'\n};\n\nvar badChars = /[&<>\"'`=]/g,\n    possible = /[&<>\"'`=]/;\n\nfunction escapeChar(chr) {\n  return escape[chr];\n}\n\nfunction extend(obj /* , ...source */) {\n  for (var i = 1; i < arguments.length; i++) {\n    for (var key in arguments[i]) {\n      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {\n        obj[key] = arguments[i][key];\n      }\n    }\n  }\n\n  return obj;\n}\n\nvar toString = Object.prototype.toString;\n\nexports.toString = toString;\n// Sourced from lodash\n// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt\n/* eslint-disable func-style */\nvar isFunction = function isFunction(value) {\n  return typeof value === 'function';\n};\n// fallback for older versions of Chrome and Safari\n/* istanbul ignore next */\nif (isFunction(/x/)) {\n  exports.isFunction = isFunction = function isFunction(value) {\n    return typeof value === 'function' && toString.call(value) === '[object Function]';\n  };\n}\nexports.isFunction = isFunction;\n\n/* eslint-enable func-style */\n\n/* istanbul ignore next */\nvar isArray = Array.isArray || function (value) {\n  return value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? toString.call(value) === '[object Array]' : false;\n};\n\nexports.isArray = isArray;\n// Older IE versions do not directly support indexOf so we must implement our own, sadly.\n\nfunction indexOf(array, value) {\n  for (var i = 0, len = array.length; i < len; i++) {\n    if (array[i] === value) {\n      return i;\n    }\n  }\n  return -1;\n}\n\nfunction escapeExpression(string) {\n  if (typeof string !== 'string') {\n    // don't escape SafeStrings, since they're already safe\n    if (string && string.toHTML) {\n      return string.toHTML();\n    } else if (string == null) {\n      return '';\n    } else if (!string) {\n      return string + '';\n    }\n\n    // Force a string conversion as this will be done by the append regardless and\n    // the regex test will do this transparently behind the scenes, causing issues if\n    // an object's to string has escaped characters in it.\n    string = '' + string;\n  }\n\n  if (!possible.test(string)) {\n    return string;\n  }\n  return string.replace(badChars, escapeChar);\n}\n\nfunction isEmpty(value) {\n  if (!value && value !== 0) {\n    return true;\n  } else if (isArray(value) && value.length === 0) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nfunction createFrame(object) {\n  var frame = extend({}, object);\n  frame._parent = object;\n  return frame;\n}\n\nfunction blockParams(params, ids) {\n  params.path = ids;\n  return params;\n}\n\nfunction appendContextPath(contextPath, id) {\n  return (contextPath ? contextPath + '.' : '') + id;\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/utils.js?");

/***/ }),

/***/ "./node_modules/handlebars/runtime.js":
/*!********************************************!*\
  !*** ./node_modules/handlebars/runtime.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Create a simple path alias to allow browserify to resolve\n// the runtime on a supported path.\nmodule.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ \"./node_modules/handlebars/dist/cjs/handlebars.runtime.js\")['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/runtime.js?");

/***/ }),

/***/ "./node_modules/html-loader/index.js!./types/oscillator/src/lang/en/help/oscillator/center":
/*!****************************************************************************************!*\
  !*** ./node_modules/html-loader!./types/oscillator/src/lang/en/help/oscillator/center ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"i, j, k indexes of the oscillator center.\\n\";\n\n//# sourceURL=webpack:///./types/oscillator/src/lang/en/help/oscillator/center?./node_modules/html-loader");

/***/ }),

/***/ "./node_modules/html-loader/index.js!./types/oscillator/src/lang/en/help/oscillator/omega0":
/*!****************************************************************************************!*\
  !*** ./node_modules/html-loader!./types/oscillator/src/lang/en/help/oscillator/omega0 ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"Base period of the oscillation.\\n\";\n\n//# sourceURL=webpack:///./types/oscillator/src/lang/en/help/oscillator/omega0?./node_modules/html-loader");

/***/ }),

/***/ "./node_modules/html-loader/index.js!./types/oscillator/src/lang/en/help/oscillator/radius":
/*!****************************************************************************************!*\
  !*** ./node_modules/html-loader!./types/oscillator/src/lang/en/help/oscillator/radius ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"Radius of the oscillator.\\n\";\n\n//# sourceURL=webpack:///./types/oscillator/src/lang/en/help/oscillator/radius?./node_modules/html-loader");

/***/ }),

/***/ "./node_modules/html-loader/index.js!./types/oscillator/src/lang/en/help/oscillator/type":
/*!**************************************************************************************!*\
  !*** ./node_modules/html-loader!./types/oscillator/src/lang/en/help/oscillator/type ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"Kind of oscillator, which can be either <b>Periodic</b>, <b>Decaying</b> or <b>Damped</b>.\\nOnly Damped oscillators have to provide a value for zeta.\\n\";\n\n//# sourceURL=webpack:///./types/oscillator/src/lang/en/help/oscillator/type?./node_modules/html-loader");

/***/ }),

/***/ "./node_modules/html-loader/index.js!./types/oscillator/src/lang/en/help/oscillator/zeta":
/*!**************************************************************************************!*\
  !*** ./node_modules/html-loader!./types/oscillator/src/lang/en/help/oscillator/zeta ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"Rate of damping, 0 to 1\\n\";\n\n//# sourceURL=webpack:///./types/oscillator/src/lang/en/help/oscillator/zeta?./node_modules/html-loader");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./types/oscillator/src/analysis_config.hbs":
/*!**************************************************!*\
  !*** ./types/oscillator/src/analysis_config.hbs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ./node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"1\":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=\"function\", alias4=container.escapeExpression;\n\n  return \"  <analysis type=\\\"histogram\\\" mesh=\\\"\"\n    + alias4(((helper = (helper = helpers.mesh || (depth0 != null ? depth0.mesh : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"mesh\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\" array=\\\"\"\n    + alias4(((helper = (helper = helpers.array || (depth0 != null ? depth0.array : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"array\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\" association=\\\"\"\n    + alias4(((helper = (helper = helpers.association || (depth0 != null ? depth0.association : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"association\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\"\\n    bins=\\\"\"\n    + alias4(((helper = (helper = helpers.bins || (depth0 != null ? depth0.bins : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"bins\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\" enabled=\\\"1\\\" />\\n\";\n},\"3\":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=\"function\", alias4=container.escapeExpression;\n\n  return \"  <analysis type=\\\"autocorrelation\\\" mesh=\\\"\"\n    + alias4(((helper = (helper = helpers.mesh || (depth0 != null ? depth0.mesh : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"mesh\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\" array=\\\"data\\\" association=\\\"cell\\\"\\n    window=\\\"\"\n    + alias4(((helper = (helper = helpers.window || (depth0 != null ? depth0.window : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"window\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\" k-max=\\\"\"\n    + alias4(((helper = (helper = helpers.kmax || (depth0 != null ? depth0.kmax : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"kmax\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\" enabled=\\\"1\\\" />\\n\";\n},\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});\n\n  return \"<sensei>\\n\"\n    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.histogram : depth0),{\"name\":\"each\",\"hash\":{},\"fn\":container.program(1, data, 0),\"inverse\":container.noop,\"data\":data})) != null ? stack1 : \"\")\n    + \"\\n\"\n    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.autocorrelation : depth0),{\"name\":\"each\",\"hash\":{},\"fn\":container.program(3, data, 0),\"inverse\":container.noop,\"data\":data})) != null ? stack1 : \"\")\n    + \"\\n</sensei>\\n\";\n},\"useData\":true});\n\n//# sourceURL=webpack:///./types/oscillator/src/analysis_config.hbs?");

/***/ }),

/***/ "./types/oscillator/src/convert.js":
/*!*****************************************!*\
  !*** ./types/oscillator/src/convert.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar outputTemplate = __webpack_require__(/*! ./oscillator_list.hbs */ \"./types/oscillator/src/oscillator_list.hbs\");\nvar configTemplate = __webpack_require__(/*! ./analysis_config.hbs */ \"./types/oscillator/src/analysis_config.hbs\");\nvar runTemplate = __webpack_require__(/*! ./run_script.hbs */ \"./types/oscillator/src/run_script.hbs\");\n\n/*\n# type      center          r       omega0      zeta\n*/\n\nvar COLUMN_SPACING = 5;\n\nmodule.exports = function convert(dataModel) {\n  var results = {};\n  // Start with a standard header\n  var lines = [['# type  ', 'center  ', 'r  ', 'omega0  ', 'zeta']];\n\n  dataModel.data.oscillators.forEach(function (attributes) {\n    var oscillator = {};\n    Object.keys(attributes.oscillator).forEach(function (fieldName) {\n      var value = attributes.oscillator[fieldName].value;\n      if (value.length === 1) {\n        oscillator[fieldName] = value[0];\n      } else {\n        oscillator[fieldName] = value;\n      }\n    });\n    lines.push(['' + oscillator.type, oscillator.center[0] + ' ' + oscillator.center[1] + ' ' + oscillator.center[2], '' + oscillator.radius, '' + oscillator.omega0, '' + (oscillator.zeta || '')]);\n  });\n\n  // Compute max size of each column\n  var sizes = [0, 0, 0, 0, 0];\n  for (var lineIdx = 0; lineIdx < lines.length; lineIdx++) {\n    var line = lines[lineIdx];\n    for (var tokenIdx = 0; tokenIdx < line.length; tokenIdx++) {\n      sizes[tokenIdx] = Math.max(sizes[tokenIdx], line[tokenIdx].length);\n    }\n  }\n\n  // Add padding to align columns\n  for (var _lineIdx = 0; _lineIdx < lines.length; _lineIdx++) {\n    var _line = lines[_lineIdx];\n    for (var _tokenIdx = 0; _tokenIdx < _line.length; _tokenIdx++) {\n      while (_line[_tokenIdx].length < sizes[_tokenIdx] + COLUMN_SPACING) {\n        _line[_tokenIdx] += ' ';\n      }\n    }\n    // collapse tokens\n    lines[_lineIdx] = { line: lines[_lineIdx].join('') };\n  }\n\n  // Use dummy line writer\n  results['oscillator_list.osc'] = outputTemplate({ lines: lines });\n\n  // analyses, have sub-object matching type, with the attributes.\n  var histogram = [];\n  var autocorrelation = [];\n  dataModel.data.analyses.forEach(function (attributes) {\n    var analysis = {};\n    var type = attributes.analysis.type.value[0];\n    Object.keys(attributes[type]).forEach(function (fieldName) {\n      var value = attributes[type][fieldName].value;\n      if (value.length === 1) {\n        analysis[fieldName] = value[0];\n      } else {\n        analysis[fieldName] = value;\n      }\n    });\n    console.log(analysis);\n    if (type === 'histogram') {\n      // fill in associated fields.\n      if (analysis.mesh === 'particles') {\n        analysis.array = \"velocityMagnitude\";\n        analysis.association = \"point\";\n      } else {\n        analysis.array = \"data\";\n        analysis.association = \"cell\";\n      }\n      histogram.push(analysis);\n    } else if (type === 'autocorrelation') {\n      autocorrelation.push(analysis);\n    }\n  });\n\n  // analysis xml\n  results['analysis_config.xml'] = configTemplate({ histogram: histogram, autocorrelation: autocorrelation });\n\n  var runParams = {};\n  if (dataModel.data.run) {\n    var params = dataModel.data.run[0].runParams;\n    Object.keys(params).forEach(function (fieldName) {\n      var value = params[fieldName].value;\n      if (value.length === 1) {\n        runParams[fieldName] = value[0];\n      } else {\n        runParams[fieldName] = value;\n      }\n    });\n  }\n\n  // analysis xml\n  results['run.sh'] = runTemplate(runParams);\n\n  return { results: results, model: dataModel };\n};\n\n//# sourceURL=webpack:///./types/oscillator/src/convert.js?");

/***/ }),

/***/ "./types/oscillator/src/hooks.js":
/*!***************************************!*\
  !*** ./types/oscillator/src/hooks.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction getExternal(dataModel) {\n  if (!dataModel.external) {\n    dataModel.external = {};\n  }\n  if (!dataModel.external.viz) {\n    dataModel.external.viz = {};\n  }\n\n  return dataModel.external;\n}\n\nfunction pushOscillatorsToExternalHook(hookConfig, dataModel, currentViewData) {\n  var external = getExternal(dataModel);\n\n  // Fill positions, radii\n  if (dataModel.data.oscillators) {\n    var oscillators = dataModel.data.oscillators;\n    external.viz.oscillators = [];\n    for (var i = 0; i < oscillators.length; i++) {\n      if (oscillators[i].oscillator) {\n        var osc = oscillators[i].oscillator;\n        external.viz.oscillators.push({\n          // default to zero if conversion doesn't work.\n          center: osc.center.value.map(function (v) {\n            return Math.round(+v) || 0;\n          }),\n          name: osc.name.value[0],\n          radius: +osc.radius.value[0] || 1,\n          type: osc.type.value[0],\n          omega0: +osc.omega0.value[0] || 1,\n          zeta: osc.zeta.value ? +osc.zeta.value[0] || 0 : 0,\n          id: i\n        });\n      }\n    }\n  }\n}\n\nmodule.exports = function initialize() {\n  Simput.registerHook('oscillatorsToExternal', pushOscillatorsToExternalHook);\n};\n\n//# sourceURL=webpack:///./types/oscillator/src/hooks.js?");

/***/ }),

/***/ "./types/oscillator/src/index.js-exposed":
/*!***********************************************!*\
  !*** ./types/oscillator/src/index.js-exposed ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {if(!global[\"Simput\"]) global[\"Simput\"] = {};\nif(!global[\"Simput\"][\"types\"]) global[\"Simput\"][\"types\"] = {};\nmodule.exports = global[\"Simput\"][\"types\"][\"oscillator\"] = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--9-0!./index.js */ \"./node_modules/babel-loader/lib/index.js??ref--9-0!./types/oscillator/src/index.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./types/oscillator/src/index.js-exposed?");

/***/ }),

/***/ "./types/oscillator/src/lang/en/help/index.js":
/*!****************************************************!*\
  !*** ./types/oscillator/src/lang/en/help/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  \"oscillator\": __webpack_require__(/*! ./oscillator */ \"./types/oscillator/src/lang/en/help/oscillator/index.js\")\n};\n\n//# sourceURL=webpack:///./types/oscillator/src/lang/en/help/index.js?");

/***/ }),

/***/ "./types/oscillator/src/lang/en/help/oscillator/index.js":
/*!***************************************************************!*\
  !*** ./types/oscillator/src/lang/en/help/oscillator/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  \"center\": __webpack_require__(/*! html-loader!./center */ \"./node_modules/html-loader/index.js!./types/oscillator/src/lang/en/help/oscillator/center\"),\n  \"omega0\": __webpack_require__(/*! html-loader!./omega0 */ \"./node_modules/html-loader/index.js!./types/oscillator/src/lang/en/help/oscillator/omega0\"),\n  \"radius\": __webpack_require__(/*! html-loader!./radius */ \"./node_modules/html-loader/index.js!./types/oscillator/src/lang/en/help/oscillator/radius\"),\n  \"type\": __webpack_require__(/*! html-loader!./type */ \"./node_modules/html-loader/index.js!./types/oscillator/src/lang/en/help/oscillator/type\"),\n  \"zeta\": __webpack_require__(/*! html-loader!./zeta */ \"./node_modules/html-loader/index.js!./types/oscillator/src/lang/en/help/oscillator/zeta\")\n};\n\n//# sourceURL=webpack:///./types/oscillator/src/lang/en/help/oscillator/index.js?");

/***/ }),

/***/ "./types/oscillator/src/lang/en/index.js":
/*!***********************************************!*\
  !*** ./types/oscillator/src/lang/en/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  \"help\": __webpack_require__(/*! ./help */ \"./types/oscillator/src/lang/en/help/index.js\"),\n  \"label.json\": __webpack_require__(/*! ./label.json */ \"./types/oscillator/src/lang/en/label.json\")\n};\n\n//# sourceURL=webpack:///./types/oscillator/src/lang/en/index.js?");

/***/ }),

/***/ "./types/oscillator/src/lang/en/label.json":
/*!*************************************************!*\
  !*** ./types/oscillator/src/lang/en/label.json ***!
  \*************************************************/
/*! exports provided: views, attributes, default */
/***/ (function(module) {

eval("module.exports = {\"views\":{\"oscillators\":\"Oscillators\",\"analyses\":\"Analyses\",\"run\":\"Execution Script\"},\"attributes\":{\"oscillator\":{\"title\":\"Oscillator\",\"parameters\":{\"type\":\"Type\",\"center\":\"Center\",\"radius\":\"Radius\",\"omega0\":\"Omega 0\",\"zeta\":\"Zeta\"}},\"analysis\":{\"title\":\"Analysis\",\"parameters\":{\"type\":\"Type\"}},\"histogram\":{\"title\":\"Histogram\",\"parameters\":{\"mesh\":\"Mesh data\",\"bins\":\"Bins\"}},\"autocorrelation\":{\"title\":\"Autocorrelation\",\"parameters\":{\"mesh\":\"Mesh data\",\"window\":\"Window\",\"kmax\":\"K-max\"}},\"runParams\":{\"title\":\"Execution parameters\",\"parameters\":{\"nodes\":\"Nodes\",\"gridsize\":\"Grid size\",\"dt\":\"Time step\",\"endT\":\"Duration\"}},\"oscillatorView\":{\"title\":\"3D view\"}}};\n\n//# sourceURL=webpack:///./types/oscillator/src/lang/en/label.json?");

/***/ }),

/***/ "./types/oscillator/src/lang/index.js":
/*!********************************************!*\
  !*** ./types/oscillator/src/lang/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  \"en\": __webpack_require__(/*! ./en */ \"./types/oscillator/src/lang/en/index.js\")\n};\n\n//# sourceURL=webpack:///./types/oscillator/src/lang/index.js?");

/***/ }),

/***/ "./types/oscillator/src/model.js":
/*!***************************************!*\
  !*** ./types/oscillator/src/model.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  order: ['oscillators', 'analyses', 'run'],\n  views: {\n    oscillators: {\n      size: -1,\n      attributes: ['oscillator', 'oscillatorView'],\n      hooks: [{\n        type: 'copyParameterToViewName',\n        attribute: 'oscillator.name'\n      }, {\n        type: 'oscillatorsToExternal'\n      }]\n    },\n    analyses: {\n      size: -1,\n      attributes: ['analysis'],\n      hooks: [{\n        type: 'copyParameterToViewName',\n        attribute: 'analysis.name'\n      }]\n    },\n    run: {\n      attributes: ['runParams'],\n      hooks: [{\n        type: 'copyToExternal',\n        src: 'data.run.0.runParams.gridsize.value.0',\n        dst: 'viz.gridsize'\n      }, {\n        type: 'copyToExternal',\n        src: 'data.run.0.runParams.dt.value.0',\n        dst: 'viz.timeStep'\n      }, {\n        type: 'copyToExternal',\n        src: 'data.run.0.runParams.endT.value.0',\n        dst: 'viz.endTime'\n      }]\n    }\n  },\n  definitions: {\n    oscillator: {\n      parameters: [{\n        id: 'name',\n        label: 'Name',\n        type: 'string',\n        size: 1\n      }, {\n        id: 'type',\n        type: 'enum',\n        size: 1,\n        default: 'periodic',\n        domain: {\n          Periodic: 'periodic',\n          Decaying: 'decaying',\n          Damped: 'damped'\n        }\n      }, {\n        id: 'center',\n        type: 'int',\n        size: 3,\n        layout: '3',\n        default: [0, 0, 0]\n      }, {\n        id: 'radius',\n        type: 'double',\n        size: 1,\n        default: [1]\n      }, {\n        id: 'omega0',\n        type: 'double',\n        size: 1,\n        default: [1]\n      }, {\n        id: 'zeta',\n        type: 'double',\n        size: 1,\n        show: \"type[0] === 'damped'\"\n      }]\n    },\n    analysis: {\n      parameters: [{\n        id: 'name',\n        label: 'Name',\n        type: 'string',\n        size: 1\n      }, {\n        id: 'type',\n        type: 'enum',\n        size: 1,\n        default: 'histogram',\n        domain: {\n          Histogram: 'histogram',\n          Autocorrelation: 'autocorrelation'\n        }\n      }, [\"histogram\", \"autocorrelation\"]],\n      children: {\n        histogram: \"analysis.type[0] === 'histogram'\",\n        autocorrelation: \"analysis.type[0] === 'autocorrelation'\"\n      }\n    },\n    histogram: {\n      parameters: [{\n        id: 'mesh',\n        type: 'enum',\n        size: 1,\n        default: 'mesh',\n        domain: {\n          Mesh: 'mesh',\n          'Unstructured mesh': 'ucdmesh',\n          'Particle velocity magnitude': 'particles'\n        }\n      }, {\n        id: 'bins',\n        type: 'int',\n        size: 1,\n        default: [10]\n      }]\n    },\n    autocorrelation: {\n      parameters: [{\n        id: 'mesh',\n        type: 'enum',\n        size: 1,\n        default: 'mesh',\n        domain: {\n          // currently only works on one type.\n          Mesh: 'mesh'\n        }\n      }, {\n        id: 'window',\n        type: 'double',\n        size: 1,\n        default: [10]\n      }, {\n        id: 'kmax',\n        type: 'double',\n        size: 1,\n        default: [3]\n      }]\n    },\n    runParams: {\n      parameters: [{\n        id: 'nodes',\n        type: 'int',\n        size: 1,\n        default: [1]\n      }, {\n        id: 'gridsize',\n        type: 'int',\n        size: 1,\n        default: [64]\n      }, {\n        id: 'dt',\n        type: 'double',\n        size: 1,\n        default: [0.1]\n      }, {\n        id: 'endT',\n        type: 'double',\n        size: 1,\n        default: [10]\n      }]\n    },\n    oscillatorView: {\n      parameters: [{\n        id: 'viz',\n        propType: 'ViewerWidget',\n        size: 1,\n        default: {\n          text: ''\n        },\n        domain: {\n          dynamic: true,\n          external: 'viz'\n        },\n        label: 'Gaussians'\n      }]\n    }\n  }\n};\n\n//# sourceURL=webpack:///./types/oscillator/src/model.js?");

/***/ }),

/***/ "./types/oscillator/src/oscillator_list.hbs":
/*!**************************************************!*\
  !*** ./types/oscillator/src/oscillator_list.hbs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ./node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"1\":function(container,depth0,helpers,partials,data) {\n    var helper;\n\n  return container.escapeExpression(((helper = (helper = helpers.line || (depth0 != null ? depth0.line : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === \"function\" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{\"name\":\"line\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\n\";\n},\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var stack1;\n\n  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.lines : depth0),{\"name\":\"each\",\"hash\":{},\"fn\":container.program(1, data, 0),\"inverse\":container.noop,\"data\":data})) != null ? stack1 : \"\");\n},\"useData\":true});\n\n//# sourceURL=webpack:///./types/oscillator/src/oscillator_list.hbs?");

/***/ }),

/***/ "./types/oscillator/src/run_script.hbs":
/*!*********************************************!*\
  !*** ./types/oscillator/src/run_script.hbs ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ./node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=\"function\", alias4=container.escapeExpression;\n\n  return \"#!/bin/bash -l\\n\\nnumranks=\"\n    + alias4(((helper = (helper = helpers.nodes || (depth0 != null ? depth0.nodes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"nodes\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\ndt=\"\n    + alias4(((helper = (helper = helpers.dt || (depth0 != null ? depth0.dt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"dt\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\nendt=\"\n    + alias4(((helper = (helper = helpers.endT || (depth0 != null ? depth0.endT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"endT\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\ngrid=\"\n    + alias4(((helper = (helper = helpers.gridsize || (depth0 != null ? depth0.gridsize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"gridsize\",\"hash\":{},\"data\":data}) : helper)))\n    + \"x\"\n    + alias4(((helper = (helper = helpers.gridsize || (depth0 != null ? depth0.gridsize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"gridsize\",\"hash\":{},\"data\":data}) : helper)))\n    + \"x\"\n    + alias4(((helper = (helper = helpers.gridsize || (depth0 != null ? depth0.gridsize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"gridsize\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\nosc=oscillator_list.osc\\nxml=analysis_config.xml\\nexe=oscillator\\n\\nmpirun -n $numranks $exe -s $grid --dt $dt --t-end $endt --shortlog -f $xml $osc\\n\";\n},\"useData\":true});\n\n//# sourceURL=webpack:///./types/oscillator/src/run_script.hbs?");

/***/ })

/******/ });