import React from "react";
import "./Third.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SignupChart = () => {
  const data = {
    labels: [
      "United States",
      "Germany",
      "Netherlands",
      "India",
      "Japan",
      "Other",
    ],
    datasets: [
      {
        data: [30000, 20000, 10000, 5000, 3000, 2000],
        backgroundColor: "#FFF5C2",
        borderSkipped: false,
        hoverBackgroundColor: "#FFF5C2",
        borderRadius: 7,
        barPercentage: 0.95,
      },
    ],
  };

  const innerBarText = {
    id: "innerBarText",
    afterDatasetDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        chartArea: { left },
        scales: { x, y },
      } = chart;
      // console.log(data.datasets[0].data);

      ctx.save();
      data.datasets[0].data.forEach((dataPoint, index) => {
        ctx.font = "500 20px Karla"; // Font weight size style
        ctx.fillStyle = "#000000";
        ctx.fillText(data.labels[index], 20, y.getPixelForValue(index) + 7); // +7 Added Top Margin to Name
      });
    },
  };

  /*
  const countryImages ={
    id: 'countryImages',
    beforeDatasetDraw(chart,args, pluginOptions) {
      const {ctx, data, scales: {x, y}} = chart;
      ctx.save();

      const logo = new Image();
      logo.src = 'https://image.shutterstock.com/image-vector/coloured-usa-flag-vector-illustration-260nw-450762943.jpg';
      // ctx.drawImage(logo, x,y, w, h)
      ctx.drawImage(logo, 0,y.getPixelForValue(0), 30, 30)
    }
  }
  */

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      maintainAspectRatio: false,
      // countryImages,
      innerBarText,
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
        ticks: { display: false },
        border: { display: false },
      },

      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
        ticks: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <div className="barChart">
      <Bar data={data} options={options} plugins={[innerBarText]} />
    </div>
  );
};

export default SignupChart;
