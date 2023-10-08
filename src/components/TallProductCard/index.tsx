import {Box, Button, IconButton, Paper, styled, Typography} from '@mui/material';
import ImageBox from '../ImageBox';
import Link from "next/link";
import {IProduct} from "@/api/DTO/products";
import {PriceTag, Size} from "@/components/PriceTag";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Color} from "@/constants/color";
import {locale} from "@/locale/ua";

interface IProps {
    product: IProduct;
    onAddToCart?: () => void;
}

function TallProductCard({ product, onAddToCart }: IProps) {
  return (
    <Container elevation={4}>
      <ImageContainer>
        <ImageBox imageName={product.options.image} />
      </ImageContainer>
      <Box display="flex" flexDirection="column" flexGrow="1">
        <ProductText>
          <Link href={`/products/${product.code}`}>
            {product.name}
          </Link>
        </ProductText>
        <ProductPriceBox>
          <PriceTag value={product.price.base.toString()} size={Size.Big}/>
        </ProductPriceBox>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="end" flexGrow="1" mb="30px">
          <Box>
            <Typography variant="body2">Готовий до відправлення</Typography>
          </Box>
          <Box>
            <Button>{locale.buy}</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default TallProductCard;

const Container = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
  width: '20rem',
  padding: '10px',
  border: `1px solid ${theme.palette.border.main}`,
  borderRadius: "10px",
}));

const ImageContainer = styled('div')({
  height: '50%',
  width: '100%',
  backgroundColor: 'white',
});

const ProductText = styled('span')({
  display: 'block',
  overflow: 'hidden',
  wordBreak: 'break-all',
  textOverflow: 'ellipsis',
  margin: '10px 10px 0px 5px',
});

const ProductPriceBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});
