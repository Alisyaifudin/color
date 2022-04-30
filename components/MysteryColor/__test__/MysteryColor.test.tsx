import React from "react";
import { render, screen, fireEvent } from "../../../utils/test/reduxRender";
import MysteryColor from "../index";
import produce from "immer";
import { preloadedState } from "../../../app/store";

const doneState = produce(preloadedState, (draftState) => {
	draftState.meta.done = true;
});

describe("MysteryColor", () => {
	it("should render color", () => {
		render(<MysteryColor />);
		const colorEl = screen.getByTestId("color");
		expect(colorEl).toHaveStyle("background-color: rgb(0, 0, 0);");
	});
	it("should render color and the names", () => {
		render(<MysteryColor />, { preloadedState: doneState });
		const colorEl = screen.getByTestId("color");
		const nameEl = screen.getByText("black");
		const valueEls = screen.getAllByTestId("value");
		const iconEl = screen.getByTestId("RotateRightIcon");
		expect(colorEl).toHaveStyle("background-color: rgb(0, 0, 0);");
		expect(nameEl).toBeVisible();
		expect(valueEls.length).toEqual(3);
		expect(valueEls[0]).toHaveTextContent("r: 0");
		expect(valueEls[1]).toHaveTextContent("g: 0");
		expect(valueEls[2]).toHaveTextContent("b: 0");
		expect(iconEl).toBeVisible();
	});
	it("should change to hsv by clicking the button", () => {
		render(<MysteryColor />, { preloadedState: doneState });
		const iconEl = screen.getByTestId("RotateRightIcon");
		fireEvent.click(iconEl);
		const valueEls = screen.getAllByTestId("value");
		expect(valueEls[0]).toHaveTextContent("h: 0");
		expect(valueEls[1]).toHaveTextContent("s: 0");
		expect(valueEls[2]).toHaveTextContent("v: 0");
	});
	it("should change to rgb after clicking the button twice", () => {
		render(<MysteryColor />, { preloadedState: doneState });
		const iconEl = screen.getByTestId("RotateRightIcon");
		fireEvent.click(iconEl);
		fireEvent.click(iconEl);
		const valueEls = screen.getAllByTestId("value");
		expect(valueEls[0]).toHaveTextContent("r: 0");
		expect(valueEls[1]).toHaveTextContent("g: 0");
		expect(valueEls[2]).toHaveTextContent("b: 0");
	});
});
