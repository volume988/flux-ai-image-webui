import { getServerAuthSession } from "@/auth";
// import { Upload } from "lucide-react";
import { Toaster } from "sonner";
import { getUserInfo } from "@/models/user";
import { queryGenerationByUser } from "@/models/generation";
import FooterSection from "@/components/Footer/FooterSection";
import { getTranslations } from "next-intl/server";
import ImageGenerator from "@/components/Generator/ImageGenerator";
import { languages, siteConfig } from "@/config/site";
import Navbar from "@/components/profile/Navbar";
import { redirect } from "next/navigation";

interface ExploreLayoutProps {
  children: React.ReactNode;
}

export default async function ExploreLayout({
  children
}: ExploreLayoutProps) {
    let user;
    let userInfo;
    let userId;
    const session: any = await getServerAuthSession();
    if (!session || !session.user) {
        user = null
        redirect("/sign-in");
    } else {
        user = session?.user;
        userInfo = await getUserInfo(user?.email || "");
        userId = userInfo ? userInfo.id : "";
        console.info("userId", userId);
        //pageNo = pageNo - 1 < 0 ? 0 : pageNo - 1;
        console.info("userInfo", userInfo);
    }
    return (
          <div>
             <section className="relative max-w-[85rem] mx-auto mt-20 px-4 sm:px-6 lg:px-8 pb-10 lg:pb-16 bg-blueGray-200">
                                <div className="container mx-auto">
                                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
                                    <div className="px-6">
                                      <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                          <div >
                                             <img alt="..." src={userInfo.image}
                                              className="rounded-full w-40 h-40 align-middle border-none relative -top-20" />
                                          </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center bg-red">
                                          <div className="py-6 px-3 mt-6 sm:mt-0">
                                            <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                              Go Generate
                                            </button>
                                          </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                          <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">99</span><span className="text-sm text-blueGray-400">Images</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{userInfo.credits}</span><span className="text-sm text-blueGray-400">Credits</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="text-center mt-6 items-center mb-1">
                                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                          {userInfo.name}
                                        </h3>
                                        <div className="items-center">
                                         <div className="flex items-center justify-center">
                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4 mr-2">
                                             <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                           </svg>
                                           <span className="dark:text-gray-600">{userInfo.email}</span>
                                         </div>
                                       </div>
                                      </div>
                                    </div>
                                  </div>
                          </div>
                         </section>
            <Navbar />
            {children}
        </div>

    );
}
