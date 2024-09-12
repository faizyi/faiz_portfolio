"use client"
import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "About",
    page: "/about",
  },
  {
    label: "Projects",
    page: "/projects",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full px-16 fixed bg-black top-0 z-20 dark:border-b 
    dark:border-stone-600 bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-lg">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href={"/"}>
              <div className="container flex items-center space-x-2">
                {/* <div className="rounded-full bg-[#181818] overflow-hidden w-[50px] h-[50px]">
                  <Image
                    src="/images/faiz.png" // Ensure your image is high resolution
                    alt="Faiz Image"
                    width={1500} // HD resolution
                    height={1200}
                    className="object-cover w-full h-full" // Ensures the image fits within the circular div
                  />
                </div> */}
                <h2 className="text-2xl md:text-5xl text-white font-semibold">Faiz Noor</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    to={item.page}
                    className="text-xl block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <Link href={item.page}>
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
