import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const port = 3000;

// Config
   // Template Engine

app.get("/editor", (req, res) => {
   res.sendFile("/src/editor.html", { root: "." });
});

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});