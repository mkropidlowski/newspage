import Hero from "@/app/components/hero/hero";
import { getByCategories } from "@/app/modules/getByCategories";

const LIMIT = 10;

const NewsPage = async ({ params }: { params: { slug: string } }) => {
    const slug = params.slug;
    const newsByCategory = await getByCategories(LIMIT, slug);

    return <Hero newsData={newsByCategory} />;
};

export default NewsPage;
