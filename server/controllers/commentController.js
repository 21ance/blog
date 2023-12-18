const asyncHandler = require("express-async-handler");
const BlogPost = require("../models/blogPost");
const Comment = require("../models/comment");
const { body, validationResult } = require("express-validator");
const passport = require("passport");

exports.comment_get_all = asyncHandler(async (req, res, next) => {
	try {
		const allComments = await Comment.find()
			.populate("blog", "title")
			.exec();
		res.json(allComments);
	} catch (err) {
		res.json({
			message: err,
		});
	}
});

exports.comment_post = [
	passport.authenticate("jwt", { session: false }),
	body("username", "Username is required").trim().isLength({ min: 1 }),
	body("comment", "Comment is required").trim().isLength({ min: 1 }),
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

		const newComment = new Comment({
			username: req.body.username,
			comment: req.body.comment,
			date_created: new Date(),
			blog: req.params.blogID,
		});

		try {
			// return error if not blog does not exists
			const blog = await BlogPost.findById(req.params.blogID).exec();
			if (!blog) {
				return res.status(400).json({ message: "Blog does not exist" });
			}

			// update blog to include comment
			BlogPost.findByIdAndUpdate(req.params.blogID, {
				$push: { comments: newComment },
			}).exec();

			await newComment.save();
			res.json(newComment);
		} catch (err) {
			return res
				.status(400)
				.json({ message: "Unable to post comment on non-existing blog" });
		}
	}),
];
