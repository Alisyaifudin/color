import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";

export type ListLevelProps = {
	levels: number[];
	level: number;
	/**
	 * onClick other level
	 */
	onClick: (level: number) => void;
};

export function ListLevel({ levels, level, onClick }: ListLevelProps) {
	const handleClick = (level: number) => () => onClick && onClick(level);
	return (
		<Box sx={{ width: "100%", maxWidth: 100, bgcolor: "background.paper" }}>
			<List>
				{levels.map((l) => (
					<ListItem disablePadding key={l}>
						<ListItemButton
							onClick={handleClick(l)}
							component="a"
							selected={l === level}
							data-testid="list"
						>
							<ListItemText primary={`Level ${l}`} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
}
