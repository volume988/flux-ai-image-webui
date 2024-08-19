import { insertGeneration } from "@/models/generation";
import { getUserInfo, updateUserInfo } from "@/models/user";
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

export async function POST(request: Request) {
    const { prompts, ratio, model, isPublic, user } = await request.json();

    let prediction: any = null;

    // handle replicate / fal ... api

    console.log("prediction:", prediction);

    return NextResponse.json(
        {
            prediction,
        },
        { status: 201 }
    );
}
