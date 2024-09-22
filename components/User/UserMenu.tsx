/* eslint-disable @next/next/no-async-client-component */
"use client";
import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/button";
import { UserAvatar } from "./UserAvatar";
import { Icons } from "@/components/Icons";
import { signOut } from "next-auth/react";

export default function UserMenu({ user }: any) {
  if (!user) {
    return (
      <>
        <Link
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
        </Link>
      </>
    );
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>
          <UserAvatar user={user} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-popover-foreground shadow-md",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          )}
          sideOffset={4}
          align="end"
        >
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 leading-none">
              {user.name && <p className="font-medium">{user.name}</p>}
              {user.email && (
                <p className="w-[200px] truncate text-sm text-muted-foreground">
                  {user.email}
                </p>
              )}
            </div>
          </div>
          <DropdownMenu.Separator className="-mx-1 my-1 h-px bg-muted" />
          <DropdownMenu.Item
            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            asChild
          >
            <Link href="/profile" className="cursor-pointer">
              <Icons.user className="mr-2 h-4 w-4" aria-hidden="true" />
              Profile
            </Link>
          </DropdownMenu.Item>
          {/* <DropdownMenu.Item
            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            asChild
          >
            <Link href="/settings" className="cursor-pointer">
              <Icons.settings className="mr-2 h-4 w-4" aria-hidden="true" />
              Settings
            </Link>
          </DropdownMenu.Item> */}
          {/* <DropdownMenu.Separator className="-mx-1 my-1 h-px bg-muted" /> */}
          <DropdownMenu.Item
            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            asChild
          >
            <div className="cursor-pointer" onClick={() => signOut()}>
              <Icons.logout className="mr-2 h-4 w-4" aria-hidden="true" />
              <button className="bg-white">Sign Out</button>
            </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
