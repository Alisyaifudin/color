import React from "react";
import { Navbar as NavbarProto } from "./prototype";
import ThemeButton from "../ThemeButton";

export default function Navbar() {
	const LevelButton = () => {
		return <div style={{ border: "red 1px solid" }}>lv</div>;
	};
	const LanguageButton = () => {
		return <div style={{ border: "red 1px solid" }}>id-ID</div>;
	};
	const ListButton = () => {
		return <div style={{ border: "red 1px solid" }}>List</div>;
	};
	return (
		<NavbarProto
			LevelButton={<LevelButton />}
			LanguageButton={<LanguageButton />}
			ThemeButton={<ThemeButton />}
			ListButton={<ListButton />}
		/>
	);
}
