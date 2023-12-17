const Banner = () => {
	return (
		<section className="relative h-[400px] md:h-[500px] flex flex-col gap-4 justify-center items-center text-white w-full">
			<img
				src="/images/banner-bg.jpg"
				className="object-cover w-full h-full absolute -z-10 brightness-50"
				alt="hero section background image"
			/>
			<h2 className="font-europaBold text-xl xl:text-5xl text-center md:w-[40ch]">
				Richird Norton photorealistic rendering as real photos
			</h2>
			<p className="text-lg xl:text-xl md:w-[55ch] text-center text-[#E5E5E5]">
				Progressively incentivize cooperative systems through technically
				sound functionalities. The credibly productivate seamless data.
			</p>
			<button className="text-sm md:text-base bg-white rounded px-6 py-3 mt-4 font-europaBold text-[#7A65E1]">
				Start planning your trip
			</button>
		</section>
	);
};

export default Banner;
