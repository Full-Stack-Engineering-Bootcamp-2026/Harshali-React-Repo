"use client"

import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js"

import { Doughnut, Line, Bar } from "react-chartjs-2"

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
)

export default function Charts() {
  const doughnutData = {
    labels: ["Shirts", "Shoes", "Bags"],
    datasets: [
      {
        data: [33, 33, 34],
        backgroundColor: ["#3b82f6", "#14b8a6", "#8b5cf6"],
        borderWidth: 2,
      },
    ],
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  }

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Organic",
        data: [43, 48, 40, 54, 67, 73, 70],
        borderColor: "#14b8a6",
        backgroundColor: "#14b8a6",
        tension: 0.4,
      },
      {
        label: "Paid",
        data: [24, 50, 64, 74, 52, 50, 65],
        borderColor: "#8b5cf6",
        backgroundColor: "#8b5cf6",
        tension: 0.4,
      },
    ],
  }

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Organic",
        data: [-2, 14, 52, 74, 34, 90, 70],
        backgroundColor: "#14b8a6",
      },
      {
        label: "Paid",
        data: [65, 34, 43, 12, 54, 62, 85],
        backgroundColor: "#8b5cf6",
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { color: "#1f2937" },
      },
      y: {
        ticks: { color: "white" },
        grid: { color: "#1f2937" },
      },
    },
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Charts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Doughnut */}
        <div className="bg-gray-900 border border-gray-800 p-4 md:p-6 rounded-xl h-[250px] md:h-[300px] shadow-md">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>

        {/* Line */}
        <div className="bg-gray-900 border border-gray-800 p-4 md:p-6 rounded-xl h-[250px] md:h-[300px] shadow-md">
          <Line data={lineData} options={options} />
        </div>

      </div>

      {/* Bar */}
      <div className="bg-gray-900 border border-gray-800 p-4 md:p-6 rounded-xl h-[280px] md:h-[350px] shadow-md">
        <Bar data={barData} options={options} />
      </div>
    </div>
  )
}