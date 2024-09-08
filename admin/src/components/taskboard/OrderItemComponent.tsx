'use client'

import {
    Button,
    Card,
    CardActions,
    CardHeader, Chip,
    Typography
} from "@mui/material";
import {Item} from "@/components/taskboard/TaskBoard";
import {formatRelative} from "date-fns";

export type OrderItem = Item & {
    title: string
    creationDate?: Date
    customerFullName: string
    customerContact: string
    price: string
}

export type DefaultItemProps = {
    item: OrderItem
}

const OrderItemComponent = ({ item }: DefaultItemProps) => {
    return (
        <Card>
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
                <Button>Process</Button>
            </CardActions>
        </Card>
    )
    // return (
    //     <Paper elevation={3}>
    //         <Stack direction="column">
    //             <Box p={2}>
    //                 <Typography variant="subtitle2" color="secondary">Id: {item.id}</Typography>
    //                 <Chip label={item.price} sx={{ width: "100%" }}/>
    //             </Box>
    //             <Divider/>
    //             <Stack direction="column" p={2} gap={1}>
    //                 <Box>
    //                     <Stack direction="row">
    //                         <PersonIcon color="primary"/>
    //                         <Typography variant="body1" color="primary">{item.customerFullName}</Typography>
    //                     </Stack>
    //                     <Link href={`tel:${item.customerContact}`}>
    //                         <Typography variant="body2">{item.customerContact}</Typography>
    //                     </Link>
    //                 </Box>
    //                 <Button>Process</Button>
    //             </Stack>
    //         </Stack>
    //     </Paper>
    // )
}

export default OrderItemComponent