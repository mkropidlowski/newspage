import News from "./components/news";
import SideNewsPanel from "../sideNewsPanel/sideNewsPanel";
import { FC, useId } from "react";
import { BE_News } from "@/types/types";

type HeroProps = {
    newsData?: { data: BE_News[] };
};

const Hero: FC<HeroProps> = ({ newsData }) => {
    const id = useId();
    const uniqueNewsData = newsData?.data?.reduce((acc: BE_News[], current: BE_News) => {
        if (!acc.find((item) => item.title === current.title)) {
            acc.push(current);
        }
        return acc;
    }, []);

    return (
        <div className="max-w-[1240px] flex flex-row p-5 m-auto gap-8">
            <div className="flex flex-col gap-[30px]">
                {uniqueNewsData?.map((newsItem: BE_News) => (
                    <News
                        key={id + `${newsItem.title}`}
                        author={newsItem?.author}
                        title={newsItem?.title}
                        description={newsItem?.description}
                        url={newsItem?.url}
                        source={newsItem?.source}
                        image={newsItem?.image}
                        category={newsItem?.category}
                        country={newsItem?.country}
                        published_at={newsItem?.published_at}
                    />
                ))}
            </div>
            <SideNewsPanel />
        </div>
    );
};

export default Hero;
