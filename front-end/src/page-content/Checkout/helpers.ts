import {IOrderFormFields} from "@/page-content/Checkout/hooks/useOrderForm";
import {createOrder} from "@/api/orders";
import {ApiRoutes} from "@/api/apiRoutes";
import {IOrder} from "@/api/DTO/orders";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";

export function createOrderFromFormValues(values: IOrderFormFields, cart: CartProductInfo[]): Promise<IOrder> {
  const dataModel = {
    customerInfo: {
      name: values.name,
      surname: values.surname,
      phoneNumber: values.phoneNumber,
    },
    items: cart.map((cartProduct) => ({
      product: cartProduct.productId,
      quantity: cartProduct.quantity,
      price: cartProduct.product.attributes.price,
    })),
    deliveryInfo: {
      deliveryLocation: values.description,
    }
  };

  return createOrder(ApiRoutes.ordersUrl(), dataModel);
}