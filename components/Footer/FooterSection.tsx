/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import footerNavs from "./footerNavs";
import Brand from "@/components/Brand/Logo";
import { siteConfig } from "@/config/site";
import { useTranslations } from "next-intl";

const FooterSection = () => {
    // const t = useTranslations("Metadata");

    return (
        <>
            <footer className="bg-white dark:bg-neutral-900">
                <div className="container px-6 py-12 mx-auto">

                    {/* <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" /> */}

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {footerNavs.map((item, idx) => (
                            <section key={idx}>
                                <p className="font-semibold text-gray-800 dark:text-white">
                                    {item.label}
                                </p>
                                {item.items.map((el: any, idx: number) => (
                                    <div className="flex flex-col items-start mt-5 space-y-2" key={idx}>
                                        <a
                                            href={el.href}
                                            className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                            title={el.title}
                                            rel="nofollow"
                                        >
                                            {el.content || el.title}
                                        </a>
                                    </div>
                                ))}
                            </section>
                        ))}
                        
                    </div>

                    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                    <div className="flex flex-col items-center justify-between sm:flex-row">
                        <Brand />
                        {/* <a href="#">
                            <img
                                className="w-auto h-7"
                                src="https://merakiui.com/images/full-logo.svg"
                                alt=""
                            />
                        </a> */}

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
                            © Copyright 2024 {siteConfig.domain} All Rights Reserved.
                            {/* &copy; 2024 fluximage.org All rights reserved. */}
                        </p>
                    </div>
                </div>
            </footer>

            {/* <footer className="w-full px-6 text-gray-500 py-5 mx-auto mt-24">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <Brand />
                        <p className="leading-relaxed mt-2 text-sm text-gray-400">
                            {t("footer.title")}
                        </p>
                    </div>
                </div>
                <div className="flex-1 mt-10 space-y-6 justify-between sm:flex md:space-y-0 md:mt-0">
                    {footerNavs.map((item, idx) => (
                        <ul className="space-y-4" key={idx}>
                            <div className="text-gray-800 font-medium dark:text-white">
                                {item.label}
                            </div>
                            {item.items.map((el: any, idx: number) => (
                                <li key={idx}>
                                    <a
                                        href={el.href}
                                        className="hover:underline hover:text-indigo-600 dark:text-gray-300"
                                    >
                                        {el.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
            <div className="mt-8 py-6 border-t dark:border-zinc-600 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024 fluximage.org All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border dark:border-zinc-600 rounded-full flex items-center justify-center">
                            <a
                                href="https://x.com/candytools118"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    className="svg-icon w-6 h-6 text-blue-400"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill="none"
                                        d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer> */}
        </>
    );
};

export default FooterSection;
