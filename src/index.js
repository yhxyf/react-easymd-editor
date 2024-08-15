import React from 'react';
import ReactDOM from 'react-dom/client';
import EasyMarkdown from './EasyMarkdown';
import EasyMarkdownEditor from './EasyMarkdownEditor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <EasyMarkdown>
        {`3. **加载器（loaders）**：[[webpack loader]]配置 Webpack 如何处 文件。`}
      </EasyMarkdown>

      <EasyMarkdownEditor style={{ height: "500px" }} />
    </div>
  </React.StrictMode>
);