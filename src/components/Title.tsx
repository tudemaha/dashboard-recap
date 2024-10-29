import { Stack, Heading, Highlight } from "@chakra-ui/react";

export default function Title() {
	return (
		<Stack paddingTop="4">
			<Heading size="4xl" textAlign="center">
				Dashboard Recap
			</Heading>
			<Heading size="xl" letterSpacing="tight" textAlign="center">
				<Highlight query="single click" styles={{ color: "salmon" }}>
					Recap your Bangkit Dashboard status with a single click
				</Highlight>
			</Heading>
		</Stack>
	);
}
