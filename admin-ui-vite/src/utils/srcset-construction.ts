import {getImageUrl} from "./image-url.ts";

type ImageFormat = {
  url: string;
  width: number;
};

type Formats = Record<string, ImageFormat | undefined>;

export function constructSrcSet(formats: Formats): string {
  return Object.values(formats)
    .filter((format): format is ImageFormat => !!format)
    .sort((a, b) => a.width - b.width)
    .map(({ url, width }) => `${getImageUrl(url)} ${width}w`)
    .join(", ");
}
