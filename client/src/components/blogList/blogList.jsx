import SocialIcons from "../socials/SocialIcons";
import BlogPreview from "../blogPreview/blogPreview";

const BlogList = () => {
	return (
		<>
			<section className="flex flex-col items-center px-4 md:px-16">
				<nav className="flex gap-4 font-roboto self-end py-8">
					<SocialIcons />
				</nav>
				<div className="grid grid-cols-blogList gap-8 w-full">
					<BlogPreview />
					<BlogPreview />
					<BlogPreview />
					<BlogPreview />
					<BlogPreview />
					<BlogPreview />
					<BlogPreview />
				</div>
			</section>
		</>
	);
};

export default BlogList;
