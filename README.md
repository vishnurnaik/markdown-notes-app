# 📝 Markdown Notes App (Full Stack)

A full-stack Markdown Notes Application built using **React, Node.js (Express), and SQLite (better-sqlite3)**.  
It supports CRUD operations, real-time Markdown preview, and clean UI for note management.

---

## 🚀 Live Demo

- Frontend: https://vercel.com/naikvishwa322-9643s-projects/markdown-notes-app
- Backend: https://markdown-backend-app.onrender.com

---

## ✨ Features

- Create notes with title & content
- Edit existing notes
- Delete notes
- Markdown support:
  - Headings (#, ##, ###)
  - Bold / Italic
  - Lists (ordered & unordered)
  - Code blocks
  - Links
- Real-time preview (split screen)
- REST API backend
- Persistent SQLite database
- Clean responsive UI

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- JavaScript
- CSS

### Backend:
- Node.js
- Express.js
- better-sqlite3
- CORS

### Database:
- SQLite (local file-based DB)

---

## 📁 Project Structure

markdown-notes-app/
│
├── backend/
│ ├── server.js
│ ├── db.js
│ ├── routes/
│ │ └── notes.js
│ ├── package.json
│
├── frontend/
│ ├── src/
│ ├── App.js
│ ├── api.js
│ ├── package.json
│
└── README.md.
## 🔌 API Endpoints

| Method | Endpoint      | Description        |
|--------|--------------|--------------------|
| GET    | /notes       | Get all notes      |
| POST   | /notes       | Create a note      |
| PUT    | /notes/:id   | Update a note      |
| DELETE | /notes/:id   | Delete a note      |

---

## ⚙️ Setup Instructions

### 1. Clone repo
``bash
git clone https://github.com/vishnurnaik/markdown-notes-app.git
cd markdown-notes-app

Backend setup
 
cd backend
npm install
npm start

Frontend setup

cd frontend
npm install
npm start

Deployment

Backend deployed on Render
Frontend deployed on Vercel
API connected using environment base URL

 Key Learnings
 
Full-stack architecture design
REST API development
Database integration (SQLite)
Deployment on cloud platforms
Git + GitHub workflow 

Future Improvements

JWT Authentication
Tags & Categories
Auto-save feature
Version history
Rich text editor upgrade
