import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__info">     
          <img width="58" src="/img/logo-darkbg.svg" alt="Vivo Logo" />
          <h5>Always Here to Serve You</h5>
          <p>
            The best online & offline store for buying mobile phones & accessories.
          </p>
          <hr />
          <p className="footer__info__bottom">
            <span className="img-container flex-center"><img src="/img/pen.svg" alt="Pen icon" /></span>            
            Last updated on 15 September 2021
          </p>
          <p className="footer__info__bottom">
            <span className="img-container flex-center"><img src="/img/email.svg" alt="Email icon" /></span>
            Email us at&nbsp;<a href="mailto:contact@shiftstore.com.my">contact@shiftstore.com.my</a>
          </p>
        </div>   
        <div className="footer__nav">
          <div className="footer__column">
            <h6 className="footer__heading">Shop</h6>
            <ul className="footer__list">
              <li>
                <Link href="/products">
                  <a className="footer__link">Products</a>                
                </Link>
              </li>
              <li>
                <Link href="/outlets">
                  <a className="footer__link">Outlets</a>
                </Link>
              </li>
              <li>
                <Link href="/promotion">
                  <a className="footer__link">Promotion</a>
                </Link>
              </li>
              <li>
                <Link href="/membership">
                  <a className="footer__link">Membership</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h6 className="footer__heading">Company</h6>
            <ul className="footer__list">
              <li>
                <Link href="/">
                  <a className="footer__link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="footer__link">About</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="footer__link">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="footer__link">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="footer__link">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/reviews">
                  <a className="footer__link">Reviews</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h6 className="footer__heading">Social</h6>
            <ul className="footer__list">
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                  >
                    <img src="/img/social_icons/twitter.svg" alt="Twitter icon" />
                    Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                  >
                    <img src="/img/social_icons/facebook.svg" alt="Facebook icon" />
                    Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                  >
                    <img src="/img/social_icons/instagram.svg" alt="Instagram icon" />
                    Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                  >
                    <img src="/img/social_icons/youtube.svg" alt="YouTube icon" />
                    YouTube
                </a>
              </li>
            </ul>
          </div>  
        </div>
      </div>                  
    </footer>
  );
};

export default Footer;