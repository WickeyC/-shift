import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Login } from '../../components/Login';
import { Signup } from '../../components/Signup';

import { useAuth } from '../../context/AuthUserContext';

const StyledMain = styled.main`
  section {
    background-image: url('/img/account/account-bg.png');
    background-size: contain;
    background-attachment: fixed;
  }
`;

const Container = styled.div`
  max-width: 500px;
  width: 90%;
  margin: auto;
  padding: 70px 0;
  color: #141418;
`;

const AccountPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleSwitchToSignup = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowLogin(false);
  };

  const handleSwitchToLogin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowLogin(true);
  };

  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && authUser) router.push('/account/dashboard');
  }, [authUser, loading]);

  return (
    <>
      <Head>
        <title>Account - Shift</title>
      </Head>
      <Header />
      <StyledMain>
        <section>
          <div className="container">
            <Container>
              {!loading && !authUser ? (
                showLogin ? (
                  <Login handleSwitchToSignup={handleSwitchToSignup} />
                ) : (
                  <Signup handleSwitchToLogin={handleSwitchToLogin} />
                )
              ) : (
                <div className="lds-ripple">
                  <div></div>
                  <div></div>
                </div>
              )}
            </Container>
          </div>
        </section>
        <div className="breadcrumb container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <img
            className="breadcrumb__arrow"
            src="img/breadcrumb-arrow.svg"
            alt="Right Arrow >"
          />
          <span>Account</span>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};

export default AccountPage;
