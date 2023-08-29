import { publicEnvs } from "../config/envs";

const SECRET_KEY = publicEnvs.API_SECRET;
const API_KEY = publicEnvs.BASE_API_URL;

export const getByCategories = async (categories: string, limit: number) => {
    const res = await fetch(
        `${API_KEY}?access_key=${SECRET_KEY}&limit=${limit}&sort=popularity&categories=${categories}`,
        {
            next: { revalidate: 3600 },
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data.");
    }
    return res.json();
};
