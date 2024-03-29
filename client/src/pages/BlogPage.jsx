import { useParams } from "react-router-dom";
import useAxiosGet from "../hooks/useAxiosGet";
import BlogHero from "../components/hero/BlogHero";
import BlogContent from "../components/blogContent/BlogContent";

const BlogPage = () => {
	let { blogID } = useParams();
	const { data, loading, error } = useAxiosGet(`blog/${blogID}`);
	const blog = data;

	if (loading) return <p>Loading...</p>;
	if (error || !blog.isPublished) return <p>{`Error: ${error}`}</p>;

	return (
		<main className="px-4 md:px-16">
			<BlogHero
				image={blog.image}
				title={blog.title}
				author={blog.author.username}
				date={blog.date_created}
			/>
			<BlogContent content={blog.content} />
		</main>
	);
};

export default BlogPage;
