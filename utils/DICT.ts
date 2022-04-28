import { themeTypes } from "../redux/meta/metaInterface";

export const LANGUAGES = {
	INA: "id-ID",
	EN: "en-US",
};

export const VERSION = "0.1.0";

export const LANGUAGES_NAME = {
	[LANGUAGES.INA]: "Bahasa Indonesia",
	[LANGUAGES.EN]: "English",
};

export const THEME = {
	DARK: "dark" as themeTypes,
	LIGHT: "light" as themeTypes,
};

export const GENERAL = {
	
};

const words = {
	THEME_LIGHT: {
		[LANGUAGES.INA]: "Terang",
		[LANGUAGES.EN]: "Light",
	},
	THEME_DARK: {
		[LANGUAGES.INA]: "Gelap",
		[LANGUAGES.EN]: "Dark",
	},
	LANGUAGE: {
		[LANGUAGES.INA]: "Bahasa",
		[LANGUAGES.EN]: "Language",
	},
	GUESS: {
		[LANGUAGES.INA]: "Tebak",
		[LANGUAGES.EN]: "Guess",
	},
	SKIP:{
		[LANGUAGES.INA]: "lewati",
		[LANGUAGES.EN]: "skip",
	},
	SUBMIT:{
		[LANGUAGES.INA]: "jawab",
		[LANGUAGES.EN]: "submit",
	},
	NEXT:{
		[LANGUAGES.INA]: "lanjut",
		[LANGUAGES.EN]: "next",
	},
};

export default words;
