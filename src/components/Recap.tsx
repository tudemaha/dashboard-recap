import ChartData from "@/interfaces/chartData";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

Chart.register();

interface RecapProps {
	recapData: ChartData;
	classId: string;
}

export default function Recap({ recapData, classId }: RecapProps) {
	return (
		<Bar
			data={{
				labels: recapData.labels,
				datasets: [
					{
						data: recapData.data,
						backgroundColor: recapData.colors,
						borderWidth: 1,
					},
				],
			}}
			options={{
				plugins: {
					title: {
						display: true,
						text: `Recap of ${classId} Students Status`,
						color: "#fafafa",
						font: {
							size: 14,
						},
					},
					legend: {
						display: false,
					},
				},
				scales: {
					y: {
						ticks: {
							color: "#fafafa",
						},
						beginAtZero: true,
						border: {
							display: true,
						},
						grid: {
							color: "rgba(250, 250, 250, 0.3)",
							display: true,
							drawOnChartArea: true,
							drawTicks: true,
						},
					},
					x: {
						border: {
							display: true,
						},
						grid: {
							color: "rgba(250, 250, 250, 0.3)",
							display: true,
							drawOnChartArea: true,
							drawTicks: true,
						},
						ticks: {
							color: "#fafafa",
						},
					},
				},
			}}
		/>
	);
}
