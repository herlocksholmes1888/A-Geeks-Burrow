const express = require("express");
const path = require('node:path');
const app = express();
const port = 3000;

const Post = require('./server/models/post');

// Config
    // Port
        app.listen(port, () => {
            console.log(`Server running at https://localhost:${port}`);
        });
    // View Engine
        app.set("view engine", "ejs");
        app.set("views", path.join(__dirname, "views"));
    // DB
        const connectDB = require("./server/config/db");
        connectDB();
    // Static Files
        app.use(express.static("public"));

function insertPostData() {
    Post.insertMany([
        {
            title: "How to build a blog from scratch with Nodejs",
            content: "This is a blog post created with Nodejs and some other technologies!"
        },
        {
            title: "How I learned to LOVE to code",
            content: "Sometimes, you just have to program your own brain!"
        },
        {
            title: "What exactly is Clean Code?",
            content: "Clean code is code that is easy to read and easy to understand."
        },
    ])
}
insertPostData();

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});