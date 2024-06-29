import React from "react";
import logos from "@/assets/images/shopy.svg";
import words from "@/assets/images/shopify-wordmark-monochrome-CpVsfBAAmxEP.svg";
import Link from "next/link";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Search } from "lucide-react";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="bg-black py-2 px-3 flex justify-between overflow-hidden fixed w-full z-50">
        <div className="flex">
          <img className="w-5" src={logos.src} alt="" />
          <img className="mt-1 ml-2 w-16" src={words.src} alt="" />
          <Link
            className="ml-2 px-1 text-xs border-white text-white italic flex items-center"
            href="#"
          >
            <p
              style={{ border: ".1px solid" }}
              className="w-20 text-center rounded-md py-1"
            >
              Summer &lsquo;24
            </p>
          </Link>
        </div>
        <div className="flex items-center">
          <Input
            className="placeholder:text-white w-[600px] h-8 bg-[#222] text-white"
            placeholder="Search"
            prefix={<IoIosSearch className="" style={{ color: "white" }} />}
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: "white" }} />
              </Tooltip>
            }
          />
        </div>
        <div className="flex items-center">
          <Link href="">
            <FaRegBell className="text-white" />
          </Link>
          <div className="flex">
            <Link
              //   style={{ border: ".1px solid" }}
              className="ml-2 px-1  border-white text-white font-bold rounded-lg flex items-center"
              href="#"
            >
              <p className="bg-pink-500 p-2 rounded-md">DS</p>
              <p className="w-20 text-center">Danish</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
