const SocialIcons = () => {
	return (
		<>
			<Icons text="3.7M" icon="/svg/fb-logo.svg" />
			<Icons text="2.4M" icon="/svg/yt-logo.svg" />
			<Icons text="3.7M" icon="/svg/twitter-logo.svg" />
			<Icons text="2.4M" icon="/svg/yt-logo.svg" />
		</>
	);
};

const Icons = (props) => {
	const { text, href, icon, iconAlt } = props;
	return (
		<a href={href} className="flex gap-1 cursor-pointer text-sm">
			<img src={icon} alt={iconAlt} />
			<span>{text}</span>
		</a>
	);
};

export default SocialIcons;
