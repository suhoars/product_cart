import collection from '../../../assets/photos/collection.png';
import basicTshirt from '../../../assets/photos/basic-Tshirt.png';
import viewAll from '../../../assets/photos/view-all.png';
import { Link } from 'react-router-dom';

const TheTrend = () => {
  return (
    <section className="container sample-clothes">
      <ul className="row grid-product">
        <li className="col-6 col-sm-12">
          <div className="description-sample new-clothes discount-product">
            <img src={collection} alt="collection" className="img-respond" />
            <h3 className="detail-sample">New arrivalsare now in!</h3>
            <Link to="#" className="btn-default btn-sample">SHOW COLLECTION</Link>
          </div>
        </li>
        <li className="col-3 col-sm-6">
          <div className="description-sample details-clothes">
            <img src={basicTshirt} alt="basic T-Shirt" className="img-respond" />
            <h3 className="detail-sample basic-t-shirt">Basic t-shirts $29,99</h3>
            <Link to="#" className="btn-default btn-sample">MORE DETAILS</Link>
          </div>
        </li>
        <li className="col-3 col-sm-6">
          <div className="description-sample sale-off-clothes">
            <img src={viewAll} alt="sale this summer" className="img-respond" />
            <span className="sale-off"> -50% </span>
            <h3 className="detail-sample sale-summer">Sale this summer</h3>
            <Link to="#" className="btn-default btn-sample">VIEW ALL</Link>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default TheTrend
