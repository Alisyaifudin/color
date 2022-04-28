import React from "react";
import { render, screen, fireEvent } from "../../../utils/test/reduxRender";
import TextField from "../index";
import produce from "immer";
import { preloadedState } from "../../../app/store";
import { LANGUAGES } from "../../../utils/DICT";

const idState = produce(preloadedState, (draftState) => {
	draftState.meta.language = LANGUAGES.INA;
});

describe("TextField", () => {
	it("should show textbox", () => {
		render(<TextField />);
		const textboxEl = screen.getByLabelText(/guess/i);
		const skipEl = screen.getByRole("button", { name: "skip" });
		const submitEl = screen.getByRole("button", { name: "submit" });
		expect(skipEl).toBeInTheDocument();
		expect(submitEl).toBeInTheDocument();
		expect(textboxEl).toBeInTheDocument();
	});
	it("should be able to type in", () => {
		render(<TextField />);
		const textboxEl = screen.getByLabelText(/guess/i);
		fireEvent.change(textboxEl, { target: { value: "lime" } });
		expect(textboxEl).toHaveProperty("value", "lime");
	});
	it("should be able to click skip", () => {
		render(<TextField />);
		const textboxEl = screen.getByLabelText(/guess/i);
		fireEvent.change(textboxEl, { target: { value: "lime" } });
		const skipEl = screen.getByRole("button", { name: "skip" });
		fireEvent.click(skipEl);
		expect(textboxEl).toHaveProperty("value", "");
	});
	it("should be able to click submit", () => {
		render(<TextField />);
		const textboxEl = screen.getByLabelText(/guess/i);
		fireEvent.change(textboxEl, { target: { value: "lime" } });
		const submitEl = screen.getByRole("button", { name: "submit" });
		fireEvent.click(submitEl);
		expect(textboxEl).toBeDisabled();
		expect(submitEl).toBeDisabled();
	});
	it("should be able to press enter to submit", () => {
		render(<TextField />);
		const textboxEl = screen.getByLabelText(/guess/i);
		fireEvent.change(textboxEl, { target: { value: "lime" } });
		const submitEl = screen.getByRole("button", { name: "submit" });
		fireEvent.keyDown(textboxEl, { key: "Enter" });
		expect(textboxEl).toBeDisabled();
		expect(submitEl).toBeDisabled();
	});
	it("should show next button & be able to click it after clicking submit", () => {
		render(<TextField />);
		const textboxEl = screen.getByLabelText(/guess/i);
		fireEvent.change(textboxEl, { target: { value: "lime" } });
		const submitEl = screen.getByRole("button", { name: "submit" });
		fireEvent.click(submitEl);
		const nextEl = screen.getByRole("button", { name: "next" });
		fireEvent.click(nextEl);
		expect(textboxEl).toHaveProperty("value", "");
		expect(textboxEl).not.toBeDisabled();
		expect(submitEl).not.toBeDisabled();
	});
	it("should show textbox in indonesia", () => {
		render(<TextField />, { preloadedState: idState });
		const textboxEl = screen.getByLabelText(/tebak/i);
		const skipEl = screen.getByRole("button", { name: "lewati" });
		const submitEl = screen.getByRole("button", { name: "jawab" });
		expect(textboxEl.parentElement?.previousSibling).toHaveTextContent(/tebak/i);
		expect(skipEl).toBeInTheDocument();
		expect(submitEl).toBeInTheDocument();
		expect(textboxEl).toBeInTheDocument();
	});
});
