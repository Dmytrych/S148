import {config} from "../config.ts";

export function getImageUrl(imageName?: string): string {
  return [config.imageProviderUrl, imageName].join('');
}
