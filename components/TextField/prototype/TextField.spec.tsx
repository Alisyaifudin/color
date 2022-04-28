import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BasicTextField, IdTextField } from "./TextField.compositon";

describe("TextField", () => {
	it("should show textbox", () => {
		render(<BasicTextField />);
		const textboxEl = screen.getByLabelText(/guess/i);
		const skipEl = screen.getByRole("button", { name: "skip" });
		const submitEl = screen.getByRole("button", { name: "submit" });
		expect(skipEl).toBeInTheDocument();
		expect(submitEl).toBeInTheDocument();
		expect(textboxEl).toBeInTheDocument();
	});
	it("should be able to type in", () => {
		render(<BasicTextField />);
		const textboxEl = screen.getByLabelText(/guess/i);
		fireEvent.change(textboxEl, { target: { value: "lime" } });
		expect(textboxEl).toHaveProperty("value", "lime");
	});
	it("should be able to click skip", () => {
		render(<BasicTextField />);
		const textboxEl = screen.getByLabelText(/guess/i);
		fireEvent.change(textboxEl, { target: { value: "lime" } });
		const skipEl = screen.getByRole("button", { name: "skip" });
		const textEl = screen.getByText("text");
		fireEvent.click(skipEl);
		expect(textboxEl).toHaveProperty("value", "");
		expect(textEl).toHaveTextContent("skip");
	});
	it("should be able to click submit", () => {
		render(<BasicTextField />);
		const textboxEl = screen.getByLabelText(/guess/i);
		fireEvent.change(textboxEl, { target: { value: "lime" } });
		const submitEl = screen.getByRole("button", { name: "submit" });
		const textEl = screen.getByText("text");
		fireEvent.click(submitEl);
		expect(textboxEl).toBeDisabled();
		expect(submitEl).toBeDisabled();
		expect(textEl).toHaveTextContent("submit");
	});
	it("should show next button & be able to click it after clicking submit", () => {
		render(<BasicTextField />);
		const textboxEl = screen.getByLabelText(/guess/i);
		fireEvent.change(textboxEl, { target: { value: "lime" } });
		const submitEl = screen.getByRole("button", { name: "submit" });
		const textEl = screen.getByText("text");
		fireEvent.click(submitEl);
		const nextEl = screen.getByRole("button", { name: "next" });
		fireEvent.click(nextEl);
		expect(textEl).toHaveTextContent("skip");
		expect(textboxEl).toHaveProperty("value", "");
		expect(textboxEl).not.toBeDisabled();
		expect(submitEl).not.toBeDisabled();
	});
	it("should show textbox in indonesia", () => {
		render(<IdTextField />);
		const textboxEl = screen.getByLabelText(/tebak/i);
		const skipEl = screen.getByRole("button", { name: "lewati" });
		const submitEl = screen.getByRole("button", { name: "jawab" });
		expect(textboxEl.parentElement?.previousSibling).toHaveTextContent(/tebak/i);
		expect(skipEl).toBeInTheDocument();
		expect(submitEl).toBeInTheDocument();
		expect(textboxEl).toBeInTheDocument();
	});
});
