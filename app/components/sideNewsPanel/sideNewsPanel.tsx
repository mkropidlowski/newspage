"use client";
import { BE_News } from "@/types/types";
import Image from "next/image";
import { getAllNews } from "@/app/modules/getAllNews";
import { FC, useEffect, useState } from "react";
import { useId } from "react";

const NEWS_LIMIT = 10;

const SideNewsPanel: FC = () => {
    const id = useId();
    const [news, setNews] = useState<BE_News[]>([]);

    useEffect(() => {
        async function fetchNews() {
            const newsData = await getAllNews(NEWS_LIMIT);
            setNews(newsData.data);
        }
        fetchNews();
    }, []);

    const uniqueNewsData = news?.reduce((acc: BE_News[], current: BE_News) => {
        if (!acc.find((item) => item.title === current.title)) {
            acc.push(current);
        }
        return acc;
    }, []);

    return (
        <>
            {news ? (
                <div className="w-[330px] flex flex-col items-center">
                    {uniqueNewsData?.map((item: BE_News, i: number) => (
                        <div key={id + i} className="flex flex-row p-4 gap-[10px]">
                            <div className="w-[200px]">
                                <h1 className="text-sm">{item?.title}</h1>
                            </div>
                            <div className="w-[100px]">
                                {item?.image ? (
                                    <Image src={item?.image} alt={""} width={80} height={80} priority />
                                ) : (
                                    <Image
                                        src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                                        alt="Empty Image Placeholder"
                                        width={80}
                                        height={80}
                                        priority
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default SideNewsPanel;
