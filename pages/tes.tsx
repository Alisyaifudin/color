import type { NextPage } from "next";
import { Container, Div, Div2 } from '../styles/tes';
import { BasicMysteryColor, OpenedMysteryColor } from "../components/MysteryColor/prototype/MysteryColor.composition";

const Test: NextPage = () => {
	return (
			<Container>
				<Div>
					<Div2>
						{/* <BasicMysteryColor/> */}
						<OpenedMysteryColor/>
					</Div2>
				</Div>
			</Container>
	);
};

export default Test;
