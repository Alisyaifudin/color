import React from "react";
import { render, screen } from "@testing-library/react";
import {
	BasicAnswerColor,
	HsvAnswerColor,
	NoAnswerColor,
	NoIdAnswerColor,
} from "./AnswerColor.composition";

describe("AnswerColor", () => {
	it("should render color", () => {
		render(<BasicAnswerColor />);
		const colorEl = screen.getByTestId("color");
		const nameEl = screen.getByText("lime");
		const valueEls = screen.getAllByTestId("value");
		expect(colorEl).toHaveStyle("background-color: rgb(0, 255, 0);");
		expect(valueEls[0]).toHaveTextContent("r: 0");
		expect(valueEls[1]).toHaveTextContent("g: 255");
		expect(valueEls[2]).toHaveTextContent("b: 0");
		expect(nameEl).toBeVisible();
	});
	it("should render color in hsv", () => {
		render(<HsvAnswerColor />);
		const colorEl = screen.getByTestId("color");
		const nameEl = screen.getByText("lime");
		const valueEls = screen.getAllByTestId("value");
		expect(colorEl).toHaveStyle("background-color: rgb(0, 255, 0);");
		expect(valueEls[0]).toHaveTextContent("h: 120");
		expect(valueEls[1]).toHaveTextContent("s: 1");
		expect(valueEls[2]).toHaveTextContent("v: 1");
		expect(nameEl).toBeVisible();
	});
	it("should render 'no color'", () => {
		render(<NoAnswerColor />);
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
		render(<NoIdAnswerColor />);
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
