import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

Chart.register();

export default function Recap() {
	return (
		<Bar
			data={{
				labels: [
					"Ahead of Schedule",
					"On An Ideal Schedule",
					"Lagging Behind",
					"Need Special Attention",
				],
				datasets: [
					{
						data: [10, 4, 3, 1],
						backgroundColor: ["#93c5fd", "#bbf7d0", "#ffe308", "#fca5a5"],
						borderWidth: 1,
					},
				],
			}}
			options={{
				plugins: {
					title: {
						display: true,
						text: "Recap of CC-04 Students Status",
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
