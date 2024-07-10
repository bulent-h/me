'use client'

import { motion, useAnimate } from "framer-motion"
import { init } from "next/dist/compiled/webpack/webpack"
import { useEffect, useState } from "react"


export default function Test() {

    const [isOpen, setIsOpen] = useState(false);
    const variant={
        open:{
            opacity:1
        },
        close:{
            opacity:0
        }
    }

    return (
        <>
            <motion.div
                // layout
                // data-isOpen={isOpen}
                // initial={{ borderRadius: 50 }}
                // transition={{opacity:0.6}}
                className="parent"
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.div layout className="child" />
            </motion.div>

        </>
    )
}