"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _EasyMarkdown = _interopRequireDefault(require("./EasyMarkdown"));
var _EasyMarkdownEditor = _interopRequireDefault(require("./EasyMarkdownEditor"));
require("./App.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_EasyMarkdown.default, null, `3. **加载器（loaders）**：[[webpack loader]]配置 Webpack 如何处 文件。`), /*#__PURE__*/React.createElement(_EasyMarkdownEditor.default, {
    style: {
      height: "500px"
    }
  }));
}
var _default = exports.default = App;