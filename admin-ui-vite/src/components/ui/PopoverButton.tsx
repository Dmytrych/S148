import React, {ReactNode, useState} from "react";
import {Popover} from "@mui/material";

export type RenderButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled: boolean
}

export type RenderContentProps = {
  closePopover: () => void
}

export type PopoverButtonProps = {
  onClose: () => void;
  renderButton: (props: RenderButtonProps) => ReactNode;
  renderPopper: (props: RenderContentProps) => ReactNode;
}

export default function PopoverButton({ renderButton, renderPopper, onClose }: PopoverButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(true)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setIsOpen(false)
    onClose()
  }

  return (
    <>
      {renderButton({ onClick: handleButtonClick, disabled: isOpen })}
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {renderPopper({ closePopover: handleClose })}
      </Popover>
    </>
  )
}
