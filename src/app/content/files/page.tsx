import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import Files from "@/components/Content/Files/Files";

const content = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <Files />
      </div>
    </>
  );
};

export default content;
