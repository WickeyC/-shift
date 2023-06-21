import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../Header';
import Footer from '../Footer';
import NeedSomeHelp from './NeedSomeHelp';

const Hero = styled.div`
  background: linear-gradient(
    70deg,
    rgba(244, 244, 255, 1) 0%,
    rgba(243, 254, 255, 1) 100%
  );
  height: 550px;
  display: flex;
  align-items: center;

  h1 {
    color: #37383c;
    font-size: 28px;
    font-weight: 500;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  p {
    margin: 20px 0 36px 0;
  }

  a {
    width: 160px;
    height: 50px;
    border: 1px solid #006aff;
    line-height: 50px;
    transition: all 0.3s;

    &:hover {
      background-color: rgb(255 255 255);
      color: #006aff;
    }
  }
`;

const HeroInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 46%;
    padding: 28px;
  }
`;
const HeroContent = styled.div``;

const EmptyCart: React.FC = () => {
  return (
    <>
      <Head>
        <title>Cart - Shift</title>
      </Head>
      <Header />
      <main>
        <Hero>
          <HeroInner className="container">
            <HeroContent>
              <h1>Your cart is empty</h1>
              <p>Shop now and enjoy free shipping during our promotion period.</p>
              <Link href="/products">
                <a className="btn--primary flex-center">Shop Products</a>
              </Link>
            </HeroContent>     
            <img src="/img/cart/empty-cart.svg" alt="Empty Cart" />       
          </HeroInner>
        </Hero>
        <div className="container">
          <NeedSomeHelp />
        </div>
        <div className="breadcrumb container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <img
            className="breadcrumb__arrow"
            src="img/breadcrumb-arrow.svg"
            alt="Right Arrow >"
          />
          <span>Shopping Cart</span>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EmptyCart;
