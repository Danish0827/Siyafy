import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import Segments from "@/components/Customers/Segments/Segments";

const segments = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <Segments />
      </div>
    </>
  );
};

export default segments;
