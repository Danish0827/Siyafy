import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import DraftOrders from "@/components/Order/Draft/DraftOrders";

const draft_orders = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <DraftOrders />
      </div>
    </>
  );
};

export default draft_orders;
