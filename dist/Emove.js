/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Emove = __webpack_require__(1);

	var _Emove2 = _interopRequireDefault(_Emove);

	var _path = __webpack_require__(71);

	var _path2 = _interopRequireDefault(_path);

	var _arc = __webpack_require__(74);

	var _arc2 = _interopRequireDefault(_arc);

	var _circle = __webpack_require__(75);

	var _circle2 = _interopRequireDefault(_circle);

	var _ellipse = __webpack_require__(76);

	var _ellipse2 = _interopRequireDefault(_ellipse);

	var _image = __webpack_require__(77);

	var _image2 = _interopRequireDefault(_image);

	var _polygon = __webpack_require__(78);

	var _polygon2 = _interopRequireDefault(_polygon);

	var _rectangle = __webpack_require__(79);

	var _rectangle2 = _interopRequireDefault(_rectangle);

	var _text = __webpack_require__(80);

	var _text2 = _interopRequireDefault(_text);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Emove2.default['Path'] = _path2.default;
	/**
	 * @fileOverview Emove.js
	 * @author xuguanlong
	 */

	_Emove2.default['Arc'] = _arc2.default;
	_Emove2.default['Circle'] = _circle2.default;
	_Emove2.default['Ellipse'] = _ellipse2.default;
	_Emove2.default['Image'] = _image2.default;
	_Emove2.default['Polygon'] = _polygon2.default;
	_Emove2.default['Rectangle'] = _rectangle2.default;
	_Emove2.default['Text'] = _text2.default;

	window.Emove = _Emove2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _typeof2 = __webpack_require__(40);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _assign = __webpack_require__(49);

	var _assign2 = _interopRequireDefault(_assign);

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defaultOption = __webpack_require__(65);

	var _defaultOption2 = _interopRequireDefault(_defaultOption);

	var _painter = __webpack_require__(66);

	var _painter2 = _interopRequireDefault(_painter);

	var _stage = __webpack_require__(68);

	var _stage2 = _interopRequireDefault(_stage);

	var _util = __webpack_require__(67);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*!
	 * Emove.js
	 * Version: 0.0.1
	 * Author xuguanlong
	 * Copyright 2015 xuguanlong
	 */

	var Emove = function () {
	    function Emove() {
	        (0, _classCallCheck3.default)(this, Emove);

	        var args = (0, _from2.default)(arguments);
	        this.context = args[0];
	        this.plugins = [];
	        var options = args[1] || {};
	        this._options = (0, _assign2.default)({}, _defaultOption2.default, options);
	        this.initContext();
	        this.painter = new _painter2.default(this.context);
	        this.stage = new _stage2.default(this);
	    }

	    (0, _createClass3.default)(Emove, [{
	        key: 'initContext',
	        value: function initContext() {
	            var _this = this;

	            if (typeof this.context === 'string') {
	                var _ret = function () {
	                    _this.canvas = document.getElementById(_this.context);
	                    _this.context = _this.canvas.getContext('2d');
	                    var width = _this.canvas.width;
	                    var height = _this.canvas.height;
	                    Object.defineProperty(_this, "width", {
	                        enumerable: true,
	                        configurable: true,
	                        set: function set(value) {
	                            width = !isNaN(parseFloat(value)) ? parseFloat(value) : width;
	                            this.canvas.width = width;
	                        },
	                        get: function get() {
	                            return this.canvas.width;
	                        }
	                    });
	                    Object.defineProperty(_this, "height", {
	                        enumerable: true,
	                        configurable: true,
	                        set: function set(value) {
	                            height = !isNaN(parseFloat(value)) ? parseFloat(value) : height;
	                            this.canvas.height = height;
	                        },
	                        get: function get() {
	                            return this.canvas.height;
	                        }
	                    });
	                    _this._retinaScale();
	                    return {
	                        v: undefined
	                    };
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	            }
	            console.log('get canvas context error, please check the arguments');
	        }
	    }, {
	        key: '_retinaScale',
	        value: function _retinaScale() {
	            var ctx = this.context;
	            var width = this.canvas.width;
	            var height = this.canvas.height;
	            var ratio = this._options.retinaScale;
	            if (ratio) {
	                ctx.canvas.style.width = width + "px";
	                ctx.canvas.style.height = height + "px";
	                ctx.canvas.height = height * ratio;
	                ctx.canvas.width = width * ratio;
	                ctx.scale(ratio, ratio);
	            }
	        }
	    }, {
	        key: 'registerPlugin',
	        value: function registerPlugin(name, plugin) {
	            this.plugins[name] = plugin;
	            return this;
	        }
	    }, {
	        key: 'addShape',
	        value: function addShape(shape) {
	            if (this.stage.addShape(shape)) {
	                this.painter.draw(shape);
	            }
	            return this;
	        }
	    }, {
	        key: '_draw',
	        value: function _draw() {
	            var shapes = this.stage.getShapes();
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = (0, _getIterator3.default)(shapes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var shape = _step.value;

	                    this.painter.draw(shape);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'redraw',
	        value: function redraw() {
	            this.clear();
	            this._draw();
	            return this;
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.context.clearRect(0, 0, this.width, this.height);
	            return this;
	        }
	    }]);
	    return Emove;
	}();

	exports.default = Emove;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(32);
	module.exports = __webpack_require__(35);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	var Iterators = __webpack_require__(8);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(6)
	  , step             = __webpack_require__(7)
	  , Iterators        = __webpack_require__(8)
	  , toIObject        = __webpack_require__(9);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(13)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(10)
	  , defined = __webpack_require__(12);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(11);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(14)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(20)
	  , hide           = __webpack_require__(21)
	  , has            = __webpack_require__(26)
	  , Iterators      = __webpack_require__(8)
	  , $iterCreate    = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(28)
	  , getProto       = __webpack_require__(22).getProto
	  , ITERATOR       = __webpack_require__(29)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , core      = __webpack_require__(17)
	  , ctx       = __webpack_require__(18)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 16 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(19);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(22)
	  , createDesc = __webpack_require__(23);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(22)
	  , descriptor     = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(28)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(21)(IteratorPrototype, __webpack_require__(29)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(22).setDesc
	  , has = __webpack_require__(26)
	  , TAG = __webpack_require__(29)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(30)('wks')
	  , uid    = __webpack_require__(31)
	  , Symbol = __webpack_require__(16).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(16)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(33)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(13)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(34)
	  , defined   = __webpack_require__(12);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(36)
	  , get      = __webpack_require__(38);
	module.exports = __webpack_require__(17).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(37);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(39)
	  , ITERATOR  = __webpack_require__(29)('iterator')
	  , Iterators = __webpack_require__(8);
	module.exports = __webpack_require__(17).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(11)
	  , TAG = __webpack_require__(29)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _symbol = __webpack_require__(41);

	var _symbol2 = _interopRequireDefault(_symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj; }

	exports.default = function (obj) {
	  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43);
	__webpack_require__(48);
	module.exports = __webpack_require__(17).Symbol;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(22)
	  , global         = __webpack_require__(16)
	  , has            = __webpack_require__(26)
	  , DESCRIPTORS    = __webpack_require__(24)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(20)
	  , $fails         = __webpack_require__(25)
	  , shared         = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(28)
	  , uid            = __webpack_require__(31)
	  , wks            = __webpack_require__(29)
	  , keyOf          = __webpack_require__(44)
	  , $names         = __webpack_require__(45)
	  , enumKeys       = __webpack_require__(46)
	  , isArray        = __webpack_require__(47)
	  , anObject       = __webpack_require__(36)
	  , toIObject      = __webpack_require__(9)
	  , createDesc     = __webpack_require__(23)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(14)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(22)
	  , toIObject = __webpack_require__(9);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(9)
	  , getNames  = __webpack_require__(22).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(22);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(11);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	module.exports = __webpack_require__(17).Object.assign;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(15);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(52)});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(22)
	  , toObject = __webpack_require__(53)
	  , IObject  = __webpack_require__(10);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(25)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	__webpack_require__(56);
	module.exports = __webpack_require__(17).Array.from;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(18)
	  , $export     = __webpack_require__(15)
	  , toObject    = __webpack_require__(53)
	  , call        = __webpack_require__(57)
	  , isArrayIter = __webpack_require__(58)
	  , toLength    = __webpack_require__(59)
	  , getIterFn   = __webpack_require__(38);
	$export($export.S + $export.F * !__webpack_require__(60)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(36);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(8)
	  , ITERATOR   = __webpack_require__(29)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(34)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(29)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(63);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(22);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var global = {
		retinaScale: window.devicePixelRatio || 1,
		background: 'transparent'
	};

	exports.default = global;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(67);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Painter = function () {
	    function Painter(context) {
	        (0, _classCallCheck3.default)(this, Painter);

	        if (context instanceof CanvasRenderingContext2D) {
	            this.ctx = context;
	        }
	    }

	    (0, _createClass3.default)(Painter, [{
	        key: 'draw',
	        value: function draw(shape) {
	            if (shape.draw && _util2.default.isFunction(shape.draw)) {
	                shape.draw(this.ctx);
	            }
	        }
	    }]);
	    return Painter;
	}();

	exports.default = Painter;

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var util = {
	    uid: function uid() {
	        if (typeof this.id === 'undefined') {
	            this.id = 0;
	        }
	        if (typeof this.prefix === 'undefined') {
	            this.prefix = '-emove-uuid-';
	        }
	        return this.prefix + this.id++;
	    },
	    getStyle: function getStyle(el, property) {
	        return el.currentStyle ? el.currentStyle[property] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	    },
	    isFunction: function isFunction(fun) {
	        return Object.prototype.toString.call(fun) === '[object Function]';
	    },
	    isArray: function isArray(array) {
	        return Object.prototype.toString.call(array) === '[object Array]';
	    },
	    isNumber: function isNumber(value) {
	        return typeof value === 'number';
	    },
	    find: function find(value, array) {
	        for (var i = 0; i < array.length; i++) {
	            if (value.id === array[i].id) {
	                return i;
	                break;
	            }
	        }
	        return -1;
	    }
	};

	exports.default = util;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _timeline = __webpack_require__(69);

	var _timeline2 = _interopRequireDefault(_timeline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Stage = function () {
	    function Stage(emove) {
	        (0, _classCallCheck3.default)(this, Stage);

	        this.shapes = [];
	        this._emoveIntance = emove;
	        this.animations = [];
	        this.playing = false;
	        this.timeline = new _timeline2.default();
	    }

	    (0, _createClass3.default)(Stage, [{
	        key: 'addShape',
	        value: function addShape(shape) {
	            if (!this.hasShape(shape)) {
	                shape.stage = this;
	                this.shapes.push(shape);
	                return shape;
	            }
	        }
	    }, {
	        key: 'clearShapes',
	        value: function clearShapes() {
	            this.shapes = [];
	        }
	    }, {
	        key: 'getShape',
	        value: function getShape(id) {
	            var rst = false;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = (0, _getIterator3.default)(this.shapes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var shape = _step.value;

	                    if (shape.id === id) {
	                        rst = shape;
	                        break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return rst;
	        }
	    }, {
	        key: 'removeShape',
	        value: function removeShape() {
	            var shapes = (0, _from2.default)(arguments);
	            var shapeRemove = shapes[0];
	            var index = 0;
	            var find = false;
	            for (var i = 0; i < this.shapes.length; i++) {
	                if (this.shapes[i].id === shapeRemove.id) {
	                    index = i;
	                    find = true;
	                    break;
	                }
	            }
	            if (find) {
	                this.shapes.splice(index, 1);
	            }
	        }
	    }, {
	        key: 'hasShape',
	        value: function hasShape() {
	            var shapes = (0, _from2.default)(arguments);
	            var shapeFind = shapes[0];
	            var rst = false;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = (0, _getIterator3.default)(this.shapes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var shape = _step2.value;

	                    if (shape.id === shapeFind.id) {
	                        rst = true;
	                        break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            return rst;
	        }
	    }, {
	        key: 'getShapes',
	        value: function getShapes() {
	            return this.shapes;
	        }
	    }, {
	        key: 'playAniamtion',
	        value: function playAniamtion() {
	            if (this.playing) {
	                return;
	            }
	        }
	    }]);
	    return Stage;
	}();

	exports.default = Stage;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _animFrame = __webpack_require__(70);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Timeline = function () {
	    function Timeline() {
	        (0, _classCallCheck3.default)(this, Timeline);

	        this.animations = [];
	        this.running = false;
	    }

	    (0, _createClass3.default)(Timeline, [{
	        key: 'addAnimation',
	        value: function addAnimation() {
	            var animation = (0, _from2.default)(arguments)[0];
	            if (Util.find(animation, this.animations) < 0) {
	                this.animations.push(animation);
	            }
	        }
	    }, {
	        key: 'removeAnimation',
	        value: function removeAnimation() {
	            var animation = (0, _from2.default)(arguments)[0];
	            var index = Util.find(animation, this.animations);
	            if (index > -1) {
	                this.animation.splice(index, 1);
	            }
	        }
	    }, {
	        key: 'start',
	        value: function start() {
	            if (this.running) {
	                return;
	            }
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = (0, _getIterator3.default)(this.animations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var animation = _step.value;

	                    animation.startTime = new Date().getTime();
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            this.running = true;
	            this.step();
	        }
	    }, {
	        key: 'step',
	        value: function step() {
	            if (!this.running) {
	                return;
	            }
	            var me = this;
	            var next = me.step;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = (0, _getIterator3.default)(this.animations), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var animation = _step2.value;

	                    if (animation.complete) {
	                        this.removeAnimation(animation);
	                        continue;
	                    }
	                    animation.frame();
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            (0, _animFrame.requestAnimFrame)(next.bind(this));
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            this.running = false;
	        }
	    }]);
	    return Timeline;
	}();

	exports.default = timeline;

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

	var requestAnimFrame = exports.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	    return window.setTimeout(callback, 1000 / 60);
	};

	var cancelAnimFrame = exports.cancelAnimFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (callback) {
	    return window.clearTimeout(callback, 1000 / 60);
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _assign = __webpack_require__(49);

	var _assign2 = _interopRequireDefault(_assign);

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(67);

	var _util2 = _interopRequireDefault(_util);

	var _animation = __webpack_require__(72);

	var _animation2 = _interopRequireDefault(_animation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultOptions = {
	    color: '#000',
	    width: 1,
	    lineCap: 'butt',
	    lineJoin: 'miter'
	};

	var Path = function () {
	    function Path() {
	        (0, _classCallCheck3.default)(this, Path);

	        this.id = _util2.default.uid();
	        var args = (0, _from2.default)(arguments);
	        var points = args[0];
	        var options = args[1] || {};
	        this._options = (0, _assign2.default)({}, defaultOptions, options);
	        this.initPath(points);
	        this.stage = null;
	    }

	    (0, _createClass3.default)(Path, [{
	        key: 'initPath',
	        value: function initPath(points) {
	            this.points = [];
	            if (_util2.default.isArray(points)) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3.default)(points), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var point = _step.value;

	                        if (_util2.default.isArray(point) && point.length === 2) {
	                            if (_util2.default.isNumber(point[0]) && _util2.default.isNumber(point[1])) {
	                                this.points.push(point);
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'draw',
	        value: function draw(ctx) {
	            ctx.lineWidth = this._options.width;
	            ctx.strokeStyle = this._options.color;
	            ctx.lineCap = this._options.lineCap;
	            ctx.lineJoin = this._options.lineJoin;
	            ctx.beginPath();
	            if (this.points.length > 1) {
	                ctx.moveTo(this.points[0][0], this.points[0][1]);
	                var tmpPoints = this.points.slice(1);
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = (0, _getIterator3.default)(tmpPoints), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var pt = _step2.value;

	                        ctx.lineTo(pt[0], pt[1]);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                ctx.stroke();
	            }
	            ctx.closePath();
	        }
	    }]);
	    return Path;
	}();

	exports.default = Path;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(49);

	var _assign2 = _interopRequireDefault(_assign);

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _effect = __webpack_require__(73);

	var _effect2 = _interopRequireDefault(_effect);

	var _util = __webpack_require__(67);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultAnimOptions = {
		effect: 'linear',
		reverse: false,
		infinite: false,
		delay: 0,
		keep: false
	};

	var Animation = function () {
		function Animation() {
			(0, _classCallCheck3.default)(this, Animation);

			var args = (0, _from2.default)(arguments);
			var shape = args[0];
			var options = args[1] || {};
			this.id = _util2.default.uid();
			this.complete = false;
			this.shapes = [];
			if (_util2.default.isArray(shape)) {
				this.shapes.concat(shape);
			} else {
				this.shapes.push(shape);
			}
			this._options = (0, _assign2.default)({}, defaultAnimOptions, options);
		}

		(0, _createClass3.default)(Animation, [{
			key: 'start',
			value: function start() {}
		}]);
		return Animation;
	}();

	exports.default = Animation;

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Animation methods
	 * Easing functions adapted from Robert Penner's easing equations
	 * http://www.robertpenner.com/easing/
	 */

	var easingEffects = {
	    linear: function linear(t) {
	        return t;
	    },
	    easeInQuad: function easeInQuad(t) {
	        return t * t;
	    },
	    easeOutQuad: function easeOutQuad(t) {
	        return -1 * t * (t - 2);
	    },
	    easeInOutQuad: function easeInOutQuad(t) {
	        if ((t /= 1 / 2) < 1) {
	            return 1 / 2 * t * t;
	        }
	        return -1 / 2 * (--t * (t - 2) - 1);
	    },
	    easeInCubic: function easeInCubic(t) {
	        return t * t * t;
	    },
	    easeOutCubic: function easeOutCubic(t) {
	        return 1 * ((t = t / 1 - 1) * t * t + 1);
	    },
	    easeInOutCubic: function easeInOutCubic(t) {
	        if ((t /= 1 / 2) < 1) {
	            return 1 / 2 * t * t * t;
	        }
	        return 1 / 2 * ((t -= 2) * t * t + 2);
	    },
	    easeInQuart: function easeInQuart(t) {
	        return t * t * t * t;
	    },
	    easeOutQuart: function easeOutQuart(t) {
	        return -1 * ((t = t / 1 - 1) * t * t * t - 1);
	    },
	    easeInOutQuart: function easeInOutQuart(t) {
	        if ((t /= 1 / 2) < 1) {
	            return 1 / 2 * t * t * t * t;
	        }
	        return -1 / 2 * ((t -= 2) * t * t * t - 2);
	    },
	    easeInQuint: function easeInQuint(t) {
	        return 1 * (t /= 1) * t * t * t * t;
	    },
	    easeOutQuint: function easeOutQuint(t) {
	        return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
	    },
	    easeInOutQuint: function easeInOutQuint(t) {
	        if ((t /= 1 / 2) < 1) {
	            return 1 / 2 * t * t * t * t * t;
	        }
	        return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
	    },
	    easeInSine: function easeInSine(t) {
	        return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
	    },
	    easeOutSine: function easeOutSine(t) {
	        return 1 * Math.sin(t / 1 * (Math.PI / 2));
	    },
	    easeInOutSine: function easeInOutSine(t) {
	        return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
	    },
	    easeInExpo: function easeInExpo(t) {
	        return t === 0 ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
	    },
	    easeOutExpo: function easeOutExpo(t) {
	        return t === 1 ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
	    },
	    easeInOutExpo: function easeInOutExpo(t) {
	        if (t === 0) {
	            return 0;
	        }
	        if (t === 1) {
	            return 1;
	        }
	        if ((t /= 1 / 2) < 1) {
	            return 1 / 2 * Math.pow(2, 10 * (t - 1));
	        }
	        return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
	    },
	    easeInCirc: function easeInCirc(t) {
	        if (t >= 1) {
	            return t;
	        }
	        return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
	    },
	    easeOutCirc: function easeOutCirc(t) {
	        return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
	    },
	    easeInOutCirc: function easeInOutCirc(t) {
	        if ((t /= 1 / 2) < 1) {
	            return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
	        }
	        return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	    },
	    easeInElastic: function easeInElastic(t) {
	        var s = 1.70158;
	        var p = 0;
	        var a = 1;
	        if (t === 0) {
	            return 0;
	        }
	        if ((t /= 1) == 1) {
	            return 1;
	        }
	        if (!p) {
	            p = 1 * 0.3;
	        }
	        if (a < Math.abs(1)) {
	            a = 1;
	            s = p / 4;
	        } else {
	            s = p / (2 * Math.PI) * Math.asin(1 / a);
	        }
	        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
	    },
	    easeOutElastic: function easeOutElastic(t) {
	        var s = 1.70158;
	        var p = 0;
	        var a = 1;
	        if (t === 0) {
	            return 0;
	        }
	        if ((t /= 1) == 1) {
	            return 1;
	        }
	        if (!p) {
	            p = 1 * 0.3;
	        }
	        if (a < Math.abs(1)) {
	            a = 1;
	            s = p / 4;
	        } else {
	            s = p / (2 * Math.PI) * Math.asin(1 / a);
	        }
	        return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
	    },
	    easeInOutElastic: function easeInOutElastic(t) {
	        var s = 1.70158;
	        var p = 0;
	        var a = 1;
	        if (t === 0) {
	            return 0;
	        }
	        if ((t /= 1 / 2) == 2) {
	            return 1;
	        }
	        if (!p) {
	            p = 1 * (0.3 * 1.5);
	        }
	        if (a < Math.abs(1)) {
	            a = 1;
	            s = p / 4;
	        } else {
	            s = p / (2 * Math.PI) * Math.asin(1 / a);
	        }
	        if (t < 1) {
	            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
	        }
	        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
	    },
	    easeInBack: function easeInBack(t) {
	        var s = 1.70158;
	        return 1 * (t /= 1) * t * ((s + 1) * t - s);
	    },
	    easeOutBack: function easeOutBack(t) {
	        var s = 1.70158;
	        return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
	    },
	    easeInOutBack: function easeInOutBack(t) {
	        var s = 1.70158;
	        if ((t /= 1 / 2) < 1) {
	            return 1 / 2 * (t * t * (((s *= 1.525) + 1) * t - s));
	        }
	        return 1 / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
	    },
	    easeInBounce: function easeInBounce(t) {
	        return 1 - easingEffects.easeOutBounce(1 - t);
	    },
	    easeOutBounce: function easeOutBounce(t) {
	        if ((t /= 1) < 1 / 2.75) {
	            return 1 * (7.5625 * t * t);
	        } else if (t < 2 / 2.75) {
	            return 1 * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75);
	        } else if (t < 2.5 / 2.75) {
	            return 1 * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375);
	        } else {
	            return 1 * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
	        }
	    },
	    easeInOutBounce: function easeInOutBounce(t) {
	        if (t < 1 / 2) {
	            return easingEffects.easeInBounce(t * 2) * 0.5;
	        }
	        return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
	    }
	};
	exports.default = easingEffects;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _assign = __webpack_require__(49);

	var _assign2 = _interopRequireDefault(_assign);

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(67);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultLineOptions = {
	    color: '#000',
	    width: 1,
	    lineCap: 'butt',
	    lineJoin: 'miter'
	};

	var Arc = function () {
	    function Arc() {
	        (0, _classCallCheck3.default)(this, Arc);

	        this.id = _util2.default.uid();
	        var args = (0, _from2.default)(arguments);
	        var points = args[0];
	        var options = args[1] || {};
	        this._options = (0, _assign2.default)({}, defaultLineOptions, options);
	        this.initArc(points);
	    }

	    (0, _createClass3.default)(Arc, [{
	        key: 'initArc',
	        value: function initArc(points) {
	            this.points = [];
	            if (_util2.default.isArray(points)) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3.default)(points), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var point = _step.value;

	                        if (_util2.default.isArray(point) && point.length === 2) {
	                            if (_util2.default.isNumber(point[0]) && _util2.default.isNumber(point[1])) {
	                                this.points.push(point);
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'draw',
	        value: function draw(ctx) {
	            ctx.lineWidth = this._options.width;
	            ctx.strokeStyle = this._options.color;
	            ctx.lineCap = this._options.lineCap;
	            ctx.lineJoin = this._options.lineJoin;
	            ctx.beginPath();
	            if (this.points.length > 1) {
	                ctx.moveTo(points[0][0], points[0][1]);
	                var tmpPoints = this.points.slice(1);
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = (0, _getIterator3.default)(tmpPoints), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var pt = _step2.value;

	                        ctx.lineTo(pt[0], pt[1]);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                ctx.stroke();
	            }
	            ctx.closePath();
	        }
	    }]);
	    return Arc;
	}();

	exports.default = Arc;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _assign = __webpack_require__(49);

	var _assign2 = _interopRequireDefault(_assign);

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(67);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultOptions = {
	    color: '#000',
	    width: 1,
	    lineCap: 'butt',
	    lineJoin: 'miter'
	};

	var Circle = function () {
	    function Circle() {
	        (0, _classCallCheck3.default)(this, Circle);

	        this.id = _util2.default.uid();
	        var args = (0, _from2.default)(arguments);
	        var points = args[0];
	        var options = args[1] || {};
	        this._options = (0, _assign2.default)({}, defaultOptions, options);
	        this.initCircle(points);
	    }

	    (0, _createClass3.default)(Circle, [{
	        key: 'initCircle',
	        value: function initCircle(points) {
	            this.points = [];
	            if (_util2.default.isArray(points)) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3.default)(points), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var point = _step.value;

	                        if (_util2.default.isArray(point) && point.length === 2) {
	                            if (_util2.default.isNumber(point[0]) && _util2.default.isNumber(point[1])) {
	                                this.points.push(point);
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'draw',
	        value: function draw(ctx) {
	            ctx.lineWidth = this._options.width;
	            ctx.strokeStyle = this._options.color;
	            ctx.lineCap = this._options.lineCap;
	            ctx.lineJoin = this._options.lineJoin;
	            ctx.beginPath();
	            if (this.points.length > 1) {
	                ctx.moveTo(points[0][0], points[0][1]);
	                var tmpPoints = this.points.slice(1);
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = (0, _getIterator3.default)(tmpPoints), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var pt = _step2.value;

	                        ctx.lineTo(pt[0], pt[1]);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                ctx.stroke();
	            }
	            ctx.closePath();
	        }
	    }]);
	    return Circle;
	}();

	exports.default = Circle;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _assign = __webpack_require__(49);

	var _assign2 = _interopRequireDefault(_assign);

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(67);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultOptions = {
	    color: '#000',
	    width: 1,
	    lineCap: 'butt',
	    lineJoin: 'miter'
	};

	var Ellipse = function () {
	    function Ellipse() {
	        (0, _classCallCheck3.default)(this, Ellipse);

	        this.id = _util2.default.uid();
	        var args = (0, _from2.default)(arguments);
	        var points = args[0];
	        var options = args[1] || {};
	        this._options = (0, _assign2.default)({}, defaultOptions, options);
	        this.initEllipse(points);
	    }

	    (0, _createClass3.default)(Ellipse, [{
	        key: 'initEllipse',
	        value: function initEllipse(points) {
	            this.points = [];
	            if (_util2.default.isArray(points)) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3.default)(points), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var point = _step.value;

	                        if (_util2.default.isArray(point) && point.length === 2) {
	                            if (_util2.default.isNumber(point[0]) && _util2.default.isNumber(point[1])) {
	                                this.points.push(point);
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'draw',
	        value: function draw(ctx) {
	            ctx.lineWidth = this._options.width;
	            ctx.strokeStyle = this._options.color;
	            ctx.lineCap = this._options.lineCap;
	            ctx.lineJoin = this._options.lineJoin;
	            ctx.beginPath();
	            if (this.points.length > 1) {
	                ctx.moveTo(points[0][0], points[0][1]);
	                var tmpPoints = this.points.slice(1);
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = (0, _getIterator3.default)(tmpPoints), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var pt = _step2.value;

	                        ctx.lineTo(pt[0], pt[1]);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                ctx.stroke();
	            }
	            ctx.closePath();
	        }
	    }]);
	    return Ellipse;
	}();

	exports.default = Ellipse;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _assign = __webpack_require__(49);

	var _assign2 = _interopRequireDefault(_assign);

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(67);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultOptions = {
	    color: '#000',
	    width: 1,
	    lineCap: 'butt',
	    lineJoin: 'miter'
	};

	var Image = function () {
	    function Image() {
	        (0, _classCallCheck3.default)(this, Image);

	        this.id = _util2.default.uid();
	        var args = (0, _from2.default)(arguments);
	        var points = args[0];
	        var options = args[1] || {};
	        this._options = (0, _assign2.default)({}, defaultOptions, options);
	        this.initImage(points);
	    }

	    (0, _createClass3.default)(Image, [{
	        key: 'initImage',
	        value: function initImage(points) {
	            this.points = [];
	            if (_util2.default.isArray(points)) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3.default)(points), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var point = _step.value;

	                        if (_util2.default.isArray(point) && point.length === 2) {
	                            if (_util2.default.isNumber(point[0]) && _util2.default.isNumber(point[1])) {
	                                this.points.push(point);
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'draw',
	        value: function draw(ctx) {
	            ctx.lineWidth = this._options.width;
	            ctx.strokeStyle = this._options.color;
	            ctx.lineCap = this._options.lineCap;
	            ctx.lineJoin = this._options.lineJoin;
	            ctx.beginPath();
	            if (this.points.length > 1) {
	                ctx.moveTo(points[0][0], points[0][1]);
	                var tmpPoints = this.points.slice(1);
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = (0, _getIterator3.default)(tmpPoints), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var pt = _step2.value;

	                        ctx.lineTo(pt[0], pt[1]);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                ctx.stroke();
	            }
	            ctx.closePath();
	        }
	    }]);
	    return Image;
	}();

	exports.default = Image;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _assign = __webpack_require__(49);

	var _assign2 = _interopRequireDefault(_assign);

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(67);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultOptions = {
	    color: '#000',
	    width: 1,
	    lineCap: 'butt',
	    lineJoin: 'miter'
	};

	var Polygon = function () {
	    function Polygon() {
	        (0, _classCallCheck3.default)(this, Polygon);

	        this.id = _util2.default.uid();
	        var args = (0, _from2.default)(arguments);
	        var points = args[0];
	        var options = args[1] || {};
	        this._options = (0, _assign2.default)({}, defaultOptions, options);
	        this.initPolygon(points);
	    }

	    (0, _createClass3.default)(Polygon, [{
	        key: 'initPolygon',
	        value: function initPolygon(points) {
	            this.points = [];
	            if (_util2.default.isArray(points)) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3.default)(points), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var point = _step.value;

	                        if (_util2.default.isArray(point) && point.length === 2) {
	                            if (_util2.default.isNumber(point[0]) && _util2.default.isNumber(point[1])) {
	                                this.points.push(point);
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'draw',
	        value: function draw(ctx) {
	            ctx.lineWidth = this._options.width;
	            ctx.strokeStyle = this._options.color;
	            ctx.lineCap = this._options.lineCap;
	            ctx.lineJoin = this._options.lineJoin;
	            ctx.beginPath();
	            if (this.points.length > 1) {
	                ctx.moveTo(points[0][0], points[0][1]);
	                var tmpPoints = this.points.slice(1);
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = (0, _getIterator3.default)(tmpPoints), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var pt = _step2.value;

	                        ctx.lineTo(pt[0], pt[1]);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                ctx.stroke();
	            }
	            ctx.closePath();
	        }
	    }]);
	    return Polygon;
	}();

	exports.default = Polygon;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _assign = __webpack_require__(49);

	var _assign2 = _interopRequireDefault(_assign);

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(67);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultOptions = {
	    color: '#000',
	    width: 1,
	    lineCap: 'butt',
	    lineJoin: 'miter'
	};

	var Rectangle = function () {
	    function Rectangle() {
	        (0, _classCallCheck3.default)(this, Rectangle);

	        this.id = _util2.default.uid();
	        var args = (0, _from2.default)(arguments);
	        var points = args[0];
	        var options = args[1] || {};
	        this._options = (0, _assign2.default)({}, defaultOptions, options);
	        this.initRectangle(points);
	    }

	    (0, _createClass3.default)(Rectangle, [{
	        key: 'initRectangle',
	        value: function initRectangle(points) {
	            this.points = [];
	            if (_util2.default.isArray(points)) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3.default)(points), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var point = _step.value;

	                        if (_util2.default.isArray(point) && point.length === 2) {
	                            if (_util2.default.isNumber(point[0]) && _util2.default.isNumber(point[1])) {
	                                this.points.push(point);
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'draw',
	        value: function draw(ctx) {
	            ctx.lineWidth = this._options.width;
	            ctx.strokeStyle = this._options.color;
	            ctx.lineCap = this._options.lineCap;
	            ctx.lineJoin = this._options.lineJoin;
	            ctx.beginPath();
	            if (this.points.length > 1) {
	                ctx.moveTo(points[0][0], points[0][1]);
	                var tmpPoints = this.points.slice(1);
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = (0, _getIterator3.default)(tmpPoints), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var pt = _step2.value;

	                        ctx.lineTo(pt[0], pt[1]);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                ctx.stroke();
	            }
	            ctx.closePath();
	        }
	    }]);
	    return Rectangle;
	}();

	exports.default = Rectangle;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _assign = __webpack_require__(49);

	var _assign2 = _interopRequireDefault(_assign);

	var _from = __webpack_require__(54);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(61);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(62);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(67);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultOptions = {
	    color: '#000',
	    width: 1,
	    lineCap: 'butt',
	    lineJoin: 'miter'
	};

	var Text = function () {
	    function Text() {
	        (0, _classCallCheck3.default)(this, Text);

	        this.id = _util2.default.uid();
	        var args = (0, _from2.default)(arguments);
	        var points = args[0];
	        var options = args[1] || {};
	        this._options = (0, _assign2.default)({}, defaultOptions, options);
	        this.initText(points);
	    }

	    (0, _createClass3.default)(Text, [{
	        key: 'initText',
	        value: function initText(points) {
	            this.points = [];
	            if (_util2.default.isArray(points)) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3.default)(points), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var point = _step.value;

	                        if (_util2.default.isArray(point) && point.length === 2) {
	                            if (_util2.default.isNumber(point[0]) && _util2.default.isNumber(point[1])) {
	                                this.points.push(point);
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'draw',
	        value: function draw(ctx) {
	            ctx.lineWidth = this._options.width;
	            ctx.strokeStyle = this._options.color;
	            ctx.lineCap = this._options.lineCap;
	            ctx.lineJoin = this._options.lineJoin;
	            ctx.beginPath();
	            if (this.points.length > 1) {
	                ctx.moveTo(points[0][0], points[0][1]);
	                var tmpPoints = this.points.slice(1);
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = (0, _getIterator3.default)(tmpPoints), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var pt = _step2.value;

	                        ctx.lineTo(pt[0], pt[1]);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                ctx.stroke();
	            }
	            ctx.closePath();
	        }
	    }]);
	    return Text;
	}();

	exports.default = Text;

/***/ }
/******/ ]);