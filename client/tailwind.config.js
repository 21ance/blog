/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			europa: ["Europa", "sans-serif"],
			europaBold: ["Europa-Bold", "sans-serif"],
			sansita: ["Sansita", "sans-serif"],
			roboto: ["Roboto", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"hero-bg": "url('/images/hero-bg.jpg')",
			},
			gridTemplateColumns: {
				blogList: "repeat(auto-fill, minmax(560px, 1fr))",
			},
		},
	},
	plugins: [],
};
