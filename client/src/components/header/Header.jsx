import { useContext } from "react";
import { Context } from "../../App";
import { deleteFromLocalStorage } from "../../helper/functions";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
	const { modal, login } = useContext(Context);
	const { setModalConfig } = modal;
	const { loginDetails, setLoginDetails } = login;
	let location = useLocation();
	const navigate = useNavigate();

	return (
		<header
			className={
				"relative text-white flex items-center justify-between h-14 px-4 py-10 uppercase text-md xl:text-lg z-10 font-europaBold" +
				(location.pathname === "/author" ||
				location.pathname === "/my-blogs"
					? " bg-stone-800"
					: "")
			}
		>
			<Link to={"/"} className="flex items-center">
				Travel Blog
			</Link>
			{!loginDetails ? (
				<button
					className="uppercase bg-black rounded px-4 py-2 font-sansita tracking-wide"
					onClick={() =>
						setModalConfig((prev) => ({ ...prev, active: "Login" }))
					}
				>
					Login
				</button>
			) : (
				<>
					<nav className="hidden sm:flex gap-4 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
						<Link to={"/author"}> New Blog</Link>
						<Link to={"/my-blogs"}> My Blogs</Link>
					</nav>
					<div className="flex flex-col items-end">
						<button
							className="uppercase bg-black rounded px-4 py-2 font-sansita tracking-wide w-fit"
							onClick={() => {
								deleteFromLocalStorage("token");
								setLoginDetails(false);
								navigate("/");
							}}
						>
							Logout
						</button>
						<Link to="/author" className="normal-case text-sm">
							Welcome back, {loginDetails.username}
						</Link>
					</div>
				</>
			)}
		</header>
	);
};

export default Header;
