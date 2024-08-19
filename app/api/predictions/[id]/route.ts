import { NextResponse } from "next/server";
import Replicate from "replicate";
import { unstable_noStore as noStore } from "next/cache";

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
  let prediction: any
  // handle replicate / fal ... api

  return NextResponse.json(
    {
      prediction,
    },
    { status: 200 }
  );
}
