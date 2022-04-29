import { useState } from "react";
import { ListLevel } from "./ListLevel";

const levels = [1, 2, 3];

export const BasicListLevel = () => {
	const [level, setLevel] = useState(levels[0]);
	const handleClick = (level: number) => setLevel(level);
	return (
		<ListLevel
			level={level}
			levels={levels}
			onClick={handleClick}
		/>
	);
};
