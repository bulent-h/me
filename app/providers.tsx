"use client";

import { Locale } from "@/i18n.config";
import { ThemeProvider } from "next-themes";
import { LangContext } from "./lib/LangContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Providers({ children, lang, content }: { children: React.ReactNode, lang: Locale, content: any }) {


  return (
    <LangContext.Provider value={{ lang, content }}>
      <ThemeProvider attribute="class"
      // defaultTheme="system" 
      // enableSystem
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          exit={{ opacity: 0 }}
          className="h-full"

        >
          {children}
        </motion.div>
      </ThemeProvider>
    </LangContext.Provider>
  );
}
