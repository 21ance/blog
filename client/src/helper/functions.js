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

export { axiosPost };
