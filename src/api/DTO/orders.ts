export interface ICustomerInfo {
    name: string;
    surname: string;
    middleName?: string;
    phoneNumber?: string;
    email?: string;
}

export interface IOrderItem {
    productCode: string;
    quantity: number;
    price: {
        base: number;
    }
}

export interface IOrderRequest {
    _id: string;
    customerInfo: ICustomerInfo;
    items: IOrderItem[];
    comment: string;
    deliveryInfo: {
        description: string;
    }
}