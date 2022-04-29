import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { EngLanguage } from "./LanguageButton.composition";

describe("LanguageButton", () => {
	it("should render option with english choosen", () => {
		render(<EngLanguage />);
		const engEl = screen.getByText(/eng/i);
		const idnEl = screen.getByText(/idn/i);
		expect(engEl).toHaveClass("MuiButton-contained");
		expect(idnEl).toHaveClass("MuiButton-outlined");
	});
  it("should change to indonesia by clicking it", () => {
		render(<EngLanguage />);
		const engEl = screen.getByText(/eng/i);
		const idnEl = screen.getByText(/idn/i);
    fireEvent.click(idnEl)
		expect(engEl).toHaveClass("MuiButton-outlined");
		expect(idnEl).toHaveClass("MuiButton-contained");
	});
});
