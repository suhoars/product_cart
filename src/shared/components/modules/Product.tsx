import { useDispatch } from 'react-redux';
import { ICategories, IProductInCart } from '../../core/interfaces/index';
import { handleCart } from '../../../pages/cart/stores/actions';
import { ADD_TO_CART, PERCENT, MONEY } from '../../core/constants/text';
import { replaceText } from '../../core/functions/replaceText';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../../../stores/root-reducer';

interface PropsInterface {
  item: IProductInCart;
};

interface cateInterface {
  categoryID: number;
};

export const Category = (props: cateInterface) => {
  const categories = useSelector((state: RootState)=> state.categories.data);
  const { categoryID } = props;
  const [category, setCategory] = useState<ICategories>();
  useEffect(() => {
    const categoryItem = categories.find((category: ICategories) => category.id === categoryID);
    setCategory(categoryItem)
  }, [categories, categoryID]);
  console.log(category)
  return (
    <h4 className="category-tag">{category?.category}</h4>
  );
};

export const Product = (props: PropsInterface) => {
  const { item } = props;
  const dispatch = useDispatch();
  return (
    <div className="discount-product">
      {
        item.discount > 0 &&
          <span className="sale-off-2">
            {replaceText(PERCENT, item.discount.toString())}
          </span>
      }
      <div className="img-btn-group">
        <img src="https://i.picsum.photos/id/459/200/300.jpg?hmac=4Cn5sZqOdpuzOwSTs65XA75xvN-quC4t9rfYYyoTCEI" alt="Summer vibes" className="img-respond" />
        <button className="btn btn-primary btn-add-cart" onClick={() => dispatch(handleCart(item, 'ADD_TO_CART'))}>
        {ADD_TO_CART}
       </button>
      </div>
      <Category categoryID={parseInt(item.category)} />
      <h3 className="item-text">{item.name}</h3>
      <div className="compare-price">
        {
          item.discount > 0 &&
            <p className="text-price discount-price">
              {replaceText(MONEY, (item.price * (100 - item.discount) / 100).toFixed(2))}
            </p>
        }
        <p className="text-price">{replaceText(MONEY, item.price.toString())}</p>
      </div>
    </div>
  );
};
