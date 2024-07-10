
'use client'

import React from "react";
import { useContext } from "react";
import { LangContext } from "@/app/lib/LangContext";
import { useRef, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import skills from "../skills";
import HeroSection from "./heroSection";
import Footer from "../layout/footer";
import SkillsSection from "@/app/ui/content/skillsSection"
import Lenis from "lenis";

export default function HomeContent() {

  return (
    <>
      <main  className="bg-gradient-to-b from-sky-300  via-sky-300  to-white  dark:bg-gradient-to-b dark:from-gray-950   dark:via-gray-900  dark:to-gray-700">
        <HeroSection />
        <SkillsSection />
        <Footer />
      </main>
    </>
  );
}




