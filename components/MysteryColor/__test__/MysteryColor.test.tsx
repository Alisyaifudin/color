import React from "react";
import { render, screen } from "../../../utils/test/reduxRender";
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
		render(<MysteryColor />, { preloadedState });
		const colorEl = screen.getByTestId("color");
		const nameEl = screen.getByText("lime");
		const valueEls = screen.getAllByTestId("value");
		expect(colorEl).toHaveStyle("background-color: rgb(0, 0, 0);");
		expect(nameEl).toBeInTheDocument();
		expect(valueEls.length).toEqual(3);
		expect(valueEls[0]).toHaveTextContent("R: 0");
		expect(valueEls[1]).toHaveTextContent("G: 0");
		expect(valueEls[2]).toHaveTextContent("B: 0");
	});
});
