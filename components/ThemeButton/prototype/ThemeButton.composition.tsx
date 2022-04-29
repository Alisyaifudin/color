import React, { useState } from "react";
import { ThemeButton } from "./ThemeButton";

export const LightMode = () => {
	const [mode, setMode] = useState<"light" | "dark">("light");
	const handleClick = (mode: "light" | "dark") => setMode(mode);

	return <ThemeButton mode={mode} onClick={handleClick} />;
};
