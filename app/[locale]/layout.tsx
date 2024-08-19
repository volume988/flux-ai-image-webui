// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerAuthSession } from "@/auth";
import Navbar from "@/components/Nav/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "@/styles/globals.css";
import { getUserInfo } from "@/models/user";
import { languages, siteConfig } from "@/config/site";
import PrelineScript from "@/components/PrelineScript";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils";
import GradientBg from "@/components/Gradients/GradientBg";
import { AppContextProvider } from "@/contexts/AppContext";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: any) {
    const t = await getTranslations("Home");

    return {
        title: "Flux AI Image Generator - Free Image Generator | fluximage.org",
        description: t("layoutDescription"),
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon.png",
            apple: "/favicon.png",
        },
        alternates: {
            canonical: `${siteConfig.url}${
                params.locale === "en" ? "" : `/${params.locale}`
            }/`,
            languages: {
                ...Object.fromEntries(
                    languages.map((item) => [item.hrefLang, `/${item.lang}`])
                ),
                "x-default": "/",
            },
        },
    };
}

const getSeverData = async (email: string) => {
    const userInfo = await getUserInfo(email);
    // console.info("userInfo:", userInfo);

    return {
        userInfo,
    };
};

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    let data: any = {};

    const session = await getServerAuthSession();
    if (session && session.user) {
        data = await getSeverData(session?.user?.email || "");
    }
    const user = session
        ? {
              ...session.user,
              ...data.userInfo,
          }
        : null;

    console.info(session);
    // const session = {
    //   user: null
    // };
    // const user = null

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className="dark" suppressHydrationWarning>
            {/* <Head> */}
            {/* </Head> */}
            <body className={cn(`dark:bg-neutral-800`, inter.className)}>
                <Script
                    src="/themeSwitcher.js"
                    strategy="beforeInteractive"
                ></Script>
                <Script src="/spaghetti.js"></Script>
                <NextIntlClientProvider messages={messages}>
                    <AppContextProvider user={user}>
                    {/* Gradients */}
                    <div className="relative overflow-x-hidden">
                        <GradientBg />
                        <Navbar user={user} />
                        {children}
                    </div>
                    </AppContextProvider>
                </NextIntlClientProvider>
                {process.env.NODE_ENV !== "development" ? (
                    <>
                        <GoogleAnalytics />
                    </>
                ) : (
                    <></>
                )}
                <PrelineScript />
                {/* <Script async src="https://platform.twitter.com/widgets.js" /> */}
            </body>
        </html>
    );
}
