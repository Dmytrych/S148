import {Box} from "@mui/material";
import {ThumbnailImage} from "@/components/product/ThumbnailImage";
import {noop} from "@/helpers/general";
import {HoverHighlightBox} from "@/components/product/ProductThumbnailImageList/ProductThumbnailImageList.styles";

interface Props {
    imageUrls: string[];
    onClick?: (url: string) => void;
}

export function ProductThumbnailImageList({ imageUrls, onClick = noop }: Props) {
    return (
        <Box display="flex" flexDirection="column" m={1} gap={1}>
            {
                imageUrls.map((imageUrl) => (
                    <HoverHighlightBox key={imageUrl} onClick={() => onClick(imageUrl)}>
                        <ThumbnailImage url={imageUrl} />
                    </HoverHighlightBox>
                ))
            }
        </Box>
    )
}