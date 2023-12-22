import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

const AuthorPage = () => {
	const navigate = useNavigate();
	const { login } = useContext(Context);
	const { loginDetails } = login;
	const [formData, setFormData] = useState({ title: "", content: "" });

	useEffect(() => {
		if (!loginDetails) navigate("/");
	}, []);

	return (
		<main className="flex justify-center pt-4">
			<form className="flex flex-col gap-2 px-4 max-w-[1000px]">
				<div className="flex flex-col">
					<label htmlFor="username">Title:</label>
					<input
						type="text"
						name="username"
						className="border p-1 rounded-md px-4 py-2"
						placeholder="Enter your blog title"
						value={formData.title}
						onChange={(e) =>
							setFormData((prev) => ({ ...prev, title: e.target.value }))
						}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="content">Content:</label>
					<Editor
						onEditorChange={(newText) =>
							setFormData((prev) => ({ ...prev, content: newText }))
						}
						apiKey="gesm6pay9n3x4j4rq5p53ghd4v3sati1dg1y1jw9ou1zrwin"
						init={{
							plugins:
								"autoresize ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
							toolbar:
								"blocks fontsize | bold italic underline strikethrough | link image table | align lineheight | tinycomments | checklist numlist bullist indent outdent",
							tinycomments_mode: "embedded",
							tinycomments_author: "Author name",
							ai_request: (request, respondWith) =>
								respondWith.string(() =>
									Promise.reject("See docs to implement AI Assistant")
								),
						}}
						initialValue="Write your blog content here!"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="image">Header Image:</label>
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
					>
						Create Blog
					</button>
				</div>
			</form>
		</main>
	);
};

export default AuthorPage;
