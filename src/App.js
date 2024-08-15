import EasyMarkdown from './EasyMarkdown';
import EasyMarkdownEditor from './EasyMarkdownEditor';
import './App.css';

function App() {
  return (
    <div className="App">
      <EasyMarkdown>
        {`3. **加载器（loaders）**：[[webpack loader]]配置 Webpack 如何处 文件。`}
      </EasyMarkdown>

      <EasyMarkdownEditor style={{ height: "500px" }} />
    </div>
  );
}

export default App;
