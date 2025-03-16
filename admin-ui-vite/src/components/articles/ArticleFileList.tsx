import {ApiImage} from "../../api/DTO/common/images.ts";
import {ImageList, ImageListItem} from "@mui/material";
import {constructSrcSet} from "../../utils/srcset-construction.ts";

type ArticleFileListProps = {
  images: ApiImage[]
}

export default function ArticleFileList({ images }: ArticleFileListProps) {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={constructSrcSet(item.attributes.formats)}
            src={item.attributes.url}
            alt={item.attributes.name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
