const Hero = () => {
	return (
		<section className="relative mt-[-5rem] h-[50vh] xl:h-screen flex flex-col gap-4 justify-center items-center text-white mx-[-1rem] md:mx-[-4rem]">
			<img
				src="/images/hero-bg.jpg"
				className="object-cover h-full w-full absolute top-0 -z-10 brightness-50"
				alt="hero section background image"
			/>
			<h1 className="uppercase font-europaBold text-2xl xl:text-6xl text-center">
				Inspiration for travel by real people
			</h1>
			<p className="text-lg xl:text-4xl">Book smart, travel simple</p>
			<button className="text-sm md:text-base bg-white text-black rounded px-6 py-3 mt-4 font-europaBold">
				Start planning your trip
			</button>
		</section>
	);
};

export default Hero;
