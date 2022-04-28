import React, { useMemo } from "react";
import { TextField as TextFieldProto } from "./prototype";
import DICT from "../../utils/DICT";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { skip, setAnswer, submit } from "../../redux/meta/metaSlice";

function TextField() {
	const dispatch = useAppDispatch();
	const value = useAppSelector((state) => state.meta.answer);
	const lang = useAppSelector((state) => state.meta.language);
	const done = useAppSelector((state) => state.meta.done);
	const skipLabel = useMemo(() => (done ? DICT.NEXT[lang] : DICT.SKIP[lang]), [done, lang]);
	const handleSkip = () => dispatch(skip());
	const handleChange = (value: string) => dispatch(setAnswer(value));
	const handleSubmit = () => dispatch(submit());

	return (
		<TextFieldProto
			disabled={done}
			value={value}
			label={DICT.GUESS[lang]}
			skip={skipLabel}
			submit={DICT.SUBMIT[lang]}
			onClickSkip={handleSkip}
			onChange={handleChange}
			onClickSubmit={handleSubmit}
		/>
	);
}

export default TextField;
