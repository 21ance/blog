const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
	username: { type: String, required: true, minLength: 3, maxLength: 20 },
	password: { type: String, required: true, minLength: 6 },
	isAdmin: { type: Boolean },
	canPost: { type: Boolean },
	date_created: { type: Date },
});

module.exports = mongoose.model("Author", AuthorSchema);
