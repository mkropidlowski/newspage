import React from "react";
import CategorySection from "./components/categorySection";
import { News } from "@prisma/client";

type CategoryGroupProps = {
    categoryName: string;
    news: News[];
};

const CategoryGroup: React.FC<CategoryGroupProps> = ({ categoryName, news }) => {
    return (
        <div className="w-full flex flex-col gap-5">
            <div>
                <h2 className="capitalize text-4xl font-medium">{categoryName}</h2>
            </div>
            <div className="flex flex-wrap gap-5">
                {news.map((newsItem: News) => (
                    <CategorySection
                        key={newsItem.id}
                        id={newsItem.id}
                        author={newsItem.author}
                        title={newsItem.title}
                        description={newsItem.description}
                        url={newsItem.url}
                        image={newsItem.image}
                        category={newsItem.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryGroup;
