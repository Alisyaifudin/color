import { ListColor } from "./ListColor";

export const colors = [
	{
		name: {
			"id-ID": "hijau pupus",
			"en-US": "lime",
		},
		color: {
			r: 0,
			g: 255,
			b: 0,
		},
		level: 1,
	},
	{
		name: {
			"id-ID": "merah",
			"en-US": "red",
		},
		color: {
			r: 255,
			g: 0,
			b: 0,
		},
		level: 1,
	},
	{
		name: {
			"id-ID": "hitam",
			"en-US": "black",
		},
		color: {
			r: 0,
			g: 0,
			b: 0,
		},
		level: 2,
	},
];

export const langs = ["en-US", "id-ID"];

export const Level1ListColor = () => {
	return <ListColor colors={colors} langs={langs} level={1} />;
};
export const Level2ListColor = () => {
	return <ListColor colors={colors} langs={langs} level={2} />;
};

export const Level3ListColor = () => {
	return <ListColor colors={colors} langs={langs} level={3} />;
};
