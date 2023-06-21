import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Dashboard from '../../components/dashboard/Dashboard';

import { useAuth } from '../../context/AuthUserContext';

const DashboardPage: React.FC = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push('/account');
  }, [authUser, loading]);

  return (
    <>
      <Head>
        <title>Dashboard - Shift</title>
      </Head>
      <Header />
      <main>
        {loading || !authUser ? (
          <div className="lds-ripple"><div></div><div></div></div>
        ) : (
          <Dashboard />
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
          <span>Dashboard</span>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DashboardPage;
