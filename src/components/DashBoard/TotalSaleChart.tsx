// TotalStoreSessionsChart.tsx
"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

const TotalStoreChart: React.FC = () => {
  const series = [
    {
      name: "Store Sessions",
      data: [10, 20, 15, 25, 18],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Intense Pour Homme",
        "Tobacco Vanilla",
        "Panther",
        "Vetiver",
        "Nomade",
      ],
    },
    yaxis: {
      title: {
        text: "Sessions",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + " sessions";
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default TotalStoreChart;
