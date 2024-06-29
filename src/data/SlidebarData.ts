import { FiHome } from "react-icons/fi";
import { TbBorderAll } from "react-icons/tb";
import { IoPricetag } from "react-icons/io5";
import { FaUser, FaRegImages } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SiGooglemarketingplatform } from "react-icons/si";
import { CiDiscount1 } from "react-icons/ci";
import { IconType } from "react-icons";

interface SubItem {
  id: number;
  heading: string;
  path: string;
}

interface SliderItem {
  id: number;
  heading: string;
  icon: IconType;
  path: string;
  subItems?: SubItem[];
}
const sidebarData = {
  sliderData: [
    {
      id: 1,
      heading: "Home",
      icon: FiHome,
      path: "/dashboard",
    },
    {
      id: 2,
      heading: "Order",
      icon: TbBorderAll,
      path: "/order",
      subItems: [
        {
          // id: 1,
          heading: "Drafts",
          // icon: TbBrandGoogleAnalytics,
          path: "/draft_orders",
        },
        {
          // id: 2,
          heading: "Abandoned checkouts",
          // icon: TbBrandGoogleAnalytics,
          path: "/checkouts",
        },
      ],
    },
    {
      id: 3,
      heading: "Products",
      icon: IoPricetag,
      path: "/products",
      subItems: [
        {
          id: 1,
          heading: "Collections",
          // icon: TbBrandGoogleAnalytics,
          path: "/collections",
        },
        {
          id: 2,
          heading: "Inventory",
          // icon: TbBrandGoogleAnalytics,
          path: "/inventory",
        },
        {
          id: 3,
          heading: "Purchase orders",
          // icon: TbBrandGoogleAnalytics,
          path: "/purchase_orders",
        },
        {
          id: 4,
          heading: "Transfers",
          // icon: TbBrandGoogleAnalytics,
          path: "/transfers",
        },
        {
          id: 5,
          heading: "Gift cards",
          // icon: TbBrandGoogleAnalytics,
          path: "/gift_cards",
        },
      ],
    },
    {
      id: 4,
      heading: "Customers",
      icon: FaUser,
      path: "/customers",
      subItems: [
        {
          id: 1,
          heading: "Segments",
          // icon: TbBrandGoogleAnalytics,
          path: "/segments",
        },
      ],
    },
    {
      id: 5,
      heading: "Content",
      icon: FaRegImages,
      path: "/content/metaobjects",
      subItems: [
        {
          id: 1,
          heading: "Metaobjects",
          // icon: TbBrandGoogleAnalytics,
          path: "/content/metaobjects",
        },
        {
          id: 2,
          heading: "Files",
          // icon: TbBrandGoogleAnalytics,
          path: "/content/files",
        },
      ],
    },
    {
      id: 6,
      heading: "Analytics",
      icon: TbBrandGoogleAnalytics,
      path: "/analytics",
      subItems: [
        {
          id: 1,
          heading: "Reports",
          // icon: TbBrandGoogleAnalytics,
          path: "/reports",
        },
        {
          id: 2,
          heading: "Live View",
          // icon: TbBrandGoogleAnalytics,
          path: "/live",
        },
      ],
    },
    {
      id: 7,
      heading: "Marketing",
      icon: SiGooglemarketingplatform,
      path: "/marketing",
      subItems: [
        {
          id: 1,
          heading: "Campaigns",
          // icon: TbBrandGoogleAnalytics,
          path: "/campaigns",
        },
        {
          id: 2,
          heading: "Automations",
          // icon: TbBrandGoogleAnalytics,
          path: "/automations",
        },
      ],
    },
    { id: 8, heading: "Discounts", icon: CiDiscount1, path: "/discounts" },
  ] as SliderItem[],
};

export default sidebarData;
