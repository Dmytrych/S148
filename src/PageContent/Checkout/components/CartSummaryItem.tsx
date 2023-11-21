import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import React from 'react'
import { Box, styled } from '@mui/material'

interface ICartSummaryItemProps {
  name: string
  quantity: string
  price: string
  onRemoveProductClick: () => Promise<void> | void
}

export function CartSummaryItem ({ quantity, price, onRemoveProductClick, name }: ICartSummaryItemProps) {
  return (
        <Box>
            <Box>
                <DeleteOutlineOutlinedIcon color='error' onClick={onRemoveProductClick}/>
            </Box>
            <Box>
                {quantity}
            </Box>
            <Box>
                {price}₴
            </Box>
            <Box>
                {name}
            </Box>
        </Box>
  )
}

const CartSummaryItemContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row'
})
