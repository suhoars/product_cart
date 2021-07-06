import { IProduct } from '../../../shared/core/interfaces';
import * as types from './types';

const listCategoryState = {
  data: [],
};

interface IAction {
  type: string;
  payload: IProduct;
}

export const categoryReducer = (state = listCategoryState, action: IAction): any => {
  switch (action.type) {
    case types.GET_CATEGORY:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  };
};
