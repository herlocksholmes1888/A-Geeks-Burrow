const express = require("express");
const path = require('node:path');
const app = express();
port = 3000;

app.listen(port);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});
