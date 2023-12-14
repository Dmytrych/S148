import {ItemCarousel} from "@/components/ItemCarousel";
import {Product} from "@/api/DTO/products";
import {ProductCard} from "@/components/ProductCard";

interface Props {
  products: Product[];
}

export function ProductsSlider({ products }: Props) {
  return (
    <ItemCarousel>
      {
        products.map((product, index) => (
          <ProductCard key={index} product={product}/>
        ))
      }
    </ItemCarousel>
  );
}