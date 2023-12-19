import { useState, useContext } from "react";
import { axiosPost } from "../../helper/functions";
import { Context } from "../../App";
import FormMessage from "./FormMessage";

const LoginModal = () => {
	const { modal } = useContext(Context);
	const { setModalConfig } = modal;

	const [formData, setFormData] = useState({ username: "", password: "" });
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
			<button
				type="button"
				className="text-white bg-black rounded py-2 font-bold"
				onClick={async () => {
					const res = await axiosPost("login", {
						username: formData.username,
						password: formData.password,
					});
					setPostMessage(res);
				}}
			>
				Login
			</button>
			<FormMessage object={postMessage} objectProperty="message" />
			<button
				type="button"
				className="text-sm pt-4"
				onClick={() => {
					setModalConfig((prev) => ({ ...prev, active: "Register" }));
				}}
			>
				Not a member? <span className="text-blue-500 ">Register now</span>
			</button>
		</form>
	);
};

export default LoginModal;
