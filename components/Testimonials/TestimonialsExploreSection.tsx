/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

const TestimonialsExploreSection: FC = () => {
    const t = useTranslations("Explore");
    const testimonialsKeys = Array.from(
        { length: Number(t("userStories.length")) },
        (_, i) => i + 1
    );

    return (
        <>
            {/* Testimonials */}
            <div className="overflow-hidden py-14">
                <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl dark:text-white font-semibold">
                            {t(`userStoriesTitle`)}
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center gap-20">
                        {testimonialsKeys.map((idx: number) => (
                            <div
                                className="flex items-center justify-center px-5 py-5 mt-10"
                                key={idx}
                            >
                                <div className="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
                                    <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                                        <a href="#" className="relative block">
                                            <img
                                                alt="Flux Image AI User"
                                                src={t(
                                                    `userStories.${idx}.avatar`
                                                )}
                                                className="mx-auto object-cover rounded-full h-20 w-20 "
                                            />
                                        </a>
                                    </div>
                                    <div className="w-full mb-10">
                                        <div className="h-3 text-3xl leading-tight text-left text-indigo-500">
                                            “
                                        </div>
                                        <p className="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
                                            {t(`userStories.${idx}.quote`)}
                                        </p>
                                        <div className="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                                            ”
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="font-bold text-center text-indigo-500 text-md">
                                            {t(`userStories.${idx}.user`)}
                                        </p>
                                        <p className="text-xs text-center text-gray-500 dark:text-gray-300">
                                            {t(`userStories.${idx}.role`)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialsExploreSection;
