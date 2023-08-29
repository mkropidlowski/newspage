import { BE_News } from "@/types/types";
import React from "react";
import Categories from "./categories";

type CategoryGroupProps = {
    categoryName: string;
    news: BE_News[];
};

const CategoryGroup: React.FC<CategoryGroupProps> = ({ categoryName, news }) => {
    return (
        <div className="w-full flex flex-col gap-5">
            <div>
                <h2 className="capitalize text-4xl font-medium">{categoryName}</h2>
            </div>
            <div className="flex flex-wrap">
                {news.map((newsItem: BE_News, i: number) => (
                    <Categories
                        key={i}
                        author={newsItem.author}
                        title={newsItem.title}
                        description={newsItem.description}
                        url={newsItem.url}
                        source={newsItem.source}
                        image={newsItem.image}
                        category={newsItem.category}
                        country={newsItem.country}
                        published_at={newsItem.published_at}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryGroup;
