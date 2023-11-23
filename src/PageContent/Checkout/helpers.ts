import {IOrderFormFields} from "@/PageContent/Checkout/hooks/useOrderForm";
import {createOrderApi} from "@/api/orders";
import {ApiRoutes} from "@/api/apiRoutes";
import {IOrder} from "@/api/DTO/orders";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";

export function createOrderFromFormValues(values: IOrderFormFields, cart: CartProductInfo[]): Promise<IOrder> {
  const dataModel = {
    customerInfo: {
      name: values.name,
      surname: values.surname,
      phoneNumber: values.phoneNumber,
      email: values.email,
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

  return createOrderApi(ApiRoutes.Orders, dataModel);
}