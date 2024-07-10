'use client'

import contactSvgs, { Email } from "@/app/ui/contactSvgs";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";


export default function Contact() {


  return (
    <>
      <main className="w-full h-full flex flex-col justify-center items-center bg-[#355799] dark:bg-gray-800">

        <div className="flex w-2/3 justify-center space-x-6">

          {
            Object.entries(contactSvgs).map(([key, value]) => (
              <Link key={key} target="_blank" className="p-2 bg-gray-500/80 rounded-full" href={value.url}>
                {value.svg}
              </Link>
            ))
          }

        </div>
        <div className="m-12">
          <div className="p-2 bg-gray-500/80 rounded-full w-fit">
            <Link href="mailto:a.bulent.h@gmail.com" className="">
              <Email />
            </Link>
          </div>
          <span>
            a.bulent.h@gmail.com
          </span>
        </div>

      </main>

    </>
  );

}
