import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"

import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

export function Charts() {

  const data = {
    labels: ["Shirts", "Shoes", "Bags"],
    datasets: [
      {
        data: [300, 200, 100],
        backgroundColor: ["#3b82f6", "#14b8a6", "#8b5cf6"],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#9ca3af",
        },
      },
    },
  }

  return (
    <div className="mt-10 bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h2 className="text-lg font-semibold mb-4 text-white">Revenue</h2>

      <div className="h-[250px] flex items-center justify-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}