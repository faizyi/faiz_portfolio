"use client";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "Home",
    page: "#",
  },
  {
    label: "Projects",
    page: "#projects",
  },
  {
    label: "About",
    page: "#about",
  },
  {
    label: "Contact",
    page: "#contact",
  },
  {
    label: <AiOutlineGithub/>,
    page: "https://github.com/faizyi",
    target: "_blank"
  },
  {
    label: <AiOutlineLinkedin/>,
    page: "https://www.linkedin.com/in/faiz-noor/",
    target: "_blank"
  }
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header
      className={`w-full fixed top-0 z-20 border-b border-gray-700 bg-gradient-to-r
        from-gray-800 via-gray-900 to-black bg-opacity-95 shadow-lg px-5 md:px-12 transition-all duration-300`}
    >
      <div className="justify-between md:items-center md:flex">
        <div className="flex items-center justify-between py-3 md:block">
          <Link href={"/"}>
            <div className="container flex items-center space-x-2">
              <h2 className="text-2xl md:text-5xl text-white font-semibold">
                Faiz Noor
              </h2>
            </div>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-400 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="text-xl block lg:inline-block text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                  onClick={() => setNavbar(!navbar)}
                >
                  <Link target={item.target} href={item.page}>{item.label}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
