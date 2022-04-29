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
		<AppBar position="static" sx={{ padding: "10px 0" }}>
			<Container maxWidth="md">
				<Toolbar disableGutters>
					<Stack
						sx={{ width: "100%" }}
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography
							variant="h4"
							noWrap
							component="div"
							sx={{ mr: 2, display: { xs: "none", sm: "flex" } }}
						>
							COLORS
						</Typography>
						<div />
						<Stack direction="row" gap="5px" alignItems="center" flexWrap="wrap" justifyContent="center">
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
