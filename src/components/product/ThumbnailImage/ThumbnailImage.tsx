import ProductImage from "@/components/ProductImage/ProductImage";

interface Props {
    url: string;
}

export function ThumbnailImage({ url }: Props) {
  return (
    <ProductImage imageUrl={url} width="100px" height="100px" />
  )
}