import {Box, Button, styled, Typography} from "@mui/material";
import {productPageLocale} from "@/locale/ua/productPage";
import {PriceTag} from "@/components/PriceTag";
import PlusMinusControl from "@/components/PlusMinusControl";
import {locale} from "@/locale/ua";
import {IProduct} from "@/api/DTO/products";

interface ProductDescriptionProps {
    product: IProduct;
    onQuantityChange: (quantity: number) => void;
    quantity: number;
    handleInstantBuy: () => void;
    handleAddToCart: () => void;
}

export function ProductDescription({ product, onQuantityChange, quantity, handleInstantBuy, handleAddToCart }: ProductDescriptionProps) {
    return (
        <Box>
            <Typography variant="h5">{product.attributes.name}</Typography>
            <Typography variant="body2" color="secondary">{productPageLocale.code}: {product.attributes.name}</Typography>
            <Box my={2}>
                <PriceTag price={product.attributes.price} size="large" />
            </Box>
            <BuyControls>
                <PlusMinusControl
                    onChange={onQuantityChange}
                    defaultValue={quantity}
                />
                <Button variant="primaryContained" size="large" onClick={handleAddToCart} sx={{ width: "150px" }}>
                    {locale.add_to_cart}
                </Button>
                <Button variant="primaryOutlined" size="large" onClick={handleInstantBuy}>
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