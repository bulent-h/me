import { useRef, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import skills from "../skills";
export default function SkillsSection() {

  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      y: 200,
      opacity: 0,
      scale: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }

    }
  };

  return (
    <motion.div >
      <section className="min-h-screen h-full py-24 ">
        <div className=" h-full ">
          <h2 className="text-3xl text-center py-8">
            Skills
          </h2>
          <div className="flex justify-center w-full ">

            <motion.ul
              ref={ref}
              className="container flex flex-wrap justify-center w-full lg:w-2/3  rounded-2xl py-4 "
              variants={container}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >

              {Object.entries(skills).map(([key, skill]) => (

                <motion.li key={key}
                  variants={item}

                  className="item group  w-1/3 lg:w-1/5 my-4 ">
                  <div className=" flex flex-col  space-y-2">
                    <div className="flex justify-center items-center ">

                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          
                          transition:{
                            type:"spring",
                            stiffness:100,
                            duration:0.3
                          }
                        }}
                        className=" rounded-xl  p-2 bg-gray-100/90 dark:bg-white/90">
                        {skill.svg}

                      </motion.div>

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