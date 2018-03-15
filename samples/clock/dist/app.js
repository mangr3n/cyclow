(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["app"] = factory();
	else
		root["app"] = factory();
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
	
	var _cyclow = __webpack_require__(1);
	
	var _Clock = __webpack_require__(3);
	
	var _Clock2 = _interopRequireDefault(_Clock);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _cyclow.run)(_Clock2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["cyclow"] = factory();else root["cyclow"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _run = __webpack_require__(1);
	
				Object.defineProperty(exports, 'run', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_run).default;
					}
				});
				Object.defineProperty(exports, 'runComponent', {
					enumerable: true,
					get: function get() {
						return _run.runComponent;
					}
				});
	
				var _h = __webpack_require__(21);
	
				Object.defineProperty(exports, 'h', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_h).default;
					}
				});
	
				var _SnabbdomRenderer = __webpack_require__(2);
	
				Object.defineProperty(exports, 'SnabbdomRenderer', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_SnabbdomRenderer).default;
					}
				});
	
				var _State = __webpack_require__(22);
	
				Object.defineProperty(exports, 'State', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_State).default;
					}
				});
	
				var _Events = __webpack_require__(23);
	
				Object.defineProperty(exports, 'Events', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_Events).default;
					}
				});
	
				var _View = __webpack_require__(24);
	
				Object.defineProperty(exports, 'View', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_View).default;
					}
				});
	
				var _Block = __webpack_require__(25);
	
				Object.defineProperty(exports, 'Block', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_Block).default;
					}
				});
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.run = exports.runComponent = undefined;
	
				var _SnabbdomRenderer = __webpack_require__(2);
	
				var _SnabbdomRenderer2 = _interopRequireDefault(_SnabbdomRenderer);
	
				var _graflow = __webpack_require__(3);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				var runComponent = exports.runComponent = function runComponent(MainComponent) {
					var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
					var init = opts.init || {};
					var Renderer = opts.renderer || _SnabbdomRenderer2.default;
	
					var comp = (0, _graflow.Component)({
						components: {
							main: MainComponent(),
							renderer: Renderer(opts.target),
							demuxer: (0, _graflow.Demuxer)('vdom', 'signals')
						},
						connections: [['in', 'main'], ['main', 'demuxer'], ['demuxer.vdom', 'renderer'], ['demuxer.signals', 'out']]
					});
					comp.send({ init: init });
					return comp;
				};
	
				var run = exports.run = function run(MainComponent) {
					var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
					window.addEventListener('DOMContentLoaded', function () {
						return runComponent(MainComponent, opts);
					});
				};
	
				exports.default = run;
	
				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _slicedToArray = function () {
					function sliceIterator(arr, i) {
						var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
							for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
								_arr.push(_s.value);if (i && _arr.length === i) break;
							}
						} catch (err) {
							_d = true;_e = err;
						} finally {
							try {
								if (!_n && _i["return"]) _i["return"]();
							} finally {
								if (_d) throw _e;
							}
						}return _arr;
					}return function (arr, i) {
						if (Array.isArray(arr)) {
							return arr;
						} else if (Symbol.iterator in Object(arr)) {
							return sliceIterator(arr, i);
						} else {
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						}
					};
				}();
	
				var _graflow = __webpack_require__(3);
	
				var _graflow2 = _interopRequireDefault(_graflow);
	
				var _utils = __webpack_require__(4);
	
				var _Message = __webpack_require__(5);
	
				var _Message2 = _interopRequireDefault(_Message);
	
				var _snabbdom = __webpack_require__(6);
	
				var _snabbdom2 = _interopRequireDefault(_snabbdom);
	
				var _eventlisteners = __webpack_require__(12);
	
				var _eventlisteners2 = _interopRequireDefault(_eventlisteners);
	
				var _props = __webpack_require__(13);
	
				var _props2 = _interopRequireDefault(_props);
	
				var _attributes = __webpack_require__(14);
	
				var _attributes2 = _interopRequireDefault(_attributes);
	
				var _class = __webpack_require__(15);
	
				var _class2 = _interopRequireDefault(_class);
	
				var _style = __webpack_require__(16);
	
				var _style2 = _interopRequireDefault(_style);
	
				var _h = __webpack_require__(10);
	
				var _h2 = _interopRequireDefault(_h);
	
				var _util = __webpack_require__(17);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _objectWithoutProperties(obj, keys) {
					var target = {};for (var i in obj) {
						if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
					}return target;
				}
	
				var Event = function Event(arg) {
					if ((0, _utils.isString)(arg)) return [["dom", arg, {}]];
					if ((0, _utils.isObject)(arg)) {
						return Object.entries(arg).map(function (_ref) {
							var _ref2 = _slicedToArray(_ref, 2),
							    name = _ref2[0],
							    value = _ref2[1];
	
							return ["dom", name, value];
						});
					}
					return [["dom", "default", arg]];
				};
	
				var getHandlers = function getHandlers(handlers, component) {
					return (0, _utils.mapObject)(handlers, function (event, handler) {
						var next = component ? function (v) {
							return component.send((0, _Message2.default)("dom", "event", Event(v)));
						} : function () {};
	
						var newHandler = function newHandler(e) {
							return (0, _utils.isFunction)(handler) ? handler(e, next) : next(handler);
						};
	
						return [event, newHandler];
					});
				};
	
				var isSnabbdomVNode = function isSnabbdomVNode(vdom) {
					var keys = Object.keys(vdom);
					if (keys.includes('sel')) return true;
					return false;
				};
	
				var toSnabbdom = function toSnabbdom(vdom) {
					var svg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
					var component = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
					// console.log('toSnabbdom: ',{vdom});
					if ((0, _utils.isString)(vdom)) return vdom;
					if ((0, _utils.isArray)(vdom)) {
						return (0, _utils.flatten)(vdom).filter(_utils.isDefined).map(function (v) {
							return toSnabbdom(v, svg, component);
						});
					}
	
					if (component == null) component = vdom.component;
					if (isSnabbdomVNode(vdom)) {
						if ((0, _util.isUndefined)(vdom.data)) vdom.data = {};
						if (vdom.root) {
							if ((0, _util.isUndefined)(vdom.data.hook)) vdom.data.hook = {};
							var existingUpdate = vdom.data.hook.update;
							vdom.data.hook.update = function (oldVN, newVN) {
								component.send((0, _Message2.default)('dom', 'node', newVN.elm));
								if ((0, _utils.isFunction)(existingUpdate)) existingUpdate(oldVN, newVN);
							};
						}
						if (!(0, _util.isUndefined)(vdom.data.on)) {
							vdom.data.on = getHandlers(vdom.data.on, component);
						}
						if (!(0, _util.isUndefined)(vdom.children) && !(0, _utils.isString)(vdom.children)) {
							vdom.children = toSnabbdom(vdom.children, svg, component);
						}
						return vdom;
					}
	
					var _vdom$tag = vdom.tag,
					    tag = _vdom$tag === undefined ? "div" : _vdom$tag,
					    _vdom$attrs = vdom.attrs,
					    attrs = _vdom$attrs === undefined ? {} : _vdom$attrs,
					    _vdom$on = vdom.on,
					    on = _vdom$on === undefined ? {} : _vdom$on,
					    _vdom$content = vdom.content,
					    content = _vdom$content === undefined ? [] : _vdom$content,
					    _vdom$props = vdom.props,
					    props = _vdom$props === undefined ? {} : _vdom$props,
					    _vdom$style = vdom.style,
					    style = _vdom$style === undefined ? {} : _vdom$style,
					    _vdom$hook = vdom.hook,
					    hook = _vdom$hook === undefined ? {} : _vdom$hook;
	
					var klass = attrs.class,
					    rest = _objectWithoutProperties(attrs, ["class"]);
	
					var handlers = getHandlers(on, component);
	
					if (vdom.root) {
						var oldUpdate = hook.update;
						hook.update = function (oldVNode, newVNode) {
							component.send((0, _Message2.default)("dom", "node", newVNode.elm));
							if (oldUpdate) oldUpdate(oldVNode, newVNode);
						};
					}
	
					var newSvg = svg || tag === "svg";
	
					return (0, _h2.default)(tag, {
						attrs: rest,
						style: style,
						props: props,
						class: klass,
						on: handlers,
						hook: hook
					}, toSnabbdom(content, newSvg));
				};
	
				var updateProps = function updateProps(oldVnode, vnode) {
					if (vnode.elm.tagName === "INPUT" && (0, _utils.isDefined)(vnode.data) && (0, _utils.isDefined)(vnode.data.props) && (0, _utils.isDefined)(vnode.data.props.value)) {
						vnode.elm.value = vnode.data.props.value;
					}
				};
	
				var liveProps = { create: updateProps, update: updateProps };
	
				var patch = _snabbdom2.default.init([_eventlisteners2.default, _props2.default, _attributes2.default, _class2.default, _style2.default, liveProps]);
	
				var toTarget = function toTarget(targetId) {
					return targetId ? document.getElementById(targetId) : document.body.appendChild(document.createElement("div"));
				};
	
				var SnabbdomRenderer = function SnabbdomRenderer(targetId) {
					var lastVdom = toTarget(targetId);
	
					return (0, _graflow2.default)(function (vdom) {
						var snabbdomVdom = toSnabbdom(vdom);
						patch(lastVdom, snabbdomVdom);
						lastVdom = snabbdomVdom;
					});
				};
	
				exports.default = SnabbdomRenderer;
	
				/***/
			},
			/* 3 */
			/***/function (module, exports, __webpack_require__) {
	
				(function webpackUniversalModuleDefinition(root, factory) {
					if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["graflow"] = factory();else root["graflow"] = factory();
				})(this, function () {
					return (/******/function (modules) {
							// webpackBootstrap
							/******/ // The module cache
							/******/var installedModules = {};
							/******/
							/******/ // The require function
							/******/function __webpack_require__(moduleId) {
								/******/
								/******/ // Check if module is in cache
								/******/if (installedModules[moduleId])
									/******/return installedModules[moduleId].exports;
								/******/
								/******/ // Create a new module (and put it into the cache)
								/******/var module = installedModules[moduleId] = {
									/******/exports: {},
									/******/id: moduleId,
									/******/loaded: false
									/******/ };
								/******/
								/******/ // Execute the module function
								/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
								/******/
								/******/ // Flag the module as loaded
								/******/module.loaded = true;
								/******/
								/******/ // Return the exports of the module
								/******/return module.exports;
								/******/
							}
							/******/
							/******/
							/******/ // expose the modules object (__webpack_modules__)
							/******/__webpack_require__.m = modules;
							/******/
							/******/ // expose the module cache
							/******/__webpack_require__.c = installedModules;
							/******/
							/******/ // __webpack_public_path__
							/******/__webpack_require__.p = "";
							/******/
							/******/ // Load entry module and return exports
							/******/return __webpack_require__(0);
							/******/
						}(
						/************************************************************************/
						/******/[
						/* 0 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							Object.defineProperty(exports, 'default', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Component).default;
								}
							});
							Object.defineProperty(exports, 'Component', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Component).default;
								}
							});
	
							var _Mapper = __webpack_require__(3);
	
							Object.defineProperty(exports, 'Mapper', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Mapper).default;
								}
							});
	
							var _Filter = __webpack_require__(4);
	
							Object.defineProperty(exports, 'Filter', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Filter).default;
								}
							});
	
							var _Counter = __webpack_require__(5);
	
							Object.defineProperty(exports, 'Counter', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Counter).default;
								}
							});
	
							var _Accumulator = __webpack_require__(6);
	
							Object.defineProperty(exports, 'Accumulator', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Accumulator).default;
								}
							});
	
							var _Memorizer = __webpack_require__(7);
	
							Object.defineProperty(exports, 'Memorizer', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Memorizer).default;
								}
							});
	
							var _Hub = __webpack_require__(12);
	
							Object.defineProperty(exports, 'Hub', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Hub).default;
								}
							});
	
							var _Muxer = __webpack_require__(13);
	
							Object.defineProperty(exports, 'Muxer', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Muxer).default;
								}
							});
	
							var _Demuxer = __webpack_require__(11);
	
							Object.defineProperty(exports, 'Demuxer', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Demuxer).default;
								}
							});
	
							var _SortedDemuxer = __webpack_require__(8);
	
							Object.defineProperty(exports, 'SortedDemuxer', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_SortedDemuxer).default;
								}
							});
	
							var _Iterator = __webpack_require__(14);
	
							Object.defineProperty(exports, 'Iterator', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Iterator).default;
								}
							});
	
							var _Serializer = __webpack_require__(10);
	
							Object.defineProperty(exports, 'Serializer', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Serializer).default;
								}
							});
	
							var _ArraySerializer = __webpack_require__(15);
	
							Object.defineProperty(exports, 'ArraySerializer', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_ArraySerializer).default;
								}
							});
	
							var _Repeater = __webpack_require__(16);
	
							Object.defineProperty(exports, 'Repeater', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Repeater).default;
								}
							});
	
							var _UniqueFilter = __webpack_require__(17);
	
							Object.defineProperty(exports, 'UniqueFilter', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_UniqueFilter).default;
								}
							});
	
							var _Logger = __webpack_require__(18);
	
							Object.defineProperty(exports, 'Logger', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Logger).default;
								}
							});
	
							var _Chain = __webpack_require__(9);
	
							Object.defineProperty(exports, 'Chain', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Chain).default;
								}
							});
	
							var _Checker = __webpack_require__(19);
	
							Object.defineProperty(exports, 'Checker', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Checker).default;
								}
							});
	
							var _Guard = __webpack_require__(20);
	
							Object.defineProperty(exports, 'Guard', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Guard).default;
								}
							});
	
							var _Identity = __webpack_require__(21);
	
							Object.defineProperty(exports, 'Identity', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Identity).default;
								}
							});
	
							var _Delayer = __webpack_require__(22);
	
							Object.defineProperty(exports, 'Delayer', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Delayer).default;
								}
							});
	
							var _Ticker = __webpack_require__(23);
	
							Object.defineProperty(exports, 'Ticker', {
								enumerable: true,
								get: function get() {
									return _interopRequireDefault(_Ticker).default;
								}
							});
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							/***/
						},
						/* 1 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _slicedToArray = function () {
								function sliceIterator(arr, i) {
									var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
										for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
											_arr.push(_s.value);if (i && _arr.length === i) break;
										}
									} catch (err) {
										_d = true;_e = err;
									} finally {
										try {
											if (!_n && _i["return"]) _i["return"]();
										} finally {
											if (_d) throw _e;
										}
									}return _arr;
								}return function (arr, i) {
									if (Array.isArray(arr)) {
										return arr;
									} else if (Symbol.iterator in Object(arr)) {
										return sliceIterator(arr, i);
									} else {
										throw new TypeError("Invalid attempt to destructure non-iterable instance");
									}
								};
							}();
	
							var _utils = __webpack_require__(2);
	
							var _componentId = 0;
	
							var nextId = function nextId() {
								return _componentId++;
							};
	
							var componentFromFunction = function componentFromFunction(func) {
								var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
								var node = toNode(func);
	
								return {
									send: function send() {
										var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
										return node.send(value);
									},
									on: function on(handler) {
										return node.on(handler);
									},
									off: function off(id) {
										return node.off(id);
									},
									inputs: {
										default: node
									},
									outputs: {
										default: node
									},
									id: node.id,
									name: name
								};
							};
	
							var toNode = function toNode(arg) {
								if ((0, _utils.isFunction)(arg)) return node(arg);
								return arg;
							};
	
							var node = function node(onNext) {
								var id = nextId();
								var queue = [];
								var listeners = {};
	
								var broadcast = function broadcast(arg) {
									var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
									arg.forEach(function (l) {
										return l.addToQueue(value);
									});
									arg.forEach(function (l) {
										return l.processQueue();
									});
								};
	
								var next = function next(v) {
									return broadcast(Object.values(listeners), v);
								};
	
								var addListener = function addListener(node) {
									listeners[node.id] = node;
									return node.id;
								};
								var removeListener = function removeListener(id) {
									delete listeners[id];
								};
								var on = function on(handler) {
									return addListener(toNode(function (v) {
										return handler(v);
									}));
								};
								var addToQueue = function addToQueue(v) {
									return queue.push(v);
								};
								var processQueue = function processQueue() {
									return (0, _utils.applyAndEmpty)(queue, function (v) {
										return onNext(v, next);
									});
								};
								var off = function off(id) {
									return removeListener(id);
								};
	
								var send = function send() {
									var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
									addToQueue(value);
									processQueue();
								};
	
								return {
									on: on,
									off: off,
									send: send,
									addListener: addListener,
									addToQueue: addToQueue,
									processQueue: processQueue,
									id: id
								};
							};
	
							var selectNode = function selectNode(name, components) {
								var io = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'inputs';
	
								var direction = io === 'inputs' ? 'inputs' : 'outputs';
	
								var _name$split = name.split('.', 2),
								    _name$split2 = _slicedToArray(_name$split, 2),
								    componentName = _name$split2[0],
								    _name$split2$ = _name$split2[1],
								    nodeName = _name$split2$ === undefined ? 'default' : _name$split2$;
	
								var component = components[componentName];
								if ((0, _utils.isUndefined)(component)) {
									throw new Error(componentName + ' component not found!');
								}
	
								var nodes = component[direction];
	
								if ((0, _utils.isUndefined)(nodes) || (0, _utils.isUndefined)(nodes[nodeName])) {
									throw new Error(name + ' port not found!');
								}
	
								return nodes[nodeName];
							};
	
							var componentFromObject = function componentFromObject(obj) {
								var components = obj.components,
								    _obj$connections = obj.connections,
								    connections = _obj$connections === undefined ? [] : _obj$connections,
								    _obj$inputs = obj.inputs,
								    inputs = _obj$inputs === undefined ? [] : _obj$inputs,
								    _obj$outputs = obj.outputs,
								    outputs = _obj$outputs === undefined ? [] : _obj$outputs,
								    _obj$debug = obj.debug,
								    debug = _obj$debug === undefined ? [] : _obj$debug,
								    _obj$name = obj.name,
								    name = _obj$name === undefined ? '' : _obj$name;
	
								var id = nextId();
								var inputNames = (0, _utils.unique)(inputs.concat('default'));
								var outputNames = (0, _utils.unique)(outputs.concat('default'));
	
								var toNodes = function toNodes(i) {
									return [i, node(function (v, next) {
										return next(v);
									})];
								};
								var inNodes = (0, _utils.arrayToObject)(inputNames, toNodes);
								var outNodes = (0, _utils.arrayToObject)(outputNames, toNodes);
	
								components.in = {
									inputs: inNodes,
									outputs: inNodes
								};
								components.out = {
									inputs: outNodes,
									outputs: outNodes
								};
	
								connections.forEach(function (_ref) {
									var _ref2 = _slicedToArray(_ref, 2),
									    from = _ref2[0],
									    to = _ref2[1];
	
									var outNode = selectNode(from, components, 'outputs');
									var inNode = selectNode(to, components, 'inputs');
									outNode.addListener(inNode);
								});
	
								debug.forEach(function (nodeName) {
									var debugNode = selectNode(nodeName, components, 'outputs');
									debugNode.on(function (v) {
										return console.log('DEBUG Component(' + name + ':' + id + ').' + nodeName + ': ', v);
									});
								});
	
								var on = function on() {
									for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
										args[_key] = arguments[_key];
									}
	
									var _args$splice$reverse = args.splice(0, 2).reverse(),
									    _args$splice$reverse2 = _slicedToArray(_args$splice$reverse, 2),
									    handler = _args$splice$reverse2[0],
									    _args$splice$reverse3 = _args$splice$reverse2[1],
									    nodeName = _args$splice$reverse3 === undefined ? 'default' : _args$splice$reverse3;
	
									if ((0, _utils.isUndefined)(outNodes[nodeName])) throw new Error('Component(' + name + ':' + id + ')/on: outNodes[' + nodeName + '] not found');
									return outNodes[nodeName].on(handler);
								};
	
								var off = function off() {
									for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
										args[_key2] = arguments[_key2];
									}
	
									var _args$splice$reverse4 = args.splice(0, 2).reverse(),
									    _args$splice$reverse5 = _slicedToArray(_args$splice$reverse4, 2),
									    id = _args$splice$reverse5[0],
									    _args$splice$reverse6 = _args$splice$reverse5[1],
									    nodeName = _args$splice$reverse6 === undefined ? 'default' : _args$splice$reverse6;
	
									if ((0, _utils.isUndefined)(outNodes[nodeName])) throw new Error('Component(' + name + ':' + id + ')/off: outNodes[' + nodeName + '] not found');
									return outNodes[nodeName].off(id);
								};
	
								var send = function send() {
									for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
										args[_key3] = arguments[_key3];
									}
	
									var _args$splice$reverse7 = args.splice(0, 2).reverse(),
									    _args$splice$reverse8 = _slicedToArray(_args$splice$reverse7, 2),
									    _args$splice$reverse9 = _args$splice$reverse8[0],
									    value = _args$splice$reverse9 === undefined ? {} : _args$splice$reverse9,
									    _args$splice$reverse10 = _args$splice$reverse8[1],
									    nodeName = _args$splice$reverse10 === undefined ? 'default' : _args$splice$reverse10;
	
									if ((0, _utils.isUndefined)(inNodes[nodeName])) throw new Error('Component(' + name + ':' + id + ')/send: inNodes[' + nodeName + '] not found');
									inNodes[nodeName].send(value);
								};
	
								return {
									send: send,
									on: on,
									off: off,
									inputs: inNodes,
									outputs: outNodes,
									id: id,
									name: name
								};
							};
	
							var Component = function Component(arg) {
								var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Function';
	
								if ((0, _utils.isFunction)(arg)) return componentFromFunction(arg, name);
								return componentFromObject(arg);
							};
	
							exports.default = Component;
	
							/***/
						},
						/* 2 */
						/***/function (module, exports) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _extends = Object.assign || function (target) {
								for (var i = 1; i < arguments.length; i++) {
									var source = arguments[i];for (var key in source) {
										if (Object.prototype.hasOwnProperty.call(source, key)) {
											target[key] = source[key];
										}
									}
								}return target;
							};
	
							var _slicedToArray = function () {
								function sliceIterator(arr, i) {
									var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
										for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
											_arr.push(_s.value);if (i && _arr.length === i) break;
										}
									} catch (err) {
										_d = true;_e = err;
									} finally {
										try {
											if (!_n && _i["return"]) _i["return"]();
										} finally {
											if (_d) throw _e;
										}
									}return _arr;
								}return function (arr, i) {
									if (Array.isArray(arr)) {
										return arr;
									} else if (Symbol.iterator in Object(arr)) {
										return sliceIterator(arr, i);
									} else {
										throw new TypeError("Invalid attempt to destructure non-iterable instance");
									}
								};
							}();
	
							var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
								return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
							} : function (obj) {
								return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
							};
	
							function _toConsumableArray(arr) {
								if (Array.isArray(arr)) {
									for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
										arr2[i] = arr[i];
									}return arr2;
								} else {
									return Array.from(arr);
								}
							}
	
							function _defineProperty(obj, key, value) {
								if (key in obj) {
									Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
								} else {
									obj[key] = value;
								}return obj;
							}
	
							var pipe = function pipe() {
								for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
									funcs[_key] = arguments[_key];
								}
	
								return funcs.reduce(function (f, g) {
									return function () {
										return g(f.apply(undefined, arguments));
									};
								});
							};
	
							var isFunction = function isFunction(arg) {
								return typeof arg === 'function';
							};
							var isObject = function isObject(arg) {
								return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object';
							};
							var isUndefined = function isUndefined(arg) {
								return arg === undefined;
							};
	
							var pairToObject = function pairToObject(_ref) {
								var _ref2 = _slicedToArray(_ref, 2),
								    key = _ref2[0],
								    value = _ref2[1];
	
								return _defineProperty({}, key, value);
							};
	
							var pairsToObject = function pairsToObject(arr) {
								return arr.reduce(function (obj, pair) {
									return _extends({}, obj, pairToObject(pair));
								}, {});
							};
	
							var arrayToObject = function arrayToObject(arr, func) {
								return pairsToObject(arr.map(func));
							};
	
							var applyAndEmpty = function applyAndEmpty(arr, func) {
								var values = arr.length;
								for (var i = 1; i <= values; i++) {
									func(arr.shift());
								}
							};
	
							var flatten = function flatten(v) {
								var _ref4;
	
								return (_ref4 = []).concat.apply(_ref4, _toConsumableArray(v));
							};
	
							var unique = function unique(arg) {
								return [].concat(_toConsumableArray(new Set(arg)));
							};
	
							var toArray = function toArray(arg) {
								return [].concat(arg);
							};
	
							exports.pipe = pipe;
							exports.isFunction = isFunction;
							exports.isObject = isObject;
							exports.isUndefined = isUndefined;
							exports.arrayToObject = arrayToObject;
							exports.pairToObject = pairToObject;
							exports.pairsToObject = pairsToObject;
							exports.applyAndEmpty = applyAndEmpty;
							exports.flatten = flatten;
							exports.unique = unique;
							exports.toArray = toArray;
	
							/***/
						},
						/* 3 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Mapper = function Mapper(f) {
								return (0, _Component2.default)(function (v, next) {
									return next(f(v));
								});
							};
	
							exports.default = Mapper;
	
							/***/
						},
						/* 4 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Filter = function Filter(cond) {
								return (0, _Component2.default)(function (v, next) {
									if (cond(v)) next(v);
								});
							};
	
							exports.default = Filter;
	
							/***/
						},
						/* 5 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Counter = function Counter() {
								var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
								var value = initial;
	
								return (0, _Component2.default)(function (v, next) {
									value++;
									next(value);
								});
							};
	
							exports.default = Counter;
	
							/***/
						},
						/* 6 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _slicedToArray = function () {
								function sliceIterator(arr, i) {
									var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
										for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
											_arr.push(_s.value);if (i && _arr.length === i) break;
										}
									} catch (err) {
										_d = true;_e = err;
									} finally {
										try {
											if (!_n && _i["return"]) _i["return"]();
										} finally {
											if (_d) throw _e;
										}
									}return _arr;
								}return function (arr, i) {
									if (Array.isArray(arr)) {
										return arr;
									} else if (Symbol.iterator in Object(arr)) {
										return sliceIterator(arr, i);
									} else {
										throw new TypeError("Invalid attempt to destructure non-iterable instance");
									}
								};
							}();
	
							var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
								return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
							} : function (obj) {
								return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
							};
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Accumulator = function Accumulator() {
								var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
								var obj = initial;
	
								return (0, _Component2.default)(function (v, next) {
									if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) !== 'object') return;
									Object.entries(v).forEach(function (_ref) {
										var _ref2 = _slicedToArray(_ref, 2),
										    k = _ref2[0],
										    v = _ref2[1];
	
										obj[k] = v;
									});
									next(obj);
								});
							};
	
							exports.default = Accumulator;
	
							/***/
						},
						/* 7 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							var _Mapper = __webpack_require__(3);
	
							var _Mapper2 = _interopRequireDefault(_Mapper);
	
							var _SortedDemuxer = __webpack_require__(8);
	
							var _SortedDemuxer2 = _interopRequireDefault(_SortedDemuxer);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Memorizer = function Memorizer() {
								var memory = void 0;
	
								return (0, _Component2.default)({
									inputs: ['memory', 'value'],
									components: {
										memory: (0, _Component2.default)(function (v) {
											memory = v;
										}),
										mapper: (0, _Mapper2.default)(function (value) {
											return { value: value, memory: memory };
										}),
										demuxer: (0, _SortedDemuxer2.default)('memory', 'value')
									},
									connections: [['in.memory', 'memory'], ['in.value', 'mapper'], ['mapper', 'out'], ['in', 'demuxer'], ['demuxer.memory', 'memory'], ['demuxer.value', 'mapper']]
								});
							};
	
							exports.default = Memorizer;
	
							/***/
						},
						/* 8 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Chain = __webpack_require__(9);
	
							var _Chain2 = _interopRequireDefault(_Chain);
	
							var _Mapper = __webpack_require__(3);
	
							var _Mapper2 = _interopRequireDefault(_Mapper);
	
							var _Serializer = __webpack_require__(10);
	
							var _Serializer2 = _interopRequireDefault(_Serializer);
	
							var _Demuxer = __webpack_require__(11);
	
							var _Demuxer2 = _interopRequireDefault(_Demuxer);
	
							var _utils = __webpack_require__(2);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var SortedDemuxer = function SortedDemuxer() {
								for (var _len = arguments.length, outputs = Array(_len), _key = 0; _key < _len; _key++) {
									outputs[_key] = arguments[_key];
								}
	
								return (0, _Chain2.default)((0, _Mapper2.default)(function (obj) {
									return outputs.map(function (k) {
										return [k, obj[k]];
									});
								}), (0, _Serializer2.default)(), (0, _Mapper2.default)(_utils.pairToObject), _Demuxer2.default.apply(undefined, outputs));
							};
	
							exports.default = SortedDemuxer;
	
							/***/
						},
						/* 9 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _extends = Object.assign || function (target) {
								for (var i = 1; i < arguments.length; i++) {
									var source = arguments[i];for (var key in source) {
										if (Object.prototype.hasOwnProperty.call(source, key)) {
											target[key] = source[key];
										}
									}
								}return target;
							};
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							function _toConsumableArray(arr) {
								if (Array.isArray(arr)) {
									for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
										arr2[i] = arr[i];
									}return arr2;
								} else {
									return Array.from(arr);
								}
							}
	
							function _defineProperty(obj, key, value) {
								if (key in obj) {
									Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
								} else {
									obj[key] = value;
								}return obj;
							}
	
							// Chain takes a list of Components and chains the inputs to the outputs.
							var Chain = function Chain() {
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
	
								return (0, _Component2.default)({ components: components, connections: connections, inputs: inputs, outputs: outputs });
							};
	
							exports.default = Chain;
	
							/***/
						},
						/* 10 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Serializer = function Serializer() {
								return (0, _Component2.default)(function (iterable, next) {
									if (iterable[Symbol.iterator]) {
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
									}
								});
							};
	
							exports.default = Serializer;
	
							/***/
						},
						/* 11 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							var _utils = __webpack_require__(2);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Demuxer = function Demuxer() {
								for (var _len = arguments.length, outputs = Array(_len), _key = 0; _key < _len; _key++) {
									outputs[_key] = arguments[_key];
								}
	
								return (0, _Component2.default)({
									components: outputs.reduce(function (acc, output) {
										acc[output] = (0, _Component2.default)(function (v, next) {
											if (v[output] !== undefined) next(v[output]);
										});
										return acc;
									}, {}),
									outputs: outputs,
									connections: (0, _utils.flatten)(outputs.map(function (out) {
										return [['in', out], [out, 'out.' + out]];
									})).concat([['in', 'out']])
								});
							};
	
							exports.default = Demuxer;
	
							/***/
						},
						/* 12 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							var _Mapper = __webpack_require__(3);
	
							var _Mapper2 = _interopRequireDefault(_Mapper);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							function _defineProperty(obj, key, value) {
								if (key in obj) {
									Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
								} else {
									obj[key] = value;
								}return obj;
							}
	
							var Hub = function Hub() {
								for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
									inputs[_key] = arguments[_key];
								}
	
								var components = {};
								var connections = [];
	
								inputs.forEach(function (i) {
									components[i] = (0, _Mapper2.default)(function (v) {
										return _defineProperty({}, i, v);
									});
									connections.push(['in.' + i, i], [i, 'out'], ['in', 'out']);
								});
	
								return (0, _Component2.default)({ components: components, connections: connections, inputs: inputs });
							};
	
							exports.default = Hub;
	
							/***/
						},
						/* 13 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Chain = __webpack_require__(9);
	
							var _Chain2 = _interopRequireDefault(_Chain);
	
							var _Hub = __webpack_require__(12);
	
							var _Hub2 = _interopRequireDefault(_Hub);
	
							var _Accumulator = __webpack_require__(6);
	
							var _Accumulator2 = _interopRequireDefault(_Accumulator);
	
							var _Filter = __webpack_require__(4);
	
							var _Filter2 = _interopRequireDefault(_Filter);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Muxer = function Muxer() {
								for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
									inputs[_key] = arguments[_key];
								}
	
								return (0, _Chain2.default)(_Hub2.default.apply(undefined, inputs), (0, _Accumulator2.default)(), (0, _Filter2.default)(function (v) {
									return inputs.every(function (i) {
										return v[i] !== undefined;
									});
								}));
							};
	
							exports.default = Muxer;
	
							/***/
						},
						/* 14 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Iterator = function Iterator(iterable) {
								var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
								    _ref$cyclic = _ref.cyclic,
								    cyclic = _ref$cyclic === undefined ? false : _ref$cyclic;
	
								var iterator = iterable[Symbol.iterator]();
	
								return (0, _Component2.default)(function (v, next) {
									var _iterator$next = iterator.next(),
									    value = _iterator$next.value,
									    done = _iterator$next.done;
	
									if (done && cyclic) {
										iterator = iterable[Symbol.iterator]();
										var _iterator$next2 = iterator.next();
	
										value = _iterator$next2.value;
										done = _iterator$next2.done;
									}
	
									if (!done) next(value);
								});
							};
	
							exports.default = Iterator;
	
							/***/
						},
						/* 15 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Chain = __webpack_require__(9);
	
							var _Chain2 = _interopRequireDefault(_Chain);
	
							var _Mapper = __webpack_require__(3);
	
							var _Mapper2 = _interopRequireDefault(_Mapper);
	
							var _Serializer = __webpack_require__(10);
	
							var _Serializer2 = _interopRequireDefault(_Serializer);
	
							var _utils = __webpack_require__(2);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var ArraySerializer = function ArraySerializer() {
								return (0, _Chain2.default)((0, _Mapper2.default)(_utils.toArray), (0, _Serializer2.default)());
							};
	
							exports.default = ArraySerializer;
	
							/***/
						},
						/* 16 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Repeater = function Repeater(times) {
								return (0, _Component2.default)(function (v, next) {
									for (var i = 1; i <= times; i++) {
										next(v);
									}
								});
							};
	
							exports.default = Repeater;
	
							/***/
						},
						/* 17 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var UniqueFilter = function UniqueFilter(initialValue) {
								var lastValue = initialValue;
	
								return (0, _Component2.default)(function (v, next) {
									if (v !== lastValue) {
										lastValue = v;
										next(v);
									}
								});
							};
	
							exports.default = UniqueFilter;
	
							/***/
						},
						/* 18 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Logger = function Logger() {
								var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
								    prefix = _ref.prefix,
								    _ref$log = _ref.log,
								    log = _ref$log === undefined ? console.log : _ref$log;
	
								return (0, _Component2.default)(function (v, next) {
									if (prefix === undefined) {
										log(v);
									} else {
										log(prefix, v);
									}
									next(v);
								});
							};
	
							exports.default = Logger;
	
							/***/
						},
						/* 19 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Chain = __webpack_require__(9);
	
							var _Chain2 = _interopRequireDefault(_Chain);
	
							var _Mapper = __webpack_require__(3);
	
							var _Mapper2 = _interopRequireDefault(_Mapper);
	
							var _Demuxer = __webpack_require__(11);
	
							var _Demuxer2 = _interopRequireDefault(_Demuxer);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Checker = function Checker(cond) {
								return (0, _Chain2.default)((0, _Mapper2.default)(function (v) {
									return cond(v) ? { true: v } : { false: v };
								}), (0, _Demuxer2.default)('true', 'false'));
							};
	
							exports.default = Checker;
	
							/***/
						},
						/* 20 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _slicedToArray = function () {
								function sliceIterator(arr, i) {
									var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
										for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
											_arr.push(_s.value);if (i && _arr.length === i) break;
										}
									} catch (err) {
										_d = true;_e = err;
									} finally {
										try {
											if (!_n && _i["return"]) _i["return"]();
										} finally {
											if (_d) throw _e;
										}
									}return _arr;
								}return function (arr, i) {
									if (Array.isArray(arr)) {
										return arr;
									} else if (Symbol.iterator in Object(arr)) {
										return sliceIterator(arr, i);
									} else {
										throw new TypeError("Invalid attempt to destructure non-iterable instance");
									}
								};
							}();
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							var _Chain = __webpack_require__(9);
	
							var _Chain2 = _interopRequireDefault(_Chain);
	
							var _Demuxer = __webpack_require__(11);
	
							var _Demuxer2 = _interopRequireDefault(_Demuxer);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							function _toConsumableArray(arr) {
								if (Array.isArray(arr)) {
									for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
										arr2[i] = arr[i];
									}return arr2;
								} else {
									return Array.from(arr);
								}
							}
	
							function _defineProperty(obj, key, value) {
								if (key in obj) {
									Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
								} else {
									obj[key] = value;
								}return obj;
							}
	
							var Guard = function Guard(conds) {
								return (0, _Chain2.default)((0, _Component2.default)(function (v, next) {
									Object.entries(conds).forEach(function (_ref) {
										var _ref2 = _slicedToArray(_ref, 2),
										    name = _ref2[0],
										    cond = _ref2[1];
	
										var others = [];
										var match = false;
	
										if (cond === 'otherwise') {
											others.push(name);
										} else if (typeof cond === 'function' && cond(v)) {
											next(_defineProperty({}, name, v));
											match = true;
										}
	
										if (!match) others.forEach(function (name) {
											return next(_defineProperty({}, name, v));
										});
									});
								}), _Demuxer2.default.apply(undefined, _toConsumableArray(Object.keys(conds))));
							};
	
							exports.default = Guard;
	
							/***/
						},
						/* 21 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Mapper = __webpack_require__(3);
	
							var _Mapper2 = _interopRequireDefault(_Mapper);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Identity = function Identity() {
								return (0, _Mapper2.default)(function (v) {
									return v;
								});
							};
	
							exports.default = Identity;
	
							/***/
						},
						/* 22 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Delayer = function Delayer(ms) {
								return (0, _Component2.default)(function (v, next) {
									setTimeout(function () {
										return next(v);
									}, ms);
								});
							};
	
							exports.default = Delayer;
	
							/***/
						},
						/* 23 */
						/***/function (module, exports, __webpack_require__) {
	
							'use strict';
	
							Object.defineProperty(exports, "__esModule", {
								value: true
							});
	
							var _Component = __webpack_require__(1);
	
							var _Component2 = _interopRequireDefault(_Component);
	
							function _interopRequireDefault(obj) {
								return obj && obj.__esModule ? obj : { default: obj };
							}
	
							var Ticker = function Ticker(ms) {
								var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
								    _ref$value = _ref.value,
								    value = _ref$value === undefined ? {} : _ref$value,
								    _ref$initialDelay = _ref.initialDelay,
								    initialDelay = _ref$initialDelay === undefined ? false : _ref$initialDelay;
	
								return (0, _Component2.default)(function (v, next) {
									if (!initialDelay) next(value);
									setInterval(function () {
										return next(value);
									}, ms);
								});
							};
	
							exports.default = Ticker;
	
							/***/
						}
						/******/])
					);
				});
				;
				//# sourceMappingURL=graflow.js.map
	
				/***/
			},
			/* 4 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				var _slicedToArray = function () {
					function sliceIterator(arr, i) {
						var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
							for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
								_arr.push(_s.value);if (i && _arr.length === i) break;
							}
						} catch (err) {
							_d = true;_e = err;
						} finally {
							try {
								if (!_n && _i["return"]) _i["return"]();
							} finally {
								if (_d) throw _e;
							}
						}return _arr;
					}return function (arr, i) {
						if (Array.isArray(arr)) {
							return arr;
						} else if (Symbol.iterator in Object(arr)) {
							return sliceIterator(arr, i);
						} else {
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						}
					};
				}();
	
				function _toConsumableArray(arr) {
					if (Array.isArray(arr)) {
						for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
							arr2[i] = arr[i];
						}return arr2;
					} else {
						return Array.from(arr);
					}
				}
	
				var flatten = function flatten(v) {
					var _ref;
	
					return (_ref = []).concat.apply(_ref, _toConsumableArray(v));
				};
	
				var mapObject = function mapObject(obj, map) {
					return Object.entries(obj).reduce(function (acc, _ref2) {
						var _ref3 = _slicedToArray(_ref2, 2),
						    key = _ref3[0],
						    value = _ref3[1];
	
						var v = map(key, value);
						if (isDefined(v)) {
							var _v = _slicedToArray(v, 2),
							    newKey = _v[0],
							    newValue = _v[1];
	
							acc[newKey] = newValue;
						}
						return acc;
					}, {});
				};
	
				var toArray = function toArray(arg) {
					return [].concat(arg);
				};
	
				var isArray = Array.isArray;
	
				var isFunction = function isFunction(arg) {
					return typeof arg === 'function';
				};
	
				var isString = function isString(arg) {
					return typeof arg === 'string';
				};
	
				var isObject = function isObject(arg) {
					return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object';
				};
	
				var isUndefined = function isUndefined(arg) {
					return arg === undefined;
				};
	
				var isDefined = function isDefined(arg) {
					return arg !== undefined;
				};
	
				var unique = function unique(arg) {
					return [].concat(_toConsumableArray(new Set(arg)));
				};
	
				exports.flatten = flatten;
				exports.mapObject = mapObject;
				exports.unique = unique;
				exports.toArray = toArray;
				exports.isArray = isArray;
				exports.isFunction = isFunction;
				exports.isString = isString;
				exports.isObject = isObject;
				exports.isUndefined = isUndefined;
				exports.isDefined = isDefined;
	
				/***/
			},
			/* 5 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.getHandler = exports.toMessage = exports.isMessageForBlock = exports.isMessage = exports.Message = exports.default = undefined;
	
				var _slicedToArray = function () {
					function sliceIterator(arr, i) {
						var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
							for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
								_arr.push(_s.value);if (i && _arr.length === i) break;
							}
						} catch (err) {
							_d = true;_e = err;
						} finally {
							try {
								if (!_n && _i["return"]) _i["return"]();
							} finally {
								if (_d) throw _e;
							}
						}return _arr;
					}return function (arr, i) {
						if (Array.isArray(arr)) {
							return arr;
						} else if (Symbol.iterator in Object(arr)) {
							return sliceIterator(arr, i);
						} else {
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						}
					};
				}();
	
				var _utils = __webpack_require__(4);
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				var messageSymbol = Symbol('Message');
	
				var nameToblockSignal = function nameToblockSignal(name) {
					var _name$split = name.split('.', 2),
					    _name$split2 = _slicedToArray(_name$split, 2),
					    block = _name$split2[0],
					    _name$split2$ = _name$split2[1],
					    signal = _name$split2$ === undefined ? 'default' : _name$split2$;
	
					return [block, signal];
				};
	
				var Message = function Message() {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}
	
					if ((0, _utils.isObject)(args[0])) return createMessage(args[0]);
	
					var block = void 0,
					    signal = void 0,
					    value = {};
	
					if (args.length === 1) {
						var _nameToblockSignal = nameToblockSignal(args[0]);
	
						var _nameToblockSignal2 = _slicedToArray(_nameToblockSignal, 2);
	
						block = _nameToblockSignal2[0];
						signal = _nameToblockSignal2[1];
					} else if (args.length === 2) {
						var _nameToblockSignal3 = nameToblockSignal(args[0]);
	
						var _nameToblockSignal4 = _slicedToArray(_nameToblockSignal3, 2);
	
						block = _nameToblockSignal4[0];
						signal = _nameToblockSignal4[1];
	
						value = args[1];
					} else if (args.length === 3) {
						block = args[0];
						signal = args[1];
						value = args[2];
					}
	
					return createMessage({ blocks: block, values: _defineProperty({}, signal, value) });
				};
	
				var createMessage = function createMessage(_ref) {
					var blocks = _ref.blocks,
					    _ref$values = _ref.values,
					    values = _ref$values === undefined ? { default: {} } : _ref$values;
					return _defineProperty({
						blocks: (0, _utils.isDefined)(blocks) ? (0, _utils.toArray)(blocks) : undefined,
						values: (0, _utils.isObject)(values) ? values : { default: values }
					}, messageSymbol, true);
				};
	
				var isMessage = function isMessage(arg) {
					return arg[messageSymbol];
				};
				var isMessageForBlock = function isMessageForBlock(blockName) {
					return function (m) {
						return isMessage(m) && m.blocks.includes(blockName);
					};
				};
	
				var toMessage = function toMessage(arg, converter) {
					if (isMessage(arg)) return arg;
					if ((0, _utils.isArray)(arg)) return arg.map(toMessage);
					return [].concat(converter(arg));
				};
	
				var getHandler = function getHandler(handlers, block, signal) {
					// const {blocks, values} = message
					// const block = blocks[0]
					// const signal = Object.entries(values)[0][0]
					var name = block + '.' + signal;
					if (handlers[name]) return handlers[name];
					if (signal === 'default' && handlers[block]) return handlers[block];
				};
	
				exports.default = Message;
				exports.Message = Message;
				exports.isMessage = isMessage;
				exports.isMessageForBlock = isMessageForBlock;
				exports.toMessage = toMessage;
				exports.getHandler = getHandler;
	
				/***/
			},
			/* 6 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				var vnode_1 = __webpack_require__(7);
				var is = __webpack_require__(8);
				var htmldomapi_1 = __webpack_require__(9);
				function isUndef(s) {
					return s === undefined;
				}
				function isDef(s) {
					return s !== undefined;
				}
				var emptyNode = vnode_1.default('', {}, [], undefined, undefined);
				function sameVnode(vnode1, vnode2) {
					return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
				}
				function isVnode(vnode) {
					return vnode.sel !== undefined;
				}
				function createKeyToOldIdx(children, beginIdx, endIdx) {
					var i,
					    map = {},
					    key,
					    ch;
					for (i = beginIdx; i <= endIdx; ++i) {
						ch = children[i];
						if (ch != null) {
							key = ch.key;
							if (key !== undefined) map[key] = i;
						}
					}
					return map;
				}
				var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
				var h_1 = __webpack_require__(10);
				exports.h = h_1.h;
				var thunk_1 = __webpack_require__(11);
				exports.thunk = thunk_1.thunk;
				function init(modules, domApi) {
					var i,
					    j,
					    cbs = {};
					var api = domApi !== undefined ? domApi : htmldomapi_1.default;
					for (i = 0; i < hooks.length; ++i) {
						cbs[hooks[i]] = [];
						for (j = 0; j < modules.length; ++j) {
							var hook = modules[j][hooks[i]];
							if (hook !== undefined) {
								cbs[hooks[i]].push(hook);
							}
						}
					}
					function emptyNodeAt(elm) {
						var id = elm.id ? '#' + elm.id : '';
						var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
						return vnode_1.default(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
					}
					function createRmCb(childElm, listeners) {
						return function rmCb() {
							if (--listeners === 0) {
								var parent_1 = api.parentNode(childElm);
								api.removeChild(parent_1, childElm);
							}
						};
					}
					function createElm(vnode, insertedVnodeQueue) {
						var i,
						    data = vnode.data;
						if (data !== undefined) {
							if (isDef(i = data.hook) && isDef(i = i.init)) {
								i(vnode);
								data = vnode.data;
							}
						}
						var children = vnode.children,
						    sel = vnode.sel;
						if (sel === '!') {
							if (isUndef(vnode.text)) {
								vnode.text = '';
							}
							vnode.elm = api.createComment(vnode.text);
						} else if (sel !== undefined) {
							// Parse selector
							var hashIdx = sel.indexOf('#');
							var dotIdx = sel.indexOf('.', hashIdx);
							var hash = hashIdx > 0 ? hashIdx : sel.length;
							var dot = dotIdx > 0 ? dotIdx : sel.length;
							var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
							var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag) : api.createElement(tag);
							if (hash < dot) elm.id = sel.slice(hash + 1, dot);
							if (dotIdx > 0) elm.className = sel.slice(dot + 1).replace(/\./g, ' ');
							if (is.array(children)) {
								for (i = 0; i < children.length; ++i) {
									var ch = children[i];
									if (ch != null) {
										api.appendChild(elm, createElm(ch, insertedVnodeQueue));
									}
								}
							} else if (is.primitive(vnode.text)) {
								api.appendChild(elm, api.createTextNode(vnode.text));
							}
							for (i = 0; i < cbs.create.length; ++i) {
								cbs.create[i](emptyNode, vnode);
							}i = vnode.data.hook; // Reuse variable
							if (isDef(i)) {
								if (i.create) i.create(emptyNode, vnode);
								if (i.insert) insertedVnodeQueue.push(vnode);
							}
						} else {
							vnode.elm = api.createTextNode(vnode.text);
						}
						return vnode.elm;
					}
					function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
						for (; startIdx <= endIdx; ++startIdx) {
							var ch = vnodes[startIdx];
							if (ch != null) {
								api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
							}
						}
					}
					function invokeDestroyHook(vnode) {
						var i,
						    j,
						    data = vnode.data;
						if (data !== undefined) {
							if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode);
							for (i = 0; i < cbs.destroy.length; ++i) {
								cbs.destroy[i](vnode);
							}if (vnode.children !== undefined) {
								for (j = 0; j < vnode.children.length; ++j) {
									i = vnode.children[j];
									if (i != null && typeof i !== "string") {
										invokeDestroyHook(i);
									}
								}
							}
						}
					}
					function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
						for (; startIdx <= endIdx; ++startIdx) {
							var i_1 = void 0,
							    listeners = void 0,
							    rm = void 0,
							    ch = vnodes[startIdx];
							if (ch != null) {
								if (isDef(ch.sel)) {
									invokeDestroyHook(ch);
									listeners = cbs.remove.length + 1;
									rm = createRmCb(ch.elm, listeners);
									for (i_1 = 0; i_1 < cbs.remove.length; ++i_1) {
										cbs.remove[i_1](ch, rm);
									}if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
										i_1(ch, rm);
									} else {
										rm();
									}
								} else {
									api.removeChild(parentElm, ch.elm);
								}
							}
						}
					}
					function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
						var oldStartIdx = 0,
						    newStartIdx = 0;
						var oldEndIdx = oldCh.length - 1;
						var oldStartVnode = oldCh[0];
						var oldEndVnode = oldCh[oldEndIdx];
						var newEndIdx = newCh.length - 1;
						var newStartVnode = newCh[0];
						var newEndVnode = newCh[newEndIdx];
						var oldKeyToIdx;
						var idxInOld;
						var elmToMove;
						var before;
						while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
							if (oldStartVnode == null) {
								oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
							} else if (oldEndVnode == null) {
								oldEndVnode = oldCh[--oldEndIdx];
							} else if (newStartVnode == null) {
								newStartVnode = newCh[++newStartIdx];
							} else if (newEndVnode == null) {
								newEndVnode = newCh[--newEndIdx];
							} else if (sameVnode(oldStartVnode, newStartVnode)) {
								patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
								oldStartVnode = oldCh[++oldStartIdx];
								newStartVnode = newCh[++newStartIdx];
							} else if (sameVnode(oldEndVnode, newEndVnode)) {
								patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
								oldEndVnode = oldCh[--oldEndIdx];
								newEndVnode = newCh[--newEndIdx];
							} else if (sameVnode(oldStartVnode, newEndVnode)) {
								patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
								api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
								oldStartVnode = oldCh[++oldStartIdx];
								newEndVnode = newCh[--newEndIdx];
							} else if (sameVnode(oldEndVnode, newStartVnode)) {
								patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
								api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
								oldEndVnode = oldCh[--oldEndIdx];
								newStartVnode = newCh[++newStartIdx];
							} else {
								if (oldKeyToIdx === undefined) {
									oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
								}
								idxInOld = oldKeyToIdx[newStartVnode.key];
								if (isUndef(idxInOld)) {
									api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
									newStartVnode = newCh[++newStartIdx];
								} else {
									elmToMove = oldCh[idxInOld];
									if (elmToMove.sel !== newStartVnode.sel) {
										api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
									} else {
										patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
										oldCh[idxInOld] = undefined;
										api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
									}
									newStartVnode = newCh[++newStartIdx];
								}
							}
						}
						if (oldStartIdx > oldEndIdx) {
							before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
							addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
						} else if (newStartIdx > newEndIdx) {
							removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
						}
					}
					function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
						var i, hook;
						if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
							i(oldVnode, vnode);
						}
						var elm = vnode.elm = oldVnode.elm;
						var oldCh = oldVnode.children;
						var ch = vnode.children;
						if (oldVnode === vnode) return;
						if (vnode.data !== undefined) {
							for (i = 0; i < cbs.update.length; ++i) {
								cbs.update[i](oldVnode, vnode);
							}i = vnode.data.hook;
							if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode);
						}
						if (isUndef(vnode.text)) {
							if (isDef(oldCh) && isDef(ch)) {
								if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
							} else if (isDef(ch)) {
								if (isDef(oldVnode.text)) api.setTextContent(elm, '');
								addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
							} else if (isDef(oldCh)) {
								removeVnodes(elm, oldCh, 0, oldCh.length - 1);
							} else if (isDef(oldVnode.text)) {
								api.setTextContent(elm, '');
							}
						} else if (oldVnode.text !== vnode.text) {
							api.setTextContent(elm, vnode.text);
						}
						if (isDef(hook) && isDef(i = hook.postpatch)) {
							i(oldVnode, vnode);
						}
					}
					return function patch(oldVnode, vnode) {
						var i, elm, parent;
						var insertedVnodeQueue = [];
						for (i = 0; i < cbs.pre.length; ++i) {
							cbs.pre[i]();
						}if (!isVnode(oldVnode)) {
							oldVnode = emptyNodeAt(oldVnode);
						}
						if (sameVnode(oldVnode, vnode)) {
							patchVnode(oldVnode, vnode, insertedVnodeQueue);
						} else {
							elm = oldVnode.elm;
							parent = api.parentNode(elm);
							createElm(vnode, insertedVnodeQueue);
							if (parent !== null) {
								api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
								removeVnodes(parent, [oldVnode], 0, 0);
							}
						}
						for (i = 0; i < insertedVnodeQueue.length; ++i) {
							insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
						}
						for (i = 0; i < cbs.post.length; ++i) {
							cbs.post[i]();
						}return vnode;
					};
				}
				exports.init = init;
				//# sourceMappingURL=snabbdom.js.map
	
				/***/
			},
			/* 7 */
			/***/function (module, exports) {
	
				"use strict";
	
				function vnode(sel, data, children, text, elm) {
					var key = data === undefined ? undefined : data.key;
					return { sel: sel, data: data, children: children,
						text: text, elm: elm, key: key };
				}
				exports.vnode = vnode;
				Object.defineProperty(exports, "__esModule", { value: true });
				exports.default = vnode;
				//# sourceMappingURL=vnode.js.map
	
				/***/
			},
			/* 8 */
			/***/function (module, exports) {
	
				"use strict";
	
				exports.array = Array.isArray;
				function primitive(s) {
					return typeof s === 'string' || typeof s === 'number';
				}
				exports.primitive = primitive;
				//# sourceMappingURL=is.js.map
	
				/***/
			},
			/* 9 */
			/***/function (module, exports) {
	
				"use strict";
	
				function createElement(tagName) {
					return document.createElement(tagName);
				}
				function createElementNS(namespaceURI, qualifiedName) {
					return document.createElementNS(namespaceURI, qualifiedName);
				}
				function createTextNode(text) {
					return document.createTextNode(text);
				}
				function createComment(text) {
					return document.createComment(text);
				}
				function insertBefore(parentNode, newNode, referenceNode) {
					parentNode.insertBefore(newNode, referenceNode);
				}
				function removeChild(node, child) {
					node.removeChild(child);
				}
				function appendChild(node, child) {
					node.appendChild(child);
				}
				function parentNode(node) {
					return node.parentNode;
				}
				function nextSibling(node) {
					return node.nextSibling;
				}
				function tagName(elm) {
					return elm.tagName;
				}
				function setTextContent(node, text) {
					node.textContent = text;
				}
				function getTextContent(node) {
					return node.textContent;
				}
				function isElement(node) {
					return node.nodeType === 1;
				}
				function isText(node) {
					return node.nodeType === 3;
				}
				function isComment(node) {
					return node.nodeType === 8;
				}
				exports.htmlDomApi = {
					createElement: createElement,
					createElementNS: createElementNS,
					createTextNode: createTextNode,
					createComment: createComment,
					insertBefore: insertBefore,
					removeChild: removeChild,
					appendChild: appendChild,
					parentNode: parentNode,
					nextSibling: nextSibling,
					tagName: tagName,
					setTextContent: setTextContent,
					getTextContent: getTextContent,
					isElement: isElement,
					isText: isText,
					isComment: isComment
				};
				Object.defineProperty(exports, "__esModule", { value: true });
				exports.default = exports.htmlDomApi;
				//# sourceMappingURL=htmldomapi.js.map
	
				/***/
			},
			/* 10 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				var vnode_1 = __webpack_require__(7);
				var is = __webpack_require__(8);
				function addNS(data, children, sel) {
					data.ns = 'http://www.w3.org/2000/svg';
					if (sel !== 'foreignObject' && children !== undefined) {
						for (var i = 0; i < children.length; ++i) {
							var childData = children[i].data;
							if (childData !== undefined) {
								addNS(childData, children[i].children, children[i].sel);
							}
						}
					}
				}
				function h(sel, b, c) {
					var data = {},
					    children,
					    text,
					    i;
					if (c !== undefined) {
						data = b;
						if (is.array(c)) {
							children = c;
						} else if (is.primitive(c)) {
							text = c;
						} else if (c && c.sel) {
							children = [c];
						}
					} else if (b !== undefined) {
						if (is.array(b)) {
							children = b;
						} else if (is.primitive(b)) {
							text = b;
						} else if (b && b.sel) {
							children = [b];
						} else {
							data = b;
						}
					}
					if (is.array(children)) {
						for (i = 0; i < children.length; ++i) {
							if (is.primitive(children[i])) children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i]);
						}
					}
					if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' && (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
						addNS(data, children, sel);
					}
					return vnode_1.vnode(sel, data, children, text, undefined);
				}
				exports.h = h;
				;
				Object.defineProperty(exports, "__esModule", { value: true });
				exports.default = h;
				//# sourceMappingURL=h.js.map
	
				/***/
			},
			/* 11 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				var h_1 = __webpack_require__(10);
				function copyToThunk(vnode, thunk) {
					thunk.elm = vnode.elm;
					vnode.data.fn = thunk.data.fn;
					vnode.data.args = thunk.data.args;
					thunk.data = vnode.data;
					thunk.children = vnode.children;
					thunk.text = vnode.text;
					thunk.elm = vnode.elm;
				}
				function init(thunk) {
					var cur = thunk.data;
					var vnode = cur.fn.apply(undefined, cur.args);
					copyToThunk(vnode, thunk);
				}
				function prepatch(oldVnode, thunk) {
					var i,
					    old = oldVnode.data,
					    cur = thunk.data;
					var oldArgs = old.args,
					    args = cur.args;
					if (old.fn !== cur.fn || oldArgs.length !== args.length) {
						copyToThunk(cur.fn.apply(undefined, args), thunk);
					}
					for (i = 0; i < args.length; ++i) {
						if (oldArgs[i] !== args[i]) {
							copyToThunk(cur.fn.apply(undefined, args), thunk);
							return;
						}
					}
					copyToThunk(oldVnode, thunk);
				}
				exports.thunk = function thunk(sel, key, fn, args) {
					if (args === undefined) {
						args = fn;
						fn = key;
						key = undefined;
					}
					return h_1.h(sel, {
						key: key,
						hook: { init: init, prepatch: prepatch },
						fn: fn,
						args: args
					});
				};
				Object.defineProperty(exports, "__esModule", { value: true });
				exports.default = exports.thunk;
				//# sourceMappingURL=thunk.js.map
	
				/***/
			},
			/* 12 */
			/***/function (module, exports) {
	
				"use strict";
	
				function invokeHandler(handler, vnode, event) {
					if (typeof handler === "function") {
						// call function handler
						handler.call(vnode, event, vnode);
					} else if ((typeof handler === 'undefined' ? 'undefined' : _typeof2(handler)) === "object") {
						// call handler with arguments
						if (typeof handler[0] === "function") {
							// special case for single argument for performance
							if (handler.length === 2) {
								handler[0].call(vnode, handler[1], event, vnode);
							} else {
								var args = handler.slice(1);
								args.push(event);
								args.push(vnode);
								handler[0].apply(vnode, args);
							}
						} else {
							// call multiple handlers
							for (var i = 0; i < handler.length; i++) {
								invokeHandler(handler[i]);
							}
						}
					}
				}
				function handleEvent(event, vnode) {
					var name = event.type,
					    on = vnode.data.on;
					// call event handler(s) if exists
					if (on && on[name]) {
						invokeHandler(on[name], vnode, event);
					}
				}
				function createListener() {
					return function handler(event) {
						handleEvent(event, handler.vnode);
					};
				}
				function updateEventListeners(oldVnode, vnode) {
					var oldOn = oldVnode.data.on,
					    oldListener = oldVnode.listener,
					    oldElm = oldVnode.elm,
					    on = vnode && vnode.data.on,
					    elm = vnode && vnode.elm,
					    name;
					// optimization for reused immutable handlers
					if (oldOn === on) {
						return;
					}
					// remove existing listeners which no longer used
					if (oldOn && oldListener) {
						// if element changed or deleted we remove all existing listeners unconditionally
						if (!on) {
							for (name in oldOn) {
								// remove listener if element was changed or existing listeners removed
								oldElm.removeEventListener(name, oldListener, false);
							}
						} else {
							for (name in oldOn) {
								// remove listener if existing listener removed
								if (!on[name]) {
									oldElm.removeEventListener(name, oldListener, false);
								}
							}
						}
					}
					// add new listeners which has not already attached
					if (on) {
						// reuse existing listener or create new
						var listener = vnode.listener = oldVnode.listener || createListener();
						// update vnode for listener
						listener.vnode = vnode;
						// if element changed or added we add all needed listeners unconditionally
						if (!oldOn) {
							for (name in on) {
								// add listener if element was changed or new listeners added
								elm.addEventListener(name, listener, false);
							}
						} else {
							for (name in on) {
								// add listener if new listener added
								if (!oldOn[name]) {
									elm.addEventListener(name, listener, false);
								}
							}
						}
					}
				}
				exports.eventListenersModule = {
					create: updateEventListeners,
					update: updateEventListeners,
					destroy: updateEventListeners
				};
				Object.defineProperty(exports, "__esModule", { value: true });
				exports.default = exports.eventListenersModule;
				//# sourceMappingURL=eventlisteners.js.map
	
				/***/
			},
			/* 13 */
			/***/function (module, exports) {
	
				"use strict";
	
				function updateProps(oldVnode, vnode) {
					var key,
					    cur,
					    old,
					    elm = vnode.elm,
					    oldProps = oldVnode.data.props,
					    props = vnode.data.props;
					if (!oldProps && !props) return;
					if (oldProps === props) return;
					oldProps = oldProps || {};
					props = props || {};
					for (key in oldProps) {
						if (!props[key]) {
							delete elm[key];
						}
					}
					for (key in props) {
						cur = props[key];
						old = oldProps[key];
						if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
							elm[key] = cur;
						}
					}
				}
				exports.propsModule = { create: updateProps, update: updateProps };
				Object.defineProperty(exports, "__esModule", { value: true });
				exports.default = exports.propsModule;
				//# sourceMappingURL=props.js.map
	
				/***/
			},
			/* 14 */
			/***/function (module, exports) {
	
				"use strict";
	
				var NamespaceURIs = {
					"xlink": "http://www.w3.org/1999/xlink"
				};
				var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare", "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable", "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple", "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly", "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate", "truespeed", "typemustmatch", "visible"];
				var booleanAttrsDict = Object.create(null);
				for (var i = 0, len = booleanAttrs.length; i < len; i++) {
					booleanAttrsDict[booleanAttrs[i]] = true;
				}
				function updateAttrs(oldVnode, vnode) {
					var key,
					    cur,
					    old,
					    elm = vnode.elm,
					    oldAttrs = oldVnode.data.attrs,
					    attrs = vnode.data.attrs,
					    namespaceSplit;
					if (!oldAttrs && !attrs) return;
					if (oldAttrs === attrs) return;
					oldAttrs = oldAttrs || {};
					attrs = attrs || {};
					// update modified attributes, add new attributes
					for (key in attrs) {
						cur = attrs[key];
						old = oldAttrs[key];
						if (old !== cur) {
							if (!cur && booleanAttrsDict[key]) elm.removeAttribute(key);else {
								namespaceSplit = key.split(":");
								if (namespaceSplit.length > 1 && NamespaceURIs.hasOwnProperty(namespaceSplit[0])) elm.setAttributeNS(NamespaceURIs[namespaceSplit[0]], key, cur);else elm.setAttribute(key, cur);
							}
						}
					}
					//remove removed attributes
					// use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
					// the other option is to remove all attributes with value == undefined
					for (key in oldAttrs) {
						if (!(key in attrs)) {
							elm.removeAttribute(key);
						}
					}
				}
				exports.attributesModule = { create: updateAttrs, update: updateAttrs };
				Object.defineProperty(exports, "__esModule", { value: true });
				exports.default = exports.attributesModule;
				//# sourceMappingURL=attributes.js.map
	
				/***/
			},
			/* 15 */
			/***/function (module, exports) {
	
				"use strict";
	
				function updateClass(oldVnode, vnode) {
					var cur,
					    name,
					    elm = vnode.elm,
					    oldClass = oldVnode.data.class,
					    klass = vnode.data.class;
					if (!oldClass && !klass) return;
					if (oldClass === klass) return;
					oldClass = oldClass || {};
					klass = klass || {};
					for (name in oldClass) {
						if (!klass[name]) {
							elm.classList.remove(name);
						}
					}
					for (name in klass) {
						cur = klass[name];
						if (cur !== oldClass[name]) {
							elm.classList[cur ? 'add' : 'remove'](name);
						}
					}
				}
				exports.classModule = { create: updateClass, update: updateClass };
				Object.defineProperty(exports, "__esModule", { value: true });
				exports.default = exports.classModule;
				//# sourceMappingURL=class.js.map
	
				/***/
			},
			/* 16 */
			/***/function (module, exports) {
	
				"use strict";
	
				var raf = typeof window !== 'undefined' && window.requestAnimationFrame || setTimeout;
				var nextFrame = function nextFrame(fn) {
					raf(function () {
						raf(fn);
					});
				};
				function setNextFrame(obj, prop, val) {
					nextFrame(function () {
						obj[prop] = val;
					});
				}
				function updateStyle(oldVnode, vnode) {
					var cur,
					    name,
					    elm = vnode.elm,
					    oldStyle = oldVnode.data.style,
					    style = vnode.data.style;
					if (!oldStyle && !style) return;
					if (oldStyle === style) return;
					oldStyle = oldStyle || {};
					style = style || {};
					var oldHasDel = 'delayed' in oldStyle;
					for (name in oldStyle) {
						if (!style[name]) {
							if (name[0] === '-' && name[1] === '-') {
								elm.style.removeProperty(name);
							} else {
								elm.style[name] = '';
							}
						}
					}
					for (name in style) {
						cur = style[name];
						if (name === 'delayed') {
							for (name in style.delayed) {
								cur = style.delayed[name];
								if (!oldHasDel || cur !== oldStyle.delayed[name]) {
									setNextFrame(elm.style, name, cur);
								}
							}
						} else if (name !== 'remove' && cur !== oldStyle[name]) {
							if (name[0] === '-' && name[1] === '-') {
								elm.style.setProperty(name, cur);
							} else {
								elm.style[name] = cur;
							}
						}
					}
				}
				function applyDestroyStyle(vnode) {
					var style,
					    name,
					    elm = vnode.elm,
					    s = vnode.data.style;
					if (!s || !(style = s.destroy)) return;
					for (name in style) {
						elm.style[name] = style[name];
					}
				}
				function applyRemoveStyle(vnode, rm) {
					var s = vnode.data.style;
					if (!s || !s.remove) {
						rm();
						return;
					}
					var name,
					    elm = vnode.elm,
					    i = 0,
					    compStyle,
					    style = s.remove,
					    amount = 0,
					    applied = [];
					for (name in style) {
						applied.push(name);
						elm.style[name] = style[name];
					}
					compStyle = getComputedStyle(elm);
					var props = compStyle['transition-property'].split(', ');
					for (; i < props.length; ++i) {
						if (applied.indexOf(props[i]) !== -1) amount++;
					}
					elm.addEventListener('transitionend', function (ev) {
						if (ev.target === elm) --amount;
						if (amount === 0) rm();
					});
				}
				exports.styleModule = {
					create: updateStyle,
					update: updateStyle,
					destroy: applyDestroyStyle,
					remove: applyRemoveStyle
				};
				Object.defineProperty(exports, "__esModule", { value: true });
				exports.default = exports.styleModule;
				//# sourceMappingURL=style.js.map
	
				/***/
			},
			/* 17 */
			/***/function (module, exports, __webpack_require__) {
	
				/* WEBPACK VAR INJECTION */(function (global, process) {
					// Copyright Joyent, Inc. and other Node contributors.
					//
					// Permission is hereby granted, free of charge, to any person obtaining a
					// copy of this software and associated documentation files (the
					// "Software"), to deal in the Software without restriction, including
					// without limitation the rights to use, copy, modify, merge, publish,
					// distribute, sublicense, and/or sell copies of the Software, and to permit
					// persons to whom the Software is furnished to do so, subject to the
					// following conditions:
					//
					// The above copyright notice and this permission notice shall be included
					// in all copies or substantial portions of the Software.
					//
					// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
					// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
					// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
					// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
					// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
					// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
					// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
					var formatRegExp = /%[sdj%]/g;
					exports.format = function (f) {
						if (!isString(f)) {
							var objects = [];
							for (var i = 0; i < arguments.length; i++) {
								objects.push(inspect(arguments[i]));
							}
							return objects.join(' ');
						}
	
						var i = 1;
						var args = arguments;
						var len = args.length;
						var str = String(f).replace(formatRegExp, function (x) {
							if (x === '%%') return '%';
							if (i >= len) return x;
							switch (x) {
								case '%s':
									return String(args[i++]);
								case '%d':
									return Number(args[i++]);
								case '%j':
									try {
										return JSON.stringify(args[i++]);
									} catch (_) {
										return '[Circular]';
									}
								default:
									return x;
							}
						});
						for (var x = args[i]; i < len; x = args[++i]) {
							if (isNull(x) || !isObject(x)) {
								str += ' ' + x;
							} else {
								str += ' ' + inspect(x);
							}
						}
						return str;
					};
	
					// Mark that a method should not be used.
					// Returns a modified function which warns once by default.
					// If --no-deprecation is set, then it is a no-op.
					exports.deprecate = function (fn, msg) {
						// Allow for deprecating things in the process of starting up.
						if (isUndefined(global.process)) {
							return function () {
								return exports.deprecate(fn, msg).apply(this, arguments);
							};
						}
	
						if (process.noDeprecation === true) {
							return fn;
						}
	
						var warned = false;
						function deprecated() {
							if (!warned) {
								if (process.throwDeprecation) {
									throw new Error(msg);
								} else if (process.traceDeprecation) {
									console.trace(msg);
								} else {
									console.error(msg);
								}
								warned = true;
							}
							return fn.apply(this, arguments);
						}
	
						return deprecated;
					};
	
					var debugs = {};
					var debugEnviron;
					exports.debuglog = function (set) {
						if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
						set = set.toUpperCase();
						if (!debugs[set]) {
							if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
								var pid = process.pid;
								debugs[set] = function () {
									var msg = exports.format.apply(exports, arguments);
									console.error('%s %d: %s', set, pid, msg);
								};
							} else {
								debugs[set] = function () {};
							}
						}
						return debugs[set];
					};
	
					/**
	     * Echos the value of a value. Trys to print the value out
	     * in the best way possible given the different types.
	     *
	     * @param {Object} obj The object to print out.
	     * @param {Object} opts Optional options object that alters the output.
	     */
					/* legacy: obj, showHidden, depth, colors*/
					function inspect(obj, opts) {
						// default options
						var ctx = {
							seen: [],
							stylize: stylizeNoColor
						};
						// legacy...
						if (arguments.length >= 3) ctx.depth = arguments[2];
						if (arguments.length >= 4) ctx.colors = arguments[3];
						if (isBoolean(opts)) {
							// legacy...
							ctx.showHidden = opts;
						} else if (opts) {
							// got an "options" object
							exports._extend(ctx, opts);
						}
						// set default options
						if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
						if (isUndefined(ctx.depth)) ctx.depth = 2;
						if (isUndefined(ctx.colors)) ctx.colors = false;
						if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
						if (ctx.colors) ctx.stylize = stylizeWithColor;
						return formatValue(ctx, obj, ctx.depth);
					}
					exports.inspect = inspect;
	
					// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
					inspect.colors = {
						'bold': [1, 22],
						'italic': [3, 23],
						'underline': [4, 24],
						'inverse': [7, 27],
						'white': [37, 39],
						'grey': [90, 39],
						'black': [30, 39],
						'blue': [34, 39],
						'cyan': [36, 39],
						'green': [32, 39],
						'magenta': [35, 39],
						'red': [31, 39],
						'yellow': [33, 39]
					};
	
					// Don't use 'blue' not visible on cmd.exe
					inspect.styles = {
						'special': 'cyan',
						'number': 'yellow',
						'boolean': 'yellow',
						'undefined': 'grey',
						'null': 'bold',
						'string': 'green',
						'date': 'magenta',
						// "name": intentionally not styling
						'regexp': 'red'
					};
	
					function stylizeWithColor(str, styleType) {
						var style = inspect.styles[styleType];
	
						if (style) {
							return '\x1B[' + inspect.colors[style][0] + 'm' + str + '\x1B[' + inspect.colors[style][1] + 'm';
						} else {
							return str;
						}
					}
	
					function stylizeNoColor(str, styleType) {
						return str;
					}
	
					function arrayToHash(array) {
						var hash = {};
	
						array.forEach(function (val, idx) {
							hash[val] = true;
						});
	
						return hash;
					}
	
					function formatValue(ctx, value, recurseTimes) {
						// Provide a hook for user-specified inspect functions.
						// Check that value is an object with an inspect function on it
						if (ctx.customInspect && value && isFunction(value.inspect) &&
						// Filter out the util module, it's inspect function is special
						value.inspect !== exports.inspect &&
						// Also filter out any prototype objects using the circular check.
						!(value.constructor && value.constructor.prototype === value)) {
							var ret = value.inspect(recurseTimes, ctx);
							if (!isString(ret)) {
								ret = formatValue(ctx, ret, recurseTimes);
							}
							return ret;
						}
	
						// Primitive types cannot have properties
						var primitive = formatPrimitive(ctx, value);
						if (primitive) {
							return primitive;
						}
	
						// Look up the keys of the object.
						var keys = Object.keys(value);
						var visibleKeys = arrayToHash(keys);
	
						if (ctx.showHidden) {
							keys = Object.getOwnPropertyNames(value);
						}
	
						// IE doesn't make error fields non-enumerable
						// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
						if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
							return formatError(value);
						}
	
						// Some type of object without properties can be shortcutted.
						if (keys.length === 0) {
							if (isFunction(value)) {
								var name = value.name ? ': ' + value.name : '';
								return ctx.stylize('[Function' + name + ']', 'special');
							}
							if (isRegExp(value)) {
								return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
							}
							if (isDate(value)) {
								return ctx.stylize(Date.prototype.toString.call(value), 'date');
							}
							if (isError(value)) {
								return formatError(value);
							}
						}
	
						var base = '',
						    array = false,
						    braces = ['{', '}'];
	
						// Make Array say that they are Array
						if (isArray(value)) {
							array = true;
							braces = ['[', ']'];
						}
	
						// Make functions say that they are functions
						if (isFunction(value)) {
							var n = value.name ? ': ' + value.name : '';
							base = ' [Function' + n + ']';
						}
	
						// Make RegExps say that they are RegExps
						if (isRegExp(value)) {
							base = ' ' + RegExp.prototype.toString.call(value);
						}
	
						// Make dates with properties first say the date
						if (isDate(value)) {
							base = ' ' + Date.prototype.toUTCString.call(value);
						}
	
						// Make error with message first say the error
						if (isError(value)) {
							base = ' ' + formatError(value);
						}
	
						if (keys.length === 0 && (!array || value.length == 0)) {
							return braces[0] + base + braces[1];
						}
	
						if (recurseTimes < 0) {
							if (isRegExp(value)) {
								return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
							} else {
								return ctx.stylize('[Object]', 'special');
							}
						}
	
						ctx.seen.push(value);
	
						var output;
						if (array) {
							output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
						} else {
							output = keys.map(function (key) {
								return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
							});
						}
	
						ctx.seen.pop();
	
						return reduceToSingleString(output, base, braces);
					}
	
					function formatPrimitive(ctx, value) {
						if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
						if (isString(value)) {
							var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
							return ctx.stylize(simple, 'string');
						}
						if (isNumber(value)) return ctx.stylize('' + value, 'number');
						if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
						// For some reason typeof null is "object", so special case here.
						if (isNull(value)) return ctx.stylize('null', 'null');
					}
	
					function formatError(value) {
						return '[' + Error.prototype.toString.call(value) + ']';
					}
	
					function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
						var output = [];
						for (var i = 0, l = value.length; i < l; ++i) {
							if (hasOwnProperty(value, String(i))) {
								output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
							} else {
								output.push('');
							}
						}
						keys.forEach(function (key) {
							if (!key.match(/^\d+$/)) {
								output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
							}
						});
						return output;
					}
	
					function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
						var name, str, desc;
						desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
						if (desc.get) {
							if (desc.set) {
								str = ctx.stylize('[Getter/Setter]', 'special');
							} else {
								str = ctx.stylize('[Getter]', 'special');
							}
						} else {
							if (desc.set) {
								str = ctx.stylize('[Setter]', 'special');
							}
						}
						if (!hasOwnProperty(visibleKeys, key)) {
							name = '[' + key + ']';
						}
						if (!str) {
							if (ctx.seen.indexOf(desc.value) < 0) {
								if (isNull(recurseTimes)) {
									str = formatValue(ctx, desc.value, null);
								} else {
									str = formatValue(ctx, desc.value, recurseTimes - 1);
								}
								if (str.indexOf('\n') > -1) {
									if (array) {
										str = str.split('\n').map(function (line) {
											return '  ' + line;
										}).join('\n').substr(2);
									} else {
										str = '\n' + str.split('\n').map(function (line) {
											return '   ' + line;
										}).join('\n');
									}
								}
							} else {
								str = ctx.stylize('[Circular]', 'special');
							}
						}
						if (isUndefined(name)) {
							if (array && key.match(/^\d+$/)) {
								return str;
							}
							name = JSON.stringify('' + key);
							if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
								name = name.substr(1, name.length - 2);
								name = ctx.stylize(name, 'name');
							} else {
								name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
								name = ctx.stylize(name, 'string');
							}
						}
	
						return name + ': ' + str;
					}
	
					function reduceToSingleString(output, base, braces) {
						var numLinesEst = 0;
						var length = output.reduce(function (prev, cur) {
							numLinesEst++;
							if (cur.indexOf('\n') >= 0) numLinesEst++;
							return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
						}, 0);
	
						if (length > 60) {
							return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
						}
	
						return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
					}
	
					// NOTE: These type checking functions intentionally don't use `instanceof`
					// because it is fragile and can be easily faked with `Object.create()`.
					function isArray(ar) {
						return Array.isArray(ar);
					}
					exports.isArray = isArray;
	
					function isBoolean(arg) {
						return typeof arg === 'boolean';
					}
					exports.isBoolean = isBoolean;
	
					function isNull(arg) {
						return arg === null;
					}
					exports.isNull = isNull;
	
					function isNullOrUndefined(arg) {
						return arg == null;
					}
					exports.isNullOrUndefined = isNullOrUndefined;
	
					function isNumber(arg) {
						return typeof arg === 'number';
					}
					exports.isNumber = isNumber;
	
					function isString(arg) {
						return typeof arg === 'string';
					}
					exports.isString = isString;
	
					function isSymbol(arg) {
						return (typeof arg === 'undefined' ? 'undefined' : _typeof2(arg)) === 'symbol';
					}
					exports.isSymbol = isSymbol;
	
					function isUndefined(arg) {
						return arg === void 0;
					}
					exports.isUndefined = isUndefined;
	
					function isRegExp(re) {
						return isObject(re) && objectToString(re) === '[object RegExp]';
					}
					exports.isRegExp = isRegExp;
	
					function isObject(arg) {
						return (typeof arg === 'undefined' ? 'undefined' : _typeof2(arg)) === 'object' && arg !== null;
					}
					exports.isObject = isObject;
	
					function isDate(d) {
						return isObject(d) && objectToString(d) === '[object Date]';
					}
					exports.isDate = isDate;
	
					function isError(e) {
						return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
					}
					exports.isError = isError;
	
					function isFunction(arg) {
						return typeof arg === 'function';
					}
					exports.isFunction = isFunction;
	
					function isPrimitive(arg) {
						return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof2(arg)) === 'symbol' || // ES6 symbol
						typeof arg === 'undefined';
					}
					exports.isPrimitive = isPrimitive;
	
					exports.isBuffer = __webpack_require__(19);
	
					function objectToString(o) {
						return Object.prototype.toString.call(o);
					}
	
					function pad(n) {
						return n < 10 ? '0' + n.toString(10) : n.toString(10);
					}
	
					var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	
					// 26 Feb 16:19:34
					function timestamp() {
						var d = new Date();
						var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
						return [d.getDate(), months[d.getMonth()], time].join(' ');
					}
	
					// log is just a thin wrapper to console.log that prepends a timestamp
					exports.log = function () {
						console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
					};
	
					/**
	     * Inherit the prototype methods from one constructor into another.
	     *
	     * The Function.prototype.inherits from lang.js rewritten as a standalone
	     * function (not on Function.prototype). NOTE: If this file is to be loaded
	     * during bootstrapping this function needs to be rewritten using some native
	     * functions as prototype setup using normal JavaScript does not work as
	     * expected during bootstrapping (see mirror.js in r114903).
	     *
	     * @param {function} ctor Constructor function which needs to inherit the
	     *     prototype.
	     * @param {function} superCtor Constructor function to inherit prototype from.
	     */
					exports.inherits = __webpack_require__(20);
	
					exports._extend = function (origin, add) {
						// Don't do anything if add isn't an object
						if (!add || !isObject(add)) return origin;
	
						var keys = Object.keys(add);
						var i = keys.length;
						while (i--) {
							origin[keys[i]] = add[keys[i]];
						}
						return origin;
					};
	
					function hasOwnProperty(obj, prop) {
						return Object.prototype.hasOwnProperty.call(obj, prop);
					}
	
					/* WEBPACK VAR INJECTION */
				}).call(exports, function () {
					return this;
				}(), __webpack_require__(18));
	
				/***/
			},
			/* 18 */
			/***/function (module, exports) {
	
				// shim for using process in browser
				var process = module.exports = {};
	
				// cached from whatever global is present so that test runners that stub it
				// don't break things.  But we need to wrap it in a try catch in case it is
				// wrapped in strict mode code which doesn't define any globals.  It's inside a
				// function because try/catches deoptimize in certain engines.
	
				var cachedSetTimeout;
				var cachedClearTimeout;
	
				function defaultSetTimout() {
					throw new Error('setTimeout has not been defined');
				}
				function defaultClearTimeout() {
					throw new Error('clearTimeout has not been defined');
				}
				(function () {
					try {
						if (typeof setTimeout === 'function') {
							cachedSetTimeout = setTimeout;
						} else {
							cachedSetTimeout = defaultSetTimout;
						}
					} catch (e) {
						cachedSetTimeout = defaultSetTimout;
					}
					try {
						if (typeof clearTimeout === 'function') {
							cachedClearTimeout = clearTimeout;
						} else {
							cachedClearTimeout = defaultClearTimeout;
						}
					} catch (e) {
						cachedClearTimeout = defaultClearTimeout;
					}
				})();
				function runTimeout(fun) {
					if (cachedSetTimeout === setTimeout) {
						//normal enviroments in sane situations
						return setTimeout(fun, 0);
					}
					// if setTimeout wasn't available but was latter defined
					if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
						cachedSetTimeout = setTimeout;
						return setTimeout(fun, 0);
					}
					try {
						// when when somebody has screwed with setTimeout but no I.E. maddness
						return cachedSetTimeout(fun, 0);
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
							return cachedSetTimeout.call(null, fun, 0);
						} catch (e) {
							// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
							return cachedSetTimeout.call(this, fun, 0);
						}
					}
				}
				function runClearTimeout(marker) {
					if (cachedClearTimeout === clearTimeout) {
						//normal enviroments in sane situations
						return clearTimeout(marker);
					}
					// if clearTimeout wasn't available but was latter defined
					if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
						cachedClearTimeout = clearTimeout;
						return clearTimeout(marker);
					}
					try {
						// when when somebody has screwed with setTimeout but no I.E. maddness
						return cachedClearTimeout(marker);
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
							return cachedClearTimeout.call(null, marker);
						} catch (e) {
							// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
							// Some versions of I.E. have different rules for clearTimeout vs setTimeout
							return cachedClearTimeout.call(this, marker);
						}
					}
				}
				var queue = [];
				var draining = false;
				var currentQueue;
				var queueIndex = -1;
	
				function cleanUpNextTick() {
					if (!draining || !currentQueue) {
						return;
					}
					draining = false;
					if (currentQueue.length) {
						queue = currentQueue.concat(queue);
					} else {
						queueIndex = -1;
					}
					if (queue.length) {
						drainQueue();
					}
				}
	
				function drainQueue() {
					if (draining) {
						return;
					}
					var timeout = runTimeout(cleanUpNextTick);
					draining = true;
	
					var len = queue.length;
					while (len) {
						currentQueue = queue;
						queue = [];
						while (++queueIndex < len) {
							if (currentQueue) {
								currentQueue[queueIndex].run();
							}
						}
						queueIndex = -1;
						len = queue.length;
					}
					currentQueue = null;
					draining = false;
					runClearTimeout(timeout);
				}
	
				process.nextTick = function (fun) {
					var args = new Array(arguments.length - 1);
					if (arguments.length > 1) {
						for (var i = 1; i < arguments.length; i++) {
							args[i - 1] = arguments[i];
						}
					}
					queue.push(new Item(fun, args));
					if (queue.length === 1 && !draining) {
						runTimeout(drainQueue);
					}
				};
	
				// v8 likes predictible objects
				function Item(fun, array) {
					this.fun = fun;
					this.array = array;
				}
				Item.prototype.run = function () {
					this.fun.apply(null, this.array);
				};
				process.title = 'browser';
				process.browser = true;
				process.env = {};
				process.argv = [];
				process.version = ''; // empty string to avoid regexp issues
				process.versions = {};
	
				function noop() {}
	
				process.on = noop;
				process.addListener = noop;
				process.once = noop;
				process.off = noop;
				process.removeListener = noop;
				process.removeAllListeners = noop;
				process.emit = noop;
				process.prependListener = noop;
				process.prependOnceListener = noop;
	
				process.listeners = function (name) {
					return [];
				};
	
				process.binding = function (name) {
					throw new Error('process.binding is not supported');
				};
	
				process.cwd = function () {
					return '/';
				};
				process.chdir = function (dir) {
					throw new Error('process.chdir is not supported');
				};
				process.umask = function () {
					return 0;
				};
	
				/***/
			},
			/* 19 */
			/***/function (module, exports) {
	
				module.exports = function isBuffer(arg) {
					return arg && (typeof arg === 'undefined' ? 'undefined' : _typeof2(arg)) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
				};
	
				/***/
			},
			/* 20 */
			/***/function (module, exports) {
	
				if (typeof Object.create === 'function') {
					// implementation from standard node.js 'util' module
					module.exports = function inherits(ctor, superCtor) {
						ctor.super_ = superCtor;
						ctor.prototype = Object.create(superCtor.prototype, {
							constructor: {
								value: ctor,
								enumerable: false,
								writable: true,
								configurable: true
							}
						});
					};
				} else {
					// old school shim for old browsers
					module.exports = function inherits(ctor, superCtor) {
						ctor.super_ = superCtor;
						var TempCtor = function TempCtor() {};
						TempCtor.prototype = superCtor.prototype;
						ctor.prototype = new TempCtor();
						ctor.prototype.constructor = ctor;
					};
				}
	
				/***/
			},
			/* 21 */
			/***/function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var h = function h(tagName) {
					var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
					var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
					return _extends({}, properties, {
						tag: tagName,
						content: children
					});
				};
	
				exports.default = h;
	
				/***/
			},
			/* 22 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _slicedToArray = function () {
					function sliceIterator(arr, i) {
						var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
							for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
								_arr.push(_s.value);if (i && _arr.length === i) break;
							}
						} catch (err) {
							_d = true;_e = err;
						} finally {
							try {
								if (!_n && _i["return"]) _i["return"]();
							} finally {
								if (_d) throw _e;
							}
						}return _arr;
					}return function (arr, i) {
						if (Array.isArray(arr)) {
							return arr;
						} else if (Symbol.iterator in Object(arr)) {
							return sliceIterator(arr, i);
						} else {
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						}
					};
				}();
	
				var _graflow = __webpack_require__(3);
	
				var _Message = __webpack_require__(5);
	
				var _utils = __webpack_require__(4);
	
				var messageConverter = function messageConverter(arg) {
					if ((0, _utils.isString)(arg)) return (0, _Message.Message)(arg);
					if ((0, _utils.isObject)(arg)) {
						return Object.entries(arg).map(function (_ref) {
							var _ref2 = _slicedToArray(_ref, 2),
							    name = _ref2[0],
							    value = _ref2[1];
	
							return (0, _Message.Message)(name, value);
						});
					}
				};
	
				var StateComponent = function StateComponent(initial) {
					var state = initial;
	
					return (0, _graflow.Mapper)(function (transformate) {
						state = transformate(state);
						return state;
					});
				};
	
				var Outputs = function Outputs(handler) {
					return (0, _graflow.Mapper)(function (state) {
						return (0, _Message.toMessage)(_extends({
							'events.state': state,
							'view.state': state
						}, handler(state)), messageConverter);
					});
				};
	
				var State = function State() {
					var handler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
						return {};
					};
					var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
					return (0, _graflow.Chain)((0, _graflow.Filter)(function (v) {
						return (0, _Message.isMessage)(v) && v.blocks.includes('state');
					}), (0, _graflow.Mapper)(function (m) {
						return m.values.default;
					}), StateComponent(initial), Outputs(handler));
				};
	
				exports.default = State;
	
				/***/
			},
			/* 23 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _slicedToArray = function () {
					function sliceIterator(arr, i) {
						var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
							for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
								_arr.push(_s.value);if (i && _arr.length === i) break;
							}
						} catch (err) {
							_d = true;_e = err;
						} finally {
							try {
								if (!_n && _i["return"]) _i["return"]();
							} finally {
								if (_d) throw _e;
							}
						}return _arr;
					}return function (arr, i) {
						if (Array.isArray(arr)) {
							return arr;
						} else if (Symbol.iterator in Object(arr)) {
							return sliceIterator(arr, i);
						} else {
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						}
					};
				}();
	
				var _Message = __webpack_require__(5);
	
				var _utils = __webpack_require__(4);
	
				var _graflow = __webpack_require__(3);
	
				var EventState = function EventState() {
					return (0, _graflow.Component)({
						inputs: ['state', 'event'],
						components: {
							memory: (0, _graflow.Memorizer)(),
							serializer: (0, _graflow.ArraySerializer)(),
							demuxer: (0, _graflow.SortedDemuxer)('state', 'event')
						},
						connections: [['in', 'demuxer'], ['demuxer.state', 'memory.memory'], ['demuxer.event', 'serializer'], ['in.event', 'serializer'], ['serializer', 'memory.value'], ['in.state', 'memory.memory'], ['memory', 'out']]
					});
				};
	
				// Too Smart?  Not obvious interpretation of the event handlers
				var messageConverter = function messageConverter(arg) {
					if ((0, _utils.isString)(arg)) return (0, _Message.Message)(arg);
					if ((0, _utils.isFunction)(arg)) return (0, _Message.Message)('state', arg);
					if ((0, _utils.isObject)(arg)) {
						return Object.entries(arg).map(function (_ref) {
							var _ref2 = _slicedToArray(_ref, 2),
							    name = _ref2[0],
							    value = _ref2[1];
	
							return (0, _Message.Message)(name, value);
						});
					}
					return (0, _Message.Message)('state', function () {
						return arg;
					});
				};
	
				var EventHandler = function EventHandler(handlers) {
					return (0, _graflow.Chain)((0, _graflow.Mapper)(function (_ref3) {
						var _ref3$value = _slicedToArray(_ref3.value, 3),
						    comp = _ref3$value[0],
						    port = _ref3$value[1],
						    value = _ref3$value[2],
						    memory = _ref3.memory;
	
						return [(0, _Message.getHandler)(handlers, comp, port), value, memory];
					}), (0, _graflow.Filter)(function (_ref4) {
						var _ref5 = _slicedToArray(_ref4, 1),
						    handler = _ref5[0];
	
						return (0, _utils.isDefined)(handler);
					}), (0, _graflow.Mapper)(function (_ref6) {
						var _ref7 = _slicedToArray(_ref6, 3),
						    handler = _ref7[0],
						    value = _ref7[1],
						    state = _ref7[2];
	
						return handler(value, state);
					}), (0, _graflow.Filter)(_utils.isDefined), (0, _graflow.ArraySerializer)());
				};
	
				var isMessageForEventsBlock = function isMessageForEventsBlock(v) {
					return (0, _Message.isMessage)(v) && v.blocks.includes('events');
				};
				var valuesFromMessage = function valuesFromMessage(m) {
					return m.values;
				};
	
				var Events = function Events(handlers) {
					return (0, _graflow.Chain)((0, _graflow.Filter)((0, _Message.isMessageForBlock)('events')), (0, _graflow.Mapper)(valuesFromMessage), EventState(), // Add in States with Events
					EventHandler(handlers), (0, _graflow.Mapper)(function (v) {
						return (0, _Message.toMessage)(v, messageConverter);
					}));
				};
	
				exports.default = Events;
	
				/***/
			},
			/* 24 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				var _Message = __webpack_require__(5);
	
				var _graflow = __webpack_require__(3);
	
				var _utils = __webpack_require__(4);
	
				var setComponent = function setComponent(vdom, component) {
					if (Array.isArray(vdom)) {
						vdom.filter(_utils.isDefined).map(function (e) {
							return setComponent(e, component);
						});
					} else {
						if ((typeof vdom === 'undefined' ? 'undefined' : _typeof(vdom)) === 'object' && !vdom.component) vdom.component = component;
						if (vdom.content) setComponent(vdom.content, component);
					}
					return vdom;
				};
	
				var setRoot = function setRoot(vdom) {
					return _extends({}, vdom, { root: true });
				};
	
				var ViewComponent = function ViewComponent(view, component) {
					return (0, _graflow.Component)({
						name: 'ViewComponent',
						inputs: ['vdom', 'state'],
						components: {
							demuxer: (0, _graflow.SortedDemuxer)('vdom', 'state'),
							vdomAccumulator: (0, _graflow.Accumulator)(),
							hub: (0, _graflow.Hub)('vdom', 'state'),
							globalAccumulator: (0, _graflow.Accumulator)(),
							view: (0, _graflow.Mapper)(function (_ref) {
								var _ref$state = _ref.state,
								    state = _ref$state === undefined ? {} : _ref$state,
								    _ref$vdom = _ref.vdom,
								    vdom = _ref$vdom === undefined ? {} : _ref$vdom;
								return view(state, vdom);
							}),
							filter: (0, _graflow.Filter)(_utils.isDefined),
							post: (0, _graflow.Mapper)(function (vdom) {
								return setRoot(setComponent(vdom, component));
							})
						},
						connections: [['in', 'demuxer'], ['demuxer.vdom', 'vdomAccumulator'], ['demuxer.state', 'hub.state'], ['in.vdom', 'vdomAccumulator'], ['vdomAccumulator', 'hub.vdom'], ['in.state', 'hub.state'], ['hub', 'globalAccumulator'], ['globalAccumulator', 'view'], ['view', 'filter'], ['filter', 'post'], ['post', 'out']]
						// debug: ['in','out']
					});
				};
	
				var View = function View(view, component) {
					return (0, _graflow.Chain)((0, _graflow.Filter)(function (v) {
						return (0, _Message.isMessage)(v) && v.blocks.includes('view');
					}), (0, _graflow.Mapper)(function (m) {
						return m.values;
					}), ViewComponent(view, component), (0, _graflow.Mapper)(function (v) {
						return (0, _Message.Message)('out', 'vdom', v);
					}));
				};
	
				exports.default = View;
	
				/***/
			},
			/* 25 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _BusBlock = __webpack_require__(26);
	
				var _BusBlock2 = _interopRequireDefault(_BusBlock);
	
				var _Bus = __webpack_require__(27);
	
				var _Bus2 = _interopRequireDefault(_Bus);
	
				var _Inputs = __webpack_require__(28);
	
				var _Inputs2 = _interopRequireDefault(_Inputs);
	
				var _Outputs = __webpack_require__(29);
	
				var _Outputs2 = _interopRequireDefault(_Outputs);
	
				var _State = __webpack_require__(22);
	
				var _State2 = _interopRequireDefault(_State);
	
				var _Events = __webpack_require__(23);
	
				var _Events2 = _interopRequireDefault(_Events);
	
				var _View = __webpack_require__(24);
	
				var _View2 = _interopRequireDefault(_View);
	
				var _Dom = __webpack_require__(30);
	
				var _Dom2 = _interopRequireDefault(_Dom);
	
				var _CustomBlocks = __webpack_require__(31);
	
				var _CustomBlocks2 = _interopRequireDefault(_CustomBlocks);
	
				var _graflow = __webpack_require__(3);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _objectWithoutProperties(obj, keys) {
					var target = {};for (var i in obj) {
						if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
					}return target;
				}
	
				var Block = function Block(options) {
					var _options$on = options.on,
					    on = _options$on === undefined ? {} : _options$on,
					    _options$blocks = options.blocks,
					    blocks = _options$blocks === undefined ? {} : _options$blocks,
					    _options$view = options.view,
					    stateToView = _options$view === undefined ? function () {} : _options$view;
	
					var stateHandler = on.state,
					    busHandler = on.bus,
					    eventHandlers = _objectWithoutProperties(on, ['state', 'bus']);
	
					var bus = (0, _Bus2.default)(busHandler);
	
					return (0, _BusBlock2.default)(_extends({}, (0, _CustomBlocks2.default)(blocks), {
						inputs: (0, _Inputs2.default)(),
						events: (0, _Events2.default)(eventHandlers),
						state: (0, _State2.default)(stateHandler),
						dom: (0, _Dom2.default)(),
						view: (0, _View2.default)(stateToView, bus),
						outputs: (0, _Outputs2.default)(),
						bus: bus
					}));
				};
	
				exports.default = Block;
	
				/***/
			},
			/* 26 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _graflow = __webpack_require__(3);
	
				function _toConsumableArray(arr) {
					if (Array.isArray(arr)) {
						for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
							arr2[i] = arr[i];
						}return arr2;
					} else {
						return Array.from(arr);
					}
				}
	
				var BusBlock = function BusBlock(blocks) {
					var blockNames = Object.keys(blocks);
	
					var connectionsToBus = blockNames.filter(function (x) {
						return !['outputs', 'bus'].includes(x);
					}).map(function (name) {
						return [name, 'bus'];
					});
	
					var connectionsFromBus = blockNames.filter(function (x) {
						return !['inputs', 'bus'].includes(x);
					}).map(function (name) {
						return ['bus', name];
					});
	
					var connections = [].concat(_toConsumableArray(connectionsToBus), _toConsumableArray(connectionsFromBus), [['in', 'inputs'], ['outputs', 'out']]);
	
					return (0, _graflow.Component)({ connections: connections, components: blocks });
				};
	
				exports.default = BusBlock;
	
				/***/
			},
			/* 27 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _graflow = __webpack_require__(3);
	
				var _Message = __webpack_require__(5);
	
				var Bus = function Bus(busHandler) {
					return (0, _graflow.Chain)((0, _graflow.ArraySerializer)(), (0, _graflow.Filter)(_Message.isMessage), (0, _graflow.Mapper)(busHandler || function (m) {
						return m;
					}));
				};
	
				exports.default = Bus;
	
				/***/
			},
			/* 28 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _slicedToArray = function () {
					function sliceIterator(arr, i) {
						var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
							for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
								_arr.push(_s.value);if (i && _arr.length === i) break;
							}
						} catch (err) {
							_d = true;_e = err;
						} finally {
							try {
								if (!_n && _i["return"]) _i["return"]();
							} finally {
								if (_d) throw _e;
							}
						}return _arr;
					}return function (arr, i) {
						if (Array.isArray(arr)) {
							return arr;
						} else if (Symbol.iterator in Object(arr)) {
							return sliceIterator(arr, i);
						} else {
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						}
					};
				}();
	
				var _graflow = __webpack_require__(3);
	
				var _Message = __webpack_require__(5);
	
				var _Message2 = _interopRequireDefault(_Message);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				var Inputs = function Inputs() {
					return (0, _graflow.Chain)((0, _graflow.Mapper)(function (v) {
						return Object.entries(v).map(function (_ref) {
							var _ref2 = _slicedToArray(_ref, 2),
							    name = _ref2[0],
							    value = _ref2[1];
	
							return (0, _Message2.default)('events', 'event', [['in', name, value]]);
						});
					}));
				};
	
				exports.default = Inputs;
	
				/***/
			},
			/* 29 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _graflow = __webpack_require__(3);
	
				var _Message = __webpack_require__(5);
	
				var toValues = function toValues(m) {
					return m.values;
				};
	
				var Outputs = function Outputs() {
					return (0, _graflow.Chain)(
					// Logger({prefix:'Outputs/Outputs/Chain/input'}),
					(0, _graflow.Filter)((0, _Message.isMessageForBlock)('out')),
					// Logger({prefix:'Outputs/Outputs/Chain/isMessageForOutputs'}),
					(0, _graflow.Mapper)(toValues)
					// , Logger({prefix:'Outputs/Outputs/Chain/output'})
					);
				};
	
				exports.default = Outputs;
	
				/***/
			},
			/* 30 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _Message = __webpack_require__(5);
	
				var _graflow = __webpack_require__(3);
	
				var _utils = __webpack_require__(4);
	
				var DomComponent = function DomComponent() {
					return (0, _graflow.Component)({
						inputs: ['event', 'node', 'action'],
						components: {
							demuxer: (0, _graflow.SortedDemuxer)('node', 'action', 'event'),
							memory: (0, _graflow.Memorizer)(),
							action: (0, _graflow.Component)(function (_ref, next) {
								var action = _ref.value,
								    node = _ref.memory;
								return action(node);
							})
						},
						connections: [['in', 'demuxer'], ['demuxer.event', 'out'], ['demuxer.node', 'memory.memory'], ['demuxer.action', 'memory.value'], ['in.event', 'out'], ['in.node', 'memory.memory'], ['in.action', 'memory.value'], ['memory', 'action']]
					});
				};
	
				var Dom = function Dom() {
					return (0, _graflow.Chain)((0, _graflow.Filter)(function (v) {
						return (0, _Message.isMessage)(v) && v.blocks.includes('dom');
					}), (0, _graflow.Mapper)(function (m) {
						return m.values;
					}), DomComponent(), (0, _graflow.Mapper)(function (v) {
						return (0, _Message.Message)('events', 'event', v);
					}));
				};
	
				exports.default = Dom;
	
				/***/
			},
			/* 31 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _slicedToArray = function () {
					function sliceIterator(arr, i) {
						var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
							for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
								_arr.push(_s.value);if (i && _arr.length === i) break;
							}
						} catch (err) {
							_d = true;_e = err;
						} finally {
							try {
								if (!_n && _i["return"]) _i["return"]();
							} finally {
								if (_d) throw _e;
							}
						}return _arr;
					}return function (arr, i) {
						if (Array.isArray(arr)) {
							return arr;
						} else if (Symbol.iterator in Object(arr)) {
							return sliceIterator(arr, i);
						} else {
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						}
					};
				}();
	
				var _utils = __webpack_require__(4);
	
				var _graflow = __webpack_require__(3);
	
				var _Message2 = __webpack_require__(5);
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				var CustomMessage = function CustomMessage(name, value) {
					if ((0, _utils.isObject)(value) && Object.keys(value).length > 0) {
						return Object.entries(value).map(function (_ref) {
							var _ref2 = _slicedToArray(_ref, 2),
							    k = _ref2[0],
							    v = _ref2[1];
	
							return k === 'vdom' ? (0, _Message2.Message)('view', 'vdom', _defineProperty({}, name, v)) : (0, _Message2.Message)('events', 'event', [[name, k, v]]);
						});
					}
					return (0, _Message2.Message)('events', 'event', [[name, 'default', value]]);
				};
	
				var NamedBlock = function NamedBlock(name, block) {
					return (0, _graflow.Chain)((0, _graflow.Filter)(_Message2.isMessage), (0, _graflow.Filter)(function (_ref3) {
						var blocks = _ref3.blocks;
						return (0, _utils.isUndefined)(blocks) || blocks.includes(name);
					}), (0, _graflow.Mapper)(function (v) {
						return v.values.default ? v.values.default : v.values;
					}), block, (0, _graflow.ArraySerializer)(), (0, _graflow.Mapper)(function (m) {
						return CustomMessage(name, m);
					}), (0, _graflow.ArraySerializer)());
				};
	
				var CustomBlocks = function CustomBlocks(arg) {
					return (0, _utils.mapObject)(arg, function (name, block) {
						return [name, NamedBlock(name, block)];
					});
				};
	
				exports.default = CustomBlocks;
	
				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=cyclow.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cyclow = __webpack_require__(1);
	
	var _graflow = __webpack_require__(4);
	
	var _snabbdom = __webpack_require__(5);
	
	var Counter = function Counter() {
	  return (0, _cyclow.Block)({
	    blocks: { ticker: (0, _graflow.Ticker)(1000) },
	    on: {
	      'in.init': function inInit() {
	        return 'ticker';
	      },
	      ticker: function ticker() {
	        return function (date) {
	          return new Date();
	        };
	      }
	    },
	    view: function view(date) {
	      return (0, _snabbdom.h)('span', date.toLocaleTimeString());
	    }
	  });
	};
	
	exports.default = Counter;

/***/ },
/* 4 */
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
		
		var _Component = __webpack_require__(1);
		
		Object.defineProperty(exports, 'default', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Component).default;
		  }
		});
		Object.defineProperty(exports, 'Component', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Component).default;
		  }
		});
		
		var _Mapper = __webpack_require__(3);
		
		Object.defineProperty(exports, 'Mapper', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Mapper).default;
		  }
		});
		
		var _Filter = __webpack_require__(4);
		
		Object.defineProperty(exports, 'Filter', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Filter).default;
		  }
		});
		
		var _Counter = __webpack_require__(5);
		
		Object.defineProperty(exports, 'Counter', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Counter).default;
		  }
		});
		
		var _Accumulator = __webpack_require__(6);
		
		Object.defineProperty(exports, 'Accumulator', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Accumulator).default;
		  }
		});
		
		var _Memorizer = __webpack_require__(7);
		
		Object.defineProperty(exports, 'Memorizer', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Memorizer).default;
		  }
		});
		
		var _Hub = __webpack_require__(12);
		
		Object.defineProperty(exports, 'Hub', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Hub).default;
		  }
		});
		
		var _Muxer = __webpack_require__(13);
		
		Object.defineProperty(exports, 'Muxer', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Muxer).default;
		  }
		});
		
		var _Demuxer = __webpack_require__(11);
		
		Object.defineProperty(exports, 'Demuxer', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Demuxer).default;
		  }
		});
		
		var _SortedDemuxer = __webpack_require__(8);
		
		Object.defineProperty(exports, 'SortedDemuxer', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_SortedDemuxer).default;
		  }
		});
		
		var _Iterator = __webpack_require__(14);
		
		Object.defineProperty(exports, 'Iterator', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Iterator).default;
		  }
		});
		
		var _Serializer = __webpack_require__(10);
		
		Object.defineProperty(exports, 'Serializer', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Serializer).default;
		  }
		});
		
		var _ArraySerializer = __webpack_require__(15);
		
		Object.defineProperty(exports, 'ArraySerializer', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_ArraySerializer).default;
		  }
		});
		
		var _Repeater = __webpack_require__(16);
		
		Object.defineProperty(exports, 'Repeater', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Repeater).default;
		  }
		});
		
		var _UniqueFilter = __webpack_require__(17);
		
		Object.defineProperty(exports, 'UniqueFilter', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_UniqueFilter).default;
		  }
		});
		
		var _Logger = __webpack_require__(18);
		
		Object.defineProperty(exports, 'Logger', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Logger).default;
		  }
		});
		
		var _Chain = __webpack_require__(9);
		
		Object.defineProperty(exports, 'Chain', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Chain).default;
		  }
		});
		
		var _Checker = __webpack_require__(19);
		
		Object.defineProperty(exports, 'Checker', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Checker).default;
		  }
		});
		
		var _Guard = __webpack_require__(20);
		
		Object.defineProperty(exports, 'Guard', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Guard).default;
		  }
		});
		
		var _Identity = __webpack_require__(21);
		
		Object.defineProperty(exports, 'Identity', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Identity).default;
		  }
		});
		
		var _Delayer = __webpack_require__(22);
		
		Object.defineProperty(exports, 'Delayer', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Delayer).default;
		  }
		});
		
		var _Ticker = __webpack_require__(23);
		
		Object.defineProperty(exports, 'Ticker', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Ticker).default;
		  }
		});
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _utils = __webpack_require__(2);
		
		var _componentId = 0;
		
		var nextId = function nextId() {
		  return _componentId++;
		};
		
		var componentFromFunction = function componentFromFunction(func) {
		  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
		
		  var node = toNode(func);
		
		  return {
		    send: function send() {
		      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		      return node.send(value);
		    },
		    on: function on(handler) {
		      return node.on(handler);
		    },
		    off: function off(id) {
		      return node.off(id);
		    },
		    inputs: {
		      default: node
		    },
		    outputs: {
		      default: node
		    },
		    id: node.id,
		    name: name
		  };
		};
		
		var toNode = function toNode(arg) {
		  if ((0, _utils.isFunction)(arg)) return node(arg);
		  return arg;
		};
		
		var node = function node(onNext) {
		  var id = nextId();
		  var queue = [];
		  var listeners = {};
		
		  var broadcast = function broadcast(arg) {
		    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		
		    arg.forEach(function (l) {
		      return l.addToQueue(value);
		    });
		    arg.forEach(function (l) {
		      return l.processQueue();
		    });
		  };
		
		  var next = function next(v) {
		    return broadcast(Object.values(listeners), v);
		  };
		
		  var addListener = function addListener(node) {
		    listeners[node.id] = node;
		    return node.id;
		  };
		  var removeListener = function removeListener(id) {
		    delete listeners[id];
		  };
		  var on = function on(handler) {
		    return addListener(toNode(function (v) {
		      return handler(v);
		    }));
		  };
		  var addToQueue = function addToQueue(v) {
		    return queue.push(v);
		  };
		  var processQueue = function processQueue() {
		    return (0, _utils.applyAndEmpty)(queue, function (v) {
		      return onNext(v, next);
		    });
		  };
		  var off = function off(id) {
		    return removeListener(id);
		  };
		
		  var send = function send() {
		    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		
		    addToQueue(value);
		    processQueue();
		  };
		
		  return {
		    on: on,
		    off: off,
		    send: send,
		    addListener: addListener,
		    addToQueue: addToQueue,
		    processQueue: processQueue,
		    id: id
		  };
		};
		
		var selectNode = function selectNode(name, components) {
		  var io = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'inputs';
		
		  var direction = io === 'inputs' ? 'inputs' : 'outputs';
		
		  var _name$split = name.split('.', 2),
		      _name$split2 = _slicedToArray(_name$split, 2),
		      componentName = _name$split2[0],
		      _name$split2$ = _name$split2[1],
		      nodeName = _name$split2$ === undefined ? 'default' : _name$split2$;
		
		  var component = components[componentName];
		  if ((0, _utils.isUndefined)(component)) {
		    throw new Error(componentName + ' component not found!');
		  }
		
		  var nodes = component[direction];
		
		  if ((0, _utils.isUndefined)(nodes) || (0, _utils.isUndefined)(nodes[nodeName])) {
		    throw new Error(name + ' port not found!');
		  }
		
		  return nodes[nodeName];
		};
		
		var componentFromObject = function componentFromObject(obj) {
		  var components = obj.components,
		      _obj$connections = obj.connections,
		      connections = _obj$connections === undefined ? [] : _obj$connections,
		      _obj$inputs = obj.inputs,
		      inputs = _obj$inputs === undefined ? [] : _obj$inputs,
		      _obj$outputs = obj.outputs,
		      outputs = _obj$outputs === undefined ? [] : _obj$outputs,
		      _obj$debug = obj.debug,
		      debug = _obj$debug === undefined ? [] : _obj$debug,
		      _obj$name = obj.name,
		      name = _obj$name === undefined ? '' : _obj$name;
		
		
		  var id = nextId();
		  var inputNames = (0, _utils.unique)(inputs.concat('default'));
		  var outputNames = (0, _utils.unique)(outputs.concat('default'));
		
		  var toNodes = function toNodes(i) {
		    return [i, node(function (v, next) {
		      return next(v);
		    })];
		  };
		  var inNodes = (0, _utils.arrayToObject)(inputNames, toNodes);
		  var outNodes = (0, _utils.arrayToObject)(outputNames, toNodes);
		
		  components.in = {
		    inputs: inNodes,
		    outputs: inNodes
		  };
		  components.out = {
		    inputs: outNodes,
		    outputs: outNodes
		  };
		
		  connections.forEach(function (_ref) {
		    var _ref2 = _slicedToArray(_ref, 2),
		        from = _ref2[0],
		        to = _ref2[1];
		
		    var outNode = selectNode(from, components, 'outputs');
		    var inNode = selectNode(to, components, 'inputs');
		    outNode.addListener(inNode);
		  });
		
		  debug.forEach(function (nodeName) {
		    var debugNode = selectNode(nodeName, components, 'outputs');
		    debugNode.on(function (v) {
		      return console.log('DEBUG Component(' + name + ':' + id + ').' + nodeName + ': ', v);
		    });
		  });
		
		  var on = function on() {
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }
		
		    var _args$splice$reverse = args.splice(0, 2).reverse(),
		        _args$splice$reverse2 = _slicedToArray(_args$splice$reverse, 2),
		        handler = _args$splice$reverse2[0],
		        _args$splice$reverse3 = _args$splice$reverse2[1],
		        nodeName = _args$splice$reverse3 === undefined ? 'default' : _args$splice$reverse3;
		
		    if ((0, _utils.isUndefined)(outNodes[nodeName])) throw new Error('Component(' + name + ':' + id + ')/on: outNodes[' + nodeName + '] not found');
		    return outNodes[nodeName].on(handler);
		  };
		
		  var off = function off() {
		    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		      args[_key2] = arguments[_key2];
		    }
		
		    var _args$splice$reverse4 = args.splice(0, 2).reverse(),
		        _args$splice$reverse5 = _slicedToArray(_args$splice$reverse4, 2),
		        id = _args$splice$reverse5[0],
		        _args$splice$reverse6 = _args$splice$reverse5[1],
		        nodeName = _args$splice$reverse6 === undefined ? 'default' : _args$splice$reverse6;
		
		    if ((0, _utils.isUndefined)(outNodes[nodeName])) throw new Error('Component(' + name + ':' + id + ')/off: outNodes[' + nodeName + '] not found');
		    return outNodes[nodeName].off(id);
		  };
		
		  var send = function send() {
		    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		      args[_key3] = arguments[_key3];
		    }
		
		    var _args$splice$reverse7 = args.splice(0, 2).reverse(),
		        _args$splice$reverse8 = _slicedToArray(_args$splice$reverse7, 2),
		        _args$splice$reverse9 = _args$splice$reverse8[0],
		        value = _args$splice$reverse9 === undefined ? {} : _args$splice$reverse9,
		        _args$splice$reverse10 = _args$splice$reverse8[1],
		        nodeName = _args$splice$reverse10 === undefined ? 'default' : _args$splice$reverse10;
		
		    if ((0, _utils.isUndefined)(inNodes[nodeName])) throw new Error('Component(' + name + ':' + id + ')/send: inNodes[' + nodeName + '] not found');
		    inNodes[nodeName].send(value);
		  };
		
		  return {
		    send: send,
		    on: on,
		    off: off,
		    inputs: inNodes,
		    outputs: outNodes,
		    id: id,
		    name: name
		  };
		};
		
		var Component = function Component(arg) {
		  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Function';
		
		  if ((0, _utils.isFunction)(arg)) return componentFromFunction(arg, name);
		  return componentFromObject(arg);
		};
		
		exports.default = Component;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		var pipe = function pipe() {
		  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
		    funcs[_key] = arguments[_key];
		  }
		
		  return funcs.reduce(function (f, g) {
		    return function () {
		      return g(f.apply(undefined, arguments));
		    };
		  });
		};
		
		var isFunction = function isFunction(arg) {
		  return typeof arg === 'function';
		};
		var isObject = function isObject(arg) {
		  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object';
		};
		var isUndefined = function isUndefined(arg) {
		  return arg === undefined;
		};
		
		var pairToObject = function pairToObject(_ref) {
		  var _ref2 = _slicedToArray(_ref, 2),
		      key = _ref2[0],
		      value = _ref2[1];
		
		  return _defineProperty({}, key, value);
		};
		
		var pairsToObject = function pairsToObject(arr) {
		  return arr.reduce(function (obj, pair) {
		    return _extends({}, obj, pairToObject(pair));
		  }, {});
		};
		
		var arrayToObject = function arrayToObject(arr, func) {
		  return pairsToObject(arr.map(func));
		};
		
		var applyAndEmpty = function applyAndEmpty(arr, func) {
		  var values = arr.length;
		  for (var i = 1; i <= values; i++) {
		    func(arr.shift());
		  }
		};
		
		var flatten = function flatten(v) {
		  var _ref4;
		
		  return (_ref4 = []).concat.apply(_ref4, _toConsumableArray(v));
		};
		
		var unique = function unique(arg) {
		  return [].concat(_toConsumableArray(new Set(arg)));
		};
		
		var toArray = function toArray(arg) {
		  return [].concat(arg);
		};
		
		exports.pipe = pipe;
		exports.isFunction = isFunction;
		exports.isObject = isObject;
		exports.isUndefined = isUndefined;
		exports.arrayToObject = arrayToObject;
		exports.pairToObject = pairToObject;
		exports.pairsToObject = pairsToObject;
		exports.applyAndEmpty = applyAndEmpty;
		exports.flatten = flatten;
		exports.unique = unique;
		exports.toArray = toArray;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Mapper = function Mapper(f) {
		  return (0, _Component2.default)(function (v, next) {
		    return next(f(v));
		  });
		};
		
		exports.default = Mapper;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Filter = function Filter(cond) {
		  return (0, _Component2.default)(function (v, next) {
		    if (cond(v)) next(v);
		  });
		};
		
		exports.default = Filter;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Counter = function Counter() {
		  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		
		  var value = initial;
		
		  return (0, _Component2.default)(function (v, next) {
		    value++;
		    next(value);
		  });
		};
		
		exports.default = Counter;
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Accumulator = function Accumulator() {
		  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		
		  var obj = initial;
		
		  return (0, _Component2.default)(function (v, next) {
		    if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) !== 'object') return;
		    Object.entries(v).forEach(function (_ref) {
		      var _ref2 = _slicedToArray(_ref, 2),
		          k = _ref2[0],
		          v = _ref2[1];
		
		      obj[k] = v;
		    });
		    next(obj);
		  });
		};
		
		exports.default = Accumulator;
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		var _Mapper = __webpack_require__(3);
		
		var _Mapper2 = _interopRequireDefault(_Mapper);
		
		var _SortedDemuxer = __webpack_require__(8);
		
		var _SortedDemuxer2 = _interopRequireDefault(_SortedDemuxer);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Memorizer = function Memorizer() {
		  var memory = void 0;
		
		  return (0, _Component2.default)({
		    inputs: ['memory', 'value'],
		    components: {
		      memory: (0, _Component2.default)(function (v) {
		        memory = v;
		      }),
		      mapper: (0, _Mapper2.default)(function (value) {
		        return { value: value, memory: memory };
		      }),
		      demuxer: (0, _SortedDemuxer2.default)('memory', 'value')
		    },
		    connections: [['in.memory', 'memory'], ['in.value', 'mapper'], ['mapper', 'out'], ['in', 'demuxer'], ['demuxer.memory', 'memory'], ['demuxer.value', 'mapper']]
		  });
		};
		
		exports.default = Memorizer;
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Chain = __webpack_require__(9);
		
		var _Chain2 = _interopRequireDefault(_Chain);
		
		var _Mapper = __webpack_require__(3);
		
		var _Mapper2 = _interopRequireDefault(_Mapper);
		
		var _Serializer = __webpack_require__(10);
		
		var _Serializer2 = _interopRequireDefault(_Serializer);
		
		var _Demuxer = __webpack_require__(11);
		
		var _Demuxer2 = _interopRequireDefault(_Demuxer);
		
		var _utils = __webpack_require__(2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var SortedDemuxer = function SortedDemuxer() {
		  for (var _len = arguments.length, outputs = Array(_len), _key = 0; _key < _len; _key++) {
		    outputs[_key] = arguments[_key];
		  }
		
		  return (0, _Chain2.default)((0, _Mapper2.default)(function (obj) {
		    return outputs.map(function (k) {
		      return [k, obj[k]];
		    });
		  }), (0, _Serializer2.default)(), (0, _Mapper2.default)(_utils.pairToObject), _Demuxer2.default.apply(undefined, outputs));
		};
		
		exports.default = SortedDemuxer;
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		// Chain takes a list of Components and chains the inputs to the outputs.
		var Chain = function Chain() {
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
		
		  return (0, _Component2.default)({ components: components, connections: connections, inputs: inputs, outputs: outputs });
		};
		
		exports.default = Chain;
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Serializer = function Serializer() {
		  return (0, _Component2.default)(function (iterable, next) {
		    if (iterable[Symbol.iterator]) {
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
		    }
		  });
		};
		
		exports.default = Serializer;
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		var _utils = __webpack_require__(2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Demuxer = function Demuxer() {
		  for (var _len = arguments.length, outputs = Array(_len), _key = 0; _key < _len; _key++) {
		    outputs[_key] = arguments[_key];
		  }
		
		  return (0, _Component2.default)({
		    components: outputs.reduce(function (acc, output) {
		      acc[output] = (0, _Component2.default)(function (v, next) {
		        if (v[output] !== undefined) next(v[output]);
		      });
		      return acc;
		    }, {}),
		    outputs: outputs,
		    connections: (0, _utils.flatten)(outputs.map(function (out) {
		      return [['in', out], [out, 'out.' + out]];
		    })).concat([['in', 'out']])
		  });
		};
		
		exports.default = Demuxer;
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		var _Mapper = __webpack_require__(3);
		
		var _Mapper2 = _interopRequireDefault(_Mapper);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		var Hub = function Hub() {
		  for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
		    inputs[_key] = arguments[_key];
		  }
		
		  var components = {};
		  var connections = [];
		
		  inputs.forEach(function (i) {
		    components[i] = (0, _Mapper2.default)(function (v) {
		      return _defineProperty({}, i, v);
		    });
		    connections.push(['in.' + i, i], [i, 'out'], ['in', 'out']);
		  });
		
		  return (0, _Component2.default)({ components: components, connections: connections, inputs: inputs });
		};
		
		exports.default = Hub;
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Chain = __webpack_require__(9);
		
		var _Chain2 = _interopRequireDefault(_Chain);
		
		var _Hub = __webpack_require__(12);
		
		var _Hub2 = _interopRequireDefault(_Hub);
		
		var _Accumulator = __webpack_require__(6);
		
		var _Accumulator2 = _interopRequireDefault(_Accumulator);
		
		var _Filter = __webpack_require__(4);
		
		var _Filter2 = _interopRequireDefault(_Filter);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Muxer = function Muxer() {
		  for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
		    inputs[_key] = arguments[_key];
		  }
		
		  return (0, _Chain2.default)(_Hub2.default.apply(undefined, inputs), (0, _Accumulator2.default)(), (0, _Filter2.default)(function (v) {
		    return inputs.every(function (i) {
		      return v[i] !== undefined;
		    });
		  }));
		};
		
		exports.default = Muxer;
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Iterator = function Iterator(iterable) {
		  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
		      _ref$cyclic = _ref.cyclic,
		      cyclic = _ref$cyclic === undefined ? false : _ref$cyclic;
		
		  var iterator = iterable[Symbol.iterator]();
		
		  return (0, _Component2.default)(function (v, next) {
		    var _iterator$next = iterator.next(),
		        value = _iterator$next.value,
		        done = _iterator$next.done;
		
		    if (done && cyclic) {
		      iterator = iterable[Symbol.iterator]();
		      var _iterator$next2 = iterator.next();
		
		      value = _iterator$next2.value;
		      done = _iterator$next2.done;
		    }
		
		    if (!done) next(value);
		  });
		};
		
		exports.default = Iterator;
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Chain = __webpack_require__(9);
		
		var _Chain2 = _interopRequireDefault(_Chain);
		
		var _Mapper = __webpack_require__(3);
		
		var _Mapper2 = _interopRequireDefault(_Mapper);
		
		var _Serializer = __webpack_require__(10);
		
		var _Serializer2 = _interopRequireDefault(_Serializer);
		
		var _utils = __webpack_require__(2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var ArraySerializer = function ArraySerializer() {
		  return (0, _Chain2.default)((0, _Mapper2.default)(_utils.toArray), (0, _Serializer2.default)());
		};
		
		exports.default = ArraySerializer;
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Repeater = function Repeater(times) {
		  return (0, _Component2.default)(function (v, next) {
		    for (var i = 1; i <= times; i++) {
		      next(v);
		    }
		  });
		};
		
		exports.default = Repeater;
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var UniqueFilter = function UniqueFilter(initialValue) {
		  var lastValue = initialValue;
		
		  return (0, _Component2.default)(function (v, next) {
		    if (v !== lastValue) {
		      lastValue = v;
		      next(v);
		    }
		  });
		};
		
		exports.default = UniqueFilter;
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Logger = function Logger() {
		  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		      prefix = _ref.prefix,
		      _ref$log = _ref.log,
		      log = _ref$log === undefined ? console.log : _ref$log;
		
		  return (0, _Component2.default)(function (v, next) {
		    if (prefix === undefined) {
		      log(v);
		    } else {
		      log(prefix, v);
		    }
		    next(v);
		  });
		};
		
		exports.default = Logger;
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Chain = __webpack_require__(9);
		
		var _Chain2 = _interopRequireDefault(_Chain);
		
		var _Mapper = __webpack_require__(3);
		
		var _Mapper2 = _interopRequireDefault(_Mapper);
		
		var _Demuxer = __webpack_require__(11);
		
		var _Demuxer2 = _interopRequireDefault(_Demuxer);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Checker = function Checker(cond) {
		  return (0, _Chain2.default)((0, _Mapper2.default)(function (v) {
		    return cond(v) ? { true: v } : { false: v };
		  }), (0, _Demuxer2.default)('true', 'false'));
		};
		
		exports.default = Checker;
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		var _Chain = __webpack_require__(9);
		
		var _Chain2 = _interopRequireDefault(_Chain);
		
		var _Demuxer = __webpack_require__(11);
		
		var _Demuxer2 = _interopRequireDefault(_Demuxer);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		var Guard = function Guard(conds) {
		  return (0, _Chain2.default)((0, _Component2.default)(function (v, next) {
		    Object.entries(conds).forEach(function (_ref) {
		      var _ref2 = _slicedToArray(_ref, 2),
		          name = _ref2[0],
		          cond = _ref2[1];
		
		      var others = [];
		      var match = false;
		
		      if (cond === 'otherwise') {
		        others.push(name);
		      } else if (typeof cond === 'function' && cond(v)) {
		        next(_defineProperty({}, name, v));
		        match = true;
		      }
		
		      if (!match) others.forEach(function (name) {
		        return next(_defineProperty({}, name, v));
		      });
		    });
		  }), _Demuxer2.default.apply(undefined, _toConsumableArray(Object.keys(conds))));
		};
		
		exports.default = Guard;
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Mapper = __webpack_require__(3);
		
		var _Mapper2 = _interopRequireDefault(_Mapper);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Identity = function Identity() {
		  return (0, _Mapper2.default)(function (v) {
		    return v;
		  });
		};
		
		exports.default = Identity;
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Delayer = function Delayer(ms) {
		  return (0, _Component2.default)(function (v, next) {
		    setTimeout(function () {
		      return next(v);
		    }, ms);
		  });
		};
		
		exports.default = Delayer;
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _Component = __webpack_require__(1);
		
		var _Component2 = _interopRequireDefault(_Component);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Ticker = function Ticker(ms) {
		  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
		      _ref$value = _ref.value,
		      value = _ref$value === undefined ? {} : _ref$value,
		      _ref$initialDelay = _ref.initialDelay,
		      initialDelay = _ref$initialDelay === undefined ? false : _ref$initialDelay;
		
		  return (0, _Component2.default)(function (v, next) {
		    if (!initialDelay) next(value);
		    setInterval(function () {
		      return next(value);
		    }, ms);
		  });
		};
		
		exports.default = Ticker;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=graflow.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var vnode_1 = __webpack_require__(6);
	var is = __webpack_require__(7);
	var htmldomapi_1 = __webpack_require__(8);
	function isUndef(s) { return s === undefined; }
	function isDef(s) { return s !== undefined; }
	var emptyNode = vnode_1.default('', {}, [], undefined, undefined);
	function sameVnode(vnode1, vnode2) {
	    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
	}
	function isVnode(vnode) {
	    return vnode.sel !== undefined;
	}
	function createKeyToOldIdx(children, beginIdx, endIdx) {
	    var i, map = {}, key, ch;
	    for (i = beginIdx; i <= endIdx; ++i) {
	        ch = children[i];
	        if (ch != null) {
	            key = ch.key;
	            if (key !== undefined)
	                map[key] = i;
	        }
	    }
	    return map;
	}
	var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
	var h_1 = __webpack_require__(9);
	exports.h = h_1.h;
	var thunk_1 = __webpack_require__(10);
	exports.thunk = thunk_1.thunk;
	function init(modules, domApi) {
	    var i, j, cbs = {};
	    var api = domApi !== undefined ? domApi : htmldomapi_1.default;
	    for (i = 0; i < hooks.length; ++i) {
	        cbs[hooks[i]] = [];
	        for (j = 0; j < modules.length; ++j) {
	            var hook = modules[j][hooks[i]];
	            if (hook !== undefined) {
	                cbs[hooks[i]].push(hook);
	            }
	        }
	    }
	    function emptyNodeAt(elm) {
	        var id = elm.id ? '#' + elm.id : '';
	        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
	        return vnode_1.default(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
	    }
	    function createRmCb(childElm, listeners) {
	        return function rmCb() {
	            if (--listeners === 0) {
	                var parent_1 = api.parentNode(childElm);
	                api.removeChild(parent_1, childElm);
	            }
	        };
	    }
	    function createElm(vnode, insertedVnodeQueue) {
	        var i, data = vnode.data;
	        if (data !== undefined) {
	            if (isDef(i = data.hook) && isDef(i = i.init)) {
	                i(vnode);
	                data = vnode.data;
	            }
	        }
	        var children = vnode.children, sel = vnode.sel;
	        if (sel === '!') {
	            if (isUndef(vnode.text)) {
	                vnode.text = '';
	            }
	            vnode.elm = api.createComment(vnode.text);
	        }
	        else if (sel !== undefined) {
	            // Parse selector
	            var hashIdx = sel.indexOf('#');
	            var dotIdx = sel.indexOf('.', hashIdx);
	            var hash = hashIdx > 0 ? hashIdx : sel.length;
	            var dot = dotIdx > 0 ? dotIdx : sel.length;
	            var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
	            var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
	                : api.createElement(tag);
	            if (hash < dot)
	                elm.id = sel.slice(hash + 1, dot);
	            if (dotIdx > 0)
	                elm.className = sel.slice(dot + 1).replace(/\./g, ' ');
	            if (is.array(children)) {
	                for (i = 0; i < children.length; ++i) {
	                    var ch = children[i];
	                    if (ch != null) {
	                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));
	                    }
	                }
	            }
	            else if (is.primitive(vnode.text)) {
	                api.appendChild(elm, api.createTextNode(vnode.text));
	            }
	            for (i = 0; i < cbs.create.length; ++i)
	                cbs.create[i](emptyNode, vnode);
	            i = vnode.data.hook; // Reuse variable
	            if (isDef(i)) {
	                if (i.create)
	                    i.create(emptyNode, vnode);
	                if (i.insert)
	                    insertedVnodeQueue.push(vnode);
	            }
	        }
	        else {
	            vnode.elm = api.createTextNode(vnode.text);
	        }
	        return vnode.elm;
	    }
	    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	        for (; startIdx <= endIdx; ++startIdx) {
	            var ch = vnodes[startIdx];
	            if (ch != null) {
	                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
	            }
	        }
	    }
	    function invokeDestroyHook(vnode) {
	        var i, j, data = vnode.data;
	        if (data !== undefined) {
	            if (isDef(i = data.hook) && isDef(i = i.destroy))
	                i(vnode);
	            for (i = 0; i < cbs.destroy.length; ++i)
	                cbs.destroy[i](vnode);
	            if (vnode.children !== undefined) {
	                for (j = 0; j < vnode.children.length; ++j) {
	                    i = vnode.children[j];
	                    if (i != null && typeof i !== "string") {
	                        invokeDestroyHook(i);
	                    }
	                }
	            }
	        }
	    }
	    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
	        for (; startIdx <= endIdx; ++startIdx) {
	            var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];
	            if (ch != null) {
	                if (isDef(ch.sel)) {
	                    invokeDestroyHook(ch);
	                    listeners = cbs.remove.length + 1;
	                    rm = createRmCb(ch.elm, listeners);
	                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
	                        cbs.remove[i_1](ch, rm);
	                    if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
	                        i_1(ch, rm);
	                    }
	                    else {
	                        rm();
	                    }
	                }
	                else {
	                    api.removeChild(parentElm, ch.elm);
	                }
	            }
	        }
	    }
	    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
	        var oldStartIdx = 0, newStartIdx = 0;
	        var oldEndIdx = oldCh.length - 1;
	        var oldStartVnode = oldCh[0];
	        var oldEndVnode = oldCh[oldEndIdx];
	        var newEndIdx = newCh.length - 1;
	        var newStartVnode = newCh[0];
	        var newEndVnode = newCh[newEndIdx];
	        var oldKeyToIdx;
	        var idxInOld;
	        var elmToMove;
	        var before;
	        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	            if (oldStartVnode == null) {
	                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
	            }
	            else if (oldEndVnode == null) {
	                oldEndVnode = oldCh[--oldEndIdx];
	            }
	            else if (newStartVnode == null) {
	                newStartVnode = newCh[++newStartIdx];
	            }
	            else if (newEndVnode == null) {
	                newEndVnode = newCh[--newEndIdx];
	            }
	            else if (sameVnode(oldStartVnode, newStartVnode)) {
	                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	                oldStartVnode = oldCh[++oldStartIdx];
	                newStartVnode = newCh[++newStartIdx];
	            }
	            else if (sameVnode(oldEndVnode, newEndVnode)) {
	                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	                oldEndVnode = oldCh[--oldEndIdx];
	                newEndVnode = newCh[--newEndIdx];
	            }
	            else if (sameVnode(oldStartVnode, newEndVnode)) {
	                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
	                oldStartVnode = oldCh[++oldStartIdx];
	                newEndVnode = newCh[--newEndIdx];
	            }
	            else if (sameVnode(oldEndVnode, newStartVnode)) {
	                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	                oldEndVnode = oldCh[--oldEndIdx];
	                newStartVnode = newCh[++newStartIdx];
	            }
	            else {
	                if (oldKeyToIdx === undefined) {
	                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
	                }
	                idxInOld = oldKeyToIdx[newStartVnode.key];
	                if (isUndef(idxInOld)) {
	                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	                    newStartVnode = newCh[++newStartIdx];
	                }
	                else {
	                    elmToMove = oldCh[idxInOld];
	                    if (elmToMove.sel !== newStartVnode.sel) {
	                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	                    }
	                    else {
	                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	                        oldCh[idxInOld] = undefined;
	                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
	                    }
	                    newStartVnode = newCh[++newStartIdx];
	                }
	            }
	        }
	        if (oldStartIdx > oldEndIdx) {
	            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
	            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	        }
	        else if (newStartIdx > newEndIdx) {
	            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	        }
	    }
	    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
	        var i, hook;
	        if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
	            i(oldVnode, vnode);
	        }
	        var elm = vnode.elm = oldVnode.elm;
	        var oldCh = oldVnode.children;
	        var ch = vnode.children;
	        if (oldVnode === vnode)
	            return;
	        if (vnode.data !== undefined) {
	            for (i = 0; i < cbs.update.length; ++i)
	                cbs.update[i](oldVnode, vnode);
	            i = vnode.data.hook;
	            if (isDef(i) && isDef(i = i.update))
	                i(oldVnode, vnode);
	        }
	        if (isUndef(vnode.text)) {
	            if (isDef(oldCh) && isDef(ch)) {
	                if (oldCh !== ch)
	                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
	            }
	            else if (isDef(ch)) {
	                if (isDef(oldVnode.text))
	                    api.setTextContent(elm, '');
	                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	            }
	            else if (isDef(oldCh)) {
	                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	            }
	            else if (isDef(oldVnode.text)) {
	                api.setTextContent(elm, '');
	            }
	        }
	        else if (oldVnode.text !== vnode.text) {
	            api.setTextContent(elm, vnode.text);
	        }
	        if (isDef(hook) && isDef(i = hook.postpatch)) {
	            i(oldVnode, vnode);
	        }
	    }
	    return function patch(oldVnode, vnode) {
	        var i, elm, parent;
	        var insertedVnodeQueue = [];
	        for (i = 0; i < cbs.pre.length; ++i)
	            cbs.pre[i]();
	        if (!isVnode(oldVnode)) {
	            oldVnode = emptyNodeAt(oldVnode);
	        }
	        if (sameVnode(oldVnode, vnode)) {
	            patchVnode(oldVnode, vnode, insertedVnodeQueue);
	        }
	        else {
	            elm = oldVnode.elm;
	            parent = api.parentNode(elm);
	            createElm(vnode, insertedVnodeQueue);
	            if (parent !== null) {
	                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
	                removeVnodes(parent, [oldVnode], 0, 0);
	            }
	        }
	        for (i = 0; i < insertedVnodeQueue.length; ++i) {
	            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
	        }
	        for (i = 0; i < cbs.post.length; ++i)
	            cbs.post[i]();
	        return vnode;
	    };
	}
	exports.init = init;
	//# sourceMappingURL=snabbdom.js.map

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	function vnode(sel, data, children, text, elm) {
	    var key = data === undefined ? undefined : data.key;
	    return { sel: sel, data: data, children: children,
	        text: text, elm: elm, key: key };
	}
	exports.vnode = vnode;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = vnode;
	//# sourceMappingURL=vnode.js.map

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	exports.array = Array.isArray;
	function primitive(s) {
	    return typeof s === 'string' || typeof s === 'number';
	}
	exports.primitive = primitive;
	//# sourceMappingURL=is.js.map

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	function createElement(tagName) {
	    return document.createElement(tagName);
	}
	function createElementNS(namespaceURI, qualifiedName) {
	    return document.createElementNS(namespaceURI, qualifiedName);
	}
	function createTextNode(text) {
	    return document.createTextNode(text);
	}
	function createComment(text) {
	    return document.createComment(text);
	}
	function insertBefore(parentNode, newNode, referenceNode) {
	    parentNode.insertBefore(newNode, referenceNode);
	}
	function removeChild(node, child) {
	    node.removeChild(child);
	}
	function appendChild(node, child) {
	    node.appendChild(child);
	}
	function parentNode(node) {
	    return node.parentNode;
	}
	function nextSibling(node) {
	    return node.nextSibling;
	}
	function tagName(elm) {
	    return elm.tagName;
	}
	function setTextContent(node, text) {
	    node.textContent = text;
	}
	function getTextContent(node) {
	    return node.textContent;
	}
	function isElement(node) {
	    return node.nodeType === 1;
	}
	function isText(node) {
	    return node.nodeType === 3;
	}
	function isComment(node) {
	    return node.nodeType === 8;
	}
	exports.htmlDomApi = {
	    createElement: createElement,
	    createElementNS: createElementNS,
	    createTextNode: createTextNode,
	    createComment: createComment,
	    insertBefore: insertBefore,
	    removeChild: removeChild,
	    appendChild: appendChild,
	    parentNode: parentNode,
	    nextSibling: nextSibling,
	    tagName: tagName,
	    setTextContent: setTextContent,
	    getTextContent: getTextContent,
	    isElement: isElement,
	    isText: isText,
	    isComment: isComment,
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.htmlDomApi;
	//# sourceMappingURL=htmldomapi.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var vnode_1 = __webpack_require__(6);
	var is = __webpack_require__(7);
	function addNS(data, children, sel) {
	    data.ns = 'http://www.w3.org/2000/svg';
	    if (sel !== 'foreignObject' && children !== undefined) {
	        for (var i = 0; i < children.length; ++i) {
	            var childData = children[i].data;
	            if (childData !== undefined) {
	                addNS(childData, children[i].children, children[i].sel);
	            }
	        }
	    }
	}
	function h(sel, b, c) {
	    var data = {}, children, text, i;
	    if (c !== undefined) {
	        data = b;
	        if (is.array(c)) {
	            children = c;
	        }
	        else if (is.primitive(c)) {
	            text = c;
	        }
	        else if (c && c.sel) {
	            children = [c];
	        }
	    }
	    else if (b !== undefined) {
	        if (is.array(b)) {
	            children = b;
	        }
	        else if (is.primitive(b)) {
	            text = b;
	        }
	        else if (b && b.sel) {
	            children = [b];
	        }
	        else {
	            data = b;
	        }
	    }
	    if (is.array(children)) {
	        for (i = 0; i < children.length; ++i) {
	            if (is.primitive(children[i]))
	                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i]);
	        }
	    }
	    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
	        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
	        addNS(data, children, sel);
	    }
	    return vnode_1.vnode(sel, data, children, text, undefined);
	}
	exports.h = h;
	;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = h;
	//# sourceMappingURL=h.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var h_1 = __webpack_require__(9);
	function copyToThunk(vnode, thunk) {
	    thunk.elm = vnode.elm;
	    vnode.data.fn = thunk.data.fn;
	    vnode.data.args = thunk.data.args;
	    thunk.data = vnode.data;
	    thunk.children = vnode.children;
	    thunk.text = vnode.text;
	    thunk.elm = vnode.elm;
	}
	function init(thunk) {
	    var cur = thunk.data;
	    var vnode = cur.fn.apply(undefined, cur.args);
	    copyToThunk(vnode, thunk);
	}
	function prepatch(oldVnode, thunk) {
	    var i, old = oldVnode.data, cur = thunk.data;
	    var oldArgs = old.args, args = cur.args;
	    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
	        copyToThunk(cur.fn.apply(undefined, args), thunk);
	    }
	    for (i = 0; i < args.length; ++i) {
	        if (oldArgs[i] !== args[i]) {
	            copyToThunk(cur.fn.apply(undefined, args), thunk);
	            return;
	        }
	    }
	    copyToThunk(oldVnode, thunk);
	}
	exports.thunk = function thunk(sel, key, fn, args) {
	    if (args === undefined) {
	        args = fn;
	        fn = key;
	        key = undefined;
	    }
	    return h_1.h(sel, {
	        key: key,
	        hook: { init: init, prepatch: prepatch },
	        fn: fn,
	        args: args
	    });
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.thunk;
	//# sourceMappingURL=thunk.js.map

/***/ }
/******/ ])
});
;
//# sourceMappingURL=app.js.map