# React Easy Markdown Editor

React Easy Markdown Editor 是一个简单易用的 React 组件，用于渲染和编辑 Markdown 内容。它包括两个主要组件：`EasyMarkdown` 用于渲染 Markdown，以及 `EasyMarkdownEditor` 用于编辑 Markdown。

## 安装

使用 npm 安装：

```bash
npm install react-easy-markdown
```

或使用 yarn：

```bash
yarn add react-easy-markdown
```

## 使用方法

### EasyMarkdown 组件

用于渲染 Markdown 内容：

```jsx
import React from 'react';
import { EasyMarkdown } from 'react-easy-markdown';

const MyComponent = () => {
  const markdown = '# Hello, world!\n\nThis is some **bold** text.';

  return <EasyMarkdown>{markdown}</EasyMarkdown>;
};
```

### EasyMarkdownEditor 组件

用于编辑 Markdown 内容：

```jsx
import React, { useState } from 'react';
import { EasyMarkdownEditor } from 'react-easy-markdown';

const MyEditorComponent = () => {
  const [markdown, setMarkdown] = useState('# Start writing here');

  const handleEditorChange = ({ text }) => {
    setMarkdown(text);
  };

  return (
    <EasyMarkdownEditor
      value={markdown}
      onChange={handleEditorChange}
    />
  );
};
```

## 属性

### EasyMarkdown

| 属性 | 类型 | 描述 |
|------|------|------|
| children | string | 要渲染的 Markdown 内容 |
| className | string | 可选的自定义 CSS 类名 |

### EasyMarkdownEditor

| 属性 | 类型 | 描述 |
|------|------|------|
| value | string | 编辑器的当前 Markdown 内容 |
| onChange | function | 当内容变化时调用的回调函数 |
| className | string | 可选的自定义 CSS 类名 |

## 贡献

欢迎贡献！请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解如何开始。

## 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。