import React from "react";
import { render, screen, fireEvent } from "../../../utils/test/reduxRender";
import Navbar from "../index";

describe("Navbar", () => {
	it("should navbar properly", () => {
		render(<Navbar />);
		const titleEl = screen.getByText(/colors/i);
		const levelEl = screen.getByLabelText(/level/i);
		const modeEl = screen.getByLabelText(/dark button/i);
		const languageEl = screen.getByLabelText(/en-US/i);
		const listEl = screen.getByLabelText(/list/i);
		expect(titleEl).toBeVisible();
		expect(levelEl).toBeVisible();
		expect(modeEl).toBeVisible();
		expect(languageEl).toBeVisible();
		expect(listEl).toBeVisible();
	});
});
