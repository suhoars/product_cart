import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IProductInCart } from '../../../shared/core/interfaces';
import { handleCart } from '../stores/actions';

interface PropsInterface {
  item: IProductInCart;
}

export const ProductInCart = (props: PropsInterface) => {
  const { item } = props;
  const [initQuantity, setInitQuantity] = useState(item.quantity);
  const dispatch = useDispatch();
  const changeQuantity = (valueInput: number) => {
    if (isNaN(valueInput)) {
      item.quantity = 0
    } else {
      item.quantity = valueInput
    }
    setInitQuantity(valueInput)
    dispatch(handleCart(item, 'INPUT'));
  };
  const actionHandleCart = (product: IProductInCart, type: string) => {
    if (type === 'DECREASE') {
      const decreaseQuantity = (initQuantity) - 1;
      setInitQuantity(decreaseQuantity)
    }
    if (type === 'INCREASE') {
      const increaseQuantity = (initQuantity) + 1;
      setInitQuantity(increaseQuantity)
    }
    else if (isNaN(initQuantity) || initQuantity < 1) {
      setInitQuantity(1)
      product.quantity = 1
      alert("Please type number of product quantity!")
    }
    dispatch(handleCart(product, type))
  };
  return (
    <>
      <div className="left-show-cart">
        <Link to="#">
          <img src={item.image} alt="summer clothes" className="img-cart-product" />
        </Link>
      </div>
      <div className="center-show-cart">
        <h3>{item.name}</h3>
        <p className="price-product"></p>
        <p className="price-product-cart discount-price">{item.price}</p>
      </div>
      <div className="control-product">
        <div>
          <button className="remove-item" onClick={() => actionHandleCart(item, 'DECREASE')}> - </button>
          <input type="number" className="show-count" value={initQuantity} onChange={(event) => changeQuantity(parseInt(event.target.value))} onMouseLeave={() => actionHandleCart(item, 'INPUT')} />
          <button className="add-more-item" onClick={() => actionHandleCart(item, 'INCREASE')}> + </button>
        </div>
        <div className="remove-texture">
          <button className="btn-remove" onClick={() => actionHandleCart(item, 'REMOVE')}>
            <i className="fas fa-times" ></i>
          </button>
        </div>
      </div>
    </>
  )
};
