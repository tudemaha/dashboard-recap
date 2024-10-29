import ChartData from "@/interfaces/chartData";
import Person from "@/interfaces/person";

const getRecap = (persons: Person[]): ChartData => {
	let ahead = 0;
	let ideal = 0;
	let lagging = 0;
	let special = 0;

	persons.forEach((person) => {
		switch (person.document.fields.progressStatus.stringValue) {
			case "Ahead of Schedule":
				ahead++;
				break;
			case "On An Ideal Schedule":
				ideal++;
				break;
			case "Lagging Behind":
				lagging++;
				break;
			case "Need Special Attention":
				special++;
				break;
		}
	});

	const chartData: ChartData = {
		labels: [
			"Ahead of Schedule",
			"On An Ideal Schedule",
			"Lagging Behind",
			"Need Special Attention",
		],
		colors: ["#93c5fd", "#bbf7d0", "#ffe308", "#fca5a5"],
		data: [ahead, ideal, lagging, special],
	};

	return chartData;
};

export default getRecap;
