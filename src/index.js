import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import JustAThobber from 'just-a-throbber';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Fragment>
      <JustAThobber throbberType='theBeat' />
      <App />
    </Fragment>
  </React.StrictMode>
);
