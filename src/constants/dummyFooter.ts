import { ROUTE_TOKENS } from "@/constants/routes";
import { warn } from "console";

export const footerPages = [
  {
    category: "Categories",
    pages: [
      {
        label: "Laptops & Computers",
        url: ROUTE_TOKENS.products,
      },
      {
        label: "Camerras & Photography",
        url: ROUTE_TOKENS.products,
      },
      {
        label: "Smartphones & Tablets",
        url: ROUTE_TOKENS.products,
      },
      {
        label: "TVs & Home Entertainment",
        url: ROUTE_TOKENS.products,
      },
      {
        label: "Gaming & Accessories",
        url: ROUTE_TOKENS.products,
      },
    ],
  },
  {
    category: "Customer Care",
    pages: [
      {
        label: "My Account",
        url: ROUTE_TOKENS.home,
      },
      {
        label: "Orders",
        url: ROUTE_TOKENS.home,
      },
      {
        label: "Wishlist",
        url: ROUTE_TOKENS.home,
      },
      {
        label: "Support",
        url: ROUTE_TOKENS.home,
      },
      {
        label: "Settings",
        url: ROUTE_TOKENS.home,
      },
    ],
  },
  {
    category: "Pages",
    pages: [
      {
        label: "Blog",
        url: ROUTE_TOKENS.home,
      },
      {
        label: "News",
        url: ROUTE_TOKENS.home,
      },
      {
        label: "Guides",
        url: ROUTE_TOKENS.home,
      },
      {
        label: "Reviews",
        url: ROUTE_TOKENS.home,
      },
      {
        label: "Community",
        url: ROUTE_TOKENS.home,
      },
    ],
  },
];

export const socialLinks = [
  {
    label: "Social facebook",
    img: "/facebook.svg",
    url: "https://www.griddynamics.com/",
  },
  {
    label: "Twitter social",
    img: "/twitter.svg",
    url: "https://www.griddynamics.com/",
  },
  {
    label: "Instagram facebook",
    img: "/instagram.svg",
    url: "https://www.griddynamics.com/",
  },
];
