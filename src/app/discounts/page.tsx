import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import Discounts from "@/components/Discounts/Discounts";

const discounts = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <Discounts />
      </div>
    </>
  );
};

export default discounts;
