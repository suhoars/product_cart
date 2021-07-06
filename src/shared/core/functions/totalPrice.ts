import { IProductInCart } from '../interfaces';

export const totalPrice = (key: IProductInCart[]) => {
  return key.reduce((total:number, product: IProductInCart) => total + product.quantity*product.price, 0);
};
