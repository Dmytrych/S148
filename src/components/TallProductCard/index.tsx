import {Box, Button, Paper, styled, Typography} from '@mui/material';
import Link from "next/link";
import {PriceTag} from "@/components/PriceTag";
import {locale} from "@/locale/ua";
import Markdown from "react-markdown";
import {getProductPageRoute} from "@/helpers/links";
import {IProduct} from "@/api/DTO/products";
import ProductImage from '@/components/ProductImage/ProductImage';

interface IProps {
    product: IProduct;
    onBuyClick?: () => void;
}

function TallProductCard({product, onBuyClick}: IProps) {
    return (
        <Container elevation={4}>
            {product.attributes.images?.data[0]?.id ? (
                <ImageContainer>
                    <ProductImage image={product.attributes.images?.data[0]} width="100%" height="100%"/>
                </ImageContainer>
            ) : null}
            <Box display="flex" flexDirection="column" flexGrow="1">
                <Box>
                    <ProductText>
                        <Link href={getProductPageRoute(product.attributes.code)}>
                            {product.attributes.name}
                        </Link>
                    </ProductText>
                </Box>
                <ProductPriceBox>
                    <PriceTag price={product.attributes.price} />
                </ProductPriceBox>
                <Box>
                    <StyledMarkdown>
                        {product.attributes.shortDescription}
                    </StyledMarkdown>
                </Box>
                <Box flexGrow="1" display="flex" flexDirection="column" justifyContent="flex-end">
                    <Box display="flex">
                        <Typography color={theme => theme.palette.text.secondary}
                                    variant="body2">{locale.ready_for_shipment}</Typography>
                    </Box>
                    <Box display="flex">
                        <LongButton variant="contained" onClick={onBuyClick}>{locale.buy}</LongButton>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default TallProductCard;

const StyledMarkdown = styled(Markdown)({
    whiteSpace: "pre-wrap",
    wordBreak: "break-all"
})

const LongButton = styled(Button)({
    width: "100%"
});

const Container = styled(Paper)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    width: '20rem',
    padding: '16px 16px 24px 16px',
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
