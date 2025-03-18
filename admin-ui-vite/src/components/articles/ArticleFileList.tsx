import {ApiImage} from "../../api/DTO/common/images.ts";
import {ImageList, ImageListItem, ImageListItemBar, styled} from "@mui/material";
import {constructSrcSet} from "../../utils/srcset-construction.ts";
import {getImageUrl} from "../../utils/image-url.ts";

type ArticleFileListProps = {
  images: ApiImage[];
  onClick: (image: ApiImage) => void;
}

const StyledImageListItem = styled(ImageListItem)({
  ":hover": {
    opacity: '70%',
  },
  cursor: 'pointer',
})

export default function ArticleFileList({ images, onClick }: ArticleFileListProps) {
  return (
    <ImageList cols={4}>
      {images.map((item) => (
        <StyledImageListItem key={item.id} onClick={() => onClick(item)}>
          <img
            srcSet={constructSrcSet(item.attributes.formats)}
            src={getImageUrl(item.attributes.url)}
            alt={item.attributes.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.attributes.name}
            subtitle='image'
          />
        </StyledImageListItem>
      ))}
    </ImageList>
  )
}
