import {MetadataRoute} from "next";
import {fetchProducts} from "@/actions/fetchProducts";

export async function generateSitemaps() {
  const products = await fetchProducts()

  if (!products) {
    return []
  }

  return products.map((product) => {
    return {
      id: product.id
    }
  })
}

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  const products = await fetchProducts()

  if (!products) {
    return []
  }

  return products.map((product) => ({
    url: `https://${process.env.NEXT_PUBLIC_HOST_NAME}/products/${product.id}`,
    lastModified: product.attributes.updatedAt
  }))
}