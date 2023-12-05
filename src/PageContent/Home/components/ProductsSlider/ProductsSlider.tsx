import {ItemCarousel} from "@/components/ItemCarousel";
import {Product} from "@/api/DTO/products";
import {ProductCard} from "@/components/ProductCard";
import {getProductRoute} from "@/helpers/links";
import { UndecoratedLink } from "@/components/UndecoratedLink";

interface Props {
  products: Product[];
}

export function ProductsSlider({ products }: Props) {
  return (
    <ItemCarousel>
      {
        products.map((product) => (
          <UndecoratedLink key={product.id} href={getProductRoute(product.attributes.code)}>
            <ProductCard product={product}/>
          </UndecoratedLink>
        ))
      }
    </ItemCarousel>
  );
}