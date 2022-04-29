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
		submit: (state) => {
			state.done = true;
			if (state.guessName === state.mysteryName[state.language]) {
				state.win = true;
				state.guessColor = state.mysteryColor;
				state.score += 1;
				return;
			}
			state.win = false;
			state.score = 0;
			const colorRBG = colors.map((c) => c.color);
			const colorNames = colors.map((c) => c.name[state.language].toLocaleLowerCase());
			const index = colorNames.findIndex((c) => c === state.guessName.toLocaleLowerCase());
			if (index !== -1) state.guessColor = colorRBG[index];
			else state.guessColor = { r: -1, g: -1, b: -1 };
		},
		skip: (state) => {
			state.done = false;
			state.guessName = "";
			state.win = false;
		},
		setHsv: (state) => {
			state.hsv = !state.hsv;
		},
		setLevel: (state, action: PayloadAction<number>) => {
			state.level = action.payload;
		},
	},
});

export const { setTheme, setLanguage, skip, submit, setGuessName, setHsv, setLevel, setShowList } =
	metaSlice.actions;

export default metaSlice.reducer;
