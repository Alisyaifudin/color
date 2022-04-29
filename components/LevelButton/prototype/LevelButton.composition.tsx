import React, { useState } from "react";
import { LevelButton } from "./LevelButton";

export function BasicLevelButton() {
	const levels = [1, 2, 3];
	const [level, setLevel] = useState(levels[0]);
	const handleChange = (level: number) => setLevel(level);
	return <LevelButton level={level} levels={levels} onChange={handleChange} />;
}
