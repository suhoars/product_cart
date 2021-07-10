import header from '../../../assets/photos/header-background.png';
import showNow from '../../../assets/photos/show-now.png';
import freeShip from '../../../assets/photos/free-shipping.png';
import happy from '../../../assets/photos/noun_Happy.png';
import guarantee from '../../../assets/photos/guarantee_.png';
import { Link } from 'react-router-dom';

const TheBanner = () => {
  return (
    <section className="banner">
      <div className="summer-collection">
        <img src={header} alt="sale-summer" className="img-cover" />
        <div className="summer-title">
          <h1 className="main-title">
            Sale of the <span className="text-summer">summer</span> collection
          </h1>
          <Link to="#" className="shop-now">
            <img src={showNow} alt="shop now" className="next-page-icon" />
            <span className="shop-now-link">SHOP NOW</span>
          </Link>
        </div>
      </div>
      <ul className="benefit-shopping">
        <div className="benefit-grid">
          <li className="benefit-list">
            <div className="shipping">
              <img src={freeShip} alt="free-shipping" className="img-benefit" />
              <div>
                <h5 className="title-benefit-banner">Free Shipping</h5>
                <p className="condition-shipping">On purchases over $199</p>
              </div>
            </div>
          </li>
          <li className="benefit-list">
            <div className="satisfied-percent">
              <img src={happy} alt="satisfied-percent" className="img-benefit" />
              <div>
                <h5 className="title-benefit-banner">99% Satisfied Customers</h5>
                <p className="customers-opinon">Our clients' opinions speak for themselves</p>
              </div>
            </div>
          </li>
          <li className="benefit-list">
            <div className="guaranteed-wanranty">
              <img src={guarantee} alt="guaranteed-wanranty" className="img-benefit" />
              <div>
                <h5 className="title-benefit-banner">Originality Guaranteed</h5>
                <p className="warranty">30 days warranty for each product from our store</p>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </section>
  )
}

export default TheBanner
