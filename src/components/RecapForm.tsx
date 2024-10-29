import { Stack, Textarea } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { useState } from "react";

export default function RecapForm() {
	const [response, setResponse] = useState("");
	const [invalid, setInvalid] = useState(false);

	const handleRecap = () => {
		if (response.length === 0) {
			setInvalid(true);
		} else {
			setInvalid(false);
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
				/>
			</Field>
			<Button onClick={handleRecap}>Get Recap</Button>
		</Stack>
	);
}
