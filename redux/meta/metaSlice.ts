import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MetaState, themeTypes } from "./metaInterface";
import { THEME, LANGUAGES } from "../../utils/DICT";
import colors from "../../utils/colors";

export const initialState: MetaState = {
	theme: THEME.DARK,
	language: LANGUAGES.EN,
	mysteryName: "black",
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
};

export const metaSlice = createSlice({
	name: "meta",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<themeTypes>) => {
			state.theme = action.payload;
		},
		setGuessName: (state, action: PayloadAction<string>) => {
			state.guessName = action.payload;
		},
		submit: (state) => {
			state.done = true;
			if (state.guessName === state.mysteryName) {
				state.win = true;
				state.guessColor = state.mysteryColor;
				return;
			}
			state.win = false;
			const colorRBG = colors.map((c) => c.color);
			const colorNames = colors.map((c) => c.name.toLocaleLowerCase());
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
	},
});

export const { setTheme, skip, submit, setGuessName, setHsv } = metaSlice.actions;

export default metaSlice.reducer;
