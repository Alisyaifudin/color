import React from "react";
import { render, screen } from "@testing-library/react";
import { Level1ListColor, Level2ListColor, Level3ListColor, colors, langs } from "./ListColor.composition";

describe("ListColor", () => {
	it("should render all colors and their names (level 1)", () => {
		render(<Level1ListColor />);
		const colorEls = screen.getAllByTestId("color");
		const thecolors = colors.filter((color) => color.level <= 1);
		expect(colorEls.length).toEqual(thecolors.length);
		thecolors.forEach((color) => {
			const engName = screen.getByText(color.name[langs[0] as "en-US" | "id-ID"]);
			const idnName = screen.getByText(color.name[langs[1] as "en-US" | "id-ID"]);
			expect(engName).toBeInTheDocument();
			expect(idnName).toBeInTheDocument();
		});
	});
	it("should render all colors and their names (level 2)", () => {
		render(<Level2ListColor />);
		const colorEls = screen.getAllByTestId("color");
		const thecolors = colors.filter((color) => color.level <= 2);
		expect(colorEls.length).toEqual(thecolors.length);
		thecolors.forEach((color) => {
			const engName = screen.getByText(color.name[langs[0] as "en-US" | "id-ID"]);
			const idnName = screen.getByText(color.name[langs[1] as "en-US" | "id-ID"]);
			expect(engName).toBeInTheDocument();
			expect(idnName).toBeInTheDocument();
		});
	});
  it("should render all colors and their names (level 3)", () => {
		render(<Level3ListColor />);
		const colorEls = screen.getAllByTestId("color");
		const thecolors = colors.filter((color) => color.level <= 3);
    expect(colorEls.length).toEqual(thecolors.length);
		thecolors.forEach((color) => {
			const engName = screen.getByText(color.name[langs[0] as "en-US" | "id-ID"]);
			const idnName = screen.getByText(color.name[langs[1] as "en-US" | "id-ID"]);
			expect(engName).toBeInTheDocument();
			expect(idnName).toBeInTheDocument();
		});
	});
});
