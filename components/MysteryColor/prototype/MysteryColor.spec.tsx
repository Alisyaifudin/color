import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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
		const iconEl = screen.getByTestId("RotateRightIcon");
		expect(colorEl).toHaveStyle("background-color: rgb(0, 255, 0);");
		expect(nameEl).toBeVisible();
		expect(valueEls.length).toEqual(3);
		expect(valueEls[0]).toHaveTextContent("r: 0");
		expect(valueEls[1]).toHaveTextContent("g: 255");
		expect(valueEls[2]).toHaveTextContent("b: 0");
		expect(iconEl).toBeVisible();
	});
	it("should change to hsv by clicking the button", () => {
		render(<OpenedMysteryColor />);
		const iconEl = screen.getByTestId("RotateRightIcon");
		fireEvent.click(iconEl);
		const valueEls = screen.getAllByTestId("value");
		expect(valueEls[0]).toHaveTextContent("h: 120");
		expect(valueEls[1]).toHaveTextContent("s: 1");
		expect(valueEls[2]).toHaveTextContent("v: 1");
	});
	it("should change to rgb after clicking the button twice", () => {
		render(<OpenedMysteryColor />);
		const iconEl = screen.getByTestId("RotateRightIcon");
		fireEvent.click(iconEl);
		fireEvent.click(iconEl);
		const valueEls = screen.getAllByTestId("value");
		expect(valueEls[0]).toHaveTextContent("r: 0");
		expect(valueEls[1]).toHaveTextContent("g: 255");
		expect(valueEls[2]).toHaveTextContent("b: 0");
	});
});
