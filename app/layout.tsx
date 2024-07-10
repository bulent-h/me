import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Script from "next/script";
import { Locale, i18n } from "@/i18n.config";
import { lusitana } from "@/app/ui/fonts";
import LocaleSwitcher from "./ui/LocaleSwitcher";
import RandomCloud from "@/app/ui/component/randomCloud";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Layout({ params, children }: { params: { lang: Locale }, children: React.ReactNode }) {

  return (
    <html
      className=" bg-gray-900"
      suppressHydrationWarning
      
    >
     
      <body className={` h-screen flex flex-col  tracking-wider overflow-x-hidden bg-gray-900  ${lusitana.className}`}
      >
        {children}
      </body>
      {/* <Script src="/script/all.js" /> */}
    </html>

  );
}
