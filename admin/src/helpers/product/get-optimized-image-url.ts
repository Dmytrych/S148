import {ApiImage, ImageFormatName, imageFormats} from "@/api/DTO/common/images";

const findProductAttributes = (image: ApiImage, format: ImageFormatName) => {
  const foundEntry = Object.entries(image.attributes.formats).find((entry) => entry[0] === format)

  if (!foundEntry) {
    return;
  }

  return foundEntry[1].url
}

const findMostOptimalProductAttributes = (image: ApiImage, preferredFormat: ImageFormatName): string | undefined => {
  const url = findProductAttributes(image, preferredFormat)

  if (url) {
    return url
  }

  const formatIndex = imageFormats.indexOf(preferredFormat)

  if (formatIndex <= 0) {
    return undefined
  }

  return findMostOptimalProductAttributes(image, imageFormats[formatIndex - 1])
}


export const getOptimizedImageUrl = (image?: ApiImage, preferredFormat: ImageFormatName = "medium") => {
  if (!image?.attributes) {
    return;
  }

  if (!Object.entries(image.attributes.formats).length) {
    return image.attributes.url
  }

  const foundOptimizedFormat = findMostOptimalProductAttributes(image, preferredFormat)

  if (!foundOptimizedFormat) {
    return image.attributes.url
  }

  return foundOptimizedFormat
}