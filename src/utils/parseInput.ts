import Person from "@/interfaces/person";

const parseInput = (input: string): Person[] | null => {
	const regex = /\[{.*?}\]/g;
	const cleanInput = input.trim().replace(/(\n|\r|\s{2,})/g, "");

	const parsedData: string[] = [];

	let match: RegExpExecArray | null;
	while ((match = regex.exec(cleanInput)) !== null) {
		parsedData.push(match[0].toString());
	}

	const fixJson: Person[] = [];
	parsedData.forEach((data) => {
		try {
			const d = JSON.parse(data);
			if ("documentChange" in d[0]) {
				fixJson.push(d[0]["documentChange"] as Person);
			}
		} catch (error) {
			console.log(error);
			return null;
		}
	});

	return fixJson;
};

export default parseInput;
