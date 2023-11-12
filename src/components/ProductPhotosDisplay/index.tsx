import {Box} from "@mui/material";
import ReactImageGallery, {ReactImageGalleryItem} from "react-image-gallery";
import {useMemo} from "react";
import {ApiImage} from "@/api/DTO/common/images";

interface Props {
  productImages?: ApiImage[];
}

export function ProductPhotosDisplay({ productImages }: Props) {
  const itemImages: ReactImageGalleryItem[] = useMemo(() => {
    if (!productImages) {
      return [];
    }

    return productImages.map((image) => ({
      thumbnail: image.attributes.formats.thumbnail.url,
      original: image.attributes.url,
    }));
  }, [productImages])

  return (
    <Box>
      <ReactImageGallery items={itemImages} lazyLoad/>
    </Box>
  )
}