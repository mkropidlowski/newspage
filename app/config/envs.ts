export const publicEnvs = {
    BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL as string,
    API_SECRET: process.env.NEXT_PUBLIC_API_ACCESS_KEY as string,
};
export const isDevServer = process.env.NODE_ENV === "development";
