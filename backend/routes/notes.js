const express = require("express");
const router = express.Router();
const db = require("../db");

/* GET all notes */
router.get("/", (req, res) => {
  const notes = db.prepare("SELECT * FROM notes ORDER BY updated_at DESC").all();
  res.json(notes);
});

/* CREATE note */
router.post("/", (req, res) => {
  const { title, content } = req.body;

  const result = db
    .prepare("INSERT INTO notes (title, content) VALUES (?, ?)")
    .run(title, content);

  res.json({ id: result.lastInsertRowid, title, content });
});

/* UPDATE note */
router.put("/:id", (req, res) => {
  const { title, content } = req.body;

  db.prepare(`
    UPDATE notes 
    SET title=?, content=?, updated_at=CURRENT_TIMESTAMP 
    WHERE id=?
  `).run(title, content, req.params.id);

  res.json({ message: "Updated" });
});

/* DELETE note */
router.delete("/:id", (req, res) => {
  db.prepare("DELETE FROM notes WHERE id=?").run(req.params.id);

  res.json({ message: "Deleted" });
});

module.exports = router;