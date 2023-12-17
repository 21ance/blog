const BlogPreview = (props) => {
	const {
		href,
		src = "/images/blog-preview-default.jpg",
		title = "Integer Maecenas Eget Viverra",
		avatar = "/images/author-avatar-mini.png",
		author = "Joanna Wellick",
		date = "June 28, 2018",
		content = "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
	} = props;
	return (
		<a href={href} className="flex flex-col gap-2 text-gray-500">
			<img
				src={src}
				alt="blog preview image"
				className="h-[375px] object-cover"
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
			<p className="text-gray-500 line-clamp-3 text-justify">{content}</p>
			<span className="underline underline-offset-4 font-europaBold text-black text-xl">
				View Post
			</span>
		</a>
	);
};

export default BlogPreview;
