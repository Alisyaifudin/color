import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import IconButton from "@mui/material/IconButton";
import { rgb2hsv } from "../../../utils/colorconversion";
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

export function MysteryColor({ name, color, done = false, hsv = false, onClick }: MysteryColorProps) {
	const triplet = hsv ? rgb2hsv(color) : color;

	const handleClick = () => onClick && onClick()

	return (
		<Stack justifyContent="center" alignItems="center" gap="10px">
			<Color data-testid="color" r={color.r} g={color.g} b={color.b} />
			<Collapse in={done}>
				<Typography textAlign="center" component="h2" variant="body1" fontSize="1.4rem">
					{name}
				</Typography>
				<Stack direction="row" gap="15px" alignItems="center">
					{Object.entries(triplet).map((entry) => (
						<Typography key={entry[0]} data-testid="value" component="p" variant="caption">
							{entry[0]}: {entry[1]}
						</Typography>
					))}
					<IconButton onClick={handleClick}>
						<RotateRightIcon />
					</IconButton>
				</Stack>
			</Collapse>
		</Stack>
	);
}

const Color = styled("div")<{ r: number; g: number; b: number }>`
	background-color: rgb(${({ r }) => r}, ${({ g }) => g}, ${({ b }) => b});
	width: 100px;
	aspect-ratio: 1;
`;
