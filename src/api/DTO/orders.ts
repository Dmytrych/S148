export interface ICustomerInfo {
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
}

export interface IOrderItem {
    product: number;
    quantity: number;
    price: number;
}

export interface IOrderRequest {
    customerInfo: ICustomerInfo;
    items: IOrderItem[];
    deliveryInfo: {
        deliveryLocation: string;
    }
}

export interface IOrder {
    _id: string;
    creationDate: Date;
    customerInfo: ICustomerInfo;
    items: IOrderItem[];
    comment: string;
    deliveryInfo: {
        description: string;
    }
}