import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products, ProductType } from '../data';
import firestore from '../firebase/firestore';

import { useAuth } from '../context/AuthUserContext';
import { useOrders } from '../context/OrdersContext';

const StyledMain = styled.main`
  h1 {
    color: #37383c;
    font-size: 28px;
    font-weight: 500;
    margin-top: 50px;
    margin-bottom: 40px;
  }
`;

const Wrapper = styled.form`
  background-color: #f9f9f9;
  padding: 40px 0;

  > section {
    background-color: #fff;
    box-shadow: 0 2px 30px -8px rgb(0 0 0 / 5%);
    border-radius: 20px;
    padding: 40px;
    color: #141418;
    &:not(:last-child) {
      margin-bottom: 40px;
    }

    h2 {
      font-size: 24px;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 36px;
    }
  }
`;

const ShippingSection = styled.section``;

const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 46px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #edf2f7;
  padding-left: 14px;
  background: #edf2f7;
  transition: all 300ms;
  color: #374151;
  font-size: 16px;

  &:focus {
    border-color: #0b8aff;
    background-color: #fcfdff;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #718196;
  }
`;

const DeliverySection = styled.section``;

const PaymentSection = styled.section``;

const PaymentMethods = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
`;

type PaymentMethodButtonProps = {
  isSelected: boolean;
};

const PaymentMethodButton = styled.button<PaymentMethodButtonProps>`
  width: 257px;
  height: 70px;
  border: ${(props) =>
    props.isSelected ? '1px solid #4284FB' : '1px solid #D0D0D0'};
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 25px;
  font-size: 15px;
  color: ${(props) => (props.isSelected ? '#006AFF' : '#141418')};
  img {
    margin-right: 20px;
  }
`;

const DeliveryMethods = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
`;

type DeliveryMethodButtonProps = {
  isSelected: boolean;
};

const DeliveryMethodButton = styled.button<DeliveryMethodButtonProps>`
  height: 120px;
  border: ${(props) =>
    props.isSelected ? '1px solid #4284FB' : '1px solid #D0D0D0'};
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 25px;
  font-size: 15px;
  color: ${(props) => (props.isSelected ? '#006AFF' : '#141418')};
  img {
    width: 90px;
    margin-right: 20px;
  }
  .delivery-method-btn__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span:first-child {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5px;
    }
  }
`;

type RadioProps = {
  isSelected: boolean;
};

const StyledRadio = styled.div<RadioProps>`
  margin-right: 20px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: ${(props) =>
    props.isSelected ? '1px solid #4284FB' : '1px solid #666666'};

  > div {
    width: 12px;
    height: 12px;
    background-color: ${(props) => (props.isSelected ? '#4284FB' : '#fff')};
    border-radius: 50%;
  }
