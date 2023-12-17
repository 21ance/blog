import Hero from "../components/hero/Hero";
import BlogList from "../components/blogList/blogList";
import Banner from "../components/banner/Banner";

const HomePage = () => {
	return (
		<>
			<main className="px-4 md:px-16">
				<Hero />
				<BlogList />
				<Banner />
			</main>
		</>
	);
};

export default HomePage;
