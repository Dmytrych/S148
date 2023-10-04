import ImageBox from "@/components/ImageBox";
import {ProductName} from "@/components/ProductName";
import {Box, Button, Grid, styled} from "@mui/material";
import {locale} from "@/locale/ua";
import PlusMinusControl from "@/components/PlusMinusControl";
import {IProduct} from "@/api/DTO/products";
import {PriceTag, Size} from "@/components/PriceTag";

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
        <Grid item md={12} lg={5}>
            <Box display="flex" justifyContent="center">
                <ProductImage>
                    <ImageBox imageName={product.options.image}/>
                </ProductImage>
            </Box>
        </Grid>
        <Grid item md={12} lg={7}>
            <ProductTitleBlock>
                <ProductName value={product.name} size={"medium"}/>
                <Box sx={{lineHeight: '2'}}>
                    Add subtitle
                </Box>
            </ProductTitleBlock>
            <DescriptionBox>
                <PriceTagContainer>
                    <PriceTag value={product.price.base.toString()} size={Size.Big}/>
                </PriceTagContainer>
                <Box>
                    <div>{locale.quantity}:</div>
                    <PlusMinusControl
                        onChange={onQuantityChange}
                        defaultValue={quantity}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '20px',
                        marginTop: '10px',
                    }}
                >
                    <BuyButton
                        variant="contained"
                        size="large"
                        onClick={handleInstantBuy}
                    >
                        {locale.buy}
                    </BuyButton>
                    <BuyButton
                        variant="contained"
                        size="large"
                        onClick={handleAddToCart}
                    >
                        {locale.add_to_cart}
                    </BuyButton>
                </Box>
            </DescriptionBox>
        </Grid>
    </Grid>)
}

const ProductImage = styled('div')({
    maxWidth: '600px',
    maxHeight: '600px',
});

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
    margin: '30px 0px 30px 30px',
});