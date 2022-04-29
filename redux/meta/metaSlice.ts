import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MetaState, themeTypes } from "./metaInterface";
import { THEME, LANGUAGES } from "../../utils/DICT";
import colors from "../../utils/colors";

export const initialState: MetaState = {
	theme: THEME.DARK,
	language: LANGUAGES.EN,
	name: "black",
	hsv: false,
	color: {
		r: 0,
		g: 0,
		b: 0,
	},
	guess: {
		r: 0,
		g: 0,
		b: 0,
	},
	answer: "",
	done: false,
	win: false,
};

export const metaSlice = createSlice({
	name: "meta",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<themeTypes>) => {
			state.theme = action.payload;
		},
		setAnswer: (state, action: PayloadAction<string>) => {
			state.answer = action.payload;
		},
		submit: (state) => {
			state.done = true;
			if (state.answer === state.name) {
				state.win = true;
				state.guess = state.color;
				return;
			}
			state.win = false;
			const colorRBG = colors.map((c) => c.color);
			const colorNames = colors.map((c) => c.name);
			const index = colorNames.findIndex((c) => c === state.answer);
			if (index !== -1) state.guess = colorRBG[index];
			else state.guess = { r: -1, g: -1, b: -1 };
		},
		skip: (state) => {
			state.done = false;
			state.answer = "";
			state.win = false;
		},
		setHsv: (state) => {
			state.hsv = !state.hsv;
		},
	},
});

export const { setTheme, skip, submit, setAnswer, setHsv } = metaSlice.actions;

export default metaSlice.reducer;
