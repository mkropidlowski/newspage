"use client";
import Image from "next/image";
import { FC } from "react";

type NewsProps = {
    title?: string;
    image?: string;
};

const SideNewsPanel: FC<NewsProps> = ({ title, image }) => (
    <div className="flex flex-row p-4 gap-[10px]">
        <div className="w-[200px]">
            <h1 className="text-sm">{title}</h1>
        </div>
        <div className="w-[100px]">{image ? <Image src={image} alt={""} width={80} height={80} priority /> : null}</div>
    </div>
);

export default SideNewsPanel;
