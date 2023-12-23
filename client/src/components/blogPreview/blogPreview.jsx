import ParseHTML from "html-react-parser";
import { Link } from "react-router-dom";

const BlogPreview = (props) => {
	const {
		href,
		src = "/images/blog-preview-default.jpg",
		title = "Integer Maecenas Eget Viverra",
		avatar = "/images/author-avatar-mini.png",
		author = "Lance Lopez",
		date = "June 28, 2018",
		content = "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
	} = props;
	return (
		<Link to={href} className="flex flex-col gap-2 text-gray-500">
			<img
				src={src}
				alt="blog preview image"
				className="h-[200px] md:h-[375px] object-cover"
			/>
			<h2 className="font-europaBold text-black text-2xl md:text-4xl">
				{title}
			</h2>
			<div className="flex items-center justify-between">
				<span className="flex items-center gap-1 font-europaBold text-xl text-black">
					<img src={avatar} alt="author avatar" />
					<small>{author}</small>
				</span>
				<small>{date}</small>
			</div>
			<div className="text-gray-500 line-clamp-1 text-justify">
				{ParseHTML(content || "")}
			</div>
			<span className="underline underline-offset-4 font-europaBold text-black text-xl">
				View Post
			</span>
		</Link>
	);
};

export default BlogPreview;
