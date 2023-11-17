import {IOrderFormFields} from "@/PageContent/Checkout/hooks/useOrderForm";
import {createOrderApi} from "@/api/orders";
import {ApiRoutes} from "@/api/apiRoutes";
import {ICartSelection} from "@/contexts/CartContext";
import {IOrder} from "@/api/DTO/orders";

export function createOrderFromFormValues(values: IOrderFormFields, cart: ICartSelection[]): Promise<IOrder> {
  const dataModel = {
    customerInfo: {
      name: values.name,
      surname: values.surname,
      middleName: values.middleName,
      phoneNumber: values.phoneNumber,
      email: values.email,
    },
    items: cart.map((cartProduct) => ({
      productCode: cartProduct.productId,
      quantity: cartProduct.quantity,
    })),
    deliveryInfo: {
      description: values.description,
    }
  };

  return createOrderApi(ApiRoutes.Orders, dataModel);
}