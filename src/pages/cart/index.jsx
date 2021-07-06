import CartList from '../../shared/components/modules/CartList';
import Payment from './components/Payment';

const TheCart = () => {
  return (
    <main className="bgr-color">
      <div className="container wrapper-cart">
        <div>
          <p className="title-basket">
            Shopping basket
          </p>
        </div>
        <div className="row product-table">
          <CartList />
          <Payment />
        </div>
      </div>
    </main>
  )
};

export default TheCart;
