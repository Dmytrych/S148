import Image, {ImageProps} from "next/image"
import {Media} from "@/api/DTO/common/images";
import {getImageUrl} from "@/helpers/image-url";

interface Props extends Partial<ImageProps> {
  media: Media
}

const NextImage = ({media, ...props}: Props) => {
  const { url, alternativeText, width, height } = media

  return (
    <Image
      {...props}
      loader={(props) => getImageUrl(props.src)}
      layout="responsive"
      objectFit="contain"
      width={width}
      height={height}
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default NextImage