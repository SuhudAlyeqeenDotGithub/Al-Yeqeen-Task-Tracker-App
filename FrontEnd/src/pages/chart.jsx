import React from "react";
import { Bar } from "react-chartjs-2";

// Import required components from Chart.js
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components with Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  // Data for the chart
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales ($)",
        data: [12000, 15000, 10000, 17000, 20000],
        backgroundColor: "rgba(68, 138, 188, 0.5)",
        borderColor: "rgba(68, 138, 188, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { enabled: true },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
