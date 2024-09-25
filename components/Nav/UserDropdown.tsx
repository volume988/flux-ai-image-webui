/* eslint-disable @next/next/no-img-element */
import { siteConfig } from "@/config/site";
import { signOut } from "next-auth/react";

export default function UserDropdown({ user }: any) {
  if (!user) return null;

  return (
    <div
      className="hs-dropdown relative inline-flex"
      data-hs-dropdown-placement="bottom-right"
    >
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="hs-dropdown-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
      >
        {user.image ? (
          <img
            className="inline-block size-[38px] rounded-lg ring-2 ring-white dark:ring-neutral-900"
            src={user.image}
            alt={user.name + " image | " + siteConfig.name}
          />
        ) : (
          <span className="inline-block size-8 bg-gray-100 rounded-full overflow-hidden">
            <svg
              className="size-full text-gray-300"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.62854"
                y="0.359985"
                width="15"
                height="15"
                rx="7.5"
                fill="white"
              ></rect>
              <path
                d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z"
                fill="currentColor"
              ></path>
              <path
                d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        )}
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 z-10 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
        aria-labelledby="hs-dropdown-with-header"
      >
        <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-neutral-700">
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            {user.name || "user"}
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-neutral-300 mt-1">
            {user.email}
          </p>
                <div className="flex mt-4">
                  <span className="py-1 px-1.5 flex items-center gap-x-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-500/10 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"></path>
                    </svg>
                    credits: {user?.credits || 0}
                  </span>
                </div>
        </div>
        <div className="mt-2 py-2 first:pt-0 last:pb-0">
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
            href="/user"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 size-4"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Profile
          </a>
          <div
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 cursor-pointer"
            onClick={() => signOut()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 size-4"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
}
