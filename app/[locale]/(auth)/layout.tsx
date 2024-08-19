/* eslint-disable @next/next/no-img-element */
import "@/styles/globals.css";
import { Toaster } from "sonner"
// import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <div className="container relative h-screen flex-col items-center justify-center lg:max-w-none lg:px-0">
        
        <div className="z-10 w-screen px-4 lg:w-full lg:p-8">
          <div className="mx-auto flex w-full max-w-full flex-col justify-center space-y-6 sm:w-[400px]">
            {children}
          </div>
        </div>
      </div>
      <Toaster position="top-center" richColors />
    </div>
  );
}
