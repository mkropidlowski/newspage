import prisma from "@/app/libs/prismadb";

export const getByCategories = async (limit: number, category: string) => {
    try {
        const news = await prisma.news.findMany({
            take: limit,
            where: {
                category: category,
            },
        });

        return news;
    } catch (error: any) {
        return [];
    }
};
