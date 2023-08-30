import { getAllNews } from "@/app/modules/getAllNews";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";

const LIMIT = 3;
const SIDE_PANEL_LIMIT = 10;
const SKIP_NEWS = LIMIT;

const PageLayout = async ({ children }: { children: React.ReactNode }) => {
    const news = await getAllNews(LIMIT);
    const sidePanelNews = await getAllNews(SIDE_PANEL_LIMIT, SKIP_NEWS);
    return (
        <div className="flex flex-col w-full h-full">
            <Navbar />
            <Hero newsData={news} sidePanelNews={sidePanelNews} />
            <main className="max-w-[1240px] min-h-screen flex flex-col items-center m-auto">{children}</main>
        </div>
    );
};

export default PageLayout;
