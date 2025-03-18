import PopoverButton, {RenderButtonProps, RenderContentProps} from "../ui/PopoverButton.tsx";
import {ApiImage} from "../../api/DTO/common/images.ts";
import {ReactNode} from "react";
import ArticleFileList from "./ArticleFileList.tsx";

type PopoverFileSelect = {
  images: ApiImage[];
  renderButton: (props: RenderButtonProps) => ReactNode;
  onSelect: (file: ApiImage) => void
}

export default function PopoverFileSelect({ onSelect, renderButton, images }: PopoverFileSelect) {
  const getHandleSelection = (props: RenderContentProps) => {
    return (image: ApiImage) => {
      onSelect(image)
      props.closePopover()
    }
  }

  return (
    <PopoverButton
      onClose={() => {}}
      renderButton={renderButton}
      renderPopper={(props) => (
        <ArticleFileList
          images={images}
          onClick={getHandleSelection(props)}
        />
      )}
    />
  )
}
