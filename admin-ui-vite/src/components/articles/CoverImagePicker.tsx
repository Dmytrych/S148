import PopoverFileSelect from "./PopoverFileSelect.tsx";
import {ApiImage} from "../../api/DTO/common/images.ts";
import {Box, Button, Stack, styled} from "@mui/material";
import {useEffect, useState} from "react";
import {constructSrcSet} from "../../utils/srcset-construction.ts";

type CoverImagePickerProps = {
  defaultSelectionId?: number;
  onSelect: (image: ApiImage) => void;
  images: ApiImage[];
}

const StyledImg = styled('img')({
  display: 'absolute',
  width: '100%',
  height: '100%',
})

export default function CoverImagePicker({ onSelect, images, defaultSelectionId }: CoverImagePickerProps) {
  const [image, setImage] = useState<ApiImage>();

  useEffect(() => {
    const image = images.find((image) => image.id === defaultSelectionId);
    setImage(image)
  }, [defaultSelectionId, images])

  const handleSelect = (image: ApiImage) => {
    setImage(image)
    onSelect?.(image);
  }

  return (
    <Stack direction="row" spacing={2}>
      { image ?
        (
          <Box position="relative" height="100px" width="100px">
            <StyledImg src={image.attributes.url} srcSet={constructSrcSet(image.attributes.formats)} alt={image.attributes.name}/>
          </Box>
        )
        : null }
      <PopoverFileSelect
        onSelect={handleSelect}
        images={images}
        renderButton={(props) => (
          <Button {...props}>Select Cover Image</Button>
        )}
      />
    </Stack>
  )
}
