const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	isAdmin: { type: Boolean },
	canPost: { type: Boolean },
	date_created: { type: Date },
});

module.exports = mongoose.model("Author", AuthorSchema);
