/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
"use client";

import {
    FC,
    useCallback,
    useContext,
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
import { handleUpdatePublic } from "@/services/handleClient";

import {
    cn,
    getMachineId,
    onDownload,
    onDownloadR2,
    outOfFree,
} from "@/lib/utils";
// import * as Select from "@radix-ui/react-select";
// import { useClipboard } from "@/hooks/useClipboard";
import { useTranslations } from "next-intl";
import Zoom, { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import GeneratedList from "@/components/Generated/GeneratedList";
import {
    CircleHelp,
    CirclePlay,
    CircleX,
    Download,
    FileVideo,
    Image,
    ImageIcon,
    List,
    Play,
    Share2,
    Upload,
    Video,
    VideoIcon,
    X,
    Copy,
    CopyIcon,
} from "lucide-react";
import ApplicationsOf from "@/components/Applications/ApplicationsOf";
import ImageToolbar from "@/components/Toolbars/ImageToolbar";
import { AppContext } from "@/contexts/AppContext";
import { siteConfig } from "@/config/site";
import * as copy from "copy-to-clipboard";
import { usePathname } from "next/navigation";

const ImageDetails = ({ generation }: any) => {
    const leftElementRef = useRef<any>(null);
    const [downLoading, setDownLoading] = useState(false);
    const [elementHeight, setElementHeight] = useState(0);
    const [generating, setGenerating] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);
    const [textPrompts, setTextPrompts] = useState("");
    const [aspectRatio, setAspectRatio] = useState([
        { label: "1:1", ratio: "1:1", id: "ratio-1-1", checked: true },
    ]);
    const [model, setModel] = useState([
        { label: "flux.1 schnell", value: "schnell", selected: true },
    ]);
    const [isPublic, setIsPublic] = useState(generation.isPublic);
    const pathname = usePathname();
    const { user } = useContext(AppContext);
    
    const t = useTranslations("Generation");
    const owner = user!==null && user.id == generation.userId;
    useLayoutEffect(() => {
        if (leftElementRef.current) {
            setElementHeight(leftElementRef.current.clientHeight);
        }
    }, []);

    const handleDownload = async (onDownloaded: any) => {
        // 用户登录检测
        if (!user) {
            // console.info("Run out of free", outOfFree());
            setOpenLogin(true);
            return false;
        }
        setDownLoading(true);
        // window.open(generation.url, "_blank");
        //onDownloadR2(
        //    generation.url.replace(/https:\/\/[^\/]+(\/)*/, ""),
        //    () => {
                setDownLoading(false);
        //    }
        //);
        onDownload(generation.url, onDownloaded);
        setDownLoading(false);
        //onDownload(`fluximageai/generated/CQHex-1a.jpg`)
    };

    const updatePublic = async (value: boolean) => {
        console.log('public', value);
        console.log('generation id', generation.id);
        try {
            await handleUpdatePublic(generation.id, value);
            setIsPublic(value);
        } catch (error: any) {
        }
    };

    const handleMaximize = (shouldZoom: boolean) => {
        setIsZoomed(true);
    };

    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoomChange = useCallback((shouldZoom: any) => {
        setIsZoomed(shouldZoom);
    }, []);

    async function onCopy(text: string) {
        // @ts-ignore
        copy();
        toast.success("Copied!");
    }
    const [enabled, setEnabled] = useState(false)

    return (
        <>
            <div className="md:grid md:grid-cols-2 md:gap-12 xl:gap-16 mt-12">
                {/* Left Col */}
                <div
                    className="group relative flex flex-col w-full min-h-96 flex-1 bg-gray-100 dark:bg-neutral-900  rounded-xl items-center justify-center overflow-hidden"
                    style={{ height: elementHeight + "px" }}
                >
                    {/* {!generation ? (
                                    <ImageIcon className="w-6 h-6 text-gray-300" />
                                ) : ( */}
                    <>
                        <ControlledZoom
                            isZoomed={isZoomed}
                            onZoomChange={handleZoomChange}
                        >
                            <img
                                src={generation.url}
                                // src="https://images.unsplash.com/photo-1680193895115-b51b4ed5392f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                                // className="object-contain h-48 w-96"
                                className="object-contain object-center "
                                // width={elementHeight + "px"}
                                // height={elementHeight + "px"}
                                style={{
                                    maxWidth: "none",
                                    height: elementHeight + "px",
                                }}
                                onLoad={() => setImageLoading(false)}
                            />
                        </ControlledZoom>
                        {/* Button Grouop */}
                        <div className="absolute bottom-4 end-4">
                            <div className="gen-image-toolbars flex">
                                <ImageToolbar
                                    // imgUrl={generation.url}
                                    imgUrl="https://images.unsplash.com/photo-1680193895115-b51b4ed5392f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                                    handleDownload={handleDownload}
                                    handleMaximize={handleMaximize}
                                    disabledDownload={false}
                                    disabledShare={true}
                                />
                            </div>
                        </div>
                    </>
                    {/* )} */}
                </div>

                {/* End Left Col */}

                {/* Right Col */}
                <div className="relative">
                    {/* Right Card */}
                    <div
                        className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 space-y-4 sm:space-y-6 dark:border-neutral-700"
                        ref={leftElementRef}
                    >
                        <div className="space-y-2 relative">
                            <h2 className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                Text Prompt
                            </h2>
                            <button
                                className="p-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 absolute -top-2 right-0"
                                onClick={() => onCopy(generation.prompt)}
                            >
                                <Copy className="shrink-0 size-4" />
                            </button>

                            <textarea
                                id="text-prompt"
                                className="py-2 px-3 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                rows={6}
                                value={generation.prompt}
                                readOnly
                            ></textarea>
                        </div>

                        <div className="space-y-2">
                            <h2 className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                Model
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-neutral-400 dark:placeholder-neutral-500">
                                Flux.1 {generation.model}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                Image Size
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-neutral-400 dark:placeholder-neutral-500">
                                {generation.width} x {generation.height}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                Aspect Ratio
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-neutral-400 dark:placeholder-neutral-500">
                                {generation.aspect_ratio}
                            </p>
                        </div>
                        { owner ?(<div className="space-y-2">
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
                                          updatePublic(e.target.checked);
                                      }}
                                  />
                                  <label
                                      htmlFor="hs-basic-usage"
                                      className="sr-only"
                                  >
                                      switch
                                  </label>
                              </div>
                          </div>):(<></> )}


                        {/* Button Group */}
                        <div className="space-y-4">
                            <a
                                href="/image-generator"
                                className="block w-full"
                            >
                                <button
                                    type="button"
                                    className="py-4 px-4 w-full flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    <Play className="shrink-0 size-4" />
                                    Run Model
                                </button>
                            </a>
                        </div>

                    </div>
                    {/* End Right Card */}
                </div>
                {/* End Right Col */}
            </div>
            <LoginDialog open={openLogin} setOpen={setOpenLogin}>
                <div></div>
            </LoginDialog>
        </>
    );
};

export default ImageDetails;
