import {TextWithImageBlock} from "@/api/DTO/common/contentBlocks/textWithImage";
import {CmsData, CmsModel} from "@/api/DTO/common/common";

export type HomePageData = {
  id: number;
  blocks: TextWithImageBlock[];
}

export type HomePageResponse = CmsData<CmsModel<HomePageData>>;