import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales } from "@/config/site";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  localePrefix: localePrefix,
  // pathnames: pathnames,
  // Used when no locale matches
  defaultLocale: defaultLocale,
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    // "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    // '/(de|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    // "/((?!_next|_vercel|.*\\..*).*)",

    "/((?!api|_next|.*\\..*).*)",
  ],
};
