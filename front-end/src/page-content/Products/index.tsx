'use client'

import {PageMargins} from "@/components/PageMargins";
import {MainTitle} from "@/components/homePage/MainTitle";
import { Box } from '@mui/material';
import {useRef} from "react";
import ProductListing from "@/components/product/ProductListing";

export default function ProductsPageContent() {
  const productsBlockRef = useRef<HTMLDivElement>(null)

  const executeScroll = () => productsBlockRef.current && productsBlockRef.current.scrollIntoView({behavior: 'smooth'})

  return (
    <Box>
      <MainTitle onBuyClick={executeScroll} />
      <PageMargins>
        <Box ref={productsBlockRef}/>
        <ProductListing/>
      </PageMargins>
    </Box>
  );
}
