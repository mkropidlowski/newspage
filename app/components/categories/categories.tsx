import { BE_News } from "@/types/types";
import { FC } from "react";
import Image from "next/image";

const Categories: FC<BE_News> = ({
    author,
    title,
    description,
    url,
    source,
    image,
    category,
    country,
    published_at,
}) => {
    return (
        <div className="w-[400px] h-[200px] flex items-start flex-row p-4 gap-[10px] cursor-pointer">
            <h1 className="text-sm w-[250px]">{title}</h1>
            <div className="flex flex-col gap-3 items-centers w-[150px] h-[150px]">
                {image ? (
                    <Image src={image} alt={""} width={150} height={150} className="rounded-lg" />
                ) : (
                    <Image
                        src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                        alt="Empty Image Placeholder"
                        width={150}
                        height={150}
                    />
                )}
            </div>
        </div>
    );
};

export default Categories;