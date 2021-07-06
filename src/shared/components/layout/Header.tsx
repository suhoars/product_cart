import { useSelector } from 'react-redux';
import { RootState } from '../../../stores/root-reducer';
import logo from '../../../assets/photos/logo.png';
import person from '../../../assets/photos/person.png';
import search from '../../../assets/photos/search.png';
import cartI from '../../../assets/photos/cart.png';
import { Badge } from '../partials/Badge';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { countCart } from '../../core/functions/countCart';

const TheHeader = () => {
  const cart = useSelector((state: RootState) => state.cart.data);
  const [quantityInCart, setQuantityInCart] = useState(0);
  useEffect(() => {
    setQuantityInCart(countCart(cart))
  }, [cart]);
  return (
    <header className="header">
      <div className="page-header container">
        <div className="header-left">
          <Link to="#">
            <img src={logo} alt="e-shop" className="logo-respond" />
          </Link>
        </div>
        <div className="header-center">
          <nav className="nav-main">
            <ul className="nav-list">
              <li>
                <Link to="#" className="category">
                  Men
                </Link>
              </li>
              <li>
                <Link to="#" className="category">
                  Women
                </Link>
              </li>
              <li>
                <Link to="#" className="category">
                  Kids
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <ul className="btn-icon">
            <li className="icon-left">
              <Link to="#" className="eshop-top">
                <img
                  src={search}
                  alt="search"
                  className="cart-respond"
                />
              </Link>
            </li>
            <li className="icon-center">
              <Link to="/cart" className="cart-show">
                <img
                  src={cartI}
                  alt="cart"
                  className="person-respond"
                />
                <Badge backroundColor="badge-background" color="badge-color">
                  {quantityInCart}
                </Badge>
              </Link>
            </li>
            <li className="icon-right">
              <Link className=" eshop-top" to="#">
                <img
                  src={person}
                  alt="personal"
                  className="menu-respond"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
