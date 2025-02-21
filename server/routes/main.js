const express = require('express');
const router = express.Router();

const Post = require('../model/post');

/*
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
*/

// Pagination
router.get("/", async (req, res) => {
    try {
        let perPage = 4;
        let page = req.query.page || 1;

        const data = await Post.find()
        // This makes it so that, if the page is 1, it will skip
        // 0 documents. If it is 2, it will skip 4 documents,
        // and so on
        .skip((perPage * page) - perPage)
        .limit(perPage);

        const count = await Post.countDocuments();
        const nextPage = parseInt(page) + 1;
        const previousPage = parseInt(page) - 1;

        // <= means less than or equal to, just like in an if statement
        // Here, it is used in the declaration of a variable
        const hasNextPage = nextPage <= Math.ceil(count / perPage);
        const hasPreviousPage = previousPage >= 1;

        res.render("index", 
            {
                title: "Home",
                data,
                current: page,
                nextPage: hasNextPage ? nextPage : null,
                previousPage: hasPreviousPage ? previousPage : null
            }
        );
    } catch (error) {
        console.log(error);
    }
});

router.post("/new", async (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content
    });

    newPost.save((err) => {
        if (err) {
            console.error(err);
        }
        
        console.log("Post saved successfully!");
    });
});

module.exports = router;