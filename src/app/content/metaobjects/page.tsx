import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import Metaobjects from "@/components/Content/Metaobjects/Metaobjects";

const content = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <Metaobjects />
      </div>
    </>
  );
};

export default content;
