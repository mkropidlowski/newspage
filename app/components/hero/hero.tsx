import { getAllNews } from "@/app/modules/getAllNews";
import { BE_News } from "@/types/types";
import News from "./components/news";
import SideNewsPanel from "../sideNewsPanel/sideNewsPanel";
import { FC } from "react";

type HeroProps = {
    newsData?: any;
};

const Hero: FC<HeroProps> = ({ newsData }) => {
    return (
        <div className="max-w-[1240px] flex flex-row p-5 m-auto gap-8">
            <div className="flex flex-col gap-[30px]">
                {newsData.data.map((newsItem: BE_News, id: number) => (
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
