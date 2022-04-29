import React from "react";
import { render, screen } from "../../../utils/test/reduxRender";
import LevelButton from "../index";
import { act } from "react-dom/test-utils";

describe("LevelButton", () => {
	it("should render level 1", () => {
		jest.useFakeTimers();
		render(<LevelButton />);
		const selectEl = screen.getByLabelText(/lv/i);
		expect(selectEl).toHaveTextContent("1");
	});
	// TODO: how to test select option click? HELP T_T
});
