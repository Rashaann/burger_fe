import '../styles/globals.scss';
import '../styles/globals.css';

import Head from 'next/head';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import burgers from '../reducers/burgers';


const store = configureStore({
  reducer: { burgers },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>BURGER | Les meilleurs burgers de Paris</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
