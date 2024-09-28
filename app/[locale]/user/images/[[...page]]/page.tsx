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
import { getUserGeneratedList } from "@/services/handleImage";
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
     const session: any = await getServerAuthSession();
     const user = session?.user;
     const userInfo = await getUserInfo(user?.email || "");
     const userId = userInfo?.id;
     console.info("userId", userId);
     console.info("ExplorePage locale:", locale);
     const t = await getTranslations("Explore");
    const {
        generationList = [],
        pageNo,
        total,
        pageSize,
        count
    } = await getUserGeneratedList(userId,page[0]);

    // console.info("generationList:", generationList)

    return (
        <>
            {/* <main className="pt-4 relative z-50"> */}
            {/* Hero */}


            {!generationList.length ? (
                <EmptyGallery />
            ) : (
                <ImageGallery
                    generationList={generationList}
                    urlPrefix="/user/images"
                    pageNo={page[0]}
                    total={total}
                    pageSize={pageSize}
                />
            )}

            {/* <Gallery images={generationList} /> */}
            {/* <ImageGenerator user={session?.user} /> */}

            <FooterSection />
            <Toaster position="top-center" richColors />
            {/* </main> */}
        </>
    );
}
