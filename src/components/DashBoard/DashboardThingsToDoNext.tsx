import React from "react";
import { IoIosArrowUp, IoIosMore } from "react-icons/io";

const DashboardThingsToDoNext = () => {
  return (
    <>
      <div className="py-3 text-sm font-medium">Things to do next</div>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
        className="p-4 bg-white rounded-lg mb-4"
      >
        <div className="flex items-center justify-between font-medium">
          <h6>Grow your audience</h6>
          <p className="flex">
            <IoIosMore className="mr-3" />
            <IoIosArrowUp />
          </p>
        </div>
        <h6>Grow your audience</h6>
        <p className="flex">
          <IoIosMore className="mr-3" />
          <IoIosArrowUp />
        </p>
        <h6>Grow your audience</h6>
        <p className="flex">
          <IoIosMore className="mr-3" />
          <IoIosArrowUp />
        </p>
        <h6>Grow your audience</h6>
        <p className="flex">
          <IoIosMore className="mr-3" />
          <IoIosArrowUp />
        </p>
      </div>
    </>
  );
};

export default DashboardThingsToDoNext;
