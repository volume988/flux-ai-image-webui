/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import { useTranslations, useFormatter } from "next-intl";
import { Gem, Lightbulb, LockOpen, Sparkles } from "lucide-react";

const FeatureSection: FC = () => {
    const t = useTranslations("Home");
    const featureKeys = Array.from(
        { length: Number(t("features.features.length")) },
        (_, i) => i + 1
    );
    const icons: any = {
        "1": <Sparkles className="w-5 h-5" />,
        "2": <Gem className="w-5 h-5" />,
        "3": <Lightbulb className="w-5 h-5" />,
        "4": <LockOpen className="w-5 h-5" />,
    }

    return (
        <>
            <section className="max-w-[85rem] mx-auto" id="Features">
                <div className="px-4 sm:px-6 lg:px-8 py-10 mx-auto">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                        {t("features.title")}
                        {/* <br /> awesome <span className="text-blue-500">Components</span> */}
                    </h2>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                        {featureKeys.map((idx: number) => (
                            <div
                                className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800"
                                key={idx}
                            >
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    {icons[String(idx)]}
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        />
                                    </svg> */}
                                </span>

                                <h3 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                                    {t(`features.features.${idx}.title`)}
                                </h3>

                                <p className="text-gray-500 dark:text-gray-300">
                                    {t(`features.features.${idx}.description`)}
                                </p>

                                {/* <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                          <span className="mx-1">read more</span>
                          <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a> */}
                            </div>
                        ))}

                        {/* <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                  </span>

                  <h3 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configuration</h3>

                  <p className="text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                  </p>

                  <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span className="mx-1">read more</span>
                      <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div> */}

                        {/* <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                  </span>

                  <h3 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h3>

                  <p className="text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                  </p>

                  <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span className="mx-1">read more</span>
                      <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div> */}
                    </div>
                </div>
            </section>

            {/* <section className="py-14" id="Features">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="aspect-w-16 aspect-h-7">
          <img
            className="w-full object-cover rounded-xl"
            src="/showcase1.gif"
            alt="LivePortrait AI Example"
          />
        </div>

        <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-bold text-center text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
              {t("features.title")}
            </h2>
            <p className="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500">
              {t("features.description")}
            </p>
          </div>
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                {features.map((feature, index) => (
                  <div className="flex gap-x-5" key={index}>
                    <svg
                      className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
                      <rect width="18" height="10" x="3" y="11" rx="2" />
                      <circle cx="12" cy="5" r="2" />
                      <path d="M12 7v4" />
                      <line x1="8" x2="8" y1="16" y2="16" />
                      <line x1="16" x2="16" y1="16" y2="16" />
                    </svg>
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section> */}
        </>
    );
};

export default FeatureSection;
