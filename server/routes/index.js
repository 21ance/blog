var express = require("express");
var router = express.Router();

// authentication routes
const auth_controller = require("../controllers/authController");
router.post("/auth", auth_controller.auth_post);
router.post("/login", auth_controller.login_post);
router.post("/register", auth_controller.register_post);

// blog routes
const blogPost_controller = require("../controllers/blogPostController");
router.get("/blogs", blogPost_controller.blog_get_all);
router.get("/blog/:id", blogPost_controller.blog_get);
router.post("/blog_new", blogPost_controller.blog_post);

// comment routes
const comment_controller = require("../controllers/commentController");
router.get("/comments", comment_controller.comment_get_all);
router.post("/:blogID/comment_new", comment_controller.comment_post);

module.exports = router;
