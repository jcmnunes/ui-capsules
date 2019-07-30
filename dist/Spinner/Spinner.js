"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var getColors = function getColors(props) {
  switch (props.intent) {
    case 'primary':
    case 'success':
    case 'warning':
    case 'error':
      return {
        border: '#FFFFFF32',
        accent: '#FFF'
      };

    default:
      return {
        border: "".concat(_theme.default.neutral100),
        accent: "".concat(_theme.default.neutral200)
      };
  }
};

var spin = (0, _styledComponents.keyframes)(["100%{transform:rotate(360deg);}"]);

var Spinner = _styledComponents.default.span.withConfig({
  displayName: "Spinner",
  componentId: "ghgyil-0"
})(["display:inline-block;box-sizing:border-box;width:", ";height:", ";border-radius:100%;border:", ";border-top-color:", ";animation:", " 500ms infinite linear;"], function (props) {
  return props.size === 'large' ? '24px' : '18px';
}, function (props) {
  return props.size === 'large' ? '24px' : '18px';
}, function (props) {
  return "3px solid ".concat(getColors(props).border);
}, function (props) {
  return getColors(props).accent;
}, spin); // Spinner.defaultProps = {
//   size: 'small',
//   intent: 'neutral',
// };
//
// Spinner.propTypes = {
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   intent: PropTypes.oneOf([
//     'primary',
//     'success',
//     'warning',
//     'error',
//     'secondary',
//     'neutral',
//     'dropdown',
//   ]),
// };


var _default = Spinner;
exports.default = _default;