import { HashRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import LoginModal from "./components/modal/LoginModal";

export const Context = createContext();

function App() {
	const [modalConfig, setModalConfig] = useState({ active: false });

	return (
		<Context.Provider
			value={{
				modal: { modalConfig, setModalConfig },
			}}
		>
			<HashRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />{" "}
					<Route path="/blog/:blogID" element={<BlogPage />} />{" "}
				</Routes>
				<LoginModal />
			</HashRouter>
		</Context.Provider>
	);
}

export default App;
