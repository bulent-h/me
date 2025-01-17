import { delay, motion } from "framer-motion"
import { useEffect, useState } from "react";

export default function AnimatedText({ text }: { text: String }) {


    return (
        <>

            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.02 }}
            >
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={item}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </>
    )
}

const item = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,

    }
}
