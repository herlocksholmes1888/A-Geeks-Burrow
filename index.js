const express = require("express");
const path = require('node:path');
const app = express();
const port = 3000;

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

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});