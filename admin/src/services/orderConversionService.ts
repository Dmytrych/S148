import {Item} from "@/components/taskboard/TaskBoard";
import {OrderDto, OrderRequestData} from "@/api/DTO/orders";

export type OrderItem = Item & {
  title: string
  creationDate?: Date
  customerFullName: string
  customerContact: string
  price: string
}

export function convertOrdersToCards() {

}

// function convertOrderToCard(order: OrderDto): OrderItem {
//   return {
//     id: order.id.toString(),
//   }
// }