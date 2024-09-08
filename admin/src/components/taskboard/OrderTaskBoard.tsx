'use client'

import TaskBoard from "@/components/taskboard/TaskBoard";
import OrderColumnComponent from "@/components/taskboard/OrderColumnComponent";
import OrderItemComponent from "@/components/taskboard/OrderItemComponent";

const OrderTaskBoard = () => {
    const columns = [
        {
            id: "test1",
            title: "Test",
            items: [
                {
                    id: "test-item1",
                    title: "Order from smb",
                    creationDate: new Date(),
                    customerFullName: "Dmytro, Khabaznia",
                    customerContact: "+38(073)-183-61-50",
                    price: "100$"
                }
            ]
        },
        {
            id: "test1",
            title: "Test",
            items: [
                {
                    id: "test-item1",
                    title: "Order from smb",
                    creationDate: new Date(),
                    customerFullName: "Dmytro, Khabaznia",
                    customerContact: "+38(073)-183-61-50",
                    price: "100$"
                },
                {
                    id: "test-item1",
                    title: "Order from smb",
                    creationDate: new Date(),
                    customerFullName: "Dmytro, Khabaznia",
                    customerContact: "+38(073)-183-61-50",
                    price: "100$"
                },
                {
                    id: "test-item1",
                    title: "Order from smb",
                    creationDate: new Date(),
                    customerFullName: "Dmytro, Khabaznia",
                    customerContact: "+38(073)-183-61-50",
                    price: "100$"
                }
            ]
        },
        {
            id: "test1",
            title: "Test",
            items: [
                {
                    id: "test-item1",
                    title: "Order from smb",
                    creationDate: new Date(),
                    customerFullName: "Dmytro, Khabaznia",
                    customerContact: "+38(073)-183-61-50",
                    price: "100$"
                }
            ]
        }
    ]

    return (
        <TaskBoard
            columns={columns}
            renderColumn={(column) => <OrderColumnComponent column={column} renderItem={(item) => <OrderItemComponent item={item}/>}/>}/>
    )
}

export default OrderTaskBoard