import { Formik } from 'formik';
import {Box, styled, Typography} from '@mui/material';
import { locale } from '@/locale/ua';
import CartSummary from './components/CartSummary';
import OrderForm from './components/OrderForm/OrderFrom';
import {ICartProduct} from "@/contexts/CartContext";
import {IOrderFormFields, useOrderForm} from "@/PageContent/Cart/hooks/useOrderForm";

interface ICartProps {
  cartProducts: ICartProduct[];
  onRemoveProduct: (productCode: string) => void;
  onSubmitClick: (values: IOrderFormFields) => Promise<void> | void;
}

function Cart({ cartProducts, onRemoveProduct, onSubmitClick }: ICartProps): JSX.Element {
  const {validateForm, getInitialValues} = useOrderForm();

  const handleRemoveCartItem = (cartProduct: ICartProduct): void => {
    onRemoveProduct(cartProduct.productCode);
  };

  return (
        <CartPageBackground>
            <CartPageBox>
                <Box>
                    <Typography variant="h5">{locale.order_placement}</Typography>
                </Box>
                {cartProducts.length > 0 && (
                    <Formik
                        validateOnMount
                        initialValues={getInitialValues()}
                        validate={validateForm}
                        onSubmit={onSubmitClick}
                        children={(props) => (
                            <OrderContentContainer>
                                <OrderPageContentBlock>
                                    <OrderForm {...props} />
                                </OrderPageContentBlock>
                                <OrderSummaryBlock>
                                    <CartSummary
                                        handleSubmit={props.handleSubmit}
                                        disableSubmit={!props.isValid}
                                        cartProducts={cartProducts}
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
