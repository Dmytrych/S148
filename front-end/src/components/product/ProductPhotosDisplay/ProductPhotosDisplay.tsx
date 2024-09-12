import {useMemo} from "react";
import {ApiImage, ImageFormatName} from "@/api/DTO/common/images";
import ImageGallery, {ReactImageGalleryItem} from "react-image-gallery";
import {Box, styled} from "@mui/material";
import {getOptimizedImageUrl} from "@/helpers/product/get-optimized-image-url";

const getProductImageUrl = (image: ApiImage, preferredFormat: ImageFormatName) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_PROVIDER_URL}${getOptimizedImageUrl(image, preferredFormat)}`
}

interface Props {
    productImages?: ApiImage[];
}

const GalleryStylesOverrides = styled(Box)({
  '& .image-gallery-content:not(.fullscreen) .image-gallery-image': {
    height: "400px",
    padding: "0px 1px" // Is needed so that the beginning of the next image is not shown
  },
})

export function ProductPhotosDisplay({ productImages }: Props) {
  const itemImages: ReactImageGalleryItem[] = useMemo(() => {
    if (!productImages || !productImages.length) {
      return [];
    }

    return productImages.map((image) => ({
      thumbnail: getProductImageUrl(image, "thumbnail"),
      original: getProductImageUrl(image, "medium"),
    }));
  }, [productImages])

  return (
    <GalleryStylesOverrides>
      <ImageGallery
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={true}
        slideDuration={370}
        thumbnailPosition="left"
        lazyLoad
        items={itemImages}
      />
    </GalleryStylesOverrides>
  )
}

