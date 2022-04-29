import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { styled } from "@mui/material/styles";
import RawButtonGroup from "@mui/material/ButtonGroup";

export type ThemeButtonProps = {
	/**
	 * mode
	 */
	mode: "light" | "dark";
	/**
	 * click to change mode
	 */
	onClick: (mode: "light" | "dark") => void;
};

export function ThemeButton({ mode, onClick }: ThemeButtonProps) {
	const handleClick = (mode: "light" | "dark") => () => onClick && onClick(mode);
	return (
		<ButtonGroup variant="contained">
			{mode === "light" && (
				<IconButton aria-label="light button" onClick={handleClick("dark")}>
					<Brightness7Icon />
				</IconButton>
			)}
			{mode === "dark" && (
				<IconButton aria-label="dark button" onClick={handleClick("light")}>
					<Brightness4Icon />
				</IconButton>
			)}
		</ButtonGroup>
	);
}

export const ButtonGroup = styled(RawButtonGroup)`
	margin: ${({ theme }) => theme.spacing(0, 1)};
`;