`;

const Radio: React.FC<RadioProps> = (props) => {
  return (
    <StyledRadio className="flex-center" isSelected={props.isSelected}>
      <div></div>
    </StyledRadio>
  );
};

const OrderSummarySection = styled.section`
  .order-summary-section-container {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 30px;

    @media screen and (max-width: 1000px) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

const OrderSummaryLeft = styled.div`
  grid-column: 1 / 6;
`;

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  div:first-child {
    grid-column: 1 / 4;
  }
  div:last-child {
    grid-column: 4 / 6;
  }
`;

const StyledOrderSummary = styled.div`
  grid-column: 6 / 10;
  background-color: #f9f9f9;
  border-radius: 10px;
  color: #141418;
  width: 100%;
  min-width: 360px;
  padding: 50px 56px;
  flex: 1;

  .order-summary__title {
    font-size: 18px;
    color: #37383c;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 36px;
  }

  .order-summary__subtotal,
  .order-summary__shipping-fee,
  .order-summary__total,
  .order-summary__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .order-summary__shipping-fee {
    padding-top: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid #e3e3e3;
  }

  .order-summary__total {
    margin-top: 18px;
    margin-bottom: 48px;
  }

  .order-summary-cont-link {
    color: #006aff;
  }

  .order-summary-checkout-btn {
    width: 130px;
    height: 50px;
    font-size: 15px;
  }
`;

const CheckoutPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('CARD');
  const [deliveryMethod, setDeliveryMethod] = useState('LALAMOVE');

  const { authUser, loading, cart, setCart } = useAuth();
  const { orders, setOrders } = useOrders();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push('/account');
  }, [authUser, loading]);

  useEffect(() => {
    localStorage.setItem('deliveryMethod', 'lalamove');
    localStorage.setItem('paymentMethod', 'card');
  }, []);

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
          <title>Checkout - Shift</title>
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
            <span>Checkout</span>
          </div>
        </StyledMain>
        <Footer />
      </>
    );
  }

  const cartIdList = cart?.map((c) => c.id);

  const cartItems: ProductType = products
    ?.filter((prod) => cartIdList?.some((id) => id === prod.id.toString()))
    .map((item: any) => ({
      ...item,
      quantity: cart?.find((c) => c.id === item.id.toString())?.quantity,
    }))
    .map((item) => ({
      ...item,
      totalPrice: item?.quantity * item.price,
    }));

  const totalItems = cart?.reduce((acc, curr) => {
    return acc + Number(curr.quantity);
  }, 0);

  let totalPrice = 0;

  cartItems.map((item) => {
    cart?.map((c) => {
      if (c.id === item.id.toString()) {
        totalPrice += c.quantity * item.price;
      }
    });
  });

  const handlePay = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (paymentMethod === 'CASH') {
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
          console.log("done all");
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
    } else {
      router.push('/pay-with-card');
    }
  };  

  return (
    <>
      <Head>
        <title>Checkout - Shift</title>
      </Head>
      <Header />
      <StyledMain>
        <h1 className="container">Checkout</h1>
        <Wrapper onSubmit={handlePay}>
          <ShippingSection className="container">
            <h2>Shipping Address</h2>
            <AddressGrid>
              <Fieldset>
                <Label htmlFor="shipping-name">Your Name</Label>
                <Input
                  type="text"
                  id="shipping-name"
                  name="shipping-name"
                  placeholder="e.g. John Doe"
                  required
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="shipping-phone-number">Phone Number</Label>
                <Input
                  type="tel"
                  id="shipping-phone-number"
                  name="shipping-phone-number"
                  placeholder="e.g. 0123456789"
                  required
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="shipping-street-address">Street Address</Label>
                <Input
                  type="text"
                  id="shipping-street-address"
                  name="shipping-street-address"
                  placeholder="Please enter your address"
                  required
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="shipping-state">State</Label>
                <Input
                  type="text"
                  id="shipping-state"
                  name="shipping-state"
                  placeholder="Please choose your state"
                  required
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="shipping-city">City</Label>
                <Input
                  type="text"
                  id="shipping-city"
                  name="shipping-city"
                  placeholder="Please enter your city"
                  required
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="shipping-postcode">Postcode</Label>
                <Input
                  type="text"
                  id="shipping-postcode"
                  name="shipping-postcode"
                  placeholder="Please enter your postcode"
                  required
                />
              </Fieldset>
            </AddressGrid>
          </ShippingSection>
          <DeliverySection className="container">
            <h2>Delivery Method</h2>
            <DeliveryMethods>
              <DeliveryMethodButton
                onClick={(e) => {
                  setDeliveryMethod('LALAMOVE');
                  localStorage.setItem('deliveryMethod', 'lalamove');
                }}
                isSelected={deliveryMethod === 'LALAMOVE'}
                type="button"
              >
                <Radio isSelected={deliveryMethod === 'LALAMOVE'} />
                <img src="/img/checkout/lalamove.png" alt="Lalamove logo" />
                <div className="delivery-method-btn__text">
                  <span>Lalamove</span>
                  <span>Est Arrival: 1-2 days</span>
                </div>
              </DeliveryMethodButton>
              <DeliveryMethodButton
                onClick={(e) => {
                  setDeliveryMethod('POSLAJU');
                  localStorage.setItem('deliveryMethod', 'poslaju');
                }}
                isSelected={deliveryMethod === 'POSLAJU'}
                type="button"
              >
                <Radio isSelected={deliveryMethod === 'POSLAJU'} />
                <img src="/img/checkout/poslaju.png" alt="Poslaju logo" />
                <div className="delivery-method-btn__text">
                  <span>Poslaju</span>
                  <span>Est Arrival: 2-3 days</span>
                </div>
              </DeliveryMethodButton>
            </DeliveryMethods>
          </DeliverySection>
          <PaymentSection className="container">
            <h2>Payment Method</h2>
            <PaymentMethods>
              <PaymentMethodButton
                onClick={(e) => {
                  setPaymentMethod('CARD');
                  localStorage.setItem('paymentMethod', 'card');
                }}
                isSelected={paymentMethod === 'CARD'}
                type="button"
              >
                <Radio isSelected={paymentMethod === 'CARD'} />
                <img src="/img/checkout/card.svg" alt="Card icon" />
                Pay with Card
              </PaymentMethodButton>
              <PaymentMethodButton
                onClick={(e) => {
                  setPaymentMethod('CASH');
                  localStorage.setItem('paymentMethod', 'cash');
                }}
                isSelected={paymentMethod === 'CASH'}
                type="button"
              >
                <Radio isSelected={paymentMethod === 'CASH'} />
                <img src="/img/checkout/cash.svg" alt="Cash icon" />
                Cash on Delivery
              </PaymentMethodButton>
            </PaymentMethods>
          </PaymentSection>
          <OrderSummarySection className="container">
            <h2>Review Your Order</h2>
            <hr
              style={{
                borderTop: '1px solid rgb(0 0 0 / 10%)',
                borderBottom: 'none',
                marginBottom: 30,
              }}
            />
            <div className="order-summary-section-container">
              <OrderSummaryLeft>
                <p>Total {totalItems} items</p>
                {cartItems.map((item) => {
                  let quantity;
                  cart?.map((c) => {
                    if (c.id === item.id.toString()) {
                      quantity = c.quantity;
                    }
                  });

                  return (
                    <ItemRow key={`${item.id}itemRow`}>
                      <div>
                        {quantity} &times; {item.name}
                      </div>
                      <div>RM {item.price.toFixed(2)}</div>
                    </ItemRow>
                  );
                })}
                <hr
                  style={{
                    borderTop: '1px solid rgb(0 0 0 / 10%)',
                    borderBottom: 'none',
                    margin: '30px 0 30px 0',
                  }}
                />
                <ItemRow>
                  <div>Delivery Method</div>
                  <div>
                    {deliveryMethod === 'LALAMOVE' ? 'Lalamove' : 'Poslaju'}
                  </div>
                </ItemRow>
                <ItemRow>
                  <div>Payment Method</div>
                  <div>
                    {paymentMethod === 'CARD'
                      ? 'Pay with Card'
                      : 'Cash on Delivery'}
                  </div>
                </ItemRow>
              </OrderSummaryLeft>
              <StyledOrderSummary>
                <h2 className="order-summary__title">Confirmation</h2>
                <div className="order-summary__subtotal">
                  <div>Subtotal</div>
                  <div>RM {totalPrice.toFixed(2)}</div>
                </div>
                <div className="order-summary__shipping-fee">
                  <div>Shipping Fee</div>
                  <div>Free</div>
                </div>
                <div className="order-summary__total">
                  <div>Amount to Pay</div>
                  <div>
                    <b>RM {totalPrice.toFixed(2)}</b>
                  </div>
                </div>
                <div className="order-summary__actions">
                  <Link href="/cart">
                    <a className="order-summary-cont-link">Back to Cart</a>
                  </Link>
                  <button
                    className="order-summary-checkout-btn btn--primary flex-center"
                  >
                    Pay Now
                  </button>
                </div>
              </StyledOrderSummary>
            </div>
          </OrderSummarySection>
        </Wrapper>
        <div className="breadcrumb container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <img
            className="breadcrumb__arrow"
            src="img/breadcrumb-arrow.svg"
            alt="Right Arrow >"
          />
          <span>Checkout</span>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};

export default CheckoutPage;
