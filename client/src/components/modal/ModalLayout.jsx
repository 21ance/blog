import { useContext, useEffect } from "react";
import { Context } from "../../App";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const ModalLayout = () => {
	const { modal } = useContext(Context);
	const { modalConfig, setModalConfig } = modal;

	function closeModal() {
		setModalConfig((prev) => ({ ...prev, active: false }));
	}

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				closeModal();
			}
		});
		document.addEventListener("click", (e) => {
			if (e.target.id === "modal") closeModal();
		});
		return () => {
			document.removeEventListener("keydown", closeModal);
			document.removeEventListener("click", closeModal);
		};
	}, []);

	if (!modalConfig.active) return;

	return (
		<div
			id="modal"
			className="modal fixed bg-gray-600 bg-opacity-50 overflow-y-auto items-center justify-center z-20 flex mx-[-6rem] inset-0"
		>
			{modalConfig.active === "Login" ? <LoginForm /> : <RegisterForm />}
		</div>
	);
};

export default ModalLayout;
