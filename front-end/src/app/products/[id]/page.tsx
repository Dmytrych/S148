import {ProductDetailsPageContent} from "@/page-content/ProductDetails";
import {notFound} from "next/navigation";
import {fetchProductById} from "@/actions/fetchProductById";

type ProductDetailsPageProps = {
  params: {
    id?: string;
  };
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