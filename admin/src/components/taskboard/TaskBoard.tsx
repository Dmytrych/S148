'use client'

import {ReactNode} from "react";
import {Box, Stack, styled} from "@mui/material";
import {Color} from "@/constants/color";
import {bodyHeight} from "@/constants/size";

export type Item = {
  id: string;
}

export type Column<TItem extends Item> = {
  id: string;
  items: TItem[];
}

export type RenderColumnCallback<TItem extends Item, TColumn extends Column<TItem>> = (column: TColumn) => ReactNode

const StyledStack = styled(Stack)(({ theme }) => ({
  height: bodyHeight,
  backgroundColor: Color.GlobalGreen40,
  overflow: "auto"
}))

type TaskBoardProps<TItem extends Item, TColumn extends Column<TItem>> = {
  columns: TColumn[];
  renderColumn: RenderColumnCallback<TItem, TColumn>;
}

const TaskBoard = <TItem extends Item, TColumn extends Column<TItem>>({ columns, renderColumn }: TaskBoardProps<TItem, TColumn>) => {

  return (
    <StyledStack direction="row" gap={1} p={4}>
      {columns.map((column) => (<Box key={column.id}>{renderColumn(column)}</Box>))}
    </StyledStack>
  )
}

export default TaskBoard;