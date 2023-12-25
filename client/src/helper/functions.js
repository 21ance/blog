import axios from "axios";

const axiosPost = async (endpoint, data, config) => {
	try {
		const res = await axios.post(
			`${import.meta.env.VITE_SERVER}${endpoint}`,
			data,
			config
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

const axiosFunction = async (method, endpoint, data, config) => {
	try {
		const res = await axios({
			method: method,
			url: `${import.meta.env.VITE_SERVER}${endpoint}`,
			data: data,
			headers: config,
		});
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

const saveToLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

const deleteFromLocalStorage = (key) => {
	localStorage.removeItem(key);
};

export {
	axiosPost,
	axiosFunction,
	saveToLocalStorage,
	deleteFromLocalStorage,
};
