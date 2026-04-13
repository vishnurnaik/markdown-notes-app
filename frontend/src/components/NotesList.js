import React from "react";

function NotesList({ notes, activeNoteId, onSelect, onDelete }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <div className="empty-state">No notes found</div>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            className={activeNoteId === note.id ? "note-card active" : "note-card"}
            onClick={() => onSelect(note)}
          >
            <div className="note-card-top">
              <h4>{note.title || "Untitled Note"}</h4>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(note.id);
                }}
              >
                Delete
              </button>
            </div>

            <p>
              {note.content
                ? note.content.slice(0, 80) + (note.content.length > 80 ? "..." : "")
                : "No content"}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default NotesList;