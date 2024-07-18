import {Box} from "@mui/material";
import {useMemo, useState} from "react";
import {ApiImage} from "@/api/DTO/common/images";
import {ProductThumbnailImageList} from "@/components/product/ProductThumbnailImageList";
import {StyledProductImage} from "@/components/product/ProductPhotosDisplay/ProductPhotosDisplay.styles";
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
    <Box width="100%" height="100%">
      {itemImages.length ? (
        <Box display="flex" flexDirection="row" gap={1} height="100%">
          <Box flexBasis="100px" flexGrow="1">
            <ProductThumbnailImageList imageUrls={itemImages.map((url) => url.thumbnail)} onClick={handleThumbnailClick}/>
          </Box>
          <Box flexGrow="999">
            <StyledProductImage imageUrl={selectedImageUrl} priority />
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}

