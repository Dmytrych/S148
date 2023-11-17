import {Grid} from "@mui/material";
import {Product} from "@/api/DTO/products";
import TallProductCard from "@/components/TallProductCard";
import {getProductPageRoute} from "@/helpers/links";
import {useRouter} from "next/router";

interface Props {
  products: Product[] | undefined;
}

export function ProductsGrid({ products }: Props) {
  const { push } = useRouter();

  const handleInstantBuy = async (product: Product) => {
    await push(getProductPageRoute(product.attributes.code))
  }

  return (
    <Grid container spacing={3}>
      {products ? (
        products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <TallProductCard
              key={index}
              product={product}
              onBuyClick={() => handleInstantBuy(product)}
            />
          </Grid>
        ))) : null}
    </Grid>
  )
}