import {noop} from "@/helpers/general";
import {
  ImageOutlinedBox,
  ImageScroll,
  ThumbnailProductImage
} from "@/components/product/ProductThumbnailImageList/ProductThumbnailImageList.styles";

interface Props {
    imageUrls: string[];
    onClick?: (url: string) => void;
}

export function ProductThumbnailImageList({ imageUrls, onClick = noop }: Props) {
  return (
    <ImageScroll>
      {
        imageUrls.map((imageUrl) => (
          <ImageOutlinedBox key={imageUrl} onClick={() => onClick(imageUrl)}>
            <ThumbnailProductImage imageUrl={imageUrl} priority />
          </ImageOutlinedBox>
        ))
      }
    </ImageScroll>
  )
}