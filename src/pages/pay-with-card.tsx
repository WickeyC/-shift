import React, { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import firestore from '../firebase/firestore';
import { products } from '../data';

import PaymentForm from '../components/PaymentForm';
import { useAuth } from '../context/AuthUserContext';
import { useOrders } from '../context/OrdersContext';

const StyledMain = styled.main`
  background-image: radial-gradient(
      ellipse at -2% -77%,
      #e9f1ff 35%,
      rgba(255, 255, 255, 0) 40%
    ),
    radial-gradient(circle at -4% 100%, #b9daff 18%, rgba(255, 255, 255, 0) 74%),
    radial-gradient(
      circle at -66% -180%,
      #64bee3 46%,
      rgba(255, 255, 255, 0) 52%
    ),
    radial-gradient(
      ellipse at 130% -91%,
      #ada8ff 18%,
      rgba(255, 255, 255, 0) 54%
    ),
    linear-gradient(2deg, #b5e8ff 0%, rgba(255, 255, 255, 0) 50%),
    radial-gradient(circle at 18% -54%, #ebf6ff 39%, rgba(255, 255, 255, 0) 92%),
    linear-gradient(77deg, #a7b5d4 70%, rgba(255, 255, 255, 0) 0%);
  background-attachment: fixed;
`;

const Container = styled.div`
  padding: 90px 0 90px 0;
`;

const Box = styled.div`
  box-shadow: 0px 8px 24px 0px rgb(54 97 174 / 15%);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 60px 40px 40px 40px;
  text-align: center;
  justify-content: center;
  max-width: 800px;

  > div:first-child {
    width: 100%;
  }

  button {
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    width: 120px;
    margin-top: 50px;

    border: 1px solid #006aff;
    line-height: 50px;
    transition: all 0.3s;
    font-size: 15px;

    &:hover {
      background-color: rgb(255 255 255);
      color: #006aff;
    }
  }
`;

const PayWithCard: React.FC = () => {
  const { authUser, loading, cart, setCart } = useAuth();
  const { orders, setOrders } = useOrders();
  const router = useRouter();

  const cartIdList = cart?.map((c) => c.id);

  const cartItems = products
    ?.filter((prod) => cartIdList?.some((id) => id === prod.id.toString()))
    .map((item: any) => ({
      ...item,
      quantity: cart?.find((c) => c.id === item.id.toString())?.quantity,
    }))
    .map((item) => ({
      ...item,
      totalPrice: item?.quantity * item.price,
    }));
  
  console.log(cartItems);
  
  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push('/account');
  }, [authUser, loading]);

  if (!loading && !authUser) {
    toast(
      <span>
        Oops, you haven't logged in. <br />
        Please log in before checking out.
      </span>,
      {
        icon: '🔑',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
  }

  if (loading || !authUser) {
    return (
      <>
        <Head>
          <title>Pay with Card - Shift</title>
        </Head>
        <Header />
        <main className="container">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
          <div className="breadcrumb">
            <Link href="/">
              <a>Home</a>
            </Link>
            <img
              className="breadcrumb__arrow"
              src="img/breadcrumb-arrow.svg"
              alt="Right Arrow >"
            />
            <span>Pay with Card</span>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleSubmit = () => {
    const promises = cart?.map(async (c) => {
      return firestore
        .collection(`users/${authUser?.uid}/cart`)
        .doc(c.id)
        .delete()
        .then(() => {
          console.log('Document successfully deleted!');
        })
        .catch((error) => {
          console.error('Error removing document: ', error);
        });
    });

    toast.promise(
      Promise.all(promises as Promise<void>[]).then((values) => {
        console.log('done all');
        router.push('/payment-success');
        const temp = JSON.parse(JSON.stringify(orders));
        temp.push({
          orderNo: Date.now(),
          orderDate: new Date().toLocaleDateString(),
          deliveryMethod: localStorage.getItem('deliveryMethod'),
          paymentMethod: localStorage.getItem('paymentMethod'),
          cartItems
        });
        setOrders(temp);
        setTimeout(() => {
          setCart([]);
        }, 500);
      }),
      {
        loading: `Processing Your Order...`,
        success: <b>Success!</b>,
        error: <b>Could not order.</b>,
      }
    );
  };

  return (
    <>
      <Head>
        <title>Pay with Card - Shift</title>
      </Head>
      <Header />
      <StyledMain>
        <Container className="container">
          <Box className="flex-column-center container">
            <PaymentForm handleSubmit={handleSubmit} />
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
        <span>Pay with Card</span>
      </div>
      <Footer />
    </>
  );
};

export default PayWithCard;
