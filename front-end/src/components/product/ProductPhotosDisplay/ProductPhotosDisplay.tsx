import {useMemo} from "react";
import {ApiImage, ImageFormatName} from "@/api/DTO/common/images";
import ImageGallery, {ReactImageGalleryItem} from "react-image-gallery";
import {styled, useMediaQuery, useTheme} from "@mui/material";
import {getOptimizedImageUrl} from "@/helpers/product/get-optimized-image-url";

const getProductImageUrl = (image: ApiImage, preferredFormat: ImageFormatName) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_PROVIDER_URL}${getOptimizedImageUrl(image, preferredFormat)}`
}

interface Props {
    productImages?: ApiImage[];
}

const StyledImageGallery = styled(ImageGallery)({
  '& .image-gallery-content:not(.fullscreen) .image-gallery-image': {
    height: "400px",
    padding: "0px 1px" // Is needed so that the beginning of the next image is not shown
  },
})

export function ProductPhotosDisplay({ productImages }: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const itemImages: ReactImageGalleryItem[] = useMemo(() => {
    if (!productImages || !productImages.length) {
      return [];
    }

    return productImages.map((image) => ({
      thumbnail: getProductImageUrl(image, "thumbnail"),
      original: getProductImageUrl(image, "medium"),
      originalAlt: `${image.attributes.name} Medium`,
      thumbnailAlt: `${image.attributes.name} Thumbnail`
    }));
  }, [productImages])

  const showThumbnails = !isSmallScreen && !!productImages?.length && productImages?.length > 1;

  return (
    <StyledImageGallery
      showFullscreenButton={false}
      showPlayButton={false}
      showThumbnails={showThumbnails}
      slideDuration={370}
      thumbnailPosition={showThumbnails ? "bottom" : undefined}
      lazyLoad
      items={itemImages}
    />
  )
}

