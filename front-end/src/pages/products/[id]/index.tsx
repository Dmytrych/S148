import {ProductDetailsPageContent} from "@/page-content/ProductDetails";
import {fetchDataFromServer} from "@/helpers/api-helpers";
import {ApiRoutes} from "@/api/apiRoutes";
import {GetServerSideProps} from "next";
import {ProductApiResponse, Product} from "@/api/DTO/products";
import {ProductPopulateParams} from "@/api/products";

type ProductDetailsPageProps = {
  product: Product;
}

type ProductDetailsPageParams = {
  id: string;
}

export const getServerSideProps: GetServerSideProps<ProductDetailsPageProps, ProductDetailsPageParams> = (async ({ params }) => {
  if (!params || !params["id"]) {
    return {
      notFound: true,
    };
  }

  const pageParams = params as ProductDetailsPageParams;

  try {
    const productApiResponse = await fetchDataFromServer<ProductApiResponse>(
      ApiRoutes.productUrl(pageParams.id),
      {
        method: "GET",
        params: {
          populate: [ProductPopulateParams.Images, ProductPopulateParams.Characteristics]
        }
      })
    return { props: { product: productApiResponse.data } }
  } catch (err) {
    console.log(err);
    return {
      notFound: true
    }
  }
})

export default function ProductDetailsPage({ product }: ProductDetailsPageProps) {
  return <ProductDetailsPageContent product={product}/>
}