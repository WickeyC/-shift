import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Orders from '../../../components/dashboard/Orders';

import { useAuth } from '../../../context/AuthUserContext';

const OrderPage: React.FC = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push('/account');
  }, [authUser, loading]);

  return (
    <>
      <Head>
        <title>Orders - Shift</title>
      </Head>
      <Header />
      <main>
        {loading || !authUser ? (
          <div className="lds-ripple"><div></div><div></div></div>
        ) : (
          <Orders />
        )}
        <div className="breadcrumb container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <img
            className="breadcrumb__arrow"
            src="/img/breadcrumb-arrow.svg"
            alt="Right Arrow >"
          />
          <span>Orders</span>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderPage;
