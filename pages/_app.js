import '../styles/globals.scss';
import '../styles/globals.css';

import Head from 'next/head';

import { Provider } from 'react-redux';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import burgers from '../reducers/burgers';

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';




const reducers = combineReducers({ burgers });

const persistConfig = { key: 'burgers', storage };


const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});


const persistor = persistStore(store);


function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>BURGER | Les meilleurs burgers de Paris</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
