import PageLayout from "../components/layout/pageLayout";
import { getByCategories } from "../modules/getByCategories";
import CategoryGroup from "../components/categories/categoryGroup";

export default async function Home() {
    const categoryNames = ["technology", "business", "science", "sports", "health"];
    const limit = 6;
    const newsByCategories = await Promise.all(
        categoryNames.map((categoryName) => getByCategories(limit, categoryName))
    );

    return (
        <PageLayout>
            <div className="min-w-[1040px] mt-[100px] flex flex-col gap-11">
                {newsByCategories.map((newsForCategory, i) => (
                    <CategoryGroup key={i} categoryName={categoryNames[i]} news={newsForCategory} />
                ))}
            </div>
        </PageLayout>
    );
}
