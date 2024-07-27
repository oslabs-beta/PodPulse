import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import JustAThobber from 'just-a-throbber';
import store from './store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Fragment>
        <JustAThobber throbberType='theBeat' />
        <App />
      </Fragment>
    </React.StrictMode>
  </Provider>
);
