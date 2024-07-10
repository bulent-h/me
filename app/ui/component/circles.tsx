"use client";
import React, { useState } from "react";

const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      className=" w-40 h-40 rounded-full bg-blue-500 flex items-center justify-center relative"
      // onMouseMove={(e) => {
      //   setPosition({
      //     x: e.clientX,
      //     y: e.clientY,
      //   });
      // }}
    >
      <div
        id="eye"
        className="eye w-8 h-8 rounded-full bg-red-500 absolute"
        // style={{ top: position.y, left: position.x }}
      ></div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Circle />
    </div>
  );
};

export default App;
