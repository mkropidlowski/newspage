import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, description, author, url, image, category } = body;

        const addNews = await prisma.news.create({
            data: {
                title,
                description,
                author,
                url,
                image,
                category,
            },
        });

        return NextResponse.json(addNews);
    } catch (error) {
        return NextResponse.json({ message: "POST ERROR" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const getNews = await prisma.news.findMany();

        return NextResponse.json(getNews);
    } catch (error) {
        return NextResponse.json({ message: "POST ERROR" }, { status: 500 });
    }
}
