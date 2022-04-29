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
import { EngLanguage } from "../components/LanguageButton/prototype/LanguageButton.composition";
import { BasicLevelButton } from "../components/LevelButton/prototype/LevelButton.composition";
import { BasicListLevel } from "../components/ListLevel/prototype/ListLevel.composition";

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
					{/* <BasicNavbar /> */}
					{/* <EngLanguage /> */}
					{/* <BasicLevelButton /> */}
					<BasicListLevel />
				</Div2>
			</Div>
		</Container>
	);
};

export default Test;
