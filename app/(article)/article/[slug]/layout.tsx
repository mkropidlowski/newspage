import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/navbar";

export default async function NewsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="max-w-[1240px] max-h-max flex items-center flex-col m-auto">{children}</div>
            <Footer />
        </>
    );
}
