/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useTranslations } from "next-intl";

const UseCases = () => {
  const t = useTranslations("Home");
  return (
    <section className="py-12">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="lg:flex lg:gap-16 lg:items-center">

          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl text-center lg:text-4xl text-gray-800 dark:text-neutral-200">
                  {t("useCases.title")}
                </h2>
                {/* <p className="text-gray-500 dark:text-neutral-500">
            Use our tools to explore your ideas and make your vision come true. Then share your work easily.
          </p> */}
              </div>

              <ul className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    <span className="font-bold">
                      {t("useCases.useCases.one.title")}
                    </span>{" "}
                    – {t("useCases.useCases.one.description")}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    <span className="font-bold">
                      {t("useCases.useCases.two.title")}
                    </span>{" "}
                    – {t("useCases.useCases.two.description")}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    <span className="font-bold">
                      {t("useCases.useCases.three.title")}
                    </span>{" "}
                    – {t("useCases.useCases.three.description")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
