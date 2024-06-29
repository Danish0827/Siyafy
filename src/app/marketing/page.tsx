import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import Marketing from "@/components/Marketing/Marketing";

const marketing = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <Marketing />
      </div>
    </>
  );
};

export default marketing;
