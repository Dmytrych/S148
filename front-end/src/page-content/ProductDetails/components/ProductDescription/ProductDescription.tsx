import {Box, Button, styled, Typography} from "@mui/material";
import {productPageLocale} from "@/locale/ua/productPage";
import {PriceTag} from "@/components/PriceTag";
import PlusMinusControl from "@/components/PlusMinusControl";
import {locale} from "@/locale/ua";
import {Product} from "@/api/DTO/products";
import {getProductAvailabilityString} from "@/helpers/product/get-product-availability-string";

interface ProductDescriptionProps {
    product: Product;
    onQuantityChange: (quantity: number) => void;
    quantity: number;
    handleInstantBuy: () => void;
    handleAddToCart: () => void;
}

export function ProductDescription({ product, onQuantityChange, quantity, handleInstantBuy, handleAddToCart }: ProductDescriptionProps) {
  const availability = getProductAvailabilityString(product.attributes.inStock);

  return (
    <Box>
      <Typography variant="h3">{product.attributes.name}</Typography>
      <Typography variant="body2" color="secondary">{productPageLocale.code}: {product.attributes.code}</Typography>
      <Typography variant="body2" color="secondary">{availability}</Typography>
      <PriceTag price={product.attributes.price} size="large" />
      <BuyControls>
        <PlusMinusControl
          onChange={onQuantityChange}
          defaultValue={quantity}
        />
        <Button variant="contained" color="primary" size="large" onClick={handleAddToCart} sx={{ width: "150px" }}>
          {locale.add_to_cart}
        </Button>
        <Button variant="outlined" color="primary" size="large" onClick={handleInstantBuy}>
          {locale.buy}
        </Button>
      </BuyControls>
    </Box>
  )
}

const BuyControls = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  marginTop: '10px',
})