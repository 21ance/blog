import { HashRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ModalLayout from "./components/modal/ModalLayout";
import { axiosPost } from "./helper/functions";

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
	}, []);

	return (
		<Context.Provider
			value={{
				modal: { modalConfig, setModalConfig },
				loginDetails: { loginDetails, setLoginDetails },
			}}
		>
			<HashRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />{" "}
					<Route path="/blog/:blogID" element={<BlogPage />} />{" "}
				</Routes>
				<ModalLayout />
			</HashRouter>
		</Context.Provider>
	);
}

export default App;
