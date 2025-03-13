import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/src/store';
import '@/styles/scss/custom.scss';
import Navbar from '@/components/common/NavBar';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Provider store={store}>
      <Head>
        <title>DreamJob | Land the job of your Dreams</title>
        <meta name="description" content="DreamJob is a job board platform that connects skilled professionals with top employers." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
