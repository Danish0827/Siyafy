import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React from "react";
import Analytics from "@/components/Analytics/Analytics";

const analytics = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <Analytics />
      </div>
    </>
  );
};

export default analytics;
