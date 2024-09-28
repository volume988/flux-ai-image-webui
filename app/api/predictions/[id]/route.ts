import { NextResponse } from "next/server";
import Replicate from "replicate";
import { unstable_noStore as noStore } from "next/cache";
import { updateGeneration, updateGenerationByPredictionId } from "@/models/generation";
import { uploadFile, getFileStream } from "@/lib/s3";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Prevent Next.js / Vercel from caching responses
// See https://github.com/replicate/replicate-javascript/issues/136#issuecomment-1728053102
replicate.fetch = (url, options) => {
  return fetch(url, { cache: "no-store", ...options });
};

function getImageUrlSuffix(url:string) {
    return url.substring(url.lastIndexOf('.'));
}

export async function GET(request: Request, { params }: any) {
  noStore();
  // handle replicate / fal ... api
  const  predictionId = params.id;
  if (predictionId === null) {
    return NextResponse.json(
        {
          'status':'failed',
        },
        { status: 200 }
      )
  }
  let prediction = await replicate.predictions.get(predictionId);
  console.log('Get prediction: %s,Res:%o', predictionId, prediction);
  if (prediction.status === "succeeded" && prediction.output !== null && prediction.output.length > 0 ) {
  console.info("Get prediction succeeded:", predictionId, prediction);
  let url = prediction.output !== null && prediction.output.length >= 1 ? prediction.output[0]: '';
  const buffer = await getFileStream(url);
  const urlSuffix = getImageUrlSuffix(url);
  const name = predictionId + urlSuffix;
  const uploadParams = {
       FileName: name,
       fileBuffer: buffer,
       objectKey: 'selected/'+name
   }
   const uploadRes = await uploadFile(uploadParams);
   url = uploadRes !== null ? uploadRes : url;
   const generationRecord = {
       imgUrl: url,
       generation: url
    };
    const genRes = await updateGenerationByPredictionId(predictionId, generationRecord);
    console.log('update res:', predictionId, genRes);
  }
  return NextResponse.json(
    prediction,
    { status: 200 }
  );
}
