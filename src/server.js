 import express from 'express';

 const app = express();
 const port = 3000;

 app.get("/", (req, res) => {
    res.send("Hello, JavaScript + Node.js + Express!");
 });

 app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
 });