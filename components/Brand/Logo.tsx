/* eslint-disable @next/next/no-img-element */
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/Icons";

export default function Brand() {
  return (
    <a
      className="flex items-center rounded-xl text-xl font-semibold focus:outline-none focus:opacity-80"
      href="/"
      title={siteConfig.name}
    >
      <Icons.Logo />
      <span className="font-semibold text-xl whitespace-nowrap dark:text-slate-100">
        {siteConfig.name}
      </span>
    </a>
  );
}
