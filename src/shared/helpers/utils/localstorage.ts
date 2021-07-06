import { IProductInCart } from '../../core/interfaces/index';

export const getLocalStorage = (key: string) => {
  let localCart = localStorage.getItem(key);
  return localCart ? JSON.parse(localCart) : [];
};

export const setLocalStorage = (cart: IProductInCart[], key: string) => {
  localStorage.setItem(key, JSON.stringify(cart));
};
