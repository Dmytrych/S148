'use client'

import {Column, Item} from "@/components/taskboard/TaskBoard";
import {Box, Divider, Stack, Typography, styled, Paper} from "@mui/material";
import {ReactNode} from "react";
import {OrderItem} from "@/components/taskboard/OrderItemComponent";
import {Color} from "@/constants/color";

export type OrderColumn = Column<OrderItem> & {
    title: string
}

export type RenderItemCallback<TItem extends Item> = (item: TItem) => ReactNode

export type DefaultColumnProps = {
    column: OrderColumn;
    renderItem: RenderItemCallback<OrderItem>
}

const OrderColumnComponent = ({ column, renderItem }: DefaultColumnProps) => {
  return (
    <Paper sx={{ bgcolor: Color.GlobalBlack5 }}>
      <Stack p={3} alignItems="center" minWidth="40px">
        <Typography variant="body1" color="primary">{column.title}</Typography>
      </Stack>
      <Divider/>
      <Stack direction="column" gap={2} p={4}>
        {column.items.map((item) => (<Box key={item.id}>{renderItem(item)}</Box>))}
      </Stack>
    </Paper>
  )
}

export default OrderColumnComponent