import type { NextPage } from "next";
import { Container, Div, Div2 } from "../styles/tes";
import {
	BasicMysteryColor,
	OpenedMysteryColor,
} from "../components/MysteryColor/prototype/MysteryColor.composition";
import { BasicTextField } from "../components/TextField/prototype/TextField.compositon";
import { NoAnswerColor } from "../components/AnswerColor/prototype/AnswerColor.composition";
const Test: NextPage = () => {
	return (
		<Container>
			<Div>
				<Div2>
					{/* <BasicMysteryColor/> */}
					{/* <OpenedMysteryColor/> */}
					{/* <BasicTextField/> */}
					<NoAnswerColor />
				</Div2>
			</Div>
		</Container>
	);
};

export default Test;
