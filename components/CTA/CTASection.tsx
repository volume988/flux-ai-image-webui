/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useTranslations } from "next-intl";

const CTASection = () => {
  const t = useTranslations("Home");

  return (
    <>
    <section className="bg-white dark:bg-neutral-900">
        <div className="max-w-[85rem] mx-auto gap-8 items-center py-8 px-4 sm:px-6 lg:px-8 xl:gap-16 md:grid md:grid-cols-2 sm:py-16">
            <img className="w-full h-[420px] object-cover rounded-lg" src="/sub-image-1.png" alt="flux.1 schnell AI image" />
            {/* <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" /> */}
            {/* <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" /> */}
            <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("callToAction.title")}</h2>
                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("callToAction.description")}</p>
                <a href="/ai-image-generator" className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900">
                    {t("callToAction.buttonText")}
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </section>

    {/* <section className="w-full">
      <div className="container flex flex-col items-center py-12 mx-auto text-center">
        <h2 className="mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          {t("CTA.title")}
        </h2>

        <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
          {t("CTA.subtitle")}
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
          <a
            href="/generation"
            className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            {t("CTA.buttonText")}
          </a>
        </div>
      </div>
    </section> */}
    </>
  );
};

export default CTASection;
