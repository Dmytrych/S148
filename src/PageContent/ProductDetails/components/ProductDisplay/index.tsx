import {Box, Button, styled, Typography} from "@mui/material";
import {locale} from "@/locale/ua";
import PlusMinusControl from "@/components/PlusMinusControl";
import {PriceTag} from "@/components/PriceTag";
import {productPageLocale} from "@/locale/ua/productPage";
import {IProduct} from "@/api/DTO/products";
import ProductImage from "@/components/ProductImage/ProductImage";

interface IProductDisplayProps {
    product: IProduct;
    onQuantityChange: (quantity: number) => void;
    quantity: number;
    handleInstantBuy: () => void;
    handleAddToCart: () => void;
}

export function ProductDisplay({ product, onQuantityChange, quantity, handleInstantBuy, handleAddToCart }: IProductDisplayProps) {
    return (
    <Box display="flex" gap="2" sx={{ flexDirection: { md: "row", xs: "column" } }}>
        <Box display="flex" justifyContent="center" mb={2}>
            <ProductImage image={product.attributes.images?.data[0]} width="400px" height="400px" />
        </Box>
        <Box flexGrow="1">
            <DescriptionBox>
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
                    <Button variant="primaryContained" size="large" onClick={handleInstantBuy}>
                        {locale.buy}
                    </Button>
                </BuyControls>
            </DescriptionBox>
        </Box>
    </Box>)
}

const BuyControls = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    marginTop: '10px',
})

const PriceTagContainer = styled('div')({
    backgroundColor: 'var(--global-color-secondary)',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    maxWidth: '200px',
    borderRadius: '10px',
    height: '70px',
});

const DescriptionBox = styled('div')({
    margin: '10px 20px',
});