"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import sidebarData from "@/data/SlidebarData";
import smArrow from "@/assets/images/startArrow.svg";
import mdArrow from "@/assets/images/Arrow.svg";
import activeArrow from "@/assets/images/activeArrow.svg";

const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();
  const { sliderData } = sidebarData;

  // State to manage open dropdowns
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // Open dropdown if the current path is a subpath
  useEffect(() => {
    const currentItem = sliderData.find((item) => {
      if (path.startsWith(item.path)) {
        return true;
      }
      if (item.subItems) {
        return item.subItems.some((subItem) => path.startsWith(subItem.path));
      }
      return false;
    });

    if (currentItem) {
      setOpenDropdown(currentItem.id);
    }
  }, [path, sliderData]);

  const handleDropdownToggle = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleNavigation = (item: any, isSubItem: boolean = false) => {
    if (item.subItems && !isSubItem) {
      handleDropdownToggle(item.id);
    }
    router.push(item.path);
  };

  return (
    <div className="bg-[#ebebeb] p-3 w-2/12 h-dvh rounded-tl-2xl font-new sticky top-0">
      <ul className="sample relative top-14">
        {sliderData.map((item) => (
          <div key={item.id}>
            <li
              className={`flex items-center px-3 py-1 text-sm font-semibold mb-1 hover:bg-[#c6c4c467] hover:text-black text-[#555] rounded-md cursor-pointer ${
                path === item.path && "Content" !== item.heading
                  ? "bg-white"
                  : ""
              }`}
              onClick={() => handleNavigation(item)}
            >
              <item.icon className="mr-3 text-black text-sm" />
              {item.heading}
              {item.subItems && (
                <button className="ml-auto">
                  {/* {openDropdown === item.id ? "-" : "+"} */}
                </button>
              )}
            </li>
            {item.subItems && openDropdown === item.id && (
              <ul className="">
                {item.subItems.map((subItem) => (
                  <Link key={subItem.id} href={subItem.path}>
                    <li
                      className={`group flex items-center px-3 h-7 text-sm font-semibold mb-1 hover:bg-[#c6c4c467] hover:text-black text-[#555] rounded-md cursor-pointer ${
                        item.heading === "Content" ? "bg-transparent" : ""
                      } ${path === subItem.path ? "bg-white" : ""}`}
                      // onClick={() => handleNavigation(subItem, true)}
                    >
                      <img
                        src={activeArrow.src}
                        className={`mr-3 w-4 -ml-[2px] ${
                          path === subItem.path ? "" : "hidden"
                        } group-hover:block text-black text-sm`}
                      />
                      <p
                        className={`group-hover:-ml-[0px] ${
                          path === subItem.path ? "" : "ml-[26px]"
                        }`}
                      >
                        {subItem.heading}
                      </p>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
