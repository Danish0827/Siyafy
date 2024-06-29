import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import Customers from "@/components/Customers/Customers";

const customers = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <Customers />
      </div>
    </>
  );
};

export default customers;
