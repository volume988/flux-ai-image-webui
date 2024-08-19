/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { ChevronRight, SquareChevronRight, SquareMousePointer, WandSparkles } from "lucide-react";

const HeroSection: FC = () => {
    const t = useTranslations("Home");

    return (
        <>
            {/* Hero */}
            <div className="relative overflow-hidden">
                <div className="relative z-10">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                        {/* max-w-2xl */}
                        <div className=" text-center mx-auto">
                            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                            {t("hero.subtitle")}
                            </p>

                            {/* max-w-2xl */}
                            <div className="mt-5 ">
                                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                                    {t("hero.title")}
                                </h1>
                            </div>

                            {/*  max-w-3xl */}
                            <div className="mt-5 max-w-5xl mx-auto">
                                <p className="text-lg text-gray-600 dark:text-neutral-400">
                                    {t("hero.description")}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="mt-8 gap-3 flex justify-center">
                                <a
                                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    // href="/generation"
                                    href="/ai-image-generator"
                                >
                                    {t("hero.buttonText")}
                                    <ChevronRight className="size-4" />
                                </a>
                                <a
                                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href="/ai-image-generator"
                                >
                                    <WandSparkles className="w-5 h-5" />
                                    {t("hero.tryButtonText")}
                                </a>
                            </div>

                            {/* Main Image */}
                            {/* <div className="mt-10 h-96 max-w-5xl mx-auto sm:h-[480px] rounded-xl overflow-hidden"> */}
                                <img
                                    src="/main-image.webp"
                                    className="w-full object-cover mx-auto my-10 max-w-5xl rounded-xl"
                                    alt="Flux.1 AI Image Generator"
                                />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* End Hero */}
        </>
    );
};

export default HeroSection;
