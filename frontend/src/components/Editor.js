import React from "react";
import ReactMarkdown from "react-markdown";

function Editor({ draft, setDraft, onSave, loading }) {
  return (
    <div className="editor-shell">
      <div className="editor-header">
        <div>
          <h2>Editor</h2>
          <p>Write Markdown on the left, preview updates on the right.</p>
        </div>

        <button className="save-btn" onClick={onSave} disabled={loading}>
          {loading ? "Saving..." : "Save Note"}
        </button>
      </div>

      <div className="split-grid">
        <section className="panel">
          <label className="field-label">Title</label>
          <input
            className="title-input"
            type="text"
            value={draft.title}
            onChange={(e) =>
              setDraft((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Enter note title"
          />

          <label className="field-label">Content</label>
          <textarea
            className="content-input"
            value={draft.content}
            onChange={(e) =>
              setDraft((prev) => ({ ...prev, content: e.target.value }))
            }
            placeholder={`# Write markdown here

**Bold text**

- List item
- Another item

[OpenAI](https://openai.com)

\`\`\`js
console.log("Hello")
\`\`\`
`}
          />
        </section>

        <section className="panel preview-panel">
          <h3>{draft.title || "Preview"}</h3>
          <div className="preview-content">
            <ReactMarkdown>{draft.content || "Start typing to preview..."}</ReactMarkdown>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Editor;