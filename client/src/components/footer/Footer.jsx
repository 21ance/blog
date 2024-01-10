import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="py-8 flex items-center justify-center text-white bg-black mt-12">
			<Link to="/https://github.com/21ance/blog">
				Developed by <span className="text-blue-500">Lance Lopez</span>
			</Link>
		</footer>
	);
};

export default Footer;
