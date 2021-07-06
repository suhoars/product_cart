import { Action, Dispatch } from 'redux';
import { IProductInCart } from '../../../shared/core/interfaces/index';

export const handleCart = (product: IProductInCart, type: string) => (dispatch : Dispatch<Action>) =>{
  dispatch({
    type,
    payload: product,
  })
};
