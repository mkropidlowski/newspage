import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col w-full h-full">
        <Navbar />
        <main className="max-w-[1240px] min-h-screen flex flex-col items-center m-auto">
            {/* <Hero />
            {children} */}
        </main>
    </div>
);

export default PageLayout;
