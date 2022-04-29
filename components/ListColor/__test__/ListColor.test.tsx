import React from "react";
import { render, screen } from "../../../utils/test/reduxRender";
import ListColor from "../index";
import colors from "../../../utils/colors";
import { LANGUAGES } from "../../../utils/DICT";
import produce from "immer";
import { preloadedState } from "../../../app/store";

const level2State = produce(preloadedState, (draftState) => {
	draftState.meta.showLevel = 2;
});

const level3State = produce(preloadedState, (draftState) => {
	draftState.meta.showLevel = 3;
});

describe("ListColor", () => {
	it("should render all colors and their names (level 1)", () => {
		render(<ListColor />);
		const colorEls = screen.getAllByTestId("color");
		const thecolors = colors.filter((color) => color.level <= 1);
		expect(colorEls.length).toEqual(thecolors.length);
		thecolors.forEach((color) => {
			const engName = screen.getByText(color.name[LANGUAGES.EN as "en-US" | "id-ID"]);
			const idnName = screen.getByText(color.name[LANGUAGES.INA as "en-US" | "id-ID"]);
			expect(engName).toBeInTheDocument();
			expect(idnName).toBeInTheDocument();
		});
	});
	it("should render all colors and their names (level 2)", () => {
		render(<ListColor />, {preloadedState: level2State});
		const colorEls = screen.getAllByTestId("color");
		const thecolors = colors.filter((color) => color.level <= 2);
		expect(colorEls.length).toEqual(thecolors.length);
		thecolors.forEach((color) => {
			const engName = screen.getByText(color.name[LANGUAGES.EN as "en-US" | "id-ID"]);
			const idnName = screen.getByText(color.name[LANGUAGES.INA as "en-US" | "id-ID"]);
			expect(engName).toBeInTheDocument();
			expect(idnName).toBeInTheDocument();
		});
	});
  it("should render all colors and their names (level 3)", () => {
		render(<ListColor />, {preloadedState: level3State});
		const colorEls = screen.getAllByTestId("color");
		const thecolors = colors.filter((color) => color.level <= 3);
		expect(colorEls.length).toEqual(thecolors.length);
		thecolors.forEach((color) => {
			const engName = screen.getByText(color.name[LANGUAGES.EN as "en-US" | "id-ID"]);
			const idnName = screen.getByText(color.name[LANGUAGES.INA as "en-US" | "id-ID"]);
			expect(engName).toBeInTheDocument();
			expect(idnName).toBeInTheDocument();
		});
	});
});
