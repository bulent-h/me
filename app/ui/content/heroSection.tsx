import { LangContext } from "@/app/lib/LangContext";
import { useContext } from "react";
import RandomCloud from "@/app/ui/component/randomCloud";
import AnimatedText from "../component/animatedText";

export default function HeroSection() {
    const { lang, content } = useContext(LangContext);

    return (
        <>
            <section className="flex justify-center items-center w-full md:max-w-4xl lg:max-w-7xl  mx-auto px-6 pt-12">
                <div className="  w-full h-screen  overflow-hidden absolute top-0 ">
                    <RandomCloud />
                </div>
                <div
                    className="z-10 min-h-screen h-full  flex flex-col items-center justify-center pb-20"

                >
                    <div className="">
                        <div className="grid border-1 gap-12 lg:grid-cols-12 grid-cols-1 lg:py-12 md:py-8 py-6 ">
                            <div className={` w-full h-full lg:col-span-8`}>
                                <div className=" flex flex-col justify-center  rounded-xl text-black dark:text-white h-full w-full unselectable">
                                    <h1 className="font-semibold mb-8 text-3xl ">
                                        {content.home.hello}
                                    </h1>
                                    <div className="text-lg"
                                        style={{ lineHeight: "190%" }}>
                                            {/* {content.home.description} */}
                                        <AnimatedText text={ content.home.description } />
                                    </div>
                                </div>
                            </div>
                            {/* <div className={`w-full h-full lg:col-span-4`}>
                                <div className=" rounded-3xl overflow-hidden">
                                    <div className="overflow-hidden aspect-square lg:aspect-[10/11] flex justify-center lg:justify-end">
                                    fkewokfopew
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}