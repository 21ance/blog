const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const BlogPostSchema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	image: { type: String },
	isPublished: { type: Boolean },
	date_created: { type: Date },
	date_modified: { type: Date },
	comments: [
		{ type: Schema.Types.ObjectId, ref: "Comment", required: true },
	],
	author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
});

BlogPostSchema.virtual("date_created_formatted").get(function () {
	return DateTime.fromJSDate(this.date_created).toLocaleString(
		DateTime.DATETIME_MED
	);
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
