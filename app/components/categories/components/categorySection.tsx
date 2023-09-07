"use client";
import { FC } from "react";
import Image from "next/image";
import { BE_News } from "@/types/types";
import { useRouter } from "next/navigation";

const CategorySection: FC<BE_News> = ({ id, title, image }) => {
    const router = useRouter();
    const handleNewsClick = (articleId: string | undefined) => {
        router.push(`/article/${articleId}`);
    };
    return (
        <div
            className="md:w-[400px] w-[300px] flex items-start justify-around flex-row p-4 gap-[10px] cursor-pointer shadow-black bg-[#f3f3f3] hover:bg-gray rounded-lg font-medium"
            id={id}
            onClick={() => handleNewsClick(id)}
        >
            <h1 className="text-sm w-[250px]">{title}</h1>
            <div className="flex flex-col gap-3 items-centers w-[150px] h-[100px] relative">
                {image ? <Image src={image} alt={""} fill className="rounded-lg" /> : null}
            </div>
        </div>
    );
};

export default CategorySection;
