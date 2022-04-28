import React from "react";
import { render, screen } from "@testing-library/react";
import { BasicMysteryColor, OpenedMysteryColor } from "./MysteryColor.composition";

describe("MysteryColor", () => {
	it("should render color", () => {
		render(<BasicMysteryColor />);
		const colorEl = screen.getByTestId("color");
		expect(colorEl).toHaveStyle("background-color: rgb(0, 255, 0);");
	});
	it("should render color and the names", () => {
		render(<OpenedMysteryColor />);
		const colorEl = screen.getByTestId("color");
		const nameEl = screen.getByText("lime");
		const valueEls = screen.getAllByTestId("value");
		expect(colorEl).toHaveStyle("background-color: rgb(0, 255, 0);");
		expect(nameEl).toBeInTheDocument();
		expect(valueEls.length).toEqual(3);
		expect(valueEls[0]).toHaveTextContent("R: 0");
		expect(valueEls[1]).toHaveTextContent("G: 255");
		expect(valueEls[2]).toHaveTextContent("B: 0");
	});
});
