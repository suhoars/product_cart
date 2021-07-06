import { ReactComponent as Reason1 } from '../../../assets/photos/why1.svg';
import { ReactComponent as Reason2 } from '../../../assets/photos/why2.svg';
import { ReactComponent as Reason3 } from '../../../assets/photos/why2.svg';
import { ReactComponent as Reason4 } from '../../../assets/photos/why2.svg';

const TheCompaign = () => {
  return (
    <section className="advertisement-page">
      <div className="container detail-page">
        <h2 className="reason-choose">Why should you choose us?</h2>
        <ul className="row grid-product">
          <li className="col col-3 col-sm-12">
            <div className="detail-grid-item">
              <Reason1 className="free-shipping" />
              <div>
                <h5 className="title-benefit">Free Shipping</h5>
                <p className="note-text2">All purchases over $199 are eligible forfree shipping via USPS First className Mail.</p>
              </div>
            </div>
          </li>
          <li className="col col-3 col-sm-12">
            <div className="detail-grid-item">
              <Reason2 className="easy-payment" />
              <div>
                <h5 className="title-benefit hover-sample">Easy Payments</h5>
                <p className="note-text2">All payments are processed instantly over a secure payment protocol</p>
              </div>
            </div>
          </li>
          <li className="col col-3 col-sm-12">
            <div className="detail-grid-item">
              <Reason3 className="refund-guarantee" />
              <div>
                <h5 className="title-benefit">Money-Back Guarantee</h5>
                <p className="note-text2">If an item arrived damaged or you'vechanged your mind, you can send itback for a
                full refund.</p>
              </div>
            </div>
          </li>
          <li className="col col-3 col-sm-12">
            <div className="detail-grid-item">
              <Reason4 className="finest-quality" />
              <div>
                <h5 className="title-benefit">Finest Quality</h5>
                <p className="note-text2">Designed to last, each of our products hasbeen crafted with the finest materials.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TheCompaign
