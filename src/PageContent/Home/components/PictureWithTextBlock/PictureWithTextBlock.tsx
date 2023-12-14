import {Box, Grid, Stack} from "@mui/material";
import {TextWithImageBlock} from "@/api/DTO/common/contentBlocks/textWithImage";
import NextImage from "@/components/ProductCard/NextImage";
import {StyledMarkdown} from "@/PageContent/Home/components/PictureWithTextBlock/PictureWithTextBlock.styles";

interface Props {
  block: TextWithImageBlock;
}

export function PictureWithTextBlock({ block }: Props) {
  return (
    <Grid container>
      <Grid item px={3} py={2} xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        <StyledMarkdown>
          {block.text}
        </StyledMarkdown>
      </Grid>
      <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
        <NextImage media={block.image.data.attributes}/>
      </Grid>
    </Grid>
  )
}