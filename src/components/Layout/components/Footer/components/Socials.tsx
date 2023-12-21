import {IconButton, Stack} from "@mui/material";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";

const SOCIAL_MEDIA_LINKS = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_LINK ?? "",
  twitter: process.env.NEXT_PUBLIC_TWITTER_LINK ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_LIMK ?? "",
};

export function Socials() {
  return (
    <Stack direction="row" justifyContent="center">
      <IconButton
        href={SOCIAL_MEDIA_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </IconButton>
      <IconButton
        href={SOCIAL_MEDIA_LINKS.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </IconButton>
      <IconButton
        href={SOCIAL_MEDIA_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </IconButton>
    </Stack>
  )
}