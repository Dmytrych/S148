import {Box, Grid, Paper, styled,} from '@mui/material';
import {IProduct} from "@/api/DTO/products";
import {useProductCartControls} from "@/hooks/useProductCartControls";
import React from "react";
import {Routes} from "@/routes";
import {useRouter} from "next/router";
import {ProductImageBlock} from "@/PageContent/ProductDetails/components/ProductDisplay";
import {ProductInfoTabs} from "@/PageContent/ProductDetails/components/ProductInfoTabs";
import {SupportInfo} from "@/PageContent/ProductDetails/components/SupportInfo";
import {PageMargins} from "@/components/PageMargins";
import { ProductDescription } from './components/ProductDescription/ProductDescription';

interface IProductDetailsParams {
    product: IProduct;
    productLoading: boolean;
}

export default function ProductDetailsPageContent({product, productLoading = false}: IProductDetailsParams) {
    const { push } = useRouter();
    const {quantity, setQuantity, addToCart} = useProductCartControls(product);

    async function handleInstantBuy() {
        addToCart();

        await push(Routes.Cart);
    }

    function handleAddToCart() {
        addToCart();
    }

    return (
        <PageMargins>
            <Box display="flex">
                <Grid container spacing={1}>
                    <Grid item sm={6}>
                        <Box display="block">
                            <Box position="sticky" top="100px">
                                <ProductImageBlock product={product}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <PaperStyled elevation={1}>
                            <Box>
                                <ProductDescription
                                    product={product}
                                    handleInstantBuy={handleInstantBuy}
                                    handleAddToCart={handleAddToCart}
                                    quantity={quantity}
                                    onQuantityChange={setQuantity}/>
                                <ProductInfoTabs product={product} isLoadingProduct={productLoading} />
                            </Box>
                        </PaperStyled>
                    </Grid>
                </Grid>
            </Box>
        </PageMargins>
    );
};

const PaperStyled = styled(Paper)({
    width: "100%"
})