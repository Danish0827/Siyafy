import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import Order from "@/components/Order/Order";

const order = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <Order />
        {/* <MapChart /> */}
      </div>
    </>
  );
};

export default order;
