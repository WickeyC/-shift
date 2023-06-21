import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import ShippingStatus from '../../../../components/dashboard/ShippingStatus';

import { useAuth } from '../../../../context/AuthUserContext';

const StatusPage: React.FC = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  const { orderNo } = router.query;

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push('/account');
  }, [authUser, loading]);

  return (
    <>
      <Head>
        <title>Shipping Status - Shift</title>
      </Head>
      <Header />
      <main>
        {loading || !authUser ? (
          <div className="lds-ripple"><div></div><div></div></div>
        ) : (
          <ShippingStatus orderNo={orderNo as string} />
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
          <span>Shipping Status</span>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StatusPage;
