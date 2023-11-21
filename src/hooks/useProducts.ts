import useSWR from 'swr'
import { ApiRoutes } from '@/api/apiRoutes'
import { ProductPopulateParams, productsFetcher } from '@/api/products'

export function useProducts () {
  return useSWR(ApiRoutes.Products, async (url) => await productsFetcher(url, { populate: [ProductPopulateParams.Images, ProductPopulateParams.Characteristics] }))
}
