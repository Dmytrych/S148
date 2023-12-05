import Image from "next/image"
import {Media} from "@/api/DTO/common/images";
import {getImageUrl} from "@/helpers/imageUrl";

interface Props {
  media: Media
}

const NextImage = ({media}: Props) => {
  const { url, alternativeText, width, height } = media

  return (
    <Image
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