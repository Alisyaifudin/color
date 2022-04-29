import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BasicListLevel } from "./ListLevel.composition";

describe("ListLevel", () => {
	it("should render all levels in list with level 1 being selected", () => {
		render(<BasicListLevel />);
		const levelEls = screen.getAllByTestId("list");
		expect(levelEls.length).toEqual(3);
		expect(levelEls[0]).toHaveClass("Mui-selected");
		expect(levelEls[1]).not.toHaveClass("Mui-selected");
		expect(levelEls[2]).not.toHaveClass("Mui-selected");
	});
	it("should be able to select level 3", () => {
		render(<BasicListLevel />);
		const levelEls = screen.getAllByTestId("list");
		fireEvent.click(levelEls[2]);
		expect(levelEls[0]).not.toHaveClass("Mui-selected");
		expect(levelEls[1]).not.toHaveClass("Mui-selected");
		expect(levelEls[2]).toHaveClass("Mui-selected");
	});
});
