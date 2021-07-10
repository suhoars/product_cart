import { Action, Dispatch } from 'redux';
import { getApi } from '../../../shared/helpers/api/api.service';
import * as types from './types';

export const getCategoriesList = () => async (dispatch: Dispatch<Action>) => {
  const response = await getApi(['category']);
  dispatch({
    type: types.GET_CATEGORY,
    payload: response.data
  });
};
