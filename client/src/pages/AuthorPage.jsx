import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { axiosPost } from "../helper/functions";

const AuthorPage = () => {
	const navigate = useNavigate();
	const { login } = useContext(Context);
	const { loginDetails } = login;
	const [formData, setFormData] = useState({
		title: "",
		content: "",
		error: "",
	});

	useEffect(() => {
		if (!loginDetails) navigate("/");
	}, []);

	return (
		<main className="flex justify-center pt-4">
			<form className="flex flex-col gap-2 px-4 max-w-[1000px]">
				<div className="flex flex-col">
					<label htmlFor="title">Title:</label>
					<input
						type="text"
						name="title"
						className="border p-1 rounded-md px-4 py-2"
						placeholder="Enter your blog title"
						value={formData.title}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								title: e.target.value,
								error: "",
							}))
						}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="content">Content:</label>
					<Editor
						onEditorChange={(newText) =>
							setFormData((prev) => ({
								...prev,
								content: newText,
								error: "",
							}))
						}
						apiKey="gesm6pay9n3x4j4rq5p53ghd4v3sati1dg1y1jw9ou1zrwin"
						init={{
							height: "600",
							plugins:
								"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
							toolbar:
								"fontsize | bold italic underline strikethrough | link image | align lineheight | numlist bullist indent outdent",
						}}
						initialValue="Write your blog content here!"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="image">Blog Header Image:</label>
					<input type="file" />
				</div>
				<div className="flex gap-4 justify-center">
					<button
						type="button"
						className="bg-blue-500 text-white font-europaBold px-6 py-2 rounded w-fit self-center mt-4"
					>
						Preview
					</button>
					<button
						type="button"
						className="bg-green-500 text-white font-europaBold px-6 py-2 rounded w-fit self-center mt-4"
						onClick={async () => {
							if (formData.title === "" || formData.content === "")
								return setFormData((prev) => ({
									...prev,
									error:
										"Please fill the title and content before submitting",
								}));
							try {
								const token = JSON.parse(localStorage.getItem("token"));
								await axiosPost(
									"blog_new",
									{
										title: formData.title,
										content: formData.content,
										author: loginDetails._id,
									},
									{
										headers: { Authorization: token },
									}
								).then((res) => {
									navigate(`/blog/${res._id}`);
								});
							} catch (err) {
								console.log(err);
							}
						}}
					>
						Create Blog
					</button>
				</div>
				{formData.error && (
					<small className="text-sm text-red-500 text-center">
						{formData.error}
					</small>
				)}
			</form>
		</main>
	);
};

export default AuthorPage;
