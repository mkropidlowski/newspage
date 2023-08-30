import { useState, useEffect } from "react";
import { BE_News } from "@/types/types";

function useUniqueData(apiData: BE_News[], key: keyof BE_News) {
    const [uniqueData, setUniqueData] = useState<BE_News[]>([]);

    useEffect(() => {
        const uniqueItems = Array.from(new Set(apiData.map((item) => item[key])));
        const filteredData = apiData.filter((item) => uniqueItems.includes(item[key]));
        setUniqueData(filteredData);
    }, [apiData, key]);

    return uniqueData;
}

export default useUniqueData;
