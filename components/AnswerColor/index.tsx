import React from "react";
import { useAppSelector } from "../../app/hooks";
import { AnswerColor as AnswerColorProto } from "./prototype";
import DICT from "../../utils/DICT";

function AnswerColor() {
	const color = useAppSelector((state) => state.meta.guessColor);
	const name = useAppSelector((state) => state.meta.guessName);
	const hsv = useAppSelector((state) => state.meta.hsv);
	const lang = useAppSelector((state) => state.meta.language);
	const thename = color.r === -1 ? DICT.NOT_FOUND[lang] : name;
	return <AnswerColorProto name={thename} color={color} hsv={hsv} />;
}

export default AnswerColor;
