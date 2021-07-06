import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MONEY, ORDER_INFOR, PAY, TOTAL_PRICE } from '../../../shared/core/constants/text';
import { replaceText } from '../../../shared/core/functions/replaceText';
import { totalPrice } from '../../../shared/core/functions/totalPrice';
import { RootState } from '../../../stores/root-reducer';

const Payment = () => {
  const priceAll = useSelector((state: RootState)  => state.cart.data);
  const [initPrice, setInitPrice] = useState(0);
  useEffect(() => {
   setInitPrice(totalPrice(priceAll))
  }, [priceAll]);
  return (
    <div className="col-4">
      <div className="detail-sale">
        <div className="order-detail">
          <p className="text-order-infor">{ORDER_INFOR}</p>
        </div>
        <div className="pay-total-price">
          <p className="total-price-text">{TOTAL_PRICE}</p>
          <p className="total-products-price">{replaceText(MONEY, (initPrice.toString()))}</p>
        </div>
        <div className="texture-btn-pay">
          <button className="btn-pay">{PAY}</button>
        </div>
      </div>
    </div>
  )
};

export default Payment;
