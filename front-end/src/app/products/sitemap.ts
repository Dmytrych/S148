import {MetadataRoute} from "next";
import {fetchProducts} from "@/actions/fetchProducts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await fetchProducts()

  if (!products) {
    return []
  }

  return products.map((product) => ({
    url: `https://${process.env.NEXT_PUBLIC_HOST_NAME}/products/${product.id}`,
    lastModified: product.attributes.updatedAt
  }))
}