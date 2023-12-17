const SocialIcons = (props) => {
	const { style } = props;
	return (
		<>
			<Icons style={style} text="3.7M" icon="/svg/fb-logo.svg" />
			<Icons style={style} text="2.4M" icon="/svg/yt-logo.svg" />
			<Icons style={style} text="3.7M" icon="/svg/twitter-logo.svg" />
			<Icons style={style} text="2.4M" icon="/svg/yt-logo.svg" />
		</>
	);
};

const Icons = (props) => {
	const { text, href, icon, iconAlt, style } = props;
	return (
		<a
			href={href}
			className={`flex gap-1 cursor-pointer text-sm justify-center items-center ${style}`}
		>
			<img src={icon} alt={iconAlt} className="w-[20px] h-[20px]" />
			<span>{text}</span>
		</a>
	);
};

export default SocialIcons;
