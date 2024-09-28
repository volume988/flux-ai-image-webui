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
import { getGenerationList } from "@/services/handleImage";
import ImageGallery from "@/components/Generator/ImageGallery";
import EmptyGallery from "@/components/Generator/EmptyGallery";
import { uploadFile, getFileStream } from "@/lib/s3";

export async function generateMetadata({ params }: any) {
    const t = await getTranslations("Explore");
    return {
        title: t("layoutTitle"),
        description: t("layoutDescription"),
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon.png",
            apple: "/favicon.png",
        },
        alternates: {
            canonical: `${siteConfig.url}${
                params.locale === "en" ? "" : `/${params.locale}`
            }${
                !params.page || params.page[0] === 1
                    ? `/explore`
                    : `/explore/${params.page[0]}`
            }`,
            languages: {
                ...Object.fromEntries(
                    languages.map((item) => [item.hrefLang, `/${item.lang}`])
                ),
                "x-default": `${
                    !params.page || params.page[0] === 1
                        ? `/explore`
                        : "/explore/" + params.page[0]
                }`,
            },
        },
    };
}

export default async function ExplorePage({
    params: { locale, page = [1] },
}: {
    params: { locale: string; page: number[] };
}) {
    // const session: any = await getServerAuthSession();
    // const user = session?.user;
    // const userInfo = await getUserInfo(user?.email || "");
    // const userId = userInfo?.id;
    // console.info("userId", userId);

    console.info("ExplorePage locale:", locale);
    const t = await getTranslations("Explore");

    const {
        generationList = [],
        pageNo,
        total,
        pageSize,
    } = await getGenerationList(page[0]);

    // console.info("generationList:", generationList)

    return (
        <>
            {/* <main className="pt-4 relative z-50"> */}
            {/* Hero */}
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-16">
                {/* max-w-2xl */}
                <div className="text-center mx-auto">
                    {/* max-w-2xl */}
                    <div className="mt-5 ">
                        <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                            {t("pageTitle")}
                        </h1>
                    </div>

                    {/*  max-w-3xl */}
                    <div className="mt-5 max-w-5xl mx-auto">
                        <p className="text-lg text-gray-600 dark:text-neutral-400">
                            {t("pageDescription")}
                        </p>
                    </div>
                </div>
            </div>

            {!generationList.length ? (
                <EmptyGallery />
            ) : (
                <ImageGallery
                    generationList={generationList}
                    urlPrefix="/explore"
                    pageNo={page[0]}
                    total={total}
                    pageSize={pageSize}
                />
            )}

            {/* <Gallery images={generationList} /> */}
            {/* <ImageGenerator user={session?.user} /> */}
            <TestimonialsExploreSection />

            <FooterSection />
            <Toaster position="top-center" richColors />
            {/* </main> */}
        </>
    );
}
