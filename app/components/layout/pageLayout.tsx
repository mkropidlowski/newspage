import { getAllNews } from "@/app/modules/getAllNews";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";

const PageLayout = async ({ children }: { children: React.ReactNode }) => {
    const news = await getAllNews(4);
    return (
        <div className="flex flex-col w-full h-full">
            <Navbar />
            <Hero newsData={news} />
            <main className="max-w-[1240px] min-h-screen flex flex-col items-center m-auto">{children}</main>
        </div>
    );
};

export default PageLayout;
