var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.json({ title: "Homepage" });
});

// author / authentication routes
const author_controller = require("../controllers/authorController");
router.get("/author/:id", author_controller.author_get);
router.post("/author", author_controller.author_post);

// blog routes
const blogPost_controller = require("../controllers/blogPostController");
router.get("/blog/:id", blogPost_controller.blogPost_get);
router.post("/blog", blogPost_controller.blogPost_post);

// comment routes
const comment_controller = require("../controllers/commentController");
router.post("/comment", comment_controller.comment_post);

module.exports = router;
