import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export function absoluteUrl(path: string) {
    return `${process.env.NEXTAUTH_URL}${path}`;
}

export function validateEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export function getScrollPercent() {
    var h: any = document.documentElement,
        b: any = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

// Function to generate a unique machine ID and store it in localStorage
export function getMachineId() {
    let machineId = localStorage.getItem("MachineId");

    if (!machineId) {
        // Generate a unique ID (e.g., using crypto.randomUUID())
        machineId = crypto.randomUUID();
        localStorage.setItem("MachineId", machineId);
    }

    return machineId;
}

export function outOfFree() {
    const isOutOfFree = localStorage.getItem("outOfFree");

    if (!isOutOfFree) {
        localStorage.setItem("outOfFree", "1");
        return false;
    } else {
        return true;
    }
}

export async function getImageSize(data: Blob, ext: string) {
    return new Promise((resolve, reject) => {
        console.info("new Blob:", data)
        console.info(`image/${ext}`)
        const blob = new Blob([data], { type: `image/${ext}` }); // 假设图片格式为 JPEG
        const img = new Image();
        img.onload = () => {
            console.log("图片宽度：", img.width);
            console.log("图片高度：", img.height);
            resolve({
                width: img.width,
                height: img.height,
            });
        };
        img.onerror = (err) => {
            console.log("获取图片尺寸失败：", err);
            reject(err);
        };
        img.src = URL.createObjectURL(blob);
    });
}

export function onDownloadR2(key: string, onFinished: any) {
    // fetch(key)
        fetch("/api/download", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              objectKey: key,
            }),
          })
        .then((res) => res.blob())
        .then((blob) => {
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style.display = "none";
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = url.split("/").slice(-1)[0];
            console.info("a.download:", a.download);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            setTimeout(() => {
                onFinished();
            }, 100);
        })
        .catch((err) => onFinished());
}

export function onDownload(key: string, onFinished: any) {
    fetch(key)
        // fetch("/api/download", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       objectKey: key,
        //     }),
        //   })
        .then((res) => res.blob())
        .then((blob) => {
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style.display = "none";
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = url.split("/").slice(-1)[0];
            console.info("a.download:", a.download);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            setTimeout(() => {
                onFinished();
            }, 100);
        })
        .catch((err) => onFinished());
}

export function toArr(i18nObjLen: string) {
    return Array.from(
        { length: Number(i18nObjLen) },
        (_, i) => i + 1
    );
}