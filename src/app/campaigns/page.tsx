import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import AddProducts from "@/components/Products/AddProducts/AddProducts";

const campaigns = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <AddProducts />
      </div>
    </>
  );
};

export default campaigns;