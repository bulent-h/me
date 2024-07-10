'use client'
import Link from "next/link";

import LocaleSwitcher from "@/app/ui/LocaleSwitcher";
import ThemeSwitch from "@/app/ui/ThemeSwitch";
import { useContext } from "react";
import { LangContext } from "@/app/lib/LangContext";
import { headers } from "next/headers";
import "@/app/ui/css/nav.css";
import { IoMail } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { FaTools } from "react-icons/fa";

import { motion } from "framer-motion";
import Magnetic from "../component/magnetic";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
export default function Header() {
  const { lang, content } = useContext(LangContext);
  return (
    <>
      <nav className="w-full z-50 fixed top-0 left-0  p-2  space-y-2 ">

        <div className=" w-full flex justify-between space-x-2">


          <div className="w-fit bg-gray-900/20 dark:bg-gray-500/20  hover:bg-gray-900/30  hover:dark:bg-gray-300/30 backdrop-blur-md rounded-full">
            <ThemeSwitch svgSize={"w-[24px] h-[24px] "} />
          </div>
          <div className="w-fit bg-gray-900/20 dark:bg-gray-500/20 hover:bg-gray-900/30 hover:dark:bg-gray-300/30 backdrop-blur-md rounded-full ">
            <LocaleSwitcher svgSize={"w-[24px] h-[24px]"} />
          </div>
        </div>


        {/* <ul className="h-screen flex flex-col justify-center items-end space-y-2  overflow-y-auto">
          <div className="space-y-2 flex flex-col items-end ">

            <div className="">
              <Link className=" group transition duration-400 delay-200 ease-in space-x-4 inline-flex items-center hover:bg-gray-900/20  hover:dark:bg-gray-300/30 rounded-full hover:backdrop-blur-md" href={`/${lang}`}>
                <span className=" opacity-0 scale-0 group-hover:scale-100 group-hover:block transition-all duration-300 delay-900 group-hover:opacity-100	 text-white px-4 ">
                  {content.nav.home}
                </span>
                <span className=" bg-gray-900/20 dark:bg-gray-500/20 rounded-full p-4 backdrop-blur-md">
                  <MdHomeFilled className="w-[28px] h-[28px] fill-white stroke-white" />
                </span>
              </Link>
            </div>

            <div className="">
              <Link className=" group transition duration-400 delay-200 ease-in space-x-4 inline-flex items-center hover:bg-gray-900/20  hover:dark:bg-gray-300/30 rounded-full hover:backdrop-blur-md" href={`/${lang}/projects`}>
                <span className=" opacity-0 scale-0 group-hover:scale-100 group-hover:block transition-all duration-300 delay-900 group-hover:opacity-100	 text-white px-4 ">
                  {content.nav.projects}
                </span>
                <span className=" bg-gray-900/20 dark:bg-gray-500/20 hover:dark:bg-gray-300/30 rounded-full p-4 backdrop-blur-md">
                  <FaTools className="w-[28px] h-[28px] fill-white stroke-white" />
                </span>
              </Link>

            </div>

            <div className="">
              <Link className=" group transition duration-400 delay-200 ease-in space-x-4 inline-flex items-center hover:bg-gray-900/20  hover:dark:bg-gray-300/30 rounded-full hover:backdrop-blur-md" href={`/${lang}/contact`}>
                <span className=" opacity-0 scale-0 group-hover:scale-100 group-hover:block transition-all duration-300 delay-900 group-hover:opacity-100	 text-white px-4 ">
                  {content.nav.contact}
                </span>
                <span className=" bg-gray-900/20 dark:bg-gray-500/20 rounded-full p-4 backdrop-blur-md">
                  <IoMail className="w-[28px] h-[28px] fill-white stroke-white" />
                </span>
              </Link>
            </div>
          </div>
        </ul> */}

      </nav>

    </>
  );
}
