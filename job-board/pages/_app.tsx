import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/src/store';
import '@/styles/scss/custom.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
