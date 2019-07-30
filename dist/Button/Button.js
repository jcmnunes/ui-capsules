"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Spinner = _interopRequireDefault(require("../Spinner/Spinner"));

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getButtonColors = function getButtonColors(props) {
  var colors = {
    text: props.disabled ? '#CAD2D9' : _theme.default.neutral600,
    gradient: {
      top: _theme.default.neutral100,
      topHover: '#D7DBE0',
      bottom: _theme.default.neutral100,
      bottomHover: '#D7DBE0'
    },
    active: _theme.default.neutral200,
    disabled: '#F5F7FA'
  };

  switch (props.intent) {
    case 'primary':
      colors.text = '#FFF';
      colors.gradient.top = _theme.default.blue500;
      colors.gradient.topHover = _theme.default.blue600;
      colors.gradient.bottom = _theme.default.blue600;
      colors.gradient.bottomHover = _theme.default.blue700;
      colors.active = _theme.default.blue700;
      colors.disabled = '#A8D1EB';
      break;

    case 'error':
      colors.text = '#FFF';
      colors.gradient.top = _theme.default.red500;
      colors.gradient.topHover = _theme.default.red600;
      colors.gradient.bottom = _theme.default.red600;
      colors.gradient.bottomHover = _theme.default.red700;
      colors.active = _theme.default.red700;
      colors.disabled = '#FFBCC2';
      break;

    case 'warning':
      colors.text = '#FFF';
      colors.gradient.top = _theme.default.yellow600;
      colors.gradient.topHover = _theme.default.yellow700;
      colors.gradient.bottom = _theme.default.yellow700;
      colors.gradient.bottomHover = _theme.default.yellow800;
      colors.active = _theme.default.yellow800;
      colors.disabled = '#F4D2B5';
      break;

    case 'success':
      colors.text = '#FFF';
      colors.gradient.top = _theme.default.green500;
      colors.gradient.topHover = _theme.default.green600;
      colors.gradient.bottom = _theme.default.green600;
      colors.gradient.bottomHover = _theme.default.green700;
      colors.active = _theme.default.green700;
      colors.disabled = '#AFE1D5';
      break;

    case 'dropdown':
      colors.gradient.top = 'none';
      colors.gradient.topHover = _theme.default.neutral050;
      colors.gradient.bottom = 'none';
      colors.gradient.bottomHover = _theme.default.neutral050;
      colors.active = _theme.default.neutral100;
      colors.disabled = 'none';
      break;

    default:
      break;
  }

  return colors;
};

var getDimensions = function getDimensions(props) {
  var dimensions = {
    height: '22px',
    fontSize: '14px',
    padding: '0 4px',
    spinnerHeight: '16px'
  };

  switch (props.size) {
    case 'medium':
      dimensions.height = '32px';
      dimensions.fontSize = '16px';
      dimensions.padding = '4px 12px';
      dimensions.spinnerHeight = '18px';
      break;

    case 'large':
      dimensions.height = '48px';
      dimensions.fontSize = '18px';
      dimensions.padding = '12px 16px';
      dimensions.spinnerHeight = '24px';
      break;

    default:
      break;
  }

  return dimensions;
};

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "t1t6k0-0"
})(["position:relative;height:", ";color:", ";border-radius:4px;border:none;font-size:", ";font-family:'Source Sans Pro',Helvetica,Arial,sans-serif;padding:", ";cursor:pointer;display:flex;align-items:center;justify-content:", ";width:", ";background:", ";&::placeholder{color:", ";}&:focus{outline:none;box-shadow:", ";}&:hover{background:", ";}&:active{background:", ";}&:disabled{background:", ";cursor:not-allowed;}.content{visibility:", ";display:flex;align-items:center;.button-text{white-space:nowrap;margin-left:", ";margin-right:", ";}}.spinner{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:", ";}"], function (props) {
  return getDimensions(props).height;
}, function (props) {
  return getButtonColors(props).text;
}, function (props) {
  return getDimensions(props).fontSize;
}, function (props) {
  return getDimensions(props).padding;
}, function (props) {
  return props.intent === 'dropdown' ? 'flex-start' : 'center';
}, function (props) {
  return props.block ? '100%' : 'auto';
}, function (props) {
  return "linear-gradient(to bottom,\n    ".concat(getButtonColors(props).gradient.top, ",\n    ").concat(getButtonColors(props).gradient.bottom, "\n  )");
}, function (props) {
  return _theme.default.neutral300;
}, function (props) {
  return props.intent === 'dropdown' ? 'none' : "0 0 0 4px ".concat(_theme.default.blue100);
}, function (props) {
  return "linear-gradient(to bottom,\n      ".concat(getButtonColors(props).gradient.topHover, ",\n      ").concat(getButtonColors(props).gradient.bottomHover, "\n    )");
}, function (props) {
  return getButtonColors(props).active;
}, function (props) {
  return getButtonColors(props).disabled;
}, function (props) {
  return props.isLoading ? 'hidden' : 'visible';
}, function (props) {
  return props.iconBefore ? '8px' : 'auto';
}, function (props) {
  return props.iconAfter ? '8px' : 'auto';
}, function (props) {
  return getDimensions(props).spinnerHeight;
});

var Button = function Button(_ref) {
  var isLoading = _ref.isLoading,
      disabled = _ref.disabled,
      iconBefore = _ref.iconBefore,
      iconAfter = _ref.iconAfter,
      intent = _ref.intent,
      size = _ref.size,
      onClick = _ref.onClick,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ["isLoading", "disabled", "iconBefore", "iconAfter", "intent", "size", "onClick", "children"]);

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    if (!onClick) return;
    onClick();
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (!onClick) return;

    if (e.key === 'Enter') {
      onClick();
    }
  };

  return _react.default.createElement(StyledButton, _extends({
    disabled: disabled || isLoading,
    isLoading: isLoading,
    intent: intent,
    size: size,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    iconBefore: iconBefore,
    iconAfter: iconAfter
  }, other), isLoading && _react.default.createElement("span", {
    className: "spinner"
  }, _react.default.createElement(_Spinner.default, {
    size: size,
    intent: intent
  })), _react.default.createElement("div", {
    className: "content"
  }, iconBefore && iconBefore, children.length > 0 && _react.default.createElement("span", {
    className: "button-text"
  }, children), iconAfter && iconAfter));
};

Button.defaultProps = {
  isLoading: false,
  disabled: false,
  iconBefore: null,
  iconAfter: null,
  intent: 'secondary',
  size: 'medium',
  type: 'button',
  block: false,
  children: '',
  onClick: null
};
Button.propTypes = {
  intent: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'dropdown']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  isLoading: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  iconBefore: _propTypes.default.element,
  iconAfter: _propTypes.default.element,
  type: _propTypes.default.string,
  block: _propTypes.default.bool,
  children: _propTypes.default.node,
  onClick: _propTypes.default.func
};
var _default = Button;
exports.default = _default;