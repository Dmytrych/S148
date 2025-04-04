import {CmsModel} from "./common.ts";

export interface OptimizedImage {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path: string,
    width: number,
    height: number,
    size: number,
    url: string
}

export const imageFormats: ImageFormatName[] = ["small", "medium", "large"]

export type ImageFormatName =  "small" | "medium" | "large" | "thumbnail"

export type ApiImageAttributes = Media & {
    name: string,
    caption: string,
    formats: {
        thumbnail: OptimizedImage,
        large: OptimizedImage,
        medium: OptimizedImage,
        small: OptimizedImage
    },
    ext: string,
    mime: string,
    hash: string,
    size: number,
    previewUrl: string,
    provider: string,
    createdAt: string,
    updatedAt: string
}

export type Media = {
    url: string
    alternativeText: string
    width: number,
    height: number,
}

export type ApiImage = CmsModel<ApiImageAttributes>
