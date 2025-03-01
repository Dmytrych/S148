import React, {ReactNode, useState} from 'react'
import { Popover, TextField } from '@mui/material'

type RenderButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    disabled: boolean
}

type PopoverInputProps = {
    placeholder: string;
    onSubmit: (value: string) => void;
    getDefaultValue?: () => string;
    renderButton: (props: RenderButtonProps) => ReactNode;
}

const PopoverInput = ({
  placeholder = 'Enter text',
  onSubmit,
  getDefaultValue,
  renderButton
}: PopoverInputProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [inputValue, setInputValue] = useState('')

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(true)
    setInputValue(getDefaultValue ? getDefaultValue() : '')
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setInputValue('')
    setIsOpen(false)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleInputSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClose()
      onSubmit?.(inputValue)
    }
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
        <div style={{ padding: 4 }}>
          <TextField
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputSubmit}
            placeholder={placeholder}
            autoFocus
          />
        </div>
      </Popover>
    </>
  )
}

export default PopoverInput
