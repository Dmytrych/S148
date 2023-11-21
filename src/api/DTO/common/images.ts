import { type CmsModel } from '@/api/DTO/common/common'

export interface ImageThumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: string
  width: number
  height: number
  size: number
  url: string
}

export interface ApiImageAttributes {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: {
    thumbnail: ImageThumbnail
  }
  ext: string
  mime: string
  hash: string
  size: number
  url: string
  previewUrl: string
  provider: string
  createdAt: string
  updatedAt: string
}

export interface ApiImage extends CmsModel<ApiImageAttributes> {}
