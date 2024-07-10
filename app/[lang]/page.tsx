
import Image from "next/image";
import Cirlces from "@/app/ui/component/circles";
import RandomCloud from "@/app/ui/component/randomCloud";
import { Suspense } from "react";
import { i18n } from "@/i18n.config";
import HomeContent from "../ui/content/home";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}


export default function Home() {

  return (
    <>
      <HomeContent />
    </>
  );
}
