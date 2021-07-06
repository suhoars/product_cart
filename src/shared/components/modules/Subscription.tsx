import lastSeason from '../../../assets/photos/background-lastSection.png';

const Subscription = () => {
  return (
    <section className="subscribe-page">
      <img src={lastSeason} alt="background" />
      <div className="subscribe-infor container">
        <div className="subscribe-right container">
          <div className="subscribe-text">
            <p>Subscribe to our newsletter andreceive exclusive offers every week</p>
          </div>
          <form className="enter-email">
            <input className="email-form" placeholder="Enter your email" type="email" />
            <button className="btn-primary">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
};

export default Subscription;
