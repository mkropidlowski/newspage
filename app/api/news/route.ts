// import { publicEnvs } from "@/app/config/envs";
// import axios from "axios";
// import { NextResponse } from "next/server";

// const SECRET_KEY = publicEnvs.API_SECRET;

// export async function GET() {
//     try {
//         const allNews = await axios.get(`?access_key=${SECRET_KEY}`);
//         return NextResponse.json(allNews);
//     } catch (error) {
//         return NextResponse.json({ message: "GET ERROR" }, { status: 500 });
//     }
// }
