import React from "react";
import ReactApexChart from "react-apexcharts";
// import { ApexOptions } from "react-apexcharts";

const OnlineStoreSessionsChart: React.FC = () => {
  const series = [
    {
      data: [31, 40, 30, 51, 32, 40, 22, 50, 35, 50],
    },
  ];

  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      width: 500,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "May 27",
        "May 30",
        "Jun 2",
        "Jun 5",
        "Jun 8",
        "Jun 11",
        "Jun 14",
        "Jun 18",
        "Jun 20",
        "Jun 24",
      ],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
        className="w-full"
      />
    </div>
  );
};

export default OnlineStoreSessionsChart;
