import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";

function App() {
	return (
		<>
			<HashRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />{" "}
					<Route path="/blog/:blogID" element={<BlogPage />} />{" "}
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
