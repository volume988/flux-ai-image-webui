/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
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

  if (pathname === "/sign-up" || pathname === "/sign-in") return null;

  return (
    <>
      {/* HEADER */}
      <header className="sticky flex flex-wrap md:justify-start md:flex-nowrap z-[52] w-full py-7">
        <nav
          className="relative max-w-7xl w-full flex flex-wrap justify-between basis-full items-center px-4 md:px-8 mx-auto"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="">
            <Brand />
          </div>
          {/* End Logo */}

          {/* Button Group */}
          <div className="hidden md:flex items-center gap-x-4 ms-auto py-1 md:ps-6 md:order-3">
            {/* Dark Mode Toggle */}
            <DarkModeToggle />
            {/* End Dark Mode Toggle */}
            {!user ? (
              <div className="flex items-center gap-x-3">
                <LocaleSwitcher />
                {/* For PC Sign Button Group */}
                <SignButtonGroup />
              </div>
            ) : (
              <>
                <LocaleSwitcher />
                <UserDropdown user={user} />
              </>
            )}
          </div>
          {/* End Button Group */}

          {/* Mobile Button */}
          <div className="md:hidden flex gap-x-4">
            {/* Dark Mode Toggle For Mobile */}
            <DarkModeToggle />
            {/* End Dark Mode Toggle For Mobile */}
            <UserDropdown user={user} />
            <MobileListButton />
          </div>
          {/* End Mobile Button */}

          {/* Menu */}
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:order-2 md:basis-auto"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
              {navigation.map((item, idx) => {
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
          {/* End Menu */}
        </nav>
      </header>
    </>
  );
}
