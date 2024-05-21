import { getNoCache } from "./common/dbutils";
const apiurl = `${process.env.NEXT_PUBLIC_API_URL}/api/catalogs`;

export async function getCatalogs() {
    const response = getNoCache(apiurl);
    return response;
}
