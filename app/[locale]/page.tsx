// import { getServerAuthSession } from "@/auth";
import CTASection from "@/components/CTA/CTASection";
import FAQSection from "@/components/FAQ/FAQSection";
import FeatureSection from "@/components/Feature/FeatureSection";
import FooterSection from "@/components/Footer/FooterSection";
import HeroSection from "@/components/Hero/heroSection";
import HowItWorks from "@/components/How/HowItWorks";
import { Toaster } from "sonner";
import { getTranslations } from "next-intl/server";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";

import TechnologySection from "@/components/Technology/TechnologySection";
import CarouselSection from "@/components/Carousel/CarouselSection";
import { languages, siteConfig } from "@/config/site";
import { getHomeGallery } from "@/services/handleImage";
import to from "await-to-js";

export async function generateMetadata({ params }: any) {
    const t = await getTranslations("Home");

    return {
        title: t("layoutTitle"),
        description: t("layoutDescription"),
        keywords: 'flux ai, imagen, text to an image,text to the image,best text to image online,text to images,convert text to image,flux image generator,image generator online,ai image generator from text,ai image generator,realistic ai image generator, anime image generator',
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon.png",
            apple: "/favicon.png",
        },
        alternates: {
            canonical: `${siteConfig.url}${
                params.locale === "en" ? "" : `/${params.locale}`
            }`,
            languages: {
                ...Object.fromEntries(
                    languages.map((item) => [item.hrefLang, `/${item.lang}`])
                ),
                "x-default": "/",
            },
        },
    };
}

export default async function Home() {
    // const session: any = await getServerAuthSession();
    // const t = await getTranslations('Home');
    const [err, res] = await to(
        getHomeGallery([
            "cm13lahlk0001m55yw1byr0ej",
            "cm13jk081000111bdmzdied6a",
            "cm13j0vyd00014l00wvhf3948",
            // "clzsta5kg00033pc543hpvr0h",
            // "clzst8hh100023pc56ev2s2gm",
            "cm13fiu4w0001qcvze6428ffz",

            // "clzuozryv000014lcj7o0ggty",
            // "clzu34g4x0000uuf38k5260td",
            // "clztj3148000fjjlswmc6q7wj",
            // "clztj1wcr000ejjlslsqogjrf",
            // "clztj0onn000djjlsey8f3e1f",
            // "clztis2wr0000dos009045eim",
            // "clztil6va000cjjlsvr5dg0hr",
            // "clzti8va1000ajjls5zx6yc3a",
            // "clzti7f740009jjlshu4fn82w",
            // "clzti44970008jjlsjcmrcai3",
            // "clzti1sx40007jjls06mlv6k0",
        ])
    );

    if (err) {
        console.error(err)
    }


    const gallery = res?.generationList || []

    // console.info("gallery:", gallery);

    return (
        <main className="pt-4 relative z-50">
            <HeroSection />
            <FeatureSection />
            <HowItWorks />
            <CarouselSection gallery={gallery} />
            <TestimonialsSection />
            <TechnologySection />
            <CTASection />
            <FAQSection />
            <FooterSection />
            <Toaster position="top-center" richColors />
        </main>
    );
}
