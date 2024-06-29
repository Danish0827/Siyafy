import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import AbandonedCheckouts from "@/components/Order/AbandonedCheckouts/AbandonedCheckouts";

const products = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <AbandonedCheckouts />
      </div>
    </>
  );
};

export default products;
