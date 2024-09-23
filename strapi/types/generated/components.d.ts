import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductDataCharacteristics extends Schema.Component {
  collectionName: 'components_product_data_characteristics';
  info: {
    displayName: 'Characteristics';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    value: Attribute.Text & Attribute.Required;
  };
}

export interface PersonalInfoCustomerInfo extends Schema.Component {
  collectionName: 'components_personal_info_customer_infos';
  info: {
    displayName: 'CustomerInfo';
    icon: 'user';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    surname: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    phoneNumber: Attribute.String & Attribute.Required;
  };
}

export interface OrderInfoOrderItem extends Schema.Component {
  collectionName: 'components_order_info_order_items';
  info: {
    displayName: 'OrderItem';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    product: Attribute.Relation<
      'order-info.order-item',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    price: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0.001;
        },
        number
      >;
  };
}

export interface OrderInfoDeliveryInfo extends Schema.Component {
  collectionName: 'components_order_info_delivery_infos';
  info: {
    displayName: 'DeliveryInfo';
    description: '';
  };
  attributes: {
    deliveryLocation: Attribute.Text & Attribute.Required;
  };
}

export interface InfoBlocksTextWithPicture extends Schema.Component {
  collectionName: 'components_info_blocks_text_with_pictures';
  info: {
    displayName: 'text-with-picture';
    icon: 'code';
    description: '';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    variant: Attribute.Enumeration<['pictureRight', 'pictureLeft']> &
      Attribute.Required &
      Attribute.DefaultTo<'pictureRight'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product-data.characteristics': ProductDataCharacteristics;
      'personal-info.customer-info': PersonalInfoCustomerInfo;
      'order-info.order-item': OrderInfoOrderItem;
      'order-info.delivery-info': OrderInfoDeliveryInfo;
      'info-blocks.text-with-picture': InfoBlocksTextWithPicture;
    }
  }
}
