import { Container, Stack } from "@chakra-ui/react";
import Title from "@/components/Title";
import RecapForm from "@/components/RecapForm";
import Recap from "@/components/Recap";

function App() {
	return (
		<Container fluid centerContent>
			<Stack>
				<Title />
				<RecapForm />
				<Recap />
			</Stack>
		</Container>
	);
}

export default App;
