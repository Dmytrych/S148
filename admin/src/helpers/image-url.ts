import {config} from "@/config";

export function getImageUrl(imageName?: string): string {
  return [config.imageProviderUrl, imageName].join('');
}