import { Link } from 'react-router-dom';
import ProductList from '../../shared/components/modules/ProductList';
import Subscription from '../../shared/components/modules/Subscription';
import TheBanner from './components/TheBanner';
import TheCompaign from './components/TheCompaign';
import TheTrend from './components/TheTrend';

const TheHome = () => {
  return (
    <>
      <TheBanner />
      <TheTrend />
      <section className="container recommended-clothes">
        <div className="selected-title">
          <h2 className="selected-header">Selected just for you</h2>
        </div>
        <ProductList />
        <Link to="#" className="btn-default show-more-detail">SHOW MORE</Link>
      </section>
      <TheCompaign />
      <section className="container product-today">
        <h2 className="title-today">
          Products in today
        </h2>
        <ProductList />
      </section>
      <Subscription />
    </>
  )
};

export default TheHome;
