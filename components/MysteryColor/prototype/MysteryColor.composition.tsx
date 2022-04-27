import MysteryColor from "./MysteryColor";

export const BasicMysteryColor = () => {
	const color = {
		r: 0,
		g: 255,
		b: 0,
	};
	return <MysteryColor color={color} />;
};

export const OpenedMysteryColor = () => {
	const color = {
		r: 0,
		g: 255,
		b: 0,
	};
	return <MysteryColor color={color} done/>;
};
