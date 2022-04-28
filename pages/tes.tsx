import type { NextPage } from "next";
import { Container, Div, Div2 } from '../styles/tes';
import { BasicMysteryColor, OpenedMysteryColor } from "../components/MysteryColor/prototype/MysteryColor.composition";
import { BasicTextField } from "../components/TextField/prototype/TextField.compositon";
const Test: NextPage = () => {
	return (
			<Container>
				<Div>
					<Div2>
						{/* <BasicMysteryColor/> */}
						{/* <OpenedMysteryColor/> */}
						<BasicTextField/>
					</Div2>
				</Div>
			</Container>
	);
};

export default Test;
