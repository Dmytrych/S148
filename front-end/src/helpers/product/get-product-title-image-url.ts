import {ProductAttributes} from "@/api/DTO/products";

export const getProductTitleImageUrl = (productAttributes: ProductAttributes) => {
  return productAttributes?.titleImage?.data?.attributes?.url
}