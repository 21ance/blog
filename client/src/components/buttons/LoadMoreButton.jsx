import { Link } from "react-router-dom";

const LoadMoreButton = () => {
	return (
		<Link
			to={"/"}
			className="border-[1px] rounded border-[#121416] px-16 py-2 my-12"
		>
			<span className="font-europaBold text-xl text-[#12141699]">
				Load More
			</span>
		</Link>
	);
};

export default LoadMoreButton;
