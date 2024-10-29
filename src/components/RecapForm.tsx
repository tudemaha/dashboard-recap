import { Stack, Textarea } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import React, { useState } from "react";
import getRecap from "@/utils/getRecap";
import parseInput from "@/utils/parseInput";
import ChartData from "@/interfaces/chartData";

interface RecapFormProps {
	setRecap: React.Dispatch<React.SetStateAction<ChartData>>;
}

export default function RecapForm({ setRecap }: RecapFormProps) {
	const [response, setResponse] = useState("");
	const [invalid, setInvalid] = useState(false);

	const handleRecap = () => {
		if (response.length === 0) {
			setInvalid(true);
		} else {
			setInvalid(false);
		}

		if (response.length !== 0) {
			const parsedInput = parseInput(response);
			if (parsedInput) {
				const recap = getRecap(parsedInput);
				setRecap(recap);
			}
		}
	};

	return (
		<Stack marginY="5">
			<Field
				invalid={invalid ? true : false}
				label="Response"
				required
				errorText="Response is required"
			>
				<Textarea
					resize="vertical"
					placeholder="Insert the WebSocket frame response..."
					width="50rem"
					variant="outline"
					onChange={(e) => setResponse(e.target.value)}
					autoFocus
				/>
			</Field>
			<Button onClick={handleRecap}>Get Recap</Button>
		</Stack>
	);
}
