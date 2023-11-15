import {Box, Grid} from '@mui/material';
import {IProduct} from "@/api/DTO/products";
import {useProductCartControls} from "@/hooks/useProductCartControls";
import React from "react";
import {Routes} from "@/routes";
import {useRouter} from "next/router";
import {ProductInfoTabs} from "@/PageContent/ProductDetails/components/ProductInfoTabs";
import {PageMargins} from "@/components/PageMargins";
import { ProductDescription } from './components/ProductDescription/ProductDescription';
import {PaperStyled, StyledImageBlock } from './ProductDetailsPageContent.styles';

interface IProductDetailsParams {
    product: IProduct;
    productLoading: boolean;
}

export function ProductDetailsPageContent({product, productLoading = false}: IProductDetailsParams) {
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
                    <Grid item md={6} xs={12}>
                        <Box height="400px" width="100%">
                            <StyledImageBlock product={product}/>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <PaperStyled elevation={3}>
                            <Box paddingX={5} paddingY={3}>
                                <ProductDescription
                                    product={product}
                                    handleInstantBuy={handleInstantBuy}
                                    handleAddToCart={handleAddToCart}
                                    quantity={quantity}
                                    onQuantityChange={setQuantity}/>
                                <Box mt={3}>
                                    <ProductInfoTabs product={product} isLoadingProduct={productLoading} />
                                </Box>
                            </Box>
                        </PaperStyled>
                    </Grid>
                </Grid>
            </Box>
        </PageMargins>
    );
};