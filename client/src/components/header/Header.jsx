import { useContext } from "react";
import { Context } from "../../App";

const Header = () => {
	const { modal } = useContext(Context);
	const { setModalConfig } = modal;

	return (
		<header className="relative text-white flex items-center justify-between h-14 px-4 py-10 uppercase text-md xl:text-lg z-10 font-europaBold">
			<a href="/" className="flex items-center">
				Travel Blog
			</a>
			<nav className="hidden sm:flex gap-4 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
				<a href="">Destination</a>
				<a href="">Food</a>
				<a href="">Well being</a>
				<a href="">sport</a>
				<a href="">family</a>
				<a href="">lifestyle</a>
			</nav>
			<button
				className="uppercase hidden lg:block bg-black rounded px-4 py-2 font-sansita tracking-wide"
				onClick={() =>
					setModalConfig((prev) => ({ ...prev, active: "Login" }))
				}
			>
				Login
			</button>
		</header>
	);
};

export default Header;
