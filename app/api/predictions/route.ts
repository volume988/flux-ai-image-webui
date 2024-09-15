import { insertGeneration } from "@/models/generation";
import { getUserInfo, updateUserInfo,decrement } from "@/models/user";
import to from "await-to-js";
import { NextResponse } from "next/server";
import Replicate from "replicate";
// import { Client } from "@gradio/client";
// import to from "await-to-js";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

async function getFileBlob(url: string) {
    const response = await fetch(url);
    const blob = await response.blob();

    return blob;
}

function getFluxModel(model:string) {
  switch (model) {
    case 'dev':
      return 'flux-dev';
    case 'pro':
      return 'flux-dev';
    case 'schnell':
      return 'flux-dev';
    default:
      return 'flux-dev';
  }
}

export async function POST(request: Request) {
    const { prompts, ratio, model, isPublic, user } = await request.json();
    // console.log('post user:',user);
    const email = user !== null && user.email!==null ? user.email : '';
    const userInfo = await getUserInfo(email);
    if (userInfo == null || userInfo.credits <=0 ) {
        if (userInfo != null) {
            console.info('User:%s, credits:%d', userInfo.name, userInfo.credits);
        }
        return NextResponse.json({ detail: 'Credits not enough!'}, { status: 403 });
    }
    // subtraction credits
    const decRes = await decrement(email, 1);
    if (decRes == null) {
       console.log('Decrement credits failed:', decRes.name, userInfo.credits);
       return NextResponse.json({ detail: 'Credits not enough!'}, { status: 403 });
    }
    console.info('User credits decrement: %s, credits:%d->%d', userInfo.name, userInfo.credits, decRes.credits);
    const fluxModel = getFluxModel(model);
    console.log('model select:',fluxModel);
    const input = {
        prompt: prompts,
        output_format: 'png',
        aspect_ratio: ratio
    };
    //await replicate.run("black-forest-labs/" + fluxModel, { input });
    console.log('input:', input);
    const prediction = await replicate.predictions.create({
       model: "black-forest-labs/"+fluxModel,
       input
    });
    // handle replicate / fal ... api
    console.log("Replicate prediction res:", prediction);
    const generationRecord = {
       imgUrl: prediction.output !== null &&prediction.output.length>=1 ?prediction.output[0]: '',
       prompt: prompts,
       model: model,
       predictionId: prediction?.id,
       userId: userInfo.id,
       generation: prediction.output !== null &&prediction.output.length>=1 ?prediction.output[0]: '',
       aspect_ratio: ratio
     };
    console.info("Record user:%s,%s, generation:%o", userInfo.id ,user.email, generationRecord);
    const genRes = await insertGeneration(generationRecord);
    return NextResponse.json(
         prediction,
        { status: 201 }
    );
}
