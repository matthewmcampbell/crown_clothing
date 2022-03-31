import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from "./store/store"
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';
import GlobalStyle from "./global.styles";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <BrowserRouter>
            <Elements stripe={stripePromise}>
                <App />
            </Elements>
          </BrowserRouter>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
