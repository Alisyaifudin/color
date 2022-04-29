import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
// import ThemeButton from "../../ThemeButton";

export type NavbarProps = {
	LevelButton: JSX.Element;
	ThemeButton: JSX.Element;
	LanguageButton: JSX.Element;
	ListButton: JSX.Element;
};

export const Navbar = ({ ThemeButton, LanguageButton, LevelButton, ListButton }: NavbarProps) => {
	return (
		<AppBar position="static">
			<Container maxWidth="md">
				<Toolbar disableGutters>
					<Stack
						sx={{ width: "100%" }}
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
							COLORS
						</Typography>
						<Stack direction="row" gap="5px">
							{LevelButton}
							{ThemeButton}
							{LanguageButton}
							{ListButton}
						</Stack>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
