import React from "react";
import { render, screen, fireEvent } from "../../../utils/test/reduxRender";
import Navbar from "../index";

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

describe("Navbar", () => {
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
	it("should navbar properly", () => {
		render(<Navbar />);
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
