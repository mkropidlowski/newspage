import News from "./components/news";
import SideNewsPanel from "./components/sideNewsPanel";
import { FC } from "react";
import { News as NewsProps } from "@prisma/client";

type HeroProps = {
    newsData?: NewsProps[];
    sidePanelNews?: NewsProps[];
};

const Hero: FC<HeroProps> = ({ newsData, sidePanelNews }) => {
    return (
        <div className="max-w-[1240px] flex flex-row p-5 m-auto gap-8">
            <div className="flex flex-col gap-[30px]">
                {newsData?.map((newsItem: NewsProps) => (
                    <News
                        key={newsItem?.id}
                        author={newsItem?.author}
                        title={newsItem?.title}
                        description={newsItem?.description}
                        url={newsItem?.url}
                        image={newsItem?.image}
                        category={newsItem?.category}
                    />
                ))}
            </div>
            <div className="w-[330px] flex flex-col items-center">
                {sidePanelNews?.map((panelNews: NewsProps) => (
                    <SideNewsPanel key={panelNews?.id} title={panelNews?.title} image={panelNews.image} />
                ))}
            </div>
        </div>
    );
};

export default Hero;
