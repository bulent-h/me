/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import contactSvgs, { Email } from "../contactSvgs";
import Magnetic from "../component/magnetic";

export default function Footer() {
  return (
    <>
      <footer className="w-full h-full flex flex-col justify-center items-center min-h-[250px] ">
        <div className="flex w-2/3 justify-center ">
          {
            Object.entries(contactSvgs).map(([key, value]) => (
              <Link key={key} target="_blank" className="p-2 bg-gray-400/50 rounded-full h-fit w-fit mx-4" href={value.url}>
                {value.svg}
              </Link>
            ))
          }
        </div>

        <span className=" text-xl p-12 ">
          Email: a.bulent.h@gmail.com
        </span>
        <span className="text-sm">
          Copyright 2025 
        </span>
      </footer>

    </>
  );
}
