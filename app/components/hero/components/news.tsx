"use client";
import { BE_News } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const News: FC<BE_News> = ({ author, title, description, image, category, url, published_at }) => {
    return (
        <div className="max-w-[1000px] flex items-start flex-row p-4 gap-[30px] border-t-[1px]">
            <div className="w-[50%] cursor-pointer">
                <h1 className="text-3xl">{title}</h1>
                <p className="text-sm underline p-1">Author: {author}</p>
                <p className="capitalize p-1">
                    Category: <span className="font-medium">{category}</span>
                </p>
                <p className="mt-[20px]">{description}</p>
            </div>
            <div className="h-full w-[2px] bg-gray"></div>
            <div className="w-[50%] flex flex-col gap-4 items-center ">
                {image ? (
                    <Image src={image} alt={""} width={500} height={300} className="rounded-lg" />
                ) : (
                    <Image
                        src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                        alt="Empty Image Placeholder"
                        width={500}
                        height={300}
                    />
                )}
                <Link
                    href={url}
                    target={"_blank"}
                    className="w-[200px] p-2 bg-blueSky rounded-lg text-center font-medium text-white"
                >
                    Source link
                </Link>
            </div>
        </div>
    );
};

export default News;
