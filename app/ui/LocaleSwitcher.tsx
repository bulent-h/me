"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { i18n } from "@/i18n.config";
import { MdOutlineLanguage } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import useComponentVisible from "../lib/useComponentVisible";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.05
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
export default function LocaleSwitcher({ svgSize }: { svgSize: any }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible();

  return (
    <>

      <div className="relative">
        <button
          ref={ref}
          onClick={() => setIsComponentVisible(!isComponentVisible)}
          id="dropdownDividerButton"
          data-dropdown-toggle="dropdownDivider"
          className="text-white rounded-lg text-sm p-4 text-center inline-flex items-center"
          type="button"
        >
          <FaEarthAmericas className={`${svgSize}`} />
        </button>
        {isComponentVisible && (
          <DropdownMenu>
            <motion.ul
              className="container flex flex-col space-y-4"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {i18n.locales.map((locale) => {
                return (
                  <motion.li
                    variants={item}
                    key={locale}
                    className="h-12 flex items-center"
                  >
                    <Link href={redirectedPathName(locale)} className="h-14 w-14  flex items-center justify-center  p-2 text-white rounded-full bg-gray-900/20 dark:bg-gray-500/20 hover:bg-gray-900/30  hover:dark:bg-gray-300/30" >
                      {locale.toUpperCase()}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

          </DropdownMenu>

        )}
      </div >
    </>
  );
}

function DropdownMenu({ children }: any) {

  return (
    <div className="absolute rounded-full py-4 overflow-hidden ">
        {children}
    </div>
  );
}
