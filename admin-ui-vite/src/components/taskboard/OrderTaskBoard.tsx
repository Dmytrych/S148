'use client'

import TaskBoard from "@/components/taskboard/TaskBoard";
import OrderColumnComponent from "@/components/taskboard/OrderColumnComponent";
import OrderItemComponent from "@/components/taskboard/OrderItemComponent";
import {useMandatoryAuth} from "@/hooks/useMandatoryAuth";
import useSWR from "swr";
import {ApiRoutes} from "@/api/apiRoutes";
import {getOrders} from "@/api/orders";

const OrderTaskBoard = () => {
  useMandatoryAuth()

  const { data, isLoading } = useSWR(ApiRoutes.getOrdersUrl(), (url) => getOrders(url))

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
      id: "test4",
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
          id: "test-item2",
          title: "Order from smb",
          creationDate: new Date(),
          customerFullName: "Dmytro, Khabaznia",
          customerContact: "+38(073)-183-61-50",
          price: "100$"
        },
        {
          id: "test-item3",
          title: "Order from smb",
          creationDate: new Date(),
          customerFullName: "Dmytro, Khabaznia",
          customerContact: "+38(073)-183-61-50",
          price: "100$"
        },
        {
          id: "test-item4",
          title: "Order from smb",
          creationDate: new Date(),
          customerFullName: "Dmytro, Khabaznia",
          customerContact: "+38(073)-183-61-50",
          price: "100$"
        },
        {
          id: "test-item5",
          title: "Order from smb",
          creationDate: new Date(),
          customerFullName: "Dmytro, Khabaznia",
          customerContact: "+38(073)-183-61-50",
          price: "100$"
        }
      ]
    },
    {
      id: "test3",
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
      id: "test2",
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
  ]

  return (
    <TaskBoard
      columns={columns}
      renderColumn={(column) => <OrderColumnComponent column={column} renderItem={(item) => <OrderItemComponent item={item}/>}/>}/>
  )
}

export default OrderTaskBoard