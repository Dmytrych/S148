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
}

export interface IOrderRequest {
    customerInfo: ICustomerInfo;
    items: IOrderItem[];
    comment?: string;
    deliveryInfo: {
        description: string;
    }
}