"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactMarkdown = _interopRequireDefault(require("react-markdown"));
var _rehypeRaw = _interopRequireDefault(require("rehype-raw"));
var _rehypeSanitize = _interopRequireDefault(require("rehype-sanitize"));
require("./EasyMarkdownEditor.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EasyMarkdownEditor = _ref => {
  let {
    children,
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `better-markdown ${className || ''}`
  }, /*#__PURE__*/_react.default.createElement(_reactMarkdown.default, {
    rehypePlugins: [_rehypeRaw.default, _rehypeSanitize.default],
    components: {
      h1: _ref2 => {
        let {
          node,
          ...props
        } = _ref2;
        return /*#__PURE__*/_react.default.createElement("h1", _extends({
          className: "better-markdown-h1"
        }, props));
      },
      h2: _ref3 => {
        let {
          node,
          ...props
        } = _ref3;
        return /*#__PURE__*/_react.default.createElement("h2", _extends({
          className: "better-markdown-h2"
        }, props));
      },
      p: _ref4 => {
        let {
          node,
          ...props
        } = _ref4;
        return /*#__PURE__*/_react.default.createElement("p", _extends({
          className: "better-markdown-p"
        }, props));
      },
      a: _ref5 => {
        let {
          node,
          ...props
        } = _ref5;
        return /*#__PURE__*/_react.default.createElement("a", _extends({
          className: "better-markdown-a"
        }, props));
      },
      code: _ref6 => {
        let {
          node,
          inline,
          ...props
        } = _ref6;
        return inline ? /*#__PURE__*/_react.default.createElement("code", _extends({
          className: "better-markdown-inline-code"
        }, props)) : /*#__PURE__*/_react.default.createElement("pre", {
          className: "better-markdown-code-block"
        }, /*#__PURE__*/_react.default.createElement("code", props));
      }
    }
  }, children));
};
var _default = exports.default = EasyMarkdownEditor;