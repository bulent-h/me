
import Image from "next/image";
import Cirlces from "@/app/ui/component/circles";
import RandomCloud from "@/app/ui/component/randomCloud";
import React, { Suspense } from "react";
import { i18n } from "@/i18n.config";
import { Providers } from "../providers";
import Header from "../ui/layout/header";
import Footer from "../ui/layout/footer";
import { getDictionary } from "../lib/dictionaries";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}


export default async function HomeLayout({ children, params }: { children: React.ReactNode, params: any }) {

  const content = await getDictionary(params.lang);

  return (
    <>
      <div dir={params.lang == 'ar' ? "rtl" : ''}>
        <Providers lang={params.lang} content={content} >
          <Header />
          {children}
          {/* <Footer /> */}
        </Providers>
      </div>

    </>
  );
}

