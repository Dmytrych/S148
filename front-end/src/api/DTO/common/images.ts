import {CmsModel} from "@/api/DTO/common/common";

export interface ImageThumbnail {
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

export type ApiImageAttributes = Media & {
    name: string,
    caption: string,
    formats: {
        thumbnail: ImageThumbnail,
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

export interface ApiImage extends CmsModel<ApiImageAttributes> {}