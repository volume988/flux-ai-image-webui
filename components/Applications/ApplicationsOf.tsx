/* eslint-disable react/no-unescaped-entities */
"use client";
import { BookOpen, Megaphone, Palette, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

const ApplicationsOf = () => {
    const t = useTranslations("Generation");
    const applicationsKeys = Array.from(
        { length: Number(t("applications.length")) },
        (_, i) => i + 1
    );
    const icons: any = {
        "1": <Palette className="w-5 h-5 shrink-0 mt-2 size-8 text-gray-800 dark:text-white" />,
        "2": <Megaphone className="w-5 h-5 shrink-0 mt-2 size-8 text-gray-800 dark:text-white" />,
        "3": <BookOpen className="w-5 h-5 shrink-0 mt-2 size-8 text-gray-800 dark:text-white" />,
        "4": <Sparkles className="w-5 h-5 shrink-0 mt-2 size-8 text-gray-800 dark:text-white" />,
    }

    return (
        <section className="w-full" id="Applications">
            <div className="max-w-[85rem] px-4 py-10 mt-32 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                        {t("applicationsTitle")}
                    </h2>
                    {/* <p class="mt-1 text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p> */}
                </div>

                <div className="mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                        {/* Icon Block */}
                        {applicationsKeys.map((index: number) => (
                            <div
                                className="flex gap-x-5 sm:gap-x-8"
                                key={index}
                            >
                                {icons[String(index)]}
                                {/* <svg
                                    className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        width="18"
                                        height="10"
                                        x="3"
                                        y="11"
                                        rx="2"
                                    />
                                    <circle cx="12" cy="5" r="2" />
                                    <path d="M12 7v4" />
                                    <line x1="8" x2="8" y1="16" y2="16" />
                                    <line x1="16" x2="16" y1="16" y2="16" />
                                </svg> */}
                                <div className="grow">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                        {t(`applications.${index}.title`)}
                                    </h3>
                                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                        {t(`applications.${index}.description`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {/* End Icon Block */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationsOf;
