import {Alert, Box, Button, IconButton, Snackbar, Stack, Typography} from "@mui/material";
import {productPageLocale} from "@/locale/ua/productPage";
import {PriceTag} from "@/components/PriceTag";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {locale} from "@/locale/ua";
import {Product} from "@/api/DTO/products";
import {getProductAvailabilityString} from "@/helpers/product/get-product-availability-string";
import {useState} from "react";

interface ProductDescriptionProps {
    product: Product;
    handleInstantBuy: () => void;
    handleAddToCart: () => void;
}

export function ProductDescription({ product, handleInstantBuy, handleAddToCart }: ProductDescriptionProps) {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const availability = getProductAvailabilityString(product.attributes.inStock);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  const handleAddToCartCb = () => {
    setSnackbarOpen(true)
    handleAddToCart()
  }

  return (
    <Box>
      <Typography variant="h3">{product.attributes.name}</Typography>
      <Typography variant="body2" color="secondary">{productPageLocale.code}: {product.attributes.code}</Typography>
      <Typography variant="body2" color="secondary">{availability}</Typography>
      <PriceTag price={product.attributes.price} size="large" />
      <Stack direction="row" flexWrap="wrap" gap={1}>
        <Button variant="contained" color="primary" size="large" onClick={handleInstantBuy} sx={{ width: "150px" }}>
          {locale.buy}
        </Button>
        <IconButton onClick={handleAddToCartCb} color="primary">
          <AddShoppingCartIcon fontSize="inherit"/>
        </IconButton>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        autoHideDuration={1000}>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {locale.add_to_cart_success_message}
        </Alert>
      </Snackbar>
    </Box>
  )
}