import { getServerAuthSession } from "@/auth";
import SignUpForm from "@/components/LoginBox/SignupForm";
import { languages, siteConfig } from "@/config/site";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: any) {
    const t = await getTranslations("Playground");
    return {
        title: "Flux AI Image SignUp - Free Image Generator | fluximage.org",
        description: t("layoutDescription"),
        icons: {
            icon: "/favicon.ico",
            // shortcut: "/logo.png",
            // apple: "/logo.png",
        },
        alternates: {
            canonical: `${siteConfig.url}${
                params.locale === "en" ? "" : `/${params.locale}`
            }/sign-up`,
            languages: {
                ...Object.fromEntries(
                    languages.map((item) => [item.hrefLang, `/${item.lang}`])
                ),
                "x-default": "/sign-up",
            },
        },
    };
}

export default async function SignUpPage() {
    const session = await getServerAuthSession();
    if (session) {
        redirect("/");
    }

    return (
        <>
            <div className="w-full px-6 py-8 md:px-8">
                <div className="flex flex-col space-y-2 text-center text-gray-800 dark:text-white">
                    <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        {siteConfig.name} Singup
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {siteConfig.name}
                    </p>
                </div>
                <SignUpForm />

                <div className="relative flex justify-center text-xs uppercase mt-4">
                    <span className="px-2 text-muted-foreground">
                        Already have an account?
                    </span>
                    <a href="/sign-in">Sign in</a>
                </div>
            </div>
        </>
    );
}
