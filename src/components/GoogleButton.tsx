import React from 'react';
import router from 'next/router';
import styled from 'styled-components';

import firebase from 'firebase';

const StyledGoogleButton = styled.button`
  background-color: #1c5ff6;
  color: #fff;
  border: none;
  width: 263px;
  height: 47px;
  border-radius: 25px;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  align-items: center;
  padding: 4px;
  transition: box-shadow 0.3s ease;
  margin: auto;

  &:hover {
    box-shadow: 0 1px 7px rgb(155, 167, 236);
    span svg {
      transform: translateX(8px);
      opacity: 1;
    }
  }

  span {
    text-align: center;
    flex: 1;
    margin-left: -5px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      transform: translateX(5px);
      opacity: 0;
      transition: all 0.3s ease;
      path {
        fill: #fff;
      }
    }
  }
`;

const GoogleButton: React.FC = () => {
  return (
    <StyledGoogleButton
        onClick={() => {
          const provider = new firebase.auth.GoogleAuthProvider();

          firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
              const credential: any = result.credential;
              const token = credential.accessToken;
              const user = result.user;
              console.log('Google Sign In');
              console.log(user, token);            
              router.push('/account/dashboard');
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.email;
              const credential = error.credential;

              alert(errorMessage);
            });
        }}
        type="submit"
      >
        <svg
          width="40"
          height="39"
          viewBox="0 0 40 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="20" cy="19.5" rx="20" ry="19.5" fill="white" />
          <g clipPath="url(#clip0)">
            <path
              d="M32.8571 20.5003C32.8571 19.6008 32.7848 18.6964 32.6306 17.8115H20.2578V22.907H27.3431C27.0491 24.5504 26.1044 26.0041 24.7211 26.9279V30.2341H28.9481C31.4304 27.9295 32.8571 24.5261 32.8571 20.5003Z"
              fill="#4285F4"
            />
            <path
              d="M20.2572 33.428C23.795 33.428 26.7786 32.2563 28.9523 30.2336L24.7253 26.9274C23.5492 27.7345 22.0309 28.1916 20.262 28.1916C16.8399 28.1916 13.9383 25.8626 12.8972 22.7314H8.53516V26.1398C10.762 30.608 15.2975 33.428 20.2572 33.428Z"
              fill="#34A853"
            />
            <path
              d="M12.8922 22.7314C12.3428 21.0881 12.3428 19.3085 12.8922 17.6652V14.2568H8.53502C6.67453 17.9958 6.67453 22.4008 8.53502 26.1398L12.8922 22.7314Z"
              fill="#FBBC04"
            />
            <path
              d="M20.2572 12.2002C22.1273 12.1711 23.9348 12.8809 25.2892 14.184L29.0343 10.4061C26.6629 8.15985 23.5155 6.92489 20.2572 6.96378C15.2975 6.96378 10.762 9.78379 8.53516 14.2569L12.8924 17.6652C13.9286 14.5292 16.8351 12.2002 20.2572 12.2002Z"
              fill="#EA4335"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="25.7143"
                height="26.4643"
                fill="white"
                transform="translate(7.14258 6.96387)"
              />
            </clipPath>
          </defs>
        </svg>
        <span>
          Continue with Google
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="#0070F3"
            />
          </svg>
        </span>
      </StyledGoogleButton>
  );
};

export default GoogleButton;