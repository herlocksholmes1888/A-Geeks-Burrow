const express = require('express');
const router = express.Router();

const Post = require('../model/post');

function insertPostData() {
    Post.insertMany([
        {
            title: "Persistence is key",
            content: "In a world of hard skills, it's important to remember that soft skills go a long way!"
        },
        {
            title: "What exactly is Clean Coding?",
            content: "Clean coding is a way of writing code that is easy to understand, easy to maintain, and easy to test."
        },
        {
            title: "How I learned to LOVE to code",
            content: "I used to hate coding, but now I love it! Here's how I learned to love it."
        },
        {
            title: "Why you should read more",
            content: "Reading is a great way to learn new things and improve your skills."
        },
        {
            title: "Going to therapy changed my life, and it will change yours too",
            content: "Therapy is a great way to work through your problems and improve your mental health."
        }
    ])
}
insertPostData();

router.get("/", async (req, res) => {
    try {
        const data = await Post.find();
        res.render("index", { title: "Home", data });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;