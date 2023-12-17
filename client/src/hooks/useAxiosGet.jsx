import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosGet = (endpoint) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);

			try {
				const res = await axios.get(
					`${import.meta.env.VITE_SERVER}${endpoint}`
				);
				setData(res.data);
				setLoading(false);
			} catch (err) {
				setError(err);
				setLoading(false);
			}
		};

		getData();
	}, [endpoint]);

	return { data, loading, error };
};

export default useAxiosGet;
