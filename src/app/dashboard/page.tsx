import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import DashBoard from "@/components/DashBoard/DashBoard";

const dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <DashBoard />
      </div>
    </>
  );
};

export default dashboard;
