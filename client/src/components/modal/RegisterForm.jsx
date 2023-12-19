import { useContext, useState } from "react";
import { axiosPost, saveToLocalStorage } from "../../helper/functions";
import { Context } from "../../App";
import FormMessage from "./FormMessage";

const RegisterModal = () => {
	const { modal } = useContext(Context);
	const { setModalConfig } = modal;
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		passwordConfirm: "",
	});
	const [postMessage, setPostMessage] = useState({});

	return (
		<form className="bg-white p-6 rounded flex flex-col gap-3 min-w-[280px]">
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
				<FormMessage object={postMessage} objectProperty="username" />
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
				<FormMessage object={postMessage} objectProperty="password" />
			</div>
			<div className="flex flex-col">
				<label htmlFor="passwordConfirm">Confirm Password:</label>
				<input
					type="password"
					name="passwordConfirm"
					value={formData.passwordConfirm}
					onChange={(e) => {
						setFormData((prev) => ({
							...prev,
							passwordConfirm: e.target.value,
						}));
					}}
					className="border-black border p-1 rounded"
				/>
				<FormMessage
					object={postMessage}
					objectProperty="passwordConfirm"
				/>
			</div>
			<button
				type="submit"
				className="text-white bg-black rounded py-2 font-bold"
				onClick={async (e) => {
					e.preventDefault();
					const res = await axiosPost("register", {
						username: formData.username,
						password: formData.password,
						passwordConfirm: formData.passwordConfirm,
					});
					setPostMessage(res);
					if (Object.prototype.hasOwnProperty.call(res, "token")) {
						saveToLocalStorage("token", res.token);
						setModalConfig((prev) => ({ ...prev, active: false }));
					}
				}}
			>
				Register
			</button>
			<FormMessage object={postMessage} objectProperty="error" />
			<button
				type="button"
				className="text-sm pt-4"
				onClick={() => {
					setModalConfig((prev) => ({ ...prev, active: "Login" }));
				}}
			>
				Already a member? <span className="text-blue-500 ">Login</span>
			</button>
		</form>
	);
};

export default RegisterModal;
