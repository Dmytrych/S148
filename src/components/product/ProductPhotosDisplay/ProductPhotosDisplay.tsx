import {Box} from "@mui/material";
import {useMemo, useState} from "react";
import {ApiImage} from "@/api/DTO/common/images";
import ProductImage from "@/components/ProductImage/ProductImage";
import {ProductThumbnailImageList} from "@/components/product/ProductThumbnailImageList";
import {ImageScroll} from "@/components/product/ProductPhotosDisplay/ProductPhotosDisplay.styles";
import {ProductImageUrl} from "@/interfaces/product/ProductImageUrl";

interface Props {
    productImages?: ApiImage[];
    loading?: boolean;
}

export function ProductPhotosDisplay({ productImages, loading = false }: Props) {
    const itemImages: ProductImageUrl[] = useMemo(() => {
        if (!productImages || !productImages.length) {
            return [];
        }

        return productImages.map((image) => ({
            thumbnail: image.attributes.formats.thumbnail.url,
            original: image.attributes.url,
        }));
    }, [productImages])

    const [selectedImageUrl, setSelectedImageUrl] = useState(itemImages[0].original);

    const handleThumbnailClick = (thumbnailUrl: string) => {
        const selectedImage = itemImages.find((image) => image.thumbnail === thumbnailUrl);

        if (!selectedImage) {
            return;
        }

        setSelectedImageUrl(() => selectedImage.original);
    }

    return (
        <Box>
            {itemImages.length ? (
                <Box display="flex" flexDirection="row" height="400px">
                    <ImageScroll>
                        <ProductThumbnailImageList imageUrls={itemImages.map((url) => url.thumbnail)} onClick={handleThumbnailClick}/>
                    </ImageScroll>
                    <ProductImage imageUrl={selectedImageUrl} width="400px" height="400px" />
                </Box>
            ) : null}
        </Box>
    )
}