import { themeTypes } from "../redux/meta/metaInterface";

export const LEVELS = [1, 2, 3];

export const LANGUAGES = {
	INA: "id-ID",
	EN: "en-US",
};

export const VERSION = "0.1.0";

export const LANGUAGES_NAME = {
	[LANGUAGES.INA]: "IDN",
	[LANGUAGES.EN]: "ENG",
};

export const THEME = {
	DARK: "dark" as themeTypes,
	LIGHT: "light" as themeTypes,
};

export const GENERAL = {};

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
	SKIP: {
		[LANGUAGES.INA]: "lewati",
		[LANGUAGES.EN]: "skip",
	},
	SUBMIT: {
		[LANGUAGES.INA]: "jawab",
		[LANGUAGES.EN]: "submit",
	},
	NEXT: {
		[LANGUAGES.INA]: "lanjut",
		[LANGUAGES.EN]: "next",
	},
	NOT_FOUND: {
		[LANGUAGES.INA]: "Tidak Ada",
		[LANGUAGES.EN]: "Not Found",
	},
};

export default words;
