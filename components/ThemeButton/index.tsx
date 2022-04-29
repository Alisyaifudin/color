import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { themeTypes } from "../../redux/meta/metaInterface";
import { setTheme } from "../../redux/meta/metaSlice";
import { ThemeButton as ThemeButtonProto } from "./prototype";

export default function ThemeButton() {
	const dispatch = useAppDispatch();
	const mode = useAppSelector((state) => state.meta.theme);
	const handleClick = (mode: themeTypes) => {
		dispatch(setTheme(mode));
		window.localStorage.setItem("mode", mode);
	};
	return <ThemeButtonProto mode={mode} onClick={handleClick} />;
}
