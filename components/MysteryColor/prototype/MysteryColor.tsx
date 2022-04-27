import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";

export type MysteryColorProps = {
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
};

export function MysteryColor({ color, done = false }: MysteryColorProps) {
	return (
		<Stack justifyContent="center" alignItems="center" gap="10px">
			<Color data-testid="color" r={color.r} g={color.g} b={color.b} />
			<Collapse in={done}>
				<Typography textAlign="center" component="h2" variant="body1" fontSize="1.4rem">
					lime
				</Typography>
				<Stack direction="row" gap="15px">
					<Typography data-testid="value" component="p" variant="caption">
						R: {color.r}
					</Typography>
					<Typography data-testid="value" component="p" variant="caption">
						G: {color.g}
					</Typography>
					<Typography data-testid="value" component="p" variant="caption">
						B: {color.b}
					</Typography>
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
