import MapChart from "@/components/Analytics/LiveView/WorldMap";
import React from "react";

const Order = () => {
  return (
    <div className="bg-[#f1f1f1] w-10/12 rounded-tr-2xl">
      <div className="w-7/12 m-auto relative top-14">
        <div className="block text-black">order</div>
        <MapChart />
      </div>
    </div>
  );
};

export default Order;
