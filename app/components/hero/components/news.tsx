"use client";
import { BE_News } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/navigation";

const News: FC<BE_News> = ({ id, author, title, description, image, category, url }) => {
    const router = useRouter();
    const handleNewsClick = (articleId: string | undefined) => {
        router.push(`/article/${articleId}`);
    };

    return (
        <div className="max-w-[1000px] flex items-start md:flex-row flex-col p-4 gap-[30px] border-t-[1px]" id={id}>
            <div className="md:w-[50%] w-full cursor-pointer" onClick={() => handleNewsClick(id)}>
                <h1 className="text-3xl">{title}</h1>
                <p className="text-sm underline p-1">Author: {author}</p>
                <p className="capitalize p-1">
                    Category: <span className="font-medium">{category}</span>
                </p>
                <p className="mt-[20px]">{description.substring(0, 150)}...</p>
            </div>
            <div className="h-full w-[2px] bg-gray"></div>
            <div className="md:w-[50%] w-full flex flex-col gap-4 items-center ">
                {image ? <Image src={image} alt={""} width={500} height={300} className="rounded-lg" priority /> : null}
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
