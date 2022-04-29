import React from "react";
import { render, screen, fireEvent } from "../../../utils/test/reduxRender";
import LanguageButton from "../index";

jest.mock("next/router", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "",
			query: "",
			asPath: "",
			push: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
			},
			beforePopState: jest.fn(() => null),
			prefetch: jest.fn(() => null),
		};
	},
}));

describe("LanguageButton", () => {
	beforeEach(async () => {
		const useRouter = jest.spyOn(require("next/router"), "useRouter");

		useRouter.mockImplementation(() => ({
			route: "/",
			pathname: "",
			query: "",
			asPath: "",
			push: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
			},
			beforePopState: jest.fn(() => null),
			prefetch: jest.fn(() => null),
		}));
	});
	it("should render option with english choosen", () => {
		render(<LanguageButton />);
		const engEl = screen.getByText(/eng/i);
		const idnEl = screen.getByText(/idn/i);
		expect(engEl).toHaveClass("MuiButton-contained");
		expect(idnEl).toHaveClass("MuiButton-outlined");
	});
	it("should change to indonesia by clicking it", () => {
		render(<LanguageButton />);
		const engEl = screen.getByText(/eng/i);
		const idnEl = screen.getByText(/idn/i);
		fireEvent.click(idnEl);
		expect(engEl).toHaveClass("MuiButton-outlined");
		expect(idnEl).toHaveClass("MuiButton-contained");
	});
});
