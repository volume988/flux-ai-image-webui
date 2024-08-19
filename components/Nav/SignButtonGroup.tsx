/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import LocaleSwitcher from "@/components/Nav/LocaleSwitcher";

export default function SignButtonGroup() {
  return (
    <>
      {/* <LocaleSwitcher /> */}
      {/* <Link
        href="/sign-in"
        className="py-2 px-3 block items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
      >
        Sign in
      </Link>
      <Link
        href="/sign-up"
        className="py-2 px-3 block items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-blue-400 text-black hover:bg-blue-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-blue-500"
      >
        Sign up
      </Link> */}
      <Link
        href="/sign-in"
        className="py-2 px-3 block items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-blue-400 text-black hover:bg-blue-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-blue-500"
      >
        Sign in
      </Link>
    </>
  );
}
