import {PageMargins} from "@/components/PageMargins";
import {MainTitle} from "@/components/homePage/MainTitle";
import { Box } from '@mui/material';
import {useRef} from "react";
import ProductListing from "@/components/product/ProductListing";

export default function ProductsPageContent() {
  return (
    <Box>
      <MainTitle />
      <PageMargins>
        <ProductListing/>
      </PageMargins>
    </Box>
  );
}
