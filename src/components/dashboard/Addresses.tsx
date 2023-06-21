import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AddressTable from './AddressTable';

import { useAuth } from '../../context/AuthUserContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

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
    margin-bottom: 36px;
    color: #141418;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 25px;
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
  ul a:nth-child(3) li {
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
  padding: 25px 35px;
`;

const AddAddressBtn = styled.button`
  width: 145px;
  height: 50px;
  border: 1px solid #006aff;
  transition: all 0.3s;
  font-size: 15px;

  &:hover {
    background-color: rgb(255 255 255);
    color: #006aff;
  }
`;

const AddressModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    padding: 40px;
    border: 1px solid #888;
    width: 90%;
    max-width: 580px;
    position: relative;
    border-radius: 10px;
  }

  /* The Close Button */
  .close {
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover,
    &:focus {
      cursor: pointer;
    }
  }
`;

const AddressForm = styled.form`
  & > div:first-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  fieldset {
    padding: 0;
    margin: 0;
    border: none;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    display: flex;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid;
    margin-bottom: 10px;
    border: 1px solid rgb(147, 163, 184);
    outline: none;
    padding: 0px 10px;
    line-height: 32px;
    &:focus {
      border: 1px solid rgb(44, 138, 253);
    }
  }
`;

const AddressActions = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 30px;
  button {
    border-radius: 5px;
    height: 35px;
    width: 80px;
    &:last-child {
      background-color: #006aff;
      color: #fff;
    }
  }
`;

const Addresses: React.FC = () => {
  const [showAddressModal, setShowAddressModal] = useState<boolean>();
  const { authUser, signOut } = useAuth();
  const modalRef = useRef<any>(null);

  const [addresses, setAddresses] = useState(() => {
    const saved = localStorage.getItem("addresses");
    const initialValue = JSON.parse(saved as string);
    return initialValue || [];
  });
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [addressState, setAddressState] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const openAddressModal = () => {
    setShowAddressModal(true);
  };

  useOnClickOutside(modalRef, () => setShowAddressModal(false));

  const handleAddressSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddresses([...addresses, {
      id: Date.now(),
      name,
      phoneNumber,
      address,
      state: addressState,
      city,
      postcode
    }]);
    setShowAddressModal(false);
  };

  const deleteAddress = (id: string) => {
    setAddresses(addresses.filter((addr: any) => addr.id != id));
  };

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.50302 2.4079H1.88235V7.22198H6.50302V2.4079ZM1 1.48862V8.14127H7.38537V1.48862H1Z"
                        fill="#242933"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.50302 10.2666H1.88235V15.0807H6.50302V10.2666ZM1 9.34735V16H7.38537V9.34735H1Z"
                        fill="#242933"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.994 2.30007L9.23587 5.17368L11.994 8.04728L14.7522 5.17368L11.994 2.30007ZM7.98804 5.17368L11.994 9.34735L16 5.17368L11.994 1L7.98804 5.17368Z"
                        fill="#242933"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.60002 3.00001C3.60002 2.66864 3.86866 2.40001 4.20002 2.40001H10.903C11.0621 2.40001 11.2147 2.46323 11.3272 2.57575L14.2243 5.4728C14.3368 5.58533 14.4 5.73794 14.4 5.89706V15C14.4 15.3313 14.1313 15.6 13.8 15.6H4.20002C3.86866 15.6 3.60002 15.3313 3.60002 15V3.00001ZM4.20002 1.20001C3.20591 1.20001 2.40002 2.0059 2.40002 3.00001V15C2.40002 15.9941 3.20591 16.8 4.20002 16.8H13.8C14.7941 16.8 15.6 15.9941 15.6 15V5.89706C15.6 5.41968 15.4104 4.96184 15.0729 4.62427L12.1757 1.72722C11.8382 1.38966 11.3804 1.20001 10.903 1.20001H4.20002ZM5.40002 4.80001C5.06866 4.80001 4.80002 5.06864 4.80002 5.40001C4.80002 5.73138 5.06866 6.00001 5.40002 6.00001H9.00002C9.33139 6.00001 9.60002 5.73138 9.60002 5.40001C9.60002 5.06864 9.33139 4.80001 9.00002 4.80001H5.40002ZM5.40002 8.40001C5.06866 8.40001 4.80002 8.66864 4.80002 9.00001C4.80002 9.33138 5.06866 9.60001 5.40002 9.60001H12.6C12.9313 9.60001 13.2 9.33138 13.2 9.00001C13.2 8.66864 12.9313 8.40001 12.6 8.40001H5.40002ZM5.40002 12C5.06866 12 4.80002 12.2687 4.80002 12.6C4.80002 12.9313 5.06866 13.2 5.40002 13.2H12.6C12.9313 13.2 13.2 12.9313 13.2 12.6C13.2 12.2687 12.9313 12 12.6 12H5.40002Z"
                        fill="#242933"
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
                        fill="#006AFF"
                      />
                    </svg>
                    Addresses
                  </li>
                </a>
              </Link>
            </ul>
          </Sidebar>
          <Content>
            <h2>My Addresses</h2>
            {addresses.length > 0 && <AddressTable deleteAddress={deleteAddress} addresses={addresses} />}
            <AddAddressBtn
              onClick={openAddressModal}
              type="button"
              className="btn--primary"
            >
              + Add Address
            </AddAddressBtn>
            {showAddressModal && (
              <AddressModal>
                <div className="modal-content" ref={modalRef}>
                  <span
                    className="close"
                    onClick={() => {
                      setShowAddressModal(false);
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="1.56518"
                        height="12.5215"
                        rx="0.782591"
                        transform="matrix(0.7088 -0.70541 0.7088 0.70541 0 1.10449)"
                        fill="#000000"
                      />
                      <rect
                        width="1.56518"
                        height="12.5215"
                        rx="0.782591"
                        transform="matrix(0.7088 0.70541 -0.7088 0.70541 8.89062 0.0634766)"
                        fill="#000000"
                      />
                    </svg>
                  </span>

                  <AddressForm onSubmit={handleAddressSubmit}>
                    <div>
                      <fieldset>
                        <label htmlFor="shipping-name">Your Name</label>
                        <input
                          onChange={(e) => {
                            setName(e.target.value);                            
                          }}
                          value={name}
                          type="text"
                          id="shipping-name"
                          name="shipping-name"
                          placeholder="e.g. John Doe"                          
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor="shipping-phone-number">
                          Phone Number
                        </label>
                        <input
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);                            
                          }}
                          value={phoneNumber}
                          type="tel"
                          id="shipping-phone-number"
                          name="shipping-phone-number"
                          placeholder="e.g. 0123456789"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor="shipping-street-address">
                          Street Address
                        </label>
                        <input
                          onChange={(e) => {
                            setAddress(e.target.value);                            
                          }}
                          value={address}
                          type="text"
                          id="shipping-street-address"
                          name="shipping-street-address"
                          placeholder="Please enter your address"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor="shipping-state">State</label>
                        <input
                          onChange={(e) => {
                            setAddressState(e.target.value);                            
                          }}
                          value={addressState}
                          type="text"
                          id="shipping-state"
                          name="shipping-state"
                          placeholder="Please choose your state"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor="shipping-city">City</label>
                        <input
                          onChange={(e) => {
                            setCity(e.target.value);                            
                          }}
                          value={city}
                          type="text"
                          id="shipping-city"
                          name="shipping-city"
                          placeholder="Please enter your city"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor="shipping-postcode">Postcode</label>
                        <input
                          onChange={(e) => {
                            setPostcode(e.target.value);                            
                          }}
                          value={postcode}
                          type="text"
                          id="shipping-postcode"
                          name="shipping-postcode"
                          placeholder="Please enter your postcode"
                          required
                        />
                      </fieldset>
                    </div>
                    <AddressActions>
                      <button
                        type="button"
                        onClick={() => {
                          setShowAddressModal(false);
                        }}
                      >
                        Cancel
                      </button>
                      <button type="submit">Save</button>
                    </AddressActions>
                  </AddressForm>
                </div>
              </AddressModal>
            )}
          </Content>
        </Wrapper>
      </section>
    </StyledDashboard>
  );
};

export default Addresses;
