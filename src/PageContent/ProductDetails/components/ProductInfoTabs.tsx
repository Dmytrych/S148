import {Box, Tab, Tabs} from "@mui/material";
import {productPageLocale} from "@/locale/ua/productPage";
import {useState} from "react";
import {ProductDescription} from "@/PageContent/ProductDetails/components/ProductDescription";
import {IProduct} from "@/api/DTO/products";

const tabs = [productPageLocale.description, productPageLocale.characteristics]

interface Props {
    product: IProduct;
    isLoadingProduct: boolean;
}

export function ProductInfoTabs({product, isLoadingProduct}: Props) {
    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={selectedTab} onChange={(e, value) => setSelectedTab(value)} aria-label="basic tabs example">
                    { tabs.map((tab) => <Tab label={tab} />) }
                </Tabs>
            </Box>
            <Box px={10}>
                {
                    selectedTab === 0
                        ? <ProductDescription description={product.description?.full ?? ""} isLoading={isLoadingProduct} />
                        : <div>Характеристики</div>
                }
            </Box>
        </Box>
    )
}