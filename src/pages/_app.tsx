import '../styles/flickity.min.css';
import '../styles/global.css';
import '../styles/careers.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import LiveChat from '../components/LiveChat';

import { AuthUserProvider } from '../context/AuthUserContext';
import { OrdersProvider } from '../context/OrdersContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.svg" />
      </Head>
      <AuthUserProvider>
        <OrdersProvider>
          <Toaster />
          <Component {...pageProps} />
        </OrdersProvider>        
      </AuthUserProvider>
      <LiveChat />
    </>
  );
}

export default MyApp;
