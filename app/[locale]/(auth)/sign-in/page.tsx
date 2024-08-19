import { getServerAuthSession } from "@/auth";
import SignInForm from "@/components/LoginBox/LoginForm";
import { languages, siteConfig } from "@/config/site";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: any) {
    const t = await getTranslations("Home");
    return {
        title: "Flux AI Image SignIn - Free Image Generator | fluximage.org",
        description: t("layoutDescription"),
        icons: {
            icon: "/favicon.ico",
            // shortcut: "/logo.png",
            // apple: "/logo.png",
        },
        alternates: {
            canonical: `${siteConfig.url}${
                params.locale === "en" ? "" : `/${params.locale}`
            }/sign-in`,
            languages: {
                ...Object.fromEntries(
                    languages.map((item) => [item.hrefLang, `/${item.lang}`])
                ),
                "x-default": "/sign-in",
            },
        },
    };
}

export default async function SignInPage() {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/");
  }

  return (
    <>
      <div className="w-full px-6 py-8 md:px-8">
        <div className="flex flex-col space-y-2 text-center text-gray-800 dark:text-white">
          <h1 className="scroll-m-10 text-2xl font-semibold tracking-tight">
            {siteConfig.name} Login
          </h1>
          <p className="text-sm text-muted-foreground">
          {siteConfig.name}
          </p>
        </div>

        <SignInForm />

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <a
            href="/sign-up"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or sign up
          </a>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </>
  );
}
