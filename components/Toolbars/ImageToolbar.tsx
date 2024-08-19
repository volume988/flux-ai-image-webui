/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Download, Maximize, Share, Share2, ShareIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import { Icons } from "../Icons";

const ImageToolbar = ({
    imgUrl,
    handleDownload,
    handleShare,
    handleMaximize,
    disabledDownload,
    disabledShare,
}: any) => {
    const [downLoading, setDownLoading] = useState(false);
    // const [isZoomed, setIsZoomed] = useState(false);

    const handleDownloading = () => {
        setDownLoading(true);
        handleDownload(() => {
            setDownLoading(false);
        });
    };

    return (
        <>
            {/* Download Button */}
            {!disabledDownload ? <div className="flex items-center gap-x-1 py-1 px-2">
                <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    onClick={handleDownloading}
                >
                    {downLoading ? (
                        <span
                            className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                            role="status"
                            aria-label="loading"
                        ></span>
                    ) : (
                        <Download className="shrink-0 size-4" />
                    )}
                </button>
            </div>: null}

            {/* Share Button */}
            {!disabledShare ? <div className="flex items-center gap-x-1 py-1 px-2">
                <div className="hs-tooltip [--trigger:click] [--placement:bottom] inline-block">
                    <div
                        className="hs-tooltip-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        // onClick={handleShare}
                    >
                        <Share2 className="shrink-0 size-4" />

                        <div
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-lg shadow-md dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                            role="tooltip"
                        >
                            <div className=" inline-flex rounded-lg shadow-sm ">
                                <button
                                    type="button"
                                    className="twitter py-3 px-4 first:rounded-s-lg first:ms-0 last:rounded-e-lg  border border-gray-200 shadow-sm focus:outline-none focus:bg-gray-50 disabled:opacity-50  dark:border-neutral-700 dark:focus:bg-neutral-800"
                                    onClick={() => handleShare("x")}
                                >
                                    <Icons.ShareXIcon />
                                </button>
                                <button
                                    type="button"
                                    className="linkedin py-3 px-4 first:rounded-s-lg first:ms-0 last:rounded-e-lg  border border-gray-200 shadow-sm focus:outline-none focus:bg-gray-50 disabled:opacity-50  dark:border-neutral-700 dark:focus:bg-neutral-800"
                                    onClick={() => handleShare("linkedin")}
                                >
                                    <Icons.ShareLinkedinIcon />
                                </button>
                                <button
                                    type="button"
                                    className="facebook py-3 px-4 first:rounded-s-lg first:ms-0 last:rounded-e-lg  border border-gray-200 shadow-sm focus:outline-none focus:bg-gray-50 disabled:opacity-50  dark:border-neutral-700 dark:focus:bg-neutral-800"
                                    onClick={() => handleShare("facebook")}
                                >
                                    <Icons.ShareFacebookIcon />
                                </button>
                                <button
                                    type="button"
                                    className="instagram py-3 px-4 first:rounded-s-lg first:ms-0 last:rounded-e-lg  border border-gray-200 shadow-sm focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:focus:bg-neutral-800"
                                    onClick={() => handleShare("instagram")}
                                >
                                    <Icons.ShareInstagramIcon />
                                </button>
                                <button
                                    type="button"
                                    className="reddit py-3 px-4 first:rounded-s-lg first:ms-0 last:rounded-e-lg  border border-gray-200 shadow-sm focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:focus:bg-neutral-800"
                                    onClick={() => handleShare("reddit")}
                                >
                                    <Icons.ShareRedditIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null}

            {/* Maximize Button */}
            <div className="flex items-center gap-x-1 py-1 px-2">
                <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    onClick={handleMaximize}
                >
                    <Maximize className="shrink-0 size-4" />
                </button>
            </div>
        </>
    );
};

export default ImageToolbar;
