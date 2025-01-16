const express = require('express');
const router = express.Router();

const Post = require('../model/post');

/*
function insertPostData() {
    Post.create(
        {
            title: "Persistence is key",
            content: "In a world of hard skills, it's important to remember that soft skills go a long way!"
        }
    )
}
insertPostData();
*/

router.get("/", async (req, res) => {
    try {
        const data = await Post.find();
        res.render("index", { title: "Home", data });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;