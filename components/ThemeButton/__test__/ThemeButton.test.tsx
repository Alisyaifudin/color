import React from "react";
import { render, screen, fireEvent } from "../../../utils/test/reduxRender";
import ThemeButton from "../index";

describe("ThemeButton", () => {
	it("should show the dark button and be able to click it", () => {
		render(<ThemeButton />);
		const darkEl = screen.getByLabelText(/dark button/i);
		expect(darkEl).toBeInTheDocument();
		fireEvent.click(darkEl);
		const lightEl = screen.getByLabelText(/light button/i);
		expect(lightEl).toBeInTheDocument();
		expect(darkEl).not.toBeInTheDocument();
	});
});
