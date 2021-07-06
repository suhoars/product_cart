import { combineReducers } from 'redux';
import { handleCartReducer } from '../pages/cart/stores/reducer';
import { categoryReducer } from '../pages/category/stores/reducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  cart: handleCartReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
