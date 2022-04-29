import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BasicLevelButton } from "./LevelButton.composition";
import { act } from "react-dom/test-utils";

describe("LevelButton", () => {
	it("should render level 1", () => {
		jest.useFakeTimers();
		render(<BasicLevelButton />);
		const selectEl = screen.getByLabelText(/lv/i);
		expect(selectEl).toHaveTextContent("1");
	});
  // TODO: how to test select option click? HELP T_T
});
