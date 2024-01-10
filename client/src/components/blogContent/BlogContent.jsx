import ParseHTML from "html-react-parser";
import SocialIcons from "../socials/SocialIcons";

const BlogContent = (props) => {
	const { content } = props;

	return (
		<section className="flex justify-between gap-4 pt-8 md:pt-12">
			<article className="flex justify-center items-center w-full">
				<div className="max-w-[90ch] flex flex-col gap-2">
					{ParseHTML(content || "")}
				</div>
			</article>
			<aside className="w-[250px] hidden md:flex flex-col gap-4 font-roboto ">
				<span className="font-europaBold text-2xl">Follow Us</span>
				<nav className="flex justify-between">
					<SocialIcons style="flex-col" />
				</nav>
				<p className="text-justify">
					<span className="font-europaBold">Subscribe</span> to our
					newsletter and receive a selection of cool articles every week
				</p>
				<input
					type="text"
					placeholder="Enter your email"
					className="px-4 py-3 border-2 rounded"
				/>
				<button className="bg-black rounded w-full py-3 text-white uppercase tracking-widest">
					Subscribe
				</button>
			</aside>
		</section>
	);
};

export default BlogContent;
