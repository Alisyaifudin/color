import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import IconButton from "@mui/material/IconButton";
import { rgb2hsv } from "../../../utils/colorconversion";
import Box from "@mui/material/Box";

export type MysteryColorProps = {
	/**
	 * color name
	 */
	name: string;
	/**
	 * Box color
	 */
	color: {
		r: number;
		g: number;
		b: number;
	};
	/**
	 * done?
	 */
	done?: boolean;
	/**
	 * in hsv format?
	 */
	hsv?: boolean;
	/**
	 * Click change format
	 */
	onClick: () => void;
};

export function MysteryColor({
	name,
	color,
	done = false,
	hsv = false,
	onClick,
}: MysteryColorProps) {
	const triplet = hsv ? rgb2hsv(color) : color;

	const handleClick = () => onClick && onClick();

	return (
		<Box flexGrow={1}>
			<Stack justifyContent="center" alignItems="center" gap="10px">
				<Color data-testid="color" r={color.r} g={color.g} b={color.b} />
				<Collapse in={done}>
					{done && (
						<Typography textAlign="center" component="h2" variant="body1" fontSize="1.4rem">
							{name}
						</Typography>
					)}
					<Stack direction="row" gap="5px" alignItems="center" paddingX="5px">
						{Object.entries(triplet).map((entry) => (
							<Typography key={entry[0]} data-testid="value" component="p" variant="caption">
								{entry[0]}: {hsv ? entry[1].toFixed(2) : entry[1]}
							</Typography>
						))}
					</Stack>
				</Collapse>
				{done && (
					<IconButton onClick={handleClick}>
						<RotateRightIcon />
					</IconButton>
				)}
			</Stack>
		</Box>
	);
}

const Color = styled("div")<{ r: number; g: number; b: number }>`
	background-color: rgb(${({ r }) => r}, ${({ g }) => g}, ${({ b }) => b});
	width: 100%;
	aspect-ratio: 1;
`;
