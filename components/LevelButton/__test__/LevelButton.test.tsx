import React from "react";
import { render, screen } from "../../../utils/test/reduxRender";
import LevelButton from "../index";

describe("LevelButton", () => {
	it("should render level 1", () => {
		render(<LevelButton />);
		const selectEl = screen.getByLabelText(/lv/i);
		expect(selectEl).toHaveTextContent("1");
	});
	// TODO: how to test select option click? HELP T_T
});
