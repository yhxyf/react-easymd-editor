import React from "react";
import MdEditor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "react-markdown-editor-lite/lib/index.css";
import "./EasyMarkdownEditor.css";

const MarkdownEditor = ({ value, onChange, style, className }) => {
  const handleEditorChange = ({ text }) => {
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <MdEditor
          value={value}
          style={style}
          className={className}
          renderHTML={(text) => (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
          )}
          view={{
            menu: true,
            md: true,
            html: false,
          }}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};
export default MarkdownEditor;
