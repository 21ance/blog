const asyncHandler = require("express-async-handler");

exports.comment_post = asyncHandler(async (req, res, next) => {
	res.json(`comment post: new comment`);
});
