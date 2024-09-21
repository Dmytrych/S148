import {IconButton, Stack} from "@mui/material";
import {Facebook, Instagram} from "@mui/icons-material";

const SOCIAL_MEDIA_LINKS = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_LINK ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_LINK ?? "",
};

export function Socials() {
  return (
    <Stack direction="row" justifyContent="center">
      <IconButton
        size="large"
        href={SOCIAL_MEDIA_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook color="primary" transform="scale(1.5)" />
      </IconButton>
      <IconButton
        size="large"
        href={SOCIAL_MEDIA_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram color="primary" transform="scale(1.5)" />
      </IconButton>
    </Stack>
  )
}