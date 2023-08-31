import PageLayout from "../components/layout/pageLayout";
import { getByCategories } from "../modules/getByCategories";
import CategoryGroup from "../components/categories/categoryGroup";
import Footer from "../components/footer/footer";

export default async function Home() {
    const categoryNames = ["technology", "business", "science", "sports", "health"];
    const limit = 6;
    const newsByCategories = await Promise.all(
        categoryNames.map((categoryName) => getByCategories(limit, categoryName))
    );

    return (
        <PageLayout>
            <div className="w-[1240px] mt-[100px] flex flex-col gap-11">
                {newsByCategories.map((newsForCategory, i) => (
                    <CategoryGroup key={i} categoryName={categoryNames[i]} news={newsForCategory} />
                ))}
            </div>
            <Footer />
        </PageLayout>
    );
}
