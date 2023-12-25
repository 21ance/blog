import { useParams } from "react-router-dom";
import useAxiosGet from "../hooks/useAxiosGet";
import BlogHero from "../components/hero/BlogHero";
import BlogContent from "../components/blogContent/BlogContent";

const BlogPage = () => {
	let { blogID } = useParams();
	const { data, loading, error } = useAxiosGet(`blog/${blogID}`);
	const blog = data;

	if (loading) return "Loading...";
	if (error || !blog.isPublished) return `Error: ${error}`;

	return (
		<main className="px-4 md:px-16">
			<BlogHero title={blog.title} date={blog.date_created} />
			<BlogContent content={blog.content} />
		</main>
	);
};

export default BlogPage;
