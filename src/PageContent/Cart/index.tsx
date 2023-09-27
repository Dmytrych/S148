import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material';
import { locale } from '../../locale/ua';
import { create } from '../../repositories/api';
import CartSummary from './components/CartSummary';
import OrderForm from './components/OrderForm/OrderFrom';
import { useProductInCart } from '../../hooks/useProductInCart';
import { useCartWithProductInfo } from '../../hooks/useCartWithProductInfo';
import './index.css';
import {IProduct} from "@/api/DTO/products";
import {ICartProduct} from "@/contexts/CartContext";

const initialValues = {
  name: '',
  middleName: '',
  surname: '',
  email: '',
  phoneNumber: '',
  description: '',
};

interface ICartProps {
  cartProducts: ICartProduct[];
  onRemoveProduct: (cartProduct: ICartProduct) => void;
  onSubmitClick: () => void;
}

function Cart({ cartProducts, onRemoveProduct }: ICartProps): JSX.Element {
  const navigate = useNavigate();

  const handleSubmit = async (values): Promise<void> => {
    const dataModel = {
      description: values.description,
      customerModel: {
        name: values.name,
        surname: values.surname,
        middleName: values.middleName,
        phoneNumber: values.phoneNumber,
        email: values.email,
      },
      products: cartWithProductInfo.map((cartProduct) => ({
        productId: cartProduct.product.id,
        quantity: cartProduct.quantity,
      })),
    };

    await create('novaPoshta', dataModel);

    clearCart();
    navigate('/');
  };

  const handleRemoveCartItem = (cartProduct): void => {
    removeProductsFromCart([cartProduct]);
  };

  return (
        <CartPageBackground>
            <CartPageBox>
                <div>
                    <h2>{locale.order_placement}</h2>
                </div>
                {cartWithProductInfo && cartWithProductInfo.length > 0 && (
                    <Formik
                        validateOnMount
                        initialValues={initialValues}
                        validate={validateForm}
                        onSubmit={handleSubmit}
                        /* eslint-disable-next-line react/no-children-prop */
                        children={(props) => (
                            <OrderContentContainer>
                                <OrderPageContentBlock>
                                    <OrderForm {...props} />
                                </OrderPageContentBlock>
                                <OrderSummaryBlock>
                                    <CartSummary
                                        /* eslint-disable-next-line react/prop-types */
                                        handleSubmit={props.handleSubmit}
                                        /* eslint-disable-next-line react/prop-types */
                                        disableSubmit={!props.isValid}
                                        cartProducts={cartWithProductInfo}
                                        removeCartItem={handleRemoveCartItem}
                                    />
                                </OrderSummaryBlock>
                            </OrderContentContainer>
                        )}
                    />
                )}
            </CartPageBox>
        </CartPageBackground>
  );
}

export default Cart;

const CartPageBackground = styled('div')({
  minHeight: '90vh',
  background: 'var(--order-form-gradient)',
});

const CartPageBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const OrderContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '80vw',
});

const OrderPageContentBlock = styled('div')({
  flex: '3',
  backgroundColor: 'var(--order-page-content-block-color)',
  padding: '19px 32px',
  wordBreak: 'break-all',
});

const OrderSummaryBlock = styled('div')({
  flex: '1',
  fontWeight: 'var(--order-page-highlight-font-weight)',
});
