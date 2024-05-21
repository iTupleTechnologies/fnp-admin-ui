import { getNoCache } from "./common/dbutils";

const apiurl = `${process.env.NEXT_PUBLIC_API_URL}/api/categories`;

export async function getCategories() {
    const response = getNoCache(apiurl);
    console.log("response", response);
    return response;
}
