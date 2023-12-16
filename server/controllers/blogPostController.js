const asyncHandler = require("express-async-handler");
const BlogPost = require("../models/blogPost");
const { body, validationResult } = require("express-validator");

exports.blog_get_all = asyncHandler(async (req, res, next) => {
	try {
		const allBlogs = await BlogPost.find()
			.populate("comments", "username comment date_created")
			.exec();
		res.json(allBlogs);
	} catch (err) {
		res.json({
			message: err,
		});
	}
});

exports.blog_get = asyncHandler(async (req, res, next) => {
	try {
		const blogPost = await BlogPost.findById(req.params.id)
			.populate("comments", "username comment date_created")
			.exec();
		res.json(blogPost);
	} catch (err) {
		res.status(404).json({
			message: "Blog does not exist",
		});
	}
});

exports.blog_post = [
	body("title", "Title is required").trim().isLength({ min: 1 }),
	body("content", "Content is required").trim().isLength({ min: 1 }),
	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorObject = {};
			errors.array().map((error) => {
				errorObject[error.path] = error.msg;
			});
			return res.json({
				errors: errorObject,
			});
		}

		const newBlog = new BlogPost({
			title: req.body.title,
			content: req.body.content,
			isPublished: true,
			date_created: new Date(),
			date_modified: new Date(),
		});
		// to add image
		// if(req.body.image !== "")

		try {
			await newBlog.save();
			res.json(newBlog);
		} catch (err) {
			res.json(err);
		}
	}),
];
