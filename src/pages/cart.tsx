import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products } from '../data';

import QuantityInput from '../components/cart/QuantityInput';
import OrderSummary from '../components/cart/OrderSummary';
import EmptyCart from '../components/cart/EmptyCart';
import NeedSomeHelp from '../components/cart/NeedSomeHelp';
import { useAuth } from '../context/AuthUserContext';
import toast from 'react-hot-toast';
import firestore from '../firebase/firestore';
import { CartType } from '../firebase/useFirebaseAuth';

const StyledMain = styled.main`
  h1 {
    color: #37383c;
    font-size: 28px;
    font-weight: 500;
    margin-top: 50px;
    margin-bottom: 40px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  color: #141418;

  th {
    background-color: #f8f9fa;
    border-bottom: 1px solid #e3e3e3;
    height: 60px;
    font-weight: 400;
  }
  td {
    vertical-align: middle;
    border-bottom: 1px solid #e3e3e3;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 150px;
  }
  td:first-child img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
  td:nth-of-type(2) div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  td:nth-of-type(4),
  th:nth-of-type(4) {
    padding-right: 50px;
  }

  .cart-table__th-quantity {
    text-align: center;
  }

  .cart-table__product-img {
    margin-left: 20px;
  }

  .cart-table__stock {
    color: #1f9d00;
  }

  .cart-table__subtotal {
    color: #0e76ff;
    font-weight: 700;
    width: 150px;
  }

  .cart-table__delete {
    width: 25px;
    height: 25px;
    margin-right: 18px;
    background-color: #fff;
    img {
      width: 17px;
      height: 19px;
    }
  }
`;

const CartPage: React.FC = () => {
  const { authUser, loading, cart, setCart } = useAuth();
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

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push('/account');
  }, [authUser, loading]);

  if (!loading && !authUser) {
    toast(
      <span>
        Oops, you haven't logged in. <br />
        Please log in to use the shopping cart.
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
          <title>Cart - Shift</title>
        </Head>
        <Header />
        <StyledMain className="container">
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
            <span>Shopping Cart</span>
          </div>
        </StyledMain>
        <Footer />
      </>
    );
  }

  if (cartItems.length === 0) {
    return (
      <EmptyCart />
    );
  }

  return (
    <>
      <Head>
        <title>Cart - Shift</title>
      </Head>
      <Header />
      <StyledMain className="container">
        <h1>Your Shopping Cart</h1>
        <Table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Item</th>
              <th>Price</th>
              <th className="cart-table__th-quantity">Quantity</th>
              <th>Subtotal</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={`cart-item-${item.id}-${item.type}`}>
                <td>
                  <img
                    className="cart-table__product-img"
                    src={item.imgSrc}
                    alt={item.name}
                  />
                </td>
                <td>
                  <div>
                    <span>{item.name}</span>
                    <span className="cart-table__stock">In stock</span>
                  </div>
                </td>
                <td>RM {item.price.toFixed(2)}</td>
                <td>
                  <QuantityInput id={item.id} quantity={item.quantity} />
                </td>
                <td className="cart-table__subtotal">
                  RM {item.totalPrice.toFixed(2)}
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      toast.promise(
                        firestore
                          .collection(`users/${authUser?.uid}/cart`)
                          .doc(item.id.toString())
                          .delete()
                          .then(() => {
                            console.log('Document successfully deleted!');
                            setCart(cart?.filter(c => {
                              return c.id !== item.id.toString()
                            }) as CartType);
                          })
                          .catch((error) => {
                            console.error('Error removing document: ', error);
                          }),
                        {
                          loading: `Removing ${item.name} from Cart...`,
                          success: <b>Removed!</b>,
                          error: <b>Could not remove.</b>,
                        }
                      );
                    }}
                    className="cart-table__delete flex-center"
                    type="button"
                  >
                    <img src="/img/cart/delete.svg" alt="Delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 60,
          }}
        >
          <OrderSummary cartItems={cartItems} />
        </div>
        <NeedSomeHelp />
        <div className="breadcrumb">
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
      </StyledMain>
      <Footer />
    </>
  );
};

export default CartPage;
