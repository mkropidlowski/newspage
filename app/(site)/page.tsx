import PageLayout from "../components/layout/pageLayout";
import { getByCategories } from "../modules/getByCategories";
import CategoryGroup from "../components/categories/categoryGroup";

export default async function Home() {
    const categoryNames = ["technology", "business", "science", "sports", "entertainment", "health"];
    const limit = 6;
    const newsByCategories = await Promise.all(
        categoryNames.map((categoryName) => getByCategories(categoryName, limit))
    );

    return (
        <PageLayout>
            <div className="w-[1240px] mt-[100px] flex flex-col gap-11">
                {newsByCategories.map((newsForCategory, i) => (
                    <CategoryGroup key={i} categoryName={categoryNames[i]} news={newsForCategory.data} />
                ))}
            </div>
        </PageLayout>
    );
}
