import React from "react";
import { Navbar as NavbarProto } from "./prototype";
import ThemeButton from "../ThemeButton";
import LanguageButton from "../LanguageButton";
import LevelButton from "../LevelButton";

export default function Navbar() {
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
