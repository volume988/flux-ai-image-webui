/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useTranslations } from "next-intl";
import { Icons } from "../Icons";

const HowItWorks = () => {
    const t = useTranslations("Home");
    const howItWorksKeys = Array.from(
        { length: Number(t("howItWorks.steps.length")) },
        (_, i) => i + 1
    );
    const icons: any = {
        "1": <Icons.Step1 />,
        "2": <Icons.Step2 />,
        "3": <Icons.Step3 />,
        "4": <Icons.Step4 />,
    };

    return (
        <section>
            <div className="min-h-screen">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 h-max">
                    <div className="text-center flex flex-col items-center justify-center">
                        <Icons.Star />
                        <h2 className="my-8 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                            {t("howItWorks.title")}
                        </h2>
                        {/* <p className="text-gray-500 dark:text-gray-300">
                            {t("howItWorks.description")}
                        </p> */}
                    </div>
                    {/* mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4 */}
                    <div className="mt-16 grid divide-x divide-y  divide-gray-300 dark:divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-300 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
                        {howItWorksKeys.map((idx: number) => (
                            <div
                                className="group relative bg-gray-100 dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
                                key={idx}
                            >
                                <div className="relative space-y-8 py-12 p-8">
                                    {icons[String(idx)]}
                                    <div className="space-y-2">
                                        <h5 className="text-xl font-semibold text-gray-800 dark:text-white transition">
                                            {t(`howItWorks.steps.${idx}.title`)}
                                        </h5>
                                        <p className="text-gray-500 dark:text-gray-300">
                                            {t(
                                                `howItWorks.steps.${idx}.description`
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="group relative bg-gray-100  dark:bg-white/10 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div className="relative space-y-8 py-12 p-8">
                                <Icons.Step2 />
                                <div className="space-y-2">
                                    <h5 className="text-xl font-semibold text-gray-800 dark:text-white transition group-hover:text-secondary">
                                        Deal Finalized
                                    </h5>
                                    <p className="text-gray-500 dark:text-gray-300">
                                        Once we agree on what to build, We will
                                        start working on it right away.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative bg-gray-100  dark:bg-white/10 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div className="relative space-y-8 py-12 p-8">
                                <Icons.Step3 />
                                <div className="space-y-2">
                                    <h5 className="text-xl font-semibold text-gray-800 dark:text-white transition group-hover:text-secondary">
                                        Product Delivery
                                    </h5>
                                    <p className="text-gray-500 dark:text-gray-300">
                                        We will develop your product MVP in 15
                                        days (more time required depending on
                                        the complexity of the project)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative bg-gray-100  dark:bg-white/10 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div className="relative space-y-8 py-12 p-8">
                                <Icons.Step4 />
                                <div className="space-y-2">
                                    <h5 className="text-xl font-semibold text-gray-800 dark:text-white transition group-hover:text-secondary">
                                        Celebrate your Launch
                                    </h5>
                                    <p className="text-gray-500 dark:text-gray-300">
                                        We love Celebrations. We will celebrate
                                        your launch on our Social Profiles.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
