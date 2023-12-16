const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const CommentSchema = new Schema({
	username: { type: String, required: true },
	comment: { type: String, required: true },
	date_created: { type: Date },
	blog: { type: Schema.Types.ObjectId, ref: "BlogPost", required: true },
});

CommentSchema.virtual("date_created_formatted").get(function () {
	return DateTime.fromJSDate(this.date_created).toLocaleString(
		DateTime.DATETIME_MED
	);
});

module.exports = mongoose.model("Comment", CommentSchema);
