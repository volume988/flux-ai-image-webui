import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
} from "@aws-sdk/client-s3";
import axios from "axios";
import { Readable } from "stream";
import fs from "fs";
import { lookup } from "mime-types";
import to from "await-to-js";

export interface UploadParams {
    FileName: string; // local file path -> eg. "path/to/local/file.txt"
    fileBuffer: Buffer;
    objectKey: string; // object key -> eg. "image/image.jpg"
}

export interface UploadImageParams {
    fileObject: File;
    objectKey: string; // object key -> eg. "image/image.jpg"
}

export interface DownloadParams {
    objectKey: string; // object key -> eg. "image/image.jpg"
    localFilePath: string; // local file path -> eg. "path/to/local/file.txt"
}

export const S3 = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
    },
});

export async function getFileStream(
    url: string,
    responseType: string = "arraybuffer"
) {
    try {
        const [err, response] = await to(
            axios({
                method: "GET",
                url,
                responseType: "arraybuffer",
            })
        );

        if (err) return Promise.reject({ message: "下载失败" });

        if (responseType === "arraybuffer") {
            // console.info('----- 下载成功 arraybuffer -----', imageUrl)
            return Buffer.from(response.data, "binary");
        } else {
            // console.info('----- 下载成功 stream -----', imageUrl)
            return response.data;
        }
    } catch (e) {
        console.log("download failed:", e);
        throw e;
    }
}

export async function downloadImage(params: DownloadParams) {
    const { localFilePath, objectKey } = params;
    // 创建 GetObjectCommand 实例以下载文件
    const command = new GetObjectCommand({
        Bucket: process.env.R2_BUCKET,
        Key: objectKey,
    });

    let data;

    // 下载文件到本地计算机
    try {
        data = await S3.send(command);

        // 将文件数据写入本地文件
        const fileStream = Readable.from(data.Body as any);
        const writeStream = fs.createWriteStream(localFilePath);
        fileStream.pipe(writeStream);

        console.log("File downloaded successfully:", localFilePath);
    } catch (error) {
        console.error("Error downloading file:", error);
    }

    return data;
}

export async function uploadFile(params: UploadParams) {
    const { FileName, fileBuffer, objectKey } = params;

    // Create ReadStream
    // const fileStream = fs.createReadStream(fileObject?.filepath);

    // Create PutObjectCommand to upload the local file to Cloudflare R2
    const command = new PutObjectCommand({
        Bucket: process.env.R2_BUCKET,
        Key: objectKey,
        Body: fileBuffer,
        ContentType: lookup(FileName),
    });

    let data;

    console.log("[UPLOADING]", objectKey);

    // Upload the file to the specified bucket and key
    try {
        data = await S3.send(command);

        console.log("File uploaded successfully:", objectKey);
    } catch (error) {
        console.error("Error uploading file:", error);
    }

    return data ? `https://${process.env.R2_DOMAIN_URL}/${objectKey}` : null;
}
