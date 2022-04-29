import { AnswerColor } from "./AnswerColor";

export const BasicAnswerColor = () => {
	const color = {
		r: 0,
		g: 255,
		b: 0,
	};
	return <AnswerColor name="lime" color={color} />;
};

export const HsvAnswerColor = () => {
	const color = {
		r: 0,
		g: 255,
		b: 0,
	};
	return <AnswerColor name="lime" color={color} hsv />;
};
