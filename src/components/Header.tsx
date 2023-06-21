import Link from 'next/link';

import { useAuth } from '../context/AuthUserContext';

const Header: React.FC = () => {
  const { authUser, loading } = useAuth();

  return (
    <header className="header">
      <div className="header__wrapper container">
        <Link href="/">
          <a className="header__logo-link">
            <img src="/img/logo.svg" alt="Shift Logo" />
          </a>
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a>Products</a>
              </Link>
            </li>
            <li>
              <Link href="/outlets">
                <a>Outlets</a>
              </Link>
            </li>
            <li>
              <Link href="/promotion">
                <a>Promotion</a>
              </Link>
            </li>
            <li>
              <Link href="/membership">
                <a>Membership</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="menu">
          {!loading && authUser ? (
            <Link href="/account/dashboard">
              <a>
                <img src="/img/account.svg" alt="Account" />
              </a>
            </Link>
          ) : (
            <Link href="/account">
              <a>
                <img src="/img/account.svg" alt="Account" />
              </a>
            </Link>
          )}
          <Link href="/cart">
            <a>
              <img src="/img/cart.svg" alt="Shopping Cart" />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
