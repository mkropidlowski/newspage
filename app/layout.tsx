import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const roboto = Montserrat({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Trendy News",
    description: "Start your day with trending news!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
