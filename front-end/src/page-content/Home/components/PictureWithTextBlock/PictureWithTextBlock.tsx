import {Box, Grid} from "@mui/material";
import {TextWithImageBlock, TextWithImageVariants} from "@/api/DTO/common/contentBlocks/textWithImage";
import NextImage from "@/components/ProductCard/NextImage";
import {StyledMarkdown} from "@/page-content/Home/components/PictureWithTextBlock/PictureWithTextBlock.styles";

interface Props {
  block: TextWithImageBlock;
}

export function PictureWithTextBlock({ block }: Props) {
  const isPictureRight = block.variant === TextWithImageVariants.PictureRight;
  const textOrder = isPictureRight ? { xs: 2, md: 1 } : { xs: 2 };
  const photoOrder = isPictureRight ? { xs: 1, md: 2 } : { xs: 1 };

  return (
    <Grid container>
      <Grid item px={3} py={2} xs={12} md={6} order={textOrder}>
        <StyledMarkdown>
          {block.text}
        </StyledMarkdown>
      </Grid>
      <Grid item xs={12} md={6} order={photoOrder}>
        <Box height="fit-content">
          <NextImage media={block.image.data.attributes}/>
        </Box>
      </Grid>
    </Grid>
  )
}