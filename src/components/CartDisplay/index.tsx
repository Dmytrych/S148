import {Box, styled, Typography} from "@mui/material";
import {CartProduct} from "@/interfaces/cart/CartProduct";
import Image from "next/image";
import ImageBox from "@/components/ImageBox";

interface IProps {
  products: CartProduct[];
}

export function CartDisplay({products}: IProps) {
  return (<Box>
    {products.map((product, index) => (<Box key={index}>
      <Box>
        <ImageBox imageName={product.options.image} />
      </Box>
      <Box>
        <Box>
          <Typography>ProductName</Typography>
        </Box>
        <Box>
          <Box>
            <Typography>PlusMinus</Typography>
          </Box>
          <Box>
            <Typography>Price</Typography>
          </Box>
        </Box>
      </Box>
    </Box>))}
  </Box>)
}

const ProductImage = styled(Image)({
  width: "96px",
  height: "96px",
})