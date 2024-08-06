import {useMemo} from "react";
import {ApiImage} from "@/api/DTO/common/images";
import ImageGallery, {ReactImageGalleryItem} from "react-image-gallery";
import {Box, styled} from "@mui/material";

const getProductImageUrl = (imageUrl: string) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_PROVIDER_URL}${imageUrl}`
}

interface Props {
    productImages?: ApiImage[];
}

const GalleryStylesOverrides = styled(Box)({
  '& .image-gallery-content:not(.fullscreen) .image-gallery-image': {
    minHeight: "400px",
    maxHeight: "300px",
    padding: "0px 1px" // Is needed so that the beginning of the next image is not shown
  },
})

export function ProductPhotosDisplay({ productImages }: Props) {
  const itemImages: ReactImageGalleryItem[] = useMemo(() => {
    if (!productImages || !productImages.length) {
      return [];
    }

    return productImages.map((image) => ({
      thumbnail: getProductImageUrl(image.attributes.formats.thumbnail.url),
      original: getProductImageUrl(image.attributes.url),
    }));
  }, [productImages])

  return (
    <GalleryStylesOverrides>
      <ImageGallery
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={true}
        slideDuration={550}
        thumbnailPosition="left"
        lazyLoad
        items={itemImages}
      />
    </GalleryStylesOverrides>
  )
}

