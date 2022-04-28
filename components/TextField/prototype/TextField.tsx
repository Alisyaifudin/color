import React from "react";
import Stack from "@mui/material/Stack";
import Textfield from "@mui/material/TextField";
import Button from "@mui/material/Button";

export type TextFieldProps = {
	/**
	 * label of the textbox
	 */
	label: string;
	/**
	 * skip label
	 */
	skip: string;
	/**
	 * submit label
	 */
	submit: string;
	/**
	 * handle skip button
	 */
	disabled?: boolean;
	/**
	 * value of the textbox
	 */
	value: string;
	/**
	 * handle change value
	 */
	onChange: (value: string) => void;
	/**
	 * handle skip button
	 */
	onClickSkip: () => void;
	/**
	 * handle submit button
	 */
	onClickSubmit: () => void;
};

export function TextField({
	value,
	label,
	submit,
	skip,
	disabled = false,
	onChange,
	onClickSkip,
	onClickSubmit,
}: TextFieldProps) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		onChange && onChange(event.target.value);
	const handleSkip = () => onClickSkip && onClickSkip();
	const handleSubmit = () => onClickSubmit && onClickSubmit();
	const handleKeyDown = (key: React.KeyboardEvent<HTMLDivElement>) => {
		if (key.key === "Enter") onClickSubmit && onClickSubmit();
	};
	return (
		<Stack gap="10px">
			<Textfield
				disabled={disabled}
				label={label}
				variant="outlined"
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<Stack direction="row" justifyContent="space-around">
				<Button variant="outlined" onClick={handleSkip}>
					{skip}
				</Button>
				<Button disabled={disabled} variant="contained" onClick={handleSubmit}>
					{submit}
				</Button>
			</Stack>
		</Stack>
	);
}
