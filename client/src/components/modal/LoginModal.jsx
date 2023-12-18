import { useState } from "react";
import { axiosPost } from "../../helper/functions";
import ModalLayout from "./ModalLayout";

const LoginModal = () => {
	const [formData, setFormData] = useState({ username: "", password: "" });

	return (
		<ModalLayout>
			<form className="bg-white p-6 rounded flex flex-col gap-2">
				<div className="flex flex-col">
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						name="username"
						value={formData.username}
						onChange={(e) => {
							setFormData((prev) => ({
								...prev,
								username: e.target.value,
							}));
						}}
						className="border-black border p-1 rounded"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={(e) => {
							setFormData((prev) => ({
								...prev,
								password: e.target.value,
							}));
						}}
						className="border-black border p-1 rounded"
					/>
				</div>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						axiosPost("login", {
							username: formData.username,
							password: formData.password,
						});
					}}
				>
					Login
				</button>
				<p
					id="login-error"
					className="text-sm text-red-500 text-center"
				></p>
			</form>
		</ModalLayout>
	);
};

export default LoginModal;
