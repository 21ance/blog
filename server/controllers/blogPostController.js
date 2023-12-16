const asyncHandler = require("express-async-handler");

exports.blogPost_get = asyncHandler(async (req, res, next) => {
	res.json(`blogPost get ${req.params.id}`);
});

exports.blogPost_post = asyncHandler(async (req, res, next) => {
	res.json(`blogPost post: new blog`);
});
