module.exports =
/******/ (function(modules) { // webpackBootstrap
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
	exports.defaultValidators = exports.SmartForm = undefined;
	
	var _SmartForm = __webpack_require__(1);
	
	var _SmartForm2 = _interopRequireDefault(_SmartForm);
	
	var _defaultValidators = __webpack_require__(13);
	
	var _defaultValidators2 = _interopRequireDefault(_defaultValidators);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.SmartForm = _SmartForm2.default;
	exports.defaultValidators = _defaultValidators2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	// $FlowFixMe
	
	// $FlowFixMe
	
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DefaultIteratorComponent = __webpack_require__(3);
	
	var _DefaultIteratorComponent2 = _interopRequireDefault(_DefaultIteratorComponent);
	
	var _DefaultFieldComponent = __webpack_require__(4);
	
	var _DefaultFieldComponent2 = _interopRequireDefault(_DefaultFieldComponent);
	
	var _defaultValidators = __webpack_require__(13);
	
	var _defaultValidators2 = _interopRequireDefault(_defaultValidators);
	
	var _mapValues = __webpack_require__(5);
	
	var _mapValues2 = _interopRequireDefault(_mapValues);
	
	var _keyBy = __webpack_require__(6);
	
	var _keyBy2 = _interopRequireDefault(_keyBy);
	
	var _get = __webpack_require__(7);
	
	var _get2 = _interopRequireDefault(_get);
	
	var _getResultOfValidationRule = __webpack_require__(8);
	
	var _getResultOfValidationRule2 = _interopRequireDefault(_getResultOfValidationRule);
	
	var _reactRedux = __webpack_require__(9);
	
	var _reduxForm = __webpack_require__(10);
	
	var _resolveCondition = __webpack_require__(11);
	
	var _resolveCondition2 = _interopRequireDefault(_resolveCondition);
	
	var _resolveValue = __webpack_require__(12);
	
	var _resolveValue2 = _interopRequireDefault(_resolveValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return { wholeFormState: state.form };
	})((_temp = _class = function (_Component) {
	  _inherits(SmartForm, _Component);
	
	  function SmartForm(props) {
	    _classCallCheck(this, SmartForm);
	
	    var _this = _possibleConstructorReturn(this, (SmartForm.__proto__ || Object.getPrototypeOf(SmartForm)).call(this, props));
	
	    _this.state = {
	      enabledDisabledMap: {}
	    };
	
	    // @todo: This is a hack. Remove it, and use context types instead :)
	    _this._enabledDisabledMap = {};
	
	    // $FlowFixMe
	    _this.validateSynchronously = _this.validateSynchronously.bind(_this);
	
	    // $FlowFixMe
	    _this.renderField = _this.renderField.bind(_this);
	    return _this;
	  }
	
	  _createClass(SmartForm, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.recalculateState();
	    }
	  }, {
	    key: 'recalculateState',
	    value: function recalculateState() {
	      var _this2 = this;
	
	      var template = this.props.formTemplate;
	      var listOfEnabledDisabledFlags = template.listOfFieldNames.map(function (fieldName) {
	        return {
	          fieldName: fieldName,
	          isEnabled: _this2.calculateIfFieldIsEnabled(fieldName)
	        };
	      });
	
	      var enabledDisabledMap = (0, _mapValues2.default)((0, _keyBy2.default)(listOfEnabledDisabledFlags, 'fieldName'), 'isEnabled');
	
	      this._enabledDisabledMap = enabledDisabledMap;
	      this.setState({ enabledDisabledMap: enabledDisabledMap });
	    }
	  }, {
	    key: 'validateSynchronously',
	    value: function validateSynchronously() {
	      var _this3 = this;
	
	      this.recalculateState();
	      var template = this.props.formTemplate;
	      var listOfValidationMessages = template.listOfFieldNames.map(function (fieldName) {
	        return {
	          fieldName: fieldName,
	          message: _this3.getValidationMessageForField(fieldName)
	        };
	      }).filter(function (_ref) {
	        var message = _ref.message;
	        return typeof message === 'string' && message.length > 0;
	      });
	
	      var validationMessages = (0, _mapValues2.default)((0, _keyBy2.default)(listOfValidationMessages, 'fieldName'), 'message');
	
	      return validationMessages;
	    }
	  }, {
	    key: 'getValidationMessageForField',
	    value: function getValidationMessageForField(fieldName) {
	      var formTemplate = this.props.formTemplate;
	      var fieldTemplate = formTemplate.fieldsByName[fieldName];
	      var isEnabled = this.isFieldEnabled(fieldName);
	      var values = this.getValuesOfCurrentForm();
	      var currentValue = values[fieldName];
	      var validationMeta = (0, _get2.default)(fieldTemplate, ['meta', 'validation']);
	      var context = this.getValidationContext();
	
	      if ((typeof validationMeta === 'undefined' ? 'undefined' : _typeof(validationMeta)) !== 'object' || !Array.isArray(validationMeta.validationRules)) {
	        return;
	      }
	
	      var messages = validationMeta.validationRules.map(function (validationRule) {
	        return (0, _getResultOfValidationRule2.default)(validationRule, _extends({}, context, { currentValue: currentValue, isEnabled: isEnabled }));
	      }).filter(function (possibleMessage) {
	        return typeof possibleMessage === 'string';
	      });
	
	      if (messages.length > 0) {
	        return messages.join(', ');
	      } else {
	        return;
	      }
	    }
	  }, {
	    key: 'isFieldEnabled',
	    value: function isFieldEnabled(fieldName) {
	      return this._enabledDisabledMap[fieldName] !== false;
	    }
	  }, {
	    key: 'calculateIfFieldIsEnabled',
	    value: function calculateIfFieldIsEnabled(fieldName) {
	      var values = this.getValuesOfCurrentForm();
	      var formTemplate = this.props.formTemplate;
	      var fieldTemplate = formTemplate.fieldsByName[fieldName];
	      var value = values[fieldName];
	      var enabledIfCondition = (0, _get2.default)(fieldTemplate, ['meta', 'enabledIf']);
	      if (enabledIfCondition === undefined) {
	        return true;
	      } else {
	        return (0, _resolveCondition2.default)(enabledIfCondition, value, this.getValidationContext());
	      }
	    }
	  }, {
	    key: 'getValidationContext',
	    value: function getValidationContext() {
	      return {
	        allValidators: this.props.validators,
	        allValues: this.getValuesOfCurrentForm(),
	        resolveCondition: _resolveCondition2.default, resolveValue: _resolveValue2.default
	      };
	    }
	  }, {
	    key: 'getValueOfField',
	    value: function getValueOfField(fieldName) {
	      return (0, _get2.default)(this.getValuesOfCurrentForm(), fieldName);
	    }
	  }, {
	    key: 'getValuesOfForm',
	    value: function getValuesOfForm(formName) {
	      return (0, _get2.default)(this.props.wholeFormState, [formName, 'values']) || {};
	    }
	  }, {
	    key: 'getValuesOfCurrentForm',
	    value: function getValuesOfCurrentForm() {
	      return this.getValuesOfForm(this.props.formId);
	    }
	  }, {
	    key: 'renderField',
	    value: function renderField(fieldName) {
	      var _props = this.props;
	      var fieldComponent = _props.fieldComponent;
	      var formTemplate = _props.formTemplate;
	
	      var fieldTemplate = formTemplate.fieldsByName[fieldName];
	      if (!fieldTemplate) {
	        throw new Error('Unkown field \'' + fieldName + '\'');
	      }
	      var fieldComponentProps = {
	        fieldTemplate: fieldTemplate,
	        isEnabled: this.isFieldEnabled(fieldName)
	      };
	      return _react2.default.createElement(_reduxForm.Field, { key: 'field-' + fieldName, component: fieldComponent, name: fieldName, props: fieldComponentProps });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	
	      var TheIteratorComponent = props.iteratorComponent;
	
	      return _react2.default.createElement(
	        FormComponent,
	        _extends({ key: 'form' }, props.reduxFormProps, { keepDirtyOnReinitialize: true, form: props.formId, validate: this.validateSynchronously }),
	        _react2.default.createElement(TheIteratorComponent, { key: 'iterator', formTemplate: this.props.formTemplate, renderField: this.renderField, _smartFormState: this.state })
	      );
	    }
	  }]);
	
	  return SmartForm;
	}(_react.Component), _class.defaultProps = {
	  reduxFormProps: {},
	  iteratorComponent: _DefaultIteratorComponent2.default,
	  fieldComponent: _DefaultFieldComponent2.default,
	  validators: _defaultValidators2.default
	}, _temp));
	
	
	var FormComponent = (0, _reduxForm.reduxForm)()(function (_ref2) {
	  var children = _ref2.children;
	  return children;
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var formTemplate = _ref.formTemplate;
	  var renderField = _ref.renderField;
	  return _react2.default.createElement(
	    'div',
	    { key: 'container' },
	    formTemplate.listOfFieldNames.map(function (fieldName) {
	      return renderField(fieldName);
	    })
	  );
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DefaultFieldComponent = function (_Component) {
	  _inherits(DefaultFieldComponent, _Component);
	
	  function DefaultFieldComponent(props) {
	    _classCallCheck(this, DefaultFieldComponent);
	
	    return _possibleConstructorReturn(this, (DefaultFieldComponent.__proto__ || Object.getPrototypeOf(DefaultFieldComponent)).call(this, props));
	  }
	
	  _createClass(DefaultFieldComponent, [{
	    key: 'render',
	    value: function render() {
	      console.warn('Unimplemented');
	      return _react2.default.createElement(
	        'div',
	        null,
	        'Field here'
	      );
	    }
	  }]);
	
	  return DefaultFieldComponent;
	}(_react.Component);
	
	exports.default = DefaultFieldComponent;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("lodash/mapValues");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("lodash/keyBy");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("lodash/get");

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getResultOfValidationRule;
	function getResultOfValidationRule(rule, props) {
	  var type = typeof rule === 'string' ? rule : rule.type;
	  var validator = props.allValidators[type];
	  if (validator) {
	    return validator(rule, props);
	  } else {
	    throw new Error('Unkown validator type \'' + type + '\'');
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("redux-form");

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = resolveCondition;
	function resolveCondition(condition, currentValue, context) {
	  var resolveValue = context.resolveValue;
	
	  if (typeof condition === 'boolean') {
	    return condition;
	  }
	
	  if ((typeof condition === 'undefined' ? 'undefined' : _typeof(condition)) === 'object' && condition.type === 'Op') {
	    var leftValue = resolveValue(condition.leftValue, currentValue, context);
	    var rightValue = resolveValue(condition.rightValue, currentValue, context);
	
	    return condition.op === '>' ? parseFloat(leftValue) > parseFloat(rightValue) : condition.op === '>=' ? parseFloat(leftValue) >= parseFloat(rightValue) : condition.op === '==' ? leftValue === rightValue : condition.op === '!=' ? leftValue !== rightValue : condition.op === '<' ? parseFloat(leftValue) < parseFloat(rightValue) : condition.op === '<=' ? parseFloat(leftValue) <= parseFloat(rightValue) : true;
	  } else {
	    throw new Error('Invalid condition object ' + condition);
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = resolveValue;
	function resolveValue(descriptor, currentValue, context) {
	  if (['string', 'boolean', 'number'].indexOf(typeof descriptor === 'undefined' ? 'undefined' : _typeof(descriptor)) !== -1 || Array.isArray(descriptor)) {
	    return descriptor;
	  }
	
	  var allValues = context.allValues;
	
	
	  if ((typeof descriptor === 'undefined' ? 'undefined' : _typeof(descriptor)) === 'object' && descriptor.type === 'Reference') {
	    var path = descriptor.path;
	
	    if (path[0] === '$currentValue' && path.length === 1) {
	      return currentValue;
	    } else if (path[0] === '$currentForm' && path.length === 2) {
	      return allValues[path[1]];
	    } else {
	      throw new Error('Invalid reference path ' + JSON.stringify(path));
	    }
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _validateRequired = __webpack_require__(14);
	
	var _validateRequired2 = _interopRequireDefault(_validateRequired);
	
	var _validateRequiredIf = __webpack_require__(15);
	
	var _validateRequiredIf2 = _interopRequireDefault(_validateRequiredIf);
	
	var _validateRequiredIfEnabled = __webpack_require__(16);
	
	var _validateRequiredIfEnabled2 = _interopRequireDefault(_validateRequiredIfEnabled);
	
	var _validateConditionIsMet = __webpack_require__(17);
	
	var _validateConditionIsMet2 = _interopRequireDefault(_validateConditionIsMet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { Required: _validateRequired2.default, RequiredIf: _validateRequiredIf2.default, RequiredIfEnabled: _validateRequiredIfEnabled2.default, ConditionIsMet: _validateConditionIsMet2.default };

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateRequired;
	function validateRequired(rule, _ref) {
	  var currentValue = _ref.currentValue;
	
	  var hasValue = !(currentValue == null || currentValue == undefined || typeof currentValue === 'string' && currentValue.trim().length === 0);
	
	  return hasValue ? undefined : rule.message;
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateRequiredIf;
	function validateRequiredIf(rule, props) {
	  var currentValue = props.currentValue;
	  var resolveCondition = props.resolveCondition;
	
	  var hasValue = !(currentValue == null || currentValue == undefined || typeof currentValue === 'string' && currentValue.trim().length === 0);
	
	  return !hasValue && resolveCondition(rule.condition, currentValue, props) ? rule.message : undefined;
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateRequiredIfEnabled;
	function validateRequiredIfEnabled(rule, _ref) {
	  var currentValue = _ref.currentValue;
	  var isEnabled = _ref.isEnabled;
	
	  var hasValue = !(currentValue == null || currentValue == undefined || typeof currentValue === 'string' && currentValue.trim().length === 0);
	
	  return isEnabled && !hasValue ? rule.message : undefined;
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateRequiredIf;
	function validateRequiredIf(rule, props) {
	  var currentValue = props.currentValue;
	  var resolveCondition = props.resolveCondition;
	
	
	  return resolveCondition(rule.condition, currentValue, props) ? undefined : rule.message;
	}

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map