import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { LightMode } from "./ThemeButton.composition";

describe("ThemeButton", () => {
	it("should show the light button and be able to click it", () => {
		render(<LightMode />);
		const lightEl = screen.getByLabelText(/light button/i);
		expect(lightEl).toBeInTheDocument();
		fireEvent.click(lightEl);
		const darkEl = screen.getByLabelText(/dark button/i);
		expect(darkEl).toBeInTheDocument();
		expect(lightEl).not.toBeInTheDocument();
	});
});
