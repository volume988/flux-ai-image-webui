import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales, localePrefix } from "@/config/site";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
