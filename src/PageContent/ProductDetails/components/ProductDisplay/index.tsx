import {Box, Button, Grid, styled, Typography} from "@mui/material";
import {locale} from "@/locale/ua";
import PlusMinusControl from "@/components/PlusMinusControl";
import {PriceTag, Size} from "@/components/PriceTag";
import {productPageLocale} from "@/locale/ua/productPage";
import {IProduct} from "@/api/DTO/products";

interface IProductDisplayProps {
    product: IProduct;
    onQuantityChange: (quantity: number) => void;
    quantity: number;
    handleInstantBuy: () => void;
    handleAddToCart: () => void;
}

export function ProductDisplay({ product, onQuantityChange, quantity, handleInstantBuy, handleAddToCart }: IProductDisplayProps) {
    return (
    <Grid container>
        {/*<Grid item md={12} lg={4}>*/}
        {/*    <Box display="flex" justifyContent="center">*/}
        {/*      <ImageBox imageName={product.options.image} width="400px" height="400px"/>*/}
        {/*    </Box>*/}
        {/*</Grid>*/}
        <Grid item md={12} lg={8}>
            <ProductTitleBlock>
                <Typography variant="h5">{product.attributes.name}</Typography>
                <Typography variant="body2" color="secondary">{productPageLocale.code}: {product.attributes.name}</Typography>
            </ProductTitleBlock>
            <DescriptionBox>
                <PriceTagContainer>
                    <PriceTag value={product.attributes.price.toString()} size={Size.Big}/>
                </PriceTagContainer>
                <Box>
                    <div>{locale.quantity}:</div>
                    <PlusMinusControl
                        onChange={onQuantityChange}
                        defaultValue={quantity}
                    />
                </Box>
                <BuyControls>
                    <BuyButton variant="contained" size="large" onClick={handleInstantBuy}>
                        {locale.buy}
                    </BuyButton>
                    <BuyButton variant="contained" size="large" onClick={handleAddToCart}>
                        {locale.add_to_cart}
                    </BuyButton>
                </BuyControls>
            </DescriptionBox>
        </Grid>
    </Grid>)
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

const BuyButton = styled(Button)({
    ':hover': {
        backgroundColor: 'green',
    },
    backgroundColor: 'rgb(35, 189, 40)',
});

const DescriptionBox = styled('div')({
    margin: '10px 20px',
});

const ProductTitleBlock = styled('div')({
    margin: '0px 0px 30px 30px',
});