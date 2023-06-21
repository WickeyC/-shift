import React from 'react';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import firestore from '../../firebase/firestore';

import { useAuth } from '../../context/AuthUserContext';
import { CartType } from '../../firebase/useFirebaseAuth';

const StyledQuantityInput = styled.div`
  display: flex;
  width: 88px;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  button {
    display: flex;
    padding: 0;
    background-color: #fff;

    &:disabled {
      cursor: not-allowed;
      svg {
        circle {
          stroke: #a3a3a3;
        }
        rect {
          fill: #a3a3a3;
        }
      }
    }
  }

  input[type='number'] {
    text-align: center;
    font-size: 15px;
    width: 30px;
    border: 1px solid #fff;
    -moz-appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const QuantityInput: React.FC<{
  id: number;
  quantity: number;
}> = (props) => {
  const { authUser, cart, setCart } = useAuth();

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    toast.promise(
      firestore
        .collection(`users/${authUser?.uid}/cart`)
        .doc(props.id.toString())
        .set({
          quantity: props.quantity - 1,
        })
        .then(() => {
          if (cart) {
            setCart(
              cart?.map((c) => {
                if (c.id === props.id.toString()) {
                  return {
                    quantity: c.quantity - 1,
                    id: c.id,
                  };
                }
                return c;
              })
            );
          }
        }),
      {
        loading: `Updating Quantity...`,
        success: <b>Updated!</b>,
        error: <b>Could not update.</b>,
      }
    );
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    if (value > 10) {
      value = 10;
    }

    if (e.target.value.length > 1 && value < 10) {
      e.target.value = e.target.value.slice(0, 1);
    }

    setCart(cart?.map(c => {
      if (c.id === props.id.toString()) {
        return {
          ...c,
          quantity: value,
        }
      }
      return c;
    }) as CartType);
  };

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.quantity < 10) {
      toast.promise(
        firestore
          .collection(`users/${authUser?.uid}/cart`)
          .doc(props.id.toString())
          .set({
            quantity: props.quantity + 1,
          })
          .then(() => {
            if (cart) {
              setCart(
                cart?.map((c) => {
                  if (c.id === props.id.toString()) {
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
          loading: `Updating Quantity...`,
          success: <b>Updated!</b>,
          error: <b>Could not update.</b>,
        }
      );
    }
  };

  return (
    <StyledQuantityInput>
      <button onClick={handleDecrement} type="button" disabled={props.quantity === 1 || props.quantity === 0}>
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9.5" cy="9.5" r="9" stroke="black" />
          <rect x="5" y="9" width="9" height="1" fill="black" />
        </svg>
      </button>
      <input
        onChange={handleQuantityChange}
        onBlur={(e) => {
          if (e.target.value == '0') {
            setCart(cart?.map(c => {
              if (c.id === props.id.toString()) {
                return {
                  ...c,
                  quantity: 1,
                }
              }
              return c;
            }) as CartType);
            toast.promise(
              firestore
                .collection(`users/${authUser?.uid}/cart`)
                .doc(props.id.toString())
                .set({
                  quantity: 1,
                })
                .then(() => {}),
              {
                loading: `Updating Quantity...`,
                success: <b>Updated!</b>,
                error: <b>Could not update.</b>,
              }
            );
          } else {
            toast.promise(
              firestore
                .collection(`users/${authUser?.uid}/cart`)
                .doc(props.id.toString())
                .set({
                  quantity: props.quantity,
                })
                .then(() => {
                  if (cart) {
                    setCart(
                      cart?.map((c) => {
                        if (c.id === props.id.toString()) {
                          return {
                            quantity: c.quantity,
                            id: c.id,
                          };
                        }
                        return c;
                      })
                    );
                  }
                }),
              {
                loading: `Updating Quantity...`,
                success: <b>Updated!</b>,
                error: <b>Could not update.</b>,
              }
            );
          }
        }}
        type="number"
        min="1"
        max="10"
        value={props.quantity}
        autoComplete="off"
        maxLength={2}
      />
      <button onClick={handleIncrement} type="button" disabled={props.quantity === 10}>
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9.5" cy="9.5" r="9" stroke="black" />
          <rect x="5" y="9" width="9" height="1" fill="black" />
          <rect x="9" y="5" width="1" height="9" fill="black" />
        </svg>
      </button>
    </StyledQuantityInput>
  );
};

export default QuantityInput;
