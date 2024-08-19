/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

const TechnologySection: FC = () => {
    const t = useTranslations("Home");

    return (
        <>
            <div className="relative">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-24">
                    <h2 className="font-semibold dark:text-white text-4xl md:text-5xl">
                        {/* <span className="text-[#ff0] ">Preline Agency:</span> Transforming ideas into reality */}
                        {t("technology.title")}
                    </h2>
                    <div className="max-w-4xl">
                        <p className="mt-5 text-neutral-400 text-lg">
                            {t("technology.description")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TechnologySection;
