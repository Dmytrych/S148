import {config} from "@/config";

export function getImageUrl(imageName: string) {
    return `${config.imageProviderUrl}${imageName}`;
}