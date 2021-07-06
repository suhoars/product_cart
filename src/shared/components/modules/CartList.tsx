import { useSelector } from 'react-redux';
import { ProductInCart } from '../../../pages/cart/components/productInCart';
import { RootState } from '../../../stores/root-reducer';

const CartList = () => {
  const cartList = useSelector((state: RootState )=> state.cart.data);
  return (
    <div className="col-8">
      <ul className="cart-product-group">
        {cartList.length > 0 && cartList.map((item: any) => {
          return (
            <li className="cart-product-list" key={item.id}>
              <ProductInCart item={item}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default CartList;
