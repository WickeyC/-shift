import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { useAuth } from '../../context/AuthUserContext';
import { useOrders } from '../../context/OrdersContext';
import { Fade } from 'react-awesome-reveal';

const StyledDashboard = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 40px;
  }

  h1 {
    color: #37383c;
    font-size: 28px;
    font-weight: 500;
    margin: 0;
  }

  section {
    background-color: #f9f9f9;
    padding: 40px 0;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
    color: #141418;
  }
`;

const Button = styled.button`
  background-color: #fff;
  font-size: 15px;
  border-radius: 20px;
  padding: 10px 20px;
  height: 40px;
  border: 1px solid #37383c;
  position: relative;
  overflow: hidden;

  span {
    color: #37383c;
    position: relative;
    z-index: 1;
    transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-101%, -50%) scaleY(1.1);
    width: 100%;
    height: 100%;
    background-color: #37383c;
    transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
  }

  &:hover {
    span {
      color: #fff;
    }

    &::before {
      transform: translate(0, -50%);
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 24px;
`;

const Sidebar = styled.aside`
  grid-column: 1 / 3;
  background-color: #fff;
  height: 144px;

  ul {
    margin: 0;
  }
  ul li {
    display: flex;
    align-items: center;
    height: 48px;
    padding-left: 12px;
    img {
      margin-right: 6px;
    }
  }
  ul a:nth-child(2) li {
    color: #006aff;
    background-color: #f2f9ff;
  }
  ul a li {
    color: #242933;
  }
`;

const Content = styled.div`
  grid-column: 3 / 12;
  background-color: #fff;
  padding: 25px 35px 100px 35px;
  position: relative;
  margin-bottom: 120px;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  a {
    width: 23px;
    height: 23px;
    border-radius: 5px;
    background-color: #ebf0f3;
    margin-right: 15px;
    transition: 0.3s background-color;
    svg path {
      transition: 0.3s fill;
    }

    &:hover {
      background-color: #006aff;
    }
    &:hover svg path {
      fill: #fff;
    }
  }
`;

const OrderBox = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0 18px 0;

  h3 {
    margin: 20px 0 0 0;
    color: #37383c;
    font-weight: 500;
  }
`;

const Stepper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 30px 50px 30px;
  max-width: 700px;
  margin: auto;
  position: relative;

  .stepper__step {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    position: relative;
    .stepper__step-icon {
      display: flex;
      box-shadow: 0px 8px 16px 0px rgba(218, 225, 233, 0.56);
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: #fff;
      margin-bottom: 20px;
      position: relative;
      img {
        width: 36px;
        height: 36px;
        object-fit: contain;
      }
      .finish {
        bottom: 2px;
        position: absolute;
        left: 0px;
      }
      .processing {
        bottom: 2px;
        position: absolute;
        left: 0px;
      }
    }
    .stepper__step-text {
      color: #141418;
      margin-bottom: 6px;
    }
    .stepper__step-date {
      color: #656565;
      font-size: 12px;
    }
  }
  .stepper__line {
    position: absolute;
    top: 49px;
    left: 52px;
    right: 52px;
    height: 1px;
    border: 1px dashed #dadada;
  }
`;

const TimelineContainer = styled.div`
  margin-bottom: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 25px 0;

  p {
    color: #37383c;
    margin: 0px;
    &:first-child {
      margin-bottom: 10px;
    }
  }

  img {
    width: 80px;
    height: 25px;
    object-fit: contain;
  }
`;

const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 40px 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  color: #656565;

  .dot-line {
    grid-column: 2 / 3;
    grid-row: 1 / 7;
    position: relative;
    div {
      width: 1px;
      top: 12px;
      bottom: 22px;
      left: 6px;
      position: absolute;
      background-color: #c7cedb;
    }
  }
  .tl-date,
  .dot-container,
  .tl-des {
    height: 35px;
    display: flex;
    align-items: center;
  }
  .dot {
    width: 13px;
    height: 13px;
    background-color: #c7cedb;
    border-radius: 50%;
  }
`;

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    margin-right: 20px;
  }

  .itemrow-text p {
    margin: 0;
    &:first-child {
      font-weight: 500;
      color: #000;
    }
  }

  .itemrow-price {
    margin-left: auto;
  }
`;

const Summary = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 15px 0px rgba(167, 189, 202, 0.25);
  background-color: #fff;
  padding: 25px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 360px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &.paid {
    font-weight: 700;
    & span:last-child {
      color: #4284fb;
    }
  }
`;

const ShippingStatus: React.FC<{
  orderNo: string;
}> = ({ orderNo }) => {
  const { authUser, signOut } = useAuth();
  const { orders, setOrders } = useOrders();

  console.log(orders);

  const order = orders.find((ord) => ord.orderNo == orderNo);

  let totalPrice = 0;
  order.cartItems.map((item: any) => {
    totalPrice += item.totalPrice;
  });

  const orderDate = new Date(parseInt(orderNo));
  const tomorrow = new Date(parseInt(orderNo));
  tomorrow.setDate(tomorrow.getDate() + 1);
  const esokEsok = new Date(parseInt(orderNo));
  esokEsok.setDate(esokEsok.getDate() + 2);

  return (
    <StyledDashboard>
      <header className="container">
        <h1>My Account</h1>
        <Button onClick={signOut}>
          <span>Sign out</span>
        </Button>
      </header>
      <section>
        <Wrapper className="container">
          <Sidebar>
            <ul>
              <Link href="/account/dashboard">
                <a>
                  <li>
                    <svg
                      style={{ marginRight: '6px' }}
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.50302 2.4079H1.88235V7.22198H6.50302V2.4079ZM1 1.48862V8.14127H7.38537V1.48862H1Z"
                        fill="#242933"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.50302 10.2666H1.88235V15.0807H6.50302V10.2666ZM1 9.34735V16H7.38537V9.34735H1Z"
                        fill="#242933"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.994 2.30007L9.23587 5.17368L11.994 8.04728L14.7522 5.17368L11.994 2.30007ZM7.98804 5.17368L11.994 9.34735L16 5.17368L11.994 1L7.98804 5.17368Z"
                        fill="#242933"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.3073 10.2666H9.68667V15.0807H14.3073V10.2666ZM8.80432 9.34735V16H15.1897V9.34735H8.80432Z"
                        fill="#242933"
                      />
                    </svg>
                    Dashboard
                  </li>
                </a>
              </Link>
              <Link href="/account/orders">
                <a>
                  <li>
                    <svg
                      style={{ marginRight: '6px' }}
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.60002 3.00001C3.60002 2.66864 3.86866 2.40001 4.20002 2.40001H10.903C11.0621 2.40001 11.2147 2.46323 11.3272 2.57575L14.2243 5.4728C14.3368 5.58533 14.4 5.73794 14.4 5.89706V15C14.4 15.3313 14.1313 15.6 13.8 15.6H4.20002C3.86866 15.6 3.60002 15.3313 3.60002 15V3.00001ZM4.20002 1.20001C3.20591 1.20001 2.40002 2.0059 2.40002 3.00001V15C2.40002 15.9941 3.20591 16.8 4.20002 16.8H13.8C14.7941 16.8 15.6 15.9941 15.6 15V5.89706C15.6 5.41968 15.4104 4.96184 15.0729 4.62427L12.1757 1.72722C11.8382 1.38966 11.3804 1.20001 10.903 1.20001H4.20002ZM5.40002 4.80001C5.06866 4.80001 4.80002 5.06864 4.80002 5.40001C4.80002 5.73138 5.06866 6.00001 5.40002 6.00001H9.00002C9.33139 6.00001 9.60002 5.73138 9.60002 5.40001C9.60002 5.06864 9.33139 4.80001 9.00002 4.80001H5.40002ZM5.40002 8.40001C5.06866 8.40001 4.80002 8.66864 4.80002 9.00001C4.80002 9.33138 5.06866 9.60001 5.40002 9.60001H12.6C12.9313 9.60001 13.2 9.33138 13.2 9.00001C13.2 8.66864 12.9313 8.40001 12.6 8.40001H5.40002ZM5.40002 12C5.06866 12 4.80002 12.2687 4.80002 12.6C4.80002 12.9313 5.06866 13.2 5.40002 13.2H12.6C12.9313 13.2 13.2 12.9313 13.2 12.6C13.2 12.2687 12.9313 12 12.6 12H5.40002Z"
                        fill="#006AFF"
                      />
                    </svg>
                    Orders
                  </li>
                </a>
              </Link>
              <Link href="/account/addresses">
                <a>
                  <li>
                    <svg
                      style={{ marginRight: '6px' }}
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1C7.40929 1.00195 5.88427 1.65091 4.75946 2.80452C3.63466 3.95814 3.00191 5.52221 3 7.15366C3 11.0563 8.3484 16.586 8.5752 16.8198C8.68772 16.9352 8.8403 17 8.9994 17C9.1585 17 9.31108 16.9352 9.4236 16.8198C9.6504 16.586 15 11.0563 15 7.15366C14.9981 5.52221 14.3653 3.95814 13.2405 2.80452C12.1157 1.65091 10.5907 1.00195 9 1ZM9 4.99988C9.41534 4.99988 9.82135 5.1262 10.1667 5.36286C10.512 5.59952 10.7812 5.93589 10.9401 6.32944C11.0991 6.723 11.1407 7.15605 11.0597 7.57384C10.9786 7.99163 10.7786 8.3754 10.4849 8.67661C10.1912 8.97782 9.81705 9.18295 9.40969 9.26606C9.00233 9.34916 8.58009 9.30651 8.19637 9.14349C7.81264 8.98048 7.48466 8.70442 7.25391 8.35024C7.02316 7.99605 6.9 7.57964 6.9 7.15366C6.90032 6.58232 7.12159 6.03443 7.51528 5.6302C7.90897 5.22596 8.44292 4.9984 9 4.99742V4.99988Z"
                        fill="#242933"
                      />
                    </svg>
                    Addresses
                  </li>
                </a>
              </Link>
            </ul>
          </Sidebar>
          <Content>
            <ContentHeader>
              <Link href="/account/orders">
                <a className="flex-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                      fill="#141418"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </Link>
              <h2>Shipping Status</h2>
            </ContentHeader>
            <Stepper>
              <div className="stepper__step">
                <div className="stepper__step-icon flex-center">
                  <img src="/img/account/paid.svg" alt="Paid Icon" />
                  <svg
                    className="finish"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="15" height="15" rx="7.5" fill="#48D781" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.88031 5.2361C10.0537 5.34944 10.1023 5.58185 9.98897 5.75519L7.43896 9.6552C7.37887 9.74712 7.28151 9.80802 7.17258 9.82194C7.06365 9.83586 6.9541 9.8013 6.87285 9.72744L5.22285 8.22744C5.0696 8.08813 5.05831 7.85096 5.19762 7.69772C5.33694 7.54447 5.5741 7.53317 5.72735 7.67249L7.05192 8.87664L9.36125 5.34475C9.47459 5.17141 9.70697 5.12277 9.88031 5.2361Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="stepper__step-text">Paid</div>
                <div className="stepper__step-date">
                  {orderDate.toLocaleDateString()} {orderDate.getHours()}:
                  {orderDate.getMinutes()}
                </div>
              </div>
              <div className="stepper__step">
                <div className="stepper__step-icon stepper__step-icon--finish flex-center">
                  <img src="/img/account/packed.svg" alt="Packed Icon" />
                  <svg
                    className="finish"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="15" height="15" rx="7.5" fill="#48D781" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.88031 5.2361C10.0537 5.34944 10.1023 5.58185 9.98897 5.75519L7.43896 9.6552C7.37887 9.74712 7.28151 9.80802 7.17258 9.82194C7.06365 9.83586 6.9541 9.8013 6.87285 9.72744L5.22285 8.22744C5.0696 8.08813 5.05831 7.85096 5.19762 7.69772C5.33694 7.54447 5.5741 7.53317 5.72735 7.67249L7.05192 8.87664L9.36125 5.34475C9.47459 5.17141 9.70697 5.12277 9.88031 5.2361Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="stepper__step-text">Packed</div>
                <div className="stepper__step-date">
                  {tomorrow.toLocaleDateString()} 11:30
                </div>
              </div>
              <div className="stepper__step">
                <div className="stepper__step-icon stepper__step-icon--finish flex-center">
                  <img
                    src="/img/account/in-delivery.svg"
                    alt="In Delivery Icon"
                  />
                  <svg
                    className="processing"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="15" height="15" rx="7.5" fill="#2CDFD4" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.14202 7.37805C4.14202 9.20459 5.46634 10.4488 6.95346 10.7063C7.12363 10.7358 7.23769 10.8976 7.20823 11.0678C7.17876 11.238 7.01692 11.3521 6.84675 11.3226C5.09975 11.0201 3.5166 9.54761 3.5166 7.37805C3.5166 6.45604 3.93607 5.73146 4.42593 5.18025C4.77684 4.7854 5.1783 4.4648 5.50117 4.2192H4.51933C4.35364 4.2192 4.21933 4.08489 4.21933 3.9192C4.21933 3.75352 4.35364 3.6192 4.51933 3.6192H6.31933C6.48501 3.6192 6.61933 3.75352 6.61933 3.9192V5.7192C6.61933 5.88489 6.48501 6.0192 6.31933 6.0192C6.15364 6.0192 6.01933 5.88489 6.01933 5.7192V4.61186L6.01842 4.61254L6.01837 4.61259L6.01836 4.61259H6.01836C5.67547 4.8712 5.25645 5.18722 4.89342 5.59571C4.46471 6.07812 4.14202 6.66091 4.14202 7.37805ZM10.8066 7.62192C10.8066 5.81468 9.5104 4.57775 8.0424 4.30216C7.87266 4.2703 7.76089 4.10686 7.79275 3.93712C7.82462 3.76738 7.98805 3.65561 8.15779 3.68748C9.88234 4.01124 11.432 5.47562 11.432 7.62192C11.432 8.54392 11.0126 9.26849 10.5227 9.81971C10.1718 10.2146 9.77032 10.5352 9.44746 10.7808H10.4294C10.595 10.7808 10.7294 10.9151 10.7294 11.0808C10.7294 11.2465 10.595 11.3808 10.4294 11.3808H8.62933C8.46364 11.3808 8.32933 11.2465 8.32933 11.0808V9.28079C8.32933 9.11507 8.46364 8.98077 8.62933 8.98077C8.79501 8.98077 8.92933 9.11507 8.92933 9.28079V10.3881L8.93027 10.3874C9.27316 10.1288 9.6922 9.81275 10.0552 9.40427C10.484 8.92185 10.8066 8.33905 10.8066 7.62192Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="stepper__step-text">In Delivery</div>
                <div className="stepper__step-date">
                  {tomorrow.toLocaleDateString()} 18:00
                </div>
              </div>
              <div className="stepper__step">
                <div className="stepper__step-icon stepper__step-icon--finish flex-center">
                  <img src="/img/account/delivered.svg" alt="Delivered Icon" />
                </div>
                <div
                  className="stepper__step-text"
                  style={{ color: '#93939B' }}
                >
                  Delivered
                </div>
              </div>
              <div className="stepper__line"></div>
            </Stepper>
            <TimelineContainer>
              <TimelineHeader>
                <div>
                  <p>Order No: {orderNo}</p>
                  <p>Tracking No: 38267382693</p>
                </div>
                <div>
                  {order.deliveryMethod === 'lalamove' ? (
                    <img src="/img/checkout/lalamove.png" alt="Lalamove" />
                  ) : (
                    <img src="/img/checkout/poslaju.png" alt="Poslaju" />
                  )}
                </div>
              </TimelineHeader>
              <TimelineGrid>
                <div className="dot-line">
                  <div></div>
                </div>

                <div
                  className="tl-date"
                  style={{
                    gridColumn: '1 / 2',
                    gridRow: '1 / 2',
                    color: '#0E0E0E',
                  }}
                >
                  {esokEsok.toLocaleDateString()} 07:05
                </div>
                <div
                  className="dot-container"
                  style={{ gridColumn: '2 / 3', gridRow: '1 / 2' }}
                >
                  <div
                    className="dot"
                    style={{ zIndex: 1, backgroundColor: '#4284FB' }}
                  ></div>
                </div>
                <div
                  className="tl-des"
                  style={{
                    gridColumn: '3 / 4',
                    gridRow: '1 / 2',
                    color: '#0E0E0E',
                  }}
                >
                  Parcel is out for delivery
                </div>

                <div
                  className="tl-date"
                  style={{
                    gridColumn: '1 / 2',
                    gridRow: '2 / 3',
                  }}
                >
                  {esokEsok.toLocaleDateString()} 01.19
                </div>
                <div
                  className="dot-container"
                  style={{
                    gridColumn: '2 / 3',
                    gridRow: '2 / 3',
                  }}
                >
                  <div className="dot"></div>
                </div>
                <div
                  className="tl-des"
                  style={{
                    gridColumn: '3 / 4',
                    gridRow: '2 / 3',
                  }}
                >
                  Arrived at Distribution Center
                </div>

                <div
                  className="tl-date"
                  style={{
                    gridColumn: '1 / 2',
                    gridRow: '3 / 4',
                  }}
                >
                  {tomorrow.toLocaleDateString()} 19.53
                </div>
                <div
                  className="dot-container"
                  style={{
                    gridColumn: '2 / 3',
                    gridRow: '3 / 4',
                  }}
                >
                  <div className="dot"></div>
                </div>
                <div
                  className="tl-des"
                  style={{
                    gridColumn: '3 / 4',
                    gridRow: '3 / 4',
                  }}
                >
                  Parcel has departed from station SKE02
                </div>

                <div
                  className="tl-date"
                  style={{
                    gridColumn: '1 / 2',
                    gridRow: '4 / 5',
                  }}
                >
                  {tomorrow.toLocaleDateString()} 18:00
                </div>
                <div
                  className="dot-container"
                  style={{
                    gridColumn: '2 / 3',
                    gridRow: '4 / 5',
                  }}
                >
                  <div className="dot"></div>
                </div>
                <div
                  className="tl-des"
                  style={{
                    gridColumn: '3 / 4',
                    gridRow: '4 / 5',
                  }}
                >
                  Parcel has been picked up by courier
                </div>

                <div
                  className="tl-date"
                  style={{
                    gridColumn: '1 / 2',
                    gridRow: '5 / 6',
                  }}
                >
                  {tomorrow.toLocaleDateString()} 11:30
                </div>
                <div
                  className="dot-container"
                  style={{
                    gridColumn: '2 / 3',
                    gridRow: '5 / 6',
                  }}
                >
                  <div className="dot"></div>
                </div>
                <div
                  className="tl-des"
                  style={{
                    gridColumn: '3 / 4',
                    gridRow: '5 / 6',
                  }}
                >
                  We are preparing to ship your parcel
                </div>

                <div
                  className="tl-date"
                  style={{
                    gridColumn: '1 / 2',
                    gridRow: '6 / 7',
                  }}
                >
                  {orderDate.toLocaleDateString()} {orderDate.getHours()}:
                  {orderDate.getMinutes()}
                </div>
                <div
                  className="dot-container"
                  style={{
                    gridColumn: '2 / 3',
                    gridRow: '6 / 7',
                  }}
                >
                  <div className="dot"></div>
                </div>
                <div
                  className="tl-des"
                  style={{
                    gridColumn: '3 / 4',
                    gridRow: '6 / 7',
                  }}
                >
                  Payment received and order is recorded
                </div>
              </TimelineGrid>
            </TimelineContainer>
            <OrderBox>
              <OrderHeader>
                <h3>Ordered Items</h3>
              </OrderHeader>
              {order.cartItems.map((item: any, itemIdx: number) => (
                <ItemRow key={`ItemRow-${itemIdx}`}>
                  <img src={item.imgSrc} alt={item.name} />
                  <div className="itemrow-text">
                    <p>{item.name}</p>
                    <p>x{item.quantity}</p>
                  </div>
                  <div className="itemrow-price">
                    RM {item.totalPrice.toFixed(2)}
                  </div>
                </ItemRow>
              ))}
            </OrderBox>
            <Fade
              direction="up"
              style={{ position: 'absolute', right: '35px', bottom: '-100px' }}
            >
              <Summary>
                <SummaryRow>
                  <span>Subtotal</span>
                  <span>RM {totalPrice.toFixed(2)}</span>
                </SummaryRow>
                <SummaryRow>
                  <span>Shipping Fee</span>
                  <span>Free</span>
                </SummaryRow>
                <SummaryRow className="paid">
                  <span>Total Paid</span>
                  <span>RM {totalPrice.toFixed(2)}</span>
                </SummaryRow>
                <SummaryRow>
                  <span>Payment Method</span>
                  <span>
                    {order.paymentMethod === 'card'
                      ? 'Credit Card'
                      : 'Cash on Delivery'}
                  </span>
                </SummaryRow>
              </Summary>
            </Fade>
          </Content>
        </Wrapper>
      </section>
    </StyledDashboard>
  );
};

export default ShippingStatus;
