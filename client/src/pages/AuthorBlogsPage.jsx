import { useContext, useEffect } from "react";
import { Context } from "../App";
import { Link, useNavigate } from "react-router-dom";
import useAxiosGet from "../hooks/useAxiosGet";
import { axiosFunction } from "../helper/functions";

const AuthorBlogsPage = () => {
	const navigate = useNavigate();
	const { login } = useContext(Context);
	const { loginDetails } = login;
	const { data, loading, error } = useAxiosGet(
		`${loginDetails._id}/blogs`
	);

	useEffect(() => {
		if (!loginDetails) navigate("/");
	}, []);

	if (loading) return "Loading...";
	if (error) return `Error: ${error}`;

	return (
		<section className="flex flex-col items-center">
			<table className="m-2 min-w-[350px]">
				<thead>
					<tr className="bg-neutral-200">
						<th className="py-2">Blog Title</th>
						<th colSpan={2}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((blog) => {
						return (
							<tr className="bg-neutral-100" key={blog._id}>
								<td className="max-w-[500px]">
									<Link to={`/blog/${blog._id}`}>{blog.title}</Link>
								</td>
								<td>
									<button>Edit</button>
								</td>
								<td>
									<button
										onClick={async (e) => {
											const token = JSON.parse(
												localStorage.getItem("token")
											);
											const res = await axiosFunction(
												"put",
												`${blog._id}/edit`,
												null,
												{ Authorization: token }
											).then((blog.isPublished = !blog.isPublished));
											e.target.textContent = res.isPublished
												? "Hide"
												: "Show";
										}}
									>
										{blog.isPublished ? "Hide" : "Show"}
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
};

export default AuthorBlogsPage;
