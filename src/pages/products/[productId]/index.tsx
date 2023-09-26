import ProductDetails from "@/PageContent/ProductDetails";
import {useMemo} from "react";
import {useProducts} from "@/hooks/useProducts";

interface IProductDetailsPageParams {
    params: {
        productCode?: string;
    }
}

export default function ProductDetailsPage({ params: { productCode }}: IProductDetailsPageParams) {
    const { data: products} = useProducts();

    const foundItem = useMemo(() => {
        return products?.find(product => product.code === productCode);
    }, [products, productCode]);

    if (!foundItem){
        return <div>Item not found</div>
    }

    return (<ProductDetails product={foundItem} />)
}