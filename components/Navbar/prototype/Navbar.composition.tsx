import React from "react";
import { Navbar } from "./Navbar";

export const BasicNavbar = () => {
	const ThemeButton = () => {
		return <div aria-label="dark button" style={{ border: "red 1px solid" }}>mode</div>;
	};
	const LevelButton = () => {
		return <div aria-label="lv" style={{ border: "red 1px solid" }}>lv</div>;
	};
	const LanguageButton = () => {
		return <div aria-label="languages" style={{ border: "red 1px solid" }}>id-ID</div>;
	};
	const ListButton = () => {
		return <div aria-label="list" style={{ border: "red 1px solid" }}>List</div>;
	};
	return (
		<Navbar
			LevelButton={<LevelButton />}
			LanguageButton={<LanguageButton />}
			ThemeButton={<ThemeButton />}
			ListButton={<ListButton />}
		/>
	);
};
