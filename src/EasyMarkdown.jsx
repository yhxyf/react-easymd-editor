import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import './EasyMarkdownEditor.css';

const EasyMarkdownEditor = ({ children, className }) => {
  return (
    <div className={`better-markdown ${className || ''}`}>
      <ReactMarkdown 
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          h1: ({node, ...props}) => <h1 className="better-markdown-h1" {...props} />,
          h2: ({node, ...props}) => <h2 className="better-markdown-h2" {...props} />,
          p: ({node, ...props}) => <p className="better-markdown-p" {...props} />,
          a: ({node, ...props}) => <a className="better-markdown-a" {...props} />,
          code: ({node, inline, ...props}) => 
            inline 
              ? <code className="better-markdown-inline-code" {...props} />
              : <pre className="better-markdown-code-block"><code {...props} /></pre>
        }}
      >
        {children}
        
      </ReactMarkdown>
    </div>
  );
};
export default EasyMarkdownEditor;