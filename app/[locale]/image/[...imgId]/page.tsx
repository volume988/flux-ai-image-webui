/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import UploadSection from "@/components/Upload/UploadSection";
import { getServerAuthSession } from "@/auth";
// import { Upload } from "lucide-react";
import { Toaster } from "sonner";
import { getUserInfo } from "@/models/user";
import { queryGenerationByUser } from "@/models/generation";
import FooterSection from "@/components/Footer/FooterSection";
import { getTranslations } from "next-intl/server";
import ImageGenerator from "@/components/Generator/ImageGenerator";
import { languages, siteConfig } from "@/config/site";
import TestimonialsExploreSection from "@/components/Testimonials/TestimonialsExploreSection";
import { Gallery } from "react-grid-gallery";
import { getGenerationItem, getGenerationList } from "@/services/handleImage";
import ImageGallery from "@/components/Generator/ImageGallery";
import EmptyGallery from "@/components/Generator/EmptyGallery";
import ImageToolbar from "@/components/Toolbars/ImageToolbar";
import ImageDetails from "@/components/Details/ImageDetails";
import { useContext } from "react";
import to from "await-to-js";
import { ChevronRight } from "lucide-react";

export async function generateMetadata({ params: { locale, imgId = [""] } }: {params: { locale: string; imgId: string[] }}) {
    const t = await getTranslations("Details");

    let model = "schnell"
    let prompts = "..."

    const [generationErr, generation] = await to(getGenerationItem(imgId[0]));

    if (!generationErr) {
        model = generation.model;
        prompts = generation.prompt;
    }
    //   const layoutTitle = t.markup('layoutTitle', {
    //     modelName: (chunks) => `<span className="text-blue-600">Flux.1 Pro</span>`
    //   });
    //   console.info("layoutTitle", layoutTitle)
    return {
        title: t("layoutTitle", { modelName: `flux.1 ${model}` }),
        description: t("layoutDescription", {
            modelName: `flux.1 ${model}`,
            prompts: prompts.slice(0, 9) + "...",
        }),
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon.png",
            apple: "/favicon.png",
        },
        alternates: {
            canonical: `${siteConfig.url}${
                locale === "en" ? "" : `/${locale}`
            }${`/image/${imgId[0]}`}`,
            languages: {
                ...Object.fromEntries(
                    languages.map((item) => [item.hrefLang, `/${item.lang}`])
                ),
                "x-default": `/image/${imgId[0]}`,
            },
        },
    };
}

export default async function ImageDetailsPage({
    params: { locale, imgId = [""] },
}: {
    params: { locale: string; imgId: string[] };
}) {
    console.info("ImageDetailsPage locale:", locale);
    const t = await getTranslations("Details");

    const [generationErr, generation] = await to(getGenerationItem(imgId[0]));

    if (generationErr) {
        return <EmptyGallery />;
    }

    const pageTitle = t.markup("pageTitle", {
        modelName: () => `<span class="text-blue-600">Flux.1 ${generation.model}</span>`,
    });

    console.info("generationErr:", generationErr);
    console.info("generation:", generation);

    return (
        <>
            {/* <main className="pt-4 relative z-50"> */}
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-16">
                <ol className="flex items-center whitespace-nowrap">
                    <li className="inline-flex items-center">
                        <a
                            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                            href="/"
                            title="Flux Image AI Generator"
                        >
                            Home
                        </a>
                        <ChevronRight className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600" />
                    </li>
                    <li className="inline-flex items-center">
                        <a
                            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                            href="/explore"
                            title="Explore Flux Image"
                        >
                            Explore
                            <ChevronRight className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600" />
                        </a>
                    </li>
                    <li
                        className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
                        aria-current="page"
                        title=""
                    >
                        Application
                    </li>
                </ol>
                <div className="mx-auto mt-10">
                    {/* max-w-2xl */}
                    {/* <div className="mt-5 ">
                        <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                            {t("pageTitle")}
                        </h1>
                    </div> */}
                    {/* Hero */}
                    <div className="max-w-2xl">
                        <h1
                            className="text-2xl font-bold md:text-3xl dark:text-white"
                            dangerouslySetInnerHTML={{ __html: pageTitle }}
                        ></h1>
                    </div>

                    {/*  max-w-3xl */}
                    {/* <div className="mt-5 max-w-5xl mx-auto">
                        <p className="text-lg text-gray-600 dark:text-neutral-400">
                            {t("pageDescription")}
                        </p>
                    </div> */}

                    <ImageDetails generation={generation} />
                </div>
            </div>

            <FooterSection />
            <Toaster position="top-center" richColors />
            {/* </main> */}
        </>
    );
}
