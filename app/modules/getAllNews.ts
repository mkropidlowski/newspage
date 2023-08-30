import prisma from "@/app/libs/prismadb";

export const getAllNews = async (limit: number, skipNumer?: number) => {
    try {
        const news = await prisma.news.findMany({
            skip: skipNumer,
            take: limit,
        });

        return news;
    } catch (error: any) {
        return [];
    }
};
