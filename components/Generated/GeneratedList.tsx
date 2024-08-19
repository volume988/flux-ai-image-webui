/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { Download } from "lucide-react";

const GeneratedList = ({ generatedList }: any) => {
    const t = useTranslations("Generation");

    function onDownloadVideo(url: string) {
        fetch(url)
            .then((res) => res.blob())
            .then((blob) => {
                const a = document.createElement("a");
                document.body.appendChild(a);
                a.style.display = "none";
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = url.split("/").slice(-1)[0];
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            });
    }

    return (
        <section className="w-full">
            <div className="flex flex-col py-24">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                    {t("generatedTitle")}
                </h2>
                {!generatedList ||
                    (!generatedList.length && (
                        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                            <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                empty generated liveportrait
                            </p>
                            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                                <a
                                    className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    href="/generation"
                                >
                                    Go To Generate
                                </a>
                            </div>
                        </div>
                    ))}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {generatedList.length
                        ? generatedList.map((item: any, idx: number) => {
                              return (
                                  <div
                                      key={"generation_" + idx}
                                      className="group flex flex-col focus:outline-none"
                                  >
                                      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                                          <video
                                              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                                              controls
                                              src={item.generation}
                                          />
                                      </div>

                                      <div className="mt-7">
                                          <button
                                              type="button"
                                              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 active:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400 dark:active:text-blue-400"
                                              onClick={() =>
                                                  onDownloadVideo(
                                                      item.generation
                                                  )
                                              }
                                          >
                                              <Download
                                                  width={16}
                                                  height={16}
                                              />
                                              download
                                          </button>
                                      </div>
                                  </div>
                              );
                          })
                        : null}
                </div>
            </div>
        </section>
    );
};

export default GeneratedList;
