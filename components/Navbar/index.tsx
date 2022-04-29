import React from "react";
import { Navbar as NavbarProto } from "./prototype";
import ThemeButton from "../ThemeButton";
import LanguageButton from "../LanguageButton";
import LevelButton from "../LevelButton";
import ListAltIcon from "@mui/icons-material/ListAlt";
import IconButton from "@mui/material/IconButton";
import { useAppDispatch } from "../../app/hooks";
import { setShowList } from "../../redux/meta/metaSlice";

export default function Navbar() {
	const dispatch = useAppDispatch();
	const handleClick = () => dispatch(setShowList());
	const ListButton = () => {
		return (
			<IconButton aria-label="list" onClick={handleClick}>
				<ListAltIcon />
			</IconButton>
		);
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
