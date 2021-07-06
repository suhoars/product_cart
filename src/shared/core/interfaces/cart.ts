import { IProduct } from './product';

export type IProductInCart = IProduct & {
  quantity: number;
};

export type ICartState = {
  cart: {
    data: [],
    payload: IProductInCart[]
  }
}
