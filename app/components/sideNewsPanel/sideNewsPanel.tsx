import { BE_News } from "@/types/types";
import Image from "next/image";
import { getAllNews } from "@/app/modules/getAllNews";

const NEWS_LIMIT = 10;

const SideNewsPanel = async () => {
    const news = await getAllNews(NEWS_LIMIT);

    return (
        <div className="w-[330px] flex flex-col items-center">
            {news.data.map((items: BE_News, i: number) => (
                <div key={i} className="flex flex-row p-4 gap-[10px]">
                    <div className="w-[200px]">
                        <h1 className="text-sm">{items?.title}</h1>
                    </div>
                    <div className="w-[100px]">
                        {items?.image ? (
                            <Image src={items?.image} alt={""} width={80} height={80} />
                        ) : (
                            <Image
                                src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                                alt="Empty Image Placeholder"
                                width={80}
                                height={80}
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideNewsPanel;
