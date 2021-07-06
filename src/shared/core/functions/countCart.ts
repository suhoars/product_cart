import { IProductInCart } from '../interfaces';

export const countCart = (key: IProductInCart[]) => {
  return key.reduce((total:number, product: IProductInCart) => total + product.quantity, 0);
};
