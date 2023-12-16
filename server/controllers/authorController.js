const asyncHandler = require("express-async-handler");

exports.author_get = asyncHandler(async (req, res, next) => {
	res.json(`author get ${req.params.id}`);
});

exports.author_post = asyncHandler(async (req, res, next) => {
	res.json(`author post: new author`);
});
