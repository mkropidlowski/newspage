import prisma from "@/app/libs/prismadb";

export const getArticle = async (articleId: string) => {
    try {
        const article = await prisma.news.findUnique({
            where: {
                id: articleId,
            },
        });
        return article;
    } catch (error: any) {
        return [];
    }
};
