/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { profileNavigation } from "@/lib/navigation";
import Brand from "@/components/Brand/Logo";
import UserMenu from "@/components/User/UserMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { signOut } from "next-auth/react";
import UserDropdown from "./UserDropdown";
import SignButtonGroup from "@/components/Nav/SignButtonGroup";
import MobileListButton from "@/components/Nav/MobileListButton";
import DarkModeToggle from "@/components/Nav/DarkModeToggle";
import LocaleSwitcher from "@/components/Nav/LocaleSwitcher";
import Github from "@/components/Nav/Github";

const CloseIcon = (
  <svg
    className="hs-collapse-open:block hidden flex-shrink-0 size-4"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

const OpenListIcon = (
  <svg
    className="hs-collapse-open:hidden flex-shrink-0 size-4"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" x2="21" y1="6" y2="6" />
    <line x1="3" x2="21" y1="12" y2="12" />
    <line x1="3" x2="21" y1="18" y2="18" />
  </svg>
);

export default function Navbar({ user = null }: { user: any }) {
  const [state, setState] = useState(false);
  const pathname = usePathname();
  // todo  check login
  console.log('path',pathname);
  if (pathname === "/sign-up" || pathname === "/sign-in") return null;
  return (
    <>
      <div
                  id="navbar-collapse-with-animation"
                  className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:order-2 md:basis-auto"
                >
                  <div className="flex flex-col gap-y-4 gap-x-0 mt-5 mb-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                    {profileNavigation.map((item, idx) => {
                      return (
                        <div key={idx}>
                          <a
                            className={cn(
                              "inline-block text-black dark:text-white",
                              pathname === item.href
                                ? "relative before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-blue-400"
                                : "hover:text-gray-600 dark:hover:text-neutral-300"
                            )}
                            href={item.href}
                            title={item.title}
                          >
                            {item.title}
                          </a>
                        </div>
                      );
                    })}

                    {/* For Mobile Sign Button Group */}
                    {!user ? (
                      <div className="flex items-center gap-x-2 md:hidden">
                        <LocaleSwitcher />
                        <SignButtonGroup />
                      </div>
                    ) : (
                      <div className="flex items-center gap-x-2 md:hidden">
                        <LocaleSwitcher />
                      </div>
                    )}
                  </div>
                </div>
    </>
  );
}
