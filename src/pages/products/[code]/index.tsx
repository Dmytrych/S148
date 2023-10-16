import {useMemo} from "react";
import {useProducts} from "@/hooks/useProducts";
import {useRouter} from "next/router";
import ProductDetailsPageContent from "@/PageContent/ProductDetails";

export default function ProductDetailsPage() {
    const router = useRouter();
    const { data: products, isLoading} = useProducts();

    const foundItem = useMemo(() => {
        if (isLoading) {
            return undefined;
        }

        return products?.find(product => product.code === router.query.code);
    }, [products, isLoading, router.query.code]);

    return foundItem ? (
        <ProductDetailsPageContent product={foundItem} productLoading={isLoading}/>
    ) : (
        <div>Item not found</div>
    )
}