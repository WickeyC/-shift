import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StyledMain = styled.main`
  background-image: linear-gradient(
      27deg,
      #f9f9ff 43%,
      rgba(255, 255, 255, 0) 9%
    ),
    radial-gradient(
      ellipse at 90% -106%,
      #8a52ff 27%,
      rgba(255, 255, 255, 0) 80%
    ),
    radial-gradient(
      ellipse at 18% -75%,
      #59c2ff 50%,
      rgba(255, 255, 255, 0) 97%
    ),
    radial-gradient(ellipse at 118% 8%, #bdeaff 44%, rgba(255, 255, 255, 0) 95%),
    linear-gradient(47deg, #000000 40%, rgba(255, 255, 255, 0) 5%);
  background-attachment: fixed;

  h1 {
    font-size: 28px;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 90px 0 90px 0;
`;

const Box = styled.div`
  box-shadow: 0px 8px 24px 0px rgb(54 97 174 / 15%);
  border-radius: 10px;
  flex-basis: 413px;
  background-color: #fff;
  padding: 40px;
  text-align: center;
  max-width: 500px;
  height: 354px;
  justify-content: center;

  img {
    width: 76px;
    height: 76px;
  }
  h1 {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 0;
    margin-top: 20px;
  }
  p {
    margin-bottom: 32px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;

    border: 1px solid #006aff;
    line-height: 50px;
    transition: all 0.3s;

    &:hover {
      background-color: rgb(255 255 255);
      color: #006aff;
    }
  }
`;

const PaymentSuccess: React.FC = () => {
  return (
    <>
      <Head>
        <title>Payment Successful - Shift</title>
      </Head>
      <Header />
      <StyledMain>
        <Container className="container">
          <Box className="flex-column-center container">
            <img
              src="img/checkout/payment-success.svg"
              alt="Payment successful icon"
            />
            <h1>Payment Successful.</h1>
            <p>
              Your order is successfully placed. Just wait a few days before
              your loving items arrived at your home!
            </p>
            <Link href="/account/orders">
              <a className="btn--primary">View Orders</a>
            </Link>
          </Box>
        </Container>
      </StyledMain>
      <div className="breadcrumb container">
        <Link href="/">
          <a>Home</a>
        </Link>
        <img
          className="breadcrumb__arrow"
          src="img/breadcrumb-arrow.svg"
          alt="Right Arrow >"
        />
        <span>Payment Successful</span>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
