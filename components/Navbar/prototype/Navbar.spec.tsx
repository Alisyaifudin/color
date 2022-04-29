import React from "react";
import { render, screen } from "@testing-library/react";
import { BasicNavbar } from "./Navbar.composition";

describe("Navbar", () => {
	it("should navbar properly", () => {
		render(<BasicNavbar />);
		const titleEl = screen.getByText(/colors/i);
		const levelEl = screen.getByLabelText(/lv/i);
		const modeEl = screen.getByLabelText(/dark button/i);
		const languageEl = screen.getByLabelText(/languages/i);
		const listEl = screen.getByLabelText(/list/i);
		expect(titleEl).toBeVisible();
		expect(levelEl).toBeVisible();
		expect(modeEl).toBeVisible();
		expect(languageEl).toBeVisible();
		expect(listEl).toBeVisible();
	});
});
