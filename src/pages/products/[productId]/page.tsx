import ProductDetails from "@/PageContent/ProductDetails";
import {useEffect} from "react";
import {redirect} from "next/navigation";

interface IProductDetailsPageParams {
    params: {
        productId?: string;
    }
}

export default function ProductDetailsPage({ params: { productId }}: IProductDetailsPageParams) {
    if (!productId){
        return <div>Item not found</div>
    }

    return (<ProductDetails productId={productId} />)
}