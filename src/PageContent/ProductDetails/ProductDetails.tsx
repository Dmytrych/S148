import {Box,} from '@mui/material';
import {IProduct} from "@/api/DTO/products";
import {useProductCartControls} from "@/hooks/useProductCartControls";
import {ProductDisplay} from "@/PageContent/ProductDetails/ProductDisplay";
import React from "react";
import {Routes} from "@/routes";
import {useRouter} from "next/router";

interface IProductDetailsParams {
    product: IProduct;
}

const ProductDetails = ({product}: IProductDetailsParams) => {
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
            <Box sx={{
                margin: "0px 90px"
            }}>
                <ProductDisplay
                    product={product}
                    handleInstantBuy={handleInstantBuy}
                    handleAddToCart={handleAddToCart}
                    quantity={quantity}
                    onQuantityChange={setQuantity}/>
            </Box>
        </Box>
    );
};

export default ProductDetails;