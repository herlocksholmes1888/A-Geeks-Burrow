import express from 'express';

const app = express();
const port = 3000;

app.get("/editor", (req, res) => {
   res.sendFile("/src/editor.html", { root: "." });
});

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});