/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

const TestimonialsSection: FC = () => {
    const t = useTranslations("Home");
    const testimonialsKeys = Array.from(
        { length: Number(t("testimonials.testimonials.length")) },
        (_, i) => i + 1
    );

    // const testimonials = [
    //     {
    //         avatar: "/memo_3.png",
    //         name: t("testimonials.testimonials.one.author").split(",")[0],
    //         title: t("testimonials.testimonials.one.author")
    //             .split(",")[1]
    //             .trim(),
    //         quote: t("testimonials.testimonials.one.quote"),
    //     },
    //     {
    //         avatar: "/memo_2.png",
    //         name: t("testimonials.testimonials.two.author").split(",")[0],
    //         title: t("testimonials.testimonials.two.author")
    //             .split(",")[1]
    //             .trim(),
    //         quote: t("testimonials.testimonials.two.quote"),
    //     },
    //     {
    //         avatar: "/memo_4.png",
    //         name: t("testimonials.testimonials.three.author").split(",")[0],
    //         title: t("testimonials.testimonials.three.author")
    //             .split(",")[1]
    //             .trim(),
    //         quote: t("testimonials.testimonials.three.quote"),
    //     },
    //     {
    //         avatar: "/memo_23.png",
    //         name: t("testimonials.testimonials.four.author").split(",")[0],
    //         title: t("testimonials.testimonials.four.author")
    //             .split(",")[1]
    //             .trim(),
    //         quote: t("testimonials.testimonials.four.quote"),
    //     },
    //     {
    //         avatar: "/memo_5.png",
    //         name: t("testimonials.testimonials.five.author").split(",")[0],
    //         title: t("testimonials.testimonials.five.author")
    //             .split(",")[1]
    //             .trim(),
    //         quote: t("testimonials.testimonials.five.quote"),
    //     },
    //     {
    //         avatar: "/memo_24.png",
    //         name: t("testimonials.testimonials.six.author").split(",")[0],
    //         title: t("testimonials.testimonials.six.author")
    //             .split(",")[1]
    //             .trim(),
    //         quote: t("testimonials.testimonials.six.quote"),
    //     },
    // ];
    return (
        <>
            {/* Testimonials */}
            <div className="overflow-hidden bg-[#f2f7f7] dark:bg-neutral-950 py-14">
                <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl dark:text-white font-semibold">
                            {t(`testimonials.title`)}
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonialsKeys.map((idx: number) => (
                        <div className="flex h-auto" key={idx}>
                            <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                                <div className="flex-auto p-4 md:p-6">
                                    <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                                        {t(`testimonials.testimonials.${idx}.quote`)}
                                    </p>
                                </div>

                                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                                    <div className="flex items-center gap-x-3">
                                        <div className="shrink-0">
                                            <img
                                                className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                                                src={t(`testimonials.testimonials.${idx}.avatar`)}
                                                alt="Flux AI Image User"
                                            />
                                        </div>

                                        <div className="grow">
                                            <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                                                {t(`testimonials.testimonials.${idx}.author`)}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-neutral-400">
                                                {t(`testimonials.testimonials.${idx}.job`)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}

                        {/* <div className="flex h-auto">
                            <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                                <div className="flex-auto p-4 md:p-6">
                                    <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                                        " In September, I will be using this
                                        theme for 2 years. I went through
                                        multiple updates and changes and I'm
                                        very glad to see the consistency and
                                        effort made by the team. "
                                    </p>
                                </div>

                                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                                    <div className="flex items-center gap-x-3">
                                        <div className="shrink-0">
                                            <img
                                                className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                alt="Avatar"
                                            />
                                        </div>

                                        <div className="grow">
                                            <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                                                Luisa
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-neutral-400">
                                                Senior Director of Operations |
                                                Fitbit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex h-auto">
                            <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                                <div className="flex-auto p-4 md:p-6">
                                    <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                                        " Refreshing and Thought provoking
                                        design and it changes my view about how
                                        I design the websites. Great typography,
                                        modern clean white design, nice tones of
                                        the color. "
                                    </p>
                                </div>

                                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                                    <div className="flex items-center gap-x-3">
                                        <div className="shrink-0">
                                            <img
                                                className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                                                src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                                                alt="Avatar"
                                            />
                                        </div>

                                        <div className="grow">
                                            <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                                                Alisa Williams
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-neutral-400">
                                                Entrepreneur | Happy customer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8"> */}
                    {/* <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white">Accuracy rate</h4>
                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">99.95%</p>
                <p className="mt-1 text-gray-400">in fulfilling orders</p>
              </div> */}

                    {/* <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white">Startup businesses</h4>
                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">2,000+</p>
                <p className="mt-1 text-gray-400">designer with Flux AI</p>
              </div> */}

                    {/* <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white">Happy customer</h4>
                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">85%</p>
                <p className="mt-1 text-gray-400">this year alone</p>
              </div> */}
                    {/* </div> */}

                    {/* <div className="absolute bottom-0 end-0 transform lg:translate-x-32" aria-hidden="true">
              <svg className="w-40 h-auto sm:w-72" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" className="fill-orange-500"/>
                <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" className="fill-cyan-500"/>
                <path d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z" fill="currentColor" className="fill-white"/>
              </svg>
            </div> */}
                </div>
            </div>

            {/* <div className="max-w-xl sm:text-center md:mx-auto">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              {t("testimonials.title")}
            </h2>
          </div>
          <div className="mt-12">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, idx) => (
                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                  <figure>
                    <div className="flex items-center gap-x-4">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 rounded-full"
                        alt="user image"
                      />
                      <div>
                        <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                    <blockquote>
                      <p className="mt-6 text-gray-700">{item.quote}</p>
                    </blockquote>
                  </figure>
                </li>
              ))}
            </ul>
          </div> */}
        </>
    );
};

export default TestimonialsSection;
