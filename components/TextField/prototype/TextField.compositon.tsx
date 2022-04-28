import React, { useState } from "react";
import { TextField } from "./TextField";
import Stack from "@mui/material/Stack";

export function BasicTextField() {
	const [text, setText] = useState("text");
	const [skip, setSkip] = useState("skip");
	const [value, setValue] = useState("");
	const [disabled, setDisabled] = useState(false);

	const handleChange = (value: string) => setValue(value);
	const handleSkip = () => {
		setText("skip");
		setValue("");
		setDisabled(false);
		setSkip("skip");
	};
	const handleSubmit = () => {
		setDisabled(true);
		setSkip("next");
		setText("submit");
	};
	return (
		<Stack>
			<TextField
				disabled={disabled}
				submit="submit"
				skip={skip}
				label="Guess"
				value={value}
				onChange={handleChange}
				onClickSkip={handleSkip}
				onClickSubmit={handleSubmit}
			/>
			<p>{text}</p>
		</Stack>
	);
}

export function IdTextField() {
	const [text, setText] = useState("text");
	const [value, setValue] = useState("");
	const [skip, setSkip] = useState("lewati");
	const [disabled, setDisabled] = useState(false);

	const handleChange = (value: string) => setValue(value);
	const handleSkip = () => {
		setText("skip");
		setValue("");
		setDisabled(false);
		setSkip("lewati");
	};
	const handleSubmit = () => {
		setDisabled(true);
		setSkip("lanjut");
	};
	return (
		<Stack>
			<TextField
				disabled={disabled}
				submit="jawab"
				skip={skip}
				label="Tebak"
				value={value}
				onChange={handleChange}
				onClickSkip={handleSkip}
				onClickSubmit={handleSubmit}
			/>
			<p>{text}</p>
		</Stack>
	);
}
