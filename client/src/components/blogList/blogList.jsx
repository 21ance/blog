import SocialIcons from "../socials/SocialIcons";
import BlogPreview from "../blogPreview/blogPreview";
import useAxiosGet from "../../hooks/useAxiosGet";
import LoadMoreButton from "../buttons/LoadMoreButton";

const BlogList = () => {
	const { data, loading, error } = useAxiosGet("blogs");

	if (loading) return "Loading...";
	if (error) return `Error: ${error}`;

	return (
		<section className="flex flex-col items-center">
			<nav className="flex gap-4 font-roboto self-end py-8">
				<SocialIcons />
			</nav>
			<div className="grid grid-cols-blogList gap-8 w-full">
				{data.map((blog) => {
					if (blog.isPublished)
						return (
							<BlogPreview
								key={blog._id}
								href={`/blog/${blog._id}`}
								title={blog.title}
								image={blog.image}
								date={blog.date_created}
								content={blog.content}
							/>
						);
				})}
			</div>
			<LoadMoreButton />
		</section>
	);
};

export default BlogList;
