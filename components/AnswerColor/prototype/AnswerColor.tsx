import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { rgb2hsv } from "../../../utils/colorconversion";

export type AnswerColorProps = {
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
	 * in hsv format?
	 */
	hsv?: boolean;
};

export function AnswerColor({ name, color, hsv = false }: AnswerColorProps) {
	const thecolor = hsv ? rgb2hsv(color) : color;
	return (
		<Box flexGrow={1}>
			<Stack justifyContent="center" alignItems="center" gap="10px">
				{color.r !== -1 ? (
					<Color data-testid="color" r={color.r} g={color.g} b={color.b} />
				) : (
					<NoColor data-testid="no-color" />
				)}
				<Box>
					<Typography textAlign="center" component="h2" variant="body1" fontSize="1.4rem">
						{name}
					</Typography>
					<Stack direction="row" gap="5px" alignItems="center" paddingX="5px">
						{Object.entries(thecolor).map((entry, i) => (
							<Typography key={entry[0]} data-testid="value" component="p" variant="caption">
								{entry[0]}: {hsv && i !== 0 ? entry[1].toFixed(2) : entry[1]}
							</Typography>
						))}
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
}

const Color = styled("div")<{ r: number; g: number; b: number }>`
	background-color: rgb(${({ r }) => r}, ${({ g }) => g}, ${({ b }) => b});
	width: 100%;
	aspect-ratio: 1;
`;

const NoColor = styled("div")`
	background: linear-gradient(
		166deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(231, 231, 231, 1) 100%,
		rgba(0, 212, 255, 1) 100%
	);
	width: 100%;
	aspect-ratio: 1;
`;
