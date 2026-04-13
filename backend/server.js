const express = require("express");
const cors = require("cors");

const notesRoutes = require("./routes/notes");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.use("/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});