import { getPageNumbers } from "@/lib/getPagination";
import { cn } from "@/lib/utils";

const Pagination = ({ urlPrefix, page, pageSize, total }: any) => {
    const currentPage = Number(page);
    const pages = getPageNumbers({ currentPage, total });

    function getPrev() {
        if (currentPage == 1) {
            return "";
        } else if (currentPage == 2) {
            return urlPrefix;
        } else {
            return `${urlPrefix}/${currentPage - 1}`;
        }
    }

    function getNext() {
        if (currentPage === total) {
            return "";
        } else {
            return `${urlPrefix}/${currentPage + 1}`;
        }
    }

    return (
        <nav className="flex items-center gap-x-1" aria-label="Pagination">
            <a
                href={getPrev()}
                className={currentPage == 1 ? "pointer-events-none" : ""}
                // aria-disabled={currentPage <= 1}
                // disabled={currentPage <= 1}
            >
                <button
                    type="button"
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    aria-label="Previous"
                    disabled={currentPage === 1}
                >
                    <svg
                        className="shrink-0 size-3.5"
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
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>
            </a>
            <div className="flex items-center gap-x-1">
                {pages.map((item: any, idx) => {
                    if (item == "...") {
                        return (
                            <div
                                className="hs-tooltip inline-block"
                                key={`pagination_${idx}`}
                            >
                                {/* <a href="#"> */}
                                <button
                                    type="button"
                                    className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
                                >
                                    <span className="group-hover:hidden text-xs">
                                        •••
                                    </span>
                                    {/* <svg
                                            className="group-hover:block hidden shrink-0 size-5"
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
                                            <path d="m6 17 5-5-5-5"></path>
                                            <path d="m13 17 5-5-5-5"></path>
                                        </svg>
                                        <span
                                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                                            role="tooltip"
                                        >
                                            Next 4 pages
                                        </span> */}
                                </button>
                                {/* </a> */}
                            </div>
                        );
                    } else {
                        // console.info(
                        //     "currentPage === item",
                        //     currentPage === item,
                        //     currentPage,
                        //     item
                        // );
                        return (
                            <a
                                key={`pagination_${idx}`}
                                className={
                                    currentPage == item
                                        ? "pointer-events-none"
                                        : ""
                                }
                                href={
                                    currentPage === item
                                        ? ""
                                        : `${
                                              item === 1
                                                  ? `${urlPrefix}`
                                                  : `${urlPrefix}/${item}`
                                          }`
                                }
                            >
                                <button
                                    type="button"
                                    className={cn(
                                        "min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
                                        currentPage === item
                                            ? "bg-gray-200 text-gray-800 focus:bg-gray-300 dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500"
                                            : "text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                                        // "hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
                                    )}
                                    // aria-current="page"
                                >
                                    {item}
                                </button>
                            </a>
                        );
                    }
                })}
            </div>
            <a
                href={getNext()}
                className={currentPage == total ? "pointer-events-none" : ""}
            >
                <button
                    type="button"
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    aria-label="Next"
                    disabled={currentPage === total}
                >
                    <span className="sr-only">Next</span>
                    <svg
                        className="shrink-0 size-3.5"
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
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </button>
            </a>
        </nav>
    );
};

export default Pagination;
