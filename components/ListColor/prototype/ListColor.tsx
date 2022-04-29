import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Divider, Typography } from "@mui/material";

export type ListColorProps = {
	/**
	 * languages
	 */
	langs: string[];
	/**
	 * selected level
	 */
	level: number;
	/**
	 * colors
	 */
	colors: {
		name: {
			[x: string]: string;
		};
		color: {
			r: number;
			g: number;
			b: number;
		};
		level: number;
	}[];
};

export function ListColor({ colors, level, langs }: ListColorProps) {
	const selectedColors = colors.filter((color) => color.level <= level);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2} alignItems="center" justifyContent="center">
				{selectedColors.map((color, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<Item>
							<Color data-testid="color" r={color.color.r} g={color.color.g} b={color.color.b} />
							<Typography fontStyle="italic">{color.name[langs[0]]}</Typography>
							<Divider orientation="vertical" flexItem />
							<Typography>{color.name[langs[1]]}</Typography>
						</Item>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: 8,
	color: theme.palette.text.secondary,
}));

const Color = styled("div")<{ r: number; g: number; b: number }>`
	background-color: rgb(${({ r }) => r}, ${({ g }) => g}, ${({ b }) => b});
	width: 30px;
	aspect-ratio: 1;
`;
