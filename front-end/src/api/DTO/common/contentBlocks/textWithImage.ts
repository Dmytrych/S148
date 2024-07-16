import {ApiImage} from "@/api/DTO/common/images";
import {CmsData} from "@/api/DTO/common/common";

export enum TextWithImageVariants {
  PictureLeft = "pictureLeft",
  PictureRight = "pictureRight"
}

export type TextWithImageBlock = {
  id: number;
  text: string;
  variant: TextWithImageVariants;
  image: CmsData<ApiImage>;
}