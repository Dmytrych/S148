import ProductsGrid from "@/page-content/Products/ProductsGrid";
import {ErrorBoundary} from "react-error-boundary";
import {locale} from "@/locale/ua";

const ProductListing = () => {
  return (
    <ErrorBoundary fallback={<div>{locale.unexpected_error_occurred}</div>}>
      <ProductsGrid/>
    </ErrorBoundary>
  )
}

export default ProductListing