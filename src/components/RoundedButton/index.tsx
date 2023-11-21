import React from 'react'
import { Typography } from '@mui/material'

// const sizeToCssMapping = {
//   big: 'rounded-button-big',
//   medium: 'rounded-button-medium',
//   small: 'rounded-button-small'
// }
//
// const typeToCssMapping = {
//   normal: '',
//   success: 'rounded-button-success',
//   error: 'rounded-button-error'
// }

// { text, size = 'big', type = 'normal', disabled = false, onClick = noop }

export default function RoundedButton ({ text }: { text: string }) {
  // const sizeCss = sizeToCssMapping[size] ?? sizeToCssMapping['medium']
  // const typeCss = typeToCssMapping[type] ?? typeToCssMapping['normal']
  //
  // const handleClick = (event) => {
  //   if(!disabled){
  //     onClick(event)
  //   }
  // }
  //
  // return (
  //   <div className={`${disabled ? 'rounded-button-disabled' : 'rounded-button'} ${sizeCss} ${typeCss}`} onClick={handleClick}>
  //     {text}
  //   </div>
  // );
  return (<Typography>
    {text}
  </Typography>)
}
