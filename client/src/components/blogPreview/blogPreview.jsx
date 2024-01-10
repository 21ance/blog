import { Link } from "react-router-dom";
import {
	convertDateTime,
	removeElementTags,
} from "../../helper/functions";

const BlogPreview = (props) => {
	const { blogObject } = props;
	const blog = blogObject.blog;

	return (
		<Link
			to={`/blog/${blog._id}`}
			className="flex flex-col gap-3 text-gray-500"
		>
			<img
				src={blog.image ? blog.image : "/images/blog-placeholder.jpg"}
				alt="blog preview image"
				className="h-[200px] md:h-[420px] object-cover"
			/>
			<h2 className="font-europaBold text-black text-2xl">{blog.title}</h2>
			<div className="flex items-center justify-between">
				<span className="flex items-center gap-1 font-europaBold text-xl text-black">
					<img
						src={
							blog.author.avatar
								? blog.author.avatar
								: "/images/author-avatar-mini.png"
						}
						alt="author avatar"
						className="w-[40px] h-[40px] rounded-full"
					/>
					<small>{blog.author.username}</small>
				</span>
				<small>{convertDateTime(blog.date_created)}</small>
			</div>
			<div className="text-gray-500 line-clamp-3 text-justify">
				{removeElementTags(blog.content)}
			</div>
			<span className="underline underline-offset-4 font-europaBold text-black text-xl">
				View Post
			</span>
		</Link>
	);
};

export default BlogPreview;
