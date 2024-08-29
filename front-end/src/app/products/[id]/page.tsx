import {ProductDetailsPageContent} from "@/page-content/ProductDetails";
import {notFound} from "next/navigation";
import {fetchProductById} from "@/actions/fetchProductById";
import {Metadata, ResolvingMetadata} from "next";
import {locale} from "@/locale/ua";
import {getProductRoute} from "@/helpers/links";
import {getProductTitleImageUrl} from "@/helpers/product/get-product-title-image-url";

type ProductDetailsPageProps = {
  params: {
    id?: string;
  };
}



export async function generateMetadata(
  { params }: ProductDetailsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (!params.id) {
    return {
      title: locale.not_found_product_page_title
    }
  }

  const product = await fetchProductById(params.id)

  if (!product) {
    return {
      title: locale.not_found_product_page_title
    }
  }

  return {
    title: product.attributes.name,
    description: product.attributes.shortDescription,
    alternates: {
      canonical: getProductRoute(params.id)
    },
    openGraph: {
      title: product.attributes.name,
      description: product.attributes.shortDescription,
      images: product.attributes.titleImage ? [`${process.env.NEXT_PUBLIC_IMAGE_PROVIDER_URL}${getProductTitleImageUrl(product.attributes)}`] : undefined,
    }
  }
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  if (!params.id) {
    notFound();
  }

  const product = await fetchProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailsPageContent product={product}/>
}