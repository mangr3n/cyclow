(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cyclow"] = factory();
	else
		root["cyclow"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _app = __webpack_require__(1);
	
	Object.defineProperty(exports, 'app', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_app).default;
	  }
	});
	
	var _domDriver = __webpack_require__(2);
	
	Object.defineProperty(exports, 'domDriver', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_domDriver).default;
	  }
	});
	
	var _stateDriver = __webpack_require__(5);
	
	Object.defineProperty(exports, 'stateDriver', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_stateDriver).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var cacheProps = function cacheProps(e) {
	  return {
	    id: e.id,
	    selectionStart: e.selectionStart,
	    selectionEnd: e.selectionEnd,
	    selectionDirection: e.selectionDirection,
	    scrollTop: e.scrollTop,
	    scrollLeft: e.scrollLeft
	  };
	};
	
	var app = function app(component, id) {
	  var initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  component.out.dom.on(function (e) {
	    var focusedId = (document.activeElement || { id: '' }).id;
	    var identifiedElements = Array.prototype.map.call(document.querySelectorAll('[id]'), cacheProps);
	
	    var el = document.getElementById(id);
	    el.innerHTML = '';
	    el.appendChild(e);
	
	    identifiedElements.forEach(function (element) {
	      var newElement = document.getElementById(element.id);
	      if (newElement) {
	        if (element.id === focusedId) newElement.focus();
	        Object.assign(newElement, element);
	      }
	    });
	  });
	
	  return {
	    start: function start() {
	      component.in.init.send(initialState);
	    }
	  };
	};
	
	exports.default = app;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _graflow = __webpack_require__(3);
	
	var _buildDom = __webpack_require__(4);
	
	var _buildDom2 = _interopRequireDefault(_buildDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var domDriver = function domDriver() {
	  return (0, _graflow.component)({
	    components: {
	      build: (0, _graflow.component)(function (v, next) {
	        var nextEvent = function nextEvent(e) {
	          return next({ event: e });
	        };
	        var el = (0, _buildDom2.default)(v, nextEvent);
	        next({ element: el });
	      }),
	      demux: (0, _graflow.demux)(['event', 'element'])
	    },
	    connections: [['in.default', 'build'], ['build', 'demux'], ['demux.element', 'out.element'], ['demux.event', 'out.event']],
	    outputs: ['element', 'event']
	  });
	};
	
	exports.default = domDriver;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["graflow"] = factory();
		else
			root["graflow"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _component = __webpack_require__(1);
		
		Object.defineProperty(exports, 'default', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_component).default;
		  }
		});
		Object.defineProperty(exports, 'component', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_component).default;
		  }
		});
		
		var _map = __webpack_require__(2);
		
		Object.defineProperty(exports, 'map', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_map).default;
		  }
		});
		
		var _filter = __webpack_require__(3);
		
		Object.defineProperty(exports, 'filter', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_filter).default;
		  }
		});
		
		var _count = __webpack_require__(4);
		
		Object.defineProperty(exports, 'count', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_count).default;
		  }
		});
		
		var _accumulate = __webpack_require__(5);
		
		Object.defineProperty(exports, 'accumulate', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_accumulate).default;
		  }
		});
		
		var _mux = __webpack_require__(6);
		
		Object.defineProperty(exports, 'mux', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_mux).default;
		  }
		});
		
		var _demux = __webpack_require__(7);
		
		Object.defineProperty(exports, 'demux', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_demux).default;
		  }
		});
		
		var _iterateOnce = __webpack_require__(8);
		
		Object.defineProperty(exports, 'iterateOnce', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_iterateOnce).default;
		  }
		});
		
		var _iterateAll = __webpack_require__(9);
		
		Object.defineProperty(exports, 'iterateAll', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_iterateAll).default;
		  }
		});
		
		var _repeat = __webpack_require__(10);
		
		Object.defineProperty(exports, 'repeat', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_repeat).default;
		  }
		});
		
		var _uniq = __webpack_require__(11);
		
		Object.defineProperty(exports, 'uniq', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_uniq).default;
		  }
		});
		
		var _debug = __webpack_require__(12);
		
		Object.defineProperty(exports, 'debug', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_debug).default;
		  }
		});
		
		var _chain = __webpack_require__(13);
		
		Object.defineProperty(exports, 'chain', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_chain).default;
		  }
		});
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		var connect = function connect(compOut, compIn) {
		  var match = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { default: 'default' };
		
		  Object.keys(match).forEach(function (outName) {
		    var inName = match[outName];
		    var output = compOut.outputs[outName];
		    var input = compIn.inputs[inName];
		
		    if (output !== undefined && input !== undefined) {
		      output.connect(input);
		    }
		  });
		};
		
		var toComponent = function toComponent(arg) {
		  if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') return arg;
		  var node = toNode(arg);
		  return {
		    start: function start() {
		      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		      return node.received(v);
		    },
		    inputs: { default: node },
		    outputs: { default: node },
		    in: { default: node },
		    out: { default: node }
		  };
		};
		
		var toNode = function toNode(arg) {
		  var result = arg;
		  if (typeof arg === 'function') {
		    result = node(arg);
		  }
		  return result;
		};
		
		var node = function node(onNext) {
		  var queue = [];
		  var listeners = [];
		  var next = function next(v) {
		    listeners.forEach(function (l) {
		      return l.addToQueue(v);
		    });
		    listeners.forEach(function (l) {
		      return l.processQueue();
		    });
		  };
		
		  var obj = {
		    addListener: function addListener(listener) {
		      listeners.push(toNode(listener));
		    },
		    on: function on(listener) {
		      obj.addListener(listener);
		    },
		    connect: function connect(listener) {
		      obj.addListener(listener);
		    },
		    addToQueue: function addToQueue(v) {
		      queue.push(v);
		    },
		    received: function received() {
		      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		
		      obj.addToQueue(v);
		      obj.processQueue();
		    },
		    send: function send() {
		      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		      obj.received(v);
		    },
		    processQueue: function processQueue() {
		      var values = queue.length;
		      for (var i = 1; i <= values; i++) {
		        var v = queue.shift();
		        onNext(v, next);
		      }
		    }
		  };
		
		  return obj;
		};
		
		var select = function select(name, components) {
		  var io = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'inputs';
		
		  var direction = io === 'inputs' ? 'inputs' : 'outputs';
		
		  var _name$split = name.split('.', 2),
		      _name$split2 = _slicedToArray(_name$split, 2),
		      componentName = _name$split2[0],
		      streamName = _name$split2[1];
		
		  var component = components[componentName];
		  if (component === undefined) return undefined;
		  var ioStreams = component[direction];
		  if (ioStreams === undefined) return undefined;
		  if (streamName === undefined) {
		    var ioNames = Object.keys(ioStreams);
		    if (ioNames.length != 1) return undefined;
		    streamName = ioNames[0];
		  }
		
		  if (ioStreams[streamName] === undefined) throw io + ' stream ' + name + ' not found!';else return ioStreams[streamName];
		};
		
		var component2 = function component2(_ref) {
		  var components = _ref.components,
		      _ref$connections = _ref.connections,
		      connections = _ref$connections === undefined ? [] : _ref$connections,
		      _ref$inputs = _ref.inputs,
		      inputs = _ref$inputs === undefined ? ['default'] : _ref$inputs,
		      _ref$outputs = _ref.outputs,
		      outputs = _ref$outputs === undefined ? ['default'] : _ref$outputs;
		
		  Object.keys(components).forEach(function (key) {
		    components[key] = toComponent(components[key]);
		  });
		
		  var inNodes = inputs.reduce(function (acc, i) {
		    acc[i] = node(function (v, next) {
		      return next(v);
		    });
		    return acc;
		  }, {});
		
		  var outNodes = outputs.reduce(function (acc, i) {
		    acc[i] = node(function (v, next) {
		      return next(v);
		    });
		    return acc;
		  }, {});
		
		  components.in = { inputs: inNodes, outputs: inNodes };
		  components.out = { inputs: outNodes, outputs: outNodes };
		
		  connections.forEach(function (_ref2) {
		    var _ref3 = _slicedToArray(_ref2, 2),
		        from = _ref3[0],
		        to = _ref3[1];
		
		    var streamOut = select(from, components, 'outputs');
		    var streamIn = select(to, components, 'inputs');
		
		    streamOut.addListener(streamIn);
		  });
		
		  var stringsToObj = function stringsToObj(strings, components, direction) {
		    return strings.reduce(function (acc, name) {
		      var stream = components[name][direction].default;
		      acc[name] = stream;
		      if (strings.length == 1) {
		        acc.default = stream;
		      }
		      return acc;
		    }, {});
		  };
		
		  var comp = {
		    start: function start() {
		      var initialValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { default: {} };
		
		      if ((typeof initialValues === 'undefined' ? 'undefined' : _typeof(initialValues)) !== 'object') {
		        initialValues = { default: initialValues };
		      }
		      for (var key in initialValues) {
		        comp.inputs[key].received(initialValues[key]);
		      }
		    },
		    inputs: inNodes,
		    outputs: outNodes,
		    in: inNodes,
		    out: outNodes
		  };
		
		  return comp;
		};
		
		var component = function component(arg) {
		  if (typeof arg === 'function') return toComponent(arg);else return component2(arg);
		};
		
		exports.default = component;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var map = function map(f) {
		  return (0, _component2.default)(function (v, next) {
		    return next(f(v));
		  });
		};
		
		exports.default = map;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var filter = function filter(cond) {
		  return (0, _component2.default)(function (v, next) {
		    if (cond(v)) next(v);
		  });
		};
		
		exports.default = filter;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var count = function count() {
		  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		
		  var value = initial;
		  return (0, _component2.default)(function (v, next) {
		    value++;
		    next(value);
		  });
		};
		
		exports.default = count;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var accumulate = function accumulate() {
		  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		
		  var obj = initial;
		  return (0, _component2.default)(function (v, next) {
		    if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) !== 'object') return;
		    Object.entries(v).forEach(function (_ref) {
		      var _ref2 = _slicedToArray(_ref, 2),
		          k = _ref2[0],
		          v = _ref2[1];
		
		      return obj[k] = v;
		    });
		    next(obj);
		  });
		};
		
		exports.default = accumulate;
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		var _map = __webpack_require__(2);
		
		var _map2 = _interopRequireDefault(_map);
		
		var _filter = __webpack_require__(3);
		
		var _filter2 = _interopRequireDefault(_filter);
		
		var _accumulate = __webpack_require__(5);
		
		var _accumulate2 = _interopRequireDefault(_accumulate);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		var mux = function mux(inputs) {
		  var components = {};
		  var connections = [];
		
		  inputs.forEach(function (i) {
		    components[i] = (0, _map2.default)(function (v) {
		      return _defineProperty({}, i, v);
		    });
		    connections.push(['in.' + i, i], [i, 'acc']);
		  });
		
		  components.acc = (0, _accumulate2.default)();
		  components.filter = (0, _filter2.default)(function (v) {
		    return inputs.every(function (i) {
		      return v[i] !== undefined;
		    });
		  });
		
		  connections.push(['acc', 'filter'], ['filter', 'out.default']);
		
		  return (0, _component2.default)({ components: components, connections: connections, inputs: inputs });
		};
		
		exports.default = mux;
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var demux = function demux(outputs) {
		  var flatMap = function flatMap(v) {
		    return [].concat.apply([], v);
		  };
		
		  return (0, _component2.default)({
		    components: outputs.reduce(function (acc, output) {
		      acc[output] = (0, _component2.default)(function (v, next) {
		        if (v[output] !== undefined) next(v[output]);
		      });
		      return acc;
		    }, {}),
		    outputs: outputs,
		    connections: flatMap(outputs.map(function (out) {
		      return [['in.default', out], [out, 'out.' + out]];
		    }))
		  });
		};
		
		exports.default = demux;
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var iterateOnce = function iterateOnce(iterable) {
		  var iterator = iterable[Symbol.iterator]();
		
		  return (0, _component2.default)(function (v, next) {
		    var _iterator$next = iterator.next(),
		        value = _iterator$next.value,
		        done = _iterator$next.done;
		
		    if (!done) next(value);
		  });
		};
		
		exports.default = iterateOnce;
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var iterateAll = function iterateAll(iterable) {
		  return (0, _component2.default)(function (v, next) {
		    var _iteratorNormalCompletion = true;
		    var _didIteratorError = false;
		    var _iteratorError = undefined;
		
		    try {
		      for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		        var i = _step.value;
		        next(i);
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
		  });
		};
		
		exports.default = iterateAll;
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var repeat = function repeat() {
		  var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
		  return (0, _component2.default)(function (v, next) {
		    for (var i = 1; i <= times; i++) {
		      next(v);
		    }
		  });
		};
		
		exports.default = repeat;
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var uniq = function uniq(initialValue) {
		  var lastValue = initialValue;
		  return (0, _component2.default)(function (v, next) {
		    if (v !== lastValue) {
		      lastValue = v;
		      next(v);
		    }
		  });
		};
		
		exports.default = uniq;
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var debug = function debug(msg) {
		  var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : console.log;
		  return (0, _component2.default)(function (v, next) {
		    log(msg, v);
		    return next(v);
		  });
		};
		
		exports.default = debug;
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _component = __webpack_require__(1);
		
		var _component2 = _interopRequireDefault(_component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		var chain = function chain() {
		  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		    args[_key] = arguments[_key];
		  }
		
		  var lastIndex = args.length - 1;
		  var _ref = [args[0], args[lastIndex]],
		      first = _ref[0],
		      last = _ref[1];
		
		
		  var components = args.reduce(function (obj, v, i) {
		    return _extends({}, obj, _defineProperty({}, 'c' + i, v));
		  }, {});
		
		  var inputs = Object.keys(first.inputs);
		  var outputs = Object.keys(last.outputs);
		
		  var connections = [].concat(_toConsumableArray(Array(lastIndex).keys())).map(function (i) {
		    return ['c' + i, 'c' + (i + 1)];
		  }).concat(inputs.map(function (input) {
		    return ['in.' + input, 'c0.' + input];
		  })).concat(outputs.map(function (output) {
		    return ['c' + lastIndex + '.' + output, 'out.' + output];
		  }));
		
		  return (0, _component2.default)({ components: components, connections: connections, inputs: inputs, outputs: outputs });
		};
		
		exports.default = chain;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=graflow.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var buildContent = function buildContent(content, parent, next) {
	  if (typeof content === 'string') {
	    var element = document.createTextNode(content);
	    parent.appendChild(element);
	  } else if (content instanceof HTMLElement) {
	    parent.appendChild(content);
	  } else if (content instanceof Array) {
	    content.forEach(function (i) {
	      return buildContent(i, parent, next);
	    });
	  } else if (content instanceof Object) {
	    var _element = buildDom(content, next);
	    parent.appendChild(_element);
	  }
	};
	
	var setAttributes = function setAttributes(attrs, el) {
	  return Object.entries(attrs).forEach(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        name = _ref2[0],
	        value = _ref2[1];
	
	    if (value) el.setAttribute(name, value);
	  });
	};
	
	var setEventHandlers = function setEventHandlers(handlers, el, next) {
	  return Object.entries(handlers).forEach(function (_ref3) {
	    var _ref4 = _slicedToArray(_ref3, 2),
	        event = _ref4[0],
	        handler = _ref4[1];
	
	    el.addEventListener(event, function (e) {
	      if (typeof handler === 'function') handler(e, next);else next(handler);
	    });
	  });
	};
	
	var buildDom = function buildDom(data, next) {
	  var _data$tag = data.tag,
	      tag = _data$tag === undefined ? 'div' : _data$tag,
	      _data$attrs = data.attrs,
	      attrs = _data$attrs === undefined ? {} : _data$attrs,
	      _data$on = data.on,
	      on = _data$on === undefined ? {} : _data$on,
	      _data$content = data.content,
	      content = _data$content === undefined ? [] : _data$content;
	
	  var el = document.createElement(tag);
	
	  setAttributes(attrs, el);
	  setEventHandlers(on, el, next);
	  buildContent(content, el, next);
	
	  return el;
	};
	
	exports.default = buildDom;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _graflow = __webpack_require__(3);
	
	var _graflow2 = _interopRequireDefault(_graflow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stateDriver = function stateDriver() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var state = initialState;
	
	  return (0, _graflow2.default)({
	    components: {
	      transform: (0, _graflow2.default)(function (v, next) {
	        state = v(state);
	        next(state);
	      })
	    },
	    connections: [['in.transformation', 'transform'], ['transform', 'out.state']],
	    inputs: ['transformation'],
	    outputs: ['state']
	  });
	};
	
	exports.default = stateDriver;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cyclow.js.map