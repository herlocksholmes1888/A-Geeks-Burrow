import express from 'express';
import path from "path";
import { URL } from "url";

const app = express();
const port = 3000;

// This accounts for "ReferenceError: __dirname not defined"
const __dirname = decodeURI(new URL(".", import.meta.url).pathname);

// Config
   // Template Engine
      app.set("view engine", "ejs");
      app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
   res.render("index-test");
});

app.get("/editor", (req, res) => {
   res.sendFile("/src/editor.html", { root: "." });
});

app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
});