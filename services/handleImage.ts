import {
    queryGeneration,
    queryGenerationByIds,
    queryGenerationByNum,
    queryGenerationByUser,
    queryGenerationCount,
} from "@/models/generation";
import to from "await-to-js";

export async function getHomeGallery(
    ids: string[]
) {
    const [listErr, generationList] = await to(
        queryGenerationByIds({
            ids
        })
    );

    if (listErr) {
        console.error(listErr.message);
    }

    // console.info(generationList.length);

    return {
        generationList,
    };
}

export async function getGenerationList(
    pageNo: number = 1,
    pageSize: number = 48
) {
    pageNo = pageNo - 1 < 0 ? 0 : pageNo - 1;
    const offset = pageNo * pageSize;
    const [listErr, generationList] = await to(
        queryGenerationByNum({
            offset,
            pageSize,
            // orderBy: { id: "desc" },
        })
    );
    const [countErr, count] = await to(queryGenerationCount());
    const total = Math.ceil(count / pageSize);

    if (listErr) {
        console.error(listErr.message);
    }

    if (countErr) {
        console.error(countErr.message);
    }

    console.info(offset, pageSize, generationList.length);

    return {
        generationList,
        pageNo: pageNo,
        total,
        pageSize,
    };
}

export async function getUserGenertedList(
    pageNo: number = 1,
    pageSize: number = 48,
    userId: string
) {
    pageNo = pageNo - 1 < 0 ? 0 : pageNo - 1;
    const offset = pageNo * pageSize;
    const [listErr, generationList] = await to(
        queryGenerationByUser({
            offset,
            pageSize,
            userId,
            // orderBy: { id: "desc" },
        })
    );
    const [countErr, count] = await to(
        queryGenerationCount({
            userId,
        })
    );

    const total = Math.ceil(count / pageSize);

    if (listErr) {
        console.error(listErr.message);
    }

    if (countErr) {
        console.error(countErr.message);
    }

    console.info(offset, pageSize, generationList.length);

    return {
        generationList,
        pageNo: pageNo,
        total,
        pageSize,
    };
}

export async function getGenerationItem(generationId: string) {
    const [generationErr, generation] = await to(
        queryGeneration({
            id: generationId,
        })
    );

    if (generationErr) {
        console.error("generationErr:", generationErr);
        // toast.error(generationErr.message);
        return Promise.reject(generationErr);
    }

    if (!generation.id) {
        return Promise.reject(new Error("Not Found Flux Image Result."));
    }

    console.info("generation:", generation);

    return Promise.resolve({ ...generation, url: generation.generation });
}
