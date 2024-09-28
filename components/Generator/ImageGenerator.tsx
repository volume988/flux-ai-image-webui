/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
"use client";

import {
    FC,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { Icons } from "@/components/Icons";
import { usePrediction } from "@/hooks/usePrediction";
import { Spinner } from "@/components/Spinner";
import LoginDialog from "@/components/LoginBox/LoginDialog";
import { cn, getMachineId, onDownload, outOfFree } from "@/lib/utils";
// import * as Select from "@radix-ui/react-select";
// import { useClipboard } from "@/hooks/useClipboard";
import { useTranslations } from "next-intl";
import Zoom, { Controlled as ControlledZoom } from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'
import GeneratedList from "@/components/Generated/GeneratedList";
import {
    CircleHelp,
    CircleX,
    FileVideo,
    Image,
    ImageIcon,
    List,
    Upload,
    Video,
    VideoIcon,
    X,
} from "lucide-react";
import ApplicationsOf from "@/components/Applications/ApplicationsOf";
import ImageToolbar from "@/components/Toolbars/ImageToolbar";

const ImageGenerator = ({ user, generated }: any) => {
    const leftElementRef = useRef<any>(null);
    const [elementHeight, setElementHeight] = useState(0);
    const [generating, setGenerating] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);
    const [textPrompts, setTextPrompts] = useState("");
    const [aspectRatio, setAspectRatio] = useState([
        { label: "1:1", ratio: "1:1", id: "ratio-1-1", checked: true },
        {
            label: "16:9",
            ratio: "16:9",
            id: "ratio-16-9",
            disable: true,
        },
        {
            label: "9:16",
            ratio: "9:16",
            id: "ratio-9-16",
            disable: true,
        },
        {
            label: "3:2",
            ratio: "3:2",
            id: "ratio-3-2",
            disable: true,
        },
        {
            label: "2:3",
            ratio: "2:3",
            id: "ratio-2-3",
            disable: true,
        },
    ]);
    const [model, setModel] = useState([
        { label: "flux.1 schnell", value: "schnell", selected: true },
        { label: "flux.1 dev", value: "dev" },
        { label: "flux.1 pro", value: "pro" },
    ]);
    const [isPublic, setIsPublic] = useState(true);
    const {
        error,
        prediction,
        generation,
        handleSubmit,
    }: any = usePrediction();
    const t = useTranslations("Generation");

    useLayoutEffect(() => {
        if (leftElementRef.current) {
            setElementHeight(leftElementRef.current.clientHeight);
        }
    }, []);

    // handle Generative
    const handleGenerative = async () => {
        // 用户登录检测
        if (!user) {
            // console.info("Run out of free", outOfFree());
            setOpenLogin(true);
            return false;
        }
        // 表单基础必填项检测
        if (!textPrompts) {
            toast.error("Please enter the prompt word!");
            return;
        }
        // 积分余额检测（服务端）

        setGenerating(true);
        try {
            // todo: -----
            await handleSubmit({
                prompts: textPrompts,
                ratio: aspectRatio.find((item) => item.checked)?.ratio,
                model: model.find((item) => item.selected)?.value,
                isPublic,
                user,
            });
            setGenerating(false);
        } catch (error: any) {
            setGenerating(false);
        }
    };

    const handleShare = async (
        social: string,
        href: string,
        imageUrl?: string
    ) => {
        // 用户登录检测
        if (!user) {
            // console.info("Run out of free", outOfFree());
            setOpenLogin(true);
            return false;
        }

        let url = "";
        switch (social) {
            case "x":
                url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    process.env.NEXTAUTH_URL || ""
                )}&text=Check%20this%20image%20generated%20with%20AI&hashtags=FluxImage%2CAI`;
                break;
            case "linkedin":
                url = `https://www.linkedin.com/sharing/share-offsite?url=${encodeURIComponent(
                    process.env.NEXTAUTH_URL || ""
                )}`;
                break;
            case "facebook":
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    process.env.NEXTAUTH_URL || ""
                )}&lang=en&quote=Check%20this%20image%20generated%20with%20AI&hashtag=#Flux,#Image Generator,#AI`;
                break;
            case "instagram":
                url = `https://www.instagram.com/share?url=${encodeURIComponent(
                    process.env.NEXTAUTH_URL || ""
                )}`;
                break;
            case "reddit":
                url = `https://www.reddit.com/submit?url=${encodeURIComponent(
                    process.env.NEXTAUTH_URL || ""
                )}&title=Check%20this%20image%20generated%20with%20AI`;
                break;
            case "pinterest":
                url = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
                    process.env.NEXTAUTH_URL || ""
                )}&media=${imageUrl}&description=Check%20this%20image%20generated%20with%20AI`;
                break;

            default:
                break;
        }

        window.open(url, "_blank");
    };

    const handleDownload = async (onDownloaded: any) => {
        // 用户登录检测
        if (!user) {
            // console.info("Run out of free", outOfFree());
            setOpenLogin(true);
            return false;
        }
        // window.open(generation.url, "_blank");
        onDownload(generation.url, onDownloaded)
        // onDownload(`fluximageai/generated/CQHex-1a.jpg`)
    };

    const handleMaximize = (shouldZoom: boolean) => {
        setIsZoomed(true);
    };
    // const [isZoomed, setIsZoomed] = useState(false);

    // const handleMaximize = useCallback((shouldZoom: any) => {
    //     setIsZoomed(shouldZoom);
    // }, []);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoomChange = useCallback((shouldZoom: any) => {
        setIsZoomed(shouldZoom);
    }, []);

    return (
        <>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                    <div
                        className="lg:col-span-7 space-y-4"
                        ref={leftElementRef}
                    >
                        {/* form section */}
                        <div className="space-y-2">
                            <label
                                htmlFor="prompts"
                                className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                            >
                                {t("formPromptsLabel")}
                            </label>

                            <textarea
                                id="prompts"
                                className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                rows={6}
                                placeholder={t("formPromptsPlaceholer")}
                                value={textPrompts}
                                onInput={(e: any) =>
                                    setTextPrompts(e.target.value)
                                }
                            ></textarea>
                        </div>

                        {/* form section */}
                        <div className="space-y-2">
                            <label
                                htmlFor="prompts"
                                className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                            >
                                {t("formRatioLabel")}
                            </label>

                            <div className="grid sm:grid-cols-5 gap-2">
                                {aspectRatio.map((item: any, idx: number) => (
                                    <div key={idx}>
                                        <label
                                            htmlFor={`hs-radio-in-form-${idx}`}
                                            className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                                        >
                                            <input
                                                type="radio"
                                                name={`hs-radio-in-form`}
                                                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                id={`hs-radio-in-form-${idx}`}
                                                checked={item.checked}
                                                disabled={item.disable}
                                                onChange={(e: any) => {
                                                    aspectRatio.map(
                                                        (r) =>
                                                            (r.checked = false)
                                                    );
                                                    item.checked =
                                                        e.target.checked;
                                                    setAspectRatio([
                                                        ...aspectRatio,
                                                    ]);
                                                }}
                                            />
                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                                                {item.label}
                                            </span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* form section */}
                        <div className="space-y-2">
                            <label
                                htmlFor="prompts"
                                className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                            >
                                {t("formModelsLabel")}
                            </label>

                            <div className="grid sm:grid-cols-5 gap-2">
                                <select
                                    className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    value={model.find((m) => m.selected)?.value}
                                    onChange={(e: any) => {
                                        const currentModel: any = model.find(
                                            (m) => m.value === e.target.value
                                        );
                                        model.map((r) => (r.selected = false));
                                        currentModel.selected = true;
                                        setModel([...model]);
                                    }}
                                >
                                    {model.map((item: any) => (
                                        <option
                                            key={item.value}
                                            value={item.value}
                                            disabled={item.disable}
                                            // selected={item.selected}
                                        >
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* form section */}
                        <div className="space-y-2">
                            <label
                                htmlFor="prompts"
                                className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                            >
                                {t("formPublicLabel")}
                            </label>

                            <div className="grid sm:grid-cols-5 gap-2">
                                <input
                                    type="checkbox"
                                    id="hs-basic-usage"
                                    className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200"
                                    checked={isPublic}
                                    onChange={(e: any) => {
                                        setIsPublic(e.target.checked);
                                    }}
                                />
                                <label
                                    htmlFor="hs-basic-usage"
                                    className="sr-only"
                                >
                                    switch
                                </label>
                            </div>
                        </div>

                        {/* Generate Button Start */}
                        <div className="grid mt-20">
                            <button
                                type="submit"
                                className="py-2.5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                disabled={generating}
                                onClick={handleGenerative}
                            >
                                {generating ? (
                                    <span
                                        className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                                        role="status"
                                        aria-label="loading"
                                    ></span>
                                ) : null}
                                Generate
                                <span className="py-1 px-4 flex items-center gap-x-1 text-xs font-medium text-gray-100 rounded-full">
                                    <Icons.CreditsIcon />1
                                </span>
                            </button>
                            {/* <p className="my-2 text-xs text-center leading-6 text-gray-600 dark:text-neutral-400">
                                Each liveportrait animation video takes about 1
                                minute to generate
                            </p> */}
                        </div>
                        {/* Generate Button End */}
                    </div>
                    <div
                        className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5"
                        style={{ maxHeight: elementHeight + "px" }}
                    >
                        <div className="space-y-2 flex flex-col h-full overflow-hidden">
                            <label
                                htmlFor="prompts"
                                className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                            >
                                {t("formResultLabel")}
                            </label>

                            <div className="group relative flex flex-col w-full min-h-60 flex-1 border border-dashed border-gray-300 bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 bg-center rounded-xl items-center justify-center focus:outline-none transition overflow-hidden">
                                {!generation ? (
                                    <ImageIcon className="w-6 h-6 text-gray-300" />
                                ) : (
                                    <>
                                        <ControlledZoom
                                            isZoomed={isZoomed}
                                            onZoomChange={handleZoomChange}
                                        >
                                            <img
                                                src={generation.url}
                                                // className="object-contain h-48 w-96"
                                                className="object-contain"
                                                // width="1024"
                                                // height="1024"
                                                // width={elementHeight + "px"}
                                                height={elementHeight + "px"}
                                                onLoad={() =>
                                                    setImageLoading(false)
                                                }
                                            />
                                        </ControlledZoom>
                                        {/* Button Grouop */}
                                        <div className="absolute bottom-4 end-4">
                                            <div className="gen-image-toolbars flex">
                                                <ImageToolbar
                                                    // isZoomed={isZoomed}
                                                    imgUrl={generation.url}
                                                    handleDownload={
                                                        handleDownload
                                                    }
                                                    handleShare={handleShare}
                                                    handleMaximize={
                                                        handleMaximize
                                                    }
                                                    disabledDownload={false}
                                                    disabledShare={true}
                                                />
                                            </div>
                                            {/* or share by link */}
                                            {/* <div className="flex items-center gap-3">
                                                <div className="shrink-0 h-[1px] w-10 bg-gray-200 dark:bg-neutral-600"></div>
                                                <div className="py-3 flex items-center text-xs text-gray-400 uppercase dark:text-neutral-500">
                                                    Or share by link
                                                </div>
                                                <div className="shrink-0 h-[1px] w-10 bg-gray-200 dark:bg-neutral-600"></div>
                                            </div> */}
                                        </div>
                                    </>
                                )}
                                {/* <img src="https://images.unsplash.com/photo-1680193895115-b51b4ed5392f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" className="object-contain h-48 w-96" alt="" /> */}
                                {/* <img
                                    src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                                    className="object-contain h-48 w-96"
                                    alt=""
                                    onLoad={() => setImageLoading(false)}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Applications of */}
                <ApplicationsOf />
            </div>

            <LoginDialog open={openLogin} setOpen={setOpenLogin}>
                <div></div>
            </LoginDialog>
        </>
    );
};

export default ImageGenerator;
