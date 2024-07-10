'use client';
import skills from "@/app/ui/skills"
import SpaceBackground from "@/app/ui/spaceBackground";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: {
    y: 200,
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 }

  }
};


export default function Home() {

  const mainContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainContainer,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <>
      <main ref={mainContainer} className="relative h-[200vh] dark:text-white text-gray-200 ">
        <SkillsSection scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />

      </main>
    </>

  );
}

const SkillsSection = ({ scrollYProgress }: any) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen" >
      <section className=" top-0 h-screen p-1">
        <div className="border rounded-xl bg-yellow-600 h-full ">
          <h2 className="text-3xl text-center py-8">
            Skills
          </h2>
          <div className="flex justify-center w-full ">

            <motion.ul
              className="container flex flex-wrap justify-center w-2/3 rounded-2xl py-4 "
              variants={container}
              initial="hidden"
              animate="visible"
            >

              {Object.entries(skills).map(([key, skill]) => (

                <motion.li key={key}  variants={item} className="item group  w-full md:w-1/3 lg:w-1/6 my-4 ">
                  <div className="group-hover:scale-110 flex flex-col transition duration-200 ease-in space-y-2">
                    <div className="flex justify-center items-center  hover:grayscale-0  ">
                      <div className=" rounded-xl border-2 p-2 bg-gray-200">
                        {skill.svg}
                      </div>
                    </div>
                    <span className="text-center ">{skill.name}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

      </section>
    </motion.div >
  )
}
const Section2 = ({ scrollYProgress }: any) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen bg-blue-500">
      <h2 className="text-3xl text-center py-8">
        Skills
      </h2>
      <div className="flex justify-center w-full ">

        <motion.ul
          className="container flex flex-wrap justify-center w-1/2 border-2 rounded-2xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >

          {Object.entries(skills).map(([key, skill]) => (

            <motion.li key={key} variants={item} className="item group flex flex-col w-full md:w-1/2 lg:w-1/4 my-4  ">
              <div className="flex justify-center items-center  hover:scale-105 hover:grayscale-0 transition duration-200 ease-in">
                <div className="group-hover:shadow-gray-400 group-hover:shadow-2xl  transition duration-200 ease-in rounded-xl border-2 p-2 ">
                  {skill.svg}
                </div>
              </div>
              <span className="text-center">{skill.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  )
}
