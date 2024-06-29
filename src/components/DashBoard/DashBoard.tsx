import Link from "next/link";
import React from "react";
import { CgLivePhoto } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import DashboardGraph from "./DashboardGraph";
import DashboardThingsToDoNext from "./DashboardThingsToDoNext";

const DashBoard = () => {
  return (
    <div className="bg-[#f1f1f1] w-10/12 rounded-tr-2xl overflow-y-scroll h-auto">
      <div className="w-7/12 m-auto">
        <div className="block">
          <div className="py-5 flex">
            <Link
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              href="#"
              className="bg-white flex items-center px-3 py-1 rounded-lg mr-3"
            >
              <CiCalendar className=" mr-3" />
              <p>Last 30 days</p>
            </Link>
            <Link
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              href="#"
              className="bg-white flex items-center px-3 py-1 rounded-lg mr-3"
            >
              <p className=" mr-3">All channels</p>
              <IoIosArrowDown />
            </Link>
            <Link
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              href="#"
              className="bg-white flex items-center px-3 py-1 rounded-lg"
            >
              <CgLivePhoto
                // style={{
                //   boxShadow:
                //     "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                // }}
                className=" mr-3 text-green-500"
              />
              <p>1 live visitor</p>
            </Link>
          </div>
          <DashboardGraph />
          <DashboardThingsToDoNext />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
