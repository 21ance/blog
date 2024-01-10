import { Link } from "react-router-dom";
import {
	convertDateTime,
	removeElementTags,
} from "../../helper/functions";

const BlogPreview = (props) => {
	const {
		href,
		image,
		title = "Integer Maecenas Eget Viverra",
		avatar = "/images/author-avatar-mini.png",
		author = "Lance Lopez",
		date = "June 28, 2018",
		content = "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
	} = props;
	return (
		<Link to={href} className="flex flex-col gap-3 text-gray-500">
			<img
				src={image ? image : "/images/blog-placeholder.jpg"}
				alt="blog preview image"
				className="h-[200px] md:h-[420px] object-cover"
			/>
			<h2 className="font-europaBold text-black text-2xl md:text-3xl">
				{title}
			</h2>
			<div className="flex items-center justify-between">
				<span className="flex items-center gap-1 font-europaBold text-xl text-black">
					<img src={avatar} alt="author avatar" />
					<small>{author}</small>
				</span>
				<small>{convertDateTime(date)}</small>
			</div>
			<div className="text-gray-500 line-clamp-3 text-justify">
				{removeElementTags(content)}
			</div>
			<span className="underline underline-offset-4 font-europaBold text-black text-xl">
				View Post
			</span>
		</Link>
	);
};

export default BlogPreview;
