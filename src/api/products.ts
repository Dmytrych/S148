import {API} from "@/api/axiosFetcher";
import {IProduct} from "@/api/DTO/products";

export async function productsFetcher(url: string): Promise<IProduct[]> {
    const response = await API.get(url);

    if (response.status < 200 || response.status >= 300) {
        throw new Error("Could not fetch products");
    }

    return response.data;
}