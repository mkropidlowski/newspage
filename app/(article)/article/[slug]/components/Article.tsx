import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { News } from "@prisma/client";

type ArticleProps = {
    article: News;
};

const Article: FC<ArticleProps> = ({ article }) => (
    <div className="max-w-[900px] flex items-center flex-col p-4 gap-[30px] border-t-[1px]" id={article.id}>
        <div className="w-full flex flex-col gap-4 items-center ">
            {article.image ? (
                <Image src={article.image} alt={""} width={500} height={300} className="rounded-lg" priority />
            ) : null}
        </div>
        <div className="w-full h-[2px] bg-gray"></div>
        <div className="w-full cursor-pointer">
            <h1 className="text-3xl">{article.title}</h1>
            <p className="flex gap-4 text-sm p-1 items-center">
                <span className="underline">Author: {article.author}</span>
                <Link
                    href={article.url}
                    target={"_blank"}
                    className="w-[100px] bg-blueSky rounded-lg text-center font-medium text-white no-underline"
                >
                    Source link
                </Link>
            </p>
            <p className="capitalize p-1">
                Category: <span className="font-medium">{article.category}</span>
            </p>
            <p className="mt-[20px]">{article.description}...</p>
        </div>
    </div>
);

export default Article;
