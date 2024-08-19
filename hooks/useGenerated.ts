import to from "await-to-js";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function useGenerated() {
    // const [generation, setGeneration] = useState<any>(null);
    // const [prediction, setPrediction] = useState<any>(null);
    const [generatedList, setGeneratedList] = useState<any[]>([]);
    const [totalSize, setTotalSize] = useState<any>(0);
    const [error, setError] = useState<any>(null);

    // useEffect(() => {
    //   console.log("-----------------------------------------")
    //   console.log("prediction:", prediction)
    //   console.log("error:", error)
    //   console.log("-----------------------------------------")
    // }, [prediction, error])

    // function resetState() {
    //     setPrediction(null);
    //     setGeneration(null);
    //     setGeneratedList([]);
    // }

    const getGenerationList = async (params: any) => {
        // resetState();
        const [err, response] = await to(
            fetch(`/api/generated/${params.pageNo}?userId=${params.userId}`, {
                // method: "GET",
                // headers: {
                //     "Content-Type": "application/json",
                // },
                // body: JSON.stringify({
                //     ...params,
                // }),
            })
        );

        if (err) {
            console.error(`fetch /api/generated/${params.pageNo}?userId=${params.userId} error`, err.message);
            toast.error(err.message);
            return Promise.reject({ message: err.message });
        }
        const {generationList, total} = await response.json();

        // setGeneration({
        //     generationList,
        //     total
        // });
        setGeneratedList(generationList)
        setTotalSize(total)
    };

    return {
        error,
        totalSize,
        generatedList,
        getGenerationList,
    };
}
