import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export type LevelButtonProps = {
	level: number;
	levels: number[];
	/**
	 * change level
	 */
	onChange: (level: number) => void;
};

export function LevelButton({ level, levels, onChange }: LevelButtonProps) {
	const handleChange = (event: SelectChangeEvent) =>
		onChange && onChange(Number(event.target.value));
	return (
		<Box>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">LV</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={String(level)}
					label="LV"
					onChange={handleChange}
				>
					{levels.map((lv) => (
						<MenuItem key={lv} value={lv}>
							{lv}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
