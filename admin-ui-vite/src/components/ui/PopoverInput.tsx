import React, {ReactNode, useState} from 'react'
import { TextField } from '@mui/material'
import PopoverButton, {RenderButtonProps, RenderContentProps} from "./PopoverButton.tsx";

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
  const [inputValue, setInputValue] = useState('')

  const getHandleButtonClick = (props: RenderButtonProps) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      setInputValue(getDefaultValue ? getDefaultValue() : '')
      props.onClick(event)
    }
  }

  const handleClose = () => {
    setInputValue('')
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const getHandleInputSubmit = (props: RenderContentProps) => {
    return (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleClose()
        props.closePopover()
        onSubmit?.(inputValue)
      }
    }
  }

  return (
    <PopoverButton
      onClose={handleClose}
      renderButton={(props) => renderButton({ onClick: getHandleButtonClick(props), disabled: props.disabled })}
      renderPopper={(props) => (
        <div style={{padding: 4}}>
          <TextField
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={getHandleInputSubmit(props)}
            placeholder={placeholder}
            autoFocus
          />
        </div>
      )}
    />
  )
}

export default PopoverInput
