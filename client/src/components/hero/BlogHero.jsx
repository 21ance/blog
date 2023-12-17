import { Link } from "react-router-dom";

const BlogHero = (props) => {
	const { title, author = "Lance Lopez", date } = props;

	return (
		<section className="relative h-[35vh] lg:h-[50vh] flex flex-col justify-between gap-4 text-white mx-[-1rem] md:mx-[-4rem] mt-[-5rem]">
			<img
				src="/images/blog-placeholder.jpg"
				className="object-cover w-full h-full absolute top-0 -z-10 brightness-50 "
				alt="hero section background image"
			/>
			<header className="font-europaBold px-4 text-sm pt-20">
				<Link to="/">Home</Link>
				<span className="capitalize">
					{" > "}
					{title}
				</span>
			</header>
			<div className="flex flex-col gap-2 pb-4 px-4 md:px-16">
				<h1 className="uppercase font-europaBold text-xl sm:text-4xl lg:text-6xl">
					{title}
				</h1>
				<footer className="flex items-end gap-8 text-sm md:text-lg">
					<span>by {author}</span>
					<span>{date}</span>
				</footer>
			</div>
		</section>
	);
};

export default BlogHero;
