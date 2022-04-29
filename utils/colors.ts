import { LANGUAGES } from "./DICT";

const colors = [
	{
		name: {
			[LANGUAGES.INA]: "hijau pupus",
			[LANGUAGES.EN]: "lime",
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
			[LANGUAGES.INA]: "merah",
			[LANGUAGES.EN]: "red",
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
			[LANGUAGES.INA]: "hitam",
			[LANGUAGES.EN]: "black",
		},
		color: {
			r: 0,
			g: 0,
			b: 0,
		},
		level: 1,
	},
	{
		name: {
			[LANGUAGES.INA]: "merah muda",
			[LANGUAGES.EN]: "pink",
		},
		color: {
			r: 255,
			g: 192,
			b: 203,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: "dewangga",
			[LANGUAGES.EN]: "orange red",
		},
		color: {
			r: 255,
			g: 69,
			b: 0,
		},
		level: 3,
	},
];

export default colors;
