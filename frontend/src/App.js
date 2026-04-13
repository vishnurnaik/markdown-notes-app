import React, { useEffect, useMemo, useState } from "react";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "./api";
import NotesList from "./components/NotesList";
import Editor from "./components/Editor";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [draft, setDraft] = useState({ title: "", content: "" });
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

  const handleNewNote = () => {
    setActiveNoteId(null);
    setDraft({ title: "", content: "" });
  };

  const handleSelectNote = (note) => {
    setActiveNoteId(note.id);
    setDraft({
      title: note.title || "",
      content: note.content || "",
    });
  };

  const handleSave = async () => {
    const title = draft.title.trim();
    const content = draft.content.trim();

    if (!title && !content) {
      alert("Please add title or content before saving.");
      return;
    }

    setLoading(true);
    try {
      if (activeNoteId) {
        await updateNote(activeNoteId, { title, content });
      } else {
        const res = await createNote({ title, content });
        setActiveNoteId(res.data.id);
      }

      await fetchNotes();
    } catch (error) {
      console.error(error);
      alert("Save failed. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this note?");
    if (!confirmDelete) return;

    await deleteNote(id);
    await fetchNotes();

    if (activeNoteId === id) {
      handleNewNote();
    }
  };

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
    );
  }, [notes, search]);

  return (
    <div className={dark ? "app dark" : "app"}>
      <aside className="sidebar">
        <div className="sidebar-top">
          <h2>Markdown Notes</h2>

          <div className="sidebar-actions">
            <button className="ghost-btn" onClick={() => setDark(!dark)}>
              {dark ? "☀ Light" : "🌙 Dark"}
            </button>
            <button className="primary-btn" onClick={handleNewNote}>
              + New Note
            </button>
          </div>

          <input
            className="search-input"
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <NotesList
          notes={filteredNotes}
          activeNoteId={activeNoteId}
          onSelect={handleSelectNote}
          onDelete={handleDelete}
        />
      </aside>

      <main className="editor-area">
        <Editor
          draft={draft}
          setDraft={setDraft}
          onSave={handleSave}
          loading={loading}
        />
      </main>
    </div>
  );
}

export default App;