import Hero from "@/app/components/hero/hero";
import { getByCategories } from "@/app/modules/getByCategories";

const NewsPage = async ({ params }: { params: { slug: string } }) => {
    const slug = params.slug;
    const newsByCategory = await getByCategories(slug, 10);

    // return <Hero newsData={newsByCategory} />;
};

export default NewsPage;
