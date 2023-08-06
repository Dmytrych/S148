import { useCart } from './useCart';
import { OptionSelection } from '../contexts/CartContext';

export const useProductInCart = () => {
  const { cart, saveCart } = useCart();

  const getExistingProduct = (productId, productOptions) => cart.find(
    (cartProduct) => cartProduct.productId === productId
      && optionsMatch(cartProduct.selectedOptions, productOptions),
  );

  const addToCartOrUpdateQuantity = (
    productId: number,
    productOptions: OptionSelection[],
    quantity: number,
  ) => {
    const existingProduct = cart.find(
      (cartProduct) => cartProduct.productId === productId
        && optionsMatch(cartProduct.selectedOptions, productOptions),
    );

    if (!existingProduct && quantity > 0) {
      saveCart([
        ...cart,
        { productId, quantity, selectedOptions: productOptions },
      ]);
    } else if (existingProduct && quantity <= 0) {
      const productIndex = cart.indexOf(existingProduct);
      if (productIndex >= 0) {
        saveCart(cart.splice(productIndex, 1));
      }
    } else if (existingProduct) {
      existingProduct.quantity += quantity;
      saveCart([...cart]);
    }
  };

  const removeProductsFromCart = (cartProducts) => {
    const existingCartProducts = cartProducts.map((cartProduct) => getExistingProduct(
      cartProduct.productId,
      cartProduct.selectedOptions,
    ));

    if (existingCartProducts && existingCartProducts.length > 0) {
      let updatedCart = cart;
      existingCartProducts.forEach((cartProduct) => {
        const productIndex = cart.indexOf(cartProduct);
        if (productIndex >= 0) {
          updatedCart = updatedCart.splice(productIndex, 1);
        }
      });
      saveCart([...updatedCart]);
    }
  };

  const clearCart = () => {
    saveCart([]);
  };

  return {
    cart,
    addToCartOrUpdateQuantity,
    removeProductsFromCart,
    clearCart,
  };
};

const optionsMatch = (productOptions, comparedProductOptions) => {
  if (!productOptions && !comparedProductOptions) {
    return true;
  }
  if (!productOptions || !comparedProductOptions) {
    return false;
  }

  return !productOptions.some(
    (option) => !comparedProductOptions.some(
      (comparedOption) => comparedOption.name === option.name
        && comparedOption.selectedVariant.name
        === option.selectedVariant.name,
    ),
  );
};
