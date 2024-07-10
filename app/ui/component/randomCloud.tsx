"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Sun from "@/app/ui/svgs/sun"
import Cloud from "@/app/ui/svgs/cloud"
import Magnetic from "./magnetic";
import Crescent from "../svgs/crescent";

interface positionType {
  left: number;
  top: number;
}

export default function Home() {
  const [cloudsPositions, setCloudsPositions] = useState<positionType[]>([]);
  const [starsPositions, setStarsPositions] = useState<positionType[]>([]);

  const cloudImages = [
    "/image/cloud1.webp",
    "/image/cloud2.webp",
    "/image/cloud3.webp",
  ];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const numImages = 10;
    const numStars = 100;

    const cloudsPositions = Array.from({ length: numImages }, () => ({
      left: Math.floor(Math.random() * (containerWidth - 0)),
      top: Math.floor(Math.random() * (containerHeight - 100)),
    }));
    const starsPositions = Array.from({ length: numStars }, () => ({
      left: Math.floor(Math.random() * (containerWidth - 0)),
      top: Math.floor(Math.random() * (containerHeight - 0)),
    }));

    setStarsPositions(starsPositions);
    setCloudsPositions(cloudsPositions);
  }, []);

  return (
    <div
      className="w-full h-full "
      ref={containerRef}
      style={{ position: "relative", width: "100%", }}
    >
      <div className="">
        <div className={`absolute blur-[1px] z-10 unselectable hidden dark:inline top-[100px] right-[100px] lg:top-[50px] lg:right-[400px]`}
        >
          <Crescent className="h-28 w-28" />
        </div>
      </div>
      <div className="">
        <div
          className={` absolute blur-[1px] z-10 unselectable dark:hidden inline top-[100px] right-[100px] lg:top-[50px] lg:right-[400px]`}
        >
          <Sun className="h-28 w-28" />
        </div>
      </div>

      {cloudsPositions.map((position, index) => (
        <div
          key={index}
          className="blur-[1px] unselectable inline dark:hidden"
          style={{
            position: "absolute",
            left: position.left + "px",
            top: position.top + "px",
            width: "auto",
            height: "auto",
            transform: index % 2 ? "scaleX(-1)" : "scaleX(1)",
            opacity: Math.random() + 0.2,
          }}
        >
          <Cloud className="w-14 h-14" />
        </div>
      ))}
      {starsPositions.map((position, index) => (
        <svg
          key={index}
          className="w-2 h-2 fill-yellow-100 blur-[2.4px] unselectable hidden dark:inline  animate-pulse"
          viewBox="-16 0 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            left: position.left + "px",
            top: position.top + "px",
            opacity: Math.random(),
            scale: Math.random() + 0.2
          }}
        >
          <path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z" />
        </svg>
      ))
      }

    </div >
  );
}
