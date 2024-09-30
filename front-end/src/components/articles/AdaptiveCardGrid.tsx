import {Box, Grid2, Stack} from "@mui/material";
import {ReactNode} from "react";

type AdaptiveCardGridProps<TItem> = {
  items: TItem[]
  renderItem: (item: TItem) => ReactNode
}

const AdaptiveCardGrid = <TItem extends object>({ items, renderItem }: AdaptiveCardGridProps<TItem>) => {
  return (
    <Grid2 container spacing={4}>
      {items.map((item, index) => (
        <Grid2 key={index} container size={{ xs: 12, sm: 6, md: 4 }} justifyContent="center">
          {renderItem(item)}
        </Grid2>
      ))}
    </Grid2>
  )
}

export default AdaptiveCardGrid