import {Box, Tab, Tabs} from "@mui/material";
import {productPageLocale} from "@/locale/ua/productPage";
import {useState} from "react";
import {ProductDescription} from "@/page-content/ProductDetails/components/ProductDescription";
import {Product} from "@/api/DTO/products";
import {CharacteristicsTab} from "@/page-content/ProductDetails/components/CharacteristicsTab";

const tabs = [productPageLocale.description, productPageLocale.characteristics]

interface Props {
    product: Product;
}

export function ProductInfoTabs({product}: Props) {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <Box sx={{ minHeight: "200px" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTab} onChange={(e, value) => setSelectedTab(value)} aria-label="basic tabs example">
          { tabs.map((tab) => <Tab key={tab} label={tab} />) }
        </Tabs>
      </Box>
      <Box px={10}>
        {
          selectedTab === 0
            ? <ProductDescription description={product.attributes.description ?? ""} />
            : <CharacteristicsTab characteristics={product.attributes.characteristics}/>
        }
      </Box>
    </Box>
  )
}