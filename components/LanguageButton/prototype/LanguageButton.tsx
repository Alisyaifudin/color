import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export type LanguageButtonProps = {
	/**
	 * language value, ex. id-ID, en-US
	 */
	value: string;
	/**
	 * language label, ex. ENG, IDN, DEU
	 */
	labels: string[];
	/**
	 * choosen language
	 */
	label: string;
	/**
	 * click button
	 */
	onClick: (label: string) => void;
};

export function LanguageButton({ value, labels, label, onClick }: LanguageButtonProps) {
	const handleClick = (label: string) => () => onClick && onClick(label);
	return (
		<ButtonGroup aria-label="languages">
			{labels.map((l) => (
				<Button color="warning" onClick={handleClick(l)} variant={label === l ? "contained" : "outlined"} key={l}>
					{l}
				</Button>
			))}
		</ButtonGroup>
	);
}
