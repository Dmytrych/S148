import {CmsModel, Metadata} from "@/api/DTO/common/common";

export type CustomerInfo = {
    name: string;
    surname: string;
    phoneNumber: string;
}

export type OrderItem = {
    product: number;
    quantity: number;
    price: number;
}

export type OrderRequest = {
    customerInfo: CustomerInfo;
    items: OrderItem[];
    deliveryInfo: {
        deliveryLocation: string;
    }
}

export type OrderRequestData = {
    _id: string;
    creationDate: Date;
    customerInfo: CustomerInfo;
    items: OrderItem[];
    comment: string;
    deliveryInfo: {
        description: string;
    }
}

export type OrderAttributes = {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export type OrderDto = CmsModel<OrderAttributes>

export enum OrderPopulateParams {
    CustomerInfo = "customerInfo",
    DeliveryInfo = "deliveryInfo",
    Items = "items"
}

export type OrderResponse = {
    data: OrderDto[];
    meta: Metadata;
}