"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactMarkdownEditorLite = _interopRequireDefault(require("react-markdown-editor-lite"));
var _reactMarkdown = _interopRequireDefault(require("react-markdown"));
var _remarkGfm = _interopRequireDefault(require("remark-gfm"));
require("react-markdown-editor-lite/lib/index.css");
require("./EasyMarkdownEditor.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MarkdownEditor = _ref => {
  let {
    value,
    onChange,
    style,
    className
  } = _ref;
  const handleEditorChange = _ref2 => {
    let {
      text
    } = _ref2;
    if (onChange) {
      onChange(text);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement(_reactMarkdownEditorLite.default, {
    value: value,
    style: style,
    className: className,
    renderHTML: text => /*#__PURE__*/_react.default.createElement(_reactMarkdown.default, {
      remarkPlugins: [_remarkGfm.default]
    }, text),
    view: {
      menu: true,
      md: true,
      html: false
    },
    onChange: handleEditorChange
  })));
};
var _default = exports.default = MarkdownEditor;