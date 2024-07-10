import HomeContent from "./ui/content/home";
import HomeLayout from "./[lang]/layout";
import { Providers } from "./providers";
import Header from "./ui/layout/header";
import Footer from "./ui/layout/footer";
import { getDictionary } from "./lib/dictionaries";

export default async function RootPage() {

  const content = await getDictionary('en');

  return (
    <Providers lang={'en'} content={content}>
      <Header />
      <HomeContent />
    </Providers>
  );
}

