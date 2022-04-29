import type { NextPage } from "next";
import { Container, Div, Div2 } from "../styles/tes";
import {
	BasicMysteryColor,
	OpenedMysteryColor,
} from "../components/MysteryColor/prototype/MysteryColor.composition";
import { BasicTextField } from "../components/TextField/prototype/TextField.compositon";
import { NoAnswerColor } from "../components/AnswerColor/prototype/AnswerColor.composition";
// import { LightMode } from "../components/ThemeButton/prototype/ThemeButton.composition";
import { BasicNavbar } from "../components/Navbar/prototype/Navbar.composition";

const Test: NextPage = () => {
	return (
		<Container>
			<Div>
				<Div2>
					{/* <BasicMysteryColor/> */}
					{/* <OpenedMysteryColor/> */}
					{/* <BasicTextField/> */}
					{/* <NoAnswerColor /> */}
					{/* <LightMode /> */}
					<BasicNavbar />
				</Div2>
			</Div>
		</Container>
	);
};

export default Test;
