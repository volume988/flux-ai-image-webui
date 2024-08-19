import { NextResponse } from "next/server";
import Replicate from "replicate";
import { unstable_noStore as noStore } from "next/cache";
import { updateGeneration } from "@/models/generation";
import { getUserGenertedList } from "@/services/handleImage";
import to from "await-to-js";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

// Prevent Next.js / Vercel from caching responses
// See https://github.com/replicate/replicate-javascript/issues/136#issuecomment-1728053102
replicate.fetch = (url, options) => {
    return fetch(url, { cache: "no-store", ...options });
};

export async function GET(request: Request, { params }: any) {
    noStore();
    const { pageNo = 1 } = params;
    // @ts-ignore
    const { searchParams }: URLSearchParams = request.nextUrl;
    const userId = searchParams.get("userId");

    const [genertedErr, { generationList = [], total }]: any = await to(
        getUserGenertedList(pageNo, 48, userId)
    );

    if (genertedErr) {
        console.error("generted get error:", genertedErr);
        return NextResponse.json(
            { success: false, message: genertedErr.message },
            { status: 401 }
        );
    }

    console.log("generationList:", generationList);

    return NextResponse.json(
        {
            success: true,
            generationList,
            total,
        },
        { status: 200 }
    );
}
