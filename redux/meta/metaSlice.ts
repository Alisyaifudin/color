import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MetaState, themeTypes } from "./metaInterface";
import { THEME, LANGUAGES } from "../../utils/DICT";
import colors from "../../utils/colors";

export const initialState: MetaState = { 
	theme: THEME.DARK,
	language: LANGUAGES.EN,
	mysteryName: {
		[LANGUAGES.INA]: "hitam",
		[LANGUAGES.EN]: "black",
	},
	hsv: false,
	mysteryColor: {
		r: 0,
		g: 0,
		b: 0,
	},
	guessColor: {
		r: -1,
		g: -1,
		b: -1,
	},
	guessName: "",
	done: false,
	win: false,
	level: 1,
	score: 0,
	showList: false,
	showLevel: 1,
};

export const metaSlice = createSlice({
	name: "meta",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<themeTypes>) => {
			state.theme = action.payload;
		},
		setLanguage: (state, action: PayloadAction<string>) => {
			state.language = action.payload;
		},
		setGuessName: (state, action: PayloadAction<string>) => {
			state.guessName = action.payload;
		},
		setShowList: (state) => {
			state.showList = !state.showList;
		},
		setShowLevel: (state, action: PayloadAction<number>) => {
			state.showLevel = action.payload;
		},
		submit: (state) => {
			state.done = true;
			const colorRBG = colors.map((c) => c.color);
			const colorNames = colors.map((c) => c.name[state.language]);
			const index = colorNames.findIndex((c) =>
				c.map((co) => co.toLocaleLowerCase()).includes(state.guessName.toLocaleLowerCase())
			);
			if (index === -1) {
				state.guessColor = { r: -1, g: -1, b: -1 };
				state.win = false;
				return;
			}
			if (
				state.mysteryColor.r === colorRBG[index].r &&
				state.mysteryColor.g === colorRBG[index].g &&
				state.mysteryColor.b === colorRBG[index].b
			) {
				state.win = true;
				state.guessColor = state.mysteryColor;
				state.score += 1;
				return;
			}
			state.win = false;
			state.guessColor = colorRBG[index];
		},
		skip: (state) => {
			state.done = false;
			state.guessName = "";
			if (!state.win) state.score = 0;
			const thecolors = colors.filter((color) => color.level <= state.level);
			const random = Math.floor(Math.random() * thecolors.length);
			const namesEng = thecolors[random].name[LANGUAGES.EN];
			const randomEng = Math.floor(Math.random() * namesEng.length);
			const namesIdn = thecolors[random].name[LANGUAGES.INA];
			const randomIdn = Math.floor(Math.random() * namesIdn.length);
			state.mysteryName = {
				[LANGUAGES.EN]: namesEng[randomEng],
				[LANGUAGES.INA]: namesIdn[randomIdn],
			};
			state.mysteryColor = thecolors[random].color;
		},
		setHsv: (state) => {
			state.hsv = !state.hsv;
		},
		setLevel: (state, action: PayloadAction<number>) => {
			state.level = action.payload;
			const thecolors = colors.filter((color) => color.level <= action.payload);
			const random = Math.floor(Math.random() * thecolors.length);
			const namesEng = thecolors[random].name[LANGUAGES.EN];
			const randomEng = Math.floor(Math.random() * namesEng.length);
			const namesIdn = thecolors[random].name[LANGUAGES.INA];
			const randomIdn = Math.floor(Math.random() * namesIdn.length);
			state.mysteryName = {
				[LANGUAGES.EN]: namesEng[randomEng],
				[LANGUAGES.INA]: namesIdn[randomIdn],
			};
			state.mysteryColor = thecolors[random].color;
			state.score = 0;
			state.done = false;
		},
	},
});

export const {
	setTheme,
	setShowLevel,
	setLanguage,
	skip,
	submit,
	setGuessName,
	setHsv,
	setLevel,
	setShowList,
} = metaSlice.actions;

export default metaSlice.reducer;
