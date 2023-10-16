import {Box, styled,} from '@mui/material';
import {IProduct} from "@/api/DTO/products";
import {useProductCartControls} from "@/hooks/useProductCartControls";
import React from "react";
import {Routes} from "@/routes";
import {useRouter} from "next/router";
import {ProductDisplay} from "@/PageContent/ProductDetails/components/ProductDisplay";
import {ProductInfoTabs} from "@/PageContent/ProductDetails/components/ProductInfoTabs";
import {SupportInfo} from "@/PageContent/ProductDetails/components/SupportInfo";

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
        <Box>
            <ContentSeparator>
                <Box flexGrow={9}>
                    <ProductDisplay
                        product={product}
                        handleInstantBuy={handleInstantBuy}
                        handleAddToCart={handleAddToCart}
                        quantity={quantity}
                        onQuantityChange={setQuantity}/>
                    <ProductInfoTabs product={product} isLoadingProduct={productLoading} />
                </Box>
                <Box flexGrow={1}>
                    <SupportInfo/>
                </Box>
            </ContentSeparator>
        </Box>
    );
};

const ContentSeparator = styled(Box)({
    margin: "30px 200px",
    display: "flex",
})