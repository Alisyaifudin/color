import React from "react";
import { render, screen } from "@testing-library/react";
import { BasicNavbar } from "./Navbar.composition";

describe("Navbar", () => {
	it("should navbar properly", () => {
		render(<BasicNavbar />);
		// const colorEl = screen.getByTestId("color");
		// const nameEl = screen.getByText("lime");
		// const valueEls = screen.getAllByTestId("value");
		// expect(colorEl).toHaveStyle("background-color: rgb(0, 255, 0);");
		// expect(valueEls[0]).toHaveTextContent("r: 0");
		// expect(valueEls[1]).toHaveTextContent("g: 255");
		// expect(valueEls[2]).toHaveTextContent("b: 0");
		// expect(nameEl).toBeVisible();
	});
});
