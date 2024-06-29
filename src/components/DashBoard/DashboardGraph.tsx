// components/DashboardGraph.tsx
"use client";
import React, { useEffect, useState } from "react";
import { MdArrowOutward, MdOutlineModeEdit } from "react-icons/md";
import OnlineStoreSessionsChart from "./OnlineStoreSessionsChart";
import TotalStoreChart from "./TotalSaleChart";

const DashboardGraph: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [tabColors, setTabColors] = useState({
    Home: "#ebebeb",
    News: "",
    Contact: "",
    About: "",
  });

  useEffect(() => {
    setActiveTab("Home");
  }, []);

  const openPage = (pageName: string, color: string) => {
    setActiveTab(pageName);
    setTabColors({
      Home: "",
      News: "",
      Contact: "",
      About: "",
      [pageName]: color,
    });
  };

  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
      className="px-2 py-4 bg-white rounded-lg mb-4"
    >
      <div className="text-center pb-10 w-full flex gap-1">
        <button
          className="text-left text-xs w-1/4 tablink px-3 py-2 bg-white text-black rounded-xl hover:bg-[#ebebeb]"
          onClick={() => openPage("Home", "#ebebeb")}
          style={{ backgroundColor: tabColors.Home }}
        >
          <div className="flex justify-between">
            <p className="border-b-2 border-dashed border-[#444]">
              Online store sessions
            </p>
            {activeTab === "Home" ? (
              <MdOutlineModeEdit className="text-lg text-[#444]" />
            ) : (
              ""
            )}
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[#444] py-2 text-xl">11,189</p>
            <p className="flex text-green-600">
              <MdArrowOutward />
              37%
            </p>
          </div>
        </button>
        <button
          className="text-left text-xs w-1/4 tablink px-3 py-2 bg-white text-black rounded-xl hover:bg-[#ebebeb]"
          onClick={() => openPage("News", "#ebebeb")}
          style={{ backgroundColor: tabColors.News }}
        >
          <div className="flex justify-between">
            <p className="border-b-2 border-dashed border-[#444]">
              Total sales
            </p>
            {activeTab === "News" ? (
              <MdOutlineModeEdit className="text-lg text-[#444]" />
            ) : (
              ""
            )}
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[#444] py-2 text-xl">16,115.00</p>
            <p className="flex text-green-600">
              <MdArrowOutward />
              39%
            </p>
          </div>
        </button>
        <button
          className="text-left text-xs w-1/4 tablink px-3 py-2 bg-white text-black rounded-xl hover:bg-[#ebebeb]"
          onClick={() => openPage("Contact", "#ebebeb")}
          style={{ backgroundColor: tabColors.Contact }}
        >
          <div className="flex justify-between">
            <p className="border-b-2 border-dashed border-[#444]">
              Total orders
            </p>
            {activeTab === "Contact" ? (
              <MdOutlineModeEdit className="text-lg text-[#444]" />
            ) : (
              ""
            )}
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[#444] py-2 text-xl">11</p>
            <p className="flex text-green-600">
              <MdArrowOutward />
              39%
            </p>
          </div>
        </button>
        <button
          className="text-left text-xs w-1/4 tablink px-3 py-2 bg-white text-black rounded-xl hover:bg-[#ebebeb]"
          onClick={() => openPage("About", "#ebebeb")}
          style={{ backgroundColor: tabColors.About }}
        >
          <div className="flex justify-between">
            <p className="border-b-2 border-dashed border-[#444]">
              Conversion rate
            </p>
            {activeTab === "About" ? (
              <MdOutlineModeEdit className="text-lg text-[#444]" />
            ) : (
              ""
            )}
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[#444] py-2 text-xl">0.1%</p>
            <p className="flex text-green-600">
              <MdArrowOutward />
              15%
            </p>
          </div>
        </button>
      </div>

      <div
        id="Home"
        className="tabcontent"
        style={{ display: activeTab === "Home" ? "block" : "none" }}
      >
        <div className="">
          <OnlineStoreSessionsChart />
        </div>
      </div>

      <div
        id="News"
        className="tabcontent"
        style={{ display: activeTab === "News" ? "block" : "none" }}
      >
        <div className="">
          <TotalStoreChart />
        </div>
      </div>

      <div
        id="Contact"
        className="tabcontent"
        style={{ display: activeTab === "Contact" ? "block" : "none" }}
      >
        <div className=""></div>
        <OnlineStoreSessionsChart />
      </div>

      <div
        id="About"
        className="tabcontent"
        style={{ display: activeTab === "About" ? "block" : "none" }}
      >
        <div className="">
          <OnlineStoreSessionsChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardGraph;
