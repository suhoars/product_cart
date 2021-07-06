import { IProductInCart } from '../../../shared/core/interfaces';
import { getLocalStorage, setLocalStorage } from '../../../shared/helpers/utils/localstorage';
import * as types from './types';

interface IAction {
  type: string;
  payload: IProductInCart;
}

const addToCartState = {
  data: getLocalStorage('cart'),
};
export const handleCartReducer = (state = addToCartState, action: IAction): any => {
  let cart: IProductInCart[] = getLocalStorage('cart');
  let indexOfProduct = action.payload && cart.findIndex((product) => product.id === action.payload.id);
  switch (action.type) {
    case types.ADD_TO_CART:
      if (indexOfProduct === -1) {
        action.payload.quantity = 1;
        cart.push(action.payload);
      }
      else {
        cart[indexOfProduct].quantity += 1;
      }
      setLocalStorage(cart, 'cart');
      return {
        ...state,
        data: cart,
      }
    case types.INCREASE:
      cart[indexOfProduct].quantity += 1
      setLocalStorage(cart, 'cart');
      return {
        ...state,
        data: cart,
      }
    case types.DECREASE:
      if(cart[indexOfProduct].quantity > 1) {
        cart[indexOfProduct].quantity -= 1
        setLocalStorage(cart, 'cart');
      }
      return {
        ...state,
        data: cart,
      }
    case types.INPUT:
      if(action.payload.quantity <= 0) {
        cart[indexOfProduct].quantity = 1
      }
      else {
        cart[indexOfProduct].quantity = action.payload.quantity
        setLocalStorage(cart, 'cart');
      }
      return {
        ...state,
        data: cart,
      }
      case types.REMOVE:
        cart = cart.filter(item => {
          return item.id !== action.payload.id
        })
        setLocalStorage(cart, 'cart');
        return {
          ...state,
          data: cart,
        }
    default:
      return state;
  };
};
