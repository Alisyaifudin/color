import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MetaState, themeTypes } from "./metaInterface";
import { THEME, LANGUAGES } from "../../utils/DICT";

export const initialState: MetaState = {
	theme: THEME.DARK,
	language: LANGUAGES.INA,
	name: "black",
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
	},
});

export const { setTheme } = metaSlice.actions;

export default metaSlice.reducer;
