import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import toast from 'react-hot-toast';
import firebase from '../firebase/firebase';
import 'firebase/firestore';
const firestore = firebase.firestore();

import { useAuth } from '../context/AuthUserContext';
import { CartType } from '../firebase/useFirebaseAuth';

const StyledProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgb(229 229 229 / 25%);
  padding: 27px 22px;

  img {
    max-width: 150px;
    height: 150px;
    width: 100%;
    margin: auto;
    display: block;
    margin-bottom: 32px;
    transition: transform ease 0.8s;
    object-fit: contain;
  }

  a:hover {
    img {
      transform: scale(1.1);
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #242933;
  }

  .prod-item-label {
    margin-bottom: 30px;
    span {
      font-size: 14px;
      background-color: #e4eeff;
      color: #4382ff;
      padding: 3px 8px;
      :not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .prod-item-bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .prod-item-price {
    color: #2c72ff;
    display: flex;
    flex-direction: column;
    font-size: 16px;

    span:last-child {
      text-decoration: line-through;
      color: #8da1ca;
      font-size: 14px;
    }
  }

  button {
    height: 40px;
    width: 110px;
    color: #fff;
    text-align: center;
    border-radius: 5px;

    background-color: rgb(38, 132, 255);
    border-radius: 5px;
    color: rgb(255, 255, 255);
    transition: background-color 0.2s ease-out 0s, box-shadow 0.2s ease-out 0s;
    position: relative;
    overflow: hidden;

    border: none;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    appearance: none;

    &:hover {
      background-color: #006aff;
      box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 12%);
    }
  }
`;

type ProductCardProps = {
  id: number;
  imgSrc: string;
  name: string;
  labels: string[];
  price: number;
  originalPrice: number | null;
};

const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  name,
  labels,
  price,
  originalPrice,
  id,
}) => {
  const { authUser, loading, cart, setCart } = useAuth();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!authUser && !loading) {
      toast(
        (t) => (
          <span>
            Oops, you haven't logged in. <br />
            Please{' '}
            <Link href="/account">
              <a>
                <b style={{color: "#4284FB"}}>log in</b>
              </a>
            </Link>{' '}
            to add items to cart.
          </span>
        ),
        {
          icon: (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          ),
          style: {
            borderRadius: '10px',
            background: '#323B4E',
            color: '#fff',
          },
        }
      );
    } else {
      const existingCartItem = cart?.find((c) => c.id === id.toString());
      if (existingCartItem) {
        if (existingCartItem.quantity >= 10) {
          toast(
            <span>
              Oops, maximum quantity is 10. <br />
              Please{' '}
              <Link href="/contact">
                <a>
                  <b>contact us</b>
                </a>
              </Link>{' '}
              for more information.
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
        } else {
          toast.promise(
            firestore
              .collection(`users/${authUser?.uid}/cart`)
              .doc(id.toString())
              .set({
                quantity: existingCartItem.quantity + 1,
              })
              .then(() => {
                if (cart) {
                  setCart(
                    cart?.map((c) => {
                      if (c.id === id.toString()) {
                        return {
                          quantity: c.quantity + 1,
                          id: c.id,
                        };
                      }
                      return c;
                    })
                  );
                }
              }),
            {
              loading: `Adding ${name} to Cart...`,
              success: <b>Added!</b>,
              error: <b>Could not save.</b>,
            }
          );
        }
      } else {
        toast.promise(
          firestore
            .collection(`users/${authUser?.uid}/cart`)
            .doc(id.toString())
            .set({
              quantity: 1,
            })
            .then(() => {
              if (cart) {
                setCart([
                  ...cart,
                  { id: id.toString(), quantity: 1 },
                ] as CartType);
              }
            }),
          {
            loading: `Adding ${name} to Cart...`,
            success: <b>Added!</b>,
            error: <b>Could not save.</b>,
          }
        );
      }
    }
  };

  return (
    <StyledProductCard id={name.replace(/\s+/g, '-').toLowerCase()}>
      <a href={imgSrc} title="View Image" target="_blank" rel="noreferrer">
        <img src={imgSrc} alt={name} />
      </a>
      <h2>{name}</h2>
      <div className="prod-item-label">
        {labels.map((label, i) => (
          <span key={`prod-item-label-${i}`}>{label}</span>
        ))}
      </div>
      <div className="prod-item-bottom-row">
        <div className="prod-item-price">
          <span>RM{price}</span>
          <span>RM{originalPrice}</span>
        </div>
        <button type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
