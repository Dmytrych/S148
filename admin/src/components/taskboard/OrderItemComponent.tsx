'use client'

import {
  Button,
  Card,
  CardActions,
  CardHeader, Chip,
  Typography
} from "@mui/material";
import {formatRelative} from "date-fns";
import {OrderItem} from "@/services/orderConversionService";

export type DefaultItemProps = {
    item: OrderItem
}

const OrderItemComponent = ({ item }: DefaultItemProps) => {
  return (
    <Card sx={{ minWidth: "300px", p: 1 }}>
      <CardHeader
        avatar={
          <Chip label={item.price} sx={{ width: "100%" }} />
        }
        title={
          <Typography variant="body1">
            {item.customerFullName}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="secondary">
            {item.creationDate ? formatRelative(item.creationDate, new Date()) : ""}
          </Typography>
        }/>
      <CardActions disableSpacing>
        <Button fullWidth color="primary">Process</Button>
      </CardActions>
    </Card>
  )
}

export default OrderItemComponent