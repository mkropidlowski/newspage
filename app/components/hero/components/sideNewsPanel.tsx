"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

type NewsProps = {
    id?: string;
    title?: string;
    image?: string;
};

const SideNewsPanel: FC<NewsProps> = ({ id, title, image }) => {
    const router = useRouter();

    const handleNewsClick = (articleId: string | undefined) => {
        router.push(`/article/${articleId}`);
    };
    return (
        <div className="flex flex-row p-4 gap-[10px] cursor-pointer" id={id} onClick={() => handleNewsClick(id)}>
            <div className="w-[200px]">
                <h1 className="text-sm">{title}</h1>
            </div>
            <div className="w-[100px]">
                {image ? <Image src={image} alt={""} width={80} height={80} priority /> : null}
            </div>
        </div>
    );
};
export default SideNewsPanel;
