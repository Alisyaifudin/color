import type { NextPage } from "next";
import { Container, Div, Div2 } from '../styles/tes';
import { BasicMysteryColor } from "../components/MysteryColor/prototype/MysteryColor.composition";

const Test: NextPage = () => {
	return (
			<Container>
				<Div>
					<Div2>
						<BasicMysteryColor/>
					</Div2>
				</Div>
			</Container>
	);
};

export default Test;
