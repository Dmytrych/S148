import React from 'react';
import {noop} from "next/dist/client/components/react-dev-overlay/internal/helpers/noop-template";
import {Button, Typography} from "@mui/material";
import Link from "next/link";

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

export default function RoundedButton({text}: {text: string}) {
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