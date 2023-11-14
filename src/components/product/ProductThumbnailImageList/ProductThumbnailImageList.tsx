import {Box} from "@mui/material";
import {noop} from "@/helpers/general";
import {
    HoverHighlightBox, ImageScroll,
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
                    <HoverHighlightBox key={imageUrl} onClick={() => onClick(imageUrl)} width="100%">
                        <ThumbnailProductImage imageUrl={imageUrl} />
                    </HoverHighlightBox>
                ))
            }
        </ImageScroll>
    )
}