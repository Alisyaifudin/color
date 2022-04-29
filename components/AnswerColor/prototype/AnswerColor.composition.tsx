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

export const NoAnswerColor = () => {
	const color = {
		r: -1,
		g: -1,
		b: -1,
	};
	return <AnswerColor name="Not Found" color={color} />;
};

export const NoIdAnswerColor = () => {
	const color = {
		r: -1,
		g: -1,
		b: -1,
	};
	return <AnswerColor name="Tidak Ada" color={color} />;
};
