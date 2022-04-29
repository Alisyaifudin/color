import { useState } from "react";
import { MysteryColor } from "./MysteryColor";

export const BasicMysteryColor = () => {
	const [hsv, setHsv] = useState(false);
	const color = {
		r: 0,
		g: 255,
		b: 0,
	};
	const handleClick = () => setHsv((prev) => !prev);
	return <MysteryColor name="lime" color={color} onClick={handleClick} hsv={hsv} />;
};

export const OpenedMysteryColor = () => {
	const [hsv, setHsv] = useState(false);
	const color = {
		r: 0,
		g: 255,
		b: 0,
	};
	const handleClick = () => setHsv((prev) => !prev);
	return <MysteryColor name="lime" color={color} onClick={handleClick} hsv={hsv} done />;
};
