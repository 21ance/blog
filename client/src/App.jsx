import { HashRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AuthorPage from "./pages/AuthorPage";
import ModalLayout from "./components/modal/ModalLayout";
import { axiosPost } from "./helper/functions";
import AuthorBlogsPage from "./pages/AuthorBlogsPage";
import Footer from "./components/footer/Footer";

export const Context = createContext();

function App() {
	const [modalConfig, setModalConfig] = useState({ active: false });
	const [loginDetails, setLoginDetails] = useState(false);

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("token"));
		if (!token) return;
		axiosPost("auth", null, {
			headers: { Authorization: token },
		}).then((res) => setLoginDetails(res));
	}, [modalConfig]);

	return (
		<Context.Provider
			value={{
				modal: { modalConfig, setModalConfig },
				login: { loginDetails, setLoginDetails },
			}}
		>
			<HashRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />{" "}
					<Route path="/blog/:blogID" element={<BlogPage />} />
					<Route path="/author" element={<AuthorPage />} />
					<Route path="/my-blogs" element={<AuthorBlogsPage />} />
				</Routes>
				<Footer />
				<ModalLayout />
			</HashRouter>
		</Context.Provider>
	);
}

export default App;
