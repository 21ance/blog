const asyncHandler = require("express-async-handler");
const Author = require("../models/author");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

exports.auth_post = [
	passport.authenticate("jwt", { session: false }),
	asyncHandler(async (req, res, next) => {
		res.json(req.user);
	}),
];

exports.login_post = [
	body("username", "Username must be 3 - 20 characters")
		.trim()
		.isLength({ min: 3, max: 20 }),
	body("password", "Password must be atleast 6 characters")
		.trim()
		.isLength({ min: 6 }),
	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorObject = {};
			errors.array().map((error) => {
				errorObject[error.path] = error.msg;
			});
			return res.json(errorObject);
		}

		// check if user exist
		const user = await Author.findOne({
			username: req.body.username,
		});
		if (!user) {
			return res.json({ message: "User does not exist" });
		}

		// check if password is correct
		const match = await bcrypt.compare(req.body.password, user.password);
		if (!match) {
			return res.json({ message: "Incorrect password" });
		}

		// jwt
		const payload = {
			username: user.username,
			id: user._id,
		};
		const token = jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});
		return res.json({
			token: "Bearer " + token,
		});
	}),
];

exports.register_post = [
	body("username", "Username must be 3 - 20 characters")
		.trim()
		.isLength({ min: 3, max: 20 }),
	body("password", "Password must be atleast 6 characters")
		.trim()
		.isLength({ min: 6 }),
	body("passwordConfirm", "Passwords does not match").custom(
		(value, { req }) => {
			return value === req.body.password;
		}
	),
	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorObject = {};
			errors.array().map((error) => {
				errorObject[error.path] = error.msg;
			});
			return res.json(errorObject);
		}

		const newAuthor = new Author({
			username: req.body.username,
			password: req.body.password,
			canPost: false,
			isAdmin: false,
			date_created: new Date(),
		});

		// check if user exists
		const athorExists = await Author.findOne({
			username: newAuthor.username,
		});
		if (athorExists) {
			return res.json({
				error: `username '${newAuthor.username}' is already taken`,
			});
		}

		try {
			bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
				newAuthor.password = hashedPassword;
				await newAuthor.save();
				// jwt
				const payload = {
					username: newAuthor.username,
					id: newAuthor._id,
				};
				const token = jwt.sign(payload, process.env.JWT_SECRET, {
					expiresIn: "7d",
				});
				return res.json({
					token: "Bearer " + token,
				});
			});
		} catch (err) {
			res.json(err);
		}
	}),
];
