import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";

export type ListLevelProps = {
	levels: number[];
	level: number;
	/**
	 * onClick other level
	 */
	onClick: (level: number) => void;
	/**
	 * Additional CSSProps
	 */
	style?: React.CSSProperties;
};

export function ListLevel({ levels, level, onClick, style }: ListLevelProps) {
	const handleClick = (level: number) => () => onClick && onClick(level);
	return (
		<>
			<Box
				sx={{
					width: "100%",
					maxWidth: 80,
					bgcolor: "background.paper",
					display: { xs: "none", sm: "flex" },
				}}
				style={style}
			>
				<List>
					{levels.map((l) => (
						<ListItem disablePadding key={l}>
							<ListItemButton
								onClick={handleClick(l)}
								component="a"
								selected={l === level}
								data-testid="list"
							>
								<Typography variant="subtitle2">Level {l}</Typography>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
			<Box
				sx={{
					width: "100%",
					bgcolor: "background.paper",
					display: { xs: "flex", sm: "none" },
					alignItems: "center",
					justifyContent: "center",
				}}
				style={style}
			>
				{levels.map((l) => (
					<ListItem disablePadding key={l}>
						<ListItemButton
							onClick={handleClick(l)}
							component="a"
							selected={l === level}
							data-testid="list-horizontal"
						>
							<Typography variant="subtitle2">Level {l}</Typography>
						</ListItemButton>
					</ListItem>
				))}
			</Box>
		</>
	);
}
