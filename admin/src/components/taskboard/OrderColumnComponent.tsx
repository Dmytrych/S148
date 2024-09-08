'use client'

import {Column, RenderItemCallback} from "@/components/taskboard/TaskBoard";
import {Box, Divider, Paper, Stack, Typography} from "@mui/material";
import OrderItemComponent from "@/components/taskboard/OrderItemComponent";

export type OrderColumn = Column<OrderItemComponent> & {
    title: string
}

export type DefaultColumnProps = {
    column: OrderColumn;
    renderItem: RenderItemCallback<OrderItemComponent>
}

const OrderColumnComponent = ({ column, renderItem }: DefaultColumnProps) => {
    return (
        <Paper elevation={3}>
            <Stack p={2} alignItems="center">
                <Typography variant="body1" color="primary">{column.title}</Typography>
            </Stack>
            <Divider/>
            <Stack direction="column" gap={2} p={2}>
                {column.items.map((item) => (<Box key={item.id}>{renderItem(item)}</Box>))}
            </Stack>
        </Paper>
    )
}

export default OrderColumnComponent