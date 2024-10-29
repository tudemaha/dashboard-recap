import { Container, Stack } from "@chakra-ui/react";
import Title from "@/components/Title";
import RecapForm from "@/components/RecapForm";
import Recap from "@/components/Recap";
import { useState } from "react";
import ChartData from "./interfaces/chartData";

function App() {
	const [recap, setRecap] = useState({} as ChartData);

	return (
		<Container fluid centerContent>
			<Stack>
				<Title />
				<RecapForm setRecap={setRecap} />
				{"labels" in recap ? <Recap recapData={recap} classId="CC-04" /> : null}
			</Stack>
		</Container>
	);
}

export default App;
