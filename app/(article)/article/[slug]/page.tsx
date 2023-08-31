import { getArticle } from "@/app/modules/getArticle";
import Article from "./components/Article";

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
    const slug = params.slug;
    const article = await getArticle(slug);

    return <Article article={article} />;
};

export default ArticlePage;
