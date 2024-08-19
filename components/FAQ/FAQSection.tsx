/* eslint-disable react/no-unescaped-entities */
"use client";
import { useTranslations } from "next-intl";

const FAQSection = () => {
    const t = useTranslations("Home");
    const faqKeys = Array.from(
        { length: Number(t("faq.questions.length")) },
        (_, i) => i + 1
    );

    return (
        <section className="w-full" id="FAQ">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                        {t("faq.title")}
                    </h2>
                    {/* <p class="mt-1 text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p> */}
                </div>

                <div className="mx-auto">
                    <div className="hs-accordion-group">
                        {faqKeys.map((index: number) => (
                            <div
                                key={index}
                                className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10"
                                id={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                            >
                                <button
                                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                                    aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                                >
                                    {t(`faq.questions.${index}.question`)}
                                    <svg
                                        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <svg
                                        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>
                                <div
                                    id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                                >
                                    <p
                                        className="text-gray-800 dark:text-neutral-200"
                                        dangerouslySetInnerHTML={{
                                            __html: t(
                                                `faq.questions.${index}.answer`
                                            ),
                                        }}
                                    >
                                        {/* {t(`faq.questions.${index}.answer`)} */}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
