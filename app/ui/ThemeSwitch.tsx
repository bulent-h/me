"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { motion } from "framer-motion"
export default function ThemeSwitch({ svgSize }: { svgSize: any }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className={` ${svgSize}`}></div>
    );

  const toggle = () => {
    (resolvedTheme == "dark") ? setTheme("light") : setTheme("dark")

  }
  return (
    <>
      <div className="h-full w-full p-2" onClick={toggle}>
        <div className="flex space-x-1 h-full ">

          <div
            className={`${resolvedTheme === "dark" ? "" : "hover:text-white/60"
              } relative rounded-full p-2 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}

          >
            {
              resolvedTheme == "dark" && (
                <motion.div
                  layoutId="bubble"
                  className={`absolute inset-0 z-10 bg-white`}
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                ></motion.div>
              )}
            <FaSun
              id="sun"
              className={`${svgSize} fill-white stroke-white ${resolvedTheme == "dark" ? "opacity-0":"opacity-100"} `}
            />
          </div>

          <div
            className={`${resolvedTheme === "light" ? "" : "hover:text-white/60"
              } relative rounded-full p-2 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}

          >
            {
              resolvedTheme == "light" && (
                <motion.div
                  layoutId="bubble"
                  className={`absolute inset-0 z-10 bg-white`}
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                ></motion.div>
              )}
            <BsFillMoonStarsFill
              id="crescent"
              className={`${svgSize} fill-white stroke-white ${resolvedTheme == "light" ? "opacity-0":"opacity-100"} `}
            />
          </div>

        </div >

      </div >

    </>

  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1
    }
  }
};


