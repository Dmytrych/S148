'use client'

import {ReactNode} from "react";
import {Box, Stack} from "@mui/material";

export type Item = {
  id: string;
}

export type Column<TItem extends Item> = {
  id: string;
  items: TItem[];
}

export type RenderColumnCallback<TItem extends Item, TColumn extends Column<TItem>> = (column: TColumn) => ReactNode

type TaskBoardProps<TItem extends Item, TColumn extends Column<TItem>> = {
  columns: TColumn[];
  renderColumn: RenderColumnCallback<TItem, TColumn>;
}

const TaskBoard = <TItem extends Item, TColumn extends Column<TItem>>({ columns, renderColumn }: TaskBoardProps<TItem, TColumn>) => {

    return (
        <Stack direction="row" gap={1}>
            {columns.map((column) => (<Box key={column.id}>{renderColumn(column)}</Box>))}
        </Stack>
    )
}

export default TaskBoard;