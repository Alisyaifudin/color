import React from "react";
import { render, screen, fireEvent } from "../../../utils/test/reduxRender";
import AnswerColor from "../index";
import produce from "immer";
import { preloadedState } from "../../../app/store";
import { LANGUAGES } from "../../../utils/DICT";

const hsvState = produce(preloadedState, (draftState) => {
	draftState.meta.hsv = true;
	draftState.meta.guessName = "black";
	draftState.meta.guessColor = { r: 0, g: 0, b: 0 };
});

const blackState = produce(preloadedState, (draftState) => {
	draftState.meta.guessName = "black";
	draftState.meta.guessColor = { r: 0, g: 0, b: 0 };
});

const idState = produce(preloadedState, (draftState) => {
	draftState.meta.language = LANGUAGES.INA;
});

describe("AnswerColor", () => {
	it("should render color black", () => {
		render(<AnswerColor />, { preloadedState: blackState });
		const colorEl = screen.getByTestId("color");
		const nameEl = screen.getByText("black");
		const valueEls = screen.getAllByTestId("value");
		expect(colorEl).toHaveStyle("background-color: rgb(0, 0, 0);");
		expect(valueEls[0]).toHaveTextContent("r: 0");
		expect(valueEls[1]).toHaveTextContent("g: 0");
		expect(valueEls[2]).toHaveTextContent("b: 0");
		expect(nameEl).toBeVisible();
	});
	it("should render color in hsv", () => {
		render(<AnswerColor />, { preloadedState: hsvState });
		const colorEl = screen.getByTestId("color");
		const nameEl = screen.getByText("black");
		const valueEls = screen.getAllByTestId("value");
		expect(colorEl).toHaveStyle("background-color: rgb(0, 0, 0);");
		expect(valueEls[0]).toHaveTextContent("h: 0");
		expect(valueEls[1]).toHaveTextContent("s: 0");
		expect(valueEls[2]).toHaveTextContent("v: 0");
		expect(nameEl).toBeVisible();
	});
	it("should render 'no color'", () => {
		render(<AnswerColor />);
		const colorEl = screen.getByTestId("no-color");
		const nameEl = screen.getByText(/not found/i);
		const valueEls = screen.getAllByTestId("value");
		expect(valueEls[0]).toHaveTextContent("r: -1");
		expect(valueEls[1]).toHaveTextContent("g: -1");
		expect(valueEls[2]).toHaveTextContent("b: -1");
		expect(nameEl).toBeVisible();
		expect(colorEl).toBeInTheDocument();
	});
	it("should render 'no color' in Id-ID", () => {
		render(<AnswerColor />, { preloadedState: idState });
		const colorEl = screen.getByTestId("no-color");
		const nameEl = screen.getByText(/tidak ada/i);
		const valueEls = screen.getAllByTestId("value");
		expect(valueEls[0]).toHaveTextContent("r: -1");
		expect(valueEls[1]).toHaveTextContent("g: -1");
		expect(valueEls[2]).toHaveTextContent("b: -1");
		expect(nameEl).toBeVisible();
		expect(colorEl).toBeInTheDocument();
	});
});
