import { Link } from 'react-router-dom';
import Logo from '../../../assets/photos/logo.png';

const TheFooter = () => {
  return (
    <footer className="page-footer">
      <div className="border-footer">
        <div className="footer-grid container">
          <div className="footer-top-left">
            <img src={Logo} alt="logo" />
            <p className="footer-content-left">
              House My Brand designs clothing for the young, the old & everyone
              in between – but most importantly, for the fashionable
            </p>
            <div className="social-icon">
              <ul className="icon-social-list">
                <li className="icon-bottom">
                  <i className="fab fa-facebook-f icon "></i>
                </li>
                <li className="icon-bottom">
                  <i className="fab fa-twitter icon"></i>
                </li>
                <li className="icon-bottom">
                  <i className="fab fa-invision icon"></i>
                </li>
                <li className="icon-bottom">
                  <i className="fab fa-instagram-square icon"></i>
                </li>
                <li className="icon-bottom">
                  <i className="fab fa-youtube icon"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-top-right">
            <ul className="list-service">
              <li className="shopping-online">
                <div className="left-list">
                  <p className="title-text-footer">Shopping online</p>
                  <ul className="shopping-online-list">
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        Order Status
                      </Link>
                    </li>
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        Shipping and Delivery
                      </Link>
                    </li>
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        Returns
                      </Link>
                    </li>
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        Payment Options
                      </Link>
                    </li>
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-top-right">
            <ul className="list-service">
              <li className="information">
                <div className="center-list">
                  <p className="title-text-footer">Information</p>
                  <ul className="infor-list">
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        Gift Cards
                      </Link>
                    </li>
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        Find a store
                      </Link>
                    </li>
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        Newsletter
                      </Link>
                    </li>
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        Bacome a member
                      </Link>
                    </li>
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        Site feedback
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-top-right">
            <ul className="list-service">
              <li className="contact">
                <div className="right-list">
                  <p className="title-text-footer">Contact</p>
                  <ul className="contact-list">
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        store@uikit.com
                      </Link>
                    </li>
                    <li className="footer-content-right">
                      <Link to="#" className="text-content-right">
                        Hotline: +1 131 138 138
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-footer container">
        <p className="copyright">
          DESIGN BY ICEO.CO - &copy; 2019. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;
